"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { createSupabaseClient } from "@/lib/supabase-auth"

type MembershipStatus = {
  tier: string
  status: string
  isActive: boolean
  loading: boolean
  error: string | null
}

const MembershipContext = createContext<MembershipStatus>({
  tier: "public",
  status: "inactive",
  isActive: false,
  loading: true,
  error: null,
})

export function MembershipProvider({ children }: { children: ReactNode }) {
  const [membership, setMembership] = useState<MembershipStatus>({
    tier: "public",
    status: "inactive",
    isActive: false,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let isMounted = true
    console.log("MembershipProvider: Initializing")

    const fetchMembership = async () => {
      try {
        const supabase = createSupabaseClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          if (isMounted) {
            console.log("MembershipProvider: No user found")
            setMembership({
              tier: "public",
              status: "inactive",
              isActive: false,
              loading: false,
              error: null,
            })
          }
          return
        }

        console.log("MembershipProvider: User found, fetching profile", user.id)
        const { data, error } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status, membership_expiry")
          .eq("id", user.id)
          .single()

        if (error) {
          console.error("MembershipProvider: Error fetching profile", error)
          if (isMounted) {
            setMembership((prev) => ({ ...prev, loading: false, error: error.message }))
          }
          return
        }

        if (!data) {
          console.log("MembershipProvider: No profile data found")
          if (isMounted) {
            setMembership({
              tier: "public",
              status: "inactive",
              isActive: false,
              loading: false,
              error: null,
            })
          }
          return
        }

        console.log("MembershipProvider: Profile data", data)
        const isActive = data.membership_status?.toLowerCase() === "active"

        if (isMounted) {
          setMembership({
            tier: data.membership_tier || "public",
            status: data.membership_status || "inactive",
            isActive,
            loading: false,
            error: null,
          })
        }
      } catch (err: any) {
        console.error("MembershipProvider: Unexpected error", err)
        if (isMounted) {
          setMembership((prev) => ({
            ...prev,
            loading: false,
            error: err?.message || "Failed to fetch membership data",
          }))
        }
      }
    }

    fetchMembership()

    // Set up real-time subscription with better error handling
    let channel: any = null

    const setupSubscription = async () => {
      try {
        const supabase = createSupabaseClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        console.log("MembershipProvider: Setting up real-time subscription for", user.id)
        channel = supabase
          .channel(`profile-changes-${user.id}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "profiles",
              filter: `id=eq.${user.id}`,
            },
            (payload) => {
              console.log("MembershipProvider: Received profile update", payload)
              if (!isMounted) return

              const data = payload.new
              const isActive = data.membership_status?.toLowerCase() === "active"

              setMembership({
                tier: data.membership_tier || "public",
                status: data.membership_status || "inactive",
                isActive,
                loading: false,
                error: null,
              })
            },
          )
          .subscribe((status) => {
            console.log("MembershipProvider: Subscription status", status)
          })
      } catch (err) {
        console.error("MembershipProvider: Error setting up subscription", err)
      }
    }

    setupSubscription()

    // Force refresh every 30 seconds as a fallback
    const intervalId = setInterval(() => {
      console.log("MembershipProvider: Performing periodic refresh")
      fetchMembership()
    }, 30000)

    return () => {
      console.log("MembershipProvider: Cleaning up")
      isMounted = false
      clearInterval(intervalId)
      if (channel) {
        const supabase = createSupabaseClient()
        supabase.removeChannel(channel)
      }
    }
  }, [])

  return <MembershipContext.Provider value={membership}>{children}</MembershipContext.Provider>
}

export const useMembership = () => useContext(MembershipContext)

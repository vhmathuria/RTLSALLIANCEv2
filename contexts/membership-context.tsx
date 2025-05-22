"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { createSupabaseClient } from "@/lib/supabase-auth"

type MembershipStatus = {
  tier: string
  status: string
  isActive: boolean
  loading: boolean
}

const MembershipContext = createContext<MembershipStatus>({
  tier: "public",
  status: "inactive",
  isActive: false,
  loading: true,
})

export function MembershipProvider({ children }: { children: ReactNode }) {
  const [membership, setMembership] = useState<MembershipStatus>({
    tier: "public",
    status: "inactive",
    isActive: false,
    loading: true,
  })

  useEffect(() => {
    const fetchMembership = async () => {
      const supabase = createSupabaseClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setMembership({
          tier: "public",
          status: "inactive",
          isActive: false,
          loading: false,
        })
        return
      }

      const { data } = await supabase
        .from("profiles")
        .select("membership_tier, membership_status, membership_expiry")
        .eq("id", user.id)
        .single()

      if (!data) {
        setMembership({
          tier: "public",
          status: "inactive",
          isActive: false,
          loading: false,
        })
        return
      }

      const isActive = data.membership_status?.toLowerCase() === "active"

      setMembership({
        tier: data.membership_tier || "public",
        status: data.membership_status || "inactive",
        isActive,
        loading: false,
      })
    }

    fetchMembership()

    // Set up real-time subscription
    const supabase = createSupabaseClient()

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return

      const channel = supabase
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
            const data = payload.new
            const isActive = data.membership_status?.toLowerCase() === "active"

            setMembership({
              tier: data.membership_tier || "public",
              status: data.membership_status || "inactive",
              isActive,
              loading: false,
            })
          },
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    })
  }, [])

  return <MembershipContext.Provider value={membership}>{children}</MembershipContext.Provider>
}

export const useMembership = () => useContext(MembershipContext)

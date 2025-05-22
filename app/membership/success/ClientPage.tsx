"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { createSupabaseClient } from "@/lib/supabase-auth"

export default function ClientPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = createSupabaseClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        // If user is not logged in, redirect to login
        if (!user) {
          window.location.href = `/login?redirectTo=/membership/success?session_id=${searchParams.session_id}&from=client-page`
          return
        }

        setUser(user)

        // Get user profile to display current membership
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status")
          .eq("id", user.id)
          .single()

        if (profileError) {
          console.error("Error fetching profile:", profileError)
          setError("Failed to load profile data")
        } else {
          setProfile(profile)
        }
      } catch (err) {
        console.error("Error in fetchData:", err)
        setError("An unexpected error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchParams.session_id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-center mb-4">Something went wrong</h1>
              <p className="text-center text-red-600 mb-6">{error}</p>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link href="/membership">Return to Membership</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Format membership tier for display
  const formatMembershipTier = (tier: string) => {
    if (!tier || tier === "unknown") return "Unknown"
    return tier.charAt(0).toUpperCase() + tier.slice(1)
  }

  const membershipTier = profile?.membership_tier || "unknown"

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center mb-2">Payment Successful!</h1>
            <p className="text-center text-gray-600 mb-6">
              Thank you for upgrading to {formatMembershipTier(membershipTier)} membership! Your account has been
              successfully updated.
            </p>

            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/account">View Your Account</Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/resources">Browse Member Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

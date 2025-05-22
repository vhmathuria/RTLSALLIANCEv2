"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { createSupabaseClient } from "@/lib/supabase-auth"

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const supabase = createSupabaseClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      // If user is not logged in, redirect to login
      if (!user) {
        window.location.href = "/login?redirectTo=/membership"
        return
      }

      setUser(user)

      // Get user profile to display current membership
      const { data: profile } = await supabase
        .from("profiles")
        .select("membership_tier, membership_status")
        .eq("id", user.id)
        .single()

      setProfile(profile)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  // Get session ID from URL
  const sessionId = searchParams.session_id

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

            {sessionId ? (
              <div className="text-center">
                <p className="text-gray-600 mb-4">Processing your membership upgrade...</p>
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600 mb-6">
                Thank you for upgrading to {formatMembershipTier(membershipTier)} membership! Your account has been
                successfully updated.
              </p>
            )}

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

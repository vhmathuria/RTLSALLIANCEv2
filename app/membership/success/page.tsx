import { redirect } from "next/navigation"
import Link from "next/link"
import { createServerClient } from "@/lib/supabase-server"
import { verifyAndUpdateMembershipFromSession } from "@/lib/membership-actions"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Payment Successful - RTLS Alliance",
  description: "Your membership upgrade was successful",
}

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  // Check if user is logged in
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is not logged in, redirect to login
  if (!user) {
    redirect("/login?redirectTo=/membership")
  }

  // Get session ID from URL
  const sessionId = searchParams.session_id

  let membershipTier = "unknown"
  let verificationError = null

  // If session ID is provided, verify and update membership
  if (sessionId) {
    const result = await verifyAndUpdateMembershipFromSession(sessionId)
    if (result.success) {
      membershipTier = result.tier || "unknown"
    } else {
      verificationError = result.error
      console.error("Error verifying payment:", result.error)
    }
  }

  // Get user profile to display current membership
  const { data: profile } = await supabase
    .from("profiles")
    .select("membership_tier, membership_status")
    .eq("id", user.id)
    .single()

  // If verification failed but profile shows active membership, use that
  if (verificationError && profile?.membership_status?.toUpperCase() === "ACTIVE") {
    membershipTier = profile.membership_tier || "unknown"
    verificationError = null
  }

  // Format membership tier for display
  const formatMembershipTier = (tier: string) => {
    if (!tier || tier === "unknown") return "Unknown"
    return tier.charAt(0).toUpperCase() + tier.slice(1)
  }

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

            {verificationError ? (
              <div className="mb-6">
                <p className="text-center text-amber-600 mb-4">
                  Your payment was processed, but we encountered an issue updating your membership status.
                </p>
                <p className="text-center text-gray-600 mb-4">
                  Don't worry! Our system will automatically update your membership shortly. If your membership isn't
                  updated within 15 minutes, please contact support.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-4">
                  <p className="text-sm text-amber-800">Error details: {verificationError}</p>
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

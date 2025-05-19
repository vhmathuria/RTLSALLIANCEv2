import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default async function MembershipSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  // Verify the user is logged in
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?redirectTo=/membership")
  }

  // Get the user's profile to check membership status
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("membership_tier, membership_status, membership_expiry, last_payment_date")
    .eq("id", user.id)
    .single()

  const membershipActive = profile?.membership_status === "active"
  const membershipTier = profile?.membership_tier || "public"
  const lastPaymentDate = profile?.last_payment_date
    ? new Date(profile.last_payment_date).toLocaleDateString()
    : "Not recorded"
  const expiryDate = profile?.membership_expiry
    ? new Date(profile.membership_expiry).toLocaleDateString()
    : "Not recorded"

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Membership Status</h1>

        {membershipActive ? (
          <Alert className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <AlertTitle className="text-green-800 text-lg mb-2">Membership Upgraded Successfully!</AlertTitle>
            <AlertDescription className="text-green-700">
              <p className="mb-4">Thank you for upgrading your RTLS Alliance membership!</p>
              <div className="bg-white p-4 rounded border border-green-100 mb-4">
                <h3 className="font-medium text-gray-800 mb-2">Membership Details:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Tier:</span>{" "}
                    {membershipTier.charAt(0).toUpperCase() + membershipTier.slice(1)}
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> Active
                  </li>
                  <li>
                    <span className="font-medium">Last Payment:</span> {lastPaymentDate}
                  </li>
                  <li>
                    <span className="font-medium">Expiry Date:</span> {expiryDate}
                  </li>
                </ul>
              </div>
              <p>Your account has been upgraded and you now have access to exclusive members-only content.</p>
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            <AlertTitle className="text-yellow-800 text-lg mb-2">Payment Received, Membership Pending</AlertTitle>
            <AlertDescription className="text-yellow-700">
              <p className="mb-4">We've received your payment, but your membership status hasn't been updated yet.</p>
              <div className="bg-white p-4 rounded border border-yellow-100 mb-4">
                <h3 className="font-medium text-gray-800 mb-2">Current Status:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Tier:</span>{" "}
                    {membershipTier.charAt(0).toUpperCase() + membershipTier.slice(1)}
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> {profile?.membership_status || "Inactive"}
                  </li>
                  <li>
                    <span className="font-medium">Last Payment:</span> {lastPaymentDate}
                  </li>
                </ul>
              </div>
              <p>
                This may take a few moments to process. Please refresh this page or check your account page in a few
                minutes.
              </p>
            </AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/resources">Explore Resources</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/account">View Account</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/membership/success" className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh Status
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

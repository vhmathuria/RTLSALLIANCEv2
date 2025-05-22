import { redirect } from "next/navigation"
import { verifyAndUpdateMembershipFromSession } from "@/lib/membership-actions"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default async function MembershipSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const sessionId = searchParams.session_id as string

  if (!sessionId) {
    redirect("/membership")
  }

  // Verify and update membership
  const result = await verifyAndUpdateMembershipFromSession(sessionId)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {result.success ? (
          <>
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Membership Upgraded Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for upgrading to our {result.tier} membership. Your account has been updated and you now have
              access to all {result.tier} features.
            </p>
            <div className="space-y-4">
              <Link href="/resources">
                <Button className="w-full">Explore Resources</Button>
              </Link>
              <Link href="/account">
                <Button variant="outline" className="w-full">
                  View Account
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We couldn't verify your payment. Please contact support if you believe this is an error.
            </p>
            <div className="space-y-4">
              <Link href="/membership">
                <Button className="w-full">Return to Membership</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

import { createClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CreditCard, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Manage Subscription - RTLS Alliance",
  description: "Manage your RTLS Alliance membership subscription",
}

export default async function ManagePage() {
  const supabase = await createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/auth?redirectTo=/membership/manage")
  }

  // Get user profile with membership details
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (!profile) {
    redirect("/account")
  }

  const membershipTier = profile.membership_tier || "public"
  const membershipStatus = profile.membership_status || "inactive"
  const membershipExpiry = profile.membership_expiry

  // Helper function to get membership badge
  const getMembershipBadge = () => {
    const tierConfig = {
      public: { label: "Public", color: "bg-gray-100 text-gray-800" },
      student: { label: "Student", color: "bg-blue-100 text-blue-800" },
      professional: { label: "Professional", color: "bg-purple-100 text-purple-800" },
      corporate: { label: "Corporate", color: "bg-green-100 text-green-800" },
    }

    const config = tierConfig[membershipTier as keyof typeof tierConfig] || tierConfig.public

    return <Badge className={config.color}>{config.label} Membership</Badge>
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/account" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Account
            </Link>
            <h1 className="text-3xl font-bold">Manage Subscription</h1>
            <p className="text-gray-600 mt-2">View and manage your RTLS Alliance membership subscription</p>
          </div>

          {/* Current Membership Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="h-5 w-5" />
                Current Membership
              </CardTitle>
              <CardDescription>Your current membership details and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Membership Type:</span>
                  {getMembershipBadge()}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium">Status:</span>
                  <Badge
                    className={
                      membershipStatus === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }
                  >
                    {membershipStatus === "active" ? "Active" : "Inactive"}
                  </Badge>
                </div>

                {membershipExpiry && (
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Expires:</span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      {new Date(membershipExpiry).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {profile.stripe_customer_id && (
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Customer ID:</span>
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <CreditCard className="h-4 w-4" />
                      {profile.stripe_customer_id.substring(0, 12)}...
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription Actions</CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {membershipTier === "public" ? (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Upgrade Your Membership</h4>
                    <p className="text-blue-700 mb-4">
                      You currently have a free public account. Upgrade to access premium content and features.
                    </p>
                    <Button asChild>
                      <Link href="/membership/upgrade">View Membership Options</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Active Subscription</h4>
                      <p className="text-green-700 mb-4">
                        Your {membershipTier} membership is currently active.
                        {membershipExpiry && ` It will renew on ${new Date(membershipExpiry).toLocaleDateString()}.`}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="outline" asChild>
                        <Link href="/membership/upgrade">Change Plan</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Contact Support</Link>
                      </Button>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-gray-600 mb-4">
                    If you have questions about your subscription or need to make changes, our support team is here to
                    help.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

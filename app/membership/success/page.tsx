import { redirect } from "next/navigation"
import Link from "next/link"
import { supabase, getUserProfile } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Stripe from "stripe"

export const dynamic = "force-dynamic"

export default async function MembershipSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id

  if (!sessionId) {
    redirect("/membership")
  }

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If no user is found, redirect to login
  if (!user) {
    redirect(`/login?redirectTo=/membership/success?session_id=${sessionId}`)
  }

  // Get the user's profile
  const profile = await getUserProfile(user.id)

  // Initialize Stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  })

  // Verify the checkout session
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.status !== "complete") {
      return (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Not Complete</h1>

            <p className="text-gray-600 mb-6">
              Your payment has not been completed. Please try again or contact support if you believe this is an error.
            </p>

            <div className="space-y-4">
              <Link href="/membership/upgrade">
                <Button className="w-full">Try Again</Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )
    }

    // Get the subscription
    if (session.subscription) {
      const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

      // Get membership tier from metadata or price ID
      let membershipTier = session.metadata?.membership_tier || "public"

      if (!membershipTier) {
        const priceId = subscription.items.data[0]?.price.id

        if (priceId === process.env.STRIPE_STUDENT_PRICE_ID) {
          membershipTier = "student"
        } else if (priceId === process.env.STRIPE_PROFESSIONAL_PRICE_ID) {
          membershipTier = "professional"
        } else if (priceId === process.env.STRIPE_CORPORATE_PRICE_ID) {
          membershipTier = "corporate"
        }
      }

      // Calculate expiry date
      const expiryDate = new Date(subscription.current_period_end * 1000)

      // Update the user's profile
      await supabase
        .from("profiles")
        .update({
          membership_tier: membershipTier,
          membership_status: "active",
          membership_expiry: expiryDate.toISOString(),
          last_payment_date: new Date().toISOString(),
          stripe_customer_id: session.customer as string,
        })
        .eq("id", user.id)
    }

    // Get the updated profile
    const updatedProfile = await getUserProfile(user.id)

    // Format membership tier for display
    const formatMembershipTier = (tier: string) => {
      if (!tier) return "Public"
      return tier.charAt(0).toUpperCase() + tier.slice(1)
    }

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Membership Upgraded Successfully!</h1>

          <p className="text-gray-600 mb-6">
            Thank you for upgrading to our {formatMembershipTier(updatedProfile?.membership_tier)} membership. Your
            account has been updated and you now have access to all{" "}
            {formatMembershipTier(updatedProfile?.membership_tier)} features.
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
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error verifying checkout session:", error)

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something Went Wrong</h1>

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
        </div>
      </div>
    )
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"
import Stripe from "stripe"
import { updateMembership } from "@/lib/membership-actions"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// Webhook endpoint for Stripe events
export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature") as string

  let event: Stripe.Event

  try {
    // Verify the event came from Stripe
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session

      // Ensure this is a subscription checkout
      if (session.mode === "subscription" && session.subscription) {
        // Get the subscription details
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

        // Get the user ID from metadata
        const userId = session.metadata?.user_id || subscription.metadata?.user_id

        if (!userId) {
          return NextResponse.json({ error: "User ID not found in metadata" }, { status: 400 })
        }

        // Get the membership tier from metadata
        const membershipTier =
          session.metadata?.membership_tier || subscription.metadata?.membership_tier || "professional"

        // Calculate expiry date
        const expiryDate = new Date(subscription.current_period_end * 1000)

        // Update the user's membership in Supabase
        const result = await updateMembership(userId, membershipTier, subscription.id, expiryDate)

        if (!result.success) {
          // If the server action fails, try a direct database update
          const supabase = createClient()

          await supabase
            .from("profiles")
            .update({
              membership_tier: membershipTier,
              membership_status: "active",
              membership_expiry: expiryDate.toISOString(),
              last_payment_date: new Date().toISOString(),
              stripe_subscription_id: subscription.id,
              stripe_customer_id: subscription.customer,
            })
            .eq("id", userId)
        }
      }
      break

    case "invoice.payment_succeeded":
      // Handle subscription renewals
      const invoice = event.data.object as Stripe.Invoice

      if (invoice.subscription) {
        const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string)

        // Get the user ID from metadata
        const userId = subscription.metadata?.user_id

        if (userId) {
          // Get the membership tier from metadata
          const membershipTier = subscription.metadata?.membership_tier || "professional"

          // Calculate new expiry date
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update the user's membership in Supabase
          await updateMembership(userId, membershipTier, subscription.id, expiryDate)
        }
      }
      break

    case "customer.subscription.deleted":
      // Handle subscription cancellations
      const canceledSubscription = event.data.object as Stripe.Subscription

      // Get the user ID from metadata
      const canceledUserId = canceledSubscription.metadata?.user_id

      if (canceledUserId) {
        // Update the user's membership status in Supabase
        const supabase = createClient()

        await supabase
          .from("profiles")
          .update({
            membership_status: "canceled",
            membership_expiry: new Date(canceledSubscription.current_period_end * 1000).toISOString(),
          })
          .eq("id", canceledUserId)
      }
      break
  }

  return NextResponse.json({ received: true })
}

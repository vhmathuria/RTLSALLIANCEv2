import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@/lib/supabase-server"
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
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error: any) {
    console.error(`Webhook signature verification failed: ${error.message}`)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // Get user ID and membership tier from metadata
        const userId = session.metadata?.user_id
        const membershipTier = session.metadata?.membership_tier

        if (!userId || !membershipTier) {
          throw new Error("Missing user ID or membership tier in session metadata")
        }

        // Get subscription details
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

          // Calculate expiry date (end of current period)
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update user membership
          await updateMembership(userId, membershipTier, subscription.id, expiryDate)
        }

        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabase = createClient()
        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (!profile) {
          throw new Error("User profile not found")
        }

        // Get membership tier from subscription metadata or product
        let membershipTier = "public"

        if (subscription.metadata?.membership_tier) {
          membershipTier = subscription.metadata.membership_tier
        } else {
          // Try to determine tier from price ID
          const priceId = subscription.items.data[0]?.price.id

          if (priceId === process.env.STRIPE_STUDENT_PRICE_ID) {
            membershipTier = "student"
          } else if (priceId === process.env.STRIPE_PROFESSIONAL_PRICE_ID) {
            membershipTier = "professional"
          } else if (priceId === process.env.STRIPE_CORPORATE_PRICE_ID) {
            membershipTier = "corporate"
          }
        }

        // Calculate expiry date (end of current period)
        const expiryDate = new Date(subscription.current_period_end * 1000)

        // Update user membership
        await updateMembership(profile.id, membershipTier, subscription.id, expiryDate)

        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabase = createClient()
        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (!profile) {
          throw new Error("User profile not found")
        }

        // Downgrade user to public tier
        await supabase
          .from("profiles")
          .update({
            membership_tier: "public",
            membership_status: "inactive",
          })
          .eq("id", profile.id)

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error(`Webhook error: ${error.message}`)
    return NextResponse.json({ error: `Webhook handler failed: ${error.message}` }, { status: 500 })
  }
}

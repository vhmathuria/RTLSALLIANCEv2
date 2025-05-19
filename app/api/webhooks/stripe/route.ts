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

  console.log(`Processing Stripe webhook event: ${event.type}`)

  try {
    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.log(`Checkout session completed: ${session.id}`)

        // Get user ID and membership tier from metadata
        const userId = session.metadata?.user_id
        const membershipTier = session.metadata?.membership_tier

        if (!userId || !membershipTier) {
          console.error("Missing user ID or membership tier in session metadata", session.metadata)
          throw new Error("Missing user ID or membership tier in session metadata")
        }

        console.log(`Updating membership for user ${userId} to tier ${membershipTier}`)

        // Get subscription details
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
          console.log(`Retrieved subscription: ${subscription.id}`)

          // Calculate expiry date (end of current period)
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update user membership via server action
          const actionResult = await updateMembership(userId, membershipTier, subscription.id, expiryDate)
          console.log(`Server action result:`, actionResult)

          // Directly update the profile in case the server action fails
          const supabase = createClient()
          const { data, error } = await supabase
            .from("profiles")
            .update({
              membership_tier: membershipTier,
              membership_status: "active",
              membership_expiry: expiryDate.toISOString(),
              last_payment_date: new Date().toISOString(),
              stripe_subscription_id: subscription.id,
            })
            .eq("id", userId)
            .select()

          if (error) {
            console.error("Error updating profile in webhook:", error)
            throw new Error(`Failed to update profile: ${error.message}`)
          }

          console.log(`Profile updated successfully:`, data)
        } else {
          console.error("No subscription found in checkout session")
        }

        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        console.log(`Subscription updated: ${subscription.id}`)

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          console.error("Customer not found or deleted", subscription.customer)
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabase = createClient()
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (profileError || !profile) {
          console.error("User profile not found for customer ID:", customer.id, profileError)
          throw new Error("User profile not found")
        }

        console.log(`Found profile for customer ${customer.id}: ${profile.id}`)

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

        console.log(`Determined membership tier: ${membershipTier}`)

        // Calculate expiry date (end of current period)
        const expiryDate = new Date(subscription.current_period_end * 1000)

        // Update user membership via server action
        const actionResult = await updateMembership(profile.id, membershipTier, subscription.id, expiryDate)
        console.log(`Server action result:`, actionResult)

        // Directly update the profile in case the server action fails
        const { data, error } = await supabase
          .from("profiles")
          .update({
            membership_tier: membershipTier,
            membership_status: "active",
            membership_expiry: expiryDate.toISOString(),
            last_payment_date: new Date().toISOString(),
            stripe_subscription_id: subscription.id,
          })
          .eq("id", profile.id)
          .select()

        if (error) {
          console.error("Error updating profile in webhook:", error)
          throw new Error(`Failed to update profile: ${error.message}`)
        }

        console.log(`Profile updated successfully:`, data)

        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        console.log(`Subscription deleted: ${subscription.id}`)

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          console.error("Customer not found or deleted", subscription.customer)
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabase = createClient()
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (profileError || !profile) {
          console.error("User profile not found for customer ID:", customer.id, profileError)
          throw new Error("User profile not found")
        }

        console.log(`Found profile for customer ${customer.id}: ${profile.id}`)

        // Downgrade user to public tier
        const { data, error } = await supabase
          .from("profiles")
          .update({
            membership_tier: "public",
            membership_status: "inactive",
            stripe_subscription_id: null,
          })
          .eq("id", profile.id)
          .select()

        if (error) {
          console.error("Error updating profile in webhook:", error)
          throw new Error(`Failed to update profile: ${error.message}`)
        }

        console.log(`Profile downgraded successfully:`, data)

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error(`Webhook error: ${error.message}`, error)
    return NextResponse.json({ error: `Webhook handler failed: ${error.message}` }, { status: 500 })
  }
}

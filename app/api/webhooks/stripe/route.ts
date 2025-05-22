import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createAdminClient } from "@/lib/supabase-server-admin"
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
        console.log("Checkout session completed:", session.id)

        // Get user ID and membership tier from metadata
        const userId = session.metadata?.user_id
        const membershipTier = session.metadata?.membership_tier

        if (!userId || !membershipTier) {
          console.error("Missing user ID or membership tier in session metadata", { userId, membershipTier })
          throw new Error("Missing user ID or membership tier in session metadata")
        }

        // Get subscription details
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
          console.log("Retrieved subscription:", subscription.id)

          // Calculate expiry date (end of current period)
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update user membership using both methods for redundancy
          try {
            await updateMembership(userId, membershipTier, expiryDate)
            console.log("Updated membership via server action")
          } catch (serverActionError) {
            console.error("Server action failed, falling back to direct update:", serverActionError)
          }

          // Always perform direct update as a fallback - use admin client to bypass RLS
          const supabaseAdmin = createAdminClient()
          const { error: updateError } = await supabaseAdmin
            .from("profiles")
            .update({
              membership_tier: membershipTier,
              membership_status: "active", // Changed to lowercase
              membership_expiry: expiryDate.toISOString(),
              last_payment_date: new Date().toISOString(),
              stripe_customer_id: session.customer as string,
            })
            .eq("id", userId)

          if (updateError) {
            console.error("Error updating profile directly:", updateError)
            throw updateError
          }

          console.log("Profile updated successfully for user:", userId)

          try {
            // Attempt to revalidate paths
            await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate?path=/resources&path=/membership&path=/account`,
              {
                method: "POST",
              },
            )
            console.log("Revalidation triggered from webhook")
          } catch (revalidateError) {
            console.error("Failed to trigger revalidation:", revalidateError)
          }
        } else {
          console.error("No subscription found in session:", session.id)
        }

        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("Subscription updated:", subscription.id)

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          console.error("Customer not found or deleted:", subscription.customer)
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabaseAdmin = createAdminClient()
        const { data: profile, error: profileError } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (profileError || !profile) {
          console.error("User profile not found for customer:", customer.id, profileError)
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

        // Update user membership using both methods for redundancy
        try {
          await updateMembership(profile.id, membershipTier, expiryDate)
          console.log("Updated membership via server action for subscription update")
        } catch (serverActionError) {
          console.error(
            "Server action failed for subscription update, falling back to direct update:",
            serverActionError,
          )
        }

        // Always perform direct update as a fallback - use admin client to bypass RLS
        const { error: updateError } = await supabaseAdmin
          .from("profiles")
          .update({
            membership_tier: membershipTier,
            membership_status: "active", // Changed to lowercase
            membership_expiry: expiryDate.toISOString(),
            last_payment_date: new Date().toISOString(),
          })
          .eq("id", profile.id)

        if (updateError) {
          console.error("Error updating profile directly for subscription update:", updateError)
          throw updateError
        }

        console.log("Profile updated successfully for subscription update, user:", profile.id)

        try {
          // Attempt to revalidate paths
          await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate?path=/resources&path=/membership&path=/account`,
            {
              method: "POST",
            },
          )
          console.log("Revalidation triggered from webhook")
        } catch (revalidateError) {
          console.error("Failed to trigger revalidation:", revalidateError)
        }

        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("Subscription deleted:", subscription.id)

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          console.error("Customer not found or deleted for subscription deletion:", subscription.customer)
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabaseAdmin = createAdminClient()
        const { data: profile, error: profileError } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (profileError || !profile) {
          console.error("User profile not found for subscription deletion:", customer.id, profileError)
          throw new Error("User profile not found")
        }

        // Downgrade user to public tier
        const { error: updateError } = await supabaseAdmin
          .from("profiles")
          .update({
            membership_tier: "public",
            membership_status: "inactive", // Changed to lowercase
          })
          .eq("id", profile.id)

        if (updateError) {
          console.error("Error downgrading profile for subscription deletion:", updateError)
          throw updateError
        }

        console.log("Profile downgraded successfully for subscription deletion, user:", profile.id)

        try {
          // Attempt to revalidate paths
          await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate?path=/resources&path=/membership&path=/account`,
            {
              method: "POST",
            },
          )
          console.log("Revalidation triggered from webhook")
        } catch (revalidateError) {
          console.error("Failed to trigger revalidation:", revalidateError)
        }

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error(`Webhook error: ${error.message}`)
    return NextResponse.json({ error: `Webhook handler failed: ${error.message}` }, { status: 500 })
  }
}

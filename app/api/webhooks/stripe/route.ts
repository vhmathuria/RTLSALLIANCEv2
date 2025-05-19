import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Stripe from "stripe"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// This is your Stripe webhook secret for testing your endpoint locally.
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error: any) {
    console.error(`Webhook signature verification failed: ${error.message}`)
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const supabase = createRouteHandlerClient({ cookies })

  // Store the event in the database for audit purposes
  try {
    await supabase.from("stripe_events").insert({
      stripe_event_id: event.id,
      type: event.type,
      object: event.data.object,
    })
  } catch (error) {
    console.error("Error storing Stripe event:", error)
    // Continue processing even if storing the event fails
  }

  // Handle the event
  console.log(`Processing webhook event: ${event.type}`)

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // Update the stripe_session status
        await supabase.from("stripe_sessions").update({ status: "completed" }).eq("session_id", session.id)

        // Get the user ID and membership tier from metadata
        const userId = session.metadata?.user_id
        const membershipTier = session.metadata?.membership_tier

        if (!userId || !membershipTier) {
          console.error("Missing user_id or membership_tier in session metadata")
          return new NextResponse("Missing metadata", { status: 400 })
        }

        // Get subscription details
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

          // Calculate expiry date (end of current period)
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update user profile with membership details
          const { error: updateError } = await supabase
            .from("profiles")
            .update({
              membership_tier: membershipTier,
              membership_status: "active",
              membership_expiry: expiryDate.toISOString(),
              last_payment_date: new Date().toISOString(),
              stripe_subscription_id: subscription.id,
            })
            .eq("id", userId)

          if (updateError) {
            console.error("Error updating profile:", updateError)
            return new NextResponse("Error updating profile", { status: 500 })
          }

          // Verify the update was successful
          const { data: updatedProfile, error: verifyError } = await supabase
            .from("profiles")
            .select("membership_tier, membership_status, membership_expiry")
            .eq("id", userId)
            .single()

          if (verifyError || !updatedProfile) {
            console.error("Error verifying profile update:", verifyError)
          } else {
            console.log("Profile updated successfully:", updatedProfile)
          }
        }
        break
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice

        if (invoice.subscription) {
          const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string)

          // Get the user ID from the subscription metadata
          const userId = subscription.metadata?.user_id

          if (!userId) {
            console.error("Missing user_id in subscription metadata")
            return new NextResponse("Missing metadata", { status: 400 })
          }

          // Calculate expiry date (end of current period)
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update user profile with new expiry date and payment date
          const { error: updateError } = await supabase
            .from("profiles")
            .update({
              membership_status: "active",
              membership_expiry: expiryDate.toISOString(),
              last_payment_date: new Date().toISOString(),
            })
            .eq("id", userId)

          if (updateError) {
            console.error("Error updating profile:", updateError)
            return new NextResponse("Error updating profile", { status: 500 })
          }
        }
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription

        // Get the user ID from the subscription metadata
        const userId = subscription.metadata?.user_id

        if (!userId) {
          // Try to find the user by subscription ID
          const { data: profiles } = await supabase
            .from("profiles")
            .select("id")
            .eq("stripe_subscription_id", subscription.id)

          if (profiles && profiles.length > 0) {
            const userId = profiles[0].id

            // Update user profile to inactive
            await supabase
              .from("profiles")
              .update({
                membership_status: "inactive",
              })
              .eq("id", userId)
          } else {
            console.error("Could not find user for subscription:", subscription.id)
          }
        } else {
          // Update user profile to inactive
          await supabase
            .from("profiles")
            .update({
              membership_status: "inactive",
            })
            .eq("id", userId)
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new NextResponse("Webhook processed successfully", { status: 200 })
  } catch (error: any) {
    console.error(`Error processing webhook: ${error.message}`)
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 })
  }
}

"use server"

import Stripe from "stripe"
import { createAdminClient } from "@/lib/supabase-server-admin"

// Server action for verifying and updating membership
export async function verifyAndUpdateMembership(sessionId: string | undefined, userId: string) {
  if (!sessionId) {
    return { success: false, tier: "unknown", error: "No session ID provided" }
  }

  try {
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-10-16",
    })

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription"],
    })

    if (!session || session.status !== "complete") {
      console.error("Session not complete:", session?.status)
      return { success: false, tier: "unknown", error: "Payment not completed" }
    }

    const membershipTier = session.metadata?.membership_tier

    if (!userId || !membershipTier) {
      console.error("Missing metadata in session:", session.id)
      return { success: false, tier: "unknown", error: "Missing user information" }
    }

    const subscription = session.subscription as Stripe.Subscription
    if (!subscription) {
      console.error("No subscription in session:", session.id)
      return { success: false, tier: "unknown", error: "No subscription found" }
    }

    // Calculate expiry date
    const expiryDate = new Date(subscription.current_period_end * 1000)

    // Update the membership
    const supabaseAdmin = createAdminClient()
    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        membership_tier: membershipTier,
        membership_status: "active",
        membership_expiry: expiryDate.toISOString(),
        last_payment_date: new Date().toISOString(),
        stripe_customer_id: session.customer as string,
      })
      .eq("id", userId)

    if (error) {
      console.error("Error updating profile from success page:", error)
      return { success: false, tier: "unknown", error: error.message }
    }

    console.log("Membership verified and updated from success page for user:", userId)
    return { success: true, tier: membershipTier }
  } catch (error: any) {
    console.error("Error verifying session:", error)
    return { success: false, tier: "unknown", error: error.message }
  }
}

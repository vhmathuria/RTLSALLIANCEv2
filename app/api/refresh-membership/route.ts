import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@/lib/supabase-server"
import { updateMembership } from "@/lib/membership-actions"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(req: NextRequest) {
  try {
    // Get user ID from request body
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    console.log(`[refresh-membership] Refreshing membership for user ${userId}`)

    // Get user profile from Supabase
    const supabase = createClient()
    const { data: profile, error: profileError } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (profileError || !profile) {
      console.error("[refresh-membership] Error fetching profile:", profileError)
      return NextResponse.json(
        { error: `Profile not found: ${profileError?.message || "Unknown error"}` },
        { status: 404 },
      )
    }

    // Check if profile has Stripe customer ID
    if (!profile.stripe_customer_id) {
      console.error("[refresh-membership] No Stripe customer ID found in profile")
      return NextResponse.json({ error: "No Stripe customer ID found in profile" }, { status: 400 })
    }

    console.log(`[refresh-membership] Found profile with Stripe customer ID: ${profile.stripe_customer_id}`)

    // Get customer's subscriptions from Stripe
    const subscriptions = await stripe.subscriptions.list({
      customer: profile.stripe_customer_id,
      status: "active",
      limit: 1,
    })

    if (subscriptions.data.length === 0) {
      console.log("[refresh-membership] No active subscriptions found for customer")

      // Update profile to public tier if no active subscriptions
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          membership_tier: "public",
          membership_status: "inactive",
          membership_expiry: null,
          stripe_subscription_id: null,
        })
        .eq("id", userId)

      if (updateError) {
        console.error("[refresh-membership] Error updating profile:", updateError)
        return NextResponse.json({ error: `Failed to update profile: ${updateError.message}` }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: "No active subscriptions found, profile updated to public tier",
        tier: "public",
        status: "inactive",
      })
    }

    // Get the active subscription
    const subscription = subscriptions.data[0]
    console.log(`[refresh-membership] Found active subscription: ${subscription.id}`)

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

    console.log(`[refresh-membership] Determined membership tier: ${membershipTier}`)

    // Calculate expiry date (end of current period)
    const expiryDate = new Date(subscription.current_period_end * 1000)

    // Update user membership
    const result = await updateMembership(userId, membershipTier, subscription.id, expiryDate)

    if (!result.success) {
      console.error("[refresh-membership] Error updating membership:", result.error)
      return NextResponse.json({ error: `Failed to update membership: ${result.error}` }, { status: 500 })
    }

    console.log("[refresh-membership] Membership updated successfully")

    return NextResponse.json({
      success: true,
      message: "Membership refreshed successfully",
      tier: membershipTier,
      status: "active",
      expiryDate: expiryDate.toISOString(),
    })
  } catch (error: any) {
    console.error("[refresh-membership] Unexpected error:", error)
    return NextResponse.json({ error: `Unexpected error: ${error.message}` }, { status: 500 })
  }
}

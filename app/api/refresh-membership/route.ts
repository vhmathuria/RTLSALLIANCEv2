import { type NextRequest, NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Stripe from "stripe"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function GET(request: NextRequest) {
  try {
    // Get the current user
    const supabase = createRouteHandlerClient({ cookies })
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    // Get the user's profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("stripe_customer_id, stripe_subscription_id")
      .eq("id", user.id)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    // If we have a subscription ID, check its status
    if (profile.stripe_subscription_id) {
      try {
        const subscription = await stripe.subscriptions.retrieve(profile.stripe_subscription_id)

        // Calculate expiry date
        const expiryDate = new Date(subscription.current_period_end * 1000)

        // Get membership tier from metadata or determine from price
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

        // Update the profile
        const { data: updatedProfile, error: updateError } = await supabase
          .from("profiles")
          .update({
            membership_tier: membershipTier,
            membership_status: subscription.status === "active" ? "active" : "inactive",
            membership_expiry: expiryDate.toISOString(),
            last_payment_date: new Date(subscription.current_period_start * 1000).toISOString(),
          })
          .eq("id", user.id)
          .select()

        if (updateError) {
          return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
        }

        return NextResponse.json({
          success: true,
          message: "Membership refreshed successfully",
          data: updatedProfile,
        })
      } catch (stripeError: any) {
        console.error("Error retrieving subscription:", stripeError)

        // If the subscription doesn't exist, reset the membership
        if (stripeError.code === "resource_missing") {
          await supabase
            .from("profiles")
            .update({
              membership_tier: "public",
              membership_status: "inactive",
              stripe_subscription_id: null,
            })
            .eq("id", user.id)

          return NextResponse.json({
            success: true,
            message: "Subscription not found, membership reset to public",
          })
        }

        return NextResponse.json({ error: stripeError.message }, { status: 500 })
      }
    } else if (profile.stripe_customer_id) {
      // Try to find active subscriptions for this customer
      const subscriptions = await stripe.subscriptions.list({
        customer: profile.stripe_customer_id,
        status: "active",
        limit: 1,
      })

      if (subscriptions.data.length > 0) {
        const subscription = subscriptions.data[0]

        // Calculate expiry date
        const expiryDate = new Date(subscription.current_period_end * 1000)

        // Get membership tier from metadata or determine from price
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

        // Update the profile
        const { data: updatedProfile, error: updateError } = await supabase
          .from("profiles")
          .update({
            membership_tier: membershipTier,
            membership_status: "active",
            membership_expiry: expiryDate.toISOString(),
            last_payment_date: new Date(subscription.current_period_start * 1000).toISOString(),
            stripe_subscription_id: subscription.id,
          })
          .eq("id", user.id)
          .select()

        if (updateError) {
          return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
        }

        return NextResponse.json({
          success: true,
          message: "Found active subscription and updated membership",
          data: updatedProfile,
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: "No active subscriptions found",
      data: profile,
    })
  } catch (error: any) {
    console.error("Error refreshing membership:", error)
    return NextResponse.json({ error: error.message || "Failed to refresh membership" }, { status: 500 })
  }
}

"use server"

import { createClient } from "@/lib/supabase-server"
import Stripe from "stripe"

const MEMBERSHIP_TIERS = {
  public: 0,
  student: 1,
  professional: 2,
  corporate: 3,
}

export async function checkMembershipAccess(requiredTier: string): Promise<boolean> {
  console.log("checkMembershipAccess: Checking access for tier", requiredTier)

  try {
    // Public content is always accessible
    if (requiredTier === "public") {
      return true
    }

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      console.log("checkMembershipAccess: No user found, denying access")
      return false
    }

    console.log("checkMembershipAccess: User found, checking profile", user.id)
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("membership_tier, membership_status, membership_expiry")
      .eq("id", user.id)
      .single()

    if (error || !profile) {
      console.error("checkMembershipAccess: Error fetching profile", error)
      return false
    }

    console.log("checkMembershipAccess: Profile data", profile)

    // Check if membership is active
    const isActive = profile.membership_status?.toLowerCase() === "active"
    if (!isActive) {
      console.log("checkMembershipAccess: Membership not active, denying access")
      return false
    }

    // Check if membership has expired
    if (profile.membership_expiry && new Date(profile.membership_expiry) < new Date()) {
      console.log("checkMembershipAccess: Membership expired, denying access")
      return false
    }

    // Check if user's tier is sufficient
    const userTierLevel = MEMBERSHIP_TIERS[profile.membership_tier?.toLowerCase() as keyof typeof MEMBERSHIP_TIERS] || 0
    const requiredTierLevel = MEMBERSHIP_TIERS[requiredTier.toLowerCase() as keyof typeof MEMBERSHIP_TIERS] || 0

    console.log("checkMembershipAccess: Comparing tiers", {
      userTier: profile.membership_tier,
      userLevel: userTierLevel,
      requiredTier,
      requiredLevel: requiredTierLevel,
    })

    return userTierLevel >= requiredTierLevel
  } catch (error) {
    console.error("checkMembershipAccess: Unexpected error", error)
    return false
  }
}

export async function verifyAndUpdateMembershipFromSession(sessionId: string) {
  console.log("verifyAndUpdateMembershipFromSession: Verifying session", sessionId)

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-10-16",
    })

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (!session || session.status !== "complete") {
      console.error("verifyAndUpdateMembershipFromSession: Invalid or incomplete session", session)
      return { success: false, error: "Invalid or incomplete session" }
    }

    // Get the customer and subscription details
    const customerId = session.customer as string
    const subscriptionId = session.subscription as string

    if (!customerId || !subscriptionId) {
      console.error("verifyAndUpdateMembershipFromSession: Missing customer or subscription ID", {
        customerId,
        subscriptionId,
      })
      return { success: false, error: "Missing customer or subscription ID" }
    }

    // Get the subscription details
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    if (!subscription) {
      console.error("verifyAndUpdateMembershipFromSession: Subscription not found", subscriptionId)
      return { success: false, error: "Subscription not found" }
    }

    // Determine membership tier from price ID
    const priceId = subscription.items.data[0]?.price.id
    let membershipTier = "public"

    if (priceId === process.env.STRIPE_STUDENT_PRICE_ID) {
      membershipTier = "student"
    } else if (priceId === process.env.STRIPE_PROFESSIONAL_PRICE_ID) {
      membershipTier = "professional"
    } else if (priceId === process.env.STRIPE_CORPORATE_PRICE_ID) {
      membershipTier = "corporate"
    }

    // Calculate expiry date (1 year from now)
    const expiryDate = new Date()
    expiryDate.setFullYear(expiryDate.getFullYear() + 1)

    // Get the user ID from metadata
    const userId = session.client_reference_id || session.metadata?.userId

    if (!userId) {
      console.error("verifyAndUpdateMembershipFromSession: User ID not found in session", session)
      return { success: false, error: "User ID not found in session" }
    }

    console.log("verifyAndUpdateMembershipFromSession: Updating membership", {
      userId,
      membershipTier,
      expiryDate,
    })

    // Update the user's membership in Supabase
    const supabase = createClient()
    const { error } = await supabase
      .from("profiles")
      .update({
        membership_tier: membershipTier,
        membership_status: "active",
        membership_expiry: expiryDate.toISOString(),
        last_payment_date: new Date().toISOString(),
        stripe_customer_id: customerId,
      })
      .eq("id", userId)

    if (error) {
      console.error("verifyAndUpdateMembershipFromSession: Error updating profile", error)
      return { success: false, error: error.message }
    }

    console.log("verifyAndUpdateMembershipFromSession: Membership updated successfully")
    return { success: true, membershipTier }
  } catch (error: any) {
    console.error("verifyAndUpdateMembershipFromSession: Unexpected error", error)
    return { success: false, error: error.message || "An unexpected error occurred" }
  }
}

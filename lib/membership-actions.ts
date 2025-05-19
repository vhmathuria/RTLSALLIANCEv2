"use server"

import { createClient } from "@/lib/supabase-server"
import { revalidatePath } from "next/cache"
import Stripe from "stripe"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// Define membership tiers and their hierarchy
const MEMBERSHIP_TIERS = {
  public: 0,
  student: 1,
  professional: 2,
  corporate: 3,
}

// Check if user has access to content with specified tier
export async function checkMembershipAccess(requiredTier: string): Promise<boolean> {
  console.log(`[checkMembershipAccess] Checking access for tier: ${requiredTier}`)
  const supabase = createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    console.log("[checkMembershipAccess] No user found, access limited to public content")
    return requiredTier === "public"
  }

  // Get user profile with membership info
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("membership_tier, membership_status, membership_expiry")
    .eq("id", user.id)
    .single()

  if (error) {
    console.error("[checkMembershipAccess] Error fetching profile:", error)
    return requiredTier === "public"
  }

  console.log("[checkMembershipAccess] User profile:", profile)

  // If no profile or inactive membership, only allow public content
  if (!profile || profile.membership_status !== "active") {
    console.log("[checkMembershipAccess] Inactive membership, access limited to public content")
    return requiredTier === "public"
  }

  // Check if membership has expired
  if (profile.membership_expiry && new Date(profile.membership_expiry) < new Date()) {
    console.log("[checkMembershipAccess] Membership expired, updating status")
    // Update membership status to expired
    await supabase.from("profiles").update({ membership_status: "expired" }).eq("id", user.id)

    return requiredTier === "public"
  }

  // Check if user's tier is sufficient for the required tier
  const userTierLevel = MEMBERSHIP_TIERS[profile.membership_tier as keyof typeof MEMBERSHIP_TIERS] || 0
  const requiredTierLevel = MEMBERSHIP_TIERS[requiredTier as keyof typeof MEMBERSHIP_TIERS] || 0

  const hasAccess = userTierLevel >= requiredTierLevel
  console.log(
    `[checkMembershipAccess] User tier: ${profile.membership_tier} (${userTierLevel}), Required tier: ${requiredTier} (${requiredTierLevel}), Has access: ${hasAccess}`,
  )

  return hasAccess
}

// Create a Stripe checkout session for membership upgrade
export async function createCheckoutSession(tier: "student" | "professional" | "corporate") {
  const supabase = createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User must be logged in to upgrade membership")
  }

  // Get price ID based on selected tier
  let priceId: string
  switch (tier) {
    case "student":
      priceId = process.env.STRIPE_STUDENT_PRICE_ID!
      break
    case "professional":
      priceId = process.env.STRIPE_PROFESSIONAL_PRICE_ID!
      break
    case "corporate":
      priceId = process.env.STRIPE_CORPORATE_PRICE_ID!
      break
    default:
      throw new Error("Invalid membership tier")
  }

  // Get or create Stripe customer
  let stripeCustomerId: string

  // Check if user already has a Stripe customer ID
  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id, email")
    .eq("id", user.id)
    .single()

  if (profile?.stripe_customer_id) {
    stripeCustomerId = profile.stripe_customer_id
  } else {
    // Create new Stripe customer
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: {
        supabase_id: user.id,
      },
    })

    stripeCustomerId = customer.id

    // Save Stripe customer ID to profile
    await supabase.from("profiles").update({ stripe_customer_id: stripeCustomerId }).eq("id", user.id)
  }

  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/cancel`,
    metadata: {
      user_id: user.id,
      membership_tier: tier,
    },
  })

  return { url: session.url }
}

// Update user membership after successful payment
export async function updateMembership(userId: string, tier: string, subscriptionId: string, expiryDate?: Date) {
  console.log(`[updateMembership] Updating membership for user ${userId} to tier ${tier}`)
  const supabase = createClient()

  try {
    // First, check if the profile exists
    const { data: existingProfile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single()

    if (profileError) {
      console.error("[updateMembership] Error fetching profile:", profileError)
      throw new Error(`Profile not found: ${profileError.message}`)
    }

    console.log("[updateMembership] Existing profile:", existingProfile)

    // Prepare update data
    const updateData = {
      membership_tier: tier,
      membership_status: "active",
      membership_expiry: expiryDate?.toISOString() || null,
      last_payment_date: new Date().toISOString(),
      stripe_subscription_id: subscriptionId,
    }

    console.log("[updateMembership] Update data:", updateData)

    // Update the profile
    const { data, error } = await supabase.from("profiles").update(updateData).eq("id", userId).select()

    if (error) {
      console.error("[updateMembership] Error updating membership:", error)
      throw error
    }

    console.log("[updateMembership] Profile updated successfully:", data)

    // Revalidate paths that might show different content based on membership
    revalidatePath("/resources")
    revalidatePath("/membership")
    revalidatePath("/account")

    return { success: true, data }
  } catch (error) {
    console.error("[updateMembership] Failed to update membership:", error)
    return { success: false, error }
  }
}

// Get current user's membership info
export async function getCurrentMembership() {
  const supabase = createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { tier: "public", status: "inactive" }
  }

  // Get user profile with membership info
  const { data: profile } = await supabase
    .from("profiles")
    .select("membership_tier, membership_status, membership_expiry")
    .eq("id", user.id)
    .single()

  if (!profile) {
    return { tier: "public", status: "inactive" }
  }

  // Check if membership has expired
  if (profile.membership_expiry && new Date(profile.membership_expiry) < new Date()) {
    // Update membership status to expired
    await supabase.from("profiles").update({ membership_status: "expired" }).eq("id", user.id)

    return { tier: "public", status: "expired", expiryDate: profile.membership_expiry }
  }

  return {
    tier: profile.membership_tier || "public",
    status: profile.membership_status || "inactive",
    expiryDate: profile.membership_expiry,
  }
}

"use server"

import { createClient, createAdminClient } from "@/lib/supabase-server"
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
  const supabase = createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return requiredTier === "public"
  }

  // Get user profile with membership info
  const { data: profile } = await supabase
    .from("profiles")
    .select("membership_tier, membership_status, membership_expiry")
    .eq("id", user.id)
    .single()

  // If no profile or inactive membership, only allow public content
  if (!profile) {
    return requiredTier === "public"
  }

  // Check for active status (case insensitive)
  const isActive = profile.membership_status?.toLowerCase() === "active" // Changed to lowercase comparison

  if (!isActive) {
    return requiredTier === "public"
  }

  // Check if membership has expired
  if (profile.membership_expiry && new Date(profile.membership_expiry) < new Date()) {
    // Update membership status to expired - use admin client to bypass RLS
    const supabaseAdmin = createAdminClient()
    await supabaseAdmin.from("profiles").update({ membership_status: "expired" }).eq("id", user.id)

    return requiredTier === "public"
  }

  // Check if user's tier is sufficient for the required tier
  const userTierLevel = MEMBERSHIP_TIERS[profile.membership_tier as keyof typeof MEMBERSHIP_TIERS] || 0
  const requiredTierLevel = MEMBERSHIP_TIERS[requiredTier as keyof typeof MEMBERSHIP_TIERS] || 0

  return userTierLevel >= requiredTierLevel
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

    // Save Stripe customer ID to profile - use admin client to bypass RLS
    const supabaseAdmin = createAdminClient()
    await supabaseAdmin.from("profiles").update({ stripe_customer_id: stripeCustomerId }).eq("id", user.id)
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
export async function updateMembership(userId: string, tier: string, expiryDate?: Date) {
  // Use admin client to bypass RLS
  const supabaseAdmin = createAdminClient()

  try {
    console.log("Updating membership for user:", userId, "to tier:", tier)

    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        membership_tier: tier,
        membership_status: "active", // Changed to lowercase
        membership_expiry: expiryDate?.toISOString() || null,
        last_payment_date: new Date().toISOString(),
      })
      .eq("id", userId)

    if (error) {
      console.error("Error updating membership:", error)
      throw error
    }

    // Revalidate paths that might show different content based on membership
    revalidatePath("/resources")
    revalidatePath("/membership")
    revalidatePath("/account")

    console.log("Membership updated successfully for user:", userId)
    return { success: true }
  } catch (error) {
    console.error("Failed to update membership:", error)
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
    // Update membership status to expired - use admin client to bypass RLS
    const supabaseAdmin = createAdminClient()
    await supabaseAdmin.from("profiles").update({ membership_status: "expired" }).eq("id", user.id)

    return { tier: "public", status: "expired", expiryDate: profile.membership_expiry }
  }

  return {
    tier: profile.membership_tier || "public",
    status: profile.membership_status || "inactive",
    expiryDate: profile.membership_expiry,
  }
}

// Verify and update membership from success page
export async function verifyAndUpdateMembershipFromSession(sessionId: string) {
  try {
    console.log("Verifying session:", sessionId)

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription"],
    })

    if (!session || session.status !== "complete") {
      console.error("Session not complete:", session?.status)
      return { success: false, error: "Payment not completed" }
    }

    const userId = session.metadata?.user_id
    const membershipTier = session.metadata?.membership_tier

    if (!userId || !membershipTier) {
      console.error("Missing metadata in session:", session.id)
      return { success: false, error: "Missing user information" }
    }

    const subscription = session.subscription as Stripe.Subscription
    if (!subscription) {
      console.error("No subscription in session:", session.id)
      return { success: false, error: "No subscription found" }
    }

    // Calculate expiry date
    const expiryDate = new Date(subscription.current_period_end * 1000)

    // Update the membership
    const supabaseAdmin = createAdminClient()
    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        membership_tier: membershipTier,
        membership_status: "active", // Changed to lowercase
        membership_expiry: expiryDate.toISOString(),
        last_payment_date: new Date().toISOString(),
        stripe_customer_id: session.customer as string,
      })
      .eq("id", userId)

    if (error) {
      console.error("Error updating profile from success page:", error)
      return { success: false, error: error.message }
    }

    // Revalidate paths
    revalidatePath("/resources")
    revalidatePath("/membership")
    revalidatePath("/account")

    console.log("Membership verified and updated from success page for user:", userId)
    return { success: true, tier: membershipTier }
  } catch (error: any) {
    console.error("Error verifying session:", error)
    return { success: false, error: error.message }
  }
}

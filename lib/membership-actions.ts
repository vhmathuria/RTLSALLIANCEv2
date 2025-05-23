import { createClient } from "@/lib/supabase/server"

// Define membership tiers and their corresponding levels
const MEMBERSHIP_TIERS = {
  public: 0,
  basic: 1,
  premium: 2,
  pro: 3,
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
  const isActive = profile.membership_status?.toLowerCase() === "active"

  if (!isActive) {
    return requiredTier === "public"
  }

  // Check if membership has expired
  if (profile.membership_expiry && new Date(profile.membership_expiry) < new Date()) {
    // Update membership status to expired
    await supabase.from("profiles").update({ membership_status: "expired" }).eq("id", user.id)

    return requiredTier === "public"
  }

  // Check if user's tier is sufficient for the required tier
  const userTierLevel = MEMBERSHIP_TIERS[profile.membership_tier.toLowerCase() as keyof typeof MEMBERSHIP_TIERS] || 0
  const requiredTierLevel = MEMBERSHIP_TIERS[requiredTier.toLowerCase() as keyof typeof MEMBERSHIP_TIERS] || 0

  return userTierLevel >= requiredTierLevel
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
    status: profile.membership_status?.toLowerCase() || "inactive",
    expiryDate: profile.membership_expiry,
  }
}

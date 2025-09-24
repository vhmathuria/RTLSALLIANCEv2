"use server"

import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth-actions"
import { revalidatePath } from "next/cache"
import { isCorporateDomain, getCorporateDomainMessage } from "@/lib/domain-validation"

export async function createBid(formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    return { error: "You must be logged in to submit a bid" }
  }

  const userEmail = user.email
  if (!(await isCorporateDomain(userEmail))) {
    return {
      error:
        (await getCorporateDomainMessage(userEmail)) + " This ensures all bids come from legitimate business entities.",
    }
  }

  // Check if user has qualified vendor membership
  if (
    !user.profile?.membership_status ||
    user.profile.membership_status !== "active" ||
    !["professional", "corporate"].includes(user.profile.membership_tier)
  ) {
    return { error: "You need an active Professional or Corporate membership to submit bids" }
  }

  const project_id = formData.get("project_id")?.toString()
  const proposal = formData.get("proposal")?.toString()
  const estimated_cost = formData.get("estimated_cost")?.toString()
  const estimated_timeline = formData.get("estimated_timeline")?.toString()
  const approach_summary = formData.get("approach_summary")?.toString()
  const vendor_experience = formData.get("vendor_experience")?.toString()
  const portfolio_links_text = formData.get("portfolio_links")?.toString()

  if (!project_id || !proposal) {
    return { error: "Project ID and proposal are required" }
  }

  // Parse portfolio links
  const portfolio_links = portfolio_links_text
    ? portfolio_links_text
        .split("\n")
        .map((link) => link.trim())
        .filter((link) => link.length > 0)
    : []

  const supabase = createClient()

  try {
    // Check if user already has a bid for this project
    const { data: existingBid } = await supabase
      .from("bids")
      .select("id")
      .eq("project_id", project_id)
      .eq("vendor_id", user.id)
      .single()

    if (existingBid) {
      return { error: "You have already submitted a bid for this project" }
    }

    const { data, error } = await supabase
      .from("bids")
      .insert({
        project_id,
        vendor_id: user.id,
        proposal,
        estimated_cost,
        estimated_timeline,
        approach_summary,
        vendor_experience,
        portfolio_links,
        vendor_organization: user.profile?.organization || "",
      })
      .select()
      .single()

    if (error) {
      console.error("Bid creation error:", error)
      return { error: "Failed to submit bid. Please try again." }
    }

    revalidatePath("/bidding-portal")
    return { success: true, data }
  } catch (error) {
    console.error("Bid creation error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function getProjectBids(projectId: string) {
  const user = await getCurrentUser()
  if (!user) {
    return { error: "You must be logged in" }
  }

  const supabase = createClient()

  try {
    // Check if user owns the project
    const { data: project } = await supabase.from("projects").select("client_id").eq("id", projectId).single()

    if (!project || project.client_id !== user.id) {
      return { error: "You can only view bids for your own projects" }
    }

    const { data, error } = await supabase
      .from("bids")
      .select("*")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Bids fetch error:", error)
      return { error: "Failed to load bids" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Bids fetch error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function getVendorBids() {
  const user = await getCurrentUser()
  if (!user) {
    return { error: "You must be logged in" }
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from("bids")
      .select(`
        *,
        projects (
          title,
          client_organization,
          status
        )
      `)
      .eq("vendor_id", user.id)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Vendor bids fetch error:", error)
      return { error: "Failed to load your bids" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Vendor bids fetch error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function checkVendorAccess() {
  const user = await getCurrentUser()
  if (!user) {
    return { hasAccess: false, user: null }
  }

  const hasCorporateDomain = await isCorporateDomain(user.email)
  const hasActiveMembership =
    user.profile?.membership_status === "active" && ["professional", "corporate"].includes(user.profile.membership_tier)

  return {
    hasAccess: hasCorporateDomain && hasActiveMembership,
    user,
    membershipTier: user.profile?.membership_tier,
    membershipStatus: user.profile?.membership_status,
    hasCorporateDomain,
    corporateDomainMessage: await getCorporateDomainMessage(user.email),
  }
}

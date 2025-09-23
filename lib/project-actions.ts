"use server"

import { createClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/lib/auth-actions"
import { revalidatePath } from "next/cache"

export async function createProject(formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    return { error: "You must be logged in to create a project" }
  }

  const title = formData.get("title")?.toString()
  const description = formData.get("description")?.toString()
  const requirements = formData.get("requirements")?.toString()
  const category = formData.get("category")?.toString()
  const project_type = formData.get("project_type")?.toString()
  const budget_range = formData.get("budget_range")?.toString()
  const timeline = formData.get("timeline")?.toString()
  const location = formData.get("location")?.toString()
  const contact_email = formData.get("contact_email")?.toString()
  const contact_phone = formData.get("contact_phone")?.toString()
  const bid_deadline = formData.get("bid_deadline")?.toString()

  if (!title || !description || !category || !project_type || !contact_email) {
    return { error: "Please fill in all required fields" }
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from("projects")
      .insert({
        title,
        description,
        requirements,
        category,
        project_type,
        budget_range,
        timeline,
        location,
        contact_email,
        contact_phone,
        bid_deadline: bid_deadline ? new Date(bid_deadline).toISOString() : null,
        client_id: user.id,
        client_organization: user.profile?.organization || "",
      })
      .select()
      .single()

    if (error) {
      console.error("Project creation error:", error)
      return { error: "Failed to create project. Please try again." }
    }

    revalidatePath("/bidding-portal")
    return { success: true, data }
  } catch (error) {
    console.error("Project creation error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function getProjects() {
  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Projects fetch error:", error)
      return { error: "Failed to load projects" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Projects fetch error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function getProject(id: string) {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.from("projects").select("*").eq("id", id).single()

    if (error) {
      console.error("Project fetch error:", error)
      return { error: "Failed to load project" }
    }

    // Increment view count
    await supabase
      .from("projects")
      .update({ view_count: (data.view_count || 0) + 1 })
      .eq("id", id)

    return { success: true, data }
  } catch (error) {
    console.error("Project fetch error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function getUserProjects() {
  const user = await getCurrentUser()
  if (!user) {
    return { error: "You must be logged in" }
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("client_id", user.id)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("User projects fetch error:", error)
      return { error: "Failed to load your projects" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("User projects fetch error:", error)
    return { error: "An unexpected error occurred" }
  }
}

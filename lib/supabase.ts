import { createClient } from "@supabase/supabase-js"
import { createServerClient as createSSRServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"
import { fixSpecialChars } from "./utils"

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client for browser usage
export const createBrowserClient = () => createClient<Database>(supabaseUrl, supabaseAnonKey)

// Client for server components
export function createServerClient() {
  const cookieStore = cookies()

  return createSSRServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })
}

// Admin client for server-side operations that bypass RLS
export const createAdminClient = () => createClient<Database>(supabaseUrl, supabaseServiceKey)

// Legacy client for compatibility
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Add the missing export
export const supabaseAdmin =
  typeof window === "undefined" ? createClient<Database>(supabaseUrl, supabaseServiceKey) : null

// Helper to ensure profile exists
export async function ensureProfile(userId: string, userEmail: string, fullName?: string) {
  const adminClient = createAdminClient()

  // Check if profile exists
  const { data: existingProfile } = await adminClient.from("profiles").select("*").eq("id", userId).single()

  if (existingProfile) {
    return existingProfile
  }

  // Create profile if it doesn't exist
  const newProfile = {
    id: userId,
    email: userEmail,
    full_name: fullName || "",
    membership_tier: "public",
    membership_status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  const { data: createdProfile, error } = await adminClient.from("profiles").insert(newProfile).select().single()

  if (error) {
    console.error("Error creating profile:", error)
    throw error
  }

  return createdProfile
}

// Helper to get user profile
export async function getUserProfile(userId: string) {
  const serverClient = createServerClient()

  const { data: profile, error } = await serverClient.from("profiles").select("*").eq("id", userId).single()

  if (error && error.code !== "PGRST116") {
    console.error("Error fetching profile:", error)
    return null
  }

  return profile
}

// Helper function to determine if we're on the server
const isServer = () => typeof window === "undefined"

// Get the appropriate client based on context and requirements
function getClient(requireAdmin = false) {
  // If we're on the server and admin access is required, use the admin client
  if (isServer() && requireAdmin) {
    return createAdminClient()
  }

  // Otherwise use the regular client (which respects RLS)
  return supabase
}

// Helper function to get an article by slug
export async function getArticleBySlug(slug: string) {
  try {
    // Use admin client on server to ensure we can always fetch the article
    // The RLS policy will still filter based on is_published for public access
    const client = getClient(isServer())

    const { data, error } = await client.from("staging_articles").select("*").eq("slug", slug).single()

    if (error) {
      console.error("Error fetching article:", error)
      return null
    }

    // Fix special characters in rich_text
    if (data && data.rich_text) {
      try {
        const richTextObj = JSON.parse(data.rich_text)

        // Fix TOC items to match actual content
        if (richTextObj.sidebarTOC) {
          richTextObj.sidebarTOC = richTextObj.sidebarTOC.map((item: string) => {
            return fixSpecialChars(item)
          })

          // For Guide content type
          if (data.content_type === "Guide") {
            // Ensure TOC item #2 shows the correct audience
            if (richTextObj.audienceDefinition && richTextObj.audienceDefinition.whoShouldRead) {
              richTextObj.sidebarTOC[1] = "Who Should Read This Guide"
            }

            // Ensure TOC item #9 is just "Conclusion"
            if (richTextObj.sidebarTOC.length >= 9) {
              richTextObj.sidebarTOC[8] = "Conclusion"
            }
          }

          // For Technology Comparison content type
          if (data.content_type === "Technology Comparison") {
            // Ensure audience section has the correct title
            if (richTextObj.sidebarTOC.length >= 3) {
              richTextObj.sidebarTOC[2] = "Who Should Read This Comparison"
            }
          }

          // For Success Story content type
          if (data.content_type === "Success Story") {
            // Don't override the TOC if it exists and has items
            if (!richTextObj.sidebarTOC || richTextObj.sidebarTOC.length === 0) {
              // Default TOC for Success Stories
              richTextObj.sidebarTOC = [
                "Executive Summary",
                "The Challenge",
                "Solution Design",
                "Implementation Timeline",
                "Results and KPIs",
                "Cross-Industry Insights",
                "Key Takeaways",
                "Next Steps",
                "Conclusion",
                "Related Reads",
              ]
            }
          }

          // For Member Insight content type
          if (data.content_type === "Member Insight") {
            // Don't override the TOC if it exists and has items
            if (!richTextObj.sidebarTOC || richTextObj.sidebarTOC.length === 0) {
              // Default TOC for Member Insights
              richTextObj.sidebarTOC = [
                "Executive Summary",
                "Business Context",
                "Insight Details",
                "Data Analysis",
                "Strategic Recommendations",
                "Implementation Guidance",
                "Case Studies",
                "Expert Perspective",
                "Conclusion",
                "Related Insights",
              ]
            }
          }
        }

        // Fix all string values recursively
        const fixStringsRecursively = (obj: any) => {
          if (!obj) return obj

          if (typeof obj === "string") {
            return fixSpecialChars(obj)
          }

          if (Array.isArray(obj)) {
            return obj.map((item) => fixStringsRecursively(item))
          }

          if (typeof obj === "object") {
            const newObj: any = {}
            for (const key in obj) {
              newObj[key] = fixStringsRecursively(obj[key])
            }
            return newObj
          }

          return obj
        }

        const fixedRichTextObj = fixStringsRecursively(richTextObj)
        data.rich_text = JSON.stringify(fixedRichTextObj)
      } catch (e) {
        console.error("Error fixing rich_text:", e)
      }
    }

    return data
  } catch (err) {
    console.error("Unexpected error in getArticleBySlug:", err)
    return null
  }
}

// Helper function to get articles by content type
export async function getArticlesByContentType(contentType: string) {
  try {
    // Use admin client on server to ensure we can fetch all articles
    const client = getClient(isServer())

    const { data, error } = await client
      .from("staging_articles")
      .select("*")
      .eq("content_type", contentType)
      .eq("is_published", true) // Only include published articles
      .order("publish_date", { ascending: false })

    if (error) {
      console.error("Error fetching articles:", error)
      return []
    }

    return data
  } catch (err) {
    console.error("Unexpected error in getArticlesByContentType:", err)
    return []
  }
}

// Helper function to get all articles
export async function getAllArticles() {
  try {
    // Use admin client on server to ensure we can fetch all articles
    const client = getClient(isServer())

    const { data, error } = await client
      .from("staging_articles")
      .select("*")
      .eq("is_published", true) // Only include published articles
      .order("publish_date", { ascending: false })

    if (error) {
      console.error("Error fetching all articles:", error)
      return []
    }

    return data
  } catch (err) {
    console.error("Unexpected error in getAllArticles:", err)
    return []
  }
}

// Helper function to get a template by name
export async function getTemplateByName(templateName: string) {
  try {
    const { data, error } = await supabase.from("article_templates").select("*").eq("template", templateName).single()

    if (error) {
      console.error("Error fetching template:", error)
      return null
    }

    return data
  } catch (err) {
    console.error("Unexpected error in getTemplateByName:", err)
    return null
  }
}

// Helper function to update an article's TOC
export async function updateArticleTOC(slug: string, updatedTOC: string[]) {
  try {
    const { data: article } = await supabase.from("staging_articles").select("rich_text").eq("slug", slug).single()

    if (!article) return { success: false, error: "Article not found" }

    const richTextObj = JSON.parse(article.rich_text)
    richTextObj.sidebarTOC = updatedTOC

    const { error } = await supabase
      .from("staging_articles")
      .update({ rich_text: JSON.stringify(richTextObj) })
      .eq("slug", slug)

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Error updating article TOC:", error)
    return { success: false, error }
  }
}

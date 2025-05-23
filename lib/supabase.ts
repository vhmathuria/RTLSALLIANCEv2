import { createClient } from "@/lib/supabase-server"

// Check if environment variables are available and provide fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Please check your .env file or environment configuration.")
}

// Create the Supabase client with error handling
const client = createClient(supabaseUrl || "", supabaseAnonKey || "")

export const supabase = client

export async function getArticleBySlug(slug: string) {
  const supabase = createClient()

  // Try to get from staging_articles first
  const { data: stagingArticle, error: stagingError } = await supabase
    .from("staging_articles")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (stagingArticle) {
    return stagingArticle
  }

  // If not found in staging, try the production articles table
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("Error fetching article:", error)
  }

  return article
}

export async function getAllArticles() {
  const supabase = createClient()

  // Get articles from both staging and production
  const { data: stagingArticles, error: stagingError } = await supabase
    .from("staging_articles")
    .select("*")
    .eq("is_published", true)

  const { data: articles, error } = await supabase.from("articles").select("*").eq("is_published", true)

  if (stagingError) {
    console.error("Error fetching staging articles:", stagingError)
  }

  if (error) {
    console.error("Error fetching articles:", error)
  }

  // Combine and deduplicate by slug
  const allArticles = [...(stagingArticles || []), ...(articles || [])]
  const uniqueArticles = allArticles.filter(
    (article, index, self) => index === self.findIndex((a) => a.slug === article.slug),
  )

  return uniqueArticles
}

export async function getArticlesByContentType(contentType: string) {
  try {
    const { data, error } = await supabase
      .from("staging_articles")
      .select("*")
      .eq("content_type", contentType)
      .eq("is_published", true)
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

import { createClient } from "@/lib/supabase/client"
import { fixSpecialChars } from "./utils"

// Create the Supabase client with error handling
export const supabase = createClient()

export async function getArticleBySlug(slug: string) {
  console.log("[v0] Fetching article by slug:", slug)

  try {
    const { data, error } = await supabase.from("staging_articles").select("*").eq("slug", slug).single()

    if (error) {
      console.error("[v0] Error fetching article:", error)
      console.error("[v0] Error details:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      })
      return null
    }

    if (!data) {
      console.log("[v0] No article found for slug:", slug)
      return null
    }

    console.log("[v0] Article found:", {
      title: data.title,
      slug: data.slug,
      contentType: data.content_type,
      isPublished: data.is_published,
    })

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
        console.error("[v0] Error fixing rich_text:", e)
      }
    }

    return data
  } catch (err) {
    console.error("[v0] Unexpected error in getArticleBySlug:", err)
    return null
  }
}

export async function getArticlesByContentType(contentType: string) {
  try {
    const { data, error } = await supabase
      .from("staging_articles")
      .select("*")
      .eq("content_type", contentType)
      .order("publish_date", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching articles:", error)
      return []
    }

    return data
  } catch (err) {
    console.error("[v0] Unexpected error in getArticlesByContentType:", err)
    return []
  }
}

export async function getAllArticles() {
  try {
    const { data, error } = await supabase
      .from("staging_articles")
      .select("*")
      .order("publish_date", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching all articles:", error)
      return []
    }

    return data
  } catch (err) {
    console.error("[v0] Unexpected error in getAllArticles:", err)
    return []
  }
}

export async function getTemplateByName(templateName: string) {
  try {
    const { data, error } = await supabase.from("article_templates").select("*").eq("template", templateName).single()

    if (error) {
      console.error("[v0] Error fetching template:", error)
      return null
    }

    return data
  } catch (err) {
    console.error("[v0] Unexpected error in getTemplateByName:", err)
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
    console.error("[v0] Error updating article TOC:", error)
    return { success: false, error }
  }
}

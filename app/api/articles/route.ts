import { NextResponse } from "next/server"
import { getArticlesByContentType } from "@/lib/supabase"

export async function GET() {
  try {
    // Fetch all content types
    const guideArticles = await getArticlesByContentType("Guide")
    const comparisonArticles = await getArticlesByContentType("Technology Comparison")
    const successStoryArticles = await getArticlesByContentType("Success Story")
    const memberInsightArticles = await getArticlesByContentType("Member Insight")

    // Combine all articles
    const allArticles = [...guideArticles, ...comparisonArticles, ...successStoryArticles, ...memberInsightArticles]

    return NextResponse.json(allArticles)
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import { getAllArticles } from "@/lib/supabase"

export async function GET(): Promise<NextResponse> {
  try {
    console.log("Testing article fetch for sitemap debugging...")
    const articles = await getAllArticles()

    return NextResponse.json({
      success: true,
      articleCount: articles?.length || 0,
      articles:
        articles?.map((a) => ({
          slug: a.slug,
          title: a.title,
          publishDate: a.publish_date,
        })) || [],
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error in debug-sitemap endpoint:", error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

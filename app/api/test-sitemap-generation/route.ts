import { NextResponse } from "next/server"
import { getAllArticles } from "@/lib/supabase"
import { articles as staticArticles } from "@/lib/article-data"

export const dynamic = "force-dynamic"

export async function GET() {
  const results = {
    timestamp: new Date().toISOString(),
    environment: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Not set",
      SUPABASE_URL: process.env.SUPABASE_URL ? "Set" : "Not set",
      NODE_ENV: process.env.NODE_ENV || "Not set",
    },
    databaseTest: { success: false, message: "", articleCount: 0 },
    staticData: {
      articleCount: staticArticles.length,
      sampleSlugs: staticArticles.slice(0, 5).map((a) => a.slug),
    },
  }

  // Test database connection
  try {
    const articles = await getAllArticles()

    results.databaseTest = {
      success: articles && articles.length > 0,
      message:
        articles && articles.length > 0
          ? `Successfully fetched ${articles.length} articles`
          : "No articles found or database connection failed",
      articleCount: articles ? articles.length : 0,
      sampleSlugs: articles ? articles.slice(0, 5).map((a) => a.slug) : [],
    }
  } catch (error) {
    results.databaseTest = {
      success: false,
      message: `Error: ${error instanceof Error ? error.message : String(error)}`,
      articleCount: 0,
      sampleSlugs: [],
    }
  }

  return NextResponse.json(results)
}

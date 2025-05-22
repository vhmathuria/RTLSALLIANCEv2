import { NextResponse } from "next/server"
import { getAllArticles } from "@/lib/supabase"

export async function GET(): Promise<NextResponse> {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    steps: [] as any[],
  }

  // Step 1: Start sitemap generation
  diagnostics.steps.push({
    step: "Start sitemap generation",
    timestamp: new Date().toISOString(),
  })

  // Step 2: Fetch articles
  try {
    diagnostics.steps.push({
      step: "Fetching articles",
      timestamp: new Date().toISOString(),
    })

    const startFetch = Date.now()
    const articles = await getAllArticles()
    const fetchDuration = Date.now() - startFetch

    diagnostics.steps.push({
      step: "Articles fetched",
      timestamp: new Date().toISOString(),
      duration: `${fetchDuration}ms`,
      articleCount: articles?.length || 0,
      success: Array.isArray(articles),
      firstFewArticles: Array.isArray(articles)
        ? articles.slice(0, 3).map((a) => ({ slug: a.slug, title: a.title }))
        : null,
    })

    // Step 3: Process articles for sitemap
    if (Array.isArray(articles) && articles.length > 0) {
      diagnostics.steps.push({
        step: "Processing articles for sitemap",
        timestamp: new Date().toISOString(),
      })

      const baseUrl = "https://rtlsalliance.com"
      const resourcePages = articles.map((article) => ({
        url: `${baseUrl}/resources/${article.slug}`,
        lastmod: article.updated_at || article.publish_date || new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      }))

      diagnostics.steps.push({
        step: "Articles processed for sitemap",
        timestamp: new Date().toISOString(),
        resourcePagesCount: resourcePages.length,
        firstFewUrls: resourcePages.slice(0, 3).map((p) => p.url),
      })
    } else {
      diagnostics.steps.push({
        step: "No articles to process",
        timestamp: new Date().toISOString(),
        articles,
      })
    }
  } catch (error) {
    diagnostics.steps.push({
      step: "Error fetching or processing articles",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })
  }

  return NextResponse.json(diagnostics)
}

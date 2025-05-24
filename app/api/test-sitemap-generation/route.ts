import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      },
    )

    // Test query for sitemap
    const { data, error, status } = await supabase
      .from("articles")
      .select("slug, updated_at")
      .eq("status", "published")
      .order("updated_at", { ascending: false })
      .limit(5)

    if (error) {
      throw error
    }

    // Generate a sample sitemap entry
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
    const sampleEntries = data.map((article) => ({
      url: `${baseUrl}/resources/${article.slug}`,
      lastmod: new Date(article.updated_at).toISOString(),
      changefreq: "monthly",
      priority: "0.7",
    }))

    return NextResponse.json({
      success: true,
      message: "Sitemap generation test successful",
      status,
      sampleEntries,
      articleCount: data.length,
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("Sitemap generation test failed:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Sitemap generation test failed",
        error: error.message,
        details: error.details || "No additional details",
        hint: error.hint || "No hint provided",
        code: error.code || "Unknown error code",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

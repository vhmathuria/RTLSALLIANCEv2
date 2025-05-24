import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
  const currentDate = new Date().toISOString()

  // Define static pages that should always be in the sitemap
  const staticPages = [
    { url: baseUrl, lastmod: currentDate, changefreq: "daily", priority: "1.0" },
    { url: `${baseUrl}/resources`, lastmod: currentDate, changefreq: "daily", priority: "0.9" },
    { url: `${baseUrl}/membership`, lastmod: currentDate, changefreq: "weekly", priority: "0.8" },
    { url: `${baseUrl}/contact`, lastmod: currentDate, changefreq: "monthly", priority: "0.7" },
    { url: `${baseUrl}/ecosystem`, lastmod: currentDate, changefreq: "weekly", priority: "0.8" },
    { url: `${baseUrl}/rtls-digital-twin`, lastmod: currentDate, changefreq: "weekly", priority: "0.8" },
  ]

  // Define technology pages
  const technologyPages = [
    "ble",
    "uwb",
    "wifi",
    "nfc",
    "lora",
    "infrared",
    "lidar",
    "ai-cameras",
    "gnss",
    "slam",
    "dead-reckoning",
    "magnetic-field",
    "rtk-gps",
    "sensor-fusion",
  ].map((tech) => ({
    url: `${baseUrl}/rtls-digital-twin/technologies/${tech}`,
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.7",
  }))

  // Define module pages
  const modulePages = [
    "fleet-manager",
    "rules-engine",
    "dashboard-reports",
    "production-planning",
    "process-control",
  ].map((module) => ({
    url: `${baseUrl}/rtls-digital-twin/modules/${module}`,
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.7",
  }))

  // Combine all static pages
  let allPages = [...staticPages, ...technologyPages, ...modulePages]

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

    // Get all published articles
    const { data: articles, error } = await supabase
      .from("articles")
      .select("slug, updated_at")
      .eq("status", "published")
      .order("updated_at", { ascending: false })

    if (error) {
      console.error("Error fetching articles for sitemap:", error)
      // Continue with static pages only
    } else {
      // Add article pages
      const articlePages = articles.map((article) => ({
        url: `${baseUrl}/resources/${article.slug}`,
        lastmod: new Date(article.updated_at).toISOString(),
        changefreq: "monthly",
        priority: "0.7",
      }))

      allPages = [...allPages, ...articlePages]
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap content:", error)
    // Continue with static pages only
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

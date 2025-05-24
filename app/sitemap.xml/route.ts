import { getAllArticles } from "@/lib/supabase"
import { articles as staticArticles } from "@/lib/article-data"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
  const currentDate = new Date().toISOString()

  // Start building the sitemap XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Add main pages
  const mainPages = [
    { url: "", priority: "1.0" },
    { url: "rtls-digital-twin", priority: "0.9" },
    { url: "resources", priority: "0.9" },
    { url: "certification", priority: "0.8" },
    { url: "membership", priority: "0.9" },
    { url: "contact", priority: "0.7" },
    { url: "ecosystem", priority: "0.8" },
    { url: "ecosystem/directory", priority: "0.8" },
    { url: "project", priority: "0.7" },
  ]

  for (const page of mainPages) {
    xml += `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  }

  // Add technology pages
  const technologies = [
    "ble",
    "uwb",
    "wifi",
    "lora",
    "nfc",
    "infrared",
    "lidar",
    "ai-cameras",
    "gnss",
    "rtk-gps",
    "magnetic-field",
    "ultrasound",
    "sensor-fusion",
    "slam",
    "dead-reckoning",
  ]

  for (const tech of technologies) {
    xml += `  <url>
    <loc>${baseUrl}/rtls-digital-twin/technologies/${tech}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
  }

  // Add module pages
  const modules = ["fleet-manager", "rules-engine", "dashboard-reports", "production-planning", "process-control"]

  for (const module of modules) {
    xml += `  <url>
    <loc>${baseUrl}/rtls-digital-twin/modules/${module}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`
  }

  // Try to get articles from database, fall back to static data
  let articles = []
  try {
    const dbArticles = await getAllArticles()
    if (dbArticles && dbArticles.length > 0) {
      console.log(`Using ${dbArticles.length} articles from database`)
      articles = dbArticles
    } else {
      console.log("No articles from database, using static data")
      articles = staticArticles
    }
  } catch (error) {
    console.error("Error fetching articles, using static data:", error)
    articles = staticArticles
  }

  // Add resource pages
  for (const article of articles) {
    if (article.slug) {
      xml += `  <url>
    <loc>${baseUrl}/resources/${article.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
    }
  }

  // Close the sitemap
  xml += `</urlset>`

  // Return the XML with the correct content type
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}

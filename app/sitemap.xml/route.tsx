import { getAllArticles } from "@/lib/supabase"

export async function GET(): Promise<Response> {
  const baseUrl = "https://rtlsalliance.org"
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/rtls-digital-twin`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/certification`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/membership`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosystem/directory`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/membership/upgrade`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.6,
    },
  ]

  // Technology pages
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

  const technologyPages = technologies.map((tech) => ({
    url: `${baseUrl}/rtls-digital-twin/technologies/${tech}`,
    lastmod: currentDate,
    changefreq: "monthly",
    priority: 0.8,
  }))

  // Module pages
  const modules = ["fleet-manager", "rules-engine", "dashboard-reports", "production-planning", "process-control"]

  const modulePages = modules.map((module) => ({
    url: `${baseUrl}/rtls-digital-twin/modules/${module}`,
    lastmod: currentDate,
    changefreq: "monthly",
    priority: 0.7,
  }))

  // Fetch all resource articles from Supabase
  let resourcePages = []
  try {
    const articles = await getAllArticles()

    resourcePages = articles.map((article) => ({
      url: `${baseUrl}/resources/${article.slug}`,
      lastmod: article.updated_at || article.publish_date || currentDate,
      changefreq: "monthly",
      priority: 0.8,
    }))
  } catch (error) {
    console.error("Error fetching articles for sitemap:", error)
    // Continue with empty resource pages if there's an error
  }

  // Combine all pages
  const allPages = [...mainPages, ...technologyPages, ...modulePages, ...resourcePages]

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

  // Return XML response
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

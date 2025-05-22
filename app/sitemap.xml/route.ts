import { supabase } from "@/lib/supabase"

export async function GET(): Promise<Response> {
  console.log("Sitemap generation started at", new Date().toISOString())

  const baseUrl = "https://rtlsalliance.com"
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

  // Fetch all resource articles directly from Supabase
  let resourcePages = []
  try {
    console.log("Directly querying Supabase for articles...")

    // Use a direct query to Supabase instead of the helper function
    const { data: articles, error } = await supabase
      .from("staging_articles")
      .select("slug, title, updated_at, publish_date")

    if (error) {
      console.error("Supabase query error:", error)
      throw error
    }

    if (!articles || articles.length === 0) {
      console.log("No articles found in the database")
    } else {
      console.log(`Found ${articles.length} articles in the database`)

      // Log the first few articles for debugging
      console.log("Sample articles:", articles.slice(0, 3))

      resourcePages = articles.map((article) => ({
        url: `${baseUrl}/resources/${article.slug}`,
        lastmod: article.updated_at || article.publish_date || currentDate,
        changefreq: "monthly",
        priority: 0.8,
      }))
    }
  } catch (error) {
    console.error("Error fetching articles for sitemap:", error)

    // Add hardcoded resource pages as fallback
    const fallbackArticles = [
      { slug: "rtls-101-core-components-protocols-deployment-models" },
      { slug: "uwb-vs-ble-which-rtls-tech-fits-use-case" },
      { slug: "smart-warehousing-rtls-use-cases-automated-fulfillment" },
      { slug: "rtls-roi-quantify-efficiency-gains-cost-savings" },
      { slug: "building-rtls-dashboards-kpis-analytics" },
      { slug: "rtls-security-encryption-authentication-privacy-best-practices" },
      { slug: "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown" },
      { slug: "how-uwb-works-time-of-flight-tdoa-deep-dive" },
      { slug: "ble-positioning-rssi-aoa-fingerprinting-explained" },
      { slug: "indoor-positioning-basics" },
    ]

    console.log("Using fallback article list with", fallbackArticles.length, "articles")

    resourcePages = fallbackArticles.map((article) => ({
      url: `${baseUrl}/resources/${article.slug}`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    }))
  }

  // Combine all pages
  const allPages = [...mainPages, ...technologyPages, ...modulePages, ...resourcePages]
  console.log(`Total URLs in sitemap: ${allPages.length} (including ${resourcePages.length} resource pages)`)

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

  console.log("Sitemap generation completed at", new Date().toISOString())

  // Return XML response with no caching
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}

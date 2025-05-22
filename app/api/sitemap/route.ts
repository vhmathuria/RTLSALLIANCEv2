import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(): Promise<NextResponse> {
  try {
    const baseUrl = "https://rtlsalliance.com"
    const currentDate = new Date().toISOString()

    // Main pages
    const mainPages = [
      { url: baseUrl, priority: 1.0 },
      { url: `${baseUrl}/rtls-digital-twin`, priority: 0.9 },
      { url: `${baseUrl}/resources`, priority: 0.9 },
      { url: `${baseUrl}/certification`, priority: 0.8 },
      { url: `${baseUrl}/membership`, priority: 0.9 },
      { url: `${baseUrl}/contact`, priority: 0.7 },
      { url: `${baseUrl}/ecosystem`, priority: 0.8 },
      { url: `${baseUrl}/ecosystem/directory`, priority: 0.8 },
      { url: `${baseUrl}/project`, priority: 0.7 },
      { url: `${baseUrl}/membership/upgrade`, priority: 0.6 },
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
      priority: 0.8,
    }))

    // Module pages
    const modules = ["fleet-manager", "rules-engine", "dashboard-reports", "production-planning", "process-control"]

    const modulePages = modules.map((module) => ({
      url: `${baseUrl}/rtls-digital-twin/modules/${module}`,
      priority: 0.7,
    }))

    // Fetch resource pages directly from Supabase
    let resourcePages = []
    const { data: articles, error } = await supabase.from("staging_articles").select("slug, updated_at, publish_date")

    if (error) {
      console.error("Error fetching articles for sitemap:", error)
    } else if (articles && articles.length > 0) {
      resourcePages = articles.map((article) => ({
        url: `${baseUrl}/resources/${article.slug}`,
        priority: 0.8,
        lastmod: article.updated_at || article.publish_date || currentDate,
      }))
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
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq || "monthly"}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

    // Return XML response
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return NextResponse.json({ error: "Failed to generate sitemap" }, { status: 500 })
  }
}

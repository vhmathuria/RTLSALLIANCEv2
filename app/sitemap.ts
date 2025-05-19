import type { MetadataRoute } from "next"
import { getAllArticles } from "@/lib/supabase"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all articles for dynamic routes
  const allArticles = await getAllArticles()

  // Base URL
  const baseUrl = "https://rtlsalliance.org"

  // Current date for lastModified
  const currentDate = new Date()

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosystem/directory`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join-alliance`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rtls-digital-twin`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
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

  const technologyRoutes = technologies.map((tech) => ({
    url: `${baseUrl}/rtls-digital-twin/technologies/${tech}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Module pages
  const modules = [
    "production-planning",
    "process-control",
    "rules-engine",
    "dashboard-reports",
    "fleet-manager",
    "simulation-modeling",
  ]

  const moduleRoutes = modules.map((module) => ({
    url: `${baseUrl}/rtls-digital-twin/modules/${module}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Article routes
  const articleRoutes = allArticles.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(article.updated_at || article.publish_date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Combine all routes
  return [...staticRoutes, ...technologyRoutes, ...moduleRoutes, ...articleRoutes]
}

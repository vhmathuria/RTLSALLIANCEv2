import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rtlsalliance.com"
  const currentDate = new Date()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/rtls-digital-twin`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/certification`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: currentDate,
      changeFrequency: "monthly",
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
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosystem/directory`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
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
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Module pages
  const modules = ["fleet-manager", "rules-engine", "dashboard-reports", "production-planning", "process-control"]

  const modulePages = modules.map((module) => ({
    url: `${baseUrl}/rtls-digital-twin/modules/${module}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Resource pages - dynamically generated but we can include known ones
  // In a production environment, you would fetch these from your CMS or database
  const resourceSlugs = [
    // Add your resource slugs here - these would typically come from your database
    // Example: "rtls-implementation-guide", "uwb-vs-ble-comparison", etc.
  ]

  const resourcePages = resourceSlugs.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Account and membership pages that should be indexed
  const accountPages = [
    {
      url: `${baseUrl}/membership/upgrade`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  // Combine all pages
  return [...mainPages, ...technologyPages, ...modulePages, ...resourcePages, ...accountPages]
}

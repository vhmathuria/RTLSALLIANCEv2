import { technologyInterlinks, moduleInterlinks, industryInterlinks } from "./interlink-map"

/**
 * Generates a BreadcrumbList schema for structured data
 * Now with proper error handling for undefined or invalid input
 */
export function generateBreadcrumbSchema(breadcrumbs?: { name: string; url: string }[]) {
  // Return a valid but empty schema if no breadcrumbs are provided
  if (!breadcrumbs || !Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [],
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  }
}

/**
 * Generates an Organization schema for structured data
 */
export function generateOrganizationSchema({
  name,
  url,
  logo,
  description,
  sameAs,
}: {
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    description,
    sameAs,
  }
}

/**
 * Generates an Article schema for structured data
 */
export function generateArticleSchema({
  title,
  description,
  url,
  imageUrl,
  authorName,
  publisherName,
  publisherLogo,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  imageUrl: string
  authorName: string
  publisherName: string
  publisherLogo: string
  datePublished: string
  dateModified: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    url,
    datePublished,
    dateModified,
  }
}

/**
 * Generates a Technology schema for structured data (Product type)
 */
export function generateTechnologySchema({
  name,
  description,
  image,
  url,
  category,
  brand = "RTLS Alliance",
  offers = null,
}: {
  name: string
  description: string
  image: string
  url: string
  category: string
  brand?: string
  offers?: any
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url,
    category,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(offers && { offers }),
  }
}

/**
 * Extracts keywords from content
 */
export function extractKeywords(content: string, maxKeywords = 10): string {
  // This is a simplified implementation
  // In a real application, you would use NLP or other techniques
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .reduce(
      (acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

  return Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word)
    .join(", ")
}

/**
 * Generate meta description for technology pages
 * @param technology - The technology name
 */
export function generateTechnologyMetaDescription(technology: string): string {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())

  if (!techInfo)
    return `Learn about ${technology} technology for real-time location systems (RTLS) and indoor positioning.`

  return `Explore ${technology} technology for real-time location systems (RTLS), including how it works, advantages, limitations, and use cases across ${techInfo.relatedIndustries.slice(0, 3).join(", ")} industries.`
}

/**
 * Generate meta description for module pages
 * @param module - The module name
 */
export function generateModuleMetaDescription(module: string): string {
  const moduleInfo = moduleInterlinks.find((mod) => mod.module.toLowerCase() === module.toLowerCase())

  if (!moduleInfo) return `Learn about the ${module} module for RTLS digital twin applications.`

  return `Explore the ${module} module for RTLS digital twin applications, compatible with ${moduleInfo.relatedTechnologies.slice(0, 3).join(", ")} technologies and ideal for ${moduleInfo.relatedIndustries.slice(0, 3).join(", ")} industries.`
}

/**
 * Generate meta description for industry pages
 * @param industry - The industry name
 */
export function generateIndustryMetaDescription(industry: string): string {
  const industryInfo = industryInterlinks.find((ind) => ind.industry.toLowerCase() === industry.toLowerCase())

  if (!industryInfo) return `Discover RTLS solutions for the ${industry} industry.`

  return `Discover RTLS solutions for the ${industry} industry using ${industryInfo.relatedTechnologies.slice(0, 3).join(", ")} technologies to improve operational efficiency and asset tracking.`
}

/**
 * Generate canonical URL for any page
 * @param path - The page path
 */
export function generateCanonicalUrl(path: string): string {
  return `https://rtlsalliance.com${path}`
}

/**
 * Generate structured data for technology pages
 * @param technology - The technology name
 */
export function generateTechnologyStructuredData(technology: string) {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())

  if (!techInfo) return null

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${technology} Technology for RTLS and Indoor Positioning`,
    description: generateTechnologyMetaDescription(technology),
    author: {
      "@type": "Organization",
      name: "RTLS Alliance",
    },
    publisher: {
      "@type": "Organization",
      name: "RTLS Alliance",
      logo: {
        "@type": "ImageObject",
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": generateCanonicalUrl(techInfo.path),
    },
  }
}

/**
 * Generate breadcrumbs structured data
 * @param breadcrumbs - Array of breadcrumb items with name and path
 */
export function generateBreadcrumbsStructuredData(breadcrumbs?: { name: string; path: string }[]) {
  // Return empty schema if no breadcrumbs
  if (!breadcrumbs || !Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [],
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: generateCanonicalUrl(item.path),
    })),
  }
}

/**
 * Generate FAQ structured data
 * @param faqs - Array of FAQ items with question and answer
 */
export function generateFAQStructuredData(faqs?: { question: string; answer: string }[]) {
  // Return null if no FAQs
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Helper function to get formatted technology name
 * @param technology - The technology slug
 */
export function getTechnologyName(technology: string): string {
  const names: Record<string, string> = {
    ble: "Bluetooth Low Energy",
    uwb: "Ultra-Wideband",
    wifi: "WiFi",
    nfc: "NFC",
    lora: "LoRa",
    infrared: "Infrared",
    lidar: "LiDAR",
    "ai-cameras": "AI Cameras",
    gnss: "GNSS",
    "rtk-gps": "RTK GPS",
    "magnetic-field": "Magnetic Field",
    ultrasound: "Ultrasound",
    "sensor-fusion": "Sensor Fusion",
    slam: "SLAM",
    "dead-reckoning": "Dead Reckoning",
  }

  return names[technology] || technology.charAt(0).toUpperCase() + technology.slice(1).replace(/-/g, " ")
}

import { technologyInterlinks, moduleInterlinks, industryInterlinks } from "./interlink-map"

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
export function generateBreadcrumbsStructuredData(breadcrumbs: { name: string; path: string }[]) {
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
export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
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

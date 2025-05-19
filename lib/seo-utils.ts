import type { Metadata } from "next"

/**
 * Generates standardized metadata for any page
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  ogImage = "/images/rtls-alliance-og-image.png",
  ogType = "website",
  twitterImage = "/images/rtls-alliance-twitter-image.png",
}: {
  title: string
  description: string
  keywords: string
  path: string
  ogImage?: string
  ogType?: "website" | "article"
  twitterImage?: string
}): Metadata {
  const url = `https://rtlsalliance.org${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "RTLS Alliance - Non-Profit Location Intelligence Community",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
    other: {
      "org:non-profit": "true",
      "org:sectors": "industrial, healthcare, defense, consumer",
    },
  }
}

/**
 * Generates standardized metadata for technology pages
 */
export function generateTechnologyMetadata(
  technology: string,
  subtitle: string,
  description: string,
  keywords: string,
): Metadata {
  const title = `${technology} Technology for RTLS | ${subtitle}`
  const path = `/rtls-digital-twin/technologies/${technology.toLowerCase()}`

  return generatePageMetadata({
    title,
    description,
    keywords,
    path,
    ogType: "article",
  })
}

/**
 * Generates standardized metadata for module pages
 */
export function generateModuleMetadata(
  module: string,
  subtitle: string,
  description: string,
  keywords: string,
): Metadata {
  const title = `RTLS ${module} Module | ${subtitle}`
  const path = `/rtls-digital-twin/modules/${module.toLowerCase().replace(/\s+/g, "-")}`

  return generatePageMetadata({
    title,
    description,
    keywords,
    path,
    ogType: "article",
  })
}

/**
 * Generates schema.org structured data for technology pages
 */
export function generateTechnologySchema(title: string, description: string, technology: string): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${technology} Technology for RTLS`,
    description,
    keywords: `${technology}, RTLS, real-time location systems`,
    author: {
      "@type": "NonprofitOrganization",
      name: "RTLS Alliance",
      description:
        "A non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors.",
    },
    publisher: {
      "@type": "NonprofitOrganization",
      name: "RTLS Alliance",
      description:
        "A non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors.",
      logo: {
        "@type": "ImageObject",
        url: "https://rtlsalliance.org/images/rtls-alliance-logo.png",
      },
    },
    datePublished: "2023-01-15",
    dateModified: new Date().toISOString().split("T")[0],
  })
}

/**
 * Generates schema.org structured data for module pages
 */
export function generateModuleSchema(title: string, description: string, module: string): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `RTLS ${module} Module`,
    description,
    keywords: `${module}, RTLS module, real-time location systems`,
    author: {
      "@type": "NonprofitOrganization",
      name: "RTLS Alliance",
      description:
        "A non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors.",
    },
    publisher: {
      "@type": "NonprofitOrganization",
      name: "RTLS Alliance",
      description:
        "A non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors.",
      logo: {
        "@type": "ImageObject",
        url: "https://rtlsalliance.org/images/rtls-alliance-logo.png",
      },
    },
    datePublished: "2023-01-15",
    dateModified: new Date().toISOString().split("T")[0],
  })
}

/**
 * Generates schema.org structured data for resource articles
 */
export function generateArticleSchema(article: any): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": article.content_type === "Success Story" ? "Case" : "Article",
    headline: article.title,
    description: article.meta_description || article.title,
    keywords: article.keywords || `RTLS, ${article.content_type.toLowerCase()}, real-time location systems`,
    author: {
      "@type": "NonprofitOrganization",
      name: "RTLS Alliance",
      description:
        "A non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors.",
    },
    publisher: {
      "@type": "NonprofitOrganization",
      name: "RTLS Alliance",
      description:
        "A non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors.",
      logo: {
        "@type": "ImageObject",
        url: "https://rtlsalliance.org/images/rtls-alliance-logo.png",
      },
    },
    datePublished: article.publish_date,
    dateModified: article.updated_at || article.publish_date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rtlsalliance.org/resources/${article.slug}`,
    },
  })
}

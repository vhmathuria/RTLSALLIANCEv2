import Script from "next/script"
import type { Article } from "@/types/article"

interface ResourceSEOProps {
  article: Article
}

export function ResourceSEO({ article }: ResourceSEOProps) {
  // Base URL for canonical and OG URLs
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
  const canonicalUrl = `${baseUrl}/resources/${article.slug}`

  // Format publication date
  const pubDate = article.published_at ? new Date(article.published_at).toISOString() : new Date().toISOString()

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description || article.excerpt || `Read about ${article.title} on RTLS Alliance.`,
    image: article.featured_image || `${baseUrl}/images/rtls-alliance-logo.png`,
    author: {
      "@type": "Person",
      name: article.author || "RTLS Alliance",
    },
    publisher: {
      "@type": "Organization",
      name: "RTLS Alliance",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/rtls-alliance-logo.png`,
      },
    },
    datePublished: pubDate,
    dateModified: article.updated_at ? new Date(article.updated_at).toISOString() : pubDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  }

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${baseUrl}/resources`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  }

  return (
    <Script id={`resource-seo-${article.slug}`} type="application/ld+json">
      {JSON.stringify([articleSchema, breadcrumbSchema])}
    </Script>
  )
}

import Script from "next/script"
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"
import type { Article } from "@/types/article"

interface ResourceSEOProps {
  article: Article
}

export function ResourceSEO({ article }: ResourceSEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
  const canonicalUrl = `${baseUrl}/resources/${article.slug}`
  const imageUrl = article.featured_image || `${baseUrl}/images/rtls-alliance-logo.png`

  // Format publication date
  const pubDate = article.published_at ? new Date(article.published_at).toISOString() : new Date().toISOString()
  const modDate = article.updated_at ? new Date(article.updated_at).toISOString() : pubDate

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.meta_description || article.excerpt || `Read about ${article.title} on RTLS Alliance.`,
    url: canonicalUrl,
    imageUrl: imageUrl,
    authorName: article.author || "RTLS Alliance",
    publisherName: "RTLS Alliance",
    publisherLogo: `${baseUrl}/images/rtls-alliance-logo.png`,
    datePublished: pubDate,
    dateModified: modDate,
    contentType: article.content_type || "Article",
  })

  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: "Home", url: baseUrl },
    { name: "Resources", url: `${baseUrl}/resources` },
    { name: article.title, url: canonicalUrl },
  ]

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script
        id={`article-schema-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

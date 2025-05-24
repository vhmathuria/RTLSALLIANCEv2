import Script from "next/script"
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"

interface ResourceSEOProps {
  title: string
  description: string
  url: string
  imageUrl: string
  authorName: string
  publisherName?: string
  publisherLogo?: string
  datePublished: string
  dateModified: string
  breadcrumbs?: { name: string; url: string }[]
}

export function ResourceSEO({
  title,
  description,
  url,
  imageUrl,
  authorName,
  publisherName = "RTLS Alliance",
  publisherLogo = "https://rtlsalliance.com/images/rtls-alliance-logo.png",
  datePublished,
  dateModified,
  breadcrumbs,
}: ResourceSEOProps) {
  // Generate structured data
  const articleSchema = generateArticleSchema({
    title,
    description,
    url,
    imageUrl,
    authorName,
    publisherName,
    publisherLogo,
    datePublished,
    dateModified,
  })

  // Generate breadcrumb schema with fallback
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script
        id={`article-schema-${encodeURIComponent(title.substring(0, 20))}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Script
          id={`breadcrumb-schema-${encodeURIComponent(title.substring(0, 20))}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  )
}

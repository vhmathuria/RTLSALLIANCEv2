import Script from "next/script"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"

interface PageSEOProps {
  title: string
  description: string
  type?: string
  url: string
  imageUrl?: string
  breadcrumbs?: { name: string; url: string }[]
}

export function PageSEO({ title, description, type = "WebPage", url, imageUrl, breadcrumbs }: PageSEOProps) {
  // Generate page schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: url,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
  }

  // Generate breadcrumb schema with fallback
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script
        id={`page-schema-${encodeURIComponent(title.substring(0, 20))}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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

export default PageSEO

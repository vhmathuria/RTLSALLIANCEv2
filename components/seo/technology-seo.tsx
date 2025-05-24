import Script from "next/script"
import { generateTechnologySchema, generateBreadcrumbSchema, getTechnologyName } from "@/lib/seo-utils"

interface TechnologySEOProps {
  title?: string
  description?: string
  technology:
    | string
    | {
        name: string
        slug: string
        image?: string
        category?: string
      }
  breadcrumbs?: { name: string; url: string }[]
}

export function TechnologySEO({ title, description, technology, breadcrumbs }: TechnologySEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"

  // Handle both string and object technology props
  const technologySlug = typeof technology === "string" ? technology : technology.slug
  const technologyName = typeof technology === "string" ? getTechnologyName(technology) : technology.name
  const technologyCategory =
    typeof technology === "string" ? "RTLS Technology" : technology.category || "RTLS Technology"
  const technologyImage =
    typeof technology === "string"
      ? `${baseUrl}/images/rtls-alliance-logo.png`
      : technology.image || `${baseUrl}/images/rtls-alliance-logo.png`

  const canonicalUrl = `${baseUrl}/rtls-digital-twin/technologies/${technologySlug}`

  // Use provided title/description or generate defaults
  const pageTitle = title || `${technologyName} Technology | RTLS Alliance`
  const pageDescription =
    description ||
    `Learn about ${technologyName} technology for real-time location systems (RTLS) and indoor positioning.`

  // Generate structured data
  const technologySchema = generateTechnologySchema({
    name: technologyName,
    description: pageDescription,
    image: technologyImage,
    url: canonicalUrl,
    category: technologyCategory,
  })

  // Generate breadcrumb schema with fallback
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script
        id={`technology-schema-${technologySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technologySchema) }}
      />
      <Script
        id={`breadcrumb-schema-${technologySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

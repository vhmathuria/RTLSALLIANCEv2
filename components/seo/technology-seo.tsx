import Script from "next/script"
import { generateTechnologySchema, generateBreadcrumbSchema } from "@/lib/seo-utils"

interface TechnologySEOProps {
  title: string
  description: string
  technology: {
    name: string
    slug: string
    image: string
    category: string
  }
  breadcrumbs: { name: string; url: string }[]
}

export function TechnologySEO({ title, description, technology, breadcrumbs }: TechnologySEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
  const canonicalUrl = `${baseUrl}/rtls-digital-twin/technologies/${technology.slug}`
  const imageUrl = technology.image || `${baseUrl}/images/rtls-alliance-logo.png`

  // Generate structured data
  const technologySchema = generateTechnologySchema({
    name: technology.name,
    description: description,
    image: imageUrl,
    url: canonicalUrl,
    category: technology.category,
  })

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script
        id={`technology-schema-${technology.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technologySchema) }}
      />
      <Script
        id={`breadcrumb-schema-${technology.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

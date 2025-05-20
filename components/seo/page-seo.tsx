import Script from "next/script"

interface PageSEOProps {
  title: string
  description: string
  structuredData?: any
  path?: string
  breadcrumbs?: { name: string; url: string }[]
  imageUrl?: string
  type?: "website" | "article" | "product"
  includeOrganization?: boolean
}

export function PageSEO({
  title,
  description,
  structuredData,
  path,
  breadcrumbs,
  imageUrl,
  type = "website",
  includeOrganization = false,
}: PageSEOProps) {
  // Only render structured data if provided
  if (!structuredData) {
    return null
  }

  // Handle array or single object
  const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData]

  return (
    <>
      {dataArray.map((data, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}

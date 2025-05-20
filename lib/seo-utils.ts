/**
 * Generates a BreadcrumbList schema for structured data
 */
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
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

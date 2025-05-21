import type { FAQItem } from "@/lib/faq-data"

interface FAQSchemaProps {
  faqs: FAQItem[]
  pageId?: string
}

export function FAQSchema({ faqs, pageId = "page" }: FAQSchemaProps) {
  // If no FAQs, don't render anything
  if (!faqs || faqs.length === 0) {
    return null
  }

  // Create the FAQ schema
  const faqSchema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      key={`faq-schema-${pageId}`}
    />
  )
}

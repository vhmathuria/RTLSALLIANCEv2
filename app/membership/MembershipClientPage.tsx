"use client"
import { PageSEO } from "@/components/seo/page-seo"
import Script from "next/script"

export default function MembershipClientPage() {
  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "Membership", url: "https://rtlsalliance.com/membership" },
  ]

  // Define product data for structured data
  const productData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Student Membership",
      description: "RTLS Alliance membership for students and academic researchers",
      brand: {
        "@type": "Brand",
        name: "RTLS Alliance",
      },
      offers: {
        "@type": "Offer",
        price: "49.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://rtlsalliance.com/membership",
        priceValidUntil: "2025-12-31",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Professional Membership",
      description: "RTLS Alliance membership for individual professionals",
      brand: {
        "@type": "Brand",
        name: "RTLS Alliance",
      },
      offers: {
        "@type": "Offer",
        price: "199.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://rtlsalliance.com/membership",
        priceValidUntil: "2025-12-31",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Corporate Membership",
      description: "RTLS Alliance membership for organizations and companies",
      brand: {
        "@type": "Brand",
        name: "RTLS Alliance",
      },
      offers: {
        "@type": "Offer",
        price: "999.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://rtlsalliance.com/membership",
        priceValidUntil: "2025-12-31",
      },
    },
  ]

  return (
    <>
      <PageSEO
        title="Membership Plans - RTLS Alliance"
        description="Join the RTLS Alliance with a membership plan that fits your needs. Access exclusive resources, networking opportunities, and industry insights."
        path="/membership"
        breadcrumbs={breadcrumbs}
      />
      <Script
        id="product-schema-student"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData[0]) }}
      />
      <Script
        id="product-schema-professional"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData[1]) }}
      />
      <Script
        id="product-schema-corporate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData[2]) }}
      />
    </>
  )
}

import type { Metadata } from "next"
import ContactPage from "./ContactClientPage"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = {
  title: "Contact Us - RTLS Alliance",
  description: "Get in touch with the RTLS Alliance team for inquiries, partnerships, or support.",
  keywords:
    "contact RTLS Alliance, RTLS support, real-time location systems help, RTLS inquiries, location technology support",
  openGraph: {
    title: "Contact Us - RTLS Alliance",
    description: "Get in touch with the RTLS Alliance team for inquiries, partnerships, or support.",
    url: "https://rtlsalliance.com/contact",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact RTLS Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - RTLS Alliance",
    description: "Get in touch with the RTLS Alliance team for inquiries, partnerships, or support.",
    images: ["https://rtlsalliance.com/images/rtls-alliance-logo.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/contact",
  },
}

export default function ContactServerPage() {
  // Define local business data for structured data
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RTLS Alliance",
    url: "https://rtlsalliance.com",
    logo: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+4915205888777",
      contactType: "customer service",
      email: "hello@rtlsalliance.org",
      availableLanguage: ["English", "German"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Neue Schönhauserstr. 3-5",
      addressLocality: "Berlin",
      postalCode: "10178",
      addressCountry: "DE",
    },
    sameAs: [
      "https://twitter.com/rtlsalliance",
      "https://www.linkedin.com/company/rtlsalliance",
      "https://github.com/rtlsalliance",
    ],
  }

  return (
    <>
      <PageSEO
        title={metadata.title as string}
        description={metadata.description as string}
        structuredData={localBusinessData}
      />
      <ContactPage />
    </>
  )
}

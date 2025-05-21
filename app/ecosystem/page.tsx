import EcosystemPage from "./EcosystemClientPage"
import { PageSEO } from "@/components/seo/page-seo"
import Script from "next/script"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "RTLS Ecosystem - Partners & Vendors",
  description:
    "Explore the RTLS ecosystem of technology providers, system integrators, and solution partners for real-time location systems.",
  keywords:
    "RTLS ecosystem, real-time location systems vendors, RTLS partners, RTLS technology providers, RTLS system integrators, location tracking solutions",
  openGraph: {
    title: "RTLS Ecosystem - Partners & Vendors",
    description:
      "Explore the RTLS ecosystem of technology providers, system integrators, and solution partners for real-time location systems.",
    url: "https://rtlsalliance.com/ecosystem",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTLS Ecosystem - Partners & Vendors",
    description:
      "Explore the RTLS ecosystem of technology providers, system integrators, and solution partners for real-time location systems.",
    images: ["https://rtlsalliance.com/images/rtls-alliance-logo.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/ecosystem",
  },
}

// Add revalidation to the ecosystem page
export const revalidate = 86400

export default function EcosystemPageWrapper() {
  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "Ecosystem", url: "https://rtlsalliance.com/ecosystem" },
  ]

  // Define vendor list data for structured data
  const vendorListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Organization",
          name: "Kontakt.io",
          url: "https://kontakt.io",
          logo: "https://rtlsalliance.com/kontakt-io-logo.png",
          description: "Provider of BLE beacons and RTLS solutions",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Organization",
          name: "Estimote",
          url: "https://estimote.com",
          logo: "https://rtlsalliance.com/estimote-logo.png",
          description: "Provider of BLE beacons and indoor location solutions",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Organization",
          name: "Sewio",
          url: "https://www.sewio.net",
          logo: "https://rtlsalliance.com/sewio-logo.png",
          description: "Provider of UWB RTLS solutions",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Organization",
          name: "Ubisense",
          url: "https://ubisense.com",
          logo: "https://rtlsalliance.com/ubisense-logo.png",
          description: "Provider of UWB and sensor fusion RTLS solutions",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Organization",
          name: "Pozyx",
          url: "https://www.pozyx.io",
          logo: "https://rtlsalliance.com/pozyx-logo.png",
          description: "Provider of UWB positioning solutions",
        },
      },
    ],
  }

  return (
    <>
      <PageSEO
        title={metadata.title as string}
        description={metadata.description as string}
        path="/ecosystem"
        breadcrumbs={breadcrumbs}
      />
      <Script
        id="vendor-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vendorListData) }}
      />
      <EcosystemPage />
    </>
  )
}

import UltrasoundTechnologyClientPage from "./UltrasoundTechnologyClientPage"
import { TechnologySEO } from "@/components/seo/technology-seo"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "Ultrasound Positioning Technology - RTLS Alliance",
  description:
    "Discover how ultrasound technology provides high-precision indoor positioning through sound wave time-of-flight measurements.",
  keywords:
    "ultrasound positioning, acoustic positioning, indoor positioning, time-of-flight, high-precision, RTLS, location tracking",
  openGraph: {
    title: "Ultrasound Positioning Technology - RTLS Alliance",
    description:
      "Discover how ultrasound technology provides high-precision indoor positioning through sound wave time-of-flight measurements.",
    url: "https://rtlsalliance.com/rtls-digital-twin/technologies/ultrasound",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/ultrasound-positioning.png",
        width: 1200,
        height: 630,
        alt: "Ultrasound Positioning Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultrasound Positioning Technology - RTLS Alliance",
    description:
      "Discover how ultrasound technology provides high-precision indoor positioning through sound wave time-of-flight measurements.",
    images: ["https://rtlsalliance.com/images/ultrasound-positioning.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/rtls-digital-twin/technologies/ultrasound",
  },
}

export default function UltrasoundTechnologyPage() {
  // Define technology data for structured data
  const technology = {
    name: "Ultrasound Positioning Technology",
    slug: "ultrasound",
    image: "https://rtlsalliance.com/images/ultrasound-positioning.png",
    category: "Acoustic Positioning Technology",
  }

  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "RTLS + Digital Twin", url: "https://rtlsalliance.com/rtls-digital-twin" },
    { name: "Technologies", url: "https://rtlsalliance.com/rtls-digital-twin/technologies" },
    { name: "Ultrasound", url: "https://rtlsalliance.com/rtls-digital-twin/technologies/ultrasound" },
  ]

  return (
    <>
      <TechnologySEO
        title={metadata.title as string}
        description={metadata.description as string}
        technology={technology}
        breadcrumbs={breadcrumbs}
      />
      <UltrasoundTechnologyClientPage />
    </>
  )
}

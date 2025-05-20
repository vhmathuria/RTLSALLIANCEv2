import RTKGPSTechnologyClientPage from "./RTKGPSTechnologyClientPage"
import { TechnologySEO } from "@/components/seo/technology-seo"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "RTK-GPS Technology for Precise Positioning - RTLS Alliance",
  description:
    "Learn how Real-Time Kinematic GPS provides centimeter-level accuracy for outdoor positioning and tracking applications.",
  keywords:
    "RTK-GPS, real-time kinematic, GPS, GNSS, precise positioning, centimeter accuracy, differential GPS, RTLS, location tracking",
  openGraph: {
    title: "RTK-GPS Technology for Precise Positioning - RTLS Alliance",
    description:
      "Learn how Real-Time Kinematic GPS provides centimeter-level accuracy for outdoor positioning and tracking applications.",
    url: "https://rtlsalliance.com/rtls-digital-twin/technologies/rtk-gps",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtk-gps-positioning.png",
        width: 1200,
        height: 630,
        alt: "RTK-GPS Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTK-GPS Technology for Precise Positioning - RTLS Alliance",
    description:
      "Learn how Real-Time Kinematic GPS provides centimeter-level accuracy for outdoor positioning and tracking applications.",
    images: ["https://rtlsalliance.com/images/rtk-gps-positioning.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/rtls-digital-twin/technologies/rtk-gps",
  },
}

export default function RTKGPSTechnologyPage() {
  // Define technology data for structured data
  const technology = {
    name: "RTK-GPS Technology",
    slug: "rtk-gps",
    image: "https://rtlsalliance.com/images/rtk-gps-positioning.png",
    category: "Satellite Positioning Technology",
  }

  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "RTLS + Digital Twin", url: "https://rtlsalliance.com/rtls-digital-twin" },
    { name: "Technologies", url: "https://rtlsalliance.com/rtls-digital-twin/technologies" },
    { name: "RTK-GPS", url: "https://rtlsalliance.com/rtls-digital-twin/technologies/rtk-gps" },
  ]

  return (
    <>
      <TechnologySEO
        title={metadata.title as string}
        description={metadata.description as string}
        technology={technology}
        breadcrumbs={breadcrumbs}
      />
      <RTKGPSTechnologyClientPage />
    </>
  )
}

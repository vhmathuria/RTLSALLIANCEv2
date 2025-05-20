import SensorFusionTechnologyClientPage from "./SensorFusionTechnologyClientPage"
import { TechnologySEO } from "@/components/seo/technology-seo"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "Sensor Fusion for RTLS - RTLS Alliance",
  description:
    "Learn how sensor fusion combines multiple positioning technologies to create more accurate and reliable location tracking systems.",
  keywords:
    "sensor fusion, multi-sensor integration, hybrid positioning, data fusion, RTLS, location tracking, positioning accuracy",
  openGraph: {
    title: "Sensor Fusion for RTLS - RTLS Alliance",
    description:
      "Learn how sensor fusion combines multiple positioning technologies to create more accurate and reliable location tracking systems.",
    url: "https://rtlsalliance.com/rtls-digital-twin/technologies/sensor-fusion",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/placeholder-rjuey.png",
        width: 1200,
        height: 630,
        alt: "Sensor Fusion Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensor Fusion for RTLS - RTLS Alliance",
    description:
      "Learn how sensor fusion combines multiple positioning technologies to create more accurate and reliable location tracking systems.",
    images: ["https://rtlsalliance.com/placeholder-rjuey.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/rtls-digital-twin/technologies/sensor-fusion",
  },
}

export default function SensorFusionTechnologyPage() {
  // Define technology data for structured data
  const technology = {
    name: "Sensor Fusion Technology",
    slug: "sensor-fusion",
    image: "https://rtlsalliance.com/placeholder-rjuey.png",
    category: "Hybrid Positioning Technology",
  }

  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "RTLS + Digital Twin", url: "https://rtlsalliance.com/rtls-digital-twin" },
    { name: "Technologies", url: "https://rtlsalliance.com/rtls-digital-twin/technologies" },
    { name: "Sensor Fusion", url: "https://rtlsalliance.com/rtls-digital-twin/technologies/sensor-fusion" },
  ]

  return (
    <>
      <TechnologySEO
        title={metadata.title as string}
        description={metadata.description as string}
        technology={technology}
        breadcrumbs={breadcrumbs}
      />
      <SensorFusionTechnologyClientPage />
    </>
  )
}

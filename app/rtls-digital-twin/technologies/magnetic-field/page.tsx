import MagneticFieldTechnologyClientPage from "./MagneticFieldTechnologyClientPage"
import { TechnologySEO } from "@/components/seo/technology-seo"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "Magnetic Field Positioning Technology - RTLS Alliance",
  description:
    "Explore how magnetic field mapping enables indoor positioning without the need for additional infrastructure.",
  keywords:
    "magnetic field positioning, indoor positioning, infrastructure-free positioning, magnetic fingerprinting, RTLS, location tracking",
  openGraph: {
    title: "Magnetic Field Positioning Technology - RTLS Alliance",
    description:
      "Explore how magnetic field mapping enables indoor positioning without the need for additional infrastructure.",
    url: "https://rtlsalliance.com/rtls-digital-twin/technologies/magnetic-field",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/indoor-magnetic-heatmap.png",
        width: 1200,
        height: 630,
        alt: "Magnetic Field Positioning Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnetic Field Positioning Technology - RTLS Alliance",
    description:
      "Explore how magnetic field mapping enables indoor positioning without the need for additional infrastructure.",
    images: ["https://rtlsalliance.com/indoor-magnetic-heatmap.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/rtls-digital-twin/technologies/magnetic-field",
  },
}

export default function MagneticFieldTechnologyPage() {
  // Define technology data for structured data
  const technology = {
    name: "Magnetic Field Positioning Technology",
    slug: "magnetic-field",
    image: "https://rtlsalliance.com/indoor-magnetic-heatmap.png",
    category: "Indoor Positioning Technology",
  }

  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "RTLS + Digital Twin", url: "https://rtlsalliance.com/rtls-digital-twin" },
    { name: "Technologies", url: "https://rtlsalliance.com/rtls-digital-twin/technologies" },
    { name: "Magnetic Field", url: "https://rtlsalliance.com/rtls-digital-twin/technologies/magnetic-field" },
  ]

  return (
    <>
      <TechnologySEO
        title={metadata.title as string}
        description={metadata.description as string}
        technology={technology}
        breadcrumbs={breadcrumbs}
      />
      <MagneticFieldTechnologyClientPage />
    </>
  )
}

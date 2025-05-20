import SLAMTechnologyClientPage from "./SLAMTechnologyClientPage"
import { TechnologySEO } from "@/components/seo/technology-seo"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "SLAM Technology for Indoor Positioning - RTLS Alliance",
  description:
    "Explore how Simultaneous Localization and Mapping (SLAM) enables devices to map their environment while tracking their position.",
  keywords:
    "SLAM, simultaneous localization and mapping, indoor positioning, autonomous navigation, mapping, RTLS, location tracking",
  openGraph: {
    title: "SLAM Technology for Indoor Positioning - RTLS Alliance",
    description:
      "Explore how Simultaneous Localization and Mapping (SLAM) enables devices to map their environment while tracking their position.",
    url: "https://rtlsalliance.com/rtls-digital-twin/technologies/slam",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/slam-mapping.png",
        width: 1200,
        height: 630,
        alt: "SLAM Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLAM Technology for Indoor Positioning - RTLS Alliance",
    description:
      "Explore how Simultaneous Localization and Mapping (SLAM) enables devices to map their environment while tracking their position.",
    images: ["https://rtlsalliance.com/images/slam-mapping.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/rtls-digital-twin/technologies/slam",
  },
}

export default function SLAMTechnologyPage() {
  // Define technology data for structured data
  const technology = {
    name: "SLAM Technology",
    slug: "slam",
    image: "https://rtlsalliance.com/images/slam-mapping.png",
    category: "Autonomous Positioning Technology",
  }

  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "RTLS + Digital Twin", url: "https://rtlsalliance.com/rtls-digital-twin" },
    { name: "Technologies", url: "https://rtlsalliance.com/rtls-digital-twin/technologies" },
    { name: "SLAM", url: "https://rtlsalliance.com/rtls-digital-twin/technologies/slam" },
  ]

  return (
    <>
      <TechnologySEO
        title={metadata.title as string}
        description={metadata.description as string}
        technology={technology}
        breadcrumbs={breadcrumbs}
      />
      <SLAMTechnologyClientPage />
    </>
  )
}

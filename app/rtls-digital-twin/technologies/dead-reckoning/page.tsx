import DeadReckoningTechnologyClientPage from "./DeadReckoningTechnologyClientPage"
import { TechnologySEO } from "@/components/seo/technology-seo"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "Dead Reckoning Technology for RTLS - RTLS Alliance",
  description:
    "Learn how dead reckoning combined with RTLS anchors provides continuous positioning even in challenging environments.",
  keywords:
    "dead reckoning, inertial navigation, IMU, sensor fusion, RTLS anchors, continuous positioning, RTLS, location tracking",
  openGraph: {
    title: "Dead Reckoning Technology for RTLS - RTLS Alliance",
    description:
      "Learn how dead reckoning combined with RTLS anchors provides continuous positioning even in challenging environments.",
    url: "https://rtlsalliance.com/rtls-digital-twin/technologies/dead-reckoning",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/dead-reckoning-rtls.png",
        width: 1200,
        height: 630,
        alt: "Dead Reckoning Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dead Reckoning Technology for RTLS - RTLS Alliance",
    description:
      "Learn how dead reckoning combined with RTLS anchors provides continuous positioning even in challenging environments.",
    images: ["https://rtlsalliance.com/dead-reckoning-rtls.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/rtls-digital-twin/technologies/dead-reckoning",
  },
}

export default function DeadReckoningTechnologyPage() {
  // Define technology data for structured data
  const technology = {
    name: "Dead Reckoning Technology",
    slug: "dead-reckoning",
    image: "https://rtlsalliance.com/dead-reckoning-rtls.png",
    category: "Hybrid Positioning Technology",
  }

  // Define breadcrumbs for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://rtlsalliance.com" },
    { name: "RTLS + Digital Twin", url: "https://rtlsalliance.com/rtls-digital-twin" },
    { name: "Technologies", url: "https://rtlsalliance.com/rtls-digital-twin/technologies" },
    { name: "Dead Reckoning", url: "https://rtlsalliance.com/rtls-digital-twin/technologies/dead-reckoning" },
  ]

  return (
    <>
      <TechnologySEO
        title={metadata.title as string}
        description={metadata.description as string}
        technology={technology}
        breadcrumbs={breadcrumbs}
      />
      <DeadReckoningTechnologyClientPage />
    </>
  )
}

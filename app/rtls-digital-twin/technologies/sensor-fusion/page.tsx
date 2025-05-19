import SensorFusionTechnologyClientPage from "./SensorFusionTechnologyClientPage" // Assuming this is the correct path

export const metadata = {
  title: "Sensor Fusion Technology for RTLS | Multi-Technology Integration",
  description:
    "Learn how sensor fusion combines multiple positioning technologies to create more accurate, reliable, and comprehensive real-time location systems for complex environments and demanding applications.",
  keywords:
    "sensor fusion, multi-technology RTLS, hybrid positioning, integrated tracking, complementary technologies, reliability enhancement, accuracy improvement",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/sensor-fusion",
  },
  openGraph: {
    title: "Sensor Fusion Technology for RTLS | RTLS Alliance",
    description:
      "Learn how sensor fusion combines multiple positioning technologies to create more accurate and reliable RTLS.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/sensor-fusion",
    type: "article",
  },
}

export default function SensorFusionTechnologyPage() {
  return (
    <>
      <SensorFusionTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Sensor Fusion Technology for RTLS",
            description:
              "Learn how sensor fusion combines multiple positioning technologies to create more accurate, reliable, and comprehensive real-time location systems.",
            keywords: "sensor fusion, multi-technology RTLS, hybrid positioning, integrated tracking",
            author: {
              "@type": "Organization",
              name: "RTLS Alliance",
            },
            publisher: {
              "@type": "Organization",
              name: "RTLS Alliance",
              logo: {
                "@type": "ImageObject",
                url: "https://rtlsalliance.org/images/rtls-alliance-logo.png",
              },
            },
            datePublished: "2024-01-20",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

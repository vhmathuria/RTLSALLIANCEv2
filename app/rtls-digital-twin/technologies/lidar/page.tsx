import LiDARTechnologyClientPage from "./LiDARTechnologyClientPage"

export const metadata = {
  title: "LiDAR Technology for RTLS | High-Precision 3D Positioning",
  description:
    "Comprehensive guide to LiDAR technology for high-precision real-time location systems and indoor positioning. Learn about implementation requirements, 3D mapping capabilities, and applications for autonomous navigation.",
  keywords:
    "LiDAR RTLS, laser scanning, 3D positioning, high-precision tracking, autonomous navigation, indoor mapping, obstacle detection, centimeter accuracy",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/lidar",
  },
  openGraph: {
    title: "LiDAR Technology for RTLS | RTLS Alliance",
    description:
      "Comprehensive guide to LiDAR technology for high-precision real-time location systems and indoor positioning.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/lidar",
    type: "article",
  },
}

export default function LiDARTechnologyPage() {
  return (
    <>
      <LiDARTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "LiDAR Technology for RTLS",
            description:
              "Comprehensive guide to LiDAR technology for high-precision real-time location systems and indoor positioning.",
            keywords: "LiDAR RTLS, laser scanning, 3D positioning, high-precision tracking",
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
            datePublished: "2023-07-10",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

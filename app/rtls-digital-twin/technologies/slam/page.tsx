import SLAMTechnologyClientPage from "./SLAMTechnologyClientPage" // Assuming this is the correct path

export const metadata = {
  title: "SLAM Technology for RTLS | Simultaneous Localization and Mapping",
  description:
    "Learn how Simultaneous Localization and Mapping (SLAM) enables devices to build maps of unknown environments while simultaneously tracking their position, providing infrastructure-free positioning for robotics and automation.",
  keywords:
    "SLAM, simultaneous localization and mapping, infrastructure-free positioning, robotics navigation, autonomous vehicles, dynamic mapping, real-time cartography",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/slam",
  },
  openGraph: {
    title: "SLAM Technology for RTLS | RTLS Alliance",
    description:
      "Learn how Simultaneous Localization and Mapping (SLAM) enables infrastructure-free positioning for robotics and automation.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/slam",
    type: "article",
  },
}

export default function SLAMTechnologyPage() {
  return (
    <>
      <SLAMTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "SLAM Technology for RTLS",
            description:
              "Learn how Simultaneous Localization and Mapping (SLAM) enables devices to build maps of unknown environments while simultaneously tracking their position.",
            keywords: "SLAM, simultaneous localization and mapping, infrastructure-free positioning",
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
            datePublished: "2024-02-15",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

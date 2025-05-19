import InfraredTechnologyClientPage from "./InfraredTechnologyClientPage"

export const metadata = {
  title: "Infrared Technology for RTLS | Line-of-Sight Precision Tracking",
  description:
    "Comprehensive guide to Infrared technology for real-time location systems and indoor positioning. Learn about implementation requirements, room-level accuracy, and applications for personnel tracking.",
  keywords:
    "infrared RTLS, IR positioning, line-of-sight tracking, room-level accuracy, badge tracking, personnel monitoring, indoor positioning",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/infrared",
  },
  openGraph: {
    title: "Infrared Technology for RTLS | RTLS Alliance",
    description: "Comprehensive guide to Infrared technology for real-time location systems and indoor positioning.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/infrared",
    type: "article",
  },
}

export default function InfraredTechnologyPage() {
  return (
    <>
      <InfraredTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Infrared Technology for RTLS",
            description:
              "Comprehensive guide to Infrared technology for real-time location systems and indoor positioning.",
            keywords: "infrared RTLS, IR positioning, line-of-sight tracking, room-level accuracy",
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
            datePublished: "2023-06-15",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

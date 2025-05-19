import RTKGPSTechnologyClientPage from "./RTKGPSTechnologyClientPage" // Assuming this is the correct path

export const metadata = {
  title: "RTK-GPS/DGPS Technology for Real-Time Location Systems | Centimeter Accuracy",
  description:
    "Explore how Real-Time Kinematic (RTK) GPS and Differential GPS (DGPS) deliver centimeter-level positioning accuracy for high-precision outdoor RTLS applications in agriculture, construction, and surveying.",
  keywords:
    "RTK GPS, DGPS, differential GPS, high-precision GPS, centimeter accuracy, outdoor positioning, precision agriculture, construction tracking, surveying",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/rtk-gps",
  },
  openGraph: {
    title: "RTK-GPS/DGPS Technology for Real-Time Location Systems | RTLS Alliance",
    description:
      "Explore how Real-Time Kinematic (RTK) GPS and Differential GPS (DGPS) deliver centimeter-level positioning accuracy.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/rtk-gps",
    type: "article",
  },
}

export default function RTKGPSPage() {
  return (
    <>
      <RTKGPSTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "RTK-GPS/DGPS Technology for Real-Time Location Systems",
            description:
              "Explore how Real-Time Kinematic (RTK) GPS and Differential GPS (DGPS) deliver centimeter-level positioning accuracy for high-precision outdoor RTLS applications.",
            keywords: "RTK GPS, DGPS, differential GPS, high-precision GPS, centimeter accuracy",
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
            datePublished: "2023-10-05",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

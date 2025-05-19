import GNSSTechnologyClientPage from "./GNSSTechnologyClientPage" // Assuming this is the correct path

export const metadata = {
  title: "GNSS Technology for Real-Time Location Systems | Outdoor Positioning",
  description:
    "Explore how Global Navigation Satellite Systems (GPS, GLONASS, Galileo, BeiDou) provide worldwide positioning capabilities for outdoor RTLS applications with meter-level accuracy and global coverage.",
  keywords:
    "GNSS, GPS, GLONASS, Galileo, BeiDou, satellite positioning, outdoor RTLS, global tracking, fleet management, logistics tracking",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/gnss",
  },
  openGraph: {
    title: "GNSS Technology for Real-Time Location Systems | RTLS Alliance",
    description:
      "Explore how Global Navigation Satellite Systems provide worldwide positioning capabilities for outdoor RTLS applications.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/gnss",
    type: "article",
  },
}

export default function GNSSPage() {
  return (
    <>
      <GNSSTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "GNSS Technology for Real-Time Location Systems",
            description:
              "Explore how Global Navigation Satellite Systems (GPS, GLONASS, Galileo, BeiDou) provide worldwide positioning capabilities for outdoor RTLS applications.",
            keywords: "GNSS, GPS, GLONASS, Galileo, BeiDou, satellite positioning, outdoor RTLS",
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
            datePublished: "2023-09-12",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

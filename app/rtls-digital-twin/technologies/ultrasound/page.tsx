import UltrasoundTechnologyClientPage from "./UltrasoundTechnologyClientPage" // Assuming this is the correct import path

export const metadata = {
  title: "Ultrasound Technology for RTLS | High-Accuracy Room Containment",
  description:
    "Comprehensive guide to ultrasound positioning systems for real-time location tracking and indoor positioning with centimeter-level accuracy and reliable room containment capabilities.",
  keywords:
    "ultrasound positioning, ultrasonic RTLS, acoustic positioning, room containment, centimeter accuracy, non-RF tracking, healthcare tracking",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/ultrasound",
  },
  openGraph: {
    title: "Ultrasound Technology for RTLS | RTLS Alliance",
    description:
      "Comprehensive guide to ultrasound positioning systems for real-time location tracking and indoor positioning.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/ultrasound",
    type: "article",
  },
}

export default function UltrasoundTechnologyPage() {
  return (
    <>
      <UltrasoundTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Ultrasound Technology for RTLS",
            description:
              "Comprehensive guide to ultrasound positioning systems for real-time location tracking and indoor positioning.",
            keywords: "ultrasound positioning, ultrasonic RTLS, acoustic positioning, room containment",
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
            datePublished: "2023-12-10",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

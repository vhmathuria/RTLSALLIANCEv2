import NFCTechnologyClientPage from "./NFCTechnologyClientPage" // Assuming this is the correct path

export const metadata = {
  title: "Near Field Communication (NFC) Technology for RTLS | Proximity Solutions",
  description:
    "Comprehensive guide to NFC technology for proximity-based identification and data exchange in RTLS applications. Learn about implementation costs, security features, and use cases for access control and payments.",
  keywords:
    "NFC, Near Field Communication, RFID, proximity detection, contactless payments, access control, asset identification, RTLS",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/nfc",
  },
  openGraph: {
    title: "Near Field Communication (NFC) Technology for RTLS | RTLS Alliance",
    description:
      "Comprehensive guide to NFC technology for proximity-based identification and data exchange in RTLS applications.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/nfc",
    type: "article",
  },
}

export default function NFCTechnologyPage() {
  return (
    <>
      <NFCTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Near Field Communication (NFC) Technology for RTLS",
            description:
              "Comprehensive guide to NFC technology for proximity-based identification and data exchange in RTLS applications.",
            keywords: "NFC, Near Field Communication, RFID, proximity detection, contactless payments",
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
            datePublished: "2023-04-12",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

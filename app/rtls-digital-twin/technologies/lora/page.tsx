import LoRaTechnologyClientPage from "./LoRaTechnologyClientPage" // Assuming this is the correct path

export const metadata = {
  title: "LoRa Technology for RTLS | Long-Range Low-Power Tracking",
  description:
    "Comprehensive guide to LoRa technology for long-range, low-power real-time location systems. Learn about implementation requirements, battery life optimization, and applications for wide-area asset tracking.",
  keywords:
    "LoRa, LoRaWAN, LPWAN, long-range tracking, low-power RTLS, wide-area asset tracking, IoT positioning, battery-efficient tracking",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/lora",
  },
  openGraph: {
    title: "LoRa Technology for RTLS | RTLS Alliance",
    description: "Comprehensive guide to LoRa technology for long-range, low-power real-time location systems.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/lora",
    type: "article",
  },
}

export default function LoRaTechnologyPage() {
  return (
    <>
      <LoRaTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "LoRa Technology for RTLS",
            description: "Comprehensive guide to LoRa technology for long-range, low-power real-time location systems.",
            keywords: "LoRa, LoRaWAN, LPWAN, long-range tracking, low-power RTLS",
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
            datePublished: "2023-05-20",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

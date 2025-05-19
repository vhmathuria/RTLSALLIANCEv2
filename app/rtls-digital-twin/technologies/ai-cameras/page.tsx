import AICamerasTechnologyClientPage from "./AICamerasTechnologyClientPage" // Assuming this is the correct import path

export const metadata = {
  title: "AI + Cameras Technology for RTLS | Computer Vision Tracking",
  description:
    "Comprehensive guide to AI-powered camera systems for real-time location tracking and analytics. Learn about implementation requirements, privacy considerations, and applications for behavior analysis and security.",
  keywords:
    "AI cameras, computer vision, RTLS, visual tracking, object recognition, behavior analysis, privacy-compliant monitoring, security tracking",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/ai-cameras",
  },
  openGraph: {
    title: "AI + Cameras Technology for RTLS | RTLS Alliance",
    description: "Comprehensive guide to AI-powered camera systems for real-time location tracking and analytics.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/ai-cameras",
    type: "article",
  },
}

export default function AICamerasTechnologyPage() {
  return (
    <>
      <AICamerasTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "AI + Cameras Technology for RTLS",
            description:
              "Comprehensive guide to AI-powered camera systems for real-time location tracking and analytics.",
            keywords: "AI cameras, computer vision, RTLS, visual tracking, object recognition",
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
            datePublished: "2023-08-05",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

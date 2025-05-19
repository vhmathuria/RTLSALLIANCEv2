import DeadReckoningTechnologyClientPage from "./DeadReckoningTechnologyClientPage"

export const metadata = {
  title: "Dead Reckoning Technology for RTLS | Infrastructure-Free Tracking",
  description:
    "Explore how Dead Reckoning uses inertial sensors to calculate position changes without external references, enabling infrastructure-free tracking for mobile devices, vehicles, and wearables.",
  keywords:
    "dead reckoning, inertial navigation, IMU, infrastructure-free tracking, pedestrian tracking, indoor navigation, sensor-based positioning",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/dead-reckoning",
  },
  openGraph: {
    title: "Dead Reckoning Technology for RTLS | RTLS Alliance",
    description:
      "Explore how Dead Reckoning uses inertial sensors to calculate position changes without external references.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/dead-reckoning",
    type: "article",
  },
}

export default function DeadReckoningTechnologyPage() {
  return (
    <>
      <DeadReckoningTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Dead Reckoning Technology for RTLS",
            description:
              "Explore how Dead Reckoning uses inertial sensors to calculate position changes without external references, enabling infrastructure-free tracking.",
            keywords: "dead reckoning, inertial navigation, IMU, infrastructure-free tracking",
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
            datePublished: "2024-03-10",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

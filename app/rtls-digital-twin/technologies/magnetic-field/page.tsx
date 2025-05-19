import MagneticFieldTechnologyClientPage from "./MagneticFieldTechnologyClientPage"

export const metadata = {
  title: "Magnetic Field Mapping Technology for RTLS | Infrastructure-Light Positioning",
  description:
    "Explore how magnetic field mapping leverages the unique magnetic fingerprint of indoor environments to enable infrastructure-light positioning for real-time location systems in complex facilities.",
  keywords:
    "magnetic field mapping, geomagnetic positioning, infrastructure-free RTLS, indoor navigation, magnetic fingerprinting, smartphone positioning",
  alternates: {
    canonical: "/rtls-digital-twin/technologies/magnetic-field",
  },
  openGraph: {
    title: "Magnetic Field Mapping Technology for RTLS | RTLS Alliance",
    description:
      "Explore how magnetic field mapping leverages the unique magnetic fingerprint of indoor environments for RTLS.",
    url: "https://rtlsalliance.org/rtls-digital-twin/technologies/magnetic-field",
    type: "article",
  },
}

export default function MagneticFieldPage() {
  return (
    <>
      <MagneticFieldTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Magnetic Field Mapping Technology for RTLS",
            description:
              "Explore how magnetic field mapping leverages the unique magnetic fingerprint of indoor environments to enable infrastructure-light positioning for real-time location systems.",
            keywords: "magnetic field mapping, geomagnetic positioning, infrastructure-free RTLS",
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
            datePublished: "2023-11-15",
            dateModified: "2024-05-19",
          }),
        }}
      />
    </>
  )
}

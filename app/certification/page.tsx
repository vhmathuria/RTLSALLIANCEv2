import type { Metadata } from "next"
import CertificationPage from "./CertificationClientPage"
import { PageSEO } from "@/components/seo/page-seo"

export const metadata: Metadata = {
  title: "Certification - RTLS Alliance",
  description: "Validate your expertise and accelerate your career with industry-recognized RTLS certifications.",
  keywords:
    "RTLS certification, real-time location systems certification, RTLS professional, RTLS expert, location technology certification",
  openGraph: {
    title: "Certification - RTLS Alliance",
    description: "Validate your expertise and accelerate your career with industry-recognized RTLS certifications.",
    url: "https://rtlsalliance.com/certification",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Alliance Certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certification - RTLS Alliance",
    description: "Validate your expertise and accelerate your career with industry-recognized RTLS certifications.",
    images: ["https://rtlsalliance.com/images/rtls-alliance-logo.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/certification",
  },
}

export default function CertificationServerPage() {
  // Define course data for structured data
  const courseData = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Certified RTLS Professional",
      description: "Essential knowledge and practical implementation expertise for RTLS technologies",
      provider: {
        "@type": "Organization",
        name: "RTLS Alliance",
        sameAs: "https://rtlsalliance.com",
      },
      timeRequired: "PT4H",
      educationalCredentialAwarded: "Certified RTLS Professional Certificate",
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Certified RTLS Expert",
      description: "Advanced mastery in RTLS architecture and enterprise implementation",
      provider: {
        "@type": "Organization",
        name: "RTLS Alliance",
        sameAs: "https://rtlsalliance.com",
      },
      timeRequired: "PT16H",
      educationalCredentialAwarded: "Certified RTLS Expert Certificate",
    },
  ]

  return (
    <>
      <PageSEO
        title={metadata.title as string}
        description={metadata.description as string}
        structuredData={courseData}
      />
      <CertificationPage />
    </>
  )
}

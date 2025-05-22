import CertificationClientPage from "./CertificationClientPage"
import type { Metadata } from "next"
import { getFAQsByPage } from "@/lib/faq-data"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "RTLS Alliance Certification Program",
  description:
    "Validate your expertise and accelerate your career with industry-recognized RTLS certifications from the RTLS Alliance.",
}

export default function CertificationPage() {
  const certificationFAQs = getFAQsByPage("certification")

  return (
    <>
      <CertificationClientPage />
      <FAQSchema faqs={certificationFAQs} pageId="certification" />
    </>
  )
}

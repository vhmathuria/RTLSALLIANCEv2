import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Membership Plans - RTLS Alliance",
  description:
    "Join the RTLS Alliance with a membership plan that fits your needs. Access exclusive resources, networking opportunities, and industry insights.",
  keywords:
    "RTLS membership, join RTLS Alliance, real-time location systems community, RTLS resources, RTLS networking, RTLS industry insights",
  openGraph: {
    title: "Membership Plans - RTLS Alliance",
    description:
      "Join the RTLS Alliance with a membership plan that fits your needs. Access exclusive resources, networking opportunities, and industry insights.",
    url: "https://rtlsalliance.com/membership",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Alliance Membership",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Plans - RTLS Alliance",
    description:
      "Join the RTLS Alliance with a membership plan that fits your needs. Access exclusive resources, networking opportunities, and industry insights.",
    images: ["https://rtlsalliance.com/images/rtls-alliance-logo.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/membership",
  },
}

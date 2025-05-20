import ClientPage from "./ClientPage"
import type { Metadata } from "next"

// Define metadata for the page
export const metadata: Metadata = {
  title: "RTLS Alliance - Real-Time Location Systems Community",
  description:
    "Join the RTLS Alliance, a community of professionals and organizations dedicated to advancing real-time location systems technology and implementation.",
  keywords:
    "RTLS, real-time location systems, indoor positioning, location tracking, IoT, digital twin, positioning technology",
  openGraph: {
    title: "RTLS Alliance - Real-Time Location Systems Community",
    description:
      "Join the RTLS Alliance, a community of professionals and organizations dedicated to advancing real-time location systems technology and implementation.",
    url: "https://rtlsalliance.com",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTLS Alliance - Real-Time Location Systems Community",
    description:
      "Join the RTLS Alliance, a community of professionals and organizations dedicated to advancing real-time location systems technology and implementation.",
    images: ["https://rtlsalliance.com/images/rtls-alliance-logo.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com",
  },
}

export default function Home() {
  return <ClientPage />
}

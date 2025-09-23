import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.org"),
  title: {
    template: "%s | RTLS Alliance",
    default: "RTLS Alliance - Real-Time Location Systems Community",
  },
  description:
    "RTLS Alliance is a community of professionals and organizations dedicated to advancing real-time location systems technology and implementation.",
  keywords: "RTLS, real-time location systems, indoor positioning, location tracking, IoT, digital twin",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rtlsalliance.org",
    siteName: "RTLS Alliance",
    title: "RTLS Alliance - Real-Time Location Systems Community",
    description:
      "RTLS Alliance is a community of professionals and organizations dedicated to advancing real-time location systems technology and implementation.",
    images: [
      {
        url: "/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Alliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTLS Alliance - Real-Time Location Systems Community",
    description:
      "RTLS Alliance is a community of professionals and organizations dedicated to advancing real-time location systems technology and implementation.",
    images: ["/images/rtls-alliance-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://rtlsalliance.org" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}

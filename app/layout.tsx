import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | RTLS Alliance",
    default: "RTLS Alliance - Real-Time Location Systems Industry Community",
  },
  description:
    "RTLS Alliance is the premier community of professionals and organizations dedicated to advancing real-time location systems technology, implementation, and best practices across industries.",
  keywords: "RTLS, real-time location systems, indoor positioning, asset tracking, IoT, location technology",
  authors: [{ name: "RTLS Alliance" }],
  creator: "RTLS Alliance",
  publisher: "RTLS Alliance",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://rtlsalliance.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rtlsalliance.org",
    title: "RTLS Alliance - Real-Time Location Systems Industry Community",
    description: "The premier community for real-time location systems professionals and organizations.",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Alliance Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTLS Alliance - Real-Time Location Systems Industry Community",
    description: "The premier community for real-time location systems professionals and organizations.",
    images: ["/images/rtls-alliance-logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Organization schema for the entire site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RTLS Alliance",
              url: "https://rtlsalliance.org",
              logo: "https://rtlsalliance.org/images/rtls-alliance-logo.png",
              sameAs: [
                "https://twitter.com/rtlsalliance",
                "https://www.linkedin.com/company/rtlsalliance",
                "https://github.com/rtlsalliance",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+4915205888777",
                contactType: "customer service",
                email: "hello@rtlsalliance.org",
              },
            }),
          }}
        />

        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RTLS Alliance",
              url: "https://rtlsalliance.org",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://rtlsalliance.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="container mx-auto px-4 py-4"></div>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

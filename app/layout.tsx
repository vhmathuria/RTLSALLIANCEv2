import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | RTLS Alliance",
    default: "RTLS Alliance - Real-Time Location Systems Community",
  },
  description:
    "RTLS Alliance is the premier community for real-time location systems professionals, providing resources, best practices, and networking opportunities.",
  keywords: [
    "RTLS",
    "real-time location systems",
    "indoor positioning",
    "location tracking",
    "BLE",
    "UWB",
    "WiFi",
    "RFID",
    "IoT",
  ],
  authors: [{ name: "RTLS Alliance" }],
  creator: "RTLS Alliance",
  publisher: "RTLS Alliance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com",
    title: "RTLS Alliance - Real-Time Location Systems Community",
    description:
      "RTLS Alliance is the premier community for real-time location systems professionals, providing resources, best practices, and networking opportunities.",
    siteName: "RTLS Alliance",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTLS Alliance - Real-Time Location Systems Community",
    description:
      "RTLS Alliance is the premier community for real-time location systems professionals, providing resources, best practices, and networking opportunities.",
    creator: "@RTLSAlliance",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

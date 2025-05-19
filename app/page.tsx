import HomePageClient from "./HomePageClient"
import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo-utils"

export const metadata: Metadata = generatePageMetadata({
  title: "RTLS Alliance - Real-Time Location Systems Industry Community",
  description:
    "Join our non-profit community dedicated to education and promotion of Location Intelligence across industrial, healthcare, defense, and consumer sectors. Access expert insights, implementation guides, and networking opportunities for real-time location systems.",
  keywords:
    "RTLS, real-time location systems, indoor positioning, location intelligence, asset tracking, IoT location, positioning technology, location tracking, non-profit, education",
  path: "/",
})

export default function HomePage() {
  return <HomePageClient />
}

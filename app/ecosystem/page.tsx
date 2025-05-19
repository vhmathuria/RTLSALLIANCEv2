import EcosystemClientPage from "./EcosystemClientPage"
import { generatePageMetadata } from "@/lib/seo-utils"

export const metadata = generatePageMetadata({
  title: "RTLS Ecosystem | Technology Providers & Partners",
  description:
    "Explore the RTLS ecosystem curated by our non-profit community, featuring technology providers and system integrators offering real-time location solutions across industrial, healthcare, defense, and consumer sectors.",
  keywords:
    "RTLS ecosystem, location technology providers, RTLS vendors, system integrators, technology partners, solution providers, location tracking companies, positioning technology vendors, non-profit community",
  path: "/ecosystem",
})

export default function EcosystemPage() {
  return <EcosystemClientPage />
}

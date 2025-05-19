import WiFiTechnologyClientPage from "./WiFiTechnologyClientPage"
import { generateTechnologyMetadata, generateTechnologySchema } from "@/lib/seo-utils"

export const metadata = generateTechnologyMetadata(
  "WiFi",
  "Wireless Network Positioning",
  "Discover how WiFi-based positioning leverages existing wireless infrastructure for cost-effective indoor location tracking with room-level accuracy.",
  "WiFi positioning, wireless network tracking, WiFi RTLS, indoor positioning, RSSI tracking, wireless infrastructure, enterprise WiFi positioning",
)

export default function WiFiTechnologyPage() {
  const title = "WiFi Technology for RTLS | Wireless Network Positioning"
  const description =
    "Discover how WiFi-based positioning leverages existing wireless infrastructure for cost-effective indoor location tracking with room-level accuracy."

  return (
    <>
      <WiFiTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateTechnologySchema(title, description, "WiFi"),
        }}
      />
    </>
  )
}

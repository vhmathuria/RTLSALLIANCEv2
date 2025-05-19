import BLETechnologyClientPage from "./BLETechnologyClientPage"
import { generateTechnologyMetadata, generateTechnologySchema } from "@/lib/seo-utils"

export const metadata = generateTechnologyMetadata(
  "BLE",
  "Bluetooth Low Energy Positioning",
  "Explore how Bluetooth Low Energy (BLE) technology enables cost-effective indoor positioning and asset tracking with moderate accuracy and excellent battery life.",
  "BLE positioning, Bluetooth Low Energy tracking, BLE beacons, BLE RTLS, indoor positioning, asset tracking, proximity detection, iBeacon, Eddystone",
)

export default function BLETechnologyPage() {
  const title = "BLE Technology for RTLS | Bluetooth Low Energy Positioning"
  const description =
    "Explore how Bluetooth Low Energy (BLE) technology enables cost-effective indoor positioning and asset tracking with moderate accuracy and excellent battery life."

  return (
    <>
      <BLETechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateTechnologySchema(title, description, "BLE"),
        }}
      />
    </>
  )
}

import UWBTechnologyClientPage from "./UWBTechnologyClientPage"
import { generateTechnologyMetadata, generateTechnologySchema } from "@/lib/seo-utils"

export const metadata = generateTechnologyMetadata(
  "UWB",
  "Ultra-Wideband Precision Positioning",
  "Learn about Ultra-Wideband (UWB) technology for high-precision real-time location tracking with centimeter-level accuracy for industrial and healthcare applications.",
  "UWB positioning, Ultra-Wideband tracking, UWB RTLS, precision positioning, centimeter accuracy, industrial tracking, healthcare positioning",
)

export default function UWBTechnologyPage() {
  const title = "UWB Technology for RTLS | Ultra-Wideband Precision Positioning"
  const description =
    "Learn about Ultra-Wideband (UWB) technology for high-precision real-time location tracking with centimeter-level accuracy for industrial and healthcare applications."

  return (
    <>
      <UWBTechnologyClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateTechnologySchema(title, description, "UWB"),
        }}
      />
    </>
  )
}

import { notFound } from "next/navigation"
import { Suspense } from "react"
import { TechnologySEO } from "@/components/seo/technology-seo"

// Add revalidation - regenerate this page once per day
export const revalidate = 86400

// Dynamic import of technology client pages
const getTechnologyClientPage = async (technology: string) => {
  switch (technology) {
    case "ble":
      const { BLETechnologyClientPage } = await import("../ble/BLETechnologyClientPage")
      return BLETechnologyClientPage
    case "uwb":
      const { UWBTechnologyClientPage } = await import("../uwb/UWBTechnologyClientPage")
      return UWBTechnologyClientPage
    case "wifi":
      const { WiFiTechnologyClientPage } = await import("../wifi/WiFiTechnologyClientPage")
      return WiFiTechnologyClientPage
    case "nfc":
      const { NFCTechnologyClientPage } = await import("../nfc/NFCTechnologyClientPage")
      return NFCTechnologyClientPage
    case "lora":
      const { LoRaTechnologyClientPage } = await import("../lora/LoRaTechnologyClientPage")
      return LoRaTechnologyClientPage
    case "infrared":
      const { InfraredTechnologyClientPage } = await import("../infrared/InfraredTechnologyClientPage")
      return InfraredTechnologyClientPage
    case "lidar":
      const { LiDARTechnologyClientPage } = await import("../lidar/LiDARTechnologyClientPage")
      return LiDARTechnologyClientPage
    case "ai-cameras":
      const { AICamerasTechnologyClientPage } = await import("../ai-cameras/AICamerasTechnologyClientPage")
      return AICamerasTechnologyClientPage
    case "gnss":
      const { GNSSTechnologyClientPage } = await import("../gnss/GNSSTechnologyClientPage")
      return GNSSTechnologyClientPage
    case "rtk-gps":
      const { RTKGPSTechnologyClientPage } = await import("../rtk-gps/RTKGPSTechnologyClientPage")
      return RTKGPSTechnologyClientPage
    case "magnetic-field":
      const { MagneticFieldTechnologyClientPage } = await import("../magnetic-field/MagneticFieldTechnologyClientPage")
      return MagneticFieldTechnologyClientPage
    case "ultrasound":
      const { UltrasoundTechnologyClientPage } = await import("../ultrasound/UltrasoundTechnologyClientPage")
      return UltrasoundTechnologyClientPage
    case "sensor-fusion":
      const { SensorFusionTechnologyClientPage } = await import("../sensor-fusion/SensorFusionTechnologyClientPage")
      return SensorFusionTechnologyClientPage
    case "slam":
      const { SLAMTechnologyClientPage } = await import("../slam/SLAMTechnologyClientPage")
      return SLAMTechnologyClientPage
    case "dead-reckoning":
      const { DeadReckoningTechnologyClientPage } = await import("../dead-reckoning/DeadReckoningTechnologyClientPage")
      return DeadReckoningTechnologyClientPage
    default:
      return null
  }
}

export default async function TechnologyPage({ params }: { params: { technology: string } }) {
  const TechnologyClientPage = await getTechnologyClientPage(params.technology)

  if (!TechnologyClientPage) {
    notFound()
  }

  return (
    <>
      <TechnologySEO technology={params.technology} />
      <Suspense fallback={<div>Loading...</div>}>
        <TechnologyClientPage />
      </Suspense>
    </>
  )
}

import { notFound } from "next/navigation"
import { Suspense } from "react"
import { TechnologySEO } from "@/components/seo/technology-seo"
import { getTechnologyName } from "@/lib/seo-utils"

// Add revalidation - regenerate this page once per day
export const revalidate = 86400

// Dynamic import of technology client pages with FIXED ABSOLUTE PATHS
const getTechnologyClientPage = async (technology: string) => {
  switch (technology) {
    case "ble":
      const { default: BLETechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/ble/BLETechnologyClientPage"
      )
      return BLETechnologyClientPage
    case "uwb":
      const { default: UWBTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/uwb/UWBTechnologyClientPage"
      )
      return UWBTechnologyClientPage
    case "wifi":
      const { default: WiFiTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/wifi/WiFiTechnologyClientPage"
      )
      return WiFiTechnologyClientPage
    case "nfc":
      const { default: NFCTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/nfc/NFCTechnologyClientPage"
      )
      return NFCTechnologyClientPage
    case "lora":
      const { default: LoRaTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/lora/LoRaTechnologyClientPage"
      )
      return LoRaTechnologyClientPage
    case "infrared":
      const { default: InfraredTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/infrared/InfraredTechnologyClientPage"
      )
      return InfraredTechnologyClientPage
    case "lidar":
      const { default: LiDARTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/lidar/LiDARTechnologyClientPage"
      )
      return LiDARTechnologyClientPage
    case "ai-cameras":
      const { default: AICamerasTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/ai-cameras/AICamerasTechnologyClientPage"
      )
      return AICamerasTechnologyClientPage
    case "gnss":
      const { default: GNSSTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/gnss/GNSSTechnologyClientPage"
      )
      return GNSSTechnologyClientPage
    case "rtk-gps":
      const { default: RTKGPSTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/rtk-gps/RTKGPSTechnologyClientPage"
      )
      return RTKGPSTechnologyClientPage
    case "magnetic-field":
      const { default: MagneticFieldTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/magnetic-field/MagneticFieldTechnologyClientPage"
      )
      return MagneticFieldTechnologyClientPage
    case "ultrasound":
      const { default: UltrasoundTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/ultrasound/UltrasoundTechnologyClientPage"
      )
      return UltrasoundTechnologyClientPage
    case "sensor-fusion":
      const { default: SensorFusionTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/sensor-fusion/SensorFusionTechnologyClientPage"
      )
      return SensorFusionTechnologyClientPage
    case "slam":
      const { default: SLAMTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/slam/SLAMTechnologyClientPage"
      )
      return SLAMTechnologyClientPage
    case "dead-reckoning":
      const { default: DeadReckoningTechnologyClientPage } = await import(
        "@/app/rtls-digital-twin/technologies/dead-reckoning/DeadReckoningTechnologyClientPage"
      )
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

  // Generate proper technology data
  const technologyData = {
    name: getTechnologyName(params.technology),
    slug: params.technology,
    category: "RTLS Technology",
  }

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "RTLS Digital Twin", url: "/rtls-digital-twin" },
    { name: "Technologies", url: "/rtls-digital-twin/technologies" },
    { name: getTechnologyName(params.technology), url: `/rtls-digital-twin/technologies/${params.technology}` },
  ]

  return (
    <>
      <TechnologySEO technology={technologyData} breadcrumbs={breadcrumbs} />
      <Suspense fallback={<div>Loading...</div>}>
        <TechnologyClientPage />
      </Suspense>
    </>
  )
}

import type { Metadata } from "next"
import SensorFusionTechnologyClientPage from "./SensorFusionTechnologyClientPage"

export const metadata: Metadata = {
  title: "Sensor Fusion Technology for RTLS | RTLS Alliance",
  description:
    "Learn how sensor fusion combines multiple positioning technologies to create more accurate, reliable, and comprehensive real-time location systems.",
}

export default function SensorFusionTechnologyPage() {
  return <SensorFusionTechnologyClientPage />
}

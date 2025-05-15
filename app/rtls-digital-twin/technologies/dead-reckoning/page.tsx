import type { Metadata } from "next"
import DeadReckoningTechnologyClientPage from "./DeadReckoningTechnologyClientPage"

export const metadata: Metadata = {
  title: "Dead Reckoning + RTLS Anchors Technology | RTLS Alliance",
  description:
    "Explore how Dead Reckoning combined with RTLS anchors creates a hybrid positioning system that delivers continuous tracking with reduced infrastructure requirements.",
}

export default function DeadReckoningTechnologyPage() {
  return <DeadReckoningTechnologyClientPage />
}

import type { Metadata } from "next"
import SLAMTechnologyClientPage from "./SLAMTechnologyClientPage"

export const metadata: Metadata = {
  title: "SLAM Technology for RTLS | RTLS Alliance",
  description:
    "Learn how Simultaneous Localization and Mapping (SLAM) enables devices to build maps of unknown environments while simultaneously tracking their position, providing infrastructure-free positioning.",
}

export default function SLAMTechnologyPage() {
  return <SLAMTechnologyClientPage />
}

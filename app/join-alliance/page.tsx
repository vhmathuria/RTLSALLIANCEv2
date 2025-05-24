import type { Metadata } from "next"
import JoinAllianceClientPage from "./JoinAllianceClientPage"

export const metadata: Metadata = {
  title: "Join the RTLS Alliance | RTLS Alliance",
  description: "Create an account to join the RTLS Alliance and access exclusive resources and member benefits.",
}

export default function JoinAlliancePage() {
  return <JoinAllianceClientPage />
}

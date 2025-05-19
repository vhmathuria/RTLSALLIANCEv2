import JoinAllianceClientPage from "./JoinAllianceClientPage"
import { generatePageMetadata } from "@/lib/seo-utils"

export const metadata = generatePageMetadata({
  title: "Join RTLS Alliance | Become a Member Today",
  description:
    "Join the RTLS Alliance community to connect with industry experts, access exclusive resources, and stay updated on the latest real-time location systems developments.",
  keywords:
    "join RTLS Alliance, become a member, RTLS community, industry network, exclusive resources, location technology professionals, positioning technology membership, RTLS industry group",
  path: "/join-alliance",
})

export default function JoinAlliancePage() {
  return <JoinAllianceClientPage />
}

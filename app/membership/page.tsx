import MembershipClientPage from "./MembershipClientPage"
import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo-utils"

export const metadata: Metadata = generatePageMetadata({
  title: "RTLS Alliance Membership | Join Our Non-Profit Community",
  description:
    "Join the RTLS Alliance non-profit community to access educational resources, networking opportunities, and expert insights on real-time location systems implementation across industrial, healthcare, defense, and consumer sectors.",
  keywords:
    "RTLS membership, join RTLS Alliance, location technology community, RTLS professionals, membership benefits, exclusive resources, industry network, location technology experts, non-profit organization",
  path: "/membership",
})

export default function MembershipPage() {
  return <MembershipClientPage />
}

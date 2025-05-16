import { Badge } from "@/components/ui/badge"
import { Lock, GraduationCap, Briefcase, Building } from "lucide-react"

type MembershipTier = "public" | "student" | "professional" | "corporate"

interface MemberOnlyBadgeProps {
  tier: MembershipTier
}

export default function MemberOnlyBadge({ tier }: MemberOnlyBadgeProps) {
  // Skip badge for public content
  if (tier === "public") return null

  const tierConfig = {
    student: {
      icon: <GraduationCap className="h-3 w-3" />,
      color: "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200",
    },
    professional: {
      icon: <Briefcase className="h-3 w-3" />,
      color: "bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200",
    },
    corporate: {
      icon: <Building className="h-3 w-3" />,
      color: "bg-green-100 text-green-800 hover:bg-green-200 border-green-200",
    },
  }

  const config = tierConfig[tier] || tierConfig.professional

  return (
    <Badge className={`flex items-center gap-1 ${config.color}`}>
      <Lock className="h-3 w-3" />
      <span>Member Only</span>
    </Badge>
  )
}

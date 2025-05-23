"use client"

import { useEffect, useState } from "react"
import { User, GraduationCap, Briefcase, Building } from "lucide-react"

import { useUser } from "@/hooks/use-user"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { createSupabaseClient } from "@/lib/supabase"

interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url: string
  membership_tier: string
  membership_status: string
  membership_expiry: string
}

interface MembershipDetails {
  tier: string
  status: string
  expiry: string | null
}

interface AccountProfileProps {
  profile: Profile
}

export function AccountProfile({ profile }: AccountProfileProps) {
  const { toast } = useToast()
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [membershipDetails, setMembershipDetails] = useState<MembershipDetails>({
    tier: profile?.membership_tier || "public",
    status: profile?.membership_status || "inactive",
    expiry: profile?.membership_expiry || null,
  })

  // Fetch latest membership details on component mount
  useEffect(() => {
    const fetchMembershipDetails = async () => {
      try {
        const supabase = createSupabaseClient()
        const { data, error } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status, membership_expiry")
          .eq("id", user.id)
          .single()

        if (error) throw error

        if (data) {
          // Normalize status to lowercase for consistency
          const status = data.membership_status ? data.membership_status.toLowerCase() : "inactive"

          setMembershipDetails({
            tier: data.membership_tier || "public",
            status: status,
            expiry: data.membership_expiry,
          })

          console.log("Fetched membership details:", {
            tier: data.membership_tier,
            status: status,
            expiry: data.membership_expiry,
          })
        }
      } catch (error) {
        console.error("Error fetching membership details:", error)
        // Fall back to profile prop values if fetch fails
        if (profile) {
          const status = profile.membership_status ? profile.membership_status.toLowerCase() : "inactive"
          setMembershipDetails({
            tier: profile.membership_tier || "public",
            status: status,
            expiry: profile.membership_expiry,
          })
        }
      }
    }

    if (user?.id) {
      fetchMembershipDetails()
    }
  }, [user?.id, profile])

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])

  // Helper function to get membership tier badge
  const getMembershipBadge = () => {
    const tier = membershipDetails.tier || "public"

    const tierConfig = {
      public: {
        label: "Public",
        icon: <User className="h-4 w-4 mr-1" />,
        color: "bg-gray-100 text-gray-800",
      },
      student: {
        label: "Student",
        icon: <GraduationCap className="h-4 w-4 mr-1" />,
        color: "bg-blue-100 text-blue-800",
      },
      professional: {
        label: "Professional",
        icon: <Briefcase className="h-4 w-4 mr-1" />,
        color: "bg-purple-100 text-purple-800",
      },
      corporate: {
        label: "Corporate",
        icon: <Building className="h-4 w-4 mr-1" />,
        color: "bg-green-100 text-green-800",
      },
    }

    const config = tierConfig[tier.toLowerCase() as keyof typeof tierConfig] || tierConfig.public

    return (
      <Badge className={`${config.color} flex items-center`}>
        {config.icon}
        {config.label} Membership
      </Badge>
    )
  }

  return (
    <div className="grid gap-4">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-semibold tracking-tight">Account</h2>
        <p className="text-muted-foreground">Manage your account settings and set preferences.</p>
      </div>
      <div className="space-y-4">
        <div className="rounded-md border p-4">
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <Skeleton className="h-12 w-12 rounded-full" />
            ) : (
              <img
                src={profile?.avatar_url || "/placeholder.svg"}
                alt="Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{profile?.full_name}</h3>
              <p className="text-sm text-muted-foreground">{profile?.email}</p>
            </div>
          </div>
        </div>
        <div className="rounded-md border p-4">
          <h3 className="text-lg font-semibold">Membership Details</h3>
          <div className="mt-2 space-y-1">
            {isLoading ? <Skeleton className="h-8 w-32" /> : getMembershipBadge()}
            <p className="text-sm text-muted-foreground">Status: {membershipDetails.status}</p>
            {membershipDetails.expiry && (
              <p className="text-sm text-muted-foreground">Expiry: {membershipDetails.expiry}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

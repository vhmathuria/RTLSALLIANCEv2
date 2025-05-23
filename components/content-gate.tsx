"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, GraduationCap, Briefcase, Building } from "lucide-react"
import { getSupabaseBrowser } from "@/lib/supabase-browser"

type MembershipTier = "public" | "student" | "professional" | "corporate"

interface ContentGateProps {
  requiredTier: MembershipTier
  userTier?: MembershipTier
  content?: string
}

export default function ContentGate({ requiredTier, userTier = "public", content }: ContentGateProps) {
  const [currentUserTier, setCurrentUserTier] = useState<MembershipTier>(userTier)
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Define tier hierarchy
  const tierHierarchy = {
    public: 0,
    student: 1,
    professional: 2,
    corporate: 3,
  }

  console.log("🔄 CONTENT GATE: Rendered with:", {
    userTier,
    requiredTier,
    initialAccessCheck: tierHierarchy[userTier] >= tierHierarchy[requiredTier],
  })

  useEffect(() => {
    const verifyMembership = async () => {
      try {
        console.log("🔄 CONTENT GATE: Starting verification")

        // If prop-based check already grants access, verify with fresh data
        const supabase = getSupabaseBrowser()

        // Get fresh session
        const { data: session, error: sessionError } = await supabase.auth.getSession()

        if (sessionError || !session.session) {
          console.log("❌ CONTENT GATE: No valid session")
          setHasAccess(tierHierarchy[userTier] >= tierHierarchy[requiredTier])
          setIsLoading(false)
          return
        }

        console.log("✅ CONTENT GATE: Valid session found")

        // Get fresh profile data
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status, membership_expiry")
          .eq("id", session.session.user.id)
          .single()

        if (profileError || !profileData) {
          console.error("❌ CONTENT GATE: Profile fetch error:", profileError)
          // Fall back to prop-based check
          setHasAccess(tierHierarchy[userTier] >= tierHierarchy[requiredTier])
          setIsLoading(false)
          return
        }

        const fetchedTier = (profileData.membership_tier?.toLowerCase() as MembershipTier) || "public"
        const status = profileData.membership_status?.toLowerCase() || "inactive"

        console.log("✅ CONTENT GATE: Fresh data:", {
          fetchedTier,
          status,
          requiredTier,
          expiry: profileData.membership_expiry,
        })

        // Check if membership has expired
        let isExpired = false
        if (profileData.membership_expiry) {
          isExpired = new Date(profileData.membership_expiry) < new Date()
          if (isExpired) {
            console.log("⚠️ CONTENT GATE: Membership expired")
          }
        }

        // Grant access if status is active, not expired, and tier is sufficient
        const hasValidAccess =
          status === "active" && !isExpired && tierHierarchy[fetchedTier] >= tierHierarchy[requiredTier]

        console.log("🔍 CONTENT GATE: Access decision:", {
          status,
          isExpired,
          tierCheck: tierHierarchy[fetchedTier] >= tierHierarchy[requiredTier],
          finalAccess: hasValidAccess,
        })

        setCurrentUserTier(fetchedTier)
        setHasAccess(hasValidAccess)
      } catch (err) {
        console.error("❌ CONTENT GATE: Verification error:", err)
        // Fall back to prop-based check
        setHasAccess(tierHierarchy[userTier] >= tierHierarchy[requiredTier])
      } finally {
        setIsLoading(false)
      }
    }

    verifyMembership()
  }, [userTier, requiredTier])

  // If loading, show loading state
  if (isLoading) {
    return <div className="p-8 text-center">Verifying access...</div>
  }

  // If has access, show content
  if (hasAccess) {
    return content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : null
  }

  // Show gate if no access
  const tierInfo = {
    student: {
      name: "Student",
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      description: "Access to student-level content, perfect for academic research and learning.",
      price: "$100/year",
    },
    professional: {
      name: "Professional",
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      description: "Full access to professional resources, case studies, and implementation guides.",
      price: "$550/year",
    },
    corporate: {
      name: "Corporate",
      icon: <Building className="h-8 w-8 text-green-500" />,
      description: "Complete access to all RTLS Alliance content plus team collaboration features.",
      price: "$3,500/year",
    },
  }

  const tierToShow = tierInfo[requiredTier as keyof typeof tierInfo] || tierInfo.professional

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <div className="bg-gray-100 p-4 inline-block rounded-full mb-4">
          <Lock className="h-10 w-10 text-gray-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Members-Only Content</h2>
        <p className="text-gray-600">This content requires a {tierToShow.name} membership or higher to access.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          {tierToShow.icon}
          <h3 className="text-xl font-semibold ml-3">{tierToShow.name} Membership</h3>
        </div>
        <p className="text-gray-600 mb-4">{tierToShow.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{tierToShow.price}</span>
          <Link href="/membership/upgrade">
            <Button>Upgrade Membership</Button>
          </Link>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        Already have a membership?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Sign in
        </Link>{" "}
        to access this content.
      </div>
    </div>
  )
}

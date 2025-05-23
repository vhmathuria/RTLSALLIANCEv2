'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, GraduationCap, Briefcase, Building, User } from 'lucide-react'
import { getSupabaseBrowser } from "@/lib/supabase-browser"

type MembershipTier = "public" | "student" | "professional" | "corporate"

interface ContentGateProps {
  requiredTier: MembershipTier
  userTier: MembershipTier
}

export default function ContentGate({ requiredTier, userTier: initialUserTier }: ContentGateProps) {
  const [userTier, setUserTier] = useState<MembershipTier>(initialUserTier)
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Define tier hierarchy
  const tierHierarchy = {
    public: 0,
    student: 1,
    professional: 2,
    corporate: 3
  }

  useEffect(() => {
    // Verify membership tier on client side
    const verifyMembership = async () => {
      try {
        // If prop-based check already grants access, no need to fetch
        if (tierHierarchy[initialUserTier] >= tierHierarchy[requiredTier]) {
          setHasAccess(true)
          setIsLoading(false)
          return
        }

        // Otherwise, fetch fresh data from Supabase
        const supabase = getSupabaseBrowser()
        const { data: session } = await supabase.auth.getSession()
        
        if (!session.session) {
          setIsLoading(false)
          return
        }
        
        const { data, error } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status")
          .eq("id", session.session.user.id)
          .single()
          
        if (error) {
          console.error("Error verifying membership:", error)
          setIsLoading(false)
          return
        }
        
        if (data) {
          const fetchedTier = data.membership_tier as MembershipTier || "public"
          const status = data.membership_status?.toLowerCase() || "inactive"
          
          console.log("Content gate verification:", {
            fetchedTier,
            status,
            requiredTier
          })
          
          // Only grant access if status is active and tier is sufficient
          if (status === "active" && tierHierarchy[fetchedTier] >= tierHierarchy[requiredTier]) {
            setUserTier(fetchedTier)
            setHasAccess(true)
          }
        }
      } catch (err) {
        console.error("Error in membership verification:", err)
      } finally {
        setIsLoading(false)
      }
    }
    
    verifyMembership()
  }, [initialUserTier, requiredTier])

  // If loading or has access, don't show the gate
  if (isLoading) {
    return <div className="p-8 text-center">Verifying access...</div>
  }
  
  if (hasAccess) {
    return null
  }

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

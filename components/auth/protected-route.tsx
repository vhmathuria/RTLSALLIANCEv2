"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAuth?: boolean
  requireVendorAccess?: boolean
  fallbackPath?: string
}

export default function ProtectedRoute({
  children,
  requireAuth = true,
  requireVendorAccess = false,
  fallbackPath = "/auth/login",
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAccess()
  }, [])

  const checkAccess = async () => {
    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (requireAuth && !user) {
        router.push(fallbackPath)
        return
      }

      if (requireVendorAccess && user) {
        // Get user profile to check membership
        const { data: profile } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status")
          .eq("id", user.id)
          .single()

        const isQualifiedVendor =
          profile?.membership_status === "active" && ["professional", "corporate"].includes(profile.membership_tier)

        if (!isQualifiedVendor) {
          setHasAccess(false)
          setLoading(false)
          return
        }
      }

      setHasAccess(true)
    } catch (error) {
      console.error("Access check error:", error)
      if (requireAuth) {
        router.push(fallbackPath)
      }
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Checking access...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!hasAccess && requireVendorAccess) {
    // This will be handled by the VendorAccessGate component in the page
    return null
  }

  return <>{children}</>
}

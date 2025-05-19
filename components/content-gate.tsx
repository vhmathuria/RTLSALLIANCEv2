"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { createSupabaseClient } from "@/lib/supabase-auth"

export default function ContentGate({
  children,
  requiredTier = "professional",
  title = "Premium Content",
  description = "This content is available to members only.",
}: {
  children: React.ReactNode
  requiredTier?: "student" | "professional" | "corporate"
  title?: string
  description?: string
}) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userTier, setUserTier] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function checkAccess() {
      setIsLoading(true)
      try {
        const supabase = createSupabaseClient()

        // Check if user is logged in
        const {
          data: { session },
        } = await supabase.auth.getSession()
        const loggedIn = !!session
        setIsLoggedIn(loggedIn)

        if (!loggedIn) {
          setHasAccess(false)
          setIsLoading(false)
          return
        }

        // Get user profile with membership info
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status, membership_expiry")
          .eq("id", session.user.id)
          .single()

        if (error) {
          console.error("Error fetching profile:", error)
          setHasAccess(false)
          setIsLoading(false)
          return
        }

        console.log("User profile:", profile)
        setUserTier(profile?.membership_tier || "public")

        // Check if membership is active
        if (!profile || profile.membership_status !== "active") {
          setHasAccess(false)
          setIsLoading(false)
          return
        }

        // Check if membership has expired
        if (profile.membership_expiry && new Date(profile.membership_expiry) < new Date()) {
          // Membership has expired
          setHasAccess(false)
          setIsLoading(false)
          return
        }

        // Define membership tiers and their hierarchy
        const MEMBERSHIP_TIERS = {
          public: 0,
          student: 1,
          professional: 2,
          corporate: 3,
        }

        // Check if user's tier is sufficient for the required tier
        const userTierLevel = MEMBERSHIP_TIERS[profile.membership_tier as keyof typeof MEMBERSHIP_TIERS] || 0
        const requiredTierLevel = MEMBERSHIP_TIERS[requiredTier as keyof typeof MEMBERSHIP_TIERS] || 0

        setHasAccess(userTierLevel >= requiredTierLevel)
      } catch (error) {
        console.error("Error checking access:", error)
        setHasAccess(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAccess()
  }, [requiredTier])

  if (isLoading) {
    return (
      <div className="w-full py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  if (hasAccess) {
    return <>{children}</>
  }

  return (
    <div className="w-full py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">
              {isLoggedIn
                ? `Your current membership tier (${userTier || "Public"}) doesn't provide access to this content.`
                : "Please log in to access this content."}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center p-2 rounded bg-gray-50">
              <div className="p-1 bg-blue-100 rounded-full mr-3">
                <svg
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-sm">Exclusive industry insights</span>
            </div>
            <div className="flex items-center p-2 rounded bg-gray-50">
              <div className="p-1 bg-blue-100 rounded-full mr-3">
                <svg
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <span className="text-sm">Premium implementation guides</span>
            </div>
            <div className="flex items-center p-2 rounded bg-gray-50">
              <div className="p-1 bg-blue-100 rounded-full mr-3">
                <svg
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-sm">Expert community access</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          {isLoggedIn ? (
            <Button className="w-full" onClick={() => router.push("/membership/upgrade")}>
              Upgrade Membership
            </Button>
          ) : (
            <>
              <Button
                className="w-full"
                onClick={() => router.push(`/login?redirectTo=${encodeURIComponent(window.location.pathname)}`)}
              >
                Log In
              </Button>
              <Button variant="outline" className="w-full" onClick={() => router.push("/membership")}>
                View Membership Options
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

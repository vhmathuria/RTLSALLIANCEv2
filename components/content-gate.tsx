"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ContentGate({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [hasMembership, setHasMembership] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    async function checkMembership() {
      try {
        setLoading(true)

        // Get current user
        const {
          data: { user },
        } = await supabase.auth.getUser()

        setUser(user)

        if (!user) {
          setHasMembership(false)
          return
        }

        // Get profile
        const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

        if (error) {
          console.error("Error loading profile:", error)
          setHasMembership(false)
          return
        }

        setProfile(profile)

        // Check if user has a paid membership
        const hasPaidMembership = profile.membership_tier && profile.membership_tier !== "public"
        setHasMembership(hasPaidMembership)
      } catch (error) {
        console.error("Error checking membership:", error)
        setHasMembership(false)
      } finally {
        setLoading(false)
      }
    }

    checkMembership()
  }, [supabase])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Member-Only Content</CardTitle>
          <CardDescription>Please sign in to access this premium content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            This content is available exclusively to RTLS Alliance members. Sign in to your account to continue.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
          <Link href="/join-alliance">
            <Button variant="outline">Join the Alliance</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  if (!hasMembership) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Upgrade Your Membership</CardTitle>
          <CardDescription>This content requires a paid membership.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            This premium content is available to Professional, Corporate, and Student members. Upgrade your membership
            to access this and other exclusive resources.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href="/membership/upgrade">
            <Button>Upgrade Membership</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return <>{children}</>
}

import { createClient } from "@/lib/supabase-server"
import { NextResponse } from "next/server"

export async function GET() {
  const supabase = createClient()

  try {
    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    const debugInfo = {
      timestamp: new Date().toISOString(),
      user: {
        exists: !!user,
        id: user?.id,
        email: user?.email,
        error: userError?.message,
      },
      profile: null,
      policies: null,
      membership: null,
    }

    if (user) {
      // Check profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      debugInfo.profile = {
        exists: !!profile,
        data: profile,
        error: profileError?.message,
      }

      // Check policies
      const { data: policies, error: policiesError } = await supabase
        .from("pg_policies")
        .select("*")
        .eq("tablename", "profiles")

      debugInfo.policies = {
        data: policies,
        error: policiesError?.message,
      }

      // Check membership access
      if (profile) {
        debugInfo.membership = {
          tier: profile.membership_tier,
          status: profile.membership_status,
          expiry: profile.membership_expiry,
          hasAccess: profile.membership_status?.toLowerCase() === "active",
        }
      }
    }

    return NextResponse.json(debugInfo, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

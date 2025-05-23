import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") || "/"

  console.log("🔄 AUTH CALLBACK: Starting with code:", !!code, "next:", next)

  if (!code) {
    console.error("❌ AUTH CALLBACK: No code provided")
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_code_provided`)
  }

  const supabase = createRouteHandlerClient({ cookies })

  try {
    // Exchange the code for a session
    console.log("🔄 AUTH CALLBACK: Exchanging code for session")
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error("❌ AUTH CALLBACK: Session exchange error:", sessionError)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(sessionError.message)}`)
    }

    // Get the user after exchanging the code
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("❌ AUTH CALLBACK: User fetch error:", userError)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=User_not_found`)
    }

    console.log("✅ AUTH CALLBACK: User authenticated:", user.id, user.email)

    // Use the admin function to ensure profile creation bypasses RLS
    try {
      console.log("🔄 AUTH CALLBACK: Creating/updating profile via admin function")

      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

      // Call the admin function to create/update profile
      const { error: adminError } = await supabase.rpc("admin_update_membership", {
        user_id: user.id,
        tier: "public",
        status: "active",
        expiry: null,
        stripe_id: null,
        payment_date: null,
      })

      if (adminError) {
        console.error("❌ AUTH CALLBACK: Admin function error:", adminError)

        // Fallback to direct insert/update
        console.log("🔄 AUTH CALLBACK: Trying direct profile creation as fallback")

        const { error: insertError } = await supabase.from("profiles").upsert(
          {
            id: user.id,
            email: user.email,
            full_name: fullName,
            membership_tier: "public",
            membership_status: "active",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "id",
          },
        )

        if (insertError) {
          console.error("❌ AUTH CALLBACK: Direct profile creation failed:", insertError)
        } else {
          console.log("✅ AUTH CALLBACK: Profile created via direct insert")
        }
      } else {
        console.log("✅ AUTH CALLBACK: Profile created via admin function")

        // Update additional fields that admin function doesn't handle
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            email: user.email,
            full_name: fullName,
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)

        if (updateError) {
          console.error("❌ AUTH CALLBACK: Additional fields update error:", updateError)
        } else {
          console.log("✅ AUTH CALLBACK: Additional fields updated")
        }
      }

      // Verify profile was created
      const { data: verifyProfile, error: verifyError } = await supabase
        .from("profiles")
        .select("id, email, membership_tier, membership_status")
        .eq("id", user.id)
        .single()

      if (verifyError || !verifyProfile) {
        console.error("❌ AUTH CALLBACK: Profile verification failed:", verifyError)
      } else {
        console.log("✅ AUTH CALLBACK: Profile verified:", {
          id: verifyProfile.id,
          email: verifyProfile.email,
          tier: verifyProfile.membership_tier,
          status: verifyProfile.membership_status,
        })
      }
    } catch (profileError) {
      console.error("❌ AUTH CALLBACK: Profile creation error:", profileError)
    }

    console.log("🔄 AUTH CALLBACK: Redirecting to:", `${requestUrl.origin}${next}`)
    return NextResponse.redirect(`${requestUrl.origin}${next}`)
  } catch (error) {
    console.error("❌ AUTH CALLBACK: Unexpected error:", error)
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Unexpected_error`)
  }
}

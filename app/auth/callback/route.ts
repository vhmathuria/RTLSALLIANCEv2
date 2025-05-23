import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") || "/"

  if (!code) {
    console.error("No code provided in auth callback")
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_code_provided`)
  }

  console.log("Auth callback initiated with next path:", next)

  // Use createRouteHandlerClient which is designed for route handlers
  const supabase = createRouteHandlerClient({ cookies })

  try {
    // Exchange the code for a session
    console.log("Exchanging code for session")
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error("Error exchanging code for session:", sessionError)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(sessionError.message)}`)
    }

    // Get the user after exchanging the code
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Error getting user:", userError)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=User_not_found`)
    }

    console.log("User authenticated:", user.id)

    // Check if profile exists
    const { data: existingProfile, error: profileCheckError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single()

    if (profileCheckError && profileCheckError.code !== "PGRST116") {
      console.error("Error checking for existing profile:", profileCheckError)
    }

    // If profile doesn't exist, create one
    if (!existingProfile) {
      console.log("Creating new profile for user:", user.id)

      // Extract name from user metadata if available
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

      console.log("User metadata:", user.user_metadata)
      console.log("Using name:", fullName)

      const { error: insertError } = await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
        full_name: fullName,
        membership_tier: "public",
        membership_status: "active", // Fixed: using lowercase "active" instead of "ACTIVE"
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

      if (insertError) {
        console.error("Error creating profile:", insertError)

        // Try update instead
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            email: user.email,
            full_name: fullName,
            membership_tier: "public",
            membership_status: "active",
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)

        if (updateError) {
          console.error("Error updating profile:", updateError)
        }
      }
    } else {
      console.log("Profile already exists for user:", user.id)

      // If profile exists but status is inactive or ACTIVE (uppercase), update it
      if (
        existingProfile.membership_status?.toLowerCase() !== "active" ||
        existingProfile.membership_status === "ACTIVE"
      ) {
        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            membership_status: "active", // Fixed: using lowercase "active"
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)

        if (updateError) {
          console.error("Error updating profile status:", updateError)
        } else {
          console.log("Profile status updated to active for user:", user.id)
        }
      }
    }

    // Redirect to the specified next page
    console.log("Redirecting to:", `${requestUrl.origin}${next}`)
    return NextResponse.redirect(`${requestUrl.origin}${next}`)
  } catch (error) {
    console.error("Unexpected error during auth callback:", error)
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Unexpected_error`)
  }
}

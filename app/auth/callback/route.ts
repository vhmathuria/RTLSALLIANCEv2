import { createServerClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") || "/"

  if (!code) {
    console.error("No code provided in auth callback")
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_code_provided`)
  }

  console.log("Auth callback initiated with next path:", next)

  try {
    const supabase = createServerClient()

    // Exchange the code for a session
    console.log("Exchanging code for session")
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error("Error exchanging code for session:", sessionError)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(sessionError.message)}`)
    }

    // Get the user from the session
    console.log("Getting user from session")
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      console.error("No user found after exchanging code for session")
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_user_found`)
    }

    console.log("User authenticated:", user.id)

    // Check if profile exists
    console.log("Checking if profile exists for user:", user.id)
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

      try {
        const { error: insertError } = await supabase.from("profiles").insert({
          id: user.id,
          email: user.email,
          full_name: fullName,
          membership_tier: "public",
          membership_status: "ACTIVE", // Set to ACTIVE by default for public tier
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        if (insertError) {
          console.error("Error creating profile:", insertError)
        } else {
          console.log("Profile created successfully for user:", user.id)
        }
      } catch (insertError) {
        console.error("Exception during profile creation:", insertError)
      }
    } else {
      console.log("Profile already exists for user:", user.id)

      // If profile exists but status is INACTIVE for public tier, update it to ACTIVE
      if (
        existingProfile.membership_tier === "public" &&
        (existingProfile.membership_status === "INACTIVE" || !existingProfile.membership_status)
      ) {
        try {
          const { error: updateError } = await supabase
            .from("profiles")
            .update({
              membership_status: "ACTIVE",
              updated_at: new Date().toISOString(),
            })
            .eq("id", user.id)

          if (updateError) {
            console.error("Error updating profile status:", updateError)
          } else {
            console.log("Profile status updated to ACTIVE for user:", user.id)
          }
        } catch (updateError) {
          console.error("Exception during profile status update:", updateError)
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

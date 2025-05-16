import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const next = requestUrl.searchParams.get("next") || "/"
    const error = requestUrl.searchParams.get("error")
    const errorDescription = requestUrl.searchParams.get("error_description")

    console.log("Auth callback received. URL:", request.url)
    console.log("Code:", code ? "Present" : "Missing")
    console.log("Next path:", next)

    // Handle OAuth errors
    if (error) {
      console.error(`OAuth error: ${error}`, errorDescription)
      return NextResponse.redirect(
        new URL(
          `/auth-error?error=${encodeURIComponent(error)}&description=${encodeURIComponent(errorDescription || "")}`,
          requestUrl.origin,
        ),
      )
    }

    // If there's no code, redirect to auth error page
    if (!code) {
      console.error("No code provided in callback")
      return NextResponse.redirect(
        new URL(`/auth-error?error=${encodeURIComponent("No authentication code provided")}`, requestUrl.origin),
      )
    }

    // Create a Supabase client for the route handler
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Exchange the code for a session
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error("Error exchanging code for session:", sessionError)
      return NextResponse.redirect(
        new URL(`/auth-error?error=${encodeURIComponent(sessionError.message)}`, requestUrl.origin),
      )
    }

    // Get the user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      // Check if profile exists
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      // If profile doesn't exist, create one and redirect to account page
      if (profileError || !profile) {
        // Extract name from user metadata if available
        const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

        await supabase.from("profiles").insert({
          id: user.id,
          email: user.email,
          full_name: fullName,
          membership_tier: "public",
          membership_status: "active",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        // For first-time users, redirect to account page
        return NextResponse.redirect(new URL("/account", requestUrl.origin))
      }
    }

    // Get the full origin from the request
    const origin = requestUrl.origin

    // For returning users, redirect to the requested page
    const redirectUrl = new URL(next, origin)
    console.log("Redirecting to:", redirectUrl.toString())
    return NextResponse.redirect(redirectUrl)
  } catch (error: any) {
    console.error("Unexpected error in auth callback:", error)
    return NextResponse.redirect(
      new URL(
        `/auth-error?error=${encodeURIComponent(error.message || "An unexpected error occurred")}`,
        new URL(request.url).origin,
      ),
    )
  }
}

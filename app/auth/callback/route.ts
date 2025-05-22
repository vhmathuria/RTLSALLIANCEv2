import { NextResponse, type NextRequest } from "next/server"
import { createRouteHandlerClient } from "@/lib/supabase-client"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const returnTo = requestUrl.searchParams.get("returnTo") || "/"

  if (!code) {
    console.error("[Auth Callback] No code provided")
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=no_code`)
  }

  console.log(`[Auth Callback] Processing code for redirect to: ${returnTo}`)

  try {
    // Create a supabase client specifically for route handlers
    const supabase = createRouteHandlerClient()

    // Exchange the code for a session
    console.log("[Auth Callback] Exchanging code for session")
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("[Auth Callback] Error exchanging code:", error)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(error.message)}`)
    }

    if (!data.session) {
      console.error("[Auth Callback] No session returned")
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=no_session`)
    }

    console.log(`[Auth Callback] Session established for user: ${data.user?.id}`)

    // Create or update user profile
    if (data.user) {
      console.log(`[Auth Callback] Creating/updating profile for user: ${data.user.id}`)

      const { error: profileError } = await supabase.from("profiles").upsert(
        {
          id: data.user.id,
          email: data.user.email,
          full_name: data.user.user_metadata?.full_name,
          membership_tier: "public",
          membership_status: "active",
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" },
      )

      if (profileError) {
        console.error("[Auth Callback] Error updating profile:", profileError)
      } else {
        console.log("[Auth Callback] Profile updated successfully")
      }
    }

    console.log(`[Auth Callback] Redirecting to: ${returnTo}`)
    return NextResponse.redirect(new URL(returnTo, request.url))
  } catch (error) {
    console.error("[Auth Callback] Unexpected error:", error)
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=unexpected`)
  }
}

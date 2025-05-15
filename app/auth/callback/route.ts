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

    // Get the full origin from the request
    const origin = requestUrl.origin

    // Construct the full redirect URL using the origin
    const redirectUrl = new URL(next, origin)

    console.log("Redirecting to:", redirectUrl.toString())

    // Redirect to the intended destination
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

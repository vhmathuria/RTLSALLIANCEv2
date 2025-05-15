import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const next = requestUrl.searchParams.get("next") || "/"

    // If there's no code, redirect to auth error page
    if (!code) {
      console.error("No code provided in callback")
      return NextResponse.redirect(
        new URL(`/auth-error?error=${encodeURIComponent("No authentication code provided")}`, request.url),
      )
    }

    // Create a Supabase client for the route handler
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Error exchanging code for session:", error)
      return NextResponse.redirect(new URL(`/auth-error?error=${encodeURIComponent(error.message)}`, request.url))
    }

    // Redirect to the intended destination
    return NextResponse.redirect(new URL(next, request.url))
  } catch (error) {
    console.error("Unexpected error in auth callback:", error)
    return NextResponse.redirect(
      new URL(`/auth-error?error=${encodeURIComponent("An unexpected error occurred")}`, request.url),
    )
  }
}

import { createClient } from "@/lib/supabase-server"
import { handleAuthCallback } from "@/lib/supabase-auth"
import { cookies } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const returnTo = requestUrl.searchParams.get("returnTo") || "/"

  if (!code) {
    console.error("No code provided in auth callback")
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_code_provided`)
  }

  console.log("Auth callback initiated with returnTo path:", returnTo)

  const cookieStore = cookies()

  // Create a client with cookies for session management
  const supabase = createClient({
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value
      },
      set(name, value, options) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name, options) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })

  try {
    // Exchange the code for a session
    console.log("Exchanging code for session")
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Error exchanging code for session:", error)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(error.message)}`)
    }

    // Get the user from the session
    console.log("Getting user from session")
    const user = data.user

    if (!user) {
      console.error("No user found after exchanging code for session")
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_user_found`)
    }

    console.log("User authenticated:", user.id)

    // Immediately create profile if user exists
    await handleAuthCallback(user)

    // Redirect to the specified returnTo page
    console.log("Redirecting to:", `${requestUrl.origin}${returnTo}`)
    return NextResponse.redirect(new URL(returnTo, request.url))
  } catch (error) {
    console.error("Unexpected error during auth callback:", error)
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Unexpected_error`)
  }
}

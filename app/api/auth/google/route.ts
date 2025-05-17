import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { parse } from "url"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  const { searchParams } = parse(request.url, true)

  // Get the redirectTo parameter or default to /join-alliance
  const redirectTo = searchParams.get("redirectTo") || "/"
  const tier = searchParams.get("tier") || null

  try {
    console.log("Google OAuth flow initiated, redirecting to:", redirectTo)

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    })

    // Store tier in session if provided
    if (tier) {
      await supabase.auth.setSession(
        {
          access_token: "",
          refresh_token: "",
        },
        {
          options: {
            data: { requested_tier: tier },
          },
        },
      )
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${requestUrl.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    })

    if (error) {
      console.error("Google OAuth error:", error)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(error.message)}`, {
        status: 301,
      })
    }

    console.log("Google OAuth successful, redirecting to provider URL")
    return NextResponse.redirect(data.url, {
      status: 301,
    })
  } catch (error: any) {
    console.error("Unexpected error in Google auth:", error)
    return NextResponse.redirect(
      `${requestUrl.origin}/auth-error?error=${encodeURIComponent(error?.message || "Unexpected error")}`,
      {
        status: 301,
      },
    )
  }
}

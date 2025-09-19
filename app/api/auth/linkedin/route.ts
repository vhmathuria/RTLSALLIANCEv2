import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()

  // Get the redirectTo parameter or default to /
  const redirectTo = requestUrl.searchParams.get("redirectTo") || "/"

  try {
    console.log("LinkedIn OAuth flow initiated, redirecting to:", redirectTo)

    const supabase = createServerClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc",
      options: {
        redirectTo: `${requestUrl.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
        scopes: "r_liteprofile r_emailaddress",
      },
    })

    if (error) {
      console.error("LinkedIn OAuth error:", error)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(error.message)}`, {
        status: 301,
      })
    }

    console.log("LinkedIn OAuth successful, redirecting to provider URL")
    return NextResponse.redirect(data.url, {
      status: 301,
    })
  } catch (error: any) {
    console.error("Unexpected error in LinkedIn auth:", error)
    return NextResponse.redirect(
      `${requestUrl.origin}/auth-error?error=${encodeURIComponent(error?.message || "Unexpected error")}`,
      {
        status: 301,
      },
    )
  }
}

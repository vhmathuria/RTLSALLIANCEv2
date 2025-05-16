import { createServerClient } from "@/lib/supabase-server"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies()
    const supabase = createServerClient()

    // Get the redirectTo from the URL
    const { searchParams } = new URL(request.url)
    const redirectTo = searchParams.get("redirectTo") || "/"

    // Get the URL for the OAuth sign in
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${request.nextUrl.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
      },
    })

    if (error) {
      console.error("Error in Google auth:", error)
      return NextResponse.redirect(`${request.nextUrl.origin}/auth-error?error=${encodeURIComponent(error.message)}`, {
        status: 302,
      })
    }

    if (data?.url) {
      return NextResponse.redirect(data.url, { status: 302 })
    }

    return NextResponse.redirect(`${request.nextUrl.origin}/auth-error?error=No redirect URL returned`, { status: 302 })
  } catch (error: any) {
    console.error("Unexpected error in Google auth:", error)
    return NextResponse.redirect(
      `${request.nextUrl.origin}/auth-error?error=${encodeURIComponent(error.message || "Unknown error")}`,
      { status: 302 },
    )
  }
}

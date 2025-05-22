import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { ensureProfile } from "@/lib/supabase"
import type { Database } from "@/types/supabase"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const redirectTo = requestUrl.searchParams.get("redirectTo") || "/"

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies })

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error("Error exchanging code for session:", error)
        return NextResponse.redirect(`${requestUrl.origin}/login?error=auth_error`)
      }

      if (data.user) {
        // Ensure profile exists
        try {
          await ensureProfile(data.user.id, data.user.email!, data.user.user_metadata?.full_name)
        } catch (profileError) {
          console.error("Error creating profile:", profileError)
          // Don't fail the auth flow if profile creation fails
        }
      }

      return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`)
    } catch (error) {
      console.error("Unexpected error in auth callback:", error)
      return NextResponse.redirect(`${requestUrl.origin}/login?error=unexpected_error`)
    }
  }

  return NextResponse.redirect(`${requestUrl.origin}/login?error=missing_code`)
}

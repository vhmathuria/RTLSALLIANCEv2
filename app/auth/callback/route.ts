import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") || "/"

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, supabaseKey)

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error("Error exchanging code for session:", error)
        return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(error.message)}`)
      }

      // Get the user
      const {
        data: { user },
      } = await supabase.auth.getUser(data.session?.access_token)

      if (user) {
        // Check if profile exists
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        // If profile doesn't exist, create one
        if (profileError || !profile) {
          console.log("Creating new user profile for:", user.id)

          // Extract name from user metadata if available
          const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

          try {
            const { error: insertError } = await supabase.from("profiles").insert({
              id: user.id,
              email: user.email,
              full_name: fullName,
              membership_tier: "public",
              membership_status: "active",
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })

            if (insertError) {
              console.error("Error creating profile:", insertError)
              throw insertError
            }

            console.log("Profile created successfully")
          } catch (insertCatchError) {
            console.error("Exception during profile creation:", insertCatchError)
          }
        }
      }

      return NextResponse.redirect(`${requestUrl.origin}${next}`)
    } catch (error) {
      console.error("Unexpected error during auth callback:", error)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Unexpected_error`)
    }
  }

  // If no code is provided, redirect to home page
  return NextResponse.redirect(`${requestUrl.origin}/`)
}

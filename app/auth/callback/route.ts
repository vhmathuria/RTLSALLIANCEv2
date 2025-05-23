import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

// Helper function for delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Helper function for retrying operations
async function retry<T>(
  operation: () => Promise<T>,
  retries = 3,
  delayMs = 1000,
  operationName = "operation",
): Promise<T> {
  let lastError: any

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt} for ${operationName}`)
      return await operation()
    } catch (error) {
      lastError = error
      console.error(`Error in ${operationName} attempt ${attempt}:`, error)
      if (attempt < retries) {
        console.log(`Retrying ${operationName} in ${delayMs}ms...`)
        await delay(delayMs)
      }
    }
  }

  throw lastError
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") || "/"

  if (!code) {
    console.error("No code provided in auth callback")
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_code_provided`)
  }

  console.log("Auth callback initiated with next path:", next)

  const cookieStore = cookies()

  // Create a client with the service role key for admin operations
  const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

  // Create a client with cookies for session management
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
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
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error("Error exchanging code for session:", sessionError)
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=${encodeURIComponent(sessionError.message)}`)
    }

    // Poll for user data to ensure session is properly established
    let user = null
    for (let i = 0; i < 5; i++) {
      console.log(`Poll attempt ${i + 1} for user data`)
      const { data: userData, error: userError } = await supabase.auth.getUser()

      if (userData?.user) {
        user = userData.user
        console.log(`User data retrieved on poll attempt ${i + 1}:`, user.id)
        break
      }

      if (userError) {
        console.error(`Error on poll attempt ${i + 1}:`, userError)
      }

      if (i < 4) {
        console.log(`Waiting 500ms before next poll attempt...`)
        await delay(500)
      }
    }

    if (!user) {
      console.error("No user found after multiple polling attempts")
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_user_found_after_polling`)
    }

    console.log("User authenticated:", user.id)

    // Check if profile exists
    console.log("Checking if profile exists for user:", user.id)
    const { data: existingProfile, error: profileCheckError } = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single()

    if (profileCheckError && profileCheckError.code !== "PGRST116") {
      console.error("Error checking for existing profile:", profileCheckError)
    }

    // If profile doesn't exist, create one with retries
    if (!existingProfile) {
      console.log("Creating new profile for user:", user.id)

      // Extract name from user metadata if available
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

      console.log("User metadata:", user.user_metadata)
      console.log("Using name:", fullName)

      try {
        await retry(
          async () => {
            const { error: insertError } = await supabaseAdmin.from("profiles").insert({
              id: user.id,
              email: user.email,
              full_name: fullName,
              membership_tier: "public",
              membership_status: "active", // Changed to lowercase "active"
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })

            if (insertError) throw insertError
            return true
          },
          3,
          1000,
          "profile creation",
        )

        console.log("Profile created successfully for user:", user.id)
      } catch (insertError) {
        console.error("Failed to create profile after retries:", insertError)
        return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Profile_creation_failed`)
      }
    } else {
      console.log("Profile already exists for user:", user.id)

      // If profile exists but status is INACTIVE or inactive for public tier, update it to active
      if (
        existingProfile.membership_tier === "public" &&
        (existingProfile.membership_status === "INACTIVE" ||
          existingProfile.membership_status === "inactive" ||
          !existingProfile.membership_status)
      ) {
        try {
          await retry(
            async () => {
              const { error: updateError } = await supabaseAdmin
                .from("profiles")
                .update({
                  membership_status: "active", // Changed to lowercase "active"
                  updated_at: new Date().toISOString(),
                })
                .eq("id", user.id)

              if (updateError) throw updateError
              return true
            },
            3,
            1000,
            "profile status update",
          )

          console.log("Profile status updated to active for user:", user.id)
        } catch (updateError) {
          console.error("Failed to update profile status after retries:", updateError)
        }
      }
    }

    // Final verification of profile status
    console.log("Performing final verification of profile status")
    const { data: finalProfile, error: finalCheckError } = await supabaseAdmin
      .from("profiles")
      .select("membership_tier, membership_status")
      .eq("id", user.id)
      .single()

    if (finalCheckError) {
      console.error("Error in final profile verification:", finalCheckError)
    } else {
      console.log("Final profile status:", finalProfile)

      if (finalProfile.membership_status !== "active" || finalProfile.membership_tier !== "public") {
        console.error("Profile verification failed: incorrect status or tier")
        return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Profile_verification_failed`)
      }
    }

    // Revalidate paths to ensure fresh data
    console.log("Revalidating paths for user:", user.id)
    try {
      revalidatePath("/account")
      console.log("Revalidated /account path")
      revalidatePath("/resources")
      console.log("Revalidated /resources path")
    } catch (revalidateError) {
      console.error("Error revalidating paths:", revalidateError)
    }

    // Delay redirect slightly to allow session to fully propagate
    console.log("Delaying redirect for 1 second to ensure session propagation")
    await delay(1000)

    // Redirect to the specified next page
    console.log("Redirecting to:", `${requestUrl.origin}${next}`)
    return NextResponse.redirect(`${requestUrl.origin}${next}`)
  } catch (error) {
    console.error("Unexpected error during auth callback:", error)
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Unexpected_error`)
  }
}

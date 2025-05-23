import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

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

    // Wait for session to propagate and get the user
    console.log("Waiting for session to propagate...")
    let user = null
    let attempts = 0
    const maxAttempts = 5

    while (!user && attempts < maxAttempts) {
      attempts++
      const { data } = await supabase.auth.getUser()
      user = data.user

      if (!user && attempts < maxAttempts) {
        console.log(`Session not ready yet, attempt ${attempts}/${maxAttempts}. Waiting 500ms...`)
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }

    if (!user) {
      console.error("No user found after exchanging code for session and waiting")
      return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=No_user_found`)
    }

    console.log("User authenticated:", user.id)

    // Function to create or update profile with retry
    const createOrUpdateProfile = async (retryCount = 0) => {
      try {
        // Check if profile exists
        console.log("Checking if profile exists for user:", user.id)
        const { data: existingProfile, error: profileCheckError } = await supabaseAdmin
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        if (profileCheckError && profileCheckError.code !== "PGRST116") {
          console.error("Error checking for existing profile:", profileCheckError)
          throw profileCheckError
        }

        // If profile doesn't exist, create one
        if (!existingProfile) {
          console.log("Creating new profile for user:", user.id)

          // Extract name from user metadata if available
          const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

          console.log("User metadata:", user.user_metadata)
          console.log("Using name:", fullName)

          const { error: insertError } = await supabaseAdmin.from("profiles").insert({
            id: user.id,
            email: user.email,
            full_name: fullName,
            membership_tier: "public",
            membership_status: "active", // Using lowercase consistently
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })

          if (insertError) {
            console.error(`Error creating profile (attempt ${retryCount + 1}):`, insertError)
            throw insertError
          } else {
            console.log("Profile created successfully for user:", user.id)
          }
        } else {
          console.log("Profile already exists for user:", user.id)

          // If profile exists but status is inactive for public tier, update it to active
          if (
            existingProfile.membership_tier === "public" &&
            (existingProfile.membership_status?.toLowerCase() === "inactive" || !existingProfile.membership_status)
          ) {
            const { error: updateError } = await supabaseAdmin
              .from("profiles")
              .update({
                membership_status: "active", // Using lowercase consistently
                updated_at: new Date().toISOString(),
              })
              .eq("id", user.id)

            if (updateError) {
              console.error(`Error updating profile status (attempt ${retryCount + 1}):`, updateError)
              throw updateError
            } else {
              console.log("Profile status updated to active for user:", user.id)
            }
          }
        }

        // Verify profile was created/updated correctly
        const { data: verifiedProfile, error: verifyError } = await supabaseAdmin
          .from("profiles")
          .select("membership_status, membership_tier")
          .eq("id", user.id)
          .single()

        if (verifyError) {
          console.error("Error verifying profile:", verifyError)
          throw verifyError
        }

        console.log("Verified profile:", verifiedProfile)

        // If status is not active, try to fix it
        if (verifiedProfile && verifiedProfile.membership_status?.toLowerCase() !== "active") {
          console.log("Profile status not active, fixing...")
          const { error: fixError } = await supabaseAdmin
            .from("profiles")
            .update({
              membership_status: "active",
              updated_at: new Date().toISOString(),
            })
            .eq("id", user.id)

          if (fixError) {
            console.error("Error fixing profile status:", fixError)
          } else {
            console.log("Fixed profile status to active")
          }
        }

        // Revalidate paths that might show different content based on membership
        revalidatePath("/resources")
        revalidatePath("/membership")
        revalidatePath("/account")
      } catch (error) {
        // Retry logic
        if (retryCount < 2) {
          console.log(`Retrying profile operation in 1 second (attempt ${retryCount + 1}/3)...`)
          await new Promise((resolve) => setTimeout(resolve, 1000))
          return createOrUpdateProfile(retryCount + 1)
        } else {
          console.error("Failed to create/update profile after 3 attempts:", error)
          throw error
        }
      }
    }

    // Create or update the profile with retry logic
    await createOrUpdateProfile()

    // Redirect to the specified next page
    console.log("Redirecting to:", `${requestUrl.origin}${next}`)
    return NextResponse.redirect(`${requestUrl.origin}${next}`)
  } catch (error) {
    console.error("Unexpected error during auth callback:", error)
    return NextResponse.redirect(`${requestUrl.origin}/auth-error?error=Unexpected_error`)
  }
}

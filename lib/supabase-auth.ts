import { createBrowserClient } from "@supabase/ssr"
import type { Provider } from "@supabase/supabase-js"

export function createSupabaseClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function ensureUserProfile(userId: string, email: string, fullName?: string) {
  const supabase = createSupabaseClient()

  // First check if profile exists
  const { data: existingProfile } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (existingProfile) {
    return existingProfile
  }

  // If no profile exists, create one
  const { data: newProfile, error } = await supabase
    .from("profiles")
    .insert([
      {
        id: userId,
        email: email,
        full_name: fullName || email.split("@")[0],
        membership_tier: "free",
        membership_status: "active",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
    .select()
    .single()

  if (error) {
    console.error("Error creating profile:", error)
    throw error
  }

  return newProfile
}

export async function signInWithEmail(email: string, password: string) {
  const supabase = createSupabaseClient()

  return supabase.auth.signInWithPassword({
    email,
    password,
  })
}

export async function signUpWithEmail(email: string, password: string) {
  const supabase = createSupabaseClient()

  const result = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      data: {
        email_confirmed: true, // Flag to indicate we should send welcome email
      },
    },
  })

  // If signup was successful and we have a user, ensure profile exists
  if (result.data.user) {
    try {
      await ensureUserProfile(result.data.user.id, email, result.data.user.user_metadata?.full_name)
    } catch (err) {
      console.error("Error ensuring profile exists:", err)
    }
  }

  return result
}

export async function signInWithProvider(provider: Provider) {
  const supabase = createSupabaseClient()

  try {
    // Get the current URL for proper redirect
    const origin = window.location.origin
    const path = window.location.pathname

    console.log(`Initiating sign-in with ${provider}`)
    console.log(`Current origin: ${origin}`)

    return await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/auth/callback?returnTo=${encodeURIComponent(path)}`,
        queryParams: {
          // Add access_type=offline for Google to get refresh token
          ...(provider === "google" && { access_type: "offline", prompt: "consent" }),
        },
      },
    })
  } catch (error) {
    console.error(`Error during ${provider} sign-in:`, error)
    throw error
  }
}

export async function signOut() {
  const supabase = createSupabaseClient()
  return supabase.auth.signOut()
}

export async function getCurrentUser() {
  const supabase = createSupabaseClient()
  const { data } = await supabase.auth.getUser()
  return data.user
}

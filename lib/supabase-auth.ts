import { createClient } from "@/lib/supabase/client"
import type { Provider } from "@supabase/ssr"

// Create a singleton instance of the Supabase client for client components
export const createSupabaseClient = () => {
  return createClient()
}

// Authentication functions
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

  // The welcome email will be triggered by a database function
  // when a new user is created with email_confirmed set to true

  return result
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

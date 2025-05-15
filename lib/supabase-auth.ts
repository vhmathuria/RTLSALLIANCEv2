import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Provider } from "@supabase/supabase-js"

// Create a singleton instance of the Supabase client for client components
export const createSupabaseClient = () => {
  return createClientComponentClient()
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

  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  })
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

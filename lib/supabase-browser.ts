import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

// Add a check for environment variables
const getSupabaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url) {
    console.warn("Missing NEXT_PUBLIC_SUPABASE_URL")
    return "https://placeholder-url.supabase.co" // Placeholder during build
  }
  return url
}

const getSupabaseAnonKey = () => {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key) {
    console.warn("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY")
    return "placeholder-key" // Placeholder during build
  }
  return key
}

// Create a singleton instance of the Supabase client for client components
let supabaseClient: ReturnType<typeof createBrowserClient<Database>> | null = null

export const getSupabaseBrowser = () => {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient<Database>(getSupabaseUrl(), getSupabaseAnonKey())
  }
  return supabaseClient
}

export const createBrowserSupabaseClient = getSupabaseBrowser

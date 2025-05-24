import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

// Create a singleton instance of the Supabase client for client components
let supabaseClient: ReturnType<typeof createBrowserClient<Database>> | null = null

export const getSupabaseBrowser = () => {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  }
  return supabaseClient
}

export const createBrowserSupabaseClient = getSupabaseBrowser

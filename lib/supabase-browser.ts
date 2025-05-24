import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Create a singleton instance for client components
let clientInstance: ReturnType<typeof createClientComponentClient<Database>> | null = null

export function getSupabaseBrowser() {
  if (!clientInstance) {
    try {
      clientInstance = createClientComponentClient<Database>({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      })
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error)
      // Return a dummy client that won't break the site
      return {
        auth: {
          signInWithOAuth: async () => ({ error: { message: "Supabase not configured" } }),
          getSession: async () => ({ data: { session: null }, error: null }),
        },
      } as any
    }
  }
  return clientInstance
}

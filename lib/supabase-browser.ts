import { createClient } from "@/lib/supabase/client"

// Create a singleton instance for client components
let clientInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseBrowser() {
  if (!clientInstance) {
    try {
      clientInstance = createClient()
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

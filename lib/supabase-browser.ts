import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Create a singleton instance for client components
let clientInstance: ReturnType<typeof createClientComponentClient<Database>> | null = null
let lastSessionCheck = 0
const SESSION_CHECK_INTERVAL = 5 * 60 * 1000 // 5 minutes

export function getSupabaseBrowser() {
  const now = Date.now()
  const shouldCheckSession = !clientInstance || now - lastSessionCheck > SESSION_CHECK_INTERVAL

  if (shouldCheckSession) {
    try {
      // Create a new client instance
      clientInstance = createClientComponentClient<Database>({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      })

      // Update the last check timestamp
      lastSessionCheck = now

      // Check session validity asynchronously
      clientInstance.auth.getSession().then(({ data, error }) => {
        if (error) {
          console.error("Error checking session:", error)
        }

        console.log("Session check:", data.session ? "Valid session" : "No session")
      })
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error)
      // Return a dummy client that won't break the site
      return {
        auth: {
          signInWithOAuth: async () => ({ error: { message: "Supabase not configured" } }),
          getSession: async () => ({ data: { session: null }, error: null }),
          refreshSession: async () => ({ data: { session: null }, error: null }),
        },
      } as any
    }
  }

  return clientInstance
}

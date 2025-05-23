import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

let clientInstance: SupabaseClient<Database> | null = null
let lastSessionCheck = 0
const SESSION_CHECK_INTERVAL = 30 * 60 * 1000 // 30 minutes

export function getSupabaseBrowser() {
  const now = Date.now()
  const shouldCheckSession = !clientInstance || now - lastSessionCheck > SESSION_CHECK_INTERVAL

  if (shouldCheckSession) {
    console.log("Creating new Supabase client or checking session - recreating client if stale")
    try {
      // Recreate client instance to avoid stale cache
      clientInstance = createClientComponentClient<Database>({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      })

      // Update the last check timestamp
      lastSessionCheck = now

      // Check session validity asynchronously and log status
      clientInstance.auth.getSession().then(({ data, error }) => {
        if (error) {
          console.error("Session check error:", error)
        }

        const sessionStatus = data.session ? "Valid" : "No session"
        console.log("Session status:", sessionStatus)

        if (data.session) {
          console.log("Session user ID:", data.session.user?.id)
        }
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
        from: () => ({
          select: () => ({
            eq: () => ({
              single: async () => ({ data: null, error: { message: "Supabase not configured" } }),
            }),
          }),
        }),
      } as any
    }
  }

  return clientInstance
}

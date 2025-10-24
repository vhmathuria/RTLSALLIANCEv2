import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { cache } from "react"

// Check if Supabase environment variables are available
export const isSupabaseConfigured =
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
  process.env.NEXT_PUBLIC_SUPABASE_URL.length > 0 &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "string" &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 0

export const createClient = cache(async () => {
  const cookieStore = await cookies()

  if (!isSupabaseConfigured) {
    console.warn("Supabase environment variables are not set. Using dummy client.")
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        }),
      }),
    } as any
  }

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
})

export function createClientSync() {
  if (!isSupabaseConfigured) {
    console.warn("Supabase environment variables are not set. Using dummy client.")
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        }),
      }),
    } as any
  }

  // For build time, return a client without cookies
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {
        // No-op during build
      },
    },
  })
}

export const createServiceRoleClient = cache(() => {
  if (!isSupabaseConfigured) {
    console.warn("Supabase environment variables are not set. Using dummy client.")
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        }),
      }),
    } as any
  }

  // Check if service role key is available
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY not set. Using anon key instead.")
    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        getAll() {
          return []
        },
        setAll() {
          // No-op
        },
      },
    })
  }

  // Create client with service role key to bypass RLS
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {
        // No-op for service role client
      },
    },
  })
})

export { createClient as createServerClient }

import { createClient } from "@supabase/supabase-js"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createMiddlewareClient as createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import type { NextRequest, NextResponse } from "next/server"

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// For server components in App Router
export function createServerSupabaseClient() {
  // Don't import next/headers directly to avoid breaking Pages Router
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  })
}

// For client components (works in both App and Pages Router)
export function createBrowserSupabaseClient() {
  return createClientComponentClient()
}

// For middleware
export function createMiddlewareClient(req: NextRequest, res: NextResponse) {
  return createMiddlewareSupabaseClient({ req, res })
}

// For API routes
export function createRouteHandlerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

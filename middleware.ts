import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Define protected routes
const PROTECTED_ROUTES = ["/account", "/membership/upgrade", "/membership/success"]

export async function middleware(req: NextRequest) {
  // Create a response object
  const res = NextResponse.next()

  // Get the pathname
  const { pathname } = req.nextUrl

  // Only check auth for protected routes
  if (!PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    return res
  }

  try {
    // Create a Supabase client for auth checking - THIS IS THE FIXED LINE
    const supabase = createMiddlewareClient<Database>({ req, res })

    // Get the session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Debug log
    console.log(`[Middleware] Path: ${pathname}, Session exists: ${!!session}`)

    // If no session and on a protected route, redirect to login
    if (!session) {
      const redirectUrl = new URL("/login", req.url)
      redirectUrl.searchParams.set("redirectTo", pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // User is authenticated, proceed
    return res
  } catch (error) {
    console.error("[Middleware] Auth check error:", error)

    // On error, allow the request to proceed to avoid blocking legitimate users
    // The server component will perform its own auth check
    return res
  }
}

export const config = {
  matcher: ["/account/:path*", "/membership/:path*"],
}

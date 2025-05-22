import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@/lib/supabase-client"

// Define which routes require authentication
const PROTECTED_ROUTES = ["/account", "/membership/upgrade", "/membership/success", "/membership/cancel"]

export async function middleware(req: NextRequest) {
  // Only check auth for protected routes
  const { pathname } = req.nextUrl

  // Skip middleware for non-protected routes
  if (!PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  console.log(`[Middleware] Checking auth for protected route: ${pathname}`)

  const res = NextResponse.next()
  const supabase = createMiddlewareClient(req, res)

  // Get session with debug logging
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    console.error(`[Middleware] Error getting session:`, error)
  }

  const session = data?.session

  // Debug log the session state
  console.log(`[Middleware] Session exists: ${!!session}`)

  // If no session, redirect to login
  if (!session) {
    const redirectUrl = new URL("/login", req.url)
    redirectUrl.searchParams.set("redirectTo", pathname)
    redirectUrl.searchParams.set("from", "middleware")

    console.log(`[Middleware] No session, redirecting to: ${redirectUrl.toString()}`)
    return NextResponse.redirect(redirectUrl)
  }

  console.log(`[Middleware] User authenticated, proceeding to: ${pathname}`)
  return res
}

export const config = {
  matcher: ["/account/:path*", "/membership/upgrade/:path*", "/membership/success/:path*", "/membership/cancel/:path*"],
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

// Define which routes require authentication
const protectedRoutes = ["/account", "/membership/upgrade", "/membership/success", "/membership/cancel"]

// Define which routes are public (no auth required)
const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/auth/callback",
  "/membership",
  "/contact",
  "/ecosystem",
  "/rtls-digital-twin",
]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Only check auth for protected routes to avoid unnecessary processing
  const { pathname } = req.nextUrl
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // If it's not a protected route, just proceed
  if (!isProtectedRoute) {
    return res
  }

  // Create a Supabase client for the middleware
  const supabase = createMiddlewareClient({ req, res })

  // Get session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If user is authenticated, allow access to protected routes
  if (session) {
    return res
  }

  // If user is not authenticated and trying to access a protected route, redirect to login
  const redirectUrl = new URL("/login", req.url)
  redirectUrl.searchParams.set("redirectTo", pathname)

  // Add a debug parameter to track redirects
  redirectUrl.searchParams.set("from", "middleware")

  console.log(`Middleware redirecting unauthenticated user from ${pathname} to ${redirectUrl.pathname}`)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: [
    /*
     * Only match specific protected routes to avoid unnecessary middleware execution
     */
    "/account/:path*",
    "/membership/upgrade/:path*",
    "/membership/success/:path*",
    "/membership/cancel/:path*",
  ],
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

// Define which routes require authentication
const protectedRoutes = [
  "/account",
  "/membership/upgrade",
  "/membership/success",
  "/membership/cancel",
  "/bidding-portal", // Added bidding portal to protected routes
]

// Define which routes are public (no auth required)
const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/auth/callback",
  "/auth/login", // Added new auth routes
  "/auth/signup",
  "/membership",
  "/contact",
  "/ecosystem",
  "/rtls-digital-twin",
]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Get session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const url = req.nextUrl.clone()
  const { pathname } = url

  // Check if the route requires authentication
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
  const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(route))

  // If it's a protected route and user is not authenticated, redirect to login
  if (isProtectedRoute && !session) {
    if (pathname.startsWith("/bidding-portal")) {
      // For bidding portal, redirect to dedicated auth page
      url.pathname = "/auth/login"
      url.searchParams.set("redirectTo", pathname)
    } else {
      // For other protected routes, use existing login
      url.pathname = "/login"
      url.searchParams.set("redirectTo", pathname)
    }
    return NextResponse.redirect(url)
  }

  // For bidding portal routes, check vendor access in the page component
  // This allows us to show the vendor access gate instead of redirecting
  if (pathname.startsWith("/bidding-portal") && session) {
    // Let the page component handle vendor membership validation
    return res
  }

  // For resource routes, we'll check access in the page component
  // This allows us to show a paywall instead of redirecting

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public files
     * - api routes that don't require auth
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api/webhooks).*)",
  ],
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

// Define protected routes
const PROTECTED_ROUTES = ["/account", "/membership/upgrade", "/membership/success"]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  // Only check auth for protected routes
  if (!PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    return res
  }

  // Create a Supabase client for the middleware
  const supabase = createMiddlewareClient({ req, res })

  // Check if the user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If the user is not authenticated, redirect to login
  if (!session) {
    const redirectUrl = new URL("/login", req.url)
    redirectUrl.searchParams.set("redirectTo", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ["/account/:path*", "/membership/upgrade/:path*", "/membership/success/:path*"],
}

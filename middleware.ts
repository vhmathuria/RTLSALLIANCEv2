import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Define protected routes
const PROTECTED_ROUTES = ["/account", "/membership/upgrade", "/membership/success"]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  // Only check auth for protected routes
  if (!PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    return res
  }

  try {
    // Create a Supabase client for auth checking
    const supabase = createMiddlewareClient<Database>({ req, res })

    // Get the session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If no session and on a protected route, redirect to login
    if (!session) {
      const redirectUrl = new URL("/auth", req.url)
      redirectUrl.searchParams.set("redirectTo", pathname)
      return NextResponse.redirect(redirectUrl)
    }

    return res
  } catch (error) {
    console.error("[Middleware] Auth check error:", error)
    // On error, allow the request to proceed
    return res
  }
}

export const config = {
  matcher: ["/account/:path*", "/membership/:path*"],
}

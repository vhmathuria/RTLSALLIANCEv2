import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase-client"
import LoginForm from "@/components/auth/login-form"

export const dynamic = "force-dynamic"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string; from?: string }
}) {
  console.log(`[Login Page] Rendering login page, redirect to: ${searchParams.redirectTo}, from: ${searchParams.from}`)

  // Check if user is already logged in
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    console.error("[Login Page] Error getting user:", error)
  }

  const user = data?.user

  // Debug log the auth state
  console.log(`[Login Page] User authenticated: ${!!user}`)

  // If user is already logged in, redirect to the requested page or dashboard
  if (user) {
    const redirectTo = searchParams.redirectTo || "/account"
    console.log(`[Login Page] User already logged in, redirecting to: ${redirectTo}`)
    redirect(redirectTo)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In to RTLS Alliance</h1>
        <LoginForm redirectTo={searchParams.redirectTo} />
      </div>
    </div>
  )
}

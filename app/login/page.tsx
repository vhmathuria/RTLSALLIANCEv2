import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import LoginForm from "@/components/auth/login-form"

export const metadata = {
  title: "Login - RTLS Alliance",
  description: "Log in to your RTLS Alliance account",
}

export const dynamic = "force-dynamic"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string; from?: string }
}) {
  // Check if user is already logged in
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is already logged in, redirect to the requested page or dashboard
  if (user) {
    const redirectTo = searchParams.redirectTo || "/account"
    console.log(`User already logged in, redirecting to ${redirectTo} from login page`)
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

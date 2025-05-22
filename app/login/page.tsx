import { redirect } from "next/navigation"
import { supabase } from "@/lib/supabase"
import LoginForm from "./login-form"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string; error?: string }
}) {
  // Check if user is already logged in
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    // If already logged in, redirect to the requested page or home
    redirect(searchParams.redirectTo || "/")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In to RTLS Alliance</h1>

        {searchParams.error && (
          <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">
            {searchParams.error === "missing_code" && "Authentication code is missing."}
            {searchParams.error === "unexpected_error" && "An unexpected error occurred."}
            {searchParams.error !== "missing_code" && searchParams.error !== "unexpected_error" && searchParams.error}
          </div>
        )}

        <LoginForm redirectTo={searchParams.redirectTo} />
      </div>
    </div>
  )
}

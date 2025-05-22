import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"
import LoginForm from "@/components/auth/login-form"

export const dynamic = "force-dynamic"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) {
  // Create a Supabase client
  const supabase = createServerComponentClient<Database>({ cookies })

  // Check if user is already logged in
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If already logged in, redirect to the requested page or home
  if (session) {
    redirect(searchParams.redirectTo || "/")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In to RTLS Alliance</h1>
        <LoginForm redirectTo={searchParams.redirectTo} />
      </div>
    </div>
  )
}

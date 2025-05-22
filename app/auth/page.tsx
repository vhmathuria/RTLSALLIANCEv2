import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase"
import AuthClient from "./auth-client"

export const dynamic = "force-dynamic"

export default async function AuthPage({
  searchParams,
}: {
  searchParams: { tab?: string; redirectTo?: string; error?: string }
}) {
  // Server-side auth check
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    // If already logged in, redirect to the requested page or home
    redirect(searchParams.redirectTo || "/")
  }

  return (
    <AuthClient
      defaultTab={searchParams.tab || "login"}
      redirectTo={searchParams.redirectTo || "/"}
      error={searchParams.error}
    />
  )
}

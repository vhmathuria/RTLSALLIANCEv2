import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase"
import AccountClient from "./account-client"

export const dynamic = "force-dynamic"

export default async function AccountPage() {
  // Server-side auth check
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    // If not logged in, redirect to login
    redirect("/auth?redirectTo=/account")
  }

  // Get profile data
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

  return <AccountClient initialProfile={profile} user={session.user} />
}

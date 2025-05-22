import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase-client"
import AccountProfile from "./account-profile"

export const dynamic = "force-dynamic"

export default async function AccountPage() {
  console.log("[Account Page] Rendering account page")

  // Get the user server-side
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    console.error("[Account Page] Error getting user:", error)
  }

  const user = data?.user

  // Debug log the auth state
  console.log(`[Account Page] User authenticated: ${!!user}`)

  // If no user is found, redirect to login
  if (!user) {
    console.log("[Account Page] No user found, redirecting to login")
    redirect("/login?redirectTo=/account&from=account-page")
  }

  // Fetch the user's profile
  const { data: profile, error: profileError } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (profileError) {
    console.error("[Account Page] Error fetching profile:", profileError)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Account</h1>
      <AccountProfile user={user} profile={profile || {}} />
    </div>
  )
}

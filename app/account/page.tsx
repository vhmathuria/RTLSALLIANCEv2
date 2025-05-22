import { redirect } from "next/navigation"
import { createServerSupabaseClient, supabase, getUserProfile } from "@/lib/supabase-client"
import AccountProfile from "./account-profile"

export const dynamic = "force-dynamic"

export default async function AccountPage() {
  console.log("[Account Page] Rendering account page")

  // Get the user server-side
  const supabaseClient = createServerSupabaseClient()
  const {
    data: { user },
    error,
  } = await supabaseClient.auth.getUser()

  if (error) {
    console.error("[Account Page] Error getting user:", error)
  }

  // Debug log the auth state
  console.log(`[Account Page] User authenticated: ${!!user}`)

  // If no user is found, redirect to login
  if (!user) {
    console.log("[Account Page] No user found, redirecting to login")
    redirect("/login?redirectTo=/account&from=account-page")
  }

  // Get the user's profile
  let profile = await getUserProfile(user.id)

  // If no profile exists, create one
  if (!profile) {
    // Create a basic profile
    const newProfile = {
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name || "",
      membership_tier: "public",
      membership_status: "active",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Insert the profile
    const { error: insertError } = await supabase.from("profiles").insert(newProfile)

    if (insertError) {
      console.error("Error creating profile:", insertError)
    }

    // Get the latest profile data
    profile = await getUserProfile(user.id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Account</h1>
      <AccountProfile user={user} profile={profile || {}} />
    </div>
  )
}

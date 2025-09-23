import { createClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import AccountProfile from "./account-profile"

export const dynamic = "force-dynamic"

export default async function AccountPage() {
  const supabase = await createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/login?redirect=/account")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  // If no profile exists, create one
  if (!profile) {
    await supabase.from("profiles").insert({
      id: user.id,
      email: user.email,
      membership_tier: "public",
      membership_status: "active", // Changed to lowercase
    })
  }

  // Get the latest profile data
  const { data: updatedProfile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Account</h1>
          <AccountProfile user={user} profile={updatedProfile} />
        </div>
      </div>
    </main>
  )
}

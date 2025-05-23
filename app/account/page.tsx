import { createClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import AccountProfile from "./account-profile"

// Force dynamic rendering to prevent ISR caching issues
export const dynamic = "force-dynamic"

export default async function AccountPage() {
  const supabase = createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/login?redirect=/account")
  }

  // Function to get user profile with retry
  const getUserProfile = async (retryCount = 0) => {
    try {
      const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

      if (error) {
        console.error(`Error fetching profile (attempt ${retryCount + 1}):`, error)
        throw error
      }

      return profile
    } catch (error) {
      // Retry twice after a short delay
      if (retryCount < 2) {
        console.log(`Retrying profile fetch in 1 second (attempt ${retryCount + 1}/3)...`)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return getUserProfile(retryCount + 1)
      }

      // If still failing, return null to trigger profile creation
      console.error("Failed to fetch profile after retry:", error)
      return null
    }
  }

  // Get user profile with retry
  const profile = await getUserProfile()

  // If no profile exists, create one
  if (!profile) {
    try {
      await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
        membership_tier: "public",
        membership_status: "active", // Using lowercase consistently
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

      console.log("Created new profile for user:", user.id)
    } catch (error) {
      console.error("Error creating profile:", error)
    }
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

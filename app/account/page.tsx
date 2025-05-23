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
      console.log("SERVER: Fetching profile for user:", user.id)
      const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

      if (error) {
        console.error(`SERVER: Error fetching profile (attempt ${retryCount + 1}):`, error)
        throw error
      }

      console.log("SERVER: Profile fetched successfully:", {
        id: profile?.id,
        email: profile?.email,
        membership_tier: profile?.membership_tier,
        membership_status: profile?.membership_status,
      })

      return profile
    } catch (error) {
      // Retry twice after a short delay
      if (retryCount < 2) {
        console.log(`SERVER: Retrying profile fetch in 1 second (attempt ${retryCount + 1}/3)...`)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return getUserProfile(retryCount + 1)
      }

      // If still failing, return null to trigger profile creation
      console.error("SERVER: Failed to fetch profile after retry:", error)
      return null
    }
  }

  // Get user profile with retry
  const profile = await getUserProfile()

  // If no profile exists, create one
  if (!profile) {
    try {
      console.log("SERVER: Creating new profile for user:", user.id)

      const newProfile = {
        id: user.id,
        email: user.email,
        membership_tier: "public",
        membership_status: "active", // Using lowercase consistently
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      const { error } = await supabase.from("profiles").insert(newProfile)

      if (error) {
        console.error("SERVER: Error creating profile:", error)
      } else {
        console.log("SERVER: Profile created successfully with status 'active'")
      }
    } catch (error) {
      console.error("SERVER: Error creating profile:", error)
    }
  }
  // If profile exists but status is not active, update it
  else if (profile.membership_status !== "active" && profile.membership_status !== "ACTIVE") {
    try {
      console.log("SERVER: Updating profile status to 'active' for user:", user.id)

      const { error } = await supabase
        .from("profiles")
        .update({
          membership_status: "active",
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (error) {
        console.error("SERVER: Error updating profile status:", error)
      } else {
        console.log("SERVER: Profile status updated to 'active'")
      }
    } catch (error) {
      console.error("SERVER: Error updating profile status:", error)
    }
  }
  // If profile status is uppercase ACTIVE, convert to lowercase
  else if (profile.membership_status === "ACTIVE") {
    try {
      console.log("SERVER: Converting ACTIVE to active for user:", user.id)

      const { error } = await supabase
        .from("profiles")
        .update({
          membership_status: "active",
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (error) {
        console.error("SERVER: Error converting status case:", error)
      } else {
        console.log("SERVER: Status case converted to lowercase")
      }
    } catch (error) {
      console.error("SERVER: Error converting status case:", error)
    }
  }

  // Get the latest profile data
  console.log("SERVER: Fetching updated profile data")
  const { data: updatedProfile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  console.log("SERVER: Final profile data:", {
    id: updatedProfile?.id,
    email: updatedProfile?.email,
    membership_tier: updatedProfile?.membership_tier,
    membership_status: updatedProfile?.membership_status,
  })

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

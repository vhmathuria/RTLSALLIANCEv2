import { createClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import AccountProfile from "./account-profile"

// Force dynamic rendering to prevent ISR caching issues
export const dynamic = "force-dynamic"

export default async function AccountPage() {
  const supabase = createClient()

  console.log("🔄 ACCOUNT PAGE: Starting")

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    console.log("❌ ACCOUNT PAGE: No user, redirecting to login")
    redirect("/login?redirect=/account")
  }

  console.log("✅ ACCOUNT PAGE: User found:", user.id, user.email)

  // Function to get user profile with retry and guaranteed creation
  const getUserProfile = async (retryCount = 0) => {
    try {
      console.log(`🔄 ACCOUNT PAGE: Fetching profile (attempt ${retryCount + 1})`)

      const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

      if (error && error.code !== "PGRST116") {
        console.error(`❌ ACCOUNT PAGE: Profile fetch error (attempt ${retryCount + 1}):`, error)
        throw error
      }

      if (!profile) {
        console.log("⚠️ ACCOUNT PAGE: No profile found, will create one")
        return null
      }

      console.log("✅ ACCOUNT PAGE: Profile found:", {
        id: profile.id,
        email: profile.email,
        tier: profile.membership_tier,
        status: profile.membership_status,
      })

      return profile
    } catch (error) {
      if (retryCount < 2) {
        console.log(`🔄 ACCOUNT PAGE: Retrying profile fetch in 1 second (attempt ${retryCount + 1}/3)`)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return getUserProfile(retryCount + 1)
      }

      console.error("❌ ACCOUNT PAGE: Failed to fetch profile after retries:", error)
      return null
    }
  }

  // Get user profile with retry
  let profile = await getUserProfile()

  // If no profile exists, create one using admin function
  if (!profile) {
    try {
      console.log("🔄 ACCOUNT PAGE: Creating profile via admin function")

      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "RTLS Member"

      // Use admin function to create profile
      const { error: adminError } = await supabase.rpc("admin_update_membership", {
        user_id: user.id,
        tier: "public",
        status: "active",
        expiry: null,
        stripe_id: null,
        payment_date: null,
      })

      if (adminError) {
        console.error("❌ ACCOUNT PAGE: Admin function failed:", adminError)

        // Fallback to direct insert
        console.log("🔄 ACCOUNT PAGE: Trying direct insert as fallback")
        const { error: insertError } = await supabase.from("profiles").upsert(
          {
            id: user.id,
            email: user.email,
            full_name: fullName,
            membership_tier: "public",
            membership_status: "active",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "id",
          },
        )

        if (insertError) {
          console.error("❌ ACCOUNT PAGE: Direct insert failed:", insertError)
        } else {
          console.log("✅ ACCOUNT PAGE: Profile created via direct insert")
        }
      } else {
        console.log("✅ ACCOUNT PAGE: Profile created via admin function")

        // Update additional fields
        await supabase
          .from("profiles")
          .update({
            email: user.email,
            full_name: fullName,
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)
      }

      // Fetch the newly created profile
      profile = await getUserProfile()
    } catch (error) {
      console.error("❌ ACCOUNT PAGE: Profile creation failed:", error)
    }
  }

  // Ensure we have a profile with active status
  if (profile && profile.membership_status !== "active") {
    console.log("🔄 ACCOUNT PAGE: Fixing inactive status")

    try {
      const { error: fixError } = await supabase.rpc("admin_update_membership", {
        user_id: user.id,
        tier: profile.membership_tier || "public",
        status: "active",
        expiry: profile.membership_expiry,
        stripe_id: profile.stripe_customer_id,
        payment_date: profile.last_payment_date,
      })

      if (!fixError) {
        console.log("✅ ACCOUNT PAGE: Status fixed to active")
        // Refetch profile
        profile = await getUserProfile()
      } else {
        console.error("❌ ACCOUNT PAGE: Failed to fix status:", fixError)
      }
    } catch (error) {
      console.error("❌ ACCOUNT PAGE: Error fixing status:", error)
    }
  }

  console.log("✅ ACCOUNT PAGE: Final profile state:", {
    exists: !!profile,
    tier: profile?.membership_tier,
    status: profile?.membership_status,
  })

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Account</h1>
          <AccountProfile user={user} profile={profile} />
        </div>
      </div>
    </main>
  )
}

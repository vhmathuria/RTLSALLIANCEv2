import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import AccountProfile from "./account-profile"
import { MembershipProvider } from "@/contexts/membership-context"

export const dynamic = "force-dynamic"

export default async function AccountPage() {
  // Get the user server-side
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If no user is found, redirect to login
  if (!user) {
    console.log("No user found in account page, redirecting to login")
    redirect("/login?redirectTo=/account&from=account-page")
  }

  // Fetch the user's profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Account</h1>

      <MembershipProvider>
        <AccountProfile user={user} profile={profile || {}} />
      </MembershipProvider>
    </div>
  )
}

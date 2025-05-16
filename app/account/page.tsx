import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import AccountProfile from "./account-profile"

export const metadata = {
  title: "My Account - RTLS Alliance",
  description: "Manage your RTLS Alliance account and membership",
}

export default async function AccountPage() {
  const supabase = createServerClient()

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If no user is logged in, redirect to login
  if (!user) {
    redirect("/login?redirectTo=/account")
  }

  // Get the user's profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <AccountProfile user={user} profile={profile} />
          </div>
        </div>
      </div>
    </div>
  )
}

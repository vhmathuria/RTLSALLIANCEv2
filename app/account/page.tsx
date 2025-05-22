import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

export const dynamic = "force-dynamic"

export default async function AccountPage() {
  try {
    // Create a Supabase client using the server component client with cookies
    const supabase = createServerComponentClient<Database>({ cookies })

    // Get the session directly
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Debug log
    console.log(`[Account Page] Session exists: ${!!session}`)

    // If no session, redirect to login
    if (!session) {
      redirect("/login?redirectTo=/account")
    }

    // Get the user from the session
    const user = session.user

    // Get the user's profile
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

    // If no profile exists, create one
    if (!profile) {
      // Create a basic profile
      const { error } = await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name || "",
        membership_tier: "public",
        membership_status: "active",
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error("Error creating profile:", error)
      }
    }

    // Get the latest profile data
    const { data: updatedProfile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Account</h1>
        {/* Render account profile component with user and profile data */}
        <pre>{JSON.stringify({ user, profile: updatedProfile }, null, 2)}</pre>
      </div>
    )
  } catch (error) {
    console.error("[Account Page] Error:", error)

    // On error, redirect to login
    redirect("/login?redirectTo=/account&error=server_error")
  }
}

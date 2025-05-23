import { createClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import MembershipManagerClient from "./membership-manager-client"

export const dynamic = "force-dynamic"

export default async function MembershipManagerPage() {
  const supabase = createClient()

  // Get current user and check if admin
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/admin/membership-manager")
  }

  // Check if user is admin
  const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", user.id).single()

  if (!profile?.is_admin) {
    redirect("/")
  }

  // Get all profiles with membership info
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching profiles:", error)
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Membership Manager</h1>
          <MembershipManagerClient profiles={profiles || []} />
        </div>
      </div>
    </main>
  )
}

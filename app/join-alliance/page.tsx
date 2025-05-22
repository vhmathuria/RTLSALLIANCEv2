import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function JoinAlliancePage() {
  // Check if user is already logged in
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    // If already logged in, redirect to membership page
    redirect("/membership")
  }

  // Otherwise redirect to auth page with signup tab active
  redirect("/auth?tab=signup&redirectTo=/membership")
}

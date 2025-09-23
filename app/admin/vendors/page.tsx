import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AdminVendorsClient } from "./AdminVendorsClient"

export default async function AdminVendorsPage() {
  const cookieStore = cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
    },
  })

  // Check if user is admin
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", user.id).single()

  if (!profile?.is_admin) {
    redirect("/")
  }

  // Fetch all vendors
  const { data: vendors, error } = await supabase.from("vendors").select("*").order("sort_order", { ascending: true })

  if (error) {
    console.error("Error fetching vendors:", error)
    return <div>Error loading vendors</div>
  }

  return <AdminVendorsClient vendors={vendors || []} />
}

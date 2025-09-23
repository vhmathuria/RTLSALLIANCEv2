import type React from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { AdminSidebar } from "./admin-sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated and is an admin
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("[v0] Admin Layout - User:", user?.id, user?.email)

  if (!user) {
    console.log("[v0] Admin Layout - No user found, redirecting to auth")
    redirect("/auth?redirectTo=/admin")
  }

  // Check if user has admin role
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role, is_admin, email, full_name")
    .eq("id", user.id)
    .single()

  console.log("[v0] Admin Layout - Profile data:", profile)
  console.log("[v0] Admin Layout - Profile error:", error)

  if (!profile || (profile.role !== "admin" && !profile.is_admin)) {
    console.log("[v0] Admin Layout - User not admin, redirecting to home")
    console.log("[v0] Admin Layout - Profile role:", profile?.role)
    console.log("[v0] Admin Layout - Profile is_admin:", profile?.is_admin)
    redirect("/")
  }

  console.log("[v0] Admin Layout - Admin access granted")

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

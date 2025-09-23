import { createClient } from "@/lib/supabase-server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserManagementTable } from "./user-management-table"

export default async function UsersPage() {
  const supabase = await createClient()

  // Get all users with their profiles
  const { data: users, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching users:", error)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">Manage user accounts and memberships</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>View and manage all registered users ({users?.length || 0} total)</CardDescription>
        </CardHeader>
        <CardContent>
          <UserManagementTable users={users || []} />
        </CardContent>
      </Card>
    </div>
  )
}

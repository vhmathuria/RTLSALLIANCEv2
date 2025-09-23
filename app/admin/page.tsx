import { createClient } from "@/lib/supabase-server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, CreditCard, TrendingUp } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Get dashboard statistics
  const [{ count: totalUsers }, { count: totalArticles }, { count: activeMembers }, { data: recentUsers }] =
    await Promise.all([
      supabase.from("profiles").select("*", { count: "exact", head: true }),
      supabase.from("articles").select("*", { count: "exact", head: true }),
      supabase.from("profiles").select("*", { count: "exact", head: true }).neq("membership_tier", "public"),
      supabase
        .from("profiles")
        .select("id, full_name, email, created_at, membership_tier")
        .order("created_at", { ascending: false })
        .limit(5),
    ])

  const stats = [
    {
      title: "Total Users",
      value: totalUsers || 0,
      icon: Users,
      description: "Registered users",
      color: "text-blue-600",
    },
    {
      title: "Articles",
      value: totalArticles || 0,
      icon: FileText,
      description: "Published articles",
      color: "text-green-600",
    },
    {
      title: "Active Members",
      value: activeMembers || 0,
      icon: CreditCard,
      description: "Paid memberships",
      color: "text-purple-600",
    },
    {
      title: "Growth Rate",
      value: "12%",
      icon: TrendingUp,
      description: "Monthly growth",
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your RTLS Alliance platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Latest user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers?.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{user.full_name || user.email}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium capitalize">{user.membership_tier || "Public"}</p>
                    <p className="text-xs text-gray-500">{new Date(user.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a href="/admin/users" className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium">Manage Users</div>
                <div className="text-sm text-gray-500">View and edit user accounts</div>
              </a>
              <a href="/admin/articles" className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium">Content Management</div>
                <div className="text-sm text-gray-500">Create and edit articles</div>
              </a>
              <a href="/admin/memberships" className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium">Membership Overview</div>
                <div className="text-sm text-gray-500">Monitor subscriptions</div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

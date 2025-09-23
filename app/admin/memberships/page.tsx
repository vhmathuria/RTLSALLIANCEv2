import { createClient } from "@/lib/supabase-server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default async function MembershipsPage() {
  const supabase = await createClient()

  // Get membership statistics
  const [{ data: allMembers }, { count: studentCount }, { count: professionalCount }, { count: corporateCount }] =
    await Promise.all([
      supabase
        .from("profiles")
        .select("id, full_name, email, membership_tier, membership_status, membership_expiry, last_payment_date")
        .neq("membership_tier", "public")
        .order("last_payment_date", { ascending: false }),
      supabase.from("profiles").select("*", { count: "exact", head: true }).eq("membership_tier", "student"),
      supabase.from("profiles").select("*", { count: "exact", head: true }).eq("membership_tier", "professional"),
      supabase.from("profiles").select("*", { count: "exact", head: true }).eq("membership_tier", "corporate"),
    ])

  const membershipStats = [
    { tier: "Student", count: studentCount || 0, color: "bg-blue-100 text-blue-800" },
    { tier: "Professional", count: professionalCount || 0, color: "bg-purple-100 text-purple-800" },
    { tier: "Corporate", count: corporateCount || 0, color: "bg-green-100 text-green-800" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Membership Management</h1>
        <p className="text-gray-600 mt-2">Monitor and manage user subscriptions</p>
      </div>

      {/* Membership Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {membershipStats.map((stat) => (
          <Card key={stat.tier}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.tier} Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
              <Badge className={stat.color}>{stat.tier}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Memberships Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Memberships</CardTitle>
          <CardDescription>All users with paid memberships ({allMembers?.length || 0} total)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Expires</TableHead>
                  <TableHead>Last Payment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allMembers?.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.full_name || "No name"}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          member.membership_tier === "student"
                            ? "bg-blue-100 text-blue-800"
                            : member.membership_tier === "professional"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                        }
                      >
                        {member.membership_tier?.charAt(0).toUpperCase() + member.membership_tier?.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.membership_status === "active" ? "default" : "destructive"}>
                        {member.membership_status?.charAt(0).toUpperCase() + member.membership_status?.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {member.membership_expiry ? new Date(member.membership_expiry).toLocaleDateString() : "N/A"}
                    </TableCell>
                    <TableCell>
                      {member.last_payment_date ? new Date(member.last_payment_date).toLocaleDateString() : "N/A"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {(!allMembers || allMembers.length === 0) && (
            <div className="text-center py-8 text-gray-500">No active memberships found.</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

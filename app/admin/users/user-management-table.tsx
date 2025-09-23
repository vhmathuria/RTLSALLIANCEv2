"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Edit, Trash2 } from "lucide-react"

interface User {
  id: string
  email: string
  full_name: string | null
  membership_tier: string | null
  membership_status: string | null
  created_at: string
  role: string | null
}

interface UserManagementTableProps {
  users: User[]
}

export function UserManagementTable({ users }: UserManagementTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filtered = users.filter(
      (user) =>
        user.email.toLowerCase().includes(term.toLowerCase()) ||
        user.full_name?.toLowerCase().includes(term.toLowerCase()) ||
        user.membership_tier?.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredUsers(filtered)
  }

  const getMembershipBadge = (tier: string | null, status: string | null) => {
    if (!tier || tier === "public") {
      return <Badge variant="secondary">Public</Badge>
    }

    const isActive = status === "active"
    const variant = isActive ? "default" : "destructive"

    return <Badge variant={variant}>{tier.charAt(0).toUpperCase() + tier.slice(1)}</Badge>
  }

  const getRoleBadge = (role: string | null) => {
    if (role === "admin") {
      return <Badge variant="destructive">Admin</Badge>
    }
    return <Badge variant="outline">User</Badge>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search users by email, name, or membership..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Membership</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{user.full_name || "No name"}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </TableCell>
                <TableCell>{getMembershipBadge(user.membership_tier, user.membership_status)}</TableCell>
                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">No users found matching your search criteria.</div>
      )}
    </div>
  )
}

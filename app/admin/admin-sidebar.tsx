"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, FileText, Settings, RefreshCw, CreditCard, BookOpen, BarChart3 } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Articles", href: "/admin/articles", icon: FileText },
  { name: "Memberships", href: "/admin/memberships", icon: CreditCard },
  { name: "Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Revalidation", href: "/admin/revalidation", icon: RefreshCw },
  { name: "Setup", href: "/admin/setup", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
      </div>
      <nav className="mt-6">
        <div className="px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1",
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <item.icon
                  className={cn("mr-3 h-5 w-5", isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500")}
                />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

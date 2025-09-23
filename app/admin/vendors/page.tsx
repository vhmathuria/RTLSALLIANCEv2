"use client"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { VendorToggle } from "@/components/admin/vendor-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Vendor Management</h1>
        <p className="text-muted-foreground mt-2">Manage vendor visibility on the ecosystem page</p>
      </div>

      <div className="grid gap-4">
        {vendors?.map((vendor) => (
          <Card key={vendor.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{vendor.vendor_name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    {vendor.headquarters_location && <span>{vendor.headquarters_location}</span>}
                    {vendor.founding_year && (
                      <>
                        <span>•</span>
                        <span>Est. {vendor.founding_year}</span>
                      </>
                    )}
                  </div>
                </div>
                <VendorToggle
                  vendorId={vendor.id}
                  vendorName={vendor.vendor_name}
                  isActive={vendor.is_active}
                  onToggle={() => {}} // Will be handled by the component
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {vendor.core_services && (
                  <p className="text-sm text-muted-foreground line-clamp-2">{vendor.core_services}</p>
                )}
                {vendor.rtls_technologies && (
                  <div className="flex flex-wrap gap-1">
                    {vendor.rtls_technologies
                      .split(", ")
                      .slice(0, 5)
                      .map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech.trim()}
                        </Badge>
                      ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

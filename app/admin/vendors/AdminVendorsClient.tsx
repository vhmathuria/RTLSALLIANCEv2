"use client"

import { useState } from "react"
import { VendorToggle } from "@/components/admin/vendor-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Vendor {
  id: string
  vendor_name: string
  headquarters_location?: string
  founding_year?: number
  core_services?: string
  rtls_technologies?: string
  is_active: boolean
}

interface AdminVendorsClientProps {
  vendors: Vendor[]
}

export function AdminVendorsClient({ vendors: initialVendors }: AdminVendorsClientProps) {
  const [vendors, setVendors] = useState(initialVendors)

  const handleToggle = (vendorId: string, isActive: boolean) => {
    setVendors((prev) => prev.map((vendor) => (vendor.id === vendorId ? { ...vendor, is_active: isActive } : vendor)))
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Vendor Management</h1>
        <p className="text-muted-foreground mt-2">Manage vendor visibility on the ecosystem page</p>
      </div>

      <div className="grid gap-4">
        {vendors.map((vendor) => (
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
                  onToggle={handleToggle}
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

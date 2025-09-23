"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { createBrowserClient } from "@supabase/ssr"

interface VendorToggleProps {
  vendorId: string
  vendorName: string
  isActive: boolean
  onToggle: (vendorId: string, isActive: boolean) => void
}

export function VendorToggle({ vendorId, vendorName, isActive, onToggle }: VendorToggleProps) {
  const [loading, setLoading] = useState(false)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  const handleToggle = async (checked: boolean) => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from("vendors")
        .update({ is_active: checked, updated_at: new Date().toISOString() })
        .eq("id", vendorId)

      if (error) throw error

      onToggle(vendorId, checked)
      toast.success(`${vendorName} ${checked ? "activated" : "deactivated"}`)
    } catch (error) {
      console.error("Error updating vendor status:", error)
      toast.error("Failed to update vendor status")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch id={`vendor-${vendorId}`} checked={isActive} onCheckedChange={handleToggle} disabled={loading} />
      <Label htmlFor={`vendor-${vendorId}`} className="text-sm">
        {isActive ? "Active" : "Inactive"}
      </Label>
    </div>
  )
}

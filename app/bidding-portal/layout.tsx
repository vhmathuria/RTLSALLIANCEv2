"use client"

import type React from "react"

import { useEffect, useState } from "react"
import VendorAccessGate from "@/components/bids/vendor-access-gate"
import { checkVendorAccess } from "@/lib/bid-actions"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function BiddingPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const [vendorAccess, setVendorAccess] = useState<any>(null)

  useEffect(() => {
    checkAccess()
  }, [])

  const checkAccess = async () => {
    try {
      const access = await checkVendorAccess()
      setVendorAccess(access)
    } catch (error) {
      console.error("Access check error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading bidding portal...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show access gate if user doesn't have vendor access
  if (vendorAccess && !vendorAccess.hasAccess) {
    return (
      <VendorAccessGate
        userMembershipTier={vendorAccess.membershipTier}
        userMembershipStatus={vendorAccess.membershipStatus}
      />
    )
  }

  return <>{children}</>
}

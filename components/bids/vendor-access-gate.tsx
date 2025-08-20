"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Crown, Building } from "lucide-react"
import Link from "next/link"

interface VendorAccessGateProps {
  userMembershipTier?: string
  userMembershipStatus?: string
}

export default function VendorAccessGate({ userMembershipTier, userMembershipStatus }: VendorAccessGateProps) {
  const isQualifiedVendor =
    userMembershipStatus === "active" && (userMembershipTier === "professional" || userMembershipTier === "corporate")

  if (isQualifiedVendor) {
    return null // Don't show gate if user is qualified
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-fit">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Vendor Access Required</CardTitle>
          <CardDescription className="text-lg">
            Access to the Project Bidding Portal is restricted to qualified RTLS Alliance vendor members
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-gray-600">
            <p className="mb-4">
              To submit bids and access project details, you need an active Professional or Corporate membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader className="text-center pb-3">
                <Crown className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-blue-900">Professional</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">$299/year</div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Submit unlimited bids</li>
                  <li>• Access all project details</li>
                  <li>• Vendor directory listing</li>
                  <li>• Priority support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader className="text-center pb-3">
                <Building className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-purple-900">Corporate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">$999/year</div>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Everything in Professional</li>
                  <li>• Featured vendor status</li>
                  <li>• Advanced analytics</li>
                  <li>• Team collaboration tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <div className="text-sm text-gray-600">
              Current Status:{" "}
              <span className="font-medium capitalize">
                {userMembershipTier || "No membership"} {userMembershipStatus && `(${userMembershipStatus})`}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/membership">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Upgrade Membership
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

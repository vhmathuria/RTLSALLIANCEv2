"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Crown, AlertTriangle } from "lucide-react"

interface VendorAccessGateProps {
  userMembershipTier?: string
  userMembershipStatus?: string
  hasCorporateDomain?: boolean
  corporateDomainMessage?: string
}

export default function VendorAccessGate({
  userMembershipTier,
  userMembershipStatus,
  hasCorporateDomain,
  corporateDomainMessage,
}: VendorAccessGateProps) {
  const hasActiveMembership =
    userMembershipStatus === "active" && ["professional", "corporate"].includes(userMembershipTier)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
          </div>
          <CardTitle className="text-xl text-orange-900">Access Requirements Not Met</CardTitle>
          <CardDescription className="text-orange-700">
            To submit bids and participate in the bidding portal, you need to meet the following requirements:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Corporate Domain Requirement */}
          <div
            className={`flex items-start gap-3 p-4 rounded-lg ${
              hasCorporateDomain ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            }`}
          >
            <Mail className={`h-5 w-5 mt-0.5 ${hasCorporateDomain ? "text-green-600" : "text-red-600"}`} />
            <div className="flex-1">
              <h3 className={`font-semibold ${hasCorporateDomain ? "text-green-900" : "text-red-900"}`}>
                Corporate Email Domain {hasCorporateDomain ? "✓" : "✗"}
              </h3>
              <p className={`text-sm mt-1 ${hasCorporateDomain ? "text-green-700" : "text-red-700"}`}>
                {hasCorporateDomain
                  ? "Your email domain is verified as a corporate domain."
                  : corporateDomainMessage || "You must use a corporate email address to submit bids."}
              </p>
            </div>
          </div>

          {/* Membership Requirement */}
          <div
            className={`flex items-start gap-3 p-4 rounded-lg ${
              hasActiveMembership ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            }`}
          >
            <Crown className={`h-5 w-5 mt-0.5 ${hasActiveMembership ? "text-green-600" : "text-red-600"}`} />
            <div className="flex-1">
              <h3 className={`font-semibold ${hasActiveMembership ? "text-green-900" : "text-red-900"}`}>
                Active Professional/Corporate Membership {hasActiveMembership ? "✓" : "✗"}
              </h3>
              <p className={`text-sm mt-1 ${hasActiveMembership ? "text-green-700" : "text-red-700"}`}>
                {hasActiveMembership
                  ? `You have an active ${userMembershipTier} membership.`
                  : "You need an active Professional or Corporate membership to submit bids."}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {!hasActiveMembership && (
              <Link href="/membership" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Crown className="mr-2 h-4 w-4" />
                  Upgrade Membership
                </Button>
              </Link>
            )}

            {!hasCorporateDomain && (
              <Link href="/account" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  <Mail className="mr-2 h-4 w-4" />
                  Update Email Address
                </Button>
              </Link>
            )}
          </div>

          <div className="text-center pt-4 border-t border-orange-200">
            <p className="text-sm text-orange-700">
              Need help?{" "}
              <Link href="/contact" className="underline hover:no-underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

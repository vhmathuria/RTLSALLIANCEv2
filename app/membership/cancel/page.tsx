import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle } from "lucide-react"
import PageSEO from "@/components/seo/page-seo"

export const metadata: Metadata = {
  title: "Membership Cancelled | RTLS Alliance",
  description: "Your membership checkout was cancelled.",
  robots: "noindex, nofollow",
}

export default function MembershipCancelPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageSEO
        title="Membership Cancelled | RTLS Alliance"
        description="Your membership checkout was cancelled."
        canonicalUrl="/membership/cancel"
        noIndex={true}
      />

      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl">Checkout Cancelled</CardTitle>
            <CardDescription>Your membership checkout was cancelled.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              You've cancelled the checkout process. If you encountered any issues or have questions about our
              membership options, please don't hesitate to contact us.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href="/membership">
              <Button>Return to Membership</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

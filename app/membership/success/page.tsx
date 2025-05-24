import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import PageSEO from "@/components/seo/page-seo"

export const metadata: Metadata = {
  title: "Membership Success | RTLS Alliance",
  description: "Your membership has been successfully activated.",
  robots: "noindex, nofollow",
}

export default function MembershipSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const sessionId = searchParams.session_id as string | undefined

  return (
    <div className="container mx-auto px-4 py-12">
      <PageSEO
        title="Membership Success | RTLS Alliance"
        description="Your membership has been successfully activated."
        canonicalUrl="/membership/success"
        noIndex={true}
      />

      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Membership Activated</CardTitle>
            <CardDescription>Your membership has been successfully activated.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Thank you for joining the RTLS Alliance! Your membership is now active, and you can access all the
              resources and benefits included in your membership tier.
            </p>
            {sessionId && (
              <p className="text-sm text-gray-500">Transaction reference: {sessionId.substring(0, 8)}...</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href="/resources">
              <Button>Browse Resources</Button>
            </Link>
            <Link href="/account">
              <Button variant="outline">View Account</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

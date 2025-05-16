import { redirect } from "next/navigation"
import Link from "next/link"
import { createServerClient } from "@/lib/supabase-server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Building, Check } from "lucide-react"

export const metadata = {
  title: "Upgrade Membership - RTLS Alliance",
  description: "Upgrade your RTLS Alliance membership to access premium content",
}

export default async function MembershipUpgradePage({ searchParams }: { searchParams: { tier?: string } }) {
  // Check if user is logged in
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is not logged in, redirect to login
  if (!user) {
    redirect("/login?redirectTo=/membership/upgrade")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("membership_tier").eq("id", user.id).single()

  const currentTier = profile?.membership_tier || "public"

  // Get the selected tier from the URL query parameter
  const selectedTier = searchParams.tier || "all"

  // Define membership tiers
  const tiers = [
    {
      id: "student",
      name: "Student",
      price: "$100",
      period: "per year",
      description: "Perfect for students and academic researchers",
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      features: [
        "Access to educational resources",
        "Case studies for academic research",
        "Basic implementation guides",
        "Community forum access",
      ],
      buttonText: currentTier === "student" ? "Current Plan" : "Upgrade to Student",
      disabled: currentTier === "student",
      recommended: false,
      color: "border-blue-200",
      priceId: process.env.STRIPE_STUDENT_PRICE_ID,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$550",
      period: "per year",
      description: "For individual professionals and consultants",
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      features: [
        "All Student features",
        "Advanced implementation guides",
        "Industry insights and analysis",
        "Expert webinars and workshops",
        "Priority support",
      ],
      buttonText: currentTier === "professional" ? "Current Plan" : "Upgrade to Professional",
      disabled: currentTier === "professional",
      recommended: true,
      color: "border-purple-200",
      priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID,
    },
    {
      id: "corporate",
      name: "Corporate",
      price: "$4,500",
      period: "per year",
      description: "For organizations and teams",
      icon: <Building className="h-8 w-8 text-green-500" />,
      features: [
        "All Professional features",
        "Enterprise case studies",
        "Strategic analysis and reports",
        "Team collaboration tools",
        "Dedicated account manager",
        "Custom implementation support",
      ],
      buttonText: currentTier === "corporate" ? "Current Plan" : "Upgrade to Corporate",
      disabled: currentTier === "corporate",
      recommended: false,
      color: "border-green-200",
      priceId: process.env.STRIPE_CORPORATE_PRICE_ID,
    },
  ]

  // Filter tiers based on the selected tier
  const displayTiers = selectedTier === "all" ? tiers : tiers.filter((tier) => tier.id === selectedTier)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Upgrade Your Membership</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedTier === "all"
                ? "Choose the membership tier that best fits your needs and unlock premium content and features"
                : `Upgrade to our ${displayTiers[0]?.name} membership to unlock premium content and features`}
            </p>
          </div>

          <div
            className={`grid gap-8 ${displayTiers.length > 1 ? "md:grid-cols-3" : "md:grid-cols-1 max-w-md mx-auto"}`}
          >
            {displayTiers.map((tier) => (
              <Card key={tier.id} className={`relative ${tier.recommended ? "border-2 " + tier.color : ""}`}>
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-center mb-4">{tier.icon}</div>
                  <CardTitle className="text-center text-2xl">{tier.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-gray-500 ml-1">{tier.period}</span>
                  </div>
                  <CardDescription className="text-center">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <form action="/api/create-checkout" method="POST" className="w-full">
                    <input type="hidden" name="priceId" value={tier.priceId} />
                    <input type="hidden" name="tier" value={tier.id} />
                    <Button className="w-full" disabled={tier.disabled} type={tier.disabled ? "button" : "submit"}>
                      {tier.buttonText}
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              All memberships include access to the RTLS Alliance community and resources
            </p>
            <Link href="/contact">
              <Button variant="outline">Have questions? Contact us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

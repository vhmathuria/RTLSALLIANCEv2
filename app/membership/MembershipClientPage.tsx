"use client"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function MembershipClientPage() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [selectedTier, setSelectedTier] = useState<string>("professional")
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    async function getProfile() {
      try {
        setLoading(true)

        // Get current user
        const {
          data: { user },
        } = await supabase.auth.getUser()

        setUser(user)

        if (user) {
          // Get profile
          const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

          if (error) {
            console.error("Error loading profile:", error)
          } else {
            setProfile(profile)
          }
        }
      } catch (error) {
        console.error("Error loading user profile:", error)
      } finally {
        setLoading(false)
      }
    }

    getProfile()
  }, [supabase])

  const handleCheckout = async (priceId: string, tier: string) => {
    if (!user) {
      router.push(`/login?redirectTo=${encodeURIComponent("/membership")}`)
      return
    }

    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          tier,
          returnUrl: window.location.origin + "/membership",
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("Failed to create checkout session")
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
    }
  }

  const membershipTiers = [
    {
      id: "student",
      name: "Student",
      price: "$49",
      period: "per year",
      description: "For students and academic researchers",
      priceId: process.env.NEXT_PUBLIC_STRIPE_STUDENT_PRICE_ID,
      features: [
        "Access to all technical resources",
        "Community forum access",
        "Monthly webinars",
        "Student networking events",
        "Academic research collaboration",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      price: "$199",
      period: "per year",
      description: "For individual professionals",
      priceId: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PRICE_ID,
      features: [
        "Access to all technical resources",
        "Community forum access",
        "Monthly webinars",
        "Implementation guides",
        "Case studies library",
        "Vendor selection tools",
        "Professional networking events",
      ],
    },
    {
      id: "corporate",
      name: "Corporate",
      price: "$999",
      period: "per year",
      description: "For organizations and teams",
      priceId: process.env.NEXT_PUBLIC_STRIPE_CORPORATE_PRICE_ID,
      features: [
        "Access to all technical resources",
        "Community forum access",
        "Monthly webinars",
        "Implementation guides",
        "Case studies library",
        "Vendor selection tools",
        "Corporate networking events",
        "Priority support",
        "Custom research requests",
        "Team collaboration tools",
        "Vendor showcase opportunities",
      ],
    },
  ]

  const currentTier = profile?.membership_tier || "public"
  const isCurrentTierActive = profile?.membership_status?.toLowerCase() === "active"

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">RTLS Alliance Membership</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our community of RTLS professionals and gain access to exclusive resources, expert insights, and
          networking opportunities.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {user && profile && currentTier !== "public" && isCurrentTierActive && (
            <div className="mb-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-center">Your Current Membership</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="mb-2 bg-blue-500">
                    {currentTier.charAt(0).toUpperCase() + currentTier.slice(1)}
                  </Badge>
                  <p className="text-gray-700">
                    You currently have an active {currentTier} membership
                    {profile.membership_expiry && (
                      <span> until {new Date(profile.membership_expiry).toLocaleDateString()}</span>
                    )}
                    .
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Link href="/account">
                    <Button variant="outline">Manage Your Account</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          )}

          <Tabs defaultValue={selectedTier} onValueChange={setSelectedTier} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
            </TabsList>

            {membershipTiers.map((tier) => (
              <TabsContent key={tier.id} value={tier.id} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-gray-500 ml-2">{tier.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {user && profile && currentTier === tier.id && isCurrentTierActive ? (
                      <Button className="w-full" disabled>
                        Current Plan
                      </Button>
                    ) : (
                      <Button className="w-full" onClick={() => handleCheckout(tier.priceId!, tier.id)}>
                        {user ? "Subscribe Now" : "Sign In to Subscribe"}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Membership FAQ</h2>
            <div className="max-w-3xl mx-auto text-left space-y-6">
              <div>
                <h3 className="font-bold text-lg">What's included in the membership?</h3>
                <p className="text-gray-600">
                  Depending on your membership tier, you'll get access to technical resources, implementation guides,
                  case studies, networking events, and more. Each tier offers different levels of access and benefits.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">How do I upgrade my membership?</h3>
                <p className="text-gray-600">
                  You can upgrade your membership at any time by selecting a higher tier on this page and completing the
                  checkout process. Your new benefits will be available immediately.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Can I cancel my membership?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your membership at any time from your account page. Your benefits will remain
                  active until the end of your current billing period.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

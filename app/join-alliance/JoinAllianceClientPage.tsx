"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChartIcon as ChartBar, Globe, Award, Building, Zap, Users } from "lucide-react"
import EmailSignupForm from "@/components/auth/email-signup-form"
import { createSupabaseClient } from "@/lib/supabase-auth"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GoogleSignInButton, LinkedInSignInButton } from "@/components/auth/auth-buttons"
import PageSEO from "@/components/seo/page-seo"

export default function JoinAllianceClientPage() {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/"

  // Check if user is signed in
  useEffect(() => {
    const checkUser = async () => {
      const supabase = createSupabaseClient()
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }

    checkUser()
  }, [])

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/auth?tab=signup&redirectTo=${encodeURIComponent(redirectTo)}`)
    }
  }, [router, redirectTo, loading, user])

  if (!loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <main className="bg-white pb-16">
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <PageSEO
          title="Join the RTLS Alliance | RTLS Alliance"
          description="Create an account to join the RTLS Alliance and access exclusive resources and member benefits."
          canonicalUrl="/join-alliance"
          noIndex={true}
        />

        <Link
          href="/"
          className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Join the RTLS Alliance</CardTitle>
            <CardDescription>Create an account to access exclusive resources</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="oauth" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="oauth">OAuth</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
              </TabsList>
              <TabsContent value="oauth" className="space-y-4">
                <GoogleSignInButton />
                <LinkedInSignInButton />
              </TabsContent>
              <TabsContent value="email">
                <EmailSignupForm />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why RTLS Matters Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why RTLS Matters
              </h2>
              <p className="text-center text-gray-600 mb-8 italic">
                The future of location intelligence is happening now
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 - Explosive Growth */}
                <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-3">
                      <ChartBar className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900">Explosive Growth</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        $11.7B
                      </div>
                      <div className="text-gray-700">Global RTLS market in 2024 (Technavio)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        42.4%
                      </div>
                      <div className="text-gray-700">Annual growth rate, outpacing most tech sectors</div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Industry Giants */}
                <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-3">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900">Industry Giants</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        3B+ Devices
                      </div>
                      <div className="text-gray-700">
                        Apple & Google standardized UWB across Android and iOS (IETF, 2023)
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        Samsung
                      </div>
                      <div className="text-gray-700">Embedded RTLS in SmartThings ecosystem for 200M+ users</div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Venture Capital (moved from Global Adoption) */}
                <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-3">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900">Venture Capital</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        $4.3B
                      </div>
                      <div className="text-gray-700">Invested in RTLS startups since 2020</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        85%
                      </div>
                      <div className="text-gray-700">Of Fortune 500 companies implementing RTLS by 2025</div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Standards Evolution */}
                <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-3">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900">Standards Evolution</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-lg font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        FiRa Consortium
                      </div>
                      <div className="text-gray-700">100+ member companies standardizing UWB technology</div>
                    </div>
                    <div>
                      <div className="text-lg font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        IEEE 802.15.4z
                      </div>
                      <div className="text-gray-700">Enhanced UWB standard ratified in 2020</div>
                    </div>
                  </div>
                </div>

                {/* Card 5 - Technology Convergence */}
                <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-3">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900">Tech Convergence</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        Digital Twins
                      </div>
                      <div className="text-gray-700">RTLS enabling $48B digital twin market by 2026</div>
                    </div>
                    <div>
                      <div className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        Metaverse
                      </div>
                      <div className="text-gray-700">Critical infrastructure for spatial computing</div>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Career Opportunity */}
                <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md border border-gradient-to-r from-blue-600 to-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-3">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-xl text-gray-900">Career Opportunity</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        137%
                      </div>
                      <div className="text-gray-700">Increase in RTLS job postings since 2021</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                        $125K
                      </div>
                      <div className="text-gray-700">Average salary for RTLS specialists in North America</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What benefits do I get from joining the RTLS Alliance?
                  </AccordionTrigger>
                  <AccordionContent>
                    Members gain access to exclusive resources, industry research, networking opportunities with RTLS
                    experts, discounted certification programs, and early access to emerging technologies and best
                    practices in the field.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How much does membership cost?</AccordionTrigger>
                  <AccordionContent>
                    We offer tiered membership options: Student ($100/year), Professional ($550/year), and Vendor
                    ($7,500/year). Each tier provides different levels of access and benefits tailored to your needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Is the RTLS Alliance vendor-neutral?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the RTLS Alliance is completely vendor-neutral. We provide unbiased information and resources
                    about all RTLS technologies and vendors to help members make informed decisions based on their
                    specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">How can I contribute to the RTLS community?</AccordionTrigger>
                  <AccordionContent>
                    Members can contribute by sharing case studies, participating in research initiatives, speaking at
                    events, joining working groups, and collaborating on industry standards development. We welcome all
                    levels of expertise and perspectives.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">What industries use RTLS technology?</AccordionTrigger>
                  <AccordionContent>
                    RTLS is used across numerous industries including healthcare, manufacturing, logistics, retail,
                    hospitality, construction, and more. Any organization that needs to track assets, people, or
                    inventory in real-time can benefit from RTLS solutions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

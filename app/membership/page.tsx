"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import AuthButtons from "@/components/auth/auth-buttons"
import { useRouter } from "next/navigation"

export default function MembershipPage() {
  const router = useRouter()

  const handleEmailSignup = () => {
    router.push("/join-alliance")
  }

  return (
    <main className="bg-white pb-16">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the $17B+ RTLS Revolution</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Become part of a global community driving the adoption of real-time location systems. Access knowledge, gain
            visibility, and connect with leaders shaping the future of location intelligence.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Tier */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Student</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-blue-600">$100</span>
                  <span className="text-gray-600 ml-1">/yr</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">For individuals currently enrolled in academic programs.</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Resource Library Access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Monthly Newsletter</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Community Forum Access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">RTLS Certification Discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Webinar Library (Limited)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Job Board Access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Student Network Access</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="/join-alliance?tier=student">
                  <Button className="w-full">Select Student Plan</Button>
                </Link>
              </div>
            </div>

            {/* Professional Tier */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Professional</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-blue-600">$550</span>
                  <span className="text-gray-600 ml-1">/yr</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">For individual practitioners, consultants, and end-users.</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">All Student Benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Full Webinar Library</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Premium Resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Working Group Access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Directory Profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Event Discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Networking Events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Expert Q&A Access</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="/join-alliance?tier=professional">
                  <Button className="w-full">Select Professional Plan</Button>
                </Link>
              </div>
            </div>

            {/* Vendor Tier */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Vendor</h2>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-blue-600">$3,500</span>
                  <span className="text-gray-600 ml-1">/yr</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  For companies providing RTLS hardware, software, or services.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">All Professional Benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Company Profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Co-marketing Opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Strategic Roundtables</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Advance Listing Rights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Lead Generation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Speaking Corners</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Partner Marketplace Access</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="/join-alliance?tier=vendor">
                  <Button className="w-full">Select Vendor Plan</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Persona-Based Benefits</h2>
          <p className="text-center text-gray-700 mb-8">Compare benefits across different membership tiers</p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Features</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">Student</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">Professional</th>
                  <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Resource Library</td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Webinar Library</td>
                  <td className="py-3 px-4 border-b text-center text-gray-500">Limited</td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Community Forum Access</td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Member Directory Access</td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Job Board Access</td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Working Groups</td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Directory Profile</td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Marketplace Profile</td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Lead Generation</td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700">Strategic Roundtables</td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contributor Paths */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contributor Paths</h2>
          <p className="text-center text-gray-700 mb-8">Share your expertise and help shape the RTLS ecosystem!</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Publish Articles</h3>
              <p className="text-gray-700 text-sm">Share blog posts and case studies</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Speak at Events</h3>
              <p className="text-gray-700 text-sm">Present insights at webinars & summits</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Listed</h3>
              <p className="text-gray-700 text-sm">Appear in the Marketplace directory</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Co-Author Content</h3>
              <p className="text-gray-700 text-sm">Collaborate on whitepapers & reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign up securely with one click</h2>

          <div className="max-w-md mx-auto">
            <AuthButtons redirectTo="/join-alliance" onEmailClick={handleEmailSignup} />

            <p className="text-xs text-gray-500 mt-4">
              We never sell or share your personal info. All account protections are updated regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join?</h2>
          <p className="text-gray-700 mb-8">
            Start by expressing your interest. We'll guide you through selecting the right plan.
          </p>

          <div className="w-full bg-blue-600 h-2 rounded-full max-w-md mx-auto mb-8">
            <div className="bg-blue-300 h-2 rounded-full" style={{ width: "25%" }}></div>
          </div>
        </div>
      </section>
    </main>
  )
}

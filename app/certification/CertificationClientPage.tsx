"use client"

import { Button } from "@/components/ui/button"
import { Check, Users, Building, Lightbulb, Clock } from "lucide-react"

export default function CertificationPage() {
  return (
    <main className="bg-white pb-16">
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">RTLS Alliance Certification Program</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Validate your expertise and accelerate your career with industry-recognized RTLS certifications
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-yellow-500 text-yellow-900 rounded-md">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">Coming Soon - Join our waitlist for early access</span>
          </div>
        </div>
      </section>

      {/* Who Should Take These Courses */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Should Take These Courses?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Professionals</h3>
              </div>
              <p className="text-gray-700">
                Engineers, technicians, and professionals looking to work with RTLS technologies
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Organizations</h3>
              </div>
              <p className="text-gray-700">
                Companies implementing or assessing their RTLS needs seeking to upskill their teams
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Consultants</h3>
              </div>
              <p className="text-gray-700">
                Independent consultants and advisors working with clients on RTLS projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certified RTLS Professional */}
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Certified RTLS Professional</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Essential knowledge and practical implementation expertise for RTLS technologies
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">RTLS Technology Fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Implementation best practices</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">System integration basics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Project planning essentials</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Recognition as certified RTLS professional</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Access to exclusive resources</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry experts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Listed in Alliance directory</span>
                    </li>
                  </ul>
                </div>

                <div className="text-gray-700 mb-4">
                  <p>Duration: 4 hours online</p>
                  <p>Price: $399</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button className="w-full" variant="outline" disabled>
                  <Clock className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
                <p className="text-sm text-gray-500 mt-2 text-center">Join our waitlist for early access</p>
              </div>
            </div>

            {/* Certified RTLS Expert */}
            <div className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Certified RTLS Expert</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Advanced mastery in RTLS architecture and enterprise implementation
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Advanced system architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Enterprise integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Strategic planning</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Recognition as RTLS expert</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Consulting opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Speaking engagements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Advisory board eligibility</span>
                    </li>
                  </ul>
                </div>

                <div className="text-gray-700 mb-4">
                  <p>Duration: 16 hours online</p>
                  <p>Price: $1,299</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button className="w-full" variant="outline" disabled>
                  <Clock className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
                <p className="text-sm text-gray-500 mt-2 text-center">Join our waitlist for early access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Path */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certification Path</h2>

          <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg bg-white">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Application</h3>
                  <p className="text-gray-700">Submit your application with relevant experience and background</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Course Access</h3>
                  <p className="text-gray-700">Gain access to online learning materials and resources</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Online Training</h3>
                  <p className="text-gray-700">Complete the online training program</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Assessment</h3>
                  <p className="text-gray-700">Pass the certification exam</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Certification</h3>
                  <p className="text-gray-700">Receive your official RTLS Alliance certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Our Certification Program?</h2>
          <p className="text-xl mb-8">Join our waitlist to be notified when certifications become available</p>
          <Button className="bg-white text-blue-700 hover:bg-blue-50">
            <Clock className="mr-2 h-4 w-4" />
            Join Waitlist
          </Button>
        </div>
      </section>
    </main>
  )
}

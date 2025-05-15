"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import AuthButtons from "@/components/auth/auth-buttons"
import EmailSignupForm from "@/components/auth/email-signup-form"

export default function JoinAlliancePage() {
  const searchParams = useSearchParams()
  const tier = searchParams.get("tier") || "professional"
  const stepParam = searchParams.get("step")

  const [step, setStep] = useState(stepParam ? Number.parseInt(stepParam) : 1)
  const [selectedTier, setSelectedTier] = useState(tier)
  const [showEmailForm, setShowEmailForm] = useState(false)

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <main className="bg-white pb-16">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the RTLS Alliance</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Complete the form below to become a member of our growing community
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Sign in with social options */}
            <div className="mb-8 bg-white p-8 rounded-lg border border-gray-200">
              {showEmailForm ? (
                <EmailSignupForm
                  onBack={() => setShowEmailForm(false)}
                  redirectTo="/join-alliance"
                  tier={selectedTier}
                />
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign up securely with one click</h2>
                  <AuthButtons
                    tier={selectedTier}
                    redirectTo="/join-alliance"
                    onEmailSignup={() => setShowEmailForm(true)}
                  />
                </>
              )}
            </div>

            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-blue-600 bg-blue-50" : "border-gray-300"} mb-2`}
                  >
                    1
                  </div>
                  <span className="text-sm">Membership</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-blue-600 bg-blue-50" : "border-gray-300"} mb-2`}
                  >
                    2
                  </div>
                  <span className="text-sm">Profile</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-blue-600" : "bg-gray-300"}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-blue-600 bg-blue-50" : "border-gray-300"} mb-2`}
                  >
                    3
                  </div>
                  <span className="text-sm">Payment</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 4 ? "bg-blue-600" : "bg-gray-300"}`}></div>
                <div className={`flex flex-col items-center ${step >= 4 ? "text-blue-600" : "text-gray-400"}`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 4 ? "border-blue-600 bg-blue-50" : "border-gray-300"} mb-2`}
                  >
                    4
                  </div>
                  <span className="text-sm">Confirmation</span>
                </div>
              </div>
            </div>

            {/* Step 1: Membership Selection */}
            {step === 1 && (
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Membership</h2>

                <RadioGroup value={selectedTier} onValueChange={setSelectedTier} className="space-y-6">
                  <div
                    className={`flex items-start p-4 rounded-lg border-2 ${selectedTier === "student" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                  >
                    <RadioGroupItem value="student" id="student" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="student" className="text-lg font-bold text-gray-900 block mb-1">
                        Student
                      </Label>
                      <div className="flex items-baseline mb-2">
                        <span className="text-2xl font-bold text-blue-600">$100</span>
                        <span className="text-gray-600 ml-1">/yr</span>
                      </div>
                      <p className="text-gray-700">For individuals currently enrolled in academic programs.</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start p-4 rounded-lg border-2 ${selectedTier === "professional" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                  >
                    <RadioGroupItem value="professional" id="professional" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="professional" className="text-lg font-bold text-gray-900 block mb-1">
                        Professional
                      </Label>
                      <div className="flex items-baseline mb-2">
                        <span className="text-2xl font-bold text-blue-600">$550</span>
                        <span className="text-gray-600 ml-1">/yr</span>
                      </div>
                      <p className="text-gray-700">For individual practitioners, consultants, and end-users.</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-start p-4 rounded-lg border-2 ${selectedTier === "vendor" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                  >
                    <RadioGroupItem value="vendor" id="vendor" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="vendor" className="text-lg font-bold text-gray-900 block mb-1">
                        Vendor
                      </Label>
                      <div className="flex items-baseline mb-2">
                        <span className="text-2xl font-bold text-blue-600">$3,500</span>
                        <span className="text-gray-600 ml-1">/yr</span>
                      </div>
                      <p className="text-gray-700">For companies providing RTLS hardware, software, or services.</p>
                    </div>
                  </div>
                </RadioGroup>

                <div className="mt-8 flex justify-end">
                  <Button onClick={nextStep}>Continue</Button>
                </div>
              </div>
            )}

            {/* Step 2: Profile Information */}
            {step === 2 && (
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Profile Information</h2>

                <div className="space-y-6">
                  {selectedTier === "vendor" ? (
                    <>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <Input id="company" placeholder="Your company name" />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                            Contact Name
                          </label>
                          <Input id="contactName" placeholder="Primary contact person" />
                        </div>

                        <div>
                          <label htmlFor="contactTitle" className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title
                          </label>
                          <Input id="contactTitle" placeholder="Your position" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Website
                        </label>
                        <Input id="companyWebsite" placeholder="https://example.com" />
                      </div>

                      <div>
                        <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Description
                        </label>
                        <Textarea
                          id="companyDescription"
                          placeholder="Brief description of your company and RTLS offerings"
                          className="min-h-[100px]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <Input id="firstName" placeholder="Your first name" />
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <Input id="lastName" placeholder="Your last name" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                          Job Title
                        </label>
                        <Input id="jobTitle" placeholder="Your position" />
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                          Organization
                        </label>
                        <Input id="organization" placeholder="Your company or institution" />
                      </div>

                      {selectedTier === "student" && (
                        <div>
                          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                            Educational Institution
                          </label>
                          <Input id="institution" placeholder="Your school or university" />
                        </div>
                      )}
                    </>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <Input id="location" placeholder="City, Country" />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button onClick={nextStep}>Continue</Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Information */}
            {step === 3 && (
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">
                      {selectedTier === "student"
                        ? "Student Membership"
                        : selectedTier === "professional"
                          ? "Professional Membership"
                          : "Vendor Membership"}
                    </span>
                    <span className="font-semibold">
                      {selectedTier === "student"
                        ? "$100.00"
                        : selectedTier === "professional"
                          ? "$550.00"
                          : "$3,500.00"}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Tax</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">
                        {selectedTier === "student"
                          ? "$100.00"
                          : selectedTier === "professional"
                            ? "$550.00"
                            : "$3,500.00"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>

                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration Date
                      </label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>

                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button onClick={nextStep}>Complete Payment</Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to RTLS Alliance!</h2>

                <p className="text-gray-700 mb-6">
                  Your {selectedTier} membership has been successfully activated. You now have access to all the
                  benefits of your membership tier.
                </p>

                <div className="space-y-4">
                  <Link href="/resources">
                    <Button className="w-full">Explore Resources</Button>
                  </Link>

                  <Link href="/ecosystem">
                    <Button variant="outline" className="w-full">
                      Connect with the Community
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

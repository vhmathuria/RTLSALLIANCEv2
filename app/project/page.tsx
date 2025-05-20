"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Shield, Compass, Lightbulb, Map } from "lucide-react"
import ContactForm from "@/app/contact/contact-form"

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your RTLS Journey Deserves Community Support</h1>
            <p className="text-xl text-blue-100 mb-8">
              The RTLS Alliance is a non-profit community of experts and vendors committed to providing unbiased
              guidance and resources throughout your real-time location system journey.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl transform transition-all hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById("contact-section")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Connect With Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The RTLS Alliance Community</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Vendor Neutrality</h3>
                  <p className="text-gray-700">
                    As a non-profit community, we maintain strict neutrality. Our guidance is based on what's genuinely
                    best for your specific needs and context.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Collective Expertise</h3>
                  <p className="text-gray-700">
                    Our community brings together diverse perspectives from practitioners, researchers, and vendors
                    across healthcare, manufacturing, logistics, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Knowledge Sharing</h3>
                  <p className="text-gray-700">
                    We believe in open exchange of information and best practices to advance the entire RTLS field and
                    help organizations make informed decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Supporting Your RTLS Journey</h2>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600 flex-shrink-0">
                  <Compass className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery Phase</h3>
                  <p className="text-gray-700">
                    Access our comprehensive knowledge base, technology comparisons, and use case libraries to
                    understand how RTLS can address your specific challenges. Our community forums provide spaces to ask
                    questions and learn from others' experiences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600 flex-shrink-0">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design Phase</h3>
                  <p className="text-gray-700">
                    Explore our design guides, technology selection frameworks, and implementation checklists. Connect
                    with community members who have tackled similar projects and learn from their insights and
                    experiences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-blue-100 rounded-full p-3 text-blue-600 flex-shrink-0">
                  <Map className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Deployment Phase</h3>
                  <p className="text-gray-700">
                    Reference our deployment best practices, troubleshooting guides, and ROI measurement frameworks.
                    Share your experiences with the community to help others and contribute to the collective knowledge
                    of the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Community Voices</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    "The RTLS Alliance community provided invaluable guidance during our technology selection process.
                    The vendor-neutral resources helped us understand the true capabilities and limitations of different
                    approaches, leading to a much more informed decision."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <p className="font-bold">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Operations Director, Manufacturing Sector</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    "As a healthcare technology manager, I appreciated the Alliance's educational resources that helped
                    me communicate RTLS benefits to clinical stakeholders. Their implementation guides saved us from
                    common pitfalls and accelerated our learning curve."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <p className="font-bold">Michael Chen</p>
                      <p className="text-sm text-gray-600">Technology Manager, Healthcare Provider</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RTLS Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The RTLS Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-600 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    1
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Exploration & Education</h3>
                    <p className="text-gray-700">
                      Understand RTLS technologies, use cases, and potential benefits for your specific context through
                      our educational resources.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    2
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold mb-2">Requirements Definition</h3>
                    <p className="text-gray-700">
                      Clarify your needs, constraints, and success criteria using our frameworks and community insights.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    3
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Technology Evaluation</h3>
                    <p className="text-gray-700">
                      Compare options with our vendor-neutral technology assessments and connect with community members
                      who've implemented similar solutions.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    4
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold mb-2">Implementation Planning</h3>
                    <p className="text-gray-700">
                      Develop your roadmap using our best practices guides and lessons learned from the community.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    5
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                    <p className="text-gray-700">
                      Share your experiences, learn from others, and stay updated on emerging trends and technologies
                      through our community.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community of RTLS Practitioners</h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with fellow professionals, access our knowledge resources, and contribute to advancing the field
              of real-time location systems.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl transform transition-all hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById("contact-section")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Reach Out to Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Tell Us About Your RTLS Journey</h2>
            <p className="text-center text-gray-700 mb-12">
              Share your questions, challenges, or project details with our community. We're here to connect you with
              the right resources and knowledge to support your RTLS initiatives.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

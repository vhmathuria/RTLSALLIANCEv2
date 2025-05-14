import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us - RTLS Alliance",
  description: "Get in touch with the RTLS Alliance team for questions, partnerships, or support.",
}

export default function ContactPage() {
  return (
    <main className="bg-white pb-16">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about RTLS Alliance? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-700">info@rtlsalliance.org</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-700">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-700">
                          123 Tech Plaza
                          <br />
                          Suite 400
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input id="name" placeholder="John Doe" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                    </div>

                    <div>
                      <Button type="submit" className="w-full md:w-auto">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I become a member of RTLS Alliance?</h3>
                <p className="text-gray-700">
                  You can join RTLS Alliance by visiting our Membership page and selecting the appropriate membership
                  tier for your needs. We offer Student, Professional, and Vendor membership options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What resources are available to members?</h3>
                <p className="text-gray-700">
                  Members have access to our resource library, webinars, case studies, community forums, and networking
                  events. The specific resources available depend on your membership tier.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How can I get RTLS certified?</h3>
                <p className="text-gray-700">
                  RTLS Alliance offers certification programs for professionals working with RTLS technologies. Visit
                  our Certification page to learn about our Certified RTLS Professional and Certified RTLS Expert
                  programs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can I list my company in the RTLS Alliance directory?
                </h3>
                <p className="text-gray-700">
                  Yes, vendor members are listed in our directory. Join as a Vendor member to showcase your company to
                  the RTLS community and potential customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

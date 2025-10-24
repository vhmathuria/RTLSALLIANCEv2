"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { submitContactForm } from "@/lib/contact-actions"

const initialState = {
  message: "",
  success: false,
}

export default function ContactPage() {
  const [state, setState] = useState(initialState)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    console.log("[v0] Contact form handleSubmit called")
    startTransition(async () => {
      console.log("[v0] Calling submitContactForm...")
      const result = await submitContactForm(state, formData)
      console.log("[v0] submitContactForm result:", result)
      setState(result)
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about RTLS Alliance or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-gray-600">
                        Neue Schönhauserstr. 3-5
                        <br />
                        10178 Berlin, Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-600">hello@rtlsalliance.org</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-gray-600">+49 156 79663671</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Office Hours</h3>
              <p className="text-sm text-gray-600 mb-4">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM CET
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                {state.success && (
                  <div className="bg-green-50 p-4 rounded-md flex items-start mb-6">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-green-700 font-medium">Thank you for your message!</p>
                      <p className="text-green-600 text-sm mt-1">We'll get back to you shortly.</p>
                    </div>
                  </div>
                )}

                {!state.success && state.message && (
                  <div className="bg-red-50 p-4 rounded-md flex items-start mb-6">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-700 font-medium">Error sending message</p>
                      <p className="text-red-600 text-sm mt-1">{state.message}</p>
                    </div>
                  </div>
                )}

                {!state.success && (
                  <form action={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required disabled={isPending} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required disabled={isPending} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" required disabled={isPending} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" rows={5} required disabled={isPending} />
                    </div>

                    <Button type="submit" className="w-full" disabled={isPending}>
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

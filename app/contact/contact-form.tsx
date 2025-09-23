"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/lib/contact-actions"
import { CheckCircle, AlertCircle } from "lucide-react"

const initialState = {
  message: "",
  success: false,
}

export default function ContactForm() {
  const [state, setState] = useState(initialState)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(state, formData)
      setState(result)
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

      {state.success ? (
        <div className="mb-6 p-6 rounded-lg bg-green-50 border border-green-200">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
            <p className="text-green-700">
              We've received your message and appreciate you reaching out to us. Our team will review your inquiry and
              get back to you as soon as possible.
            </p>
          </div>
        </div>
      ) : state.message ? (
        <div className="mb-6 p-4 rounded-md bg-red-50 text-red-800">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
            <p>{state.message}</p>
          </div>
        </div>
      ) : null}

      {!state.success && (
        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}

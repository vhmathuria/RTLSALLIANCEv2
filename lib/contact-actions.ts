"use server"

import { createServiceRoleClient } from "@/lib/supabase/server"

export async function submitContactForm(prevState: any, formData: FormData) {
  console.log("[v0] Contact form submission started")

  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    console.log("[v0] Form data extracted:", { name, email, subject, messageLength: message?.length })

    // Validate form data
    if (!name || !email || !subject || !message) {
      console.log("[v0] Validation failed: missing fields")
      return { success: false, message: "All fields are required" }
    }

    const supabase = createServiceRoleClient()
    console.log("[v0] Supabase service role client created")

    const { data, error } = await supabase.from("contact_messages").insert([{ name, email, subject, message }]).select()

    console.log("[v0] Insert result:", { data, error })

    if (error) {
      console.error("[v0] Error submitting contact form:", error)
      return { success: false, message: `Failed to submit your message: ${error.message}` }
    }

    console.log("[v0] Contact form submitted successfully")
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("[v0] Error in submitContactForm:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

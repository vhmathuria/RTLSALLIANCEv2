"use server"

import { createClient } from "@/lib/supabase-server"

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return { success: false, message: "All fields are required" }
    }

    // Create Supabase client
    const supabase = createClient()

    // Insert data into contact_messages table
    const { error } = await supabase.from("contact_messages").insert([{ name, email, subject, message }])

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, message: "Failed to submit your message. Please try again." }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

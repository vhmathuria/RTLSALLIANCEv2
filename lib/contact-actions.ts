"use server"

import { createServiceRoleClient } from "@/lib/supabase/server"

// Input sanitization helper
function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000) // Limit length to prevent abuse
}

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function submitContactForm(prevState: any, formData: FormData) {
  console.log("[v0] Contact form submission started")

  try {
    // Extract and sanitize form data
    const name = sanitizeInput(formData.get("name") as string)
    const email = sanitizeInput(formData.get("email") as string)
    const subject = sanitizeInput(formData.get("subject") as string)
    const message = sanitizeInput(formData.get("message") as string)

    console.log("[v0] Form data extracted and sanitized:", {
      name,
      email,
      subject,
      messageLength: message?.length,
    })

    // Validate form data
    if (!name || !email || !subject || !message) {
      console.log("[v0] Validation failed: missing fields")
      return { success: false, message: "All fields are required" }
    }

    // Validate email format
    if (!isValidEmail(email)) {
      console.log("[v0] Validation failed: invalid email format")
      return { success: false, message: "Please enter a valid email address" }
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      return { success: false, message: "Name must be between 2 and 100 characters" }
    }

    if (subject.length < 3 || subject.length > 200) {
      return { success: false, message: "Subject must be between 3 and 200 characters" }
    }

    if (message.length < 10 || message.length > 5000) {
      return { success: false, message: "Message must be between 10 and 5000 characters" }
    }

    console.log("[v0] All validations passed, creating Supabase client")

    // Create service role client to bypass RLS for public form submission
    const supabase = createServiceRoleClient()

    // Test if the client is actually working by checking if it's a dummy client
    const testQuery = await supabase.from("contact_messages").select("id").limit(1)
    if (testQuery.error && testQuery.error.message === "Supabase not configured") {
      console.error("[v0] Supabase is not properly configured - using dummy client")
      return {
        success: false,
        message: "Database connection error. Please contact us directly at support@rtlsalliance.org",
      }
    }

    console.log("[v0] Attempting to insert into contact_messages table")

    // Insert the contact message
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ])
      .select()

    console.log("[v0] Insert result:", {
      success: !!data,
      hasError: !!error,
      errorMessage: error?.message,
      errorDetails: error?.details,
      errorHint: error?.hint,
      dataCount: data?.length,
    })

    if (error) {
      console.error("[v0] Database error submitting contact form:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      })
      return {
        success: false,
        message: "Failed to submit your message. Please try again or contact us directly via email.",
      }
    }

    if (!data || data.length === 0) {
      console.error("[v0] No data returned from insert operation")
      return {
        success: false,
        message: "Failed to submit your message. Please try again.",
      }
    }

    console.log("[v0] Contact form submitted successfully, message ID:", data[0]?.id)
    return {
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] Unexpected error in submitContactForm:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

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
  console.log("[v0] ========================================")
  console.log("[v0] CONTACT FORM SUBMISSION STARTED")
  console.log("[v0] ========================================")
  console.log("[v0] Timestamp:", new Date().toISOString())

  try {
    // Extract and sanitize form data
    const name = sanitizeInput(formData.get("name") as string)
    const email = sanitizeInput(formData.get("email") as string)
    const subject = sanitizeInput(formData.get("subject") as string)
    const message = sanitizeInput(formData.get("message") as string)

    console.log("[v0] Form data extracted:")
    console.log("[v0]   Name:", name)
    console.log("[v0]   Email:", email)
    console.log("[v0]   Subject:", subject)
    console.log("[v0]   Message length:", message?.length)

    // Validate form data
    if (!name || !email || !subject || !message) {
      console.log("[v0] ❌ Validation failed: missing fields")
      return { success: false, message: "All fields are required" }
    }

    // Validate email format
    if (!isValidEmail(email)) {
      console.log("[v0] ❌ Validation failed: invalid email format")
      return { success: false, message: "Please enter a valid email address" }
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      console.log("[v0] ❌ Validation failed: name length")
      return { success: false, message: "Name must be between 2 and 100 characters" }
    }

    if (subject.length < 3 || subject.length > 200) {
      console.log("[v0] ❌ Validation failed: subject length")
      return { success: false, message: "Subject must be between 3 and 200 characters" }
    }

    if (message.length < 10 || message.length > 5000) {
      console.log("[v0] ❌ Validation failed: message length")
      return { success: false, message: "Message must be between 10 and 5000 characters" }
    }

    console.log("[v0] ✅ All validations passed")
    console.log("[v0] Creating Supabase service role client...")

    // Create service role client to bypass RLS for public form submission
    const supabase = createServiceRoleClient()

    console.log("[v0] Service role client created")
    console.log("[v0] Testing client connection...")

    // Test the client by checking if we can query the table
    const { data: testData, error: testError } = await supabase.from("contact_messages").select("id").limit(1)

    if (testError) {
      console.error("[v0] ❌ Client test failed - cannot query table:", testError)
    } else {
      console.log("[v0] ✅ Client test passed - can query table")
    }

    console.log("[v0] Preparing insert data:")
    const insertData = {
      name,
      email,
      subject,
      message,
    }
    console.log("[v0] Insert data:", JSON.stringify(insertData, null, 2))

    console.log("[v0] Executing INSERT operation...")

    // Insert the contact message
    const { data, error } = await supabase.from("contact_messages").insert([insertData]).select()

    console.log("[v0] ========================================")
    console.log("[v0] INSERT OPERATION COMPLETED")
    console.log("[v0] ========================================")
    console.log("[v0] Data returned:", data ? JSON.stringify(data, null, 2) : "null")
    console.log("[v0] Error:", error ? JSON.stringify(error, null, 2) : "none")

    if (error) {
      console.error("[v0] ❌ DATABASE ERROR:")
      console.error("[v0]   Message:", error.message)
      console.error("[v0]   Details:", error.details)
      console.error("[v0]   Hint:", error.hint)
      console.error("[v0]   Code:", error.code)

      if (error.code === "42501" || error.message?.includes("row-level security")) {
        console.error("[v0] ❌ RLS POLICY VIOLATION")
        console.error("[v0] This means the service role key is NOT working correctly")
        console.error("[v0] Check that SUPABASE_SERVICE_ROLE_KEY is set to the SERVICE ROLE key, not the ANON key")
        return {
          success: false,
          message: "Unable to submit message due to security configuration. Please email us at hello@rtlsalliance.org",
        }
      }

      return {
        success: false,
        message: "Failed to submit your message. Please try again or contact us directly via email.",
      }
    }

    if (!data || data.length === 0) {
      console.error("[v0] ❌ No data returned from insert")
      console.error("[v0] This should not happen - the insert may have failed silently")
      return {
        success: false,
        message: "Failed to submit your message. Please try again.",
      }
    }

    console.log("[v0] ✅ SUCCESS!")
    console.log("[v0] Contact message saved with ID:", data[0]?.id)
    console.log("[v0] ========================================")

    return {
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] ========================================")
    console.error("[v0] ❌ UNEXPECTED ERROR")
    console.error("[v0] ========================================")
    console.error("[v0] Error:", error)
    console.error("[v0] Error type:", typeof error)
    console.error("[v0] Error details:", JSON.stringify(error, null, 2))
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later or email us at hello@rtlsalliance.org",
    }
  }
}

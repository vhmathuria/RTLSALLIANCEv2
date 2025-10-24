"use server"

import { createServiceRoleClient } from "@/lib/supabase/server"

export async function subscribeToNewsletter(email: string) {
  console.log("[v0] Newsletter subscription started for email:", email)

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    console.log("[v0] Invalid email format:", email)
    return { success: false, error: "Please enter a valid email address." }
  }

  try {
    const supabase = createServiceRoleClient()
    console.log("[v0] Service role client created for newsletter subscription")

    // Insert into the Newsletter_signup table
    const { data, error } = await supabase
      .from("Newsletter_signup")
      .insert([
        {
          email: email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()

    console.log("[v0] Newsletter insert result:", { data, error })

    if (error) {
      console.error("[v0] Newsletter signup error:", error)
      console.error("[v0] Error details:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      })

      // Check for duplicate email
      if (error.code === "23505" || error.message?.includes("duplicate")) {
        return { success: false, error: "This email is already subscribed to our newsletter." }
      }

      return { success: false, error: `Failed to subscribe: ${error.message}` }
    }

    console.log("[v0] Newsletter subscription successful")
    return { success: true, message: "Thank you for subscribing to our newsletter!" }
  } catch (error) {
    console.error("[v0] Subscription error:", error)
    return { success: false, error: "There was an error subscribing. Please try again." }
  }
}

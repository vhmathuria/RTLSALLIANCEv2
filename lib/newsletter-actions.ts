"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function subscribeToNewsletter(email: string) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Insert into the new Newsletter_signup table
    const { error } = await supabase.from("Newsletter_signup").insert([
      {
        email: email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Newsletter signup error:", error)

      // Check for duplicate email
      if (error.code === "23505" || error.message?.includes("duplicate")) {
        return { success: false, error: "This email is already subscribed to our newsletter." }
      }

      return { success: false, error: "There was an error subscribing. Please try again." }
    }

    return { success: true, message: "Thank you for subscribing to our newsletter!" }
  } catch (error) {
    console.error("Subscription error:", error)
    return { success: false, error: "There was an error subscribing. Please try again." }
  }
}

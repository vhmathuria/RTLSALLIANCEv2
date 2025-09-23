import { createServerClient } from "@/lib/supabase/server"

// Email sending utility
export async function sendWelcomeEmail(email: string, name = "") {
  try {
    const supabase = createServerClient()

    // Use Supabase's built-in email functionality
    const { error } = await supabase.auth.admin.createUser({
      email,
      email_confirm: true,
      user_metadata: { name },
      // This won't create a new user since they already exist,
      // but will trigger a welcome email
    })

    if (error) {
      console.error("Error sending welcome email:", error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error("Exception sending welcome email:", error)
    return { success: false, error }
  }
}

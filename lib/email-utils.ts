import { createClient } from "@supabase/supabase-js"

// Email sending utility
export async function sendWelcomeEmail(email: string, name = "") {
  try {
    // Get Supabase admin client
    const supabaseAdmin = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "")

    // Use Supabase's built-in email functionality
    const { error } = await supabaseAdmin.auth.admin.createUser({
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

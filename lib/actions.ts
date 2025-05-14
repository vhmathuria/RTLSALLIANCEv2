"use server"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Remove the createNewsletterTable function since we're no longer using it
// and it was causing permission errors

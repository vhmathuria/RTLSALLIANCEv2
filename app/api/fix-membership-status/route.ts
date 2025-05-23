import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function POST(req: NextRequest) {
  try {
    const { userId, sessionId } = await req.json()

    if (!userId && !sessionId) {
      return NextResponse.json({ error: "User ID or Session ID required" }, { status: 400 })
    }

    const supabase = createClient()

    // If we have a session ID, verify it with Stripe first
    if (sessionId) {
      // This would require Stripe verification - for now, just update the user
      console.log("Fixing membership for session:", sessionId)
    }

    // Update the user's membership status to active
    const { error } = await supabase
      .from("profiles")
      .update({
        membership_status: "active",
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)

    if (error) {
      console.error("Error fixing membership status:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Membership status fixed" })
  } catch (error: any) {
    console.error("Error in fix-membership-status:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

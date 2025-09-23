import { createClient } from "@/lib/supabase-server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const supabase = await createClient()

    // Update all public tier accounts with INACTIVE status to ACTIVE
    const { data, error } = await supabase
      .from("profiles")
      .update({
        membership_status: "ACTIVE",
        updated_at: new Date().toISOString(),
      })
      .eq("membership_tier", "public")
      .eq("membership_status", "INACTIVE")
      .select("id")

    if (error) {
      console.error("Error updating profiles:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: `Updated ${data?.length || 0} profiles to ACTIVE status`,
      updatedProfiles: data,
    })
  } catch (error: any) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

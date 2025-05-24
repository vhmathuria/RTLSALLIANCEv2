import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Just test environment variables exist
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        error: "Missing environment variables",
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Environment variables found",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({
      error: "Server error",
      details: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Test environment variables
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    return NextResponse.json({
      status: "success",
      environment: process.env.NODE_ENV,
      hasSupabaseUrl: hasUrl,
      hasSupabaseKey: hasKey,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) + "...",
    })
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error: error.message,
    })
  }
}

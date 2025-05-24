import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      },
    )

    // Test a simple query
    const { data, error, status } = await supabase.from("articles").select("count").limit(1)

    if (error) {
      throw error
    }

    // Also test the profiles table
    const { data: profilesData, error: profilesError } = await supabase.from("profiles").select("count").limit(1)

    if (profilesError) {
      return NextResponse.json(
        {
          success: false,
          message: "Database connection successful but profiles table query failed",
          articlesStatus: { status, data },
          profilesError: profilesError.message,
        },
        { status: 207 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      articlesStatus: { status, data },
      profilesStatus: { data: profilesData },
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("Database connection test failed:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error.message,
        details: error.details || "No additional details",
        hint: error.hint || "No hint provided",
        code: error.code || "Unknown error code",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

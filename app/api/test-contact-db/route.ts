import { createServiceRoleClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  console.log("[v0] ========================================")
  console.log("[v0] DATABASE CONNECTION TEST")
  console.log("[v0] ========================================")

  try {
    const supabase = createServiceRoleClient()

    // Test 1: Can we query the table?
    console.log("[v0] Test 1: Querying contact_messages table...")
    const { data: queryData, error: queryError } = await supabase
      .from("contact_messages")
      .select("id, email, created_at")
      .limit(5)

    if (queryError) {
      console.error("[v0] ❌ Query test failed:", queryError)
      return NextResponse.json({
        success: false,
        test: "query",
        error: queryError,
        message: "Cannot query contact_messages table",
      })
    }

    console.log("[v0] ✅ Query test passed. Found", queryData?.length, "messages")

    // Test 2: Can we insert a test message?
    console.log("[v0] Test 2: Inserting test message...")
    const testData = {
      name: "Database Test",
      email: "test@rtlsalliance.org",
      subject: "Connection Test",
      message: "This is an automated test message to verify database connectivity.",
    }

    const { data: insertData, error: insertError } = await supabase.from("contact_messages").insert([testData]).select()

    if (insertError) {
      console.error("[v0] ❌ Insert test failed:", insertError)
      return NextResponse.json({
        success: false,
        test: "insert",
        error: insertError,
        message: "Cannot insert into contact_messages table",
        queryWorked: true,
        existingMessages: queryData?.length || 0,
      })
    }

    console.log("[v0] ✅ Insert test passed. Created message with ID:", insertData?.[0]?.id)

    return NextResponse.json({
      success: true,
      message: "All database tests passed!",
      tests: {
        query: { passed: true, messagesFound: queryData?.length || 0 },
        insert: { passed: true, insertedId: insertData?.[0]?.id },
      },
      recentMessages: queryData,
    })
  } catch (error) {
    console.error("[v0] ❌ Unexpected error:", error)
    return NextResponse.json({
      success: false,
      error: String(error),
      message: "Unexpected error during database test",
    })
  }
}

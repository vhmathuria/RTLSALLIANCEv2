// Debug endpoint that should be removed in production
// DELETE THIS FILE

import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(): Promise<NextResponse> {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set (masked)" : "Not set",
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Set (masked)" : "Not set",
    supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE_KEY ? "Set (masked)" : "Not set",
    tests: {} as Record<string, any>,
  }

  // Test 1: Basic connection
  try {
    const start = Date.now()
    const { data, error } = await supabase.from("staging_articles").select("count(*)").single()
    const duration = Date.now() - start

    diagnostics.tests.basicConnection = {
      success: !error,
      duration: `${duration}ms`,
      error: error ? error.message : null,
      data,
    }
  } catch (err) {
    diagnostics.tests.basicConnection = {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    }
  }

  // Test 2: Get all articles
  try {
    const start = Date.now()
    const { data, error } = await supabase.from("staging_articles").select("slug, title, publish_date")
    const duration = Date.now() - start

    diagnostics.tests.getAllArticles = {
      success: !error,
      duration: `${duration}ms`,
      error: error ? error.message : null,
      count: data?.length || 0,
      firstFew: data?.slice(0, 3) || [],
    }
  } catch (err) {
    diagnostics.tests.getAllArticles = {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    }
  }

  // Test 3: Check table permissions
  try {
    const tables = ["staging_articles", "profiles", "article_templates"]
    const permissionTests = {} as Record<string, any>

    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select("count(*)").single()
        permissionTests[table] = {
          success: !error,
          error: error ? error.message : null,
          count: data?.count,
        }
      } catch (err) {
        permissionTests[table] = {
          success: false,
          error: err instanceof Error ? err.message : String(err),
        }
      }
    }

    diagnostics.tests.tablePermissions = permissionTests
  } catch (err) {
    diagnostics.tests.tablePermissions = {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    }
  }

  return NextResponse.json(diagnostics)
}

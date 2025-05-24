import { NextResponse } from "next/server"
import { getAllArticles } from "@/lib/supabase"
import { supabase } from "@/lib/supabase"

export async function GET() {
  const testResults = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing",
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing",
    tests: {},
  }

  // Test 1: Basic Supabase client connection
  try {
    console.log("🔍 Testing basic Supabase connection...")
    const { data, error } = await supabase.from("staging_articles").select("count", { count: "exact" })

    if (error) {
      testResults.tests.basicConnection = {
        status: "❌ Failed",
        error: error.message,
        details: error,
      }
    } else {
      testResults.tests.basicConnection = {
        status: "✅ Success",
        articleCount: data?.length || 0,
        countResult: data,
      }
    }
  } catch (err) {
    testResults.tests.basicConnection = {
      status: "❌ Exception",
      error: err.message,
      stack: err.stack,
    }
  }

  // Test 2: Test getAllArticles function
  try {
    console.log("🔍 Testing getAllArticles function...")
    const articles = await getAllArticles()

    testResults.tests.getAllArticles = {
      status: "✅ Success",
      articleCount: articles.length,
      sampleTitles: articles.slice(0, 3).map((a) => a.title || a.slug),
      firstArticle: articles[0]
        ? {
            id: articles[0].id,
            title: articles[0].title,
            slug: articles[0].slug,
            content_type: articles[0].content_type,
            publish_date: articles[0].publish_date,
          }
        : null,
    }
  } catch (err) {
    testResults.tests.getAllArticles = {
      status: "❌ Exception",
      error: err.message,
      stack: err.stack,
    }
  }

  // Test 3: Direct table query with different approaches
  try {
    console.log("🔍 Testing direct table queries...")

    // Test with select all
    const { data: allData, error: allError } = await supabase.from("staging_articles").select("*").limit(5)

    // Test with specific columns
    const { data: limitedData, error: limitedError } = await supabase
      .from("staging_articles")
      .select("id, title, slug, content_type, publish_date")
      .limit(3)

    testResults.tests.directQueries = {
      selectAll: {
        status: allError ? "❌ Failed" : "✅ Success",
        error: allError?.message,
        count: allData?.length || 0,
        sample: allData?.[0],
      },
      selectLimited: {
        status: limitedError ? "❌ Failed" : "✅ Success",
        error: limitedError?.message,
        count: limitedData?.length || 0,
        sample: limitedData?.[0],
      },
    }
  } catch (err) {
    testResults.tests.directQueries = {
      status: "❌ Exception",
      error: err.message,
    }
  }

  // Test 4: Test what the sitemap generation would actually do
  try {
    console.log("🔍 Testing sitemap generation logic...")
    const articles = await getAllArticles()

    const resourcePages = articles.map((article) => ({
      url: `https://rtlsalliance.com/resources/${article.slug}`,
      lastmod: article.updated_at || article.publish_date || new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    }))

    testResults.tests.sitemapGeneration = {
      status: "✅ Success",
      articleCount: articles.length,
      resourcePagesCount: resourcePages.length,
      samplePages: resourcePages.slice(0, 3),
    }
  } catch (err) {
    testResults.tests.sitemapGeneration = {
      status: "❌ Exception",
      error: err.message,
      stack: err.stack,
    }
  }

  // Test 5: Check table structure
  try {
    console.log("🔍 Testing table structure...")
    const { data, error } = await supabase.from("staging_articles").select("*").limit(1)

    if (data && data[0]) {
      testResults.tests.tableStructure = {
        status: "✅ Success",
        columns: Object.keys(data[0]),
        sampleRecord: data[0],
      }
    } else {
      testResults.tests.tableStructure = {
        status: "⚠️ No Data",
        error: error?.message || "No articles found",
      }
    }
  } catch (err) {
    testResults.tests.tableStructure = {
      status: "❌ Exception",
      error: err.message,
    }
  }

  console.log("📊 Test Results:", JSON.stringify(testResults, null, 2))

  return NextResponse.json(testResults, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}

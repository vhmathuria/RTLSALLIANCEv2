"use client"

import { useState } from "react"

export default function DebugDB() {
  const [dbResult, setDbResult] = useState<string>("")
  const [apiResult, setApiResult] = useState<string>("")

  const testDatabaseDirect = async () => {
    try {
      setDbResult("Testing database connection...")

      // Test environment variables first
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey) {
        setDbResult("❌ Missing environment variables")
        return
      }

      // Use fetch to test the API route instead of direct DB connection
      const response = await fetch("/api/simple-db-test")
      const text = await response.text()

      setDbResult(`✅ Environment variables OK. API test: ${text}`)
    } catch (error) {
      console.error("Test failed:", error)
      setDbResult(`❌ Failed: ${error}`)
    }
  }

  const testApiRoute = async () => {
    try {
      setApiResult("Testing API route...")
      const response = await fetch("/api/simple-db-test")
      const text = await response.text()
      setApiResult(`✅ ${text}`)
    } catch (error) {
      console.error("API test failed:", error)
      setApiResult(`❌ API Error: ${error}`)
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Database Debug</h1>

      <div className="space-y-4">
        <div>
          <button
            onClick={testDatabaseDirect}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
          >
            Test Environment & API
          </button>
          <div className="mt-2 p-4 bg-gray-100 rounded">
            <strong>Test Result:</strong> {dbResult || "Not tested yet"}
          </div>
        </div>

        <div>
          <button onClick={testApiRoute} className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600">
            Test API Route Directly
          </button>
          <div className="mt-2 p-4 bg-gray-100 rounded">
            <strong>API Test Result:</strong> {apiResult || "Not tested yet"}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h2 className="font-semibold mb-2">Debug Info:</h2>
        <p>• Environment variables should be available in client components with NEXT_PUBLIC_ prefix</p>
        <p>• API routes can access server-side environment variables</p>
        <p>• This page tests both approaches</p>
      </div>
    </div>
  )
}

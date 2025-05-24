"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"

export default function DatabaseDebugPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const testConnection = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/test-db-connection")
      const data = await response.json()

      setResult(data)

      if (!response.ok) {
        setError(`Error ${response.status}: ${data.message || "Unknown error"}`)
      }
    } catch (err: any) {
      setError(`Failed to test connection: ${err.message}`)
      console.error("Connection test error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    testConnection()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Database Connection Diagnostics</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Connection Test</CardTitle>
            <CardDescription>Test the connection to your Supabase database</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Connection Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : result?.success ? (
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-700">Connection Successful</AlertTitle>
                <AlertDescription className="text-green-600">
                  Successfully connected to the database at {result.timestamp}
                </AlertDescription>
              </Alert>
            ) : result ? (
              <Alert variant="default" className="bg-amber-50 border-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <AlertTitle className="text-amber-700">Partial Success</AlertTitle>
                <AlertDescription className="text-amber-600">{result.message}</AlertDescription>
              </Alert>
            ) : null}

            {result && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium mb-2">Response Details:</h3>
                <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={testConnection} disabled={loading}>
              {loading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Test Connection
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
            <CardDescription>Check if your database environment variables are properly set</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">NEXT_PUBLIC_SUPABASE_URL</h3>
                <div className="p-2 bg-gray-100 rounded">
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Set</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <XCircle className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-sm">Not set</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</h3>
                <div className="p-2 bg-gray-100 rounded">
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Set</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <XCircle className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-sm">Not set</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

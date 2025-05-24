"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, RefreshCw, FileText } from "lucide-react"
import Link from "next/link"

export default function SitemapDebugPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const testSitemapGeneration = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/test-sitemap-generation")
      const data = await response.json()

      setResult(data)

      if (!response.ok) {
        setError(`Error ${response.status}: ${data.message || "Unknown error"}`)
      }
    } catch (err: any) {
      setError(`Failed to test sitemap generation: ${err.message}`)
      console.error("Sitemap test error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    testSitemapGeneration()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Sitemap Generation Diagnostics</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sitemap Generation Test</CardTitle>
            <CardDescription>Test the sitemap generation functionality</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Generation Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : result?.success ? (
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-700">Generation Successful</AlertTitle>
                <AlertDescription className="text-green-600">
                  Successfully generated sample sitemap entries at {result.timestamp}
                </AlertDescription>
              </Alert>
            ) : null}

            {result?.success && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Sample Sitemap Entries:</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  {result.sampleEntries.map((entry: any, index: number) => (
                    <div key={index} className="mb-4 p-3 bg-white rounded border border-gray-200">
                      <div className="flex items-center text-blue-600 mb-1">
                        <FileText className="h-4 w-4 mr-2" />
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline"
                        >
                          {entry.url}
                        </a>
                      </div>
                      <div className="text-xs text-gray-500">
                        <div>Last Modified: {entry.lastmod}</div>
                        <div>Change Frequency: {entry.changefreq}</div>
                        <div>Priority: {entry.priority}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium mb-2">Response Details:</h3>
                <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={testSitemapGeneration} disabled={loading}>
              {loading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Test Generation
                </>
              )}
            </Button>

            <Link href="/sitemap.xml" target="_blank">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View Sitemap
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sitemap URLs</CardTitle>
              <CardDescription>Available sitemap endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/sitemap.xml" target="_blank" className="text-blue-600 hover:underline flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    /sitemap.xml
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap-index.xml"
                    target="_blank"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    /sitemap-index.xml
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revalidation</CardTitle>
              <CardDescription>Manually revalidate the sitemap</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                If you've made changes to your content and need to update the sitemap immediately, you can manually
                revalidate it.
              </p>
              <Link href="/api/revalidate-sitemap?token=YOUR_TOKEN" target="_blank">
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Revalidate Sitemap
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-2">
                Note: Replace YOUR_TOKEN with your actual revalidation token.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

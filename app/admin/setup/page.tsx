"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Copy, ExternalLink } from "lucide-react"

export default function SetupPage() {
  const [envStatus, setEnvStatus] = useState({
    supabaseUrl: false,
    supabaseAnonKey: false,
  })

  useEffect(() => {
    // Check environment variables
    setEnvStatus({
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  // Safe example values that don't include actual environment variable syntax
  const supabaseUrlExample = "https://example-project-id.supabase.co"
  const envFileExample =
    "# Add your Supabase URL and anon key here\n# (Remove the # and replace with your actual values)"

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">RTLS Alliance Setup Guide</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Environment Variables Status</CardTitle>
          <CardDescription>Check if your environment variables are properly configured</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              {envStatus.supabaseUrl ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              )}
              <span className="font-medium">Supabase URL:</span>
              <span className="ml-2">{envStatus.supabaseUrl ? "Available" : "Missing"}</span>
            </div>

            <div className="flex items-center">
              {envStatus.supabaseAnonKey ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              )}
              <span className="font-medium">Supabase Anon Key:</span>
              <span className="ml-2">{envStatus.supabaseAnonKey ? "Available" : "Missing"}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="vercel">
        <TabsList className="mb-4">
          <TabsTrigger value="vercel">Vercel Deployment</TabsTrigger>
          <TabsTrigger value="local">Local Development</TabsTrigger>
        </TabsList>

        <TabsContent value="vercel">
          <Card>
            <CardHeader>
              <CardTitle>Setting Up Environment Variables on Vercel</CardTitle>
              <CardDescription>Follow these steps to configure Supabase on your Vercel deployment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">1. Create a Supabase Project</h3>
                <p className="text-gray-600 mb-2">If you haven't already, create a new project on Supabase.</p>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="https://app.supabase.com" target="_blank" rel="noopener noreferrer">
                    Go to Supabase <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">2. Get Your API Keys</h3>
                <p className="text-gray-600 mb-2">
                  In your Supabase project dashboard, go to Project Settings → API and copy the following values:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Project URL (for Supabase URL)</li>
                  <li>anon/public key (for Supabase Anon Key)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">3. Add Environment Variables to Vercel</h3>
                <p className="text-gray-600 mb-2">
                  Go to your Vercel project dashboard, navigate to Settings → Environment Variables, and add:
                </p>

                <div className="space-y-4 mt-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="supabase-url">Supabase URL</Label>
                    <div className="flex">
                      <Input id="supabase-url" placeholder={supabaseUrlExample} readOnly />
                      <Button
                        variant="outline"
                        size="icon"
                        className="ml-2"
                        onClick={() => copyToClipboard("Supabase URL")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="supabase-anon-key">Supabase Anon Key</Label>
                    <div className="flex">
                      <Input id="supabase-anon-key" placeholder="your-anon-key" type="password" readOnly />
                      <Button
                        variant="outline"
                        size="icon"
                        className="ml-2"
                        onClick={() => copyToClipboard("Supabase Anon Key")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">4. Redeploy Your Application</h3>
                <p className="text-gray-600">
                  After adding the environment variables, redeploy your application for the changes to take effect.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">
                  Go to Vercel Dashboard
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="local">
          <Card>
            <CardHeader>
              <CardTitle>Setting Up Environment Variables Locally</CardTitle>
              <CardDescription>Follow these steps to configure Supabase for local development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">1. Create a .env.local File</h3>
                <p className="text-gray-600 mb-2">
                  In your project root directory, create a file named .env.local with your Supabase credentials.
                </p>

                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">{envFileExample}</div>

                <Button
                  variant="outline"
                  className="mt-2 flex items-center gap-2"
                  onClick={() => copyToClipboard(envFileExample)}
                >
                  Copy to Clipboard <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">2. Add Your Actual Values</h3>
                <p className="text-gray-600">You'll need to add two environment variables:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Your Supabase project URL</li>
                  <li>Your Supabase anon/public key</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  You can find these in your Supabase project dashboard under Project Settings → API.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">3. Restart Your Development Server</h3>
                <p className="text-gray-600">
                  After creating the .env.local file, restart your Next.js development server for the changes to take
                  effect.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

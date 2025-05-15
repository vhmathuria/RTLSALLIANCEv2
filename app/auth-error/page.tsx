"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error") || "An authentication error occurred"

  return (
    <div className="container max-w-md mx-auto py-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
        <p className="text-gray-700 mb-6">{error}</p>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Troubleshooting Steps:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Clear your browser cookies and cache</li>
            <li>Try using a different browser</li>
            <li>Check if you have any browser extensions that might be blocking the authentication</li>
            <li>Ensure you're using the correct account credentials</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Button asChild>
            <Link href="/membership">Try Again</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

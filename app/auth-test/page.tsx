import { createServerSupabaseClient } from "@/lib/supabase-client"
import AuthDebug from "@/components/auth/auth-debug"

export const dynamic = "force-dynamic"

export default async function AuthTestPage() {
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.auth.getUser()

  const serverAuthStatus = !!data.user

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Authentication Test Page</h1>

      <div className="bg-blue-100 p-4 rounded-lg mb-4">
        <strong>Server-side Auth Status:</strong> {serverAuthStatus ? "Authenticated" : "Not Authenticated"}
        {error && (
          <div className="text-red-600 mt-2">
            <strong>Error:</strong> {error.message}
          </div>
        )}
        {data.user && (
          <div className="mt-2">
            <div>
              <strong>User ID:</strong> {data.user.id}
            </div>
            <div>
              <strong>Email:</strong> {data.user.email}
            </div>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Client-side Auth Status:</h2>
        <AuthDebug />
      </div>
    </div>
  )
}

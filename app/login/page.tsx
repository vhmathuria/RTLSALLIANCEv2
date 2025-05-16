import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createServerClient } from "@/lib/supabase-server"
import AuthButtons from "@/components/auth/auth-buttons"

export const metadata = {
  title: "Sign In - RTLS Alliance",
  description: "Sign in to your RTLS Alliance account",
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) {
  // Get the redirect URL from the query parameters
  const redirectTo = searchParams.redirectTo || "/"

  // Check if user is already logged in
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is already logged in, redirect to the requested page
  if (user) {
    redirect(redirectTo)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Image
            src="/images/rtls-alliance-logo.png"
            alt="RTLS Alliance Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link href="/join-alliance" className="font-medium text-blue-600 hover:text-blue-500">
              join the RTLS Alliance
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <AuthButtons redirectTo={redirectTo} />
          </div>
        </div>
      </div>
    </div>
  )
}

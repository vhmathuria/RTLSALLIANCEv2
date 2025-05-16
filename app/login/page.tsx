import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createServerClient } from "@/lib/supabase-server"
import { Button } from "@/components/ui/button"

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
            <div className="space-y-6">
              <div>
                <Button className="w-full flex items-center justify-center gap-3" variant="outline" asChild>
                  <Link href={`/api/auth/google?redirectTo=${encodeURIComponent(redirectTo)}`}>
                    <Image src="/google-logo.png" alt="Google" width={20} height={20} />
                    Sign in with Google
                  </Link>
                </Button>
              </div>

              <div>
                <Button className="w-full flex items-center justify-center gap-3" variant="outline" asChild>
                  <Link href={`/api/auth/linkedin?redirectTo=${encodeURIComponent(redirectTo)}`}>
                    <Image src="/linkedin-logo.png" alt="LinkedIn" width={20} height={20} />
                    Sign in with LinkedIn
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div>
                <Button className="w-full" asChild>
                  <Link href="/join-alliance">Create an Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

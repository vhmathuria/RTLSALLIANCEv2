import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"

export default async function MembershipCancelPage() {
  // Verify the user is logged in
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?redirectTo=/membership")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Membership Upgrade Cancelled</h1>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <p className="text-gray-800 text-lg mb-4">You've cancelled the membership upgrade process.</p>
          <p className="text-gray-600">
            You can still access all public content on the RTLS Alliance site. If you change your mind, you can upgrade
            your membership at any time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/membership"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View Membership Options
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  )
}

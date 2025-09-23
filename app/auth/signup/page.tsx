import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import SignUpForm from "@/components/auth/signup-form"

export const dynamic = "force-dynamic"

export default async function SignUpPage() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect("/bidding-portal")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SignUpForm />
    </div>
  )
}

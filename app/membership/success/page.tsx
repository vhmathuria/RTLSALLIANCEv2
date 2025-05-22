import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import ClientPage from "./ClientPage"

export const dynamic = "force-dynamic"

export default async function MembershipSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const sessionId = searchParams.session_id as string

  if (!sessionId) {
    redirect("/membership")
  }

  // Check if user is logged in
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is not logged in, redirect to login
  if (!user) {
    console.log("No user found in membership success page, redirecting to login")
    redirect(`/login?redirectTo=/membership/success?session_id=${sessionId}&from=success-page`)
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("membership_tier").eq("id", user.id).single()

  return <ClientPage searchParams={{ session_id: sessionId }} />
}

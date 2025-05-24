import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Upgrade Membership | RTLS Alliance",
  description: "Upgrade your RTLS Alliance membership to access more exclusive resources and benefits.",
}

export default async function UpgradePage() {
  // Get the user session
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.delete({ name, ...options })
        },
      },
    },
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If not logged in, redirect to login
  if (!session) {
    redirect("/login?redirectTo=/membership/upgrade")
  }

  // Redirect to the membership page
  redirect("/membership")
}

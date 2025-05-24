import type React from "react"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import ContentGate from "@/components/content-gate"

export default async function ResourceLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { slug } = params

  // Get the article to check if it's premium
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

  const { data: article, error } = await supabase.from("articles").select("*").eq("slug", slug).single()

  if (error || !article) {
    notFound()
  }

  // Check if the article is premium
  const isPremium = article.premium === true || article.member_only === true

  // If it's premium, wrap with ContentGate
  if (isPremium) {
    return <ContentGate>{children}</ContentGate>
  }

  // Otherwise, render normally
  return <>{children}</>
}

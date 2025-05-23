import { createClient } from "@/lib/supabase-server"
import { checkMembershipAccess } from "@/lib/membership-actions"
import ContentGate from "@/components/content-gate"
import { getCurrentMembership } from "@/lib/membership-actions"
import { revalidatePath } from "next/cache"

export default async function ResourcePage({ params }: { params: { slug: string } }) {
  const supabase = createClient()

  // Get article data
  const { data: article, error } = await supabase.from("staging_articles").select("*").eq("slug", params.slug).single()

  if (error || !article) {
    return <div>Article not found</div>
  }

  // Get current user's membership
  const membership = await getCurrentMembership()

  // Check if user has access to this content
  const hasAccess = await checkMembershipAccess(article.membership_tier || "public")

  // Force revalidation to ensure we have the latest membership status
  revalidatePath(`/resources/${params.slug}`)

  // If user doesn't have access, show content gate
  if (!hasAccess) {
    return (
      <ContentGate
        requiredTier={(article.membership_tier as any) || "public"}
        userTier={(membership.tier as any) || "public"}
      />
    )
  }

  // Otherwise, show the article content
  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

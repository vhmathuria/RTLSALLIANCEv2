"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { CustomBreadcrumb } from "@/lib/breadcrumb-config"
import { getArticleBySlug } from "@/lib/supabase"
import type { Article } from "@/types/article"

export function ResourceBreadcrumbs() {
  const params = useParams()
  const slug = params?.slug as string
  const [article, setArticle] = useState<Article | null>(null)
  const [customPath, setCustomPath] = useState<CustomBreadcrumb[] | null>(null)

  useEffect(() => {
    async function fetchArticle() {
      if (slug) {
        try {
          const articleData = await getArticleBySlug(slug)
          setArticle(articleData)

          // Create custom breadcrumb path based on article type and title
          if (articleData) {
            const path: CustomBreadcrumb[] = [
              { label: "Home", href: "/" },
              { label: "Knowledge Hub", href: "/resources" },
            ]

            // Add content type if available
            if (articleData.content_type) {
              path.push({
                label: articleData.content_type,
                href: `/resources?type=${encodeURIComponent(articleData.content_type)}`,
              })
            }

            // Add current article
            path.push({
              label: articleData.title,
              href: `/resources/${slug}`,
              isCurrentPage: true,
            })

            setCustomPath(path)
          }
        } catch (error) {
          console.error("Error fetching article:", error)
        }
      }
    }

    fetchArticle()
  }, [slug])

  // Show breadcrumbs with custom path if available
  return <Breadcrumbs customPath={customPath} />
}
// Check if this component is somehow rendering multiple breadcrumb sets
// Look for multiple instances of Breadcrumbs or nested breadcrumb components

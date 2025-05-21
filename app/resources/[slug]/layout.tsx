import type React from "react"
import { ResourceBreadcrumbs } from "@/components/resource-breadcrumbs"
import PageLayout from "@/components/layout/page-layout"

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // We're setting showBreadcrumbs to false to disable the default breadcrumbs
  // from the root layout, and then manually adding ResourceBreadcrumbs
  return (
    <PageLayout showBreadcrumbs={false}>
      <ResourceBreadcrumbs />
      {children}
    </PageLayout>
  )
}

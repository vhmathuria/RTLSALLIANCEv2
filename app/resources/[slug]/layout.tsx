import type React from "react"
import { ResourceBreadcrumbs } from "@/components/resource-breadcrumbs"
import PageLayout from "@/components/layout/page-layout"

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Disable the default breadcrumbs from PageLayout
  // and manually add the ResourceBreadcrumbs component
  return (
    <PageLayout showBreadcrumbs={false}>
      <ResourceBreadcrumbs />
      {children}
    </PageLayout>
  )
}

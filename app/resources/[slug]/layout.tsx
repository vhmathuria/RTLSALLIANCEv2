import type React from "react"
import { ResourceBreadcrumbs } from "@/components/resource-breadcrumbs"
import PageLayout from "@/components/layout/page-layout"

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageLayout showBreadcrumbs={false}>
      <ResourceBreadcrumbs />
      {children}
    </PageLayout>
  )
}

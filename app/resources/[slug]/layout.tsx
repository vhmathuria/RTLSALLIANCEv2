import type React from "react"
import { ResourceBreadcrumbs } from "@/components/resource-breadcrumbs"

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ResourceBreadcrumbs />
      {children}
    </>
  )
}

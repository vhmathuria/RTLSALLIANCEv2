import type React from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"

interface PageLayoutProps {
  children: React.ReactNode
  showBreadcrumbs?: boolean
  customBreadcrumbs?: React.ReactNode
}

export default function PageLayout({ children, showBreadcrumbs = true, customBreadcrumbs }: PageLayoutProps) {
  return (
    <>
      {showBreadcrumbs && (customBreadcrumbs || <Breadcrumbs />)}
      {children}
    </>
  )
}

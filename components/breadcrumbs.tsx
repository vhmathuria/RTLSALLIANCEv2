"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { breadcrumbConfigs, type CustomBreadcrumb } from "@/lib/breadcrumb-config"

interface BreadcrumbsProps {
  homeElement?: React.ReactNode
  separator?: React.ReactNode
  containerClasses?: string
  listClasses?: string
  activeItemClasses?: string
  inactiveItemClasses?: string
  transformLabel?: (label: string) => string
  customLabels?: Record<string, string>
  customPath?: CustomBreadcrumb[]
}

export function Breadcrumbs({
  homeElement = <Home className="h-4 w-4" />,
  separator = <ChevronRight className="h-4 w-4 text-gray-400" />,
  containerClasses = "py-3 px-4 bg-gray-50 border-b border-gray-200",
  listClasses = "flex flex-wrap items-center space-x-2 text-sm text-gray-600 container mx-auto",
  activeItemClasses = "font-medium text-gray-900",
  inactiveItemClasses = "text-gray-500 hover:text-gray-700 hover:underline",
  transformLabel = (label) => {
    // Convert kebab case or snake case to normal text and capitalize first letter
    return label
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  },
  customLabels = {
    "rtls-digital-twin": "RTLS Technologies",
    technologies: "Technologies",
    ble: "Bluetooth Low Energy",
    uwb: "Ultra-Wideband",
    wifi: "WiFi",
    nfc: "NFC",
    lora: "LoRa",
    infrared: "Infrared",
    lidar: "LiDAR",
    "ai-cameras": "AI Cameras",
    gnss: "GNSS",
    "rtk-gps": "RTK GPS",
    "magnetic-field": "Magnetic Field",
    ultrasound: "Ultrasound",
    "sensor-fusion": "Sensor Fusion",
    slam: "SLAM",
    "dead-reckoning": "Dead Reckoning",
    modules: "Modules",
    resources: "Knowledge Hub",
    ecosystem: "RTLS Ecosystem",
    certification: "Certification",
    membership: "Membership",
    contact: "Contact",
    "join-alliance": "Join Alliance",
    project: "Project",
    account: "Account",
  },
  customPath,
}: BreadcrumbsProps) {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on homepage
  if (pathname === "/") {
    return null
  }

  // Check if we have a custom path configuration for this exact path
  const customConfig = customPath || breadcrumbConfigs[pathname]

  // If we have a custom configuration, use it
  if (customConfig) {
    // Generate structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: customConfig.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.org"}${item.href}`,
      })),
    }

    return (
      <>
        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* Visible Breadcrumbs */}
        <nav className={containerClasses} aria-label="Breadcrumbs">
          <ol className={listClasses} itemScope itemType="https://schema.org/BreadcrumbList">
            {customConfig.map((item, index) => (
              <li
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <span className="mx-1" aria-hidden="true">
                    {separator}
                  </span>
                )}

                {item.isCurrentPage ? (
                  <span className={activeItemClasses} aria-current="page" itemProp="name">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={inactiveItemClasses} itemProp="item">
                    <span itemProp="name">
                      {item.href === "/" ? homeElement : item.label}
                      {item.href === "/" && <span className="sr-only">Home</span>}
                    </span>
                  </Link>
                )}
                <meta itemProp="position" content={`${index + 1}`} />
              </li>
            ))}
          </ol>
        </nav>
      </>
    )
  }

  // Default behavior - generate breadcrumbs from pathname
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment) => decodeURIComponent(segment))

  // Generate breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`
    const isLast = index === pathSegments.length - 1
    const label = customLabels[segment] || transformLabel(segment)

    return {
      href,
      label,
      isLast,
      segment,
    }
  })

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.org"}`,
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.org"}${item.href}`,
      })),
    ],
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Visible Breadcrumbs */}
      <nav className={containerClasses} aria-label="Breadcrumbs">
        <ol className={listClasses} itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className={inactiveItemClasses} itemProp="item">
              <span className="flex items-center">
                {homeElement}
                <span className="sr-only" itemProp="name">
                  Home
                </span>
              </span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {breadcrumbItems.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span className="mx-1" aria-hidden="true">
                {separator}
              </span>
              {item.isLast ? (
                <span className={activeItemClasses} aria-current="page" itemProp="name">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={inactiveItemClasses} itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={`${index + 2}`} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

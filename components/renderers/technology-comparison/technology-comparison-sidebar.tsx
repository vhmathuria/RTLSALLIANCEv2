"use client"

import { formatDate } from "@/lib/utils"
import { Clock, Calendar, User } from "lucide-react"

interface TechnologyComparisonSidebarProps {
  toc: string[]
  title: string
  publishDate: string
  author: string
  readingTime?: number
  sectionIds?: string[]
}

export default function TechnologyComparisonSidebar({
  toc = [],
  title,
  publishDate,
  author,
  readingTime,
  sectionIds = [],
}: TechnologyComparisonSidebarProps) {
  const scrollToSection = (sectionName: string, index: number) => {
    // Use the provided section ID if available
    const sectionId =
      sectionIds && sectionIds[index]
        ? sectionIds[index]
        : sectionName
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")

    // Try to find the element by ID
    const element = document.getElementById(sectionId)

    if (element) {
      // Add a small offset to account for the sticky header
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Scroll to the element with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    } else {
      console.warn(`Section with ID "${sectionId}" not found`)
    }
  }

  return (
    <div className="bg-white border border-blue-500 rounded-lg p-5 shadow-md">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Article Info</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            <time dateTime={publishDate}>{formatDate(publishDate)}</time>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-blue-500" />
            <span>{author}</span>
          </div>
          {readingTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-500" />
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-3">Table of Contents</h2>
      <nav>
        <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {toc.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item, index)}
                className="text-sm text-gray-700 hover:text-blue-600 hover:underline text-left w-full flex items-center"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0 text-xs">
                  {index + 1}
                </span>
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

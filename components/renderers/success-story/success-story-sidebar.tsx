"use client"

import { formatDate } from "@/lib/utils"
import { Clock, Calendar, User, Building2, MapPin } from "lucide-react"

interface SuccessStorySidebarProps {
  toc: string[]
  title: string
  publishDate: string
  author: string
  readingTime?: number
  sectionIds?: string[]
  clientName?: string
  industry?: string
  location?: string
}

export default function SuccessStorySidebar({
  toc,
  title,
  publishDate,
  author,
  readingTime,
  sectionIds = [],
  clientName,
  industry,
  location,
}: SuccessStorySidebarProps) {
  const scrollToSection = (sectionName: string, index: number) => {
    // Use the provided section ID if available
    const sectionId =
      sectionIds[index] ||
      sectionName
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
    <div className="bg-white border border-blue-300 rounded-lg p-5 shadow-md">
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

      {(clientName || industry || location) && (
        <div className="mb-6 border-t border-gray-200 pt-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Client</h2>
          <div className="space-y-2 text-sm text-gray-600">
            {clientName && (
              <div className="flex items-start">
                <Building2 className="h-4 w-4 mr-2 text-blue-500 mt-0.5" />
                <span>{clientName}</span>
              </div>
            )}
            {industry && (
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-blue-500 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{industry}</span>
              </div>
            )}
            {location && (
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-500 mt-0.5" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <h2 className="text-lg font-bold text-gray-900 mb-3">Table of Contents</h2>
      <nav>
        <ul className="space-y-3">
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

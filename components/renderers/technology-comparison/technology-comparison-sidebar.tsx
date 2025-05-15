"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface TechnologyComparisonSidebarProps {
  toc: string[]
}

export default function TechnologyComparisonSidebar({ toc }: TechnologyComparisonSidebarProps) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Function to convert section title to ID
  const sectionToId = (section: string) => {
    return section
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
  }

  return (
    <div className="relative">
      <div
        className={`lg:block ${
          isOpen ? "block" : "hidden"
        } sticky top-24 border border-blue-300 rounded-lg shadow-sm p-4 bg-white`}
      >
        <h2 className="text-lg font-bold mb-4 text-gray-900">Table of Contents</h2>
        <ul className="space-y-2">
          {toc.map((section, index) => (
            <li key={index}>
              <a
                href={`#${sectionToId(section)}`}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0 text-xs">
                  {index + 1}
                </span>
                <span>{section}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-0 right-0 p-2 rounded-full bg-white shadow-sm border border-gray-200"
        aria-label={isOpen ? "Close table of contents" : "Open table of contents"}
      >
        <ChevronRight className={`h-4 w-4 text-gray-600 transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`} />
      </button>
    </div>
  )
}

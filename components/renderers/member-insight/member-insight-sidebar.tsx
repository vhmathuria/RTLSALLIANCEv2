import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

interface MemberInsightSidebarProps {
  toc: string[]
  title: string
  publishDate: string
  author: string
  readingTime?: number
  sectionIds: string[]
}

// Function to create an ID from text
const createIdFromText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}

export default function MemberInsightSidebar({
  toc,
  title,
  publishDate,
  author,
  readingTime,
  sectionIds,
}: MemberInsightSidebarProps) {
  // Format the date
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="space-y-8">
      {/* Article Info */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-gray-400" />
            <span>{author}</span>
          </div>
          {readingTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-gray-400" />
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="text-md font-semibold text-gray-900 mb-3">Table of Contents</h3>
        <nav>
          <ul className="space-y-1">
            {toc.map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${sectionIds[index] || createIdFromText(item)}`}
                  className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline block py-1"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

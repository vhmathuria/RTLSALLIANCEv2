import Link from "next/link"
import { BookOpen } from "lucide-react"

interface GuidePrerequisitesProps {
  knowledge: string[]
}

export default function GuidePrerequisites({ knowledge }: GuidePrerequisitesProps) {
  if (!knowledge || knowledge.length === 0) return null

  return (
    <section id="prerequisites" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
          Helpful Background Knowledge
        </h3>
        <ul className="space-y-3">
          {knowledge.map((item, index) => {
            // Parse the item to extract link and description
            const parts = item.split(" for ")
            const link = parts[0]
            const description = parts.length > 1 ? parts[1] : ""

            // Extract just the name from the link path
            const linkName = link
              .split("/")
              .pop()
              ?.replace(/-/g, " ")
              .replace(/^\w/, (c) => c.toUpperCase())

            return (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 text-xs">
                  {index + 1}
                </span>
                <div>
                  <Link href={link} className="text-blue-600 hover:underline font-medium">
                    {description || linkName}
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

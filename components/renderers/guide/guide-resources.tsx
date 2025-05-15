import Link from "next/link"
import { ExternalLink, BookOpen, LinkIcon } from "lucide-react"

interface Resource {
  type: string
  name: string
  description: string
  link: string
}

interface GuideResourcesProps {
  resources: Resource[]
}

export default function GuideResources({ resources }: GuideResourcesProps) {
  if (!resources || resources.length === 0) return null

  return (
    <section id="resources" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
        Helpful Resources
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow bg-white shadow-sm"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                {resource.type === "Reference" ? (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <LinkIcon className="h-5 w-5 text-blue-600" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Visit Resource
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface SuccessStoryHeaderProps {
  title: string
  subtitle: string
  tags: string[]
  publishDate: string
  author: string
  clientLogo?: string
  clientName?: string
}

export default function SuccessStoryHeader({
  title,
  subtitle,
  tags,
  publishDate,
  author,
  clientLogo,
  clientName,
}: SuccessStoryHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>

        {clientLogo && (
          <div className="flex-shrink-0">
            <div className="relative h-20 w-40 overflow-hidden">
              <Image
                src={clientLogo || "/placeholder.svg"}
                alt={clientName || "Client logo"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center text-sm text-gray-600">
        <span>By {author}</span>
        <span className="mx-2">•</span>
        <time dateTime={publishDate}>{formatDate(publishDate)}</time>
      </div>
    </header>
  )
}

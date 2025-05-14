import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface TechnologyComparisonHeaderProps {
  title: string
  subtitle: string
  tags: string[]
  publishDate: string
  author: string
}

export default function TechnologyComparisonHeader({
  title,
  subtitle,
  tags,
  publishDate,
  author,
}: TechnologyComparisonHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h1>

      <p className="text-xl text-gray-700 mb-6">{subtitle}</p>

      <div className="flex items-center text-sm text-gray-600">
        <span>By {author}</span>
        <span className="mx-2">•</span>
        <time dateTime={publishDate}>{formatDate(publishDate)}</time>
      </div>
    </header>
  )
}

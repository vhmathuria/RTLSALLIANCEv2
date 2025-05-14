interface MemberInsightHeaderProps {
  title: string
  subtitle: string
  tags: string[]
  publishDate: string
  author: string
}

export default function MemberInsightHeader({ title, subtitle, tags, publishDate, author }: MemberInsightHeaderProps) {
  // Format the date
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="mb-12">
      <div className="mb-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-gray-600 mb-4">{subtitle}</p>}
      </div>

      <div className="flex items-center text-sm text-gray-600">
        <span>By {author}</span>
        <span className="mx-2">•</span>
        <span>{formattedDate}</span>
      </div>
    </header>
  )
}

import Link from "next/link"

interface Article {
  title: string
  link: string
}

interface MemberInsightRelatedReadsProps {
  articles: Article[]
  lastUpdated: string
}

export default function MemberInsightRelatedReads({ articles, lastUpdated }: MemberInsightRelatedReadsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reads</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-indigo-600 hover:text-indigo-700">{article.title}</h3>
          </Link>
        ))}
      </div>

      {lastUpdated && <p className="text-sm text-gray-500 text-right">Last updated: {lastUpdated}</p>}
    </section>
  )
}

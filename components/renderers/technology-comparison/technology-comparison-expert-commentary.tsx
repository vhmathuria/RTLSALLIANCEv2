import { MessageSquare, User } from "lucide-react"

interface ExpertComment {
  expert: string
  comment: string
  affiliation: string
}

interface ExpertVoice {
  quote: string
  name: string
  role: string
}

interface TechnologyComparisonExpertCommentaryProps {
  commentary?: ExpertComment[] | null
  expertVoice?: ExpertVoice | null
}

export default function TechnologyComparisonExpertCommentary({
  commentary,
  expertVoice,
}: TechnologyComparisonExpertCommentaryProps) {
  // Check if we have any data to display
  const hasCommentary = Array.isArray(commentary) && commentary.length > 0
  const hasExpertVoice = expertVoice && (expertVoice.quote || expertVoice.name)

  if (!hasCommentary && !hasExpertVoice) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
          Expert Commentary
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No expert commentary available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
        Expert Commentary
      </h2>

      {/* Multiple expert comments */}
      {hasCommentary && (
        <div className="space-y-6 mb-8">
          {commentary!.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mr-2">{item.expert}</h3>
                    <span className="text-sm text-gray-500">{item.affiliation}</span>
                  </div>
                  <p className="text-gray-700 italic">{`"${item.comment}"`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Single expert voice */}
      {hasExpertVoice && (
        <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-blue-50">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 italic text-lg mb-4">{`"${expertVoice!.quote}"`}</p>
              <div className="flex items-center">
                <h3 className="text-md font-semibold text-gray-900 mr-2">{expertVoice!.name}</h3>
                <span className="text-sm text-gray-500">{expertVoice!.role}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

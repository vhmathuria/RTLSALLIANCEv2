interface MemberInsightExpertVoiceProps {
  quote: string
  name: string
  role: string
}

export default function MemberInsightExpertVoice({ quote, name, role }: MemberInsightExpertVoiceProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Commentary</h2>

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
        <div className="flex flex-col items-center text-center">
          <svg
            className="h-12 w-12 text-indigo-400 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl font-medium text-gray-900 mb-4">{quote}</blockquote>
          <div className="text-gray-600">
            <span className="font-semibold">{name}</span>
            {role && <span>, {role}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}

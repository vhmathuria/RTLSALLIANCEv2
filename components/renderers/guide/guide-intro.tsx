interface GuideIntroProps {
  headline: string
  summaryBullets: string[]
}

export default function GuideIntro({ headline, summaryBullets }: GuideIntroProps) {
  return (
    <section id="intro" className="my-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{headline}</h2>
      <ul className="space-y-2">
        {summaryBullets.map((bullet, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-gray-700">{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

interface Step {
  step: string
  details: string[]
}

interface TableData {
  columns: string[]
  rows: Record<string, string>[]
}

interface MemberInsightStepByStepProps {
  steps: Step[]
  table: TableData | null // Keep the prop but don't use it
}

export default function MemberInsightStepByStep({ steps, table }: MemberInsightStepByStepProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Roadmap</h2>

      <div className="relative">
        <div className="absolute left-4 inset-y-0 w-0.5 bg-indigo-200"></div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-0 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.step}</h3>
                <ul className="space-y-2 list-disc pl-5">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

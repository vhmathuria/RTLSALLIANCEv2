import { Info } from "lucide-react"

interface Technology {
  name: string
  description: string
}

interface TechnologyComparisonOverviewProps {
  technologies: Technology[]
}

export default function TechnologyComparisonOverview({ technologies }: TechnologyComparisonOverviewProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Info className="h-6 w-6 mr-2 text-blue-600" />
        Technology Overview
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="rounded-lg p-6 shadow-md bg-white border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">{tech.name}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

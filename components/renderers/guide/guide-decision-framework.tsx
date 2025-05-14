import { GitBranch, Check, X } from "lucide-react"
import { fixSpecialChars } from "@/lib/utils"

interface DecisionItem {
  factor: string
  question: string
  guidance: {
    Yes: string
    No: string
  }
}

interface GuideDecisionFrameworkProps {
  framework: DecisionItem[]
}

export default function GuideDecisionFramework({ framework }: GuideDecisionFrameworkProps) {
  if (!framework || framework.length === 0) return null

  return (
    <section id="decision-framework" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <GitBranch className="h-6 w-6 mr-2 text-blue-600" />
        Decision Framework
      </h2>
      <div className="space-y-6">
        {framework.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
              <h3 className="text-lg font-semibold">{fixSpecialChars(item.factor)}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 font-medium mb-4">{fixSpecialChars(item.question)}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-green-800 uppercase tracking-wider mb-2 flex items-center">
                    <Check className="h-4 w-4 mr-1 text-green-600" />
                    If Yes
                  </h4>
                  <p className="text-gray-700">{fixSpecialChars(item.guidance.Yes)}</p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-red-800 uppercase tracking-wider mb-2 flex items-center">
                    <X className="h-4 w-4 mr-1 text-red-600" />
                    If No
                  </h4>
                  <p className="text-gray-700">{fixSpecialChars(item.guidance.No)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { CheckCircle } from "lucide-react"

interface SuccessStoryConclusionProps {
  summary: any
}

export default function SuccessStoryConclusion({ summary }: SuccessStoryConclusionProps) {
  // Function to safely extract text content from any value
  const safelyExtractText = (value: any): string => {
    if (value === null || value === undefined) {
      return ""
    }

    if (typeof value === "string") {
      return value
    }

    if (Array.isArray(value)) {
      return value.map((item) => safelyExtractText(item)).join(", ")
    }

    if (typeof value === "object") {
      // Check for common text properties
      for (const prop of ["summary", "text", "content", "value", "description"]) {
        if (typeof value[prop] === "string") {
          return value[prop]
        }
      }

      // If we can't find a suitable property, return a placeholder
      return "See detailed conclusion"
    }

    // For any other type, convert to string
    return String(value)
  }

  if (!summary) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
        Conclusion
      </h2>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
        <p className="text-gray-700">{safelyExtractText(summary)}</p>
      </div>
    </section>
  )
}

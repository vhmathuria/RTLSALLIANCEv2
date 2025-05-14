/**
 * Utility to deeply inspect and log the structure of Member Insight rich_text JSON
 */
export function debugMemberInsightStructure(richText: string): void {
  try {
    const parsed = JSON.parse(richText)
    console.log("=== MEMBER INSIGHT STRUCTURE ===")
    console.log("Top-level keys:", Object.keys(parsed))

    // Log each top-level section
    Object.keys(parsed).forEach((key) => {
      const value = parsed[key]
      console.log(`\n--- ${key} ---`)

      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          console.log(`Array with ${value.length} items`)
          if (value.length > 0) {
            console.log("First item structure:", Object.keys(value[0]))
            console.log("Sample item:", value[0])
          }
        } else {
          console.log("Object with keys:", Object.keys(value))
          console.log("Sample value:", value)
        }
      } else {
        console.log("Value:", value)
      }
    })

    // Special handling for common sections
    if (parsed.executiveSummary) {
      console.log("\n=== Executive Summary Structure ===")
      console.log(parsed.executiveSummary)
    }

    if (parsed.insightDetails) {
      console.log("\n=== Insight Details Structure ===")
      console.log("Keys:", Object.keys(parsed.insightDetails))
      if (parsed.insightDetails.sections) {
        console.log(`Sections array with ${parsed.insightDetails.sections.length} items`)
        if (parsed.insightDetails.sections.length > 0) {
          console.log("First section structure:", Object.keys(parsed.insightDetails.sections[0]))
          console.log("Sample section:", parsed.insightDetails.sections[0])
        }
      }
    }

    if (parsed.strategicRecommendations) {
      console.log("\n=== Strategic Recommendations Structure ===")
      console.log("Keys:", Object.keys(parsed.strategicRecommendations))
      if (parsed.strategicRecommendations.recommendations) {
        console.log(`Recommendations array with ${parsed.strategicRecommendations.recommendations.length} items`)
        if (parsed.strategicRecommendations.recommendations.length > 0) {
          console.log(
            "First recommendation structure:",
            Object.keys(parsed.strategicRecommendations.recommendations[0]),
          )
          console.log("Sample recommendation:", parsed.strategicRecommendations.recommendations[0])
        }
      }
    }

    console.log("\n=== FULL CONTENT ===")
    console.log(JSON.stringify(parsed, null, 2))
  } catch (error) {
    console.error("Error parsing rich_text:", error)
  }
}

/**
 * Safely extracts a value from a nested object path
 */
export function getNestedValue(obj: any, path: string, defaultValue: any = null): any {
  try {
    const parts = path.split(".")
    let current = obj

    for (const part of parts) {
      if (current === null || current === undefined) {
        return defaultValue
      }

      if (part.includes("[") && part.includes("]")) {
        // Handle array access
        const arrayName = part.split("[")[0]
        const index = Number.parseInt(part.split("[")[1].split("]")[0], 10)

        if (!current[arrayName] || !Array.isArray(current[arrayName]) || current[arrayName].length <= index) {
          return defaultValue
        }

        current = current[arrayName][index]
      } else {
        if (!current.hasOwnProperty(part)) {
          return defaultValue
        }
        current = current[part]
      }
    }

    return current === undefined ? defaultValue : current
  } catch (error) {
    console.error(`Error getting nested value for path ${path}:`, error)
    return defaultValue
  }
}

/**
 * Utility to deeply inspect the structure of rich_text JSON
 * Logs the structure and returns a flattened representation for debugging
 */
export function inspectRichTextStructure(richText: string): Record<string, any> {
  try {
    const parsed = JSON.parse(richText)
    const structure: Record<string, any> = {}

    // Recursively map the structure
    const mapStructure = (obj: any, path = "") => {
      if (!obj) return

      if (typeof obj === "object" && !Array.isArray(obj)) {
        Object.keys(obj).forEach((key) => {
          const newPath = path ? `${path}.${key}` : key
          structure[newPath] = typeof obj[key]
          mapStructure(obj[key], newPath)
        })
      } else if (Array.isArray(obj) && obj.length > 0) {
        structure[path] = `Array(${obj.length})`
        // Map the first item to understand array structure
        if (typeof obj[0] === "object") {
          mapStructure(obj[0], `${path}[0]`)
        }
      }
    }

    mapStructure(parsed)
    console.log("Rich Text Structure:", structure)
    console.log("Full Rich Text Object:", parsed)

    return structure
  } catch (error) {
    console.error("Error parsing rich_text:", error)
    return {}
  }
}

/**
 * Extracts a specific path from the rich_text JSON
 * Useful for debugging specific sections
 */
export function extractPath(richText: string, path: string): any {
  try {
    const parsed = JSON.parse(richText)
    const parts = path.split(".")

    let current = parsed
    for (const part of parts) {
      if (part.includes("[") && part.includes("]")) {
        // Handle array access
        const arrayName = part.split("[")[0]
        const index = Number.parseInt(part.split("[")[1].split("]")[0])
        current = current[arrayName][index]
      } else {
        current = current[part]
      }

      if (current === undefined) {
        console.warn(`Path ${path} not found in rich_text`)
        return null
      }
    }

    return current
  } catch (error) {
    console.error(`Error extracting path ${path}:`, error)
    return null
  }
}

/**
 * Safely renders content that might be an object, array, or primitive value
 * @param content Any content that needs to be rendered as a string
 * @returns A string representation of the content
 */
export function safelyRenderContent(content: any): string {
  // Handle null or undefined
  if (content === null || content === undefined) {
    return ""
  }

  // Handle strings directly
  if (typeof content === "string") {
    return content
  }

  // Handle arrays by joining elements
  if (Array.isArray(content)) {
    return content.map((item) => safelyRenderContent(item)).join(", ")
  }

  // Handle objects
  if (typeof content === "object") {
    // Check for common text properties
    const textProperties = ["text", "content", "value", "description", "summary"]
    for (const prop of textProperties) {
      if (typeof content[prop] === "string") {
        return content[prop]
      }
    }

    // Special case for industry recommendations
    if (content.industry && content.recommendations) {
      return `${content.industry}: ${safelyRenderContent(content.recommendations)}`
    }

    // Try to extract any string property
    for (const key of Object.keys(content)) {
      if (typeof content[key] === "string") {
        return content[key]
      }
    }

    // If we can't find a string property, return a fallback message
    return "Content available in structured format"
  }

  // For any other type, convert to string
  return String(content)
}

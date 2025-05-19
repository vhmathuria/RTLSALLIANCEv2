import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function parseJsonSafely<T>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString) as T
  } catch (error) {
    console.error("Error parsing JSON:", error)
    return fallback
  }
}

// Improved function to fix special characters
export function fixSpecialChars(text: string): string {
  if (!text) return ""

  // Replace common problematic characters with their proper equivalents
  return (
    text
      // Fix number ranges with incorrect decimal points (specific patterns first)
      .replace(/(\d+)\.(\d+)(?=\s*m)/g, "$1-$2") // Convert 0.5.1 m to 0.5-1 m
      .replace(/(\d+)\.(\d+)(?=\s*cm)/g, "$1-$2") // Convert 0.5.2 cm to 0.5-2 cm
      .replace(/(\d+)\.(\d+)(?=\s*mm)/g, "$1-$2") // Convert 0.5.3 mm to 0.5-3 mm
      .replace(/(\d+)\.(\d+)(?=\s*Hz)/g, "$1-$2") // Convert 10.100 Hz to 10-100 Hz
      .replace(/(\d+)\.(\d+)(?=\s*high-value)/g, "$1-$2") // Convert 3.5 high-value to 3-5 high-value
      .replace(/(\d+)\.(\d+)(?=\s*anchors)/g, "$1-$2") // Convert 4.6 anchors to 4-6 anchors
      .replace(/(\d+)\.(\d+)(?=\s*beacons)/g, "$1-$2") // Convert 4.6 beacons to 4-6 beacons

      // Fix question marks before numbers
      .replace(/\?(\d+)/g, "$1") // Remove question marks before numbers
      .replace(/\?(\d+)%/g, "$1%") // Fix ?95% to 95%
      .replace(/\?(\d+\.\d+)%/g, "$1%") // Fix ?99.9% to 99.9%

      // Fix other special characters
      .replace(/�/g, "-") // Basic hyphen replacement
      .replace(/�/g, "'") // Single quote
      .replace(/�/g, '"') // Double quote
      .replace(/�/g, "...") // Ellipsis
      .replace(/�/g, "–") // En dash
      .replace(/�/g, "—") // Em dash
      .replace(/�/g, "•") // Bullet
      .replace(/�4/g, "-4") // Hyphen followed by 4
      .replace(/�1/g, "-1") // Hyphen followed by 1
      .replace(/�2/g, "-2") // Hyphen followed by 2
      .replace(/�/g, "-") // Generic hyphen replacement
      .replace(/-e-g--/g, "(e.g.)") // Fix e.g. pattern
      .replace(/-e\.g\.-/g, "(e.g.)") // Alternative e.g. pattern
      .replace(/-i\.e\.-/g, "(i.e.)") // Fix i.e. pattern
      .replace(/(\d+)- ?%/g, "$1%") // Fix percentage signs
      .replace(/(\d+)-(\d+)- ?%/g, "$1.$2%") // Fix decimal percentages
      .replace(/- -/g, ", ") // Replace double hyphens with commas
      .replace(/--/g, ", ") // Replace double hyphens with commas
      .replace(/ -([a-zA-Z])/g, " ($1") // Opening parenthesis
      .replace(/([a-zA-Z])- /g, "$1) ") // Closing parenthesis

      // Preserve actual decimal numbers (after fixing ranges)
      .replace(/(\d+)-(\d+)(?!\s*[a-zA-Z])/g, "$1.$2") // Convert back to decimals if not followed by units
  )
}

// Function to create ID from text
export function createIdFromText(text: string): string {
  if (!text) return ""

  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

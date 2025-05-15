"use client"

import { useState, useEffect } from "react"
import type { Article } from "@/types/article"
import { fixSpecialChars, createIdFromText } from "@/lib/utils"
import SuccessStoryHeader from "./success-story-header"
import SuccessStoryIntro from "./success-story-intro"
import SuccessStoryChallenge from "./success-story-challenge"
import SuccessStorySolution from "./success-story-solution"
import SuccessStoryImplementation from "./success-story-implementation"
import SuccessStoryResults from "./success-story-results"
import SuccessStoryLessons from "./success-story-lessons"
import SuccessStoryConclusion from "./success-story-conclusion"
import SuccessStoryCallToAction from "./success-story-call-to-action"
import SuccessStoryCitations from "./success-story-citations"
import SuccessStoryRelatedReads from "./success-story-related-reads"
import SuccessStorySidebar from "./success-story-sidebar"
import SuccessStoryCrossIndustry from "./success-story-cross-industry"

interface SuccessStoryRendererProps {
  article: Article
}

export default function SuccessStoryRenderer({ article }: SuccessStoryRendererProps) {
  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      for (const prop of ["text", "content", "value", "description", "summary"]) {
        if (typeof value[prop] === "string") {
          return value[prop]
        }
      }

      // If we can't find a suitable property, return a placeholder
      return "See detailed content"
    }

    // For any other type, convert to string
    return String(value)
  }

  // Recursive function to fix all text fields in the content
  const fixAllTextFields = (obj: any): any => {
    if (!obj) return obj

    if (typeof obj === "string") {
      return fixSpecialChars(obj)
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => fixAllTextFields(item))
    }

    if (typeof obj === "object") {
      const result: any = {}
      for (const key in obj) {
        result[key] = fixAllTextFields(obj[key])
      }
      return result
    }

    return obj
  }

  useEffect(() => {
    if (article && article.rich_text) {
      try {
        // Parse the rich_text JSON
        const parsedContent = JSON.parse(article.rich_text)

        // Log the raw content for debugging
        console.log("Raw content:", parsedContent)

        // Fix all text fields
        const fixedContent = fixAllTextFields(parsedContent)

        // Set the content state
        setContent(fixedContent)

        // Scroll to top when content is loaded
        window.scrollTo(0, 0)
      } catch (error) {
        console.error("Error parsing rich_text:", error)
        setError("Failed to parse article content")
      } finally {
        setIsLoading(false)
      }
    }
  }, [article])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Content Not Available</h2>
          <p className="text-gray-600 mt-2">{error || "The article content could not be loaded."}</p>
        </div>
      </div>
    )
  }

  // Create a mapping of section titles to IDs for consistent scrolling
  const toc = content.sidebarTOC || []
  const sectionIds = toc.map((item: string) => createIdFromText(item))

  // Convert metrics to the format expected by SuccessStoryResults
  const formattedMetrics =
    content.resultsAndKPIs?.metrics?.map((metric: any) => ({
      label: metric.metric,
      value: metric.after,
      improvement: metric.improvement,
      context: `Before: ${metric.before}`,
    })) || []

  // Format related reads for the component
  const formattedRelatedReads =
    content.relatedReads?.articles?.map((article: any) => ({
      title: article.title,
      slug: article.link.replace(/^\/articles\//, ""),
    })) || []

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar for desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <SuccessStorySidebar
                toc={content.sidebarTOC || []}
                title={article.title}
                publishDate={article.publish_date}
                author={article.author}
                readingTime={article.reading_time_minutes}
                sectionIds={sectionIds}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-4xl">
            <SuccessStoryHeader
              title={content.title || article.title}
              subtitle={content.pageHeader?.subtitle || ""}
              tags={content.pageHeader?.tags || []}
              publishDate={article.publish_date}
              author={article.author}
            />

            {/* Executive Summary */}
            <section id={sectionIds[0] || "executive-summary"}>
              <SuccessStoryIntro
                headline={content.executiveSummary?.headline || "Executive Summary"}
                summaryBullets={content.executiveSummary?.highlights || []}
                keyResults={content.executiveSummary?.keyResults || content.keyResults || []}
              />
            </section>

            {/* The Challenge */}
            <section id={sectionIds[1] || "the-challenge"}>
              <SuccessStoryChallenge
                overview={content.theChallenge?.problemDescription || ""}
                painPoints={
                  content.theChallenge?.painPoints || [
                    "Frequent misplacement of critical assets",
                    "Significant staff time spent searching",
                    "Disrupted patient care workflows",
                    "Increased operational costs",
                  ]
                }
                businessImpact={content.theChallenge?.impact || ""}
                previousSolutions={content.theChallenge?.whyLegacyFailed || ""}
              />
            </section>

            {/* Solution Design */}
            <section id={sectionIds[2] || "solution-design"}>
              <SuccessStorySolution
                overview={content.solutionDesign?.integration || ""}
                technologies={[
                  {
                    name: content.solutionDesign?.technologiesUsed || "UWB RTLS",
                    description: "Ultra-Wideband Real-Time Location System for precise asset tracking",
                  },
                ]}
                approach={content.solutionDesign?.designHighlights?.join(". ") || ""}
                uniqueValue="Lightweight dashboard integrated with CMMS for live tracking and utilization insights"
              />
            </section>

            {/* Implementation Timeline */}
            <section id={sectionIds[3] || "implementation-timeline"}>
              <SuccessStoryImplementation
                timeline={content.implementationTimeline?.duration || ""}
                phases={content.implementationTimeline?.phases || []}
                challenges={[
                  "Ensuring accurate location tracking in high-interference areas",
                  "Training staff on the new system",
                  "Integrating with existing hospital systems",
                ]}
                teamStructure={content.implementationTimeline?.team || ""}
              />
            </section>

            {/* Results and KPIs */}
            <section id={sectionIds[4] || "results-and-kpis"}>
              <SuccessStoryResults
                overview="The implementation of UWB RTLS at St. Mary's Regional Hospital delivered significant improvements across multiple metrics:"
                metrics={formattedMetrics}
                businessImpact="The system transformed asset availability and patient care responsiveness."
                roi={content.resultsAndKPIs?.roiSummary || ""}
              />
            </section>

            {/* Cross-Industry Insights */}
            <section id={sectionIds[5] || "cross-industry-insights"}>
              <SuccessStoryCrossIndustry insights={content.crossIndustryInsights} />
            </section>

            {/* Key Takeaways */}
            <section id={sectionIds[6] || "key-takeaways"}>
              <SuccessStoryLessons
                overview="The St. Mary's RTLS implementation provided valuable lessons for other healthcare facilities:"
                keyLessons={content.keyTakeaways?.lessons || []}
                bestPractices={[]}
              />
            </section>

            {/* Next Steps */}
            <section id={sectionIds[7] || "next-steps"}>
              <div className="my-12 w-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                  <ul className="space-y-3">
                    {content.nextSteps?.recommendations?.map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-blue-600 mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id={sectionIds[8] || "conclusion"}>
              <SuccessStoryConclusion summary={content.conclusion?.summary || ""} />
            </section>

            {/* Related Reads */}
            <section id={sectionIds[9] || "related-reads"}>
              <SuccessStoryRelatedReads relatedReads={formattedRelatedReads} />
            </section>

            {/* Mobile CTA */}
            {content.callToAction && content.callToAction.text && (
              <div className="lg:hidden my-12">
                <SuccessStoryCallToAction
                  text={content.callToAction.text}
                  buttonText={content.callToAction.buttonText}
                  buttonLink={content.callToAction.buttonLink}
                />
              </div>
            )}

            {/* Citations */}
            {content.citations && Array.isArray(content.citations) && content.citations.length > 0 && (
              <section id="citations">
                <SuccessStoryCitations
                  citations={content.citations.map((citation: any) => ({
                    ref: citation.ref,
                    source: citation.topic,
                  }))}
                />
              </section>
            )}
          </div>

          {/* Right sidebar for CTA */}
          {content.callToAction && content.callToAction.text && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <SuccessStoryCallToAction
                  text={content.callToAction.text}
                  buttonText={content.callToAction.buttonText}
                  buttonLink={content.callToAction.buttonLink}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

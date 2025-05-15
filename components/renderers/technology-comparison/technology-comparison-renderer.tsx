"use client"

import { useState, useEffect } from "react"
import type { Article, TechnologyComparisonContent } from "@/types/article"
import { fixSpecialChars } from "@/lib/utils"
import TechnologyComparisonHeader from "./technology-comparison-header"
import TechnologyComparisonIntro from "./technology-comparison-intro"
import TechnologyComparisonKeyInsights from "./technology-comparison-key-insights"
import TechnologyComparisonAudience from "./technology-comparison-audience"
import TechnologyComparisonOverview from "./technology-comparison-overview"
import TechnologyComparisonTable from "./technology-comparison-table"
import TechnologyComparisonSupportingData from "./technology-comparison-supporting-data"
import TechnologyComparisonIndustryRecommendations from "./technology-comparison-industry-recommendations"
import TechnologyComparisonUseCases from "./technology-comparison-use-cases"
import TechnologyComparisonProsAndCons from "./technology-comparison-pros-and-cons"
import TechnologyComparisonDecisionFramework from "./technology-comparison-decision-framework"
import TechnologyComparisonDeployment from "./technology-comparison-deployment"
import TechnologyComparisonChallenges from "./technology-comparison-challenges"
import TechnologyComparisonExpertCommentary from "./technology-comparison-expert-commentary"
import TechnologyComparisonExpertTips from "./technology-comparison-expert-tips"
import TechnologyComparisonConclusion from "./technology-comparison-conclusion"
import TechnologyComparisonCallToAction from "./technology-comparison-call-to-action"
import TechnologyComparisonCitations from "./technology-comparison-citations"
import TechnologyComparisonRelatedReads from "./technology-comparison-related-reads"
import TechnologyComparisonSidebar from "./technology-comparison-sidebar"

interface TechnologyComparisonRendererProps {
  article: Article
}

export default function TechnologyComparisonRenderer({ article }: TechnologyComparisonRendererProps) {
  const [content, setContent] = useState<TechnologyComparisonContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Helper function to create consistent section IDs
  const createSectionId = (text: string) => {
    if (!text) return ""
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  // Helper function to fix number ranges with incorrect decimal points
  const fixNumberRanges = (text: string): string => {
    if (!text) return ""

    // Replace patterns like "30.100 cm" with "30-100 cm"
    return text
      .replace(/(\d+)\.(\d+)(?=\s*cm)/g, "$1-$2")
      .replace(/(\d+)\.(\d+)(?=\s*m)/g, "$1-$2")
      .replace(/(\d+)\.(\d+)(?=\s*Hz)/g, "$1-$2")
  }

  // Recursive function to fix all text fields in the content
  const fixAllTextFields = (obj: any): any => {
    if (!obj) return obj

    if (typeof obj === "string") {
      return fixNumberRanges(fixSpecialChars(obj))
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
        const parsedContent = JSON.parse(article.rich_text) as TechnologyComparisonContent

        // Fix all text fields including number ranges
        const fixedContent = fixAllTextFields(parsedContent)

        // Set the content state
        setContent(fixedContent)
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
  const sectionIds = (content.sidebarTOC || []).map((item) => createSectionId(item))

  // Define standard section titles for Technology Comparison
  const standardSections = [
    "Why This Comparison Matters",
    "Key Insights",
    "Who Should Read This Comparison",
    "Technology Overview",
    "Comparison Table",
    "Supporting Data",
    "Industry Recommendations",
    "Use Cases Comparison",
    "Pros and Cons",
    "Decision Framework",
    "Deployment Considerations",
    "Challenges and Mitigations",
    "Expert Commentary",
    "Expert Tips",
    "Conclusion",
    "Related Reads",
  ]

  // Use the TOC from the content, or fall back to standard sections
  const toc = content.sidebarTOC?.length ? content.sidebarTOC : standardSections

  // Get technology names from comparison table
  const techNames = content.comparisonTable?.technologies || []

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar for desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <TechnologyComparisonSidebar
                toc={toc}
                title={article.title}
                publishDate={article.publish_date}
                author={article.author}
                readingTime={article.reading_time_minutes}
                sectionIds={sectionIds}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-3xl">
            <TechnologyComparisonHeader
              title={content.title || article.title}
              subtitle={content.pageHeader?.subtitle || ""}
              tags={content.pageHeader?.tags || []}
              publishDate={article.publish_date}
              author={article.author}
            />

            {/* Introduction Section */}
            <section id={sectionIds[0] || "intro"}>
              <TechnologyComparisonIntro
                headline={content.introSummary?.headline || "Why This Comparison Matters"}
                summaryBullets={
                  Array.isArray(content.introSummary?.summaryBullets) ? content.introSummary.summaryBullets : []
                }
              />
            </section>

            {/* Key Insights Section */}
            {content.keyInsights && (
              <section id={sectionIds[1] || "key-insights"}>
                <TechnologyComparisonKeyInsights
                  table={content.keyInsights.table}
                  narrativeBox={content.keyInsights.narrativeBox}
                />
              </section>
            )}

            {/* Audience Section */}
            <section id={sectionIds[2] || "audience"}>
              <TechnologyComparisonAudience
                whoShouldRead={content.audienceDefinition?.whoShouldRead || "Who Should Read This Comparison"}
                whyItMatters={content.audienceDefinition?.whyItMatters || ""}
              />
            </section>

            {/* Technology Overview Section */}
            {content.technologyOverview && Array.isArray(content.technologyOverview.technologies) && (
              <section id={sectionIds[3] || "technology-overview"}>
                <TechnologyComparisonOverview technologies={content.technologyOverview.technologies} />
              </section>
            )}

            {/* Comparison Table Section */}
            {content.comparisonTable && (
              <section id={sectionIds[4] || "comparison-table"}>
                <TechnologyComparisonTable
                  technologies={content.comparisonTable.technologies || []}
                  features={content.comparisonTable.features || {}}
                />
              </section>
            )}

            {/* Supporting Data Section */}
            {content.supportingData && (
              <section id={sectionIds[5] || "supporting-data"}>
                <TechnologyComparisonSupportingData
                  charts={content.supportingData.charts || []}
                  dataPoints={content.supportingData.dataPoints || []}
                  table={content.supportingData.table}
                  visual={content.supportingData.visual}
                />
              </section>
            )}

            {/* Industry Recommendations Section */}
            <section id={sectionIds[6] || "industry-recommendations"}>
              <TechnologyComparisonIndustryRecommendations
                items={content.industryRecommendations?.items}
                table={content.industryRecommendations?.table}
              />
            </section>

            {/* Use Cases Comparison Section */}
            <section id={sectionIds[7] || "use-cases"}>
              <TechnologyComparisonUseCases
                items={content.useCasesComparison?.items}
                table={content.useCasesComparison?.table}
                techNames={techNames}
              />
            </section>

            {/* Pros and Cons Section */}
            <section id={sectionIds[8] || "pros-and-cons"}>
              <TechnologyComparisonProsAndCons
                techA={content.prosAndCons?.techA}
                techB={content.prosAndCons?.techB}
                techC={content.prosAndCons?.techC}
                techD={content.prosAndCons?.techD}
                technologies={content.prosAndCons?.technologies}
                techNames={techNames}
              />
            </section>

            {/* Decision Framework Section */}
            <section id={sectionIds[9] || "decision-framework"}>
              <TechnologyComparisonDecisionFramework
                items={content.decisionMatrix?.items}
                table={content.decisionMatrix?.table}
              />
            </section>

            {/* Deployment Considerations Section */}
            <section id={sectionIds[10] || "deployment-considerations"}>
              <TechnologyComparisonDeployment
                technologies={content.deploymentConsiderations?.technologies}
                table={content.deploymentConsiderations?.table}
              />
            </section>

            {/* Challenges and Mitigations Section */}
            <section id={sectionIds[11] || "challenges"}>
              <TechnologyComparisonChallenges
                items={content.challengesMitigations?.items}
                table={content.challengesMitigations?.table}
              />
            </section>

            {/* Expert Commentary Section */}
            <section id={sectionIds[12] || "expert-commentary"}>
              <TechnologyComparisonExpertCommentary
                commentary={content.expertCommentary}
                expertVoice={content.expertVoice}
              />
            </section>

            {/* Expert Tips Section */}
            {content.expertTips && Array.isArray(content.expertTips) && (
              <section id={sectionIds[13] || "expert-tips"}>
                <TechnologyComparisonExpertTips tips={content.expertTips} />
              </section>
            )}

            {/* Conclusion Section */}
            <section id={sectionIds[14] || "conclusion"}>
              <TechnologyComparisonConclusion summary={content.conclusion?.summary || ""} />
            </section>

            {/* Related Reads Section */}
            {content.relatedReads && content.relatedReads.articles && Array.isArray(content.relatedReads.articles) && (
              <section id={sectionIds[15] || "related-reads"}>
                <TechnologyComparisonRelatedReads relatedReads={content.relatedReads} />
              </section>
            )}

            {/* Mobile CTA */}
            {content.callToAction && content.callToAction.text && (
              <div className="lg:hidden my-12">
                <TechnologyComparisonCallToAction
                  text={content.callToAction.text}
                  buttonText="Contact an RTLS Expert"
                  buttonLink={content.callToAction.buttonLink}
                />
              </div>
            )}

            {/* Citations */}
            {content.citations && Array.isArray(content.citations) && content.citations.length > 0 && (
              <section id="citations">
                <TechnologyComparisonCitations citations={content.citations} />
              </section>
            )}
          </div>

          {/* Right sidebar for CTA */}
          {content.callToAction && content.callToAction.text && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TechnologyComparisonCallToAction
                  text={content.callToAction.text}
                  buttonText="Contact an RTLS Expert"
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

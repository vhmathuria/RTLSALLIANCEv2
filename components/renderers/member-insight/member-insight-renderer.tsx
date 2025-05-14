"use client"

import { useState, useEffect } from "react"
import type { Article } from "@/types/article"
import { fixSpecialChars, createIdFromText } from "@/lib/utils"
import MemberInsightHeader from "./member-insight-header"
import MemberInsightIntroSummary from "./member-insight-intro-summary"
import MemberInsightKeyInsights from "./member-insight-key-insights"
import MemberInsightAudience from "./member-insight-audience"
import MemberInsightCoreConcepts from "./member-insight-core-concepts"
import MemberInsightInsightOrigin from "./member-insight-insight-origin"
import MemberInsightSupportingData from "./member-insight-supporting-data"
import MemberInsightMarketImplications from "./member-insight-market-implications"
import MemberInsightUseCases from "./member-insight-use-cases"
import MemberInsightStepByStep from "./member-insight-step-by-step"
import MemberInsightChallenges from "./member-insight-challenges"
import MemberInsightExpertVoice from "./member-insight-expert-voice"
import MemberInsightExpertTips from "./member-insight-expert-tips"
import MemberInsightConclusion from "./member-insight-conclusion"
import MemberInsightCallToAction from "./member-insight-call-to-action"
import MemberInsightRelatedReads from "./member-insight-related-reads"
import MemberInsightCitations from "./member-insight-citations"
import MemberInsightSidebar from "./member-insight-sidebar"

interface MemberInsightRendererProps {
  article: Article
}

export default function MemberInsightRenderer({ article }: MemberInsightRendererProps) {
  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
  const toc = (content.sidebarTOC || []).filter((item) => item !== "Case Studies")
  const sectionIds = toc.map((item: string) => createIdFromText(item))

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar for desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <MemberInsightSidebar
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
          <div className="flex-1 max-w-3xl">
            <MemberInsightHeader
              title={content.title || article.title}
              subtitle={content.pageHeader?.subtitle || ""}
              tags={content.pageHeader?.tags || []}
              publishDate={article.publish_date}
              author={article.author}
            />

            {/* Intro Summary */}
            {content.introSummary && (
              <section id={sectionIds[0] || "why-this-insight-matters"}>
                <MemberInsightIntroSummary
                  headline={content.introSummary.headline || "Why This Insight Matters"}
                  summaryBullets={content.introSummary.summaryBullets || []}
                />
              </section>
            )}

            {/* Key Insights */}
            {content.keyInsights && (
              <section id={sectionIds[1] || "key-insights"}>
                <MemberInsightKeyInsights narrativeBox={content.keyInsights.narrativeBox} />
              </section>
            )}

            {/* Audience Definition */}
            {content.audienceDefinition && (
              <section id={sectionIds[2] || "financial-strategists"}>
                <MemberInsightAudience
                  whoShouldRead={content.audienceDefinition.whoShouldRead || ""}
                  whyItMatters={content.audienceDefinition.whyItMatters || ""}
                />
              </section>
            )}

            {/* Core Concepts */}
            {content.coreConcepts && content.coreConcepts.length > 0 && (
              <section id={sectionIds[3] || "core-concepts"}>
                <MemberInsightCoreConcepts concepts={content.coreConcepts} />
              </section>
            )}

            {/* Insight Origin */}
            {content.insightOrigin && (
              <section id={sectionIds[4] || "trend-or-insight-origin"}>
                <MemberInsightInsightOrigin
                  background={content.insightOrigin.background || ""}
                  sources={content.insightOrigin.sources || []}
                />
              </section>
            )}

            {/* Supporting Data */}
            {content.supportingData && (
              <section id={sectionIds[5] || "supporting-data"}>
                <MemberInsightSupportingData
                  dataPoints={content.supportingData.dataPoints || []}
                  visual={content.supportingData.visual || null}
                />
              </section>
            )}

            {/* Market Implications */}
            {content.marketImplications && (
              <section id={sectionIds[6] || "technology-and-market-implications"}>
                <MemberInsightMarketImplications
                  technology={content.marketImplications.technology || []}
                  vendors={content.marketImplications.vendors || []}
                  buyers={content.marketImplications.buyers || []}
                  futureOutlook={content.marketImplications.futureOutlook || []}
                  impactProfile={content.marketImplications.impactProfile || []}
                />
              </section>
            )}

            {/* Use Cases or Trends */}
            {content.useCasesOrTrends && (
              <section id={sectionIds[7] || "use-cases-or-trends"}>
                <MemberInsightUseCases
                  items={content.useCasesOrTrends.items || []}
                  table={content.useCasesOrTrends.table || null}
                />
              </section>
            )}

            {/* Step-by-Step Roadmap */}
            {content.stepByStep && (
              <section id={sectionIds[9] || "step-by-step-roadmap"}>
                <MemberInsightStepByStep
                  steps={content.stepByStep.steps || []}
                  table={content.stepByStep.table || null}
                />
              </section>
            )}

            {/* Challenges and Mitigations */}
            {content.challengesMitigations && (
              <section id={sectionIds[10] || "challenges-and-mitigations"}>
                <MemberInsightChallenges
                  items={content.challengesMitigations.items || []}
                  table={content.challengesMitigations.table || null}
                />
              </section>
            )}

            {/* Expert Voice */}
            {content.expertVoice && (
              <section id={sectionIds[11] || "expert-commentary"}>
                <MemberInsightExpertVoice
                  quote={content.expertVoice.quote || ""}
                  name={content.expertVoice.name || ""}
                  role={content.expertVoice.role || ""}
                />
              </section>
            )}

            {/* Expert Tips */}
            {content.expertTips && content.expertTips.length > 0 && (
              <section id={sectionIds[12] || "expert-tips"}>
                <MemberInsightExpertTips tips={content.expertTips} />
              </section>
            )}

            {/* Conclusion */}
            {content.conclusion && (
              <section id={sectionIds[13] || "conclusion"}>
                <MemberInsightConclusion summary={content.conclusion.summary || ""} />
              </section>
            )}

            {/* Related Reads */}
            {content.relatedReads && content.relatedReads.articles && (
              <section id={sectionIds[14] || "related-reads"}>
                <MemberInsightRelatedReads
                  articles={content.relatedReads.articles || []}
                  lastUpdated={content.relatedReads.lastUpdated || ""}
                />
              </section>
            )}

            {/* Citations */}
            {content.citations && content.citations.length > 0 && (
              <section id="citations">
                <MemberInsightCitations citations={content.citations} />
              </section>
            )}

            {/* Mobile CTA */}
            {content.callToAction && (
              <div className="lg:hidden my-12">
                <MemberInsightCallToAction
                  text={content.callToAction.text || ""}
                  buttonText={content.callToAction.buttonText || ""}
                  buttonLink={content.callToAction.buttonLink || ""}
                />
              </div>
            )}
          </div>

          {/* Right sidebar for CTA */}
          {content.callToAction && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <MemberInsightCallToAction
                  text={content.callToAction.text || ""}
                  buttonText={content.callToAction.buttonText || ""}
                  buttonLink={content.callToAction.buttonLink || ""}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import type { Article, GuideContent } from "@/types/article"
import { fixSpecialChars } from "@/lib/utils"
import { inspectRichTextStructure } from "@/lib/debug-utils"
import GuideHeader from "./guide-header"
import GuideIntro from "./guide-intro"
import GuidePrerequisites from "./guide-prerequisites"
import GuideConcepts from "./guide-concepts"
import GuideSteps from "./guide-steps"
import GuideDecisionFramework from "./guide-decision-framework"
import GuideResources from "./guide-resources"
import GuideMistakes from "./guide-mistakes"
import GuideTips from "./guide-tips"
import GuideConclusion from "./guide-conclusion"
import GuideCallToAction from "./guide-call-to-action"
import GuideCitations from "./guide-citations"
import GuideRelatedReads from "./guide-related-reads"
import GuideSidebar from "./guide-sidebar"

interface GuideRendererProps {
  article: Article
}

export default function GuideRenderer({ article }: GuideRendererProps) {
  const [content, setContent] = useState<GuideContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [structure, setStructure] = useState<Record<string, any>>({})

  // Helper function to create consistent section IDs
  const createSectionId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  useEffect(() => {
    if (article && article.rich_text) {
      try {
        // Inspect the structure for debugging
        const structureMap = inspectRichTextStructure(article.rich_text)
        setStructure(structureMap)

        const parsedContent = JSON.parse(article.rich_text) as GuideContent

        // Fix special characters in all text fields recursively
        const fixAllSpecialChars = (obj: any): any => {
          if (!obj) return obj

          if (typeof obj === "string") {
            return fixSpecialChars(obj)
          }

          if (Array.isArray(obj)) {
            return obj.map((item) => fixAllSpecialChars(item))
          }

          if (typeof obj === "object") {
            const result: any = {}
            for (const key in obj) {
              result[key] = fixAllSpecialChars(obj[key])
            }
            return result
          }

          return obj
        }

        // Fix the TOC items to match section titles
        const fixedContent = fixAllSpecialChars(parsedContent)

        // Ensure the second TOC item is "Who Should Read This Guide"
        if (fixedContent.sidebarTOC && fixedContent.sidebarTOC.length > 1) {
          fixedContent.sidebarTOC[1] = "Who Should Read This Guide"
        }

        setContent(fixedContent)
      } catch (error) {
        console.error("Error parsing rich_text:", error)
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

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Content Not Available</h2>
          <p className="text-gray-600 mt-2">The article content could not be loaded.</p>
        </div>
      </div>
    )
  }

  // Create a mapping of section titles to IDs for consistent scrolling
  const sectionIds = content.sidebarTOC.map((item) => createSectionId(item))

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar for desktop - reduced width from w-72 to w-64 */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <GuideSidebar
                toc={content.sidebarTOC}
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
            <GuideHeader
              title={content.title}
              subtitle={content.pageHeader.subtitle}
              tags={content.pageHeader.tags}
              publishDate={article.publish_date}
              author={article.author}
            />

            {/* Use consistent section IDs that match TOC items */}
            <section id={sectionIds[0]}>
              <GuideIntro
                headline={content.introSummary.headline}
                summaryBullets={content.introSummary.summaryBullets}
              />
            </section>

            <section id="prerequisites" className="my-12">
              <GuidePrerequisites knowledge={content.prerequisites.knowledge} />
            </section>

            <section id={sectionIds[1]} className="my-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Who Should Read This Guide
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{content.audienceDefinition.whoShouldRead}</h3>
                <p className="text-gray-700">{content.audienceDefinition.whyItMatters}</p>
              </div>
            </section>

            <section id={sectionIds[2]}>
              <GuideConcepts concepts={content.coreConcepts} />
            </section>

            {content.stepByStep && content.stepByStep.length > 0 && (
              <section id={sectionIds[3]}>
                <GuideSteps steps={content.stepByStep} />
              </section>
            )}

            {content.decisionFramework && content.decisionFramework.length > 0 && (
              <section id={sectionIds[4]}>
                <GuideDecisionFramework framework={content.decisionFramework} />
              </section>
            )}

            {content.resources && content.resources.length > 0 && (
              <section id={sectionIds[5]}>
                <GuideResources resources={content.resources} />
              </section>
            )}

            {content.mistakesToAvoid && content.mistakesToAvoid.length > 0 && (
              <section id={sectionIds[6]}>
                <GuideMistakes mistakes={content.mistakesToAvoid} />
              </section>
            )}

            {content.expertTips && content.expertTips.length > 0 && (
              <section id={sectionIds[7]}>
                <GuideTips tips={content.expertTips} />
              </section>
            )}

            <section id={sectionIds[8]}>
              <GuideConclusion summary={content.conclusion.summary} />
            </section>

            {/* Mobile CTA */}
            <div className="lg:hidden my-12">
              <GuideCallToAction
                text={content.callToAction.text}
                buttonText={content.callToAction.buttonText}
                buttonLink={content.callToAction.buttonLink}
              />
            </div>

            {content.citations && content.citations.length > 0 && (
              <section id="citations">
                <GuideCitations citations={content.citations} />
              </section>
            )}

            {content.relatedReads && Array.isArray(content.relatedReads) && content.relatedReads.length > 0 && (
              <section id={sectionIds[9]}>
                <GuideRelatedReads relatedReads={content.relatedReads} />
              </section>
            )}
          </div>

          {/* Right sidebar for CTA - reduced width from w-72 to w-64 */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <GuideCallToAction
                text={content.callToAction.text}
                buttonText={content.callToAction.buttonText}
                buttonLink={content.callToAction.buttonLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

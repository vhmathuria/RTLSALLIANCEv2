export interface MemberInsightContent {
  title: string
  pageHeader: {
    subtitle: string
    tags: string[]
  }
  executiveSummary: {
    headline: string
    highlights: string[]
    keyPoints?: string[]
  }
  sidebarTOC: string[]
  businessContext: {
    overview: string
    challenges: string[]
    opportunities: string[]
    marketTrends?: string[]
    image?: string
  }
  insightDetails: {
    sections: Array<{
      title: string
      content: string
      bulletPoints?: string[]
      image?: {
        url: string
        caption: string
      }
    }>
  }
  dataAnalysis?: {
    overview: string
    findings: Array<{
      metric: string
      value: string
      insight: string
    }>
    visualization?: {
      type: string
      data: any
      description: string
      imageUrl?: string
    }
  }
  strategicRecommendations: {
    overview: string
    recommendations: Array<{
      title: string
      description: string
      impact: string
      timeline?: string
    }>
  }
  implementationGuidance?: {
    steps: Array<{
      step: string
      description: string
      considerations: string[]
    }>
    resources?: Array<{
      title: string
      type: string
      link: string
    }>
  }
  caseStudies?: Array<{
    company: string
    industry: string
    challenge: string
    solution: string
    results: string
    link?: string
  }>
  expertPerspective?: {
    quote: string
    author: string
    role: string
    company: string
    image?: string
  }
  conclusion: {
    summary: string
    nextSteps?: string[]
  }
  callToAction: {
    text: string
    buttonText: string
    buttonLink: string
  }
  relatedInsights?: Array<{
    title: string
    slug: string
    description?: string
  }>
  references?: Array<{
    title: string
    source: string
    link?: string
  }>
}

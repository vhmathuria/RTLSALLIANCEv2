export interface ArticleTemplate {
  template: string
  schema: string
  created_at?: string
  updated_at?: string
}

export interface Article {
  title: string
  slug: string
  publish_date: string
  author: string
  meta_description: string
  content_type: string
  tags: string
  access_level: string
  rich_text: string
  thumbnail_image?: string
  reading_time_minutes?: number
  view_count?: string
  created_at?: string
  updated_at?: string
}

export interface GuideContent {
  title: string
  pageHeader: {
    subtitle: string
    tags: string[]
  }
  introSummary: {
    headline: string
    summaryBullets: string[]
  }
  prerequisites: {
    knowledge: string[]
  }
  sidebarTOC: string[]
  audienceDefinition: {
    whoShouldRead: string
    whyItMatters: string
  }
  coreConcepts: Array<{
    term: string
    definition: string
    example: string
    visual?: {
      description: string
      link: string
    }
  }>
  stepByStep: Array<{
    step: string
    details: string
    challenges: string[]
  }>
  decisionFramework: Array<{
    factor: string
    question: string
    guidance: {
      Yes: string
      No: string
    }
  }>
  resources: Array<{
    type: string
    name: string
    description: string
    link: string
  }>
  mistakesToAvoid: string[]
  expertTips: string[]
  conclusion: {
    summary: string
  }
  callToAction: {
    text: string
    buttonText: string
    buttonLink: string
  }
  citations?: Array<{
    ref: string
    source: string
  }>
  relatedReads?: Array<{
    title: string
    slug: string
  }>
}

export interface TechnologyComparisonContent {
  title: string
  pageHeader: {
    subtitle: string
    tags: string[]
  }
  introSummary: {
    headline: string
    summaryBullets: string[]
  }
  keyInsights: {
    table: {
      columns: string[]
      rows: Array<{
        Insight: string
        Detail: string
        Impact: string
      }>
    }
    narrativeBox: {
      title: string
      content: string
    }
  }
  sidebarTOC: string[]
  audienceDefinition: {
    whoShouldRead: string
    whyItMatters: string
  }
  technologyOverview: {
    technologies: Array<{
      name: string
      description: string
    }>
  }
  comparisonTable: {
    technologies: string[]
    features: Record<string, string[]>
  }
  supportingData?: {
    charts?: Array<{
      title: string
      description: string
      chartType: string
      data: any
      imageUrl?: string
    }>
    dataPoints?: Array<{
      metric: string
      value: string
      source: string
      implication: string
    }>
    table?: {
      columns: string[]
      rows: Array<{
        Metric: string
        Value: string
        Source: string
        Implication: string
      }>
    }
    visual?: {
      description: string
      link: string
    }
  }
  industryRecommendations?:
    | Array<{
        industry: string
        recommendation: string
        rationale: string
      }>
    | {
        items?: Array<{
          industry: string
          recommendedTech: string
          reason: string
        }>
        table?: {
          columns: string[]
          rows: Array<{
            Industry: string
            "Recommended Tech": string
            Reason: string
          }>
        }
      }
  useCasesComparison?:
    | Array<{
        useCase: string
        techAPerformance: string
        techBPerformance: string
        techCPerformance?: string
        techDPerformance?: string
        recommendation: string
      }>
    | {
        items?: Array<{
          industry: string
          scenario: string
          verdict: {
            recommended: string
            reason: string
          }
        }>
        table?: {
          columns: string[]
          rows: Array<{
            Industry: string
            Scenario: string
            "Recommended Tech": string
            Reason: string
          }>
        }
      }
  prosAndCons?: {
    techA?: {
      pros: string[]
      cons: string[]
    }
    techB?: {
      pros: string[]
      cons: string[]
    }
    techC?: {
      pros: string[]
      cons: string[]
    }
    techD?: {
      pros: string[]
      cons: string[]
    }
    technologies?: Array<{
      name: string
      pros: string[]
      cons: string[]
    }>
    table?: {
      columns: string[]
      rows: Array<{
        Technology: string
        Pros: string
        Cons: string
      }>
    }
  }
  decisionFramework?:
    | Array<{
        factor: string
        question: string
        guidance: string
      }>
    | {
        items?: Array<{
          factor: string
          question: string
          guidance: {
            UWB: string
            "WiFi RTT": string
          }
        }>
        table?: {
          columns: string[]
          rows: Array<{
            Factor: string
            Question: string
            "Tech A Guidance": string
            "Tech B Guidance": string
          }>
        }
      }
  decisionMatrix?: {
    items?: Array<{
      factor: string
      question: string
      guidance: {
        UWB: string
        "WiFi RTT": string
      }
    }>
    table?: {
      columns: string[]
      rows: Array<{
        Factor: string
        Question: string
        "Tech A Guidance": string
        "Tech B Guidance": string
      }>
    }
  }
  deploymentConsiderations?:
    | Array<{
        consideration: string
        details: string
      }>
    | {
        technologies?: Array<{
          name: string
          steps: string[]
          pitfalls: string[]
        }>
        table?: {
          columns: string[]
          rows: Array<{
            Technology: string
            Steps: string
            Pitfalls: string
          }>
        }
      }
  challengesAndMitigations?:
    | Array<{
        challenge: string
        mitigation: string
      }>
    | {
        items?: Array<{
          challenge: string
          mitigation: string
        }>
        table?: {
          columns: string[]
          rows: Array<{
            Challenge: string
            Mitigation: string
          }>
        }
      }
  challengesMitigations?: {
    items?: Array<{
      challenge: string
      mitigation: string
    }>
    table?: {
      columns: string[]
      rows: Array<{
        Challenge: string
        Mitigation: string
      }>
    }
  }
  expertCommentary?:
    | Array<{
        expert: string
        comment: string
        affiliation: string
      }>
    | {
        quote?: string
        name?: string
        role?: string
      }
  expertVoice?: {
    quote: string
    name: string
    role: string
  }
  expertTips?: string[]
  conclusion: {
    summary: string
  }
  callToAction: {
    text: string
    buttonText: string
    buttonLink: string
  }
  citations?: Array<{
    ref: string
    source: string
  }>
  relatedReads?: Array<{
    title: string
    slug: string
  }>
}

export interface SuccessStoryContent {
  title: string
  pageHeader: {
    subtitle: string
    tags: string[]
  }
  introSummary: {
    headline: string
    summaryBullets: string[]
  }
  keyResults: Array<{
    metric: string
    value: string
    context?: string
  }>
  sidebarTOC: string[]
  clientProfile: {
    name: string
    industry: string
    location: string
    size: string
    background: string
    logo?: string
    image?: string
  }
  challenge: {
    overview: string
    painPoints: string[]
    businessImpact: string
    previousSolutions: string
    image?: string
  }
  solution: {
    overview: string
    technologies: Array<{
      name: string
      description: string
    }>
    approach: string
    uniqueValue: string
    image?: string
  }
  implementation: {
    timeline: string
    phases: Array<{
      name: string
      description: string
      duration: string
    }>
    challenges: string[]
    teamStructure: string
    image?: string
  }
  results: {
    overview: string
    metrics: Array<{
      label: string
      value: string
      improvement: string
      context?: string
    }>
    businessImpact: string
    roi: string
    image?: string
  }
  testimonial: {
    quote: string
    author: string
    position: string
    company: string
    image?: string
  }
  lessonsLearned: {
    overview: string
    keyLessons: string[]
    bestPractices: string[]
  }
  conclusion: {
    summary:
      | string
      | {
          summary?: string
          text?: string
        }
  }
  callToAction: {
    text: string
    buttonText: string
    buttonLink: string
  }
  crossIndustryInsights?:
    | string
    | {
        insights?: string
        table?: any
      }
  industryRecommendations?:
    | string
    | {
        industry?: string
        recommendations?: string | any
      }
    | Array<{
        industry?: string
        recommendations?: string | any
      }>
  keyTakeaways?: {
    overview?: string
    points?: string[]
  }
  nextSteps?:
    | string
    | {
        steps?: string
        timeline?: any
      }
  citations?: Array<{
    ref: string
    source: string
  }>
  relatedReads?: Array<{
    title: string
    slug: string
  }>
}

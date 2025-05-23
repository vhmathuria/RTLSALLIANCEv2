/**
 * Comprehensive list of all articles with their slugs and related articles
 * This can be referenced throughout the project when linking to related resources
 */

export interface ArticleData {
  slug: string
  title: string
  relatedSlugs: string[]
}

export const articles: ArticleData[] = [
  {
    slug: "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    title: "5 RTLS Trends 2025: AI, 5G NR & Tag-free Tracking",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
    ],
  },
  {
    slug: "automotive-oem-40-throughput-boost-uwb-rtls",
    title: "Automotive OEM Case Study: 4.2% Throughput Boost with UWB RTLS",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
    ],
  },
  {
    slug: "ble-positioning-rssi-aoa-fingerprinting-explained",
    title: "BLE Positioning: RSSI, AoA & Fingerprinting Explained",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
      "rtls-101-core-components-protocols-deployment-models",
      "ble-vs-rfid-pros-cons-asset-tracking",
      "wifi-rtt-vs-ble-best-indoor-navigation",
    ],
  },
  {
    slug: "ble-rtls-fod-prevention-manufacturing-success-story",
    title: "BLE RTLS FOD Prevention: Manufacturing Success Story",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "enterprise-rtls-step-by-step-implementation-guide",
    ],
  },
  {
    slug: "ble-vs-rfid-pros-cons-asset-tracking",
    title: "BLE vs RFID: Pros & Cons for Asset Tracking",
    relatedSlugs: [
      "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "tag-battery-management-extend-rtls-uptime",
    ],
  },
  {
    slug: "ble-vs-uwb-cost-accuracy-deployment-comparison",
    title: "BLE vs UWB: Cost, Accuracy & Deployment Comparison",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "enterprise-rtls-step-by-step-implementation-guide",
    ],
  },
  {
    slug: "ble-vs-visual-slam-rtls-healthcare-asset-tracking",
    title: "BLE vs Visual SLAM: RTLS for Healthcare Asset Tracking",
    relatedSlugs: [
      "hospital-asset-tracking-1-2m-savings-rtls",
      "equipment-search-time-healthcare-ble-rtls",
      "rtls-in-healthcare-patient-safety-roi-insights",
      "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
    ],
  },
  {
    slug: "building-rtls-dashboards-kpis-analytics",
    title: "Building RTLS Dashboards: KPIs & Analytics for Real-Time Data",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
      "rtls-digital-twins-synchronizing-spatial-operational-data",
      "enterprise-rtls-step-by-step-implementation-guide",
    ],
  },
  {
    slug: "enterprise-rtls-step-by-step-implementation-guide",
    title: "Enterprise RTLS: Step-by-Step Implementation Guide",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "rf-site-survey-rtls-planning-density-best-practices",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
    ],
  },
  {
    slug: "equipment-search-time-healthcare-ble-rtls",
    title: "73% Reduction in Equipment Search Time in Healthcare with BLE RTLS",
    relatedSlugs: [
      "hospital-asset-tracking-1-2m-savings-rtls",
      "rtls-in-healthcare-patient-safety-roi-insights",
      "ble-vs-visual-slam-rtls-healthcare-asset-tracking",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
    ],
  },
  {
    slug: "hospital-asset-tracking-1-2m-savings-rtls",
    title: "Hospital Asset Tracking: $1.2 M Savings with RTLS",
    relatedSlugs: [
      "equipment-search-time-healthcare-ble-rtls",
      "rtls-in-healthcare-patient-safety-roi-insights",
      "ble-vs-visual-slam-rtls-healthcare-asset-tracking",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "how-uwb-works-time-of-flight-tdoa-deep-dive",
    title: "How UWB Works: Time-of-Flight & TDoA Deep Dive",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
      "uwb-vs-wifi-rtt-precision-showdown",
      "uwb-vs-rfid-cost-benefit-rtls",
      "automotive-oem-40-throughput-boost-uwb-rtls",
    ],
  },
  {
    slug: "hybrid-rtls-retail-customer-flow-revenue-uplift",
    title: "Hybrid RTLS in Retail: Customer Flow & Revenue Uplift",
    relatedSlugs: [
      "success-story-ble-rtls-retail-conversion-rate",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
    ],
  },
  {
    slug: "integrating-rtls-with-iot-apis-middleware-data-flows",
    title: "Integrating RTLS with IoT: APIs, Middleware & Data Flows",
    relatedSlugs: [
      "rtls-digital-twins-synchronizing-spatial-operational-data",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-101-core-components-protocols-deployment-models",
      "enterprise-rtls-step-by-step-implementation-guide",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "member-spotlight-global-rtls-lessons-learned",
    title: "Member Spotlight: Global RTLS Lessons Learned",
    relatedSlugs: [
      "enterprise-rtls-step-by-step-implementation-guide",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "building-rtls-dashboards-kpis-analytics",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    ],
  },
  {
    slug: "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
    title: "RFID vs Barcode vs BLE: Asset Tracking Technology Comparison",
    relatedSlugs: [
      "ble-vs-rfid-pros-cons-asset-tracking",
      "uwb-vs-rfid-cost-benefit-rtls",
      "rfid-vs-nfc-contactless-transactions-rtls",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "tag-battery-management-extend-rtls-uptime",
    ],
  },
  {
    slug: "rfid-vs-nfc-contactless-transactions-rtls",
    title: "RFID vs NFC: Contactless Transactions for RTLS",
    relatedSlugs: [
      "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
      "ble-vs-rfid-pros-cons-asset-tracking",
      "uwb-vs-rfid-cost-benefit-rtls",
      "rtls-101-core-components-protocols-deployment-models",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rf-site-survey-rtls-planning-density-best-practices",
    title: "RF Site Survey for RTLS: Planning, Density & Best Practices",
    relatedSlugs: [
      "enterprise-rtls-step-by-step-implementation-guide",
      "rtls-101-core-components-protocols-deployment-models",
      "wifi-rtt-vs-ble-best-indoor-navigation",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rtls-101-core-components-protocols-deployment-models",
    title: "RTLS 101: Core Components, Protocols & Deployment Models",
    relatedSlugs: [
      "enterprise-rtls-step-by-step-implementation-guide",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "rf-site-survey-rtls-planning-density-best-practices",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
    ],
  },
  {
    slug: "rtls-digital-twins-synchronizing-spatial-operational-data",
    title: "RTLS & Digital Twins: Synchronizing Spatial and Operational Data",
    relatedSlugs: [
      "integrating-rtls-with-iot-apis-middleware-data-flows",
      "building-rtls-dashboards-kpis-analytics",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    ],
  },
  {
    slug: "rtls-in-healthcare-patient-safety-roi-insights",
    title: "RTLS in Healthcare: Patient Safety & ROI Insights",
    relatedSlugs: [
      "hospital-asset-tracking-1-2m-savings-rtls",
      "equipment-search-time-healthcare-ble-rtls",
      "ble-vs-visual-slam-rtls-healthcare-asset-tracking",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rtls-roi-quantify-efficiency-gains-cost-savings",
    title: "RTLS ROI: Quantify Efficiency Gains & Cost Savings",
    relatedSlugs: [
      "building-rtls-dashboards-kpis-analytics",
      "hospital-asset-tracking-1-2m-savings-rtls",
      "automotive-oem-40-throughput-boost-uwb-rtls",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "enterprise-rtls-step-by-step-implementation-guide",
    ],
  },
  {
    slug: "rtls-security-encryption-authentication-privacy-best-practices",
    title: "RTLS Security: Encryption, Authentication & Privacy Best Practices",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "enterprise-rtls-step-by-step-implementation-guide",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
      "rtls-in-healthcare-patient-safety-roi-insights",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    ],
  },
  {
    slug: "smart-warehousing-rtls-use-cases-automated-fulfillment",
    title: "Smart Warehousing: RTLS Use Cases for Automated Fulfillment",
    relatedSlugs: [
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-digital-twins-synchronizing-spatial-operational-data",
      "automotive-oem-40-throughput-boost-uwb-rtls",
    ],
  },
  {
    slug: "success-story-ble-rtls-retail-conversion-rate",
    title: "47% Increase in Conversion Rates in Retail with BLE RTLS",
    relatedSlugs: [
      "hybrid-rtls-retail-customer-flow-revenue-uplift",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "building-rtls-dashboards-kpis-analytics",
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
    ],
  },
  {
    slug: "tag-battery-management-extend-rtls-uptime",
    title: "Tag Battery Management: Extend RTLS Uptime",
    relatedSlugs: [
      "ble-vs-rfid-pros-cons-asset-tracking",
      "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
      "rtls-101-core-components-protocols-deployment-models",
      "enterprise-rtls-step-by-step-implementation-guide",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
    title: "UWB, BLE, RFID & WiFi RTT: Ultimate RTLS Technology Showdown",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "ble-vs-rfid-pros-cons-asset-tracking",
      "uwb-vs-wifi-rtt-precision-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    ],
  },
  {
    slug: "uwb-vs-ble-which-rtls-tech-fits-use-case",
    title: "UWB vs BLE: Which RTLS Tech Fits Your Use Case?",
    relatedSlugs: [
      "ble-vs-uwb-cost-accuracy-deployment-comparison",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
    ],
  },
  {
    slug: "uwb-vs-gps-indoor-outdoor-tracking-guide",
    title: "UWB vs GPS: Indoor vs Outdoor Tracking Guide",
    relatedSlugs: [
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "rtls-101-core-components-protocols-deployment-models",
      "uwb-vs-wifi-rtt-precision-showdown",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    ],
  },
  {
    slug: "uwb-vs-rfid-cost-benefit-rtls",
    title: "UWB vs RFID: Cost-Benefit Analysis for RTLS",
    relatedSlugs: [
      "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "ble-vs-rfid-pros-cons-asset-tracking",
    ],
  },
  {
    slug: "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
    title: "UWB vs Vision RTLS: Accuracy vs Contextual Tracking",
    relatedSlugs: [
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
    ],
  },
  {
    slug: "uwb-vs-wifi-rtt-latency-accuracy-infrastructure-cost",
    title: "UWB vs WiFi RTT: Latency, Accuracy & Infrastructure Cost Comparison",
    relatedSlugs: [
      "uwb-vs-wifi-rtt-precision-showdown",
      "wifi-rtt-vs-ble-best-indoor-navigation",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
    ],
  },
  {
    slug: "uwb-vs-wifi-rtt-precision-showdown",
    title: "UWB vs WiFi RTT: Precision Positioning Showdown",
    relatedSlugs: [
      "uwb-vs-wifi-rtt-latency-accuracy-infrastructure-cost",
      "wifi-rtt-vs-ble-best-indoor-navigation",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
    ],
  },
  {
    slug: "vision-rtls-warehousing-60-percent-pick-time-improvement",
    title: "Vision RTLS in Warehousing: 60% Pick-Time Improvement",
    relatedSlugs: [
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
    ],
  },
  {
    slug: "vision-slam-vs-lidar-choosing-ideal-rtls",
    title: "Vision SLAM vs LiDAR: Choosing the Ideal RTLS",
    relatedSlugs: [
      "vision-slam-vs-lidar-vio-3d-mapping-rtls",
      "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
      "ble-vs-visual-slam-rtls-healthcare-asset-tracking",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
    ],
  },
  {
    slug: "vision-slam-vs-lidar-vio-3d-mapping-rtls",
    title: "Vision SLAM vs LiDAR vs VIO: 3D Mapping for RTLS",
    relatedSlugs: [
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
      "rtls-digital-twins-synchronizing-spatial-operational-data",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
      "rtls-101-core-components-protocols-deployment-models",
    ],
  },
  {
    slug: "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
    title: "Visual SLAM vs UWB vs LiDAR: Next-Gen Indoor Positioning",
    relatedSlugs: [
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "vision-slam-vs-lidar-vio-3d-mapping-rtls",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "ble-vs-visual-slam-rtls-healthcare-asset-tracking",
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
    ],
  },
  {
    slug: "wifi-rtt-vs-ble-best-indoor-navigation",
    title: "WiFi RTT vs BLE: Best Choice for Indoor Navigation",
    relatedSlugs: [
      "uwb-vs-wifi-rtt-precision-showdown",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rf-site-survey-rtls-planning-density-best-practices",
      "rtls-101-core-components-protocols-deployment-models",
    ],
  },
]

/**
 * Helper function to get BLE-related articles
 * Returns articles that have "ble" in their slug or title (case insensitive)
 */
export function getBLERelatedArticles(): ArticleData[] {
  return articles.filter(
    (article) => article.slug.toLowerCase().includes("ble") || article.title.toLowerCase().includes("ble"),
  )
}

/**
 * Helper function to get UWB-related articles
 * Returns articles that have "uwb" in their slug or title (case insensitive)
 */
export function getUWBRelatedArticles(): ArticleData[] {
  return articles.filter(
    (article) => article.slug.toLowerCase().includes("uwb") || article.title.toLowerCase().includes("uwb"),
  )
}

/**
 * Helper function to get related articles for a specific technology
 * @param technology - The technology to find related articles for (e.g., "ble", "uwb", "wifi")
 */
export function getTechnologyRelatedArticles(technology: string): ArticleData[] {
  return articles.filter(
    (article) =>
      article.slug.toLowerCase().includes(technology.toLowerCase()) ||
      article.title.toLowerCase().includes(technology.toLowerCase()),
  )
}

/**
 * Helper function to get an article by slug
 * @param slug - The article slug to find
 */
export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((article) => article.slug === slug)
}

/**
 * Helper function to get related articles by slug
 * @param slug - The article slug to find related articles for
 */
export function getRelatedArticlesBySlug(slug: string): ArticleData[] {
  const article = getArticleBySlug(slug)
  if (!article) return []

  return article.relatedSlugs
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((article): article is ArticleData => article !== undefined)
}

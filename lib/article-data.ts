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
    title: "5 RTLS Trends for 2025: AI, 5G NR & Tag-Free Tracking",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
    ],
  },
  {
    slug: "automotive-oem-uwb-45-minute-fod-savings",
    title: "Automotive OEM: UWB RTLS Saves 45 Min/Day in FOD",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "ble-positioning-rssi-aoa-fingerprinting-explained",
    title: "BLE Positioning: RSSI, AoA & Fingerprinting Explained",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "ble-rtls-fod-prevention-aerospace",
    title: "BLE RTLS: FOD Prevention in Aerospace",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "building-rtls-dashboards-kpis-analytics",
    title: "Building RTLS Dashboards: KPIs & Analytics for Real-Time Data",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "hospital-rtls-ble-uwb-hybrid",
    title: "Hospital RTLS: BLE & UWB Hybrid Saves 30 Min/Day",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "how-uwb-works-time-of-flight-tdoa-deep-dive",
    title: "How UWB Works: Time-of-Flight & TDoA Deep Dive",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "indoor-positioning-basics",
    title: "Indoor Positioning Basics: Technologies & Use Cases",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "integrating-rtls-with-iot-apis-middleware-data-flows",
    title: "Integrating RTLS with IoT: APIs, Middleware & Data Flows",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
    ],
  },
  {
    slug: "lidar-rtls-warehouse-30-minute-forklift-savings",
    title: "LiDAR RTLS: 30 Min/Day Forklift Savings in Warehousing",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
    title: "RFID vs Barcode vs BLE: Asset Tracking Technology Comparison",
    relatedSlugs: [
      "uwb-vs-rfid-cost-benefit-rtls",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rtls-101-core-components-protocols-deployment-models",
    title: "RTLS 101: Core Components, Protocols & Deployment Models",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "indoor-positioning-basics",
    ],
  },
  {
    slug: "rtls-roi-quantify-efficiency-gains-cost-savings",
    title: "RTLS ROI: Quantify Efficiency Gains & Cost Savings",
    relatedSlugs: [
      "building-rtls-dashboards-kpis-analytics",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rtls-security-encryption-authentication-privacy-best-practices",
    title: "RTLS Security: Encryption, Authentication & Privacy Best Practices",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "building-rtls-dashboards-kpis-analytics",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
    ],
  },
  {
    slug: "smart-warehousing-rtls-use-cases-automated-fulfillment",
    title: "Smart Warehousing: RTLS Use Cases for Automated Fulfillment",
    relatedSlugs: [
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
    title: "UWB, BLE, RFID & WiFi RTT: Ultimate RTLS Technology Showdown",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "uwb-vs-rfid-cost-benefit-rtls",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "uwb-vs-ble-which-rtls-tech-fits-use-case",
    title: "UWB vs BLE: Which RTLS Tech Fits Your Use Case?",
    relatedSlugs: [
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
    ],
  },
  {
    slug: "uwb-vs-gps-indoor-outdoor-tracking-guide",
    title: "UWB vs GPS: Indoor vs Outdoor Tracking Guide",
    relatedSlugs: [
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "uwb-vs-rfid-cost-benefit-rtls",
    title: "UWB vs RFID: Cost-Benefit Analysis for RTLS",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
    ],
  },
  {
    slug: "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
    title: "UWB vs Vision RTLS: Accuracy vs Contextual Tracking",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "uwb-vs-wifi-rtt-latency-accuracy-infrastructure-cost",
    title: "UWB vs WiFi RTT: Latency, Accuracy & Infrastructure Cost Comparison",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "uwb-vs-wifi-rtt-precision-showdown",
    title: "UWB vs WiFi RTT: Precision Positioning Showdown",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "uwb-vs-wifi-rtt-latency-accuracy-infrastructure-cost",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "vision-rtls-warehousing-60-percent-pick-time-improvement",
    title: "Vision RTLS in Warehousing: 60% Pick-Time Improvement",
    relatedSlugs: [
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "vision-slam-vs-lidar-choosing-ideal-rtls",
    title: "Vision SLAM vs LiDAR: Choosing the Ideal RTLS",
    relatedSlugs: [
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "vision-slam-vs-lidar-vio-3d-mapping-rtls",
    title: "Vision SLAM vs LiDAR vs VIO: 3D Mapping for RTLS",
    relatedSlugs: [
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
    title: "Visual SLAM vs UWB vs LiDAR: Next-Gen Indoor Positioning",
    relatedSlugs: [
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "wifi-rtt-vs-ble-best-indoor-navigation",
    title: "WiFi RTT vs BLE: Best Choice for Indoor Navigation",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "wifi-rtt-vs-uwb-scalability-precision-trade-offs",
    title: "WiFi RTT vs UWB: Scalability and Precision Trade-Offs",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "uwb-vs-wifi-rtt-latency-accuracy-infrastructure-cost",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "zigbee-vs-ble-low-power-rtls-iot",
    title: "Zigbee vs BLE: Low-Power RTLS for IoT",
    relatedSlugs: [
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
      "rtls-security-encryption-authentication-privacy-best-practices",
    ],
  },
  {
    slug: "rtls-deployment-guide",
    title: "RTLS Deployment Guide: From Planning to Optimization",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "rtls-use-cases-healthcare",
    title: "RTLS Use Cases in Healthcare: Enhancing Patient Care",
    relatedSlugs: [
      "hospital-rtls-ble-uwb-hybrid",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "rtls-use-cases-manufacturing",
    title: "RTLS Use Cases in Manufacturing: Streamlining Production",
    relatedSlugs: [
      "automotive-oem-uwb-45-minute-fod-savings",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "rtls-use-cases-retail",
    title: "RTLS Use Cases in Retail: Optimizing Customer Experience",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "rtls-use-cases-smart-cities",
    title: "RTLS Use Cases in Smart Cities: Urban Mobility Solutions",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "uwb-vs-gps-indoor-outdoor-tracking-guide",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "rtls-use-cases-transportation-logistics",
    title: "RTLS Use Cases in Transportation & Logistics: Fleet Efficiency",
    relatedSlugs: [
      "lidar-rtls-warehouse-30-minute-forklift-savings",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "building-rtls-dashboards-kpis-analytics",
    ],
  },
  {
    slug: "rtls-technology-selection-guide",
    title: "RTLS Technology Selection Guide: Choosing the Right Solution",
    relatedSlugs: [
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-101-core-components-protocols-deployment-models",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
    ],
  },
  {
    slug: "rtls-vendor-evaluation-checklist",
    title: "RTLS Vendor Evaluation Checklist: Key Criteria for Selection",
    relatedSlugs: [
      "rtls-101-core-components-protocols-deployment-models",
      "rtls-security-encryption-authentication-privacy-best-practices",
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
    ],
  },
  {
    slug: "warehouse-rtls-optimization-guide",
    title: "Warehouse RTLS Optimization Guide: Maximizing Efficiency",
    relatedSlugs: [
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
      "building-rtls-dashboards-kpis-analytics",
      "rtls-security-encryption-authentication-privacy-best-practices",
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

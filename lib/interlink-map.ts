/**
 * Comprehensive interlinking map for RTLS Alliance website
 * This file defines the relationships between different sections of the site
 * to optimize internal linking for SEO and user navigation
 */

export interface InterlinkSection {
  section: string
  path: string
  relatedSections: string[]
  relatedTechnologies: string[]
  relatedResources: string[]
  keyTopics: string[]
}

export interface TechnologyInterlink {
  technology: string
  path: string
  relatedTechnologies: string[]
  complementaryTechnologies: string[]
  competingTechnologies: string[]
  relatedResources: string[]
  relatedIndustries: string[]
  relatedModules: string[]
}

/**
 * Main sections of the website and their interrelationships
 */
export const sectionInterlinks: InterlinkSection[] = [
  {
    section: "Home",
    path: "/",
    relatedSections: ["RTLS Digital Twin", "Resources", "Membership", "Ecosystem"],
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "AI Cameras"],
    relatedResources: [
      "rtls-101-core-components-protocols-deployment-models",
      "indoor-positioning-basics",
      "rtls-roi-quantify-efficiency-gains-cost-savings",
    ],
    keyTopics: ["RTLS Overview", "Digital Twin", "Indoor Positioning", "Asset Tracking"],
  },
  {
    section: "RTLS Digital Twin",
    path: "/rtls-digital-twin",
    relatedSections: ["Technologies", "Modules", "Resources", "Ecosystem"],
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "AI Cameras", "Sensor Fusion"],
    relatedResources: [
      "rtls-101-core-components-protocols-deployment-models",
      "building-rtls-dashboards-kpis-analytics",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
    ],
    keyTopics: ["Digital Twin", "Real-time Tracking", "Asset Visualization", "Process Optimization"],
  },
  {
    section: "Resources",
    path: "/resources",
    relatedSections: ["RTLS Digital Twin", "Technologies", "Certification", "Membership"],
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "AI Cameras"],
    relatedResources: [], // All resources are already interlinked in article-data.ts
    keyTopics: ["RTLS Guides", "Technology Comparisons", "Case Studies", "Member Insights"],
  },
  {
    section: "Certification",
    path: "/certification",
    relatedSections: ["Membership", "Resources", "RTLS Digital Twin"],
    relatedTechnologies: [],
    relatedResources: ["rtls-101-core-components-protocols-deployment-models", "rtls-deployment-guide"],
    keyTopics: ["RTLS Certification", "Professional Development", "Industry Standards"],
  },
  {
    section: "Membership",
    path: "/membership",
    relatedSections: ["Certification", "Resources", "Ecosystem"],
    relatedTechnologies: [],
    relatedResources: [],
    keyTopics: ["Alliance Benefits", "Membership Tiers", "Industry Access"],
  },
  {
    section: "Ecosystem",
    path: "/ecosystem",
    relatedSections: ["Membership", "RTLS Digital Twin", "Resources"],
    relatedTechnologies: ["BLE", "UWB", "WiFi"],
    relatedResources: ["rtls-vendor-evaluation-checklist", "rtls-technology-selection-guide"],
    keyTopics: ["RTLS Vendors", "Technology Providers", "Industry Partners"],
  },
  {
    section: "Contact",
    path: "/contact",
    relatedSections: ["Membership", "Resources", "Certification"],
    relatedTechnologies: [],
    relatedResources: [],
    keyTopics: ["Support", "Inquiries", "Consultation"],
  },
]

/**
 * Technology pages and their interrelationships
 */
export const technologyInterlinks: TechnologyInterlink[] = [
  {
    technology: "BLE",
    path: "/rtls-digital-twin/technologies/ble",
    relatedTechnologies: ["UWB", "WiFi", "NFC", "Zigbee"],
    complementaryTechnologies: ["Sensor Fusion", "GNSS", "Dead Reckoning"],
    competingTechnologies: ["UWB", "WiFi", "RFID"],
    relatedResources: [
      "ble-positioning-rssi-aoa-fingerprinting-explained",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "rfid-vs-barcode-vs-ble-asset-tracking-comparison",
      "zigbee-vs-ble-low-power-rtls-iot",
    ],
    relatedIndustries: ["Healthcare", "Retail", "Warehousing", "Manufacturing"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
  },
  {
    technology: "UWB",
    path: "/rtls-digital-twin/technologies/uwb",
    relatedTechnologies: ["BLE", "WiFi", "RFID", "GNSS"],
    complementaryTechnologies: ["Sensor Fusion", "GNSS", "Dead Reckoning"],
    competingTechnologies: ["BLE", "WiFi", "RFID"],
    relatedResources: [
      "how-uwb-works-time-of-flight-tdoa-deep-dive",
      "uwb-vs-ble-which-rtls-tech-fits-use-case",
      "uwb-vs-rfid-cost-benefit-rtls",
      "uwb-vs-wifi-rtt-precision-showdown",
    ],
    relatedIndustries: ["Manufacturing", "Automotive", "Healthcare", "Warehousing"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
  },
  {
    technology: "WiFi",
    path: "/rtls-digital-twin/technologies/wifi",
    relatedTechnologies: ["BLE", "UWB", "RFID"],
    complementaryTechnologies: ["Sensor Fusion", "GNSS"],
    competingTechnologies: ["BLE", "UWB"],
    relatedResources: [
      "uwb-vs-wifi-rtt-latency-accuracy-infrastructure-cost",
      "uwb-vs-wifi-rtt-precision-showdown",
      "wifi-rtt-vs-ble-best-indoor-navigation",
    ],
    relatedIndustries: ["Retail", "Hospitality", "Corporate Offices", "Education"],
    relatedModules: ["Dashboard Reports", "Rules Engine"],
  },
  {
    technology: "GNSS",
    path: "/rtls-digital-twin/technologies/gnss",
    relatedTechnologies: ["RTK-GPS", "BLE", "UWB", "Dead Reckoning"],
    complementaryTechnologies: ["Sensor Fusion", "BLE", "UWB", "Dead Reckoning"],
    competingTechnologies: ["RTK-GPS"],
    relatedResources: [
      "uwb-vs-gps-indoor-outdoor-tracking-guide",
      "rtls-use-cases-smart-cities",
      "rtls-use-cases-transportation-logistics",
    ],
    relatedIndustries: ["Transportation", "Logistics", "Agriculture", "Construction"],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    technology: "RTK-GPS",
    path: "/rtls-digital-twin/technologies/rtk-gps",
    relatedTechnologies: ["GNSS", "Sensor Fusion", "Dead Reckoning"],
    complementaryTechnologies: ["Sensor Fusion", "Dead Reckoning"],
    competingTechnologies: ["GNSS"],
    relatedResources: [
      "uwb-vs-gps-indoor-outdoor-tracking-guide",
      "rtls-use-cases-smart-cities",
      "rtls-use-cases-transportation-logistics",
    ],
    relatedIndustries: ["Agriculture", "Construction", "Mining", "Surveying"],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    technology: "AI Cameras",
    path: "/rtls-digital-twin/technologies/ai-cameras",
    relatedTechnologies: ["SLAM", "LiDAR", "Sensor Fusion"],
    complementaryTechnologies: ["SLAM", "Sensor Fusion", "BLE", "UWB"],
    competingTechnologies: ["LiDAR", "UWB"],
    relatedResources: [
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
    ],
    relatedIndustries: ["Retail", "Manufacturing", "Warehousing", "Security"],
    relatedModules: ["Dashboard Reports", "Rules Engine"],
  },
  {
    technology: "LiDAR",
    path: "/rtls-digital-twin/technologies/lidar",
    relatedTechnologies: ["AI Cameras", "SLAM", "Sensor Fusion"],
    complementaryTechnologies: ["SLAM", "Sensor Fusion", "Dead Reckoning"],
    competingTechnologies: ["AI Cameras", "SLAM"],
    relatedResources: [
      "lidar-rtls-warehouse-30-minute-forklift-savings",
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "vision-slam-vs-lidar-vio-3d-mapping-rtls",
    ],
    relatedIndustries: ["Warehousing", "Manufacturing", "Robotics", "Autonomous Vehicles"],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    technology: "SLAM",
    path: "/rtls-digital-twin/technologies/slam",
    relatedTechnologies: ["AI Cameras", "LiDAR", "Sensor Fusion", "Dead Reckoning"],
    complementaryTechnologies: ["LiDAR", "Sensor Fusion", "Dead Reckoning"],
    competingTechnologies: ["AI Cameras", "LiDAR"],
    relatedResources: [
      "vision-slam-vs-lidar-choosing-ideal-rtls",
      "vision-slam-vs-lidar-vio-3d-mapping-rtls",
      "visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning",
    ],
    relatedIndustries: ["Robotics", "Autonomous Vehicles", "Warehousing", "Manufacturing"],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    technology: "Magnetic Field",
    path: "/rtls-digital-twin/technologies/magnetic-field",
    relatedTechnologies: ["Sensor Fusion", "Dead Reckoning", "BLE"],
    complementaryTechnologies: ["Sensor Fusion", "BLE", "WiFi"],
    competingTechnologies: ["BLE", "WiFi"],
    relatedResources: ["indoor-positioning-basics", "rtls-101-core-components-protocols-deployment-models"],
    relatedIndustries: ["Retail", "Healthcare", "Corporate Offices"],
    relatedModules: ["Dashboard Reports"],
  },
  {
    technology: "Ultrasound",
    path: "/rtls-digital-twin/technologies/ultrasound",
    relatedTechnologies: ["BLE", "Sensor Fusion", "UWB"],
    complementaryTechnologies: ["Sensor Fusion", "BLE"],
    competingTechnologies: ["UWB", "BLE"],
    relatedResources: ["indoor-positioning-basics", "rtls-101-core-components-protocols-deployment-models"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Laboratories"],
    relatedModules: ["Dashboard Reports", "Rules Engine"],
  },
  {
    technology: "Sensor Fusion",
    path: "/rtls-digital-twin/technologies/sensor-fusion",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "AI Cameras", "LiDAR", "SLAM", "Dead Reckoning"],
    complementaryTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "AI Cameras", "LiDAR", "SLAM", "Dead Reckoning"],
    competingTechnologies: [],
    relatedResources: [
      "5-rtls-trends-2025-ai-5g-nr-tag-free-tracking",
      "uwb-vs-vision-rtls-accuracy-vs-contextual-tracking",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
    ],
    relatedIndustries: ["Robotics", "Autonomous Vehicles", "Manufacturing", "Healthcare"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
  },
  {
    technology: "Dead Reckoning",
    path: "/rtls-digital-twin/technologies/dead-reckoning",
    relatedTechnologies: ["Sensor Fusion", "GNSS", "RTK-GPS", "SLAM"],
    complementaryTechnologies: ["Sensor Fusion", "GNSS", "RTK-GPS", "BLE", "UWB"],
    competingTechnologies: [],
    relatedResources: ["indoor-positioning-basics", "rtls-101-core-components-protocols-deployment-models"],
    relatedIndustries: ["Robotics", "Autonomous Vehicles", "Indoor Navigation"],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    technology: "LoRa",
    path: "/rtls-digital-twin/technologies/lora",
    relatedTechnologies: ["BLE", "Zigbee", "NFC"],
    complementaryTechnologies: ["Sensor Fusion", "GNSS"],
    competingTechnologies: ["BLE", "Zigbee"],
    relatedResources: ["zigbee-vs-ble-low-power-rtls-iot", "integrating-rtls-with-iot-apis-middleware-data-flows"],
    relatedIndustries: ["Smart Cities", "Agriculture", "Utilities", "Logistics"],
    relatedModules: ["Rules Engine", "Dashboard Reports"],
  },
  {
    technology: "NFC",
    path: "/rtls-digital-twin/technologies/nfc",
    relatedTechnologies: ["BLE", "RFID"],
    complementaryTechnologies: ["BLE", "Sensor Fusion"],
    competingTechnologies: ["RFID"],
    relatedResources: ["rfid-vs-barcode-vs-ble-asset-tracking-comparison"],
    relatedIndustries: ["Retail", "Access Control", "Payments", "Healthcare"],
    relatedModules: ["Rules Engine"],
  },
  {
    technology: "Infrared",
    path: "/rtls-digital-twin/technologies/infrared",
    relatedTechnologies: ["BLE", "Ultrasound"],
    complementaryTechnologies: ["BLE", "Sensor Fusion"],
    competingTechnologies: ["Ultrasound"],
    relatedResources: ["indoor-positioning-basics", "rtls-101-core-components-protocols-deployment-models"],
    relatedIndustries: ["Healthcare", "Retail", "Corporate Offices"],
    relatedModules: ["Rules Engine", "Dashboard Reports"],
  },
]

/**
 * Module pages and their interrelationships
 */
export const moduleInterlinks = [
  {
    module: "Fleet Manager",
    path: "/rtls-digital-twin/modules/fleet-manager",
    relatedModules: ["Rules Engine", "Dashboard Reports"],
    relatedTechnologies: ["BLE", "UWB", "GNSS", "RTK-GPS", "LiDAR", "SLAM"],
    relatedResources: ["rtls-use-cases-transportation-logistics", "lidar-rtls-warehouse-30-minute-forklift-savings"],
    relatedIndustries: ["Logistics", "Manufacturing", "Warehousing", "Healthcare"],
  },
  {
    module: "Rules Engine",
    path: "/rtls-digital-twin/modules/rules-engine",
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
    relatedTechnologies: ["BLE", "UWB", "WiFi", "AI Cameras"],
    relatedResources: [
      "building-rtls-dashboards-kpis-analytics",
      "integrating-rtls-with-iot-apis-middleware-data-flows",
    ],
    relatedIndustries: ["Manufacturing", "Healthcare", "Warehousing", "Retail"],
  },
  {
    module: "Dashboard Reports",
    path: "/rtls-digital-twin/modules/dashboard-reports",
    relatedModules: ["Fleet Manager", "Rules Engine"],
    relatedTechnologies: ["BLE", "UWB", "WiFi", "AI Cameras", "Sensor Fusion"],
    relatedResources: ["building-rtls-dashboards-kpis-analytics", "rtls-roi-quantify-efficiency-gains-cost-savings"],
    relatedIndustries: ["All Industries"],
  },
  {
    module: "Production Planning",
    path: "/rtls-digital-twin/modules/production-planning",
    relatedModules: ["Fleet Manager", "Rules Engine", "Process Control"],
    relatedTechnologies: ["UWB", "BLE", "AI Cameras", "LiDAR"],
    relatedResources: ["rtls-use-cases-manufacturing", "rtls-roi-quantify-efficiency-gains-cost-savings"],
    relatedIndustries: ["Manufacturing", "Automotive", "Aerospace"],
  },
  {
    module: "Process Control",
    path: "/rtls-digital-twin/modules/process-control",
    relatedModules: ["Production Planning", "Rules Engine", "Dashboard Reports"],
    relatedTechnologies: ["UWB", "BLE", "AI Cameras", "LiDAR"],
    relatedResources: ["rtls-use-cases-manufacturing", "rtls-roi-quantify-efficiency-gains-cost-savings"],
    relatedIndustries: ["Manufacturing", "Automotive", "Aerospace", "Pharmaceuticals"],
  },
]

/**
 * Industry-specific interlinks
 */
export const industryInterlinks = [
  {
    industry: "Healthcare",
    relatedTechnologies: ["BLE", "UWB", "RFID", "Ultrasound", "AI Cameras"],
    relatedResources: ["rtls-use-cases-healthcare", "hospital-rtls-ble-uwb-hybrid"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
  },
  {
    industry: "Manufacturing",
    relatedTechnologies: ["UWB", "BLE", "AI Cameras", "LiDAR", "SLAM"],
    relatedResources: ["rtls-use-cases-manufacturing", "automotive-oem-uwb-45-minute-fod-savings"],
    relatedModules: ["Production Planning", "Process Control", "Fleet Manager"],
  },
  {
    industry: "Warehousing",
    relatedTechnologies: ["UWB", "BLE", "AI Cameras", "LiDAR", "SLAM"],
    relatedResources: [
      "smart-warehousing-rtls-use-cases-automated-fulfillment",
      "vision-rtls-warehousing-60-percent-pick-time-improvement",
      "lidar-rtls-warehouse-30-minute-forklift-savings",
    ],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    industry: "Retail",
    relatedTechnologies: ["BLE", "WiFi", "NFC", "AI Cameras"],
    relatedResources: ["rtls-use-cases-retail"],
    relatedModules: ["Dashboard Reports", "Rules Engine"],
  },
  {
    industry: "Transportation & Logistics",
    relatedTechnologies: ["GNSS", "RTK-GPS", "BLE", "UWB", "Sensor Fusion"],
    relatedResources: ["rtls-use-cases-transportation-logistics"],
    relatedModules: ["Fleet Manager", "Dashboard Reports"],
  },
  {
    industry: "Smart Cities",
    relatedTechnologies: ["GNSS", "LoRa", "WiFi", "Sensor Fusion"],
    relatedResources: ["rtls-use-cases-smart-cities"],
    relatedModules: ["Dashboard Reports", "Rules Engine"],
  },
]

/**
 * Helper function to get related technologies for a specific technology
 * @param technology - The technology to find related technologies for
 */
export function getRelatedTechnologies(technology: string): string[] {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())
  return techInfo ? techInfo.relatedTechnologies : []
}

/**
 * Helper function to get complementary technologies for a specific technology
 * @param technology - The technology to find complementary technologies for
 */
export function getComplementaryTechnologies(technology: string): string[] {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())
  return techInfo ? techInfo.complementaryTechnologies : []
}

/**
 * Helper function to get competing technologies for a specific technology
 * @param technology - The technology to find competing technologies for
 */
export function getCompetingTechnologies(technology: string): string[] {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())
  return techInfo ? techInfo.competingTechnologies : []
}

/**
 * Helper function to get related resources for a specific technology
 * @param technology - The technology to find related resources for
 */
export function getRelatedResourcesForTechnology(technology: string): string[] {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())
  return techInfo ? techInfo.relatedResources : []
}

/**
 * Helper function to get related modules for a specific technology
 * @param technology - The technology to find related modules for
 */
export function getRelatedModulesForTechnology(technology: string): string[] {
  const techInfo = technologyInterlinks.find((tech) => tech.technology.toLowerCase() === technology.toLowerCase())
  return techInfo ? techInfo.relatedModules : []
}

/**
 * Helper function to get technologies related to a specific industry
 * @param industry - The industry to find related technologies for
 */
export function getTechnologiesForIndustry(industry: string): string[] {
  const industryInfo = industryInterlinks.find((ind) => ind.industry.toLowerCase() === industry.toLowerCase())
  return industryInfo ? industryInfo.relatedTechnologies : []
}

/**
 * Helper function to get resources related to a specific industry
 * @param industry - The industry to find related resources for
 */
export function getResourcesForIndustry(industry: string): string[] {
  const industryInfo = industryInterlinks.find((ind) => ind.industry.toLowerCase() === industry.toLowerCase())
  return industryInfo ? industryInfo.relatedResources : []
}

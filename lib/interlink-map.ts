/**
 * Comprehensive interlink map for RTLS Alliance website
 * This file defines relationships between different sections of the site
 * to facilitate structured internal linking for SEO optimization
 */

// Technology interlinking structure
export const technologyInterlinks = [
  {
    technology: "BLE",
    path: "/rtls-digital-twin/technologies/ble",
    relatedTechnologies: ["WiFi", "UWB", "GNSS", "NFC"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Logistics", "Retail"],
    keyFeatures: ["Low power", "Widespread adoption", "Moderate accuracy", "Beacons"],
    bestFor: ["Indoor asset tracking", "Personnel tracking", "Proximity detection", "Wayfinding"],
  },
  {
    technology: "UWB",
    path: "/rtls-digital-twin/technologies/uwb",
    relatedTechnologies: ["BLE", "WiFi", "GNSS", "Sensor Fusion"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Process Control"],
    relatedIndustries: ["Manufacturing", "Automotive", "Healthcare", "Warehousing"],
    keyFeatures: ["High accuracy", "Real-time tracking", "Resistant to interference", "Precise ranging"],
    bestFor: ["Precision tracking", "Safety applications", "Collision avoidance", "Tool tracking"],
  },
  {
    technology: "WiFi",
    path: "/rtls-digital-twin/technologies/wifi",
    relatedTechnologies: ["BLE", "UWB", "GNSS", "LoRa"],
    relatedModules: ["Dashboard Reports", "Rules Engine", "Fleet Manager"],
    relatedIndustries: ["Hospitality", "Education", "Corporate", "Retail"],
    keyFeatures: ["Existing infrastructure", "Wide coverage", "Moderate accuracy", "Device-free tracking"],
    bestFor: ["Large area coverage", "Visitor analytics", "Asset tracking", "Space utilization"],
  },
  {
    technology: "GNSS",
    path: "/rtls-digital-twin/technologies/gnss",
    relatedTechnologies: ["RTK-GPS", "BLE", "LoRa", "Sensor Fusion"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
    relatedIndustries: ["Logistics", "Agriculture", "Construction", "Mining"],
    keyFeatures: ["Outdoor tracking", "Global coverage", "No infrastructure", "Weather resistant"],
    bestFor: ["Vehicle tracking", "Outdoor asset management", "Supply chain visibility", "Field service"],
  },
  {
    technology: "RTK-GPS",
    path: "/rtls-digital-twin/technologies/rtk-gps",
    relatedTechnologies: ["GNSS", "Sensor Fusion", "UWB", "Dead Reckoning"],
    relatedModules: ["Fleet Manager", "Production Planning", "Dashboard Reports"],
    relatedIndustries: ["Agriculture", "Construction", "Mining", "Surveying"],
    keyFeatures: ["Centimeter accuracy", "Outdoor precision", "Real-time corrections", "Base stations"],
    bestFor: ["Precision agriculture", "Machine control", "Surveying", "Autonomous vehicles"],
  },
  {
    technology: "LoRa",
    path: "/rtls-digital-twin/technologies/lora",
    relatedTechnologies: ["BLE", "WiFi", "GNSS", "NFC"],
    relatedModules: ["Rules Engine", "Dashboard Reports", "Fleet Manager"],
    relatedIndustries: ["Smart Cities", "Agriculture", "Utilities", "Logistics"],
    keyFeatures: ["Long range", "Low power", "Low bandwidth", "Low cost"],
    bestFor: ["Wide area tracking", "Remote monitoring", "Supply chain", "Environmental monitoring"],
  },
  {
    technology: "NFC",
    path: "/rtls-digital-twin/technologies/nfc",
    relatedTechnologies: ["BLE", "RFID", "UWB", "QR Codes"],
    relatedModules: ["Rules Engine", "Process Control", "Dashboard Reports"],
    relatedIndustries: ["Retail", "Healthcare", "Access Control", "Payments"],
    keyFeatures: ["Very short range", "Low cost", "Simple deployment", "Secure"],
    bestFor: ["Access control", "Payments", "Authentication", "Asset verification"],
  },
  {
    technology: "Infrared",
    path: "/rtls-digital-twin/technologies/infrared",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "AI Cameras"],
    relatedModules: ["Rules Engine", "Dashboard Reports", "Process Control"],
    relatedIndustries: ["Healthcare", "Retail", "Hospitality", "Manufacturing"],
    keyFeatures: ["Line of sight", "Room-level accuracy", "Simple deployment", "Low interference"],
    bestFor: ["Room presence detection", "Staff tracking", "Patient monitoring", "Occupancy sensing"],
  },
  {
    technology: "LiDAR",
    path: "/rtls-digital-twin/technologies/lidar",
    relatedTechnologies: ["AI Cameras", "SLAM", "UWB", "Sensor Fusion"],
    relatedModules: ["Process Control", "Production Planning", "Rules Engine"],
    relatedIndustries: ["Manufacturing", "Warehousing", "Robotics", "Automotive"],
    keyFeatures: ["High accuracy", "3D mapping", "No tags required", "Works in darkness"],
    bestFor: ["Autonomous navigation", "People counting", "Facility mapping", "Safety zones"],
  },
  {
    technology: "AI Cameras",
    path: "/rtls-digital-twin/technologies/ai-cameras",
    relatedTechnologies: ["LiDAR", "SLAM", "Infrared", "Sensor Fusion"],
    relatedModules: ["Process Control", "Rules Engine", "Dashboard Reports"],
    relatedIndustries: ["Retail", "Manufacturing", "Security", "Healthcare"],
    keyFeatures: ["Visual identification", "No tags required", "Behavior analysis", "Multiple object tracking"],
    bestFor: ["People counting", "Process monitoring", "Security", "Customer analytics"],
  },
  {
    technology: "Magnetic Field",
    path: "/rtls-digital-twin/technologies/magnetic-field",
    relatedTechnologies: ["BLE", "WiFi", "Sensor Fusion", "Dead Reckoning"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
    relatedIndustries: ["Retail", "Healthcare", "Warehousing", "Manufacturing"],
    keyFeatures: ["Infrastructure-free", "Works indoors", "Not affected by obstacles", "Unique signatures"],
    bestFor: ["Indoor navigation", "Asset tracking", "Wayfinding", "Location fingerprinting"],
  },
  {
    technology: "Ultrasound",
    path: "/rtls-digital-twin/technologies/ultrasound",
    relatedTechnologies: ["UWB", "BLE", "Infrared", "Sensor Fusion"],
    relatedModules: ["Process Control", "Rules Engine", "Fleet Manager"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Laboratories", "Clean rooms"],
    keyFeatures: ["High accuracy", "Room containment", "Low interference", "Reliable in complex environments"],
    bestFor: ["Room-level tracking", "Asset management", "Staff tracking", "Equipment monitoring"],
  },
  {
    technology: "Sensor Fusion",
    path: "/rtls-digital-twin/technologies/sensor-fusion",
    relatedTechnologies: ["BLE", "UWB", "GNSS", "WiFi", "Magnetic Field"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
    relatedIndustries: ["Manufacturing", "Logistics", "Healthcare", "Retail"],
    keyFeatures: ["Multi-technology", "Seamless transitions", "Improved accuracy", "Redundancy"],
    bestFor: ["Indoor-outdoor tracking", "Critical assets", "Complex environments", "High-value applications"],
  },
  {
    technology: "SLAM",
    path: "/rtls-digital-twin/technologies/slam",
    relatedTechnologies: ["LiDAR", "AI Cameras", "Sensor Fusion", "Dead Reckoning"],
    relatedModules: ["Process Control", "Production Planning", "Rules Engine"],
    relatedIndustries: ["Robotics", "Warehousing", "Manufacturing", "Logistics"],
    keyFeatures: ["Simultaneous localization and mapping", "No infrastructure", "Dynamic environments", "3D mapping"],
    bestFor: ["Autonomous robots", "Facility mapping", "Dynamic environments", "Indoor navigation"],
  },
  {
    technology: "Dead Reckoning",
    path: "/rtls-digital-twin/technologies/dead-reckoning",
    relatedTechnologies: ["GNSS", "Sensor Fusion", "SLAM", "Magnetic Field"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
    relatedIndustries: ["Automotive", "Warehousing", "Manufacturing", "Logistics"],
    keyFeatures: ["No external references", "Continuous tracking", "Works in signal-denied areas", "Inertial sensors"],
    bestFor: ["Signal-denied areas", "Temporary tracking", "Vehicle navigation", "Backup positioning"],
  },
]

// Module interlinking structure
export const moduleInterlinks = [
  {
    module: "Fleet Manager",
    path: "/rtls-digital-twin/modules/fleet-manager",
    relatedTechnologies: ["BLE", "UWB", "GNSS", "WiFi", "LoRa"],
    relatedModules: ["Rules Engine", "Dashboard Reports", "Process Control"],
    relatedIndustries: ["Logistics", "Healthcare", "Manufacturing", "Warehousing"],
    keyFeatures: ["Asset tracking", "Utilization analytics", "Maintenance scheduling", "Location history"],
  },
  {
    module: "Rules Engine",
    path: "/rtls-digital-twin/modules/rules-engine",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "Sensor Fusion"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Process Control"],
    relatedIndustries: ["Manufacturing", "Healthcare", "Logistics", "Retail"],
    keyFeatures: ["Automated alerts", "Geofencing", "Workflow automation", "Compliance monitoring"],
  },
  {
    module: "Dashboard Reports",
    path: "/rtls-digital-twin/modules/dashboard-reports",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "AI Cameras"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Process Control"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Logistics", "Retail"],
    keyFeatures: ["Real-time analytics", "Custom KPIs", "Data visualization", "Trend analysis"],
  },
  {
    module: "Production Planning",
    path: "/rtls-digital-twin/modules/production-planning",
    relatedTechnologies: ["UWB", "BLE", "SLAM", "LiDAR", "Sensor Fusion"],
    relatedModules: ["Process Control", "Fleet Manager", "Rules Engine"],
    relatedIndustries: ["Manufacturing", "Automotive", "Aerospace", "Electronics"],
    keyFeatures: ["Workflow optimization", "Resource allocation", "Bottleneck identification", "Simulation"],
  },
  {
    module: "Process Control",
    path: "/rtls-digital-twin/modules/process-control",
    relatedTechnologies: ["UWB", "AI Cameras", "LiDAR", "SLAM", "Sensor Fusion"],
    relatedModules: ["Production Planning", "Rules Engine", "Dashboard Reports"],
    relatedIndustries: ["Manufacturing", "Pharmaceuticals", "Food & Beverage", "Automotive"],
    keyFeatures: ["Quality control", "Process monitoring", "Compliance tracking", "Error prevention"],
  },
]

// Industry interlinking structure
export const industryInterlinks = [
  {
    industry: "Healthcare",
    relatedTechnologies: ["BLE", "UWB", "RFID", "Ultrasound", "Infrared"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
    usesCases: ["Asset tracking", "Staff safety", "Patient flow", "Infection control"],
  },
  {
    industry: "Manufacturing",
    relatedTechnologies: ["UWB", "BLE", "SLAM", "LiDAR", "AI Cameras"],
    relatedModules: ["Process Control", "Production Planning", "Fleet Manager"],
    usesCases: ["Tool tracking", "WIP tracking", "Safety zones", "Process optimization"],
  },
  {
    industry: "Logistics",
    relatedTechnologies: ["GNSS", "BLE", "UWB", "LoRa", "RFID"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
    usesCases: ["Fleet management", "Yard management", "Inventory tracking", "Supply chain visibility"],
  },
  {
    industry: "Retail",
    relatedTechnologies: ["BLE", "WiFi", "AI Cameras", "RFID", "NFC"],
    relatedModules: ["Dashboard Reports", "Rules Engine", "Fleet Manager"],
    usesCases: ["Customer analytics", "Inventory management", "Loss prevention", "Omnichannel fulfillment"],
  },
  {
    industry: "Warehousing",
    relatedTechnologies: ["UWB", "BLE", "SLAM", "LiDAR", "RFID"],
    relatedModules: ["Fleet Manager", "Process Control", "Dashboard Reports"],
    usesCases: ["Inventory management", "Forklift tracking", "Pick optimization", "Space utilization"],
  },
  {
    industry: "Agriculture",
    relatedTechnologies: ["GNSS", "RTK-GPS", "LoRa", "Sensor Fusion", "Drones"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
    usesCases: ["Equipment tracking", "Precision farming", "Livestock monitoring", "Field mapping"],
  },
  {
    industry: "Construction",
    relatedTechnologies: ["GNSS", "RTK-GPS", "UWB", "BLE", "SLAM"],
    relatedModules: ["Fleet Manager", "Dashboard Reports", "Rules Engine"],
    usesCases: ["Equipment tracking", "Worker safety", "Site monitoring", "Progress tracking"],
  },
  {
    industry: "Mining",
    relatedTechnologies: ["GNSS", "UWB", "SLAM", "LiDAR", "Sensor Fusion"],
    relatedModules: ["Fleet Manager", "Process Control", "Rules Engine"],
    usesCases: ["Personnel safety", "Equipment tracking", "Ventilation monitoring", "Production optimization"],
  },
  {
    industry: "Automotive",
    relatedTechnologies: ["UWB", "GNSS", "Dead Reckoning", "SLAM", "Sensor Fusion"],
    relatedModules: ["Process Control", "Production Planning", "Fleet Manager"],
    usesCases: ["Production tracking", "Tool management", "Quality control", "Vehicle assembly"],
  },
  {
    industry: "Education",
    relatedTechnologies: ["WiFi", "BLE", "NFC", "AI Cameras", "RFID"],
    relatedModules: ["Dashboard Reports", "Rules Engine", "Fleet Manager"],
    usesCases: ["Attendance tracking", "Asset management", "Campus navigation", "Space utilization"],
  },
]

// Resource article categories for interlinking
export const articleCategories = [
  {
    category: "Technology Guides",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "LoRa", "NFC", "AI Cameras", "LiDAR", "SLAM"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Logistics", "Retail", "Warehousing"],
  },
  {
    category: "Implementation Guides",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "Sensor Fusion"],
    relatedModules: ["Fleet Manager", "Rules Engine", "Dashboard Reports"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Logistics", "Retail"],
  },
  {
    category: "Case Studies",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "LoRa", "AI Cameras"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Logistics", "Retail", "Warehousing"],
  },
  {
    category: "Industry Insights",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "Sensor Fusion"],
    relatedIndustries: ["Healthcare", "Manufacturing", "Logistics", "Retail", "Warehousing"],
  },
  {
    category: "Technology Comparisons",
    relatedTechnologies: ["BLE", "UWB", "WiFi", "GNSS", "LoRa", "NFC", "AI Cameras", "LiDAR"],
  },
]

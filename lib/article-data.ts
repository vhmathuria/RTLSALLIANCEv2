// Sample article data for development and testing
export const articles = [
  {
    id: 1,
    title: "Understanding BLE Technology for Indoor Positioning",
    slug: "understanding-ble-technology",
    excerpt: "A comprehensive guide to Bluetooth Low Energy technology for indoor positioning systems.",
    content_type: "Guide",
    published_at: "2023-05-15",
    updated_at: "2023-06-10",
    author: "RTLS Alliance",
    tags: ["BLE", "Indoor Positioning", "RTLS"],
    featured_image: "/ble-beacons.png",
  },
  {
    id: 2,
    title: "UWB vs BLE: Choosing the Right Technology for Your RTLS Project",
    slug: "uwb-vs-ble-comparison",
    excerpt: "A detailed comparison of Ultra-Wideband and Bluetooth Low Energy for real-time location systems.",
    content_type: "Technology Comparison",
    published_at: "2023-04-20",
    updated_at: "2023-05-25",
    author: "RTLS Alliance",
    tags: ["UWB", "BLE", "Comparison", "RTLS"],
    featured_image: "/uwb-vs-ble.png",
  },
  {
    id: 3,
    title: "Healthcare Asset Tracking: A Success Story",
    slug: "healthcare-asset-tracking-success-story",
    excerpt: "How a major hospital improved operational efficiency with RTLS technology.",
    content_type: "Success Story",
    published_at: "2023-03-10",
    updated_at: "2023-03-15",
    author: "RTLS Alliance",
    tags: ["Healthcare", "Asset Tracking", "Success Story"],
    featured_image: "/healthcare-asset-tracking.png",
  },
  {
    id: 4,
    title: "Implementing RTLS in Manufacturing: Best Practices",
    slug: "rtls-manufacturing-best-practices",
    excerpt: "Learn how to successfully implement real-time location systems in manufacturing environments.",
    content_type: "Guide",
    published_at: "2023-02-05",
    updated_at: "2023-02-28",
    author: "RTLS Alliance",
    tags: ["Manufacturing", "Implementation", "Best Practices"],
    featured_image: "/rtls-implementation.png",
  },
]

// Function to get BLE-related articles
export function getBLERelatedArticles() {
  return articles.filter(
    (article) => article.tags.includes("BLE") || article.title.includes("BLE") || article.excerpt.includes("Bluetooth"),
  )
}

// Function to get UWB-related articles
export function getUWBRelatedArticles() {
  return articles.filter(
    (article) =>
      article.tags.includes("UWB") || article.title.includes("UWB") || article.excerpt.includes("Ultra-Wideband"),
  )
}

// Function to get articles related to a specific technology
export function getTechnologyRelatedArticles(technology: string) {
  const techKeywords: Record<string, string[]> = {
    ble: ["BLE", "Bluetooth", "iBeacon", "Eddystone"],
    uwb: ["UWB", "Ultra-Wideband", "Ultra Wideband"],
    wifi: ["WiFi", "Wi-Fi", "802.11"],
    nfc: ["NFC", "Near Field Communication"],
    lidar: ["LiDAR", "Light Detection and Ranging"],
    infrared: ["Infrared", "IR"],
    gnss: ["GNSS", "GPS", "Global Navigation"],
    "rtk-gps": ["RTK", "Real-Time Kinematic", "GPS"],
    lora: ["LoRa", "LoRaWAN", "Long Range"],
    "ai-cameras": ["Camera", "Computer Vision", "AI Camera"],
    ultrasound: ["Ultrasound", "Ultrasonic"],
    "magnetic-field": ["Magnetic", "Magnetometer"],
    slam: ["SLAM", "Simultaneous Localization and Mapping"],
    "dead-reckoning": ["Dead Reckoning", "Inertial", "IMU"],
    "sensor-fusion": ["Sensor Fusion", "Hybrid", "Multi-sensor"],
  }

  const keywords = techKeywords[technology.toLowerCase()] || [technology]

  return articles.filter((article) => {
    const articleText = `${article.title} ${article.excerpt} ${article.tags.join(" ")}`.toLowerCase()
    return keywords.some((keyword) => articleText.includes(keyword.toLowerCase()))
  })
}

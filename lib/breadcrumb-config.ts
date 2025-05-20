// Custom breadcrumb path configurations for specific pages
export interface CustomBreadcrumb {
  label: string
  href: string
  isCurrentPage?: boolean
}

export interface BreadcrumbConfig {
  // Full path as key, array of breadcrumbs as value
  [path: string]: CustomBreadcrumb[]
}

export const breadcrumbConfigs: BreadcrumbConfig = {
  // Resources section - better categorization
  "/resources": [
    { label: "Home", href: "/" },
    { label: "Knowledge Hub", href: "/resources", isCurrentPage: true },
  ],

  // Technology pages - improved hierarchy
  "/rtls-digital-twin": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin", isCurrentPage: true },
  ],

  // Technology category pages
  "/rtls-digital-twin/technologies": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies", isCurrentPage: true },
  ],

  // Individual technology pages - with proper categorization
  "/rtls-digital-twin/technologies/ble": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Bluetooth Low Energy (BLE)", href: "/rtls-digital-twin/technologies/ble", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/uwb": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Ultra-Wideband (UWB)", href: "/rtls-digital-twin/technologies/uwb", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/wifi": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "WiFi Positioning", href: "/rtls-digital-twin/technologies/wifi", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/nfc": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Near Field Communication (NFC)", href: "/rtls-digital-twin/technologies/nfc", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/lora": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "LoRa Positioning", href: "/rtls-digital-twin/technologies/lora", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/infrared": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Infrared Positioning", href: "/rtls-digital-twin/technologies/infrared", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/lidar": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "LiDAR Positioning", href: "/rtls-digital-twin/technologies/lidar", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/ai-cameras": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "AI Camera Positioning", href: "/rtls-digital-twin/technologies/ai-cameras", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/gnss": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    {
      label: "Global Navigation Satellite System (GNSS)",
      href: "/rtls-digital-twin/technologies/gnss",
      isCurrentPage: true,
    },
  ],

  "/rtls-digital-twin/technologies/rtk-gps": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Real-Time Kinematic GPS", href: "/rtls-digital-twin/technologies/rtk-gps", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/magnetic-field": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    {
      label: "Magnetic Field Positioning",
      href: "/rtls-digital-twin/technologies/magnetic-field",
      isCurrentPage: true,
    },
  ],

  "/rtls-digital-twin/technologies/ultrasound": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Ultrasound Positioning", href: "/rtls-digital-twin/technologies/ultrasound", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/sensor-fusion": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Sensor Fusion", href: "/rtls-digital-twin/technologies/sensor-fusion", isCurrentPage: true },
  ],

  "/rtls-digital-twin/technologies/slam": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    {
      label: "Simultaneous Localization and Mapping (SLAM)",
      href: "/rtls-digital-twin/technologies/slam",
      isCurrentPage: true,
    },
  ],

  "/rtls-digital-twin/technologies/dead-reckoning": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Technology Types", href: "/rtls-digital-twin/technologies" },
    { label: "Dead Reckoning", href: "/rtls-digital-twin/technologies/dead-reckoning", isCurrentPage: true },
  ],

  // Modules section
  "/rtls-digital-twin/modules": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Software Modules", href: "/rtls-digital-twin/modules", isCurrentPage: true },
  ],

  // Individual module pages
  "/rtls-digital-twin/modules/fleet-manager": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Software Modules", href: "/rtls-digital-twin/modules" },
    { label: "Fleet Manager", href: "/rtls-digital-twin/modules/fleet-manager", isCurrentPage: true },
  ],

  "/rtls-digital-twin/modules/rules-engine": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Software Modules", href: "/rtls-digital-twin/modules" },
    { label: "Rules Engine", href: "/rtls-digital-twin/modules/rules-engine", isCurrentPage: true },
  ],

  "/rtls-digital-twin/modules/dashboard-reports": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Software Modules", href: "/rtls-digital-twin/modules" },
    { label: "Dashboard & Reports", href: "/rtls-digital-twin/modules/dashboard-reports", isCurrentPage: true },
  ],

  "/rtls-digital-twin/modules/production-planning": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Software Modules", href: "/rtls-digital-twin/modules" },
    { label: "Production Planning", href: "/rtls-digital-twin/modules/production-planning", isCurrentPage: true },
  ],

  "/rtls-digital-twin/modules/process-control": [
    { label: "Home", href: "/" },
    { label: "RTLS Technologies", href: "/rtls-digital-twin" },
    { label: "Software Modules", href: "/rtls-digital-twin/modules" },
    { label: "Process Control", href: "/rtls-digital-twin/modules/process-control", isCurrentPage: true },
  ],

  // Membership section
  "/membership": [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership", isCurrentPage: true },
  ],

  "/membership/upgrade": [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Upgrade Membership", href: "/membership/upgrade", isCurrentPage: true },
  ],

  // Ecosystem section
  "/ecosystem": [
    { label: "Home", href: "/" },
    { label: "RTLS Ecosystem", href: "/ecosystem", isCurrentPage: true },
  ],

  "/ecosystem/directory": [
    { label: "Home", href: "/" },
    { label: "RTLS Ecosystem", href: "/ecosystem" },
    { label: "Partner Directory", href: "/ecosystem/directory", isCurrentPage: true },
  ],

  // Project section
  "/project": [
    { label: "Home", href: "/" },
    { label: "RTLS Projects", href: "/project", isCurrentPage: true },
  ],

  // Account section
  "/account": [
    { label: "Home", href: "/" },
    { label: "My Account", href: "/account", isCurrentPage: true },
  ],

  // Contact section
  "/contact": [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact", isCurrentPage: true },
  ],

  // Join Alliance section
  "/join-alliance": [
    { label: "Home", href: "/" },
    { label: "Join the Alliance", href: "/join-alliance", isCurrentPage: true },
  ],

  // Certification section
  "/certification": [
    { label: "Home", href: "/" },
    { label: "RTLS Certification", href: "/certification", isCurrentPage: true },
  ],
}

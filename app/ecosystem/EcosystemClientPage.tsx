"use client"

const vendors = [
  {
    name: "AiRISTA",
    description:
      "Personnel Safety, Asset Tracking, Patient Flow, Temperature Monitoring, Hand Hygiene, Wander Management, Inventory Management, Environmental Monitoring, Wireless ID, Workflow Management, Staff Safety",
    website: "https://airistaflow.com",
    location: "Maryland, USA",
    region: "North America",
    specialties: ["RFID", "IR", "GPS", "BLE"],
    industries: ["Healthcare", "Hospitality", "Government", "Education", "Logistics", "Industrial"],
    coreServices:
      "Personnel Safety, Asset Tracking, Patient Flow, Temperature Monitoring, Hand Hygiene, Wander Management, Inventory Management, Environmental Monitoring, Wireless ID, Workflow Management, Staff Safety",
    keyIndustries: "Healthcare, Hospitality, Government, Education, Logistics, Industrial",
    uniqueSellingPoint: "Comprehensive RTLS solutions with focus on personnel safety and workflow management",
  },
  {
    name: "LocaXion",
    description:
      "RTLS Digital Twin Platform, Forklift Fleet Manager, WIP Inventory Management, Patient Flow, Staff/Duress, Infant Safety",
    location: "Texas, USA",
    region: "North America",
    specialties: ["SLAM", "UWB", "BLE AOA", "VHF", "5G", "WiFi", "RFID", "GNSS", "Ultrasound"],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Warehousing",
      "Automotive",
      "Aerospace",
      "Defense",
      "Medical Devices",
      "Metals",
    ],
    coreServices:
      "RTLS Digital Twin Platform, Forklift Fleet Manager, WIP Inventory Management, Patient Flow, Staff/Duress, Infant Safety",
    keyIndustries: "Manufacturing, Healthcare, Warehousing, Automotive, Aerospace, Defense, Medical Devices, Metals",
    uniqueSellingPoint:
      "Unified RTLS & Digital Twin Platform for complete operational intelligence, vendor & technology agnostic.",
  },
  {
    name: "Litum",
    description:
      "Digital Transformation, Locating Systems, Employee Safety, Asset Tracking, Forklift Collision Warning, Indoor Location Services, Forklift Tracking, Infant Security, Staff Duress Systems, Patient Flow, Emergency Mustering",
    website: "https://litum.com",
    location: "Izmir, Turkey",
    region: "Europe",
    specialties: ["UWB", "RFID", "BLE"],
    industries: [
      "Healthcare",
      "Manufacturing",
      "Supply Chain",
      "Logistics",
      "Construction",
      "Energy",
      "Aviation",
      "Education",
    ],
    coreServices:
      "Digital Transformation, Locating Systems, Employee Safety, Asset Tracking, Forklift Collision Warning, Indoor Location Services, Forklift Tracking, Infant Security, Staff Duress Systems, Patient Flow, Emergency Mustering",
    keyIndustries: "Healthcare, Manufacturing, Supply Chain, Logistics, Construction, Energy, Aviation, Education",
    uniqueSellingPoint:
      "Improved accuracy with TWR & TDoA location detection methods, Turnkey Provider with In-House R&D",
  },
  {
    name: "Sick",
    description: "Logistics optimization, Asset tracking, Factory & logistics automation, Safety & sensor integration",
    website: "https://www.sick.com",
    location: "Waldkirch, Germany",
    region: "Europe",
    specialties: ["UWB", "RFID", "LiDAR"],
    industries: ["Consumer Goods", "Automotive", "Electronics", "Machines & Materials", "Logistics"],
    coreServices: "Logistics optimization, Asset tracking, Factory & logistics automation, Safety & sensor integration",
    keyIndustries: "Consumer Goods, Automotive, Electronics, Machines & Materials, Logistics",
    uniqueSellingPoint: "Open architecture RTLS supports omlox standards and many integration combos",
  },
  {
    name: "Zebra Technologies",
    description: "Workflow management solutions for various industries",
    website: "https://www.zebra.com",
    location: "Illinois, USA",
    region: "North America",
    specialties: ["UWB", "RFID"],
    industries: [
      "Retail",
      "Healthcare",
      "Manufacturing",
      "Transportation and Logistics",
      "Government",
      "Hospitality",
      "Field Operations",
      "Mobile Technology for Energy and Utilities",
      "Banking",
    ],
    coreServices: "Workflow management",
    keyIndustries:
      "Retail, Healthcare, Manufacturing, Transportation and Logistics, Government, Hospitality, Field Operations, Mobile Technology for Energy and Utilities, Banking",
    uniqueSellingPoint: "Comprehensive workflow management solutions across multiple industries",
  },
  {
    name: "Securitas Healthcare",
    description:
      "Senior Living Management, Infant Protection, Elopement Management, Staff Duress, Regulatory Compliance, Wander Management, Resident Safety",
    website: "https://www.securitashealthcare.com",
    location: "Nebraska, USA",
    region: "North America",
    specialties: ["Wi-Fi", "BLE", "Low Frequency", "Ultrasound", "Passive RFID"],
    industries: ["Hospitals & Healthcare"],
    coreServices:
      "Senior Living Management, Infant Protection, Elopement Management, Staff Duress, Regulatory Compliance, Wander Management, Resident Safety",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint:
      "Unified platform from infant to asset to staff safety, deep workflow integration, ultrasound precision via Sonitor partnership",
  },
  {
    name: "CenTrak",
    description:
      "Asset management, Clinical workflow, Infection Control, Staff & Patient Safety, Environmental Monitoring",
    website: "https://centrak.com",
    location: "Pennsylvania, USA",
    region: "North America",
    specialties: ["BLE", "CenTrak UHF", "Wi-Fi", "Low Frequency", "Gen2IR"],
    industries: ["Hospitals & Healthcare"],
    coreServices:
      "Asset management, Clinical workflow, Infection Control, Staff & Patient Safety, Environmental Monitoring",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint:
      "Scalable RTLS with deep clinical workflow integration and unified safety and asset tracking in one platform",
  },
  {
    name: "MicroVision",
    description: "Safety & security solutions, Collision avoidance",
    website: "https://www.microvision.com",
    location: "Washington, USA",
    region: "North America",
    specialties: ["LiDAR"],
    industries: [
      "Automotive & Trucking",
      "Warehouse & Logistics",
      "Port & Yard Automation",
      "Agriculture & Mower",
      "Mining & Construction",
    ],
    coreServices: "Safety & security solutions, Collision avoidance",
    keyIndustries:
      "Automotive & Trucking, Warehouse & Logistics, Port & Yard Automation, Agriculture & Mower, Mining & Construction",
    uniqueSellingPoint:
      "MEMS-based laser beam scanning technology that integrates MEMS, lasers, optics, hardware, algorithms and machine learning software",
  },
  {
    name: "TeleTracking Technologies Inc",
    description:
      "Patient tracking, Asset tracking, Staff/workflow coordination, Bed and discharge automation, Clinical workflow intelligence",
    website: "https://www.teletracking.com",
    location: "Pittsburgh, USA",
    region: "North America",
    specialties: ["BLE", "Wi-Fi"],
    industries: ["Hospitals & Healthcare"],
    coreServices:
      "Patient tracking, Asset tracking, Staff/workflow coordination, Bed and discharge automation, Clinical workflow intelligence",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint:
      "Operations IQ® platform combines RTLS with clinical workflow automation, predictive analytics, and command center visibility",
  },
  {
    name: "Midmark",
    description:
      "Nurse Call Automation, Asset Tracking, Staff Safety, Temperature Monitoring, Contact Tracking, Patient Flow + Dentistry & Veterinary services",
    website: "https://www.midmark.com",
    location: "Ohio, USA",
    region: "North America",
    specialties: ["BLE", "Wi-Fi"],
    industries: ["Healthcare & Wellness Industry"],
    coreServices:
      "Nurse Call Automation, Asset Tracking, Staff Safety, Temperature Monitoring, Contact Tracking, Patient Flow + Dentistry & Veterinary services",
    keyIndustries: "Healthcare & Wellness Industry",
    uniqueSellingPoint: "Comprehensive healthcare solutions including dentistry and veterinary services",
  },
  {
    name: "Slamcore",
    description:
      "Real-time location, mapping and perception solutions, Industrial Automation, Material Handling, Intralogistics, Artificial Intelligence, Positioning, Localization, and Object Detection",
    website: "https://www.slamcore.com",
    location: "England, UK",
    region: "Europe",
    specialties: ["SLAM"],
    industries: ["Manufacturing & Logistics", "Artificial Intelligence"],
    coreServices:
      "Real-time location, mapping and perception solutions, Industrial Automation, Material Handling, Intralogistics, Artificial Intelligence, Positioning, Localization, and Object Detection",
    keyIndustries: "Manufacturing & Logistics, Artificial Intelligence",
    uniqueSellingPoint:
      "Vision‑based SLAM delivers centimeter-level positioning (+/- 20 cm) and real‑time mapping on low‑cost hardware",
  },
  {
    name: "American RFID Solutions",
    description: "Workflow efficiency, inventory accuracy, asset tracking, and security",
    website: "https://www.americanrfid.com",
    location: "Illinois, USA",
    region: "North America",
    specialties: ["Active/Passive/Hybrid RFID", "GPS", "Wi-Fi"],
    industries: [
      "Healthcare",
      "Manufacturing",
      "Logistics",
      "Retail",
      "Utilities/Power",
      "Transportation (railroads)",
      "Field Operations",
    ],
    coreServices: "Workflow efficiency, inventory accuracy, asset tracking, and security",
    keyIndustries:
      "Healthcare, Manufacturing, Logistics, Retail, Utilities/Power, Transportation (railroads), Field Operations",
    uniqueSellingPoint:
      "RFID Multi-Meter provides 3D plots of singulation and read zone performance, interoperability via LLRP (low level reader protocol)",
  },
  {
    name: "Lowry Solutions",
    description:
      "Inventory tracking & control, Consulting & Implementation, Fixed asset & warehouse tracking, Supply chain standards compliance",
    website: "https://www.lowrysolutions.com",
    location: "Brighton, Michigan, USA",
    region: "North America",
    specialties: ["RFID", "UWB", "BLE"],
    industries: [
      "Government",
      "Manufacturing",
      "Warehouse & Distribution",
      "Transportation & Logistics",
      "Healthcare",
      "Retail",
    ],
    coreServices:
      "Inventory tracking & control, Consulting & Implementation, Fixed asset & warehouse tracking, Supply chain standards compliance",
    keyIndustries:
      "Government, Manufacturing, Warehouse & Distribution, Transportation & Logistics, Healthcare, Retail",
    uniqueSellingPoint: "Fully converted, tested and ready-to-use Smart Trac™ labels with Gen 2 inlays.",
  },
  {
    name: "HERE Technologies",
    description:
      "Automated Driving, EV Routing & Charging, Asset Tracking, Monetizable Services, Location Analytics, Digital Cockpit, Fleet Routing, Professional Navigation, Streamline operations",
    website: "https://www.here.com",
    location: "North Brabant, Netherlands",
    region: "Europe",
    specialties: ["GPS/GNSS", "Wi-Fi"],
    industries: [
      "Transportation & Logistics",
      "Automotive (OEMs)",
      "Smart Cities & Government",
      "Field Operations",
      "Retail",
      "& Industrial IoT",
    ],
    coreServices:
      "Automated Driving, EV Routing & Charging, Asset Tracking, Monetizable Services, Location Analytics, Digital Cockpit, Fleet Routing, Professional Navigation, Streamline operations",
    keyIndustries:
      "Transportation & Logistics, Automotive (OEMs), Smart Cities & Government, Field Operations, Retail, & Industrial IoT",
    uniqueSellingPoint: "Comprehensive location platform for automotive and enterprise applications",
  },
  {
    name: "Malin USA",
    description: "RTLS solutions provider",
    website: "https://www.malinusa.com",
    location: "Texas, USA",
    region: "North America",
    specialties: ["RTLS"],
    industries: ["Various"],
    coreServices: "RTLS solutions",
    keyIndustries: "Various",
    uniqueSellingPoint: "Specialized RTLS solutions provider",
  },
  {
    name: "Link Labs",
    description:
      "Heavy equipment tracking, WIP tracking, Compliance, Process optimization, Loss prevention, Waste reduction",
    website: "https://www.link-labs.com",
    location: "Annapolis, Maryland, USA",
    region: "North America",
    specialties: ["BLE", "XLE®", "RFID", "GPS", "Wi-Fi Sniffing"],
    industries: ["Manufacturing", "Logistics", "Elections", "Healthcare"],
    coreServices:
      "Heavy equipment tracking, WIP tracking, Compliance, Process optimization, Loss prevention, Waste reduction",
    keyIndustries: "Manufacturing, Logistics, Elections, Healthcare",
    uniqueSellingPoint:
      "Use of AirFinder XLE® tech extends life of Bluetooth LE IoT devices by 3 & improves accuracy within a meter",
  },
  {
    name: "RF Controls",
    description: "Supply chain visibility, Inventory management, Warehousing, Inbound and outbound asset tracking",
    website: "https://www.rfcontrols.com",
    location: "Missouri, USA",
    region: "North America",
    specialties: ["Passive UHF RFID"],
    industries: ["Logistics", "Manufacturing", "Retail"],
    coreServices: "Supply chain visibility, Inventory management, Warehousing, Inbound and outbound asset tracking",
    keyIndustries: "Logistics, Manufacturing, Retail",
    uniqueSellingPoint: "CS Smart Antenna > coverage up to 5000 sq. ft., tracking in 3D",
  },
  {
    name: "Tracklynk",
    description: "People Safety, Asset Utilization, Predictive Maintenance, indoor and outdoor tracking",
    website: "https://www.tracklynk.com",
    location: "Virginia, USA",
    region: "North America",
    specialties: ["RF-based Local Positioning System"],
    industries: ["Oil & Gas", "Mining", "Construction", "Manufacturing"],
    coreServices: "People Safety, Asset Utilization, Predictive Maintenance, indoor and outdoor tracking",
    keyIndustries: "Oil & Gas, Mining, Construction, Manufacturing",
    uniqueSellingPoint:
      "ATEX certified hardware suited for hazardous environments, long life and OTA (over-the-air) configuration and updates",
  },
  {
    name: "Ezurio",
    description:
      "Wireless Connectivity, Security Resilience, Lifecycle Management, Regulatory Compliance, Warehouse & Asset Tracking, Factory Automation & Tools, Cold chain monitoring",
    website: "https://www.ezurio.com",
    location: "Ohio, USA",
    region: "North America",
    specialties: ["RF", "LoRaWAN", "BLE"],
    industries: ["Healthcare", "Retail", "Manufacturing & Logistics", "Defense"],
    coreServices:
      "Wireless Connectivity, Security Resilience, Lifecycle Management, Regulatory Compliance, Warehouse & Asset Tracking, Factory Automation & Tools, Cold chain monitoring",
    keyIndustries: "Healthcare, Retail, Manufacturing & Logistics, Defense",
    uniqueSellingPoint: "Comprehensive wireless connectivity solutions with security focus",
  },
  {
    name: "Sonitor",
    description:
      "Indoor Locating & Tracking, Workflow Management, Staff & Patient Safety, Infection Control & Contact Tracing, Asset Tracking & Management, Patient Flow, Nurse Call Automation, Environmental Monitoring, Wayfinding",
    website: "https://sonitor.com",
    location: "Oslo, Norway",
    region: "Europe",
    specialties: ["Ultrasound (ULE)", "Bluetooth"],
    industries: ["Hospitals & Healthcare"],
    coreServices:
      "Indoor Locating & Tracking, Workflow Management, Staff & Patient Safety, Infection Control & Contact Tracing, Asset Tracking & Management, Patient Flow, Nurse Call Automation, Environmental Monitoring, Wayfinding",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint: "Using low-energy ultrasound capable of area‑room‑sub-room resolution",
  },
  {
    name: "Atlas RFID Store",
    description: "RFID solutions and hardware provider",
    website: "https://atlasrfidstore.com",
    location: "Alabama, USA",
    region: "North America",
    specialties: ["RFID"],
    industries: ["Various"],
    coreServices: "RFID solutions and hardware",
    keyIndustries: "Various",
    uniqueSellingPoint: "Comprehensive RFID hardware and solutions provider",
  },
  {
    name: "GlobeRanger",
    description: "IT Services and IT Consulting",
    website: "https://globeranger.com",
    location: "Texas, USA",
    region: "North America",
    specialties: ["RFID"],
    industries: ["Retail", "manufacturing", "travel", "hospitality", "defense", "aerospace"],
    coreServices: "IT Services and IT Consulting",
    keyIndustries: "Retail, manufacturing, travel, hospitality, defense, aerospace",
    uniqueSellingPoint: "IT consulting with RFID specialization",
  },
  {
    name: "Intelligent Locations",
    description: "Asset Tracking, Patient Tracking, Staff Support, Environmental Monitoring",
    website: "https://intelligentlocations.com",
    location: "North Carolina, USA",
    region: "North America",
    specialties: ["RTLS"],
    industries: ["Hospitals & Healthcare"],
    coreServices: "Asset Tracking, Patient Tracking, Staff Support, Environmental Monitoring",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint: "Healthcare-focused location intelligence solutions",
  },
  {
    name: "Samsara",
    description: "Safety & Risk Solutions, Compliance, Fleet & Equipment Monitoring, Fleet Telematics",
    website: "https://samsara.com",
    location: "San Francisco, USA",
    region: "North America",
    specialties: ["BLE", "GPS", "UWB"],
    industries: [
      "Public Sector",
      "Construction",
      "Transportation & Logistics",
      "Field Services",
      "Food & Beverage",
      "Utilities",
      "Passenger Transit",
    ],
    coreServices: "Safety & Risk Solutions, Compliance, Fleet & Equipment Monitoring, Fleet Telematics",
    keyIndustries:
      "Public Sector, Construction, Transportation & Logistics, Field Services, Food & Beverage, Utilities, Passenger Transit",
    uniqueSellingPoint: "BLE-based tracking for asset geolocation in tandem with gateways and cloud analytics",
  },
  {
    name: "TraceSafe",
    description:
      "Asset visibility, carbon management, geofencing, employee safety, location analysis, workflow optimization",
    website: "https://tracesafe.io",
    location: "Vancouver, USA",
    region: "North America",
    specialties: ["BLE", "Wi-Fi"],
    industries: ["Hospitality and Maritime", "Healthcare", "Construction", "Events and Venues", "Enterprise"],
    coreServices:
      "Asset visibility, carbon management, geofencing, employee safety, location analysis, workflow optimization",
    keyIndustries: "Hospitality and Maritime, Healthcare, Construction, Events and Venues, Enterprise",
    uniqueSellingPoint: "Comprehensive asset visibility and employee safety solutions",
  },
  {
    name: "ZeroKey",
    description:
      "Worker Safety Solutions, Supply Chain, Manufacturing Solutions, Operational Visibility, Digital process management, Process optimization",
    website: "https://zerokey.com",
    location: "Calgary, Canada",
    region: "North America",
    specialties: ["SLAM"],
    industries: ["Industrial Manufacturing", "Logistics"],
    coreServices:
      "Worker Safety Solutions, Supply Chain, Manufacturing Solutions, Operational Visibility, Digital process management, Process optimization",
    keyIndustries: "Industrial Manufacturing, Logistics",
    uniqueSellingPoint: "+/-- 1.5 mm 3D positioning accuracy",
  },
  {
    name: "Cognosos",
    description:
      "Equipment cleanliness, Assuring Compliance, Environment monitoring, Staff duress, Safety & Security, Finished Vehicle Logistics, Vehicle Quality Management, Auto Auctions, Automotive Upfitters, Trailer Yard Visibility",
    website: "https://cognosos.com",
    location: "Atlanta, USA",
    region: "North America",
    specialties: ["BLE", "GPS"],
    industries: ["Hospitals & Healthcare", "Logistics"],
    coreServices:
      "Equipment cleanliness, Assuring Compliance, Environment monitoring, Staff duress, Safety & Security, Finished Vehicle Logistics, Vehicle Quality Management, Auto Auctions, Automotive Upfitters, Trailer Yard Visibility",
    keyIndustries: "Hospitals & Healthcare, Logistics",
    uniqueSellingPoint: "Integration of AI & ML with the RTLS technology",
  },
  {
    name: "Everguard",
    description: "PPE detection, anti-colission, crane detection, fall detection, forklift safety, geofence",
    website: "https://everguard.ai",
    location: "California, USA",
    region: "North America",
    specialties: ["AI", "Computer Vision", "PLE integration"],
    industries: ["Construction", "Manufacturing"],
    coreServices: "PPE detection, anti-colission, crane detection, fall detection, forklift safety, geofence",
    keyIndustries: "Construction, Manufacturing",
    uniqueSellingPoint: "AI-powered safety solutions with computer vision",
  },
  {
    name: "Mysphera",
    description:
      "Patient flow automation, bed and operating room (OR) management, asset/patient tracking, and wayfinding navigation",
    website: "https://mysphera.com",
    location: "Valencia, Spain",
    region: "Europe",
    specialties: ["BLE"],
    industries: ["Hospitals & Healthcare"],
    coreServices:
      "Patient flow automation, bed and operating room (OR) management, asset/patient tracking, and wayfinding navigation",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint: "Comprehensive healthcare workflow automation",
  },
  {
    name: "Ubudu",
    description: "Anti-colission, wayfinding & geofencing, social distancing assistant",
    website: "https://ubudu.com",
    location: "Paris, France",
    region: "Europe",
    specialties: ["BLE", "UWB", "LoRa", "Wi-Fi"],
    industries: ["Manufacturing & Logistics", "Healthcare", "Quick Service Restaurant", "Construction"],
    coreServices: "Anti-colission, wayfinding & geofencing, social distancing assistant",
    keyIndustries: "Manufacturing & Logistics, Healthcare, Quick Service Restaurant, Construction",
    uniqueSellingPoint: "Multi-technology platform for safety and navigation",
  },
  {
    name: "Metratec",
    description: "Asset Tracking, Personnel safety, Access Control, Workflow optimization, Container management",
    website: "https://metratec.com",
    location: "Magdeburg, Germany",
    region: "Europe",
    specialties: ["RFID", "UWB"],
    industries: ["Safety", "Logistics & Manufacturing", "Retail", "OEMs"],
    coreServices: "Asset Tracking, Personnel safety, Access Control, Workflow optimization, Container management",
    keyIndustries: "Safety, Logistics & Manufacturing, Retail, OEMs",
    uniqueSellingPoint: "Angle of Arrival (AoA) system with accuracy of +/-50cm and a wide range of +100 mtrs",
  },
  {
    name: "Kathrein",
    description:
      "Intelligent Transport System, sesAutomated workflows, Shipment Verification, Inventory Management, Warehouse optimization",
    website: "https://kathrein-rfid.com",
    location: "Stephanskirchen, Germany",
    region: "Europe",
    specialties: ["RFID", "BLE", "UWB", "NFC"],
    industries: ["Logistics & supply chain", "Automotive & Manufacturing", "Transportation & Traffic", "Healthcare"],
    coreServices:
      "Intelligent Transport System, sesAutomated workflows, Shipment Verification, Inventory Management, Warehouse optimization",
    keyIndustries: "Logistics & supply chain, Automotive & Manufacturing, Transportation & Traffic, Healthcare",
    uniqueSellingPoint:
      "(K-RTLS) platform offers 3 different locating modes: Angle of Arrival (AoA), Time of Flight (ToF), Time Difference of Arrival (TDoA)",
  },
  {
    name: "Zigpos",
    description: "Employee & Visitor Management, Access control, Material Flow, Machine utilisation",
    website: "https://zigpos.com",
    location: "Dresden, Germany",
    region: "Europe",
    specialties: ["UWB"],
    industries: ["Transportation", "Logistics", "Supply Chain and Storage"],
    coreServices: "Employee & Visitor Management, Access control, Material Flow, Machine utilisation",
    keyIndustries: "Transportation, Logistics, Supply Chain and Storage",
    uniqueSellingPoint: "Fully Omlox certified UWB- Coriva (Satellites+Tags) & uses Monte-Carlo Localization",
  },
  {
    name: "RFID Discovery",
    description:
      "Mobile medical asset tracking, Theatre inventory management, Baby Tagging Systems, Wandering Patient Safety Solutions, Automatic temperature monitoring, Staff emergency call systems",
    website: "https://rfiddiscovery.com",
    location: "Milton Keynes, UK",
    region: "Europe",
    specialties: ["RFID", "BLE", "UWB", "LoRaWAN", "NFC"],
    industries: [
      "Healthcare",
      "Warehousing & Logistics",
      "Manufacturing",
      "Construction",
      "Oil & Gas",
      "Mining",
      "Aviation",
      "Retail",
    ],
    coreServices:
      "Mobile medical asset tracking, Theatre inventory management, Baby Tagging Systems, Wandering Patient Safety Solutions, Automatic temperature monitoring, Staff emergency call systems",
    keyIndustries:
      "Healthcare, Warehousing & Logistics, Manufacturing, Construction, Oil & Gas, Mining, Aviation, Retail",
    uniqueSellingPoint: "Comprehensive RFID solutions across multiple industries",
  },
  {
    name: "Telematics",
    description:
      "Fleet management, Logistics & delivery services, Car sharing, rental & leasing, E-mobility management, Utility & emergency transport, Assets & workforce, Driver safety",
    website: "https://telematics.com",
    location: "Vilnius, Lithuania",
    region: "Europe",
    specialties: ["GPS/GNSS", "BLE"],
    industries: ["Automotive", "Manufacturing"],
    coreServices:
      "Fleet management, Logistics & delivery services, Car sharing, rental & leasing, E-mobility management, Utility & emergency transport, Assets & workforce, Driver safety",
    keyIndustries: "Automotive, Manufacturing",
    uniqueSellingPoint: "Pharmaceutical-grade telematics real-time temperature and location data with ±0.5 °C accuracy",
  },
  {
    name: "Iiwari",
    description:
      "Indoor Positioning, Personnel Tracking, Asset tracking, Warehouse Management, Healthcare tracking, smart buildings, indoor navigation, route optimisation",
    website: "https://iiwari.com",
    location: "Vuokatti, Finland",
    region: "Europe",
    specialties: ["UWB"],
    industries: ["Healthcare", "Retail", "Manufacturing", "Software Companies"],
    coreServices:
      "Indoor Positioning, Personnel Tracking, Asset tracking, Warehouse Management, Healthcare tracking, smart buildings, indoor navigation, route optimisation",
    keyIndustries: "Healthcare, Retail, Manufacturing, Software Companies",
    uniqueSellingPoint: "Comprehensive indoor positioning solutions",
  },
  {
    name: "Pointr",
    description: "Indoor Mapping, Geofencing, Indoor Positioning, Indoor Navigation, Analytics",
    website: "https://pointr.tech",
    location: "London, UK",
    region: "Europe",
    specialties: ["GPS", "BLE"],
    industries: ["Healthcare", "smart workplace", "retail", "and aviation"],
    coreServices: "Indoor Mapping, Geofencing, Indoor Positioning, Indoor Navigation, Analytics",
    keyIndustries: "Healthcare, smart workplace, retail, and aviation",
    uniqueSellingPoint: "Advanced indoor mapping and navigation platform",
  },
  {
    name: "Xtag Medical",
    description: "Infant protection, Asset Tracking, Baby Tagging, Mother & Baby Monitoring",
    website: "https://xtagmedical.com",
    location: "Leeds, UK",
    region: "Europe",
    specialties: ["RFID"],
    industries: ["Hospitals & Healthcare"],
    coreServices: "Infant protection, Asset Tracking, Baby Tagging, Mother & Baby Monitoring",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint: "Specialized infant protection and monitoring solutions",
  },
  {
    name: "WiTTRA Networks AB",
    description: "Wireless mesh networking solutions",
    website: "https://wittra.se",
    location: "Stockholm, Sweden",
    region: "Europe",
    specialties: ["UWB & 6LoWPAN mesh"],
    industries: ["Industrial"],
    coreServices: "Wireless mesh networking solutions",
    keyIndustries: "Industrial",
    uniqueSellingPoint: "Accuracy from ±0.5m in 3D to ±5m",
  },
  {
    name: "Wheere",
    description:
      "Personal safety, Asset protection and asset tracking, Access to sensitive areas, Indoor and outdoor fleet geolocation, Optimizing trajectories",
    website: "https://wheere.com",
    location: "Castelnau-le-Lez, France",
    region: "Europe",
    specialties: ["Low frequency waves : 148 -174 MHz Geolocation"],
    industries: ["Industry 4.0", "Critical Sites", "Security & Defense", "Hospitals & Clinics", "Smart Cities"],
    coreServices:
      "Personal safety, Asset protection and asset tracking, Access to sensitive areas, Indoor and outdoor fleet geolocation, Optimizing trajectories",
    keyIndustries: "Industry 4.0, Critical Sites, Security & Defense, Hospitals & Clinics, Smart Cities",
    uniqueSellingPoint:
      "Accuracy: 80cm, Range: +10km, Goes through 50m concrete, range of one kilometer with just four antennas",
  },
  {
    name: "Outsight",
    description: "Airport Management, People Flow monitoring, Perimetric Security, Physical Security, Crowd Monitoring",
    website: "https://outsight.ai",
    location: "Paris, France",
    region: "Europe",
    specialties: ["LiDAR"],
    industries: ["Hospitality", "Smart City", "Sport Venues", "Airports", "Railyways", "Roadways"],
    coreServices:
      "Airport Management, People Flow monitoring, Perimetric Security, Physical Security, Crowd Monitoring",
    keyIndustries: "Hospitality, Smart City, Sport Venues, Airports, Railyways, Roadways",
    uniqueSellingPoint: "3D anonymized spatial detection throug Shift platform- compatible with all hardwares",
  },
  {
    name: "Quuppa",
    description:
      "Production & Logistic Visibility, Asset & Worker tracking, Workflow optimization, Performance Tracking, Operational Control",
    website: "https://quuppa.com",
    location: "Espoo, Finland",
    region: "Europe",
    specialties: ["Bluetooth"],
    industries: [
      "Manufacturing",
      "Logistics",
      "Healthcare",
      "Safety & Security",
      "Smart Office",
      "Retail",
      "Museums & Events",
      "Sports",
    ],
    coreServices:
      "Production & Logistic Visibility, Asset & Worker tracking, Workflow optimization, Performance Tracking, Operational Control",
    keyIndustries:
      "Manufacturing, Logistics, Healthcare, Safety & Security, Smart Office, Retail, Museums & Events, Sports",
    uniqueSellingPoint: "Bluetooth AoA/AoD sub-meter tracking",
  },
  {
    name: "Thinkin",
    description: "Manufacturing Digitization, Asset Management, Store Management",
    website: "https://thinkin.io",
    location: "Trento, Italy",
    region: "Europe",
    specialties: ["GPS & IoT"],
    industries: ["Industry 4.0", "Retail", "Healthcare"],
    coreServices: "Manufacturing Digitization, Asset Management, Store Management",
    keyIndustries: "Industry 4.0, Retail, Healthcare",
    uniqueSellingPoint: "Digital Kanban allowing integration with major ERP, MES, and WMS systems",
  },
  {
    name: "Intranav",
    description:
      "Asset & vehicle tracking, Yard & fleet management, Material flow automation, Production & logistics digital twin, Safety geofencing & collision avoidance",
    website: "https://intranav.com",
    location: "Eschborn, Germany",
    region: "Europe",
    specialties: ["UWB", "BLE", "RFID/UHF", "Wi‑Fi", "LiDAR", "GPS/LTE"],
    industries: [
      "Manufacturing & Logistics",
      "Automotive",
      "Supply Chain & Warehouse",
      "Heavy Industry",
      "Industrial Automation",
      "Smart Factories",
    ],
    coreServices:
      "Asset & vehicle tracking, Yard & fleet management, Material flow automation, Production & logistics digital twin, Safety geofencing & collision avoidance",
    keyIndustries:
      "Manufacturing & Logistics, Automotive, Supply Chain & Warehouse, Heavy Industry, Industrial Automation, Smart Factories",
    uniqueSellingPoint:
      "Multi-modal RTLS hardware/software, ±40 cm accuracy, digital‑twin and process automation platform (INTRANAV.IO + INTRALYTICS)",
  },
  {
    name: "Minew",
    description:
      "Indoor positioning, Navigation and proximity marketing, Workforce safety and management, asset management, sensing, temp/humidity monitoring, ambient light measurement, air quality monitoring, water leakage management, motion detection",
    website: "https://minew.com",
    location: "Shenzen, China",
    region: "Asia",
    specialties: ["UWB", "LoRaWAN", "Wi-Fi", "GPS/GNSS"],
    industries: [
      "Manufacturing",
      "Retail & proximity marketing",
      "Smart Offices",
      "Logistics & Warehousing",
      "Healthcare",
      "Smart Buildings",
    ],
    coreServices:
      "Indoor positioning, Navigation and proximity marketing, Workforce safety and management, asset management, sensing, temp/humidity monitoring, ambient light measurement, air quality monitoring, water leakage management, motion detection",
    keyIndustries:
      "Manufacturing, Retail & proximity marketing, Smart Offices, Logistics & Warehousing, Healthcare, Smart Buildings",
    uniqueSellingPoint: "Bluetooth AoA G2 Gateway Kits for sub-meter positioning",
  },
  {
    name: "Tatwah Technology Co. Ltd.",
    description: "BLE, NFC, RFID & other IoT solutions, Hardware provider",
    website: "https://tatwah.com",
    location: "Zhongshan, China",
    region: "Asia",
    specialties: ["BLE", "NFC", "RFID"],
    industries: [
      "Automation & Manufacturing",
      "Industry & Logistic",
      "Transportation",
      "Location & Condition Monitoring",
      "High Security Product",
      "Access Technology",
    ],
    coreServices: "BLE, NFC, RFID & other IoT solutions, Hardware provider",
    keyIndustries:
      "Automation & Manufacturing, Industry & Logistic, Transportation, Location & Condition Monitoring, High Security Product, Access Technology",
    uniqueSellingPoint: "Comprehensive IoT hardware solutions provider",
  },
  {
    name: "Inpixon",
    description:
      "Asset Tracking, Yard Management, Production Tracking, Collision Avoidance, Manufacturing Analytics, Paperless Factory, Forklift Tracking, Supply Chain Visibility",
    website: "https://inpixon.com",
    location: "Colorado, USA",
    region: "North America",
    specialties: ["UWB", "Chirp", "BLE", "GPS", "LiDAR"],
    industries: ["Smart Factories", "Warehouses", "Mining", "and Digital Supply Chains"],
    coreServices:
      "Asset Tracking, Yard Management, Production Tracking, Collision Avoidance, Manufacturing Analytics, Paperless Factory, Forklift Tracking, Supply Chain Visibility",
    keyIndustries: "Smart Factories, Warehouses, Mining, and Digital Supply Chains",
    uniqueSellingPoint:
      "Multi-tech RTLS (UWB, CSS, BLE, Wi-Fi) with digital twin mapping and AI analytics, long-range CSS mode",
  },
  {
    name: "Sensolus",
    description:
      "Asset management, Inventory management, Utilization monitoring, Maintenance management, Condition monitoring",
    website: "https://sensolus.com",
    location: "Ghent, Belgium",
    region: "Europe",
    specialties: ["GNSS", "Wi-Fi", "BLE"],
    industries: [
      "Industrial manufacturing",
      "Healthcare",
      "Automotive",
      "Transport & logistics",
      "Waste management",
      "Specialized equipment",
      "Construction",
    ],
    coreServices:
      "Asset management, Inventory management, Utilization monitoring, Maintenance management, Condition monitoring",
    keyIndustries:
      "Industrial manufacturing, Healthcare, Automotive, Transport & logistics, Waste management, Specialized equipment, Construction",
    uniqueSellingPoint:
      "Edge + cloud analytics on a scalable global IoT platform, Supports condition monitoring (temp, humidity, fill level)",
  },
  {
    name: "BlueUp",
    description:
      "Asset Tracking, Automatic Inventory, Workforce Safety, Personnel Localization, Forklift Tracking, Outdoor Tracking, Medical Equipment Tracking, Nurse Call, Medical Staff Safety, Air Quality Monitoring, Access Control, Presence Control",
    website: "https://blueup.eu",
    location: "Colle Val d'Elsa, Italy",
    region: "Europe",
    specialties: ["BLE", "Wirepas Mesh 2.4GHz"],
    industries: ["Manufacturing industry", "logistics", "healthcare and safety and security markets"],
    coreServices:
      "Asset Tracking, Automatic Inventory, Workforce Safety, Personnel Localization, Forklift Tracking, Outdoor Tracking, Medical Equipment Tracking, Nurse Call, Medical Staff Safety, Air Quality Monitoring, Access Control, Presence Control",
    keyIndustries: "Manufacturing industry, logistics, healthcare and safety and security markets",
    uniqueSellingPoint: "Multiple RTLS platform options: LocateBLE (BLE), MeshCube (Wirepas), AccuRTLS (Quuppa AoA)",
  },
  {
    name: "PDi Digital",
    description: "Process Automation, Gelocation & Tracking, Digital Displays",
    website: "https://pdidigital.com",
    location: "Steiermark, Austria",
    region: "Europe",
    specialties: ["BLE", "NB-IoT", "GPS"],
    industries: ["Automotive Retail", "Manufacturing & Logistics", "Healthcare Automation", "Building Management"],
    coreServices: "Process Automation, Gelocation & Tracking, Digital Displays",
    keyIndustries: "Automotive Retail, Manufacturing & Logistics, Healthcare Automation, Building Management",
    uniqueSellingPoint: "Combines RTLS data with interactive e-paper/digital displays for two-way user interaction",
  },
  {
    name: "Ela Innovation",
    description: "Indoor Tracking, Environmental Monitoring, IoT solutions",
    website: "https://elainnovation.com",
    location: "Montpellier, France",
    region: "Europe",
    specialties: ["BLE", "Wirepas MESH", "LoRaWan"],
    industries: ["Transport and Telematics", "Construction & Smart-Building", "Industry 4.0", "Health"],
    coreServices: "Indoor Tracking, Environmental Monitoring, IoT solutions",
    keyIndustries: "Transport and Telematics, Construction & Smart-Building, Industry 4.0, Health",
    uniqueSellingPoint: "Industry-leading ultra-low-power, long-battery-life sensors (up to 20 years autonomy) for BLE",
  },
  {
    name: "QLog",
    description: "Staff duress alerting, asset tracking, patient elopement, remote patient monitoring",
    website: "https://qlog.com",
    location: "Binyamina, Israel",
    region: "Middle East",
    specialties: ["BLE"],
    industries: ["Hospitals & Healthcare"],
    coreServices: "Staff duress alerting, asset tracking, patient elopement, remote patient monitoring",
    keyIndustries: "Hospitals & Healthcare",
    uniqueSellingPoint: "Hybrid RTLS with zero infrastructure need",
  },
  {
    name: "Omni-ID",
    description: "RFID solutions provider",
    website: "https://omni-id.com",
    location: "Texas, USA",
    region: "North America",
    specialties: ["RFID"],
    industries: ["Various"],
    coreServices: "RFID solutions",
    keyIndustries: "Various",
    uniqueSellingPoint: "Specialized RFID solutions provider",
  },
  {
    name: "Sentrics",
    description: "Risk-management, Case management, Resident engagement, Life safety, Entertainment",
    website: "https://sentrics.io",
    location: "Florida, USA",
    region: "North America",
    specialties: ["RTLS"],
    industries: ["Senior Living Communities", "Care Facilities", "Hospitals"],
    coreServices: "Risk-management, Case management, Resident engagement, Life safety, Entertainment",
    keyIndustries: "Senior Living Communities, Care Facilities, Hospitals",
    uniqueSellingPoint: "Sentrics360° suite (Ensure, Entertain, Enrich and Engage)",
  },
  {
    name: "Eliko",
    description: "UWB positioning technology provider",
    website: "https://www.eliko.ee",
    location: "Estonia",
    region: "Europe",
    specialties: ["UWB"],
    industries: ["Industrial"],
    coreServices: "UWB positioning technology",
    keyIndustries: "Industrial",
    uniqueSellingPoint: "30 cm +/- 20 cm tracking, Down to 10 ms latency and two-way communication",
  },
  {
    name: "System Loco",
    description:
      "Waste reduction, Asset tracking, Cold chain compliance, Theft preventions, Efficiency gains, Quality assurance",
    website: "https://systemloco.com",
    location: "Lancaster, UK",
    region: "Europe",
    specialties: ["GPS", "Wi-Fi", "GSM", "BLE", "UWB"],
    industries: ["Third-Party", "Logistics", "Food & Beverage", "Pharmaceuticals", "MedTech", "High-Value Goods"],
    coreServices:
      "Waste reduction, Asset tracking, Cold chain compliance, Theft preventions, Efficiency gains, Quality assurance",
    keyIndustries: "Third-Party, Logistics, Food & Beverage, Pharmaceuticals, MedTech, High-Value Goods",
    uniqueSellingPoint: "Comprehensive asset tracking with cold chain compliance",
  },
  {
    name: "Ubisense",
    description:
      "Asset tracking & management, Assembly line visibility & control, Process Visibility & Optimization, Tool & Equipment Management, Quality & Compliance",
    website: "https://ubisense.com",
    location: "Cambridge, UK",
    region: "Europe",
    specialties: ["UWB"],
    industries: ["Healthcare", "Automotive", "Manufacturing", "Army & Defense", "Aviation", "Aerospace"],
    coreServices:
      "Asset tracking & management, Assembly line visibility & control, Process Visibility & Optimization, Tool & Equipment Management, Quality & Compliance",
    keyIndustries: "Healthcare, Automotive, Manufacturing, Army & Defense, Aviation, Aerospace",
    uniqueSellingPoint: "Dimension4 UWB with dual-mode (AoA + TDoA) for precision tracking",
  },
  {
    name: "Sentrax",
    description: "Proximity Tracking, Accurate Tracking, Hybrid tracking, Indoor positioning",
    website: "https://sentrax.com",
    location: "Root, Switzerland",
    region: "Europe",
    specialties: ["BLE"],
    industries: ["Smart buildings & cities", "Healthcare & Hospitals", "Manufacturing & Warehouse"],
    coreServices: "Proximity Tracking, Accurate Tracking, Hybrid tracking, Indoor positioning",
    keyIndustries: "Smart buildings & cities, Healthcare & Hospitals, Manufacturing & Warehouse",
    uniqueSellingPoint: "Advanced BLE tracking solutions",
  },
  {
    name: "Notinote",
    description: "Positioning & Monitoring mobile objects, Environment detection",
    website: "https://notinote.com",
    location: "Poland",
    region: "Europe",
    specialties: ["BLE"],
    industries: ["Various"],
    coreServices: "Positioning & Monitoring mobile objects, Environment detection",
    keyIndustries: "Various",
    uniqueSellingPoint: "Mobile object positioning and monitoring",
  },
  {
    name: "ITL Group",
    description: "Supply Chain Visibility, Inventory Management, Omni Channel Integration, Loss Prevention",
    website: "https://itlgroup.com",
    location: "London, UK",
    region: "Europe",
    specialties: ["RFID"],
    industries: ["Manufacturing", "Textile", "Logistics", "Fashion & Apparel"],
    coreServices: "Supply Chain Visibility, Inventory Management, Omni Channel Integration, Loss Prevention",
    keyIndustries: "Manufacturing, Textile, Logistics, Fashion & Apparel",
    uniqueSellingPoint: "Specialized in textile and fashion industry solutions",
  },
  {
    name: "Globos",
    description: "Asset & personnel tracking, location-based workflow automation",
    website: "https://globos.com",
    location: "Hannover, Germany",
    region: "Europe",
    specialties: ["WLAN", "RFID", "BLE & UWB"],
    industries: ["Logistics", "Manufacturing", "Retail", "Healthcare"],
    coreServices: "Asset & personnel tracking, location-based workflow automation",
    keyIndustries: "Logistics, Manufacturing, Retail, Healthcare",
    uniqueSellingPoint: "Multi-technology platform for workflow automation",
  },
  {
    name: "IndoorAtlas",
    description: "Positioning, Wayfinding, Geofence, heatmap, Augmented Reality",
    website: "https://www.indooratlas.com",
    location: "Oulu, Finland",
    region: "Europe",
    specialties: ["GPS", "Wi-Fi / BLE / RTT"],
    industries: ["Various"],
    coreServices: "Positioning, Wayfinding, Geofence, heatmap, Augmented Reality",
    keyIndustries: "Various",
    uniqueSellingPoint: "Magnetic positioning technology",
  },
  {
    name: "InVirtus",
    description: "inventory monitoring, flow visualization, indoor/out",
    website: "https://invirtus.com",
    location: "Nantes, France",
    region: "Europe",
    specialties: ["GPS", "RFID", "BLE"],
    industries: [
      "Defense",
      "Naval",
      "Transport",
      "Logistics",
      "Automotive",
      "Health",
      "Construction",
      "Administrations",
      "Agriculture",
      "Luxury",
    ],
    coreServices: "inventory monitoring, flow visualization, indoor/out",
    keyIndustries:
      "Defense, Naval, Transport, Logistics, Automotive, Health, Construction, Administrations, Agriculture, Luxury",
    uniqueSellingPoint:
      "Plug-and-play BLE tracker with hybrid indoor/outdoor mode, cloud UI/dashboard with alerts and analytics",
  },
  {
    name: "Actility",
    description: "LoRaWAN network solutions",
    website: "https://www.actility.com",
    location: "Paris, France",
    region: "Europe",
    specialties: ["LoRaWAN"],
    industries: ["Smart Buldings", "Logistics & Supply chain", "Energy & Utilities", "Smart industries"],
    coreServices: "LoRaWAN network solutions",
    keyIndustries: "Smart Buldings, Logistics & Supply chain, Energy & Utilities, Smart industries",
    uniqueSellingPoint: "Leading LoRaWAN network platform",
  },
  {
    name: "Peak Technologies",
    description: "Asset visibility, Mobile workforce management, Supply chain & warehouse analytics",
    website: "https://peaktech.com",
    location: "Colorado, USA",
    region: "North America",
    specialties: ["RFID", "BLE"],
    industries: ["Healthcare", "Manufacturing & Warehousing", "Retail", "Transportation & Logistics"],
    coreServices: "Asset visibility, Mobile workforce management, Supply chain & warehouse analytics",
    keyIndustries: "Healthcare, Manufacturing & Warehousing, Retail, Transportation & Logistics",
    uniqueSellingPoint: "Comprehensive asset visibility solutions",
  },
  {
    name: "Telebeacon Solutions Pvt. Ltd.",
    description: "BLE beacon solutions provider",
    website: "https://telebeacon.com",
    location: "Telangana, India",
    region: "Asia",
    specialties: ["BLE"],
    industries: ["Various"],
    coreServices: "BLE beacon solutions",
    keyIndustries: "Various",
    uniqueSellingPoint: "Specialized BLE beacon solutions",
  },
  {
    name: "Hornbird Technology",
    description: "IoT and wireless solutions provider",
    website: "https://hornbird.com",
    location: "Hong Kong",
    region: "Asia",
    specialties: ["BLE"],
    industries: ["Various"],
    coreServices: "IoT and wireless solutions",
    keyIndustries: "Various",
    uniqueSellingPoint: "IoT and wireless technology solutions",
  },
  {
    name: "EPM",
    description: "Asset Tracking, Physical Access control, Identity Management, Warehouse Management",
    website: "https://epm.com",
    location: "UAE",
    region: "Middle East",
    specialties: ["BLE", "RFID"],
    industries: ["Manufacuring & Logistics"],
    coreServices: "Asset Tracking, Physical Access control, Identity Management, Warehouse Management",
    keyIndustries: "Manufacuring & Logistics",
    uniqueSellingPoint: "Comprehensive access control and asset tracking",
  },
  {
    name: "SADELABS",
    description:
      "Collision avoidance & proximity warning, cold chain monitoring, asset tracking, industrial equipment monitoring, and personnel tracking",
    website: "https://sadelabs.com",
    location: "Izmir, Turkey",
    region: "Europe",
    specialties: ["GSM", "LTE", "NB-IoT", "Wi-Fi", "Bluetooth Low Energy", "NFC", "LoRa", "Sigfox"],
    industries: ["Manufacturing", "energy", "healthcare", "retail", "vending", "security industries"],
    coreServices:
      "Collision avoidance & proximity warning, cold chain monitoring, asset tracking, industrial equipment monitoring, and personnel tracking",
    keyIndustries: "Manufacturing, energy, healthcare, retail, vending, security industries",
    uniqueSellingPoint: "Multi-technology IoT platform for industrial applications",
  },
  {
    name: "AetherIOT",
    description:
      "Warehouse pallet tracking, Worker tracking and environment sensoring, Staff & patient tracking & fall detection, medical equipment tracking, environment tracking",
    website: "https://aetheriot.com",
    location: "Singapore",
    region: "Asia",
    specialties: ["Wireless Mesh", "UWB", "LoRaWAN"],
    industries: [
      "Supply chain",
      "Oil & Gas",
      "Patient care",
      "Cold storage logistics",
      "construction",
      "event management",
    ],
    coreServices:
      "Warehouse pallet tracking, Worker tracking and environment sensoring, Staff & patient tracking & fall detection, medical equipment tracking, environment tracking",
    keyIndustries: "Supply chain, Oil & Gas, Patient care, Cold storage logistics, construction, event management",
    uniqueSellingPoint: "40%+ lower pricing vs. other providers",
  },
  {
    name: "IntraPosition",
    description: "Indoor positioning and navigation systems, asset tracking, operational flow optimization",
    website: "https://intraposition.com",
    location: "Ramat Gan, Israel",
    region: "Middle East",
    specialties: ["BLE", "UWB", "Wi-Fi"],
    industries: ["Logistics", "Manufacturing", "Retail", "Healthcare"],
    coreServices: "Indoor positioning and navigation systems, asset tracking, operational flow optimization",
    keyIndustries: "Logistics, Manufacturing, Retail, Healthcare",
    uniqueSellingPoint:
      "Mix-and-match sensors, cores, and bases without soldering through an Arduino-compatible firmware",
  },
  {
    name: "Rakon",
    description: "Frequency control and timing solutions",
    website: "https://rakon.com",
    location: "Auckland, New Zealand",
    region: "Oceania",
    specialties: ["GNSS", "GPS"],
    industries: ["Telecommunication", "Space", "Defense", "Automotive"],
    coreServices: "Frequency control and timing solutions",
    keyIndustries: "Telecommunication, Space, Defense, Automotive",
    uniqueSellingPoint: "Precision frequency control solutions",
  },
  {
    name: "Lansitec",
    description: "Safety & Compliance, Environmental Monitoring",
    website: "https://lansitec.com",
    location: "Nanjing, China",
    region: "Asia",
    specialties: ["Bluetooth®", "LoRaWAN", "NB-IoT", "UWB"],
    industries: ["Manufacturing & Logistics", "Construction", "Hospitals", "Transport", "Safety & Security"],
    coreServices: "Safety & Compliance, Environmental Monitoring",
    keyIndustries: "Manufacturing & Logistics, Construction, Hospitals, Transport, Safety & Security",
    uniqueSellingPoint:
      "Rugged IP68 tracker combining GNSS, LoRaWAN, and Bluetooth with ultra-long battery life, tamper alerts, and indoor-outdoor visibility in one device",
  },
  {
    name: "RT Smart Data",
    description: "Healthy Workspaces, Targeted IOT Analytics, Occupancy Management",
    website: "https://rtsmartdata.com",
    location: "Carlow, Ireland",
    region: "Europe",
    specialties: ["UWB", "IoT"],
    industries: ["Business", "Logistics", "Cold Storage"],
    coreServices: "Healthy Workspaces, Targeted IOT Analytics, Occupancy Management",
    keyIndustries: "Business, Logistics, Cold Storage",
    uniqueSellingPoint: "Smart workspace analytics and occupancy management",
  },
  {
    name: "TTI Inc. The IP&E Specialist",
    description: "Product line & Supply chain solutions",
    website: "https://tti.com",
    location: "Texas, USA",
    region: "North America",
    specialties: ["RF Wireless"],
    industries: ["Industrial", "military", "aerospace and consumer electronic manufacturers"],
    coreServices: "Product line & Supply chain solutions",
    keyIndustries: "Industrial, military, aerospace and consumer electronic manufacturers",
    uniqueSellingPoint: "Specialized in electronic components and supply chain",
  },
  {
    name: "Redpoint",
    description: "Social Distancing, Personnel and Vehicle Safety, Operations Management, Technology Integration",
    website: "https://redpointpositioning.com",
    location: "Boston, USA",
    region: "North America",
    specialties: ["BLE", "UWB"],
    industries: ["Warehouses", "Chemical Plants", "AGV/AMR Crew Safety", "Seaport and Airport", "Manufacture Plant"],
    coreServices: "Social Distancing, Personnel and Vehicle Safety, Operations Management, Technology Integration",
    keyIndustries: "Warehouses, Chemical Plants, AGV/AMR Crew Safety, Seaport and Airport, Manufacture Plant",
    uniqueSellingPoint: "Sub-20 cm accuracy with millisecond latency, deployable without Wi-Fi",
  },
  {
    name: "Omnilink",
    description: "Tracking, fleet management, load baiting, risk management, & advanced telemetry",
    website: "https://omnilink.com",
    location: "São Paulo, Brazil",
    region: "South America",
    specialties: ["Fleet Management"],
    industries: ["Automotive", "Transport & Logistics", "Retail"],
    coreServices: "Tracking, fleet management, load baiting, risk management, & advanced telemetry",
    keyIndustries: "Automotive, Transport & Logistics, Retail",
    uniqueSellingPoint: "Omnifleet & Omnitelemetry providing holistic fleet management & vehicle tracking",
  },
  {
    name: "Sensoro",
    description:
      "Environmental Monitoring, IoT products, Smart security solutions, Location Service, Safety Monitoring, Gas & Leak Detections",
    website: "https://www.sensoro.com",
    location: "Beijing, China",
    region: "Asia",
    specialties: ["BLE", "IoT", "LPWAN"],
    industries: ["Safety & Security", "Cultural & Religious", "Smart Cities", "Smart Home"],
    coreServices:
      "Environmental Monitoring, IoT products, Smart security solutions, Location Service, Safety Monitoring, Gas & Leak Detections",
    keyIndustries: "Safety & Security, Cultural & Religious, Smart Cities, Smart Home",
    uniqueSellingPoint: "Offer a holistic IoT platform with Alpha Product Suite with 120 sq miles of coverage",
  },
  {
    name: "Impinj",
    description:
      "Asset Management, Automated Checkout, Baggage Tracking, Inventory Management, Loss Prevention, Product Authentication, Shipment Verification, Supply Chain Automation",
    website: "https://www.impinj.com",
    location: "Seattle, USA",
    region: "North America",
    specialties: ["RFID"],
    industries: [
      "Airlines & Airports",
      "Healthcare",
      "Hospitality",
      "Manufacturing & Automotive",
      "Retail",
      "Supply Chain & Logistics Solutions",
    ],
    coreServices:
      "Asset Management, Automated Checkout, Baggage Tracking, Inventory Management, Loss Prevention, Product Authentication, Shipment Verification, Supply Chain Automation",
    keyIndustries:
      "Airlines & Airports, Healthcare, Hospitality, Manufacturing & Automotive, Retail, Supply Chain & Logistics Solutions",
    uniqueSellingPoint: "Leading RAIN RFID platform and solutions",
  },
  {
    name: "RedLore",
    description:
      "Location Tracking, Inventory management, Cold storage monitoring, People tracking, Vendor Managed Inventory & Consignment stocking, Environmental monitoring, Spare parts management",
    website: "https://redlore.com",
    location: "Ontario, Canada",
    region: "North America",
    specialties: ["RTLS"],
    industries: [
      "Manufacturing",
      "Automotive",
      "Aerospace",
      "Wholesale",
      "Distribution",
      "Pharma",
      "Warehousing",
      "Defence",
      "3PL",
    ],
    coreServices:
      "Location Tracking, Inventory management, Cold storage monitoring, People tracking, Vendor Managed Inventory & Consignment stocking, Environmental monitoring, Spare parts management",
    keyIndustries: "Manufacturing, Automotive, Aerospace, Wholesale, Distribution, Pharma, Warehousing, Defence, 3PL",
    uniqueSellingPoint:
      "Positioning accuracy down to 30 cm or 1 ft, 100% wire-free, Up to 80% lower Total Cost of Ownership compared with other solutions",
  },
  {
    name: "Kinexon",
    description:
      "AMR & AGV fleet management, Order Tracking & Process Management, Asset Tracking, Assembly Line Control",
    website: "https://kinexon.com",
    location: "Munich, Germany",
    region: "Europe",
    specialties: ["UWB", "Mesh"],
    industries: ["Automotive", "Aerospace & Defense", "Machinery & Equipment", "Intralogistics"],
    coreServices:
      "AMR & AGV fleet management, Order Tracking & Process Management, Asset Tracking, Assembly Line Control",
    keyIndustries: "Automotive, Aerospace & Defense, Machinery & Equipment, Intralogistics",
    uniqueSellingPoint: "KINEXON RTLS Mesh: ROI in <1 year, <100ms Latency in Industrial Environments",
  },
  {
    name: "Accuware",
    description: "Indoor positioning solutions provider",
    website: "https://www.accuware.com",
    location: "Florida, USA",
    region: "North America",
    specialties: ["Indoor Positioning"],
    industries: ["Various"],
    coreServices: "Indoor positioning solutions",
    keyIndustries: "Various",
    uniqueSellingPoint: "Advanced indoor positioning technology",
  },
  {
    name: "Apptricity",
    description: "Asset Tracking, Inventory & Work Order Management, Field Services, Spend & Travel Management",
    website: "https://www.apptricity.com",
    location: "Texas, USA",
    region: "North America",
    specialties: ["IoT", "RFID", "GPS", "BLE"],
    industries: [
      "Department of Defense",
      "Government",
      "Construction",
      "Healthcare",
      "Retail",
      "Logistics",
      "Telecommunications",
      "Energy",
    ],
    coreServices: "Asset Tracking, Inventory & Work Order Management, Field Services, Spend & Travel Management",
    keyIndustries:
      "Department of Defense, Government, Construction, Healthcare, Retail, Logistics, Telecommunications, Energy",
    uniqueSellingPoint: "20-Mile Bluetooth Beacon",
  },
  {
    name: "Blickfeld GmbH",
    description:
      "Volume Monitoring, threat detection and alarm generation, Crowd Analytics, Traffic & Infrastructure management, Automation & Mobility",
    website: "https://www.blickfeld.com",
    location: "Munich, Germany",
    region: "Europe",
    specialties: ["LiDAR"],
    industries: ["Security", "Automotive", "Infrastructure", "Electronics Manufacturing"],
    coreServices:
      "Volume Monitoring, threat detection and alarm generation, Crowd Analytics, Traffic & Infrastructure management, Automation & Mobility",
    keyIndustries: "Security, Automotive, Infrastructure, Electronics Manufacturing",
    uniqueSellingPoint: "Advanced LiDAR solutions for various applications",
  },
  {
    name: "Cepton",
    description: "Crowd analytics, Intelligent transportation systems",
    website: "https://www.cepton.com",
    location: "California, USA",
    region: "North America",
    specialties: ["LiDAR"],
    industries: ["ADAS", "Autonomous Vehicles (AV)", "Smart Infrastructure markets"],
    coreServices: "Crowd analytics, Intelligent transportation systems",
    keyIndustries: "ADAS, Autonomous Vehicles (AV), Smart Infrastructure markets",
    uniqueSellingPoint: "Proprietary micro-optical modules",
  },
  {
    name: "Ciholas",
    description:
      "Embedded Technology solutions, Design Work, Invention and Patent Work, Network Protocol Development, Regulatory and Safety Compliance, Manufacturing Support and Repair, Product Life Cycle Support",
    website: "https://ciholas.com",
    location: "Indiana, USA",
    region: "North America",
    specialties: ["UWB", "Wifi"],
    industries: ["Various"],
    coreServices:
      "Embedded Technology solutions, Design Work, Invention and Patent Work, Network Protocol Development, Regulatory and Safety Compliance, Manufacturing Support and Repair, Product Life Cycle Support",
    keyIndustries: "Various",
    uniqueSellingPoint: "Comprehensive embedded technology solutions",
  },
  {
    name: "Cisco Meraki",
    description: "Cloud-managed networking solutions",
    website: "https://meraki.cisco.com",
    location: "California, USA",
    region: "North America",
    specialties: ["Wi-Fi"],
    industries: [
      "Financial Services",
      "Manufacturing",
      "Government",
      "Healthcare",
      "Retail",
      "Education",
      "Small Business",
      "Hospitality",
      "Physical Security",
    ],
    coreServices: "Cloud-managed networking solutions",
    keyIndustries:
      "Financial Services, Manufacturing, Government, Healthcare, Retail, Education, Small Business, Hospitality, Physical Security",
    uniqueSellingPoint: "Cloud-managed Wi-Fi and networking solutions",
  },
  {
    name: "MachineQ",
    description: "LoRaWAN network provider",
    website: "https://machineq.com",
    location: "Pennsylvania, USA",
    region: "North America",
    specialties: ["LoRaWAN®", "LPWAN"],
    industries: ["Various"],
    coreServices: "LoRaWAN network services",
    keyIndustries: "Various",
    uniqueSellingPoint: "Enterprise LoRaWAN network platform",
  },
  {
    name: "Digital Matter",
    description:
      "Cold Chain Monitoring, Fleet Tracking and Management, Logistics, Remote Sensor Monitoring, Supply Chain Visibility",
    website: "https://www.digitalmatter.com",
    location: "Perth, Australia",
    region: "Oceania",
    specialties: ["LoRaWAN®", "GPS", "BLE"],
    industries: ["Various"],
    coreServices:
      "Cold Chain Monitoring, Fleet Tracking and Management, Logistics, Remote Sensor Monitoring, Supply Chain Visibility",
    keyIndustries: "Various",
    uniqueSellingPoint: "Comprehensive tracking and monitoring solutions",
  },
  {
    name: "Estimote Inc.",
    description: "Sensor-based analytics, Cloud and Content Management",
    website: "https://estimote.com",
    location: "New York, USA",
    region: "North America",
    specialties: ["UWB", "LTE/NB-IoT", "Wi-Fi"],
    industries: ["Bricks-and-mortar retail stores"],
    coreServices: "Sensor-based analytics, Cloud and Content Management",
    keyIndustries: "Bricks-and-mortar retail stores",
    uniqueSellingPoint: "Advanced sensor analytics for retail",
  },
  {
    name: "Favendo",
    description: "Indoor positioning and navigation solutions",
    website: "https://www.favendo.com",
    location: "Bamberg, Germany",
    region: "Europe",
    specialties: ["NFC", "BLE", "IoT", "GPS"],
    industries: ["Industry 4.0", "Healthcare", "Mining", "Cruise Ships", "Leisure Facilities", "Smart Buildings"],
    coreServices: "Indoor positioning and navigation solutions",
    keyIndustries: "Industry 4.0, Healthcare, Mining, Cruise Ships, Leisure Facilities, Smart Buildings",
    uniqueSellingPoint: "Multi-technology indoor positioning platform",
  },
  {
    name: "GiPStech",
    description: "Positioning technology provider",
    website: "https://www.gipstech.com",
    location: "Italy",
    region: "Europe",
    specialties: ["Positioning"],
    industries: ["Various"],
    coreServices: "Positioning technology",
    keyIndustries: "Various",
    uniqueSellingPoint: "Advanced positioning technology solutions",
  },
  {
    name: "Hexagon",
    description: "Asset Lifecycle Intelligence, Autonomous Solutions, Manufacturing Intelligence",
    website: "https://hexagon.com",
    location: "Stockholm, Sweden",
    region: "Europe",
    specialties: ["GNSS/INS"],
    industries: [
      "Agriculture",
      "Geospatial",
      "Industrial asset lifecycle",
      "Manufacturing",
      "Mining",
      "Positioning",
      "Safety, security and surveillance",
      "Surveying and construction",
    ],
    coreServices: "Asset Lifecycle Intelligence, Autonomous Solutions, Manufacturing Intelligence",
    keyIndustries:
      "Agriculture, Geospatial, Industrial asset lifecycle, Manufacturing, Mining, Positioning, Safety, security and surveillance, Surveying and construction",
    uniqueSellingPoint: "Comprehensive digital reality solutions",
  },
  {
    name: "Humatics",
    description:
      "Automotive & Semiconductor Manufacturing, Dynamic Material Handling, Predictive Maintenance, Indoor Localization",
    website: "https://humatics.com",
    location: "Massachusetts, USA",
    region: "North America",
    specialties: ["IoT", "AI"],
    industries: ["Manufacturing", "Mobility", "Smart Factories"],
    coreServices:
      "Automotive & Semiconductor Manufacturing, Dynamic Material Handling, Predictive Maintenance, Indoor Localization",
    keyIndustries: "Manufacturing, Mobility, Smart Factories",
    uniqueSellingPoint: "MILO automation with sub-millimeter positioning hundreds of times per second",
  },
  {
    name: "Indoo.rs",
    description: "Asset Tracking, indoor positioning, indoor mapping, and indoor analytics",
    website: "https://indoo.rs",
    location: "Austria",
    region: "Europe",
    specialties: ["BLE", "Wi-Fi"],
    industries: [
      "Architecture, Engineering & Construction",
      "Business",
      "Conservation",
      "Education",
      "Energy Utilities",
      "Facilities Management",
      "Health & Human Services",
      "Government",
      "Natural Resources",
      "Nonprofit",
      "Public Safety",
      "Science",
      "Sustainable Development",
      "Telecommunications",
      "Transportation",
    ],
    coreServices: "Asset Tracking, indoor positioning, indoor mapping, and indoor analytics",
    keyIndustries:
      "Architecture, Engineering & Construction, Business, Conservation, Education, Energy Utilities, Facilities Management, Health & Human Services, Government, Natural Resources, Nonprofit, Public Safety, Science, Sustainable Development, Telecommunications, Transportation",
    uniqueSellingPoint: "Comprehensive indoor positioning and analytics platform",
  },
  {
    name: "Intelligent InSites",
    description:
      "Patient Flow, Business Intelligence, Infection Control, Temperature Monitoring, Asset Management, Healthcare Operations",
    website: "https://www.intelligentinsites.com",
    location: "North Dakota, USA",
    region: "North America",
    specialties: ["RFID"],
    industries: ["Healthcare"],
    coreServices:
      "Patient Flow, Business Intelligence, Infection Control, Temperature Monitoring, Asset Management, Healthcare Operations",
    keyIndustries: "Healthcare",
    uniqueSellingPoint: "Healthcare-focused operational intelligence",
  },
  {
    name: "Kerlink",
    description: "LoRaWAN network infrastructure provider",
    website: "https://www.kerlink.com",
    location: "Thorigné-Fouillard, France",
    region: "Europe",
    specialties: ["LoRaWAN", "IoT"],
    industries: ["Smart City & Quality of Life", "Smart Agriculture & Environment", "Smart Building & Industry"],
    coreServices: "LoRaWAN network infrastructure",
    keyIndustries: "Smart City & Quality of Life, Smart Agriculture & Environment, Smart Building & Industry",
    uniqueSellingPoint: "Leading LoRaWAN infrastructure solutions",
  },
]

const practitioners = [
  {
    name: "Dr. Sarah Chen",
    title: "RTLS Implementation Specialist",
    organization: "Global Health Systems",
    expertise: ["Healthcare RTLS", "Process Optimization", "UWB"],
    location: "Boston, USA",
    linkedin: "https://www.linkedin.com",
    email: "sarah.chen@example.com",
  },
  {
    name: "Michael Rodriguez",
    title: "Manufacturing Technology Lead",
    organization: "Advanced Manufacturing Solutions",
    expertise: ["Industrial IoT", "Digital Twin", "Process Automation"],
    location: "Detroit, USA",
    linkedin: "https://www.linkedin.com",
    email: "michael.rodriguez@example.com",
  },
  {
    name: "Emma Johansson",
    title: "Logistics Innovation Director",
    organization: "Nordic Supply Chain Group",
    expertise: ["Supply Chain Visibility", "RTLS Integration", "Warehouse Optimization"],
    location: "Stockholm, Sweden",
    linkedin: "https://www.linkedin.com",
    email: "emma.johansson@example.com",
  },
  {
    name: "Dr. James Wilson",
    title: "RTLS Research Lead",
    organization: "Tech University",
    expertise: ["Location Algorithms", "Signal Processing", "UWB Technology"],
    location: "Cambridge, UK",
    linkedin: "https://www.linkedin.com",
    email: "james.wilson@example.com",
  },
  {
    name: "Sophia Müller",
    title: "Healthcare Systems Architect",
    organization: "Medical Solutions GmbH",
    expertise: ["Hospital RTLS", "Patient Flow", "Asset Management"],
    location: "Berlin, Germany",
    linkedin: "https://www.linkedin.com",
    email: "sophia.muller@example.com",
  },
  {
    name: "Raj Patel",
    title: "Retail Technology Consultant",
    organization: "Retail Innovation Partners",
    expertise: ["Retail Analytics", "Customer Tracking", "BLE Implementation"],
    location: "London, UK",
    linkedin: "https://www.linkedin.com",
    email: "raj.patel@example.com",
  },
  {
    name: "Olivia Kim",
    title: "Smart Building Specialist",
    organization: "Future Spaces Inc.",
    expertise: ["Smart Buildings", "Occupancy Analytics", "IoT Integration"],
    location: "Singapore",
    linkedin: "https://www.linkedin.com",
    email: "olivia.kim@example.com",
  },
  {
    name: "Thomas Dubois",
    title: "RTLS Integration Engineer",
    organization: "Industrial IoT Solutions",
    expertise: ["System Integration", "Industrial Automation", "RTLS Standards"],
    location: "Lyon, France",
    linkedin: "https://www.linkedin.com",
    email: "thomas.dubois@example.com",
  },
  {
    name: "Maria Gonzalez",
    title: "Logistics Technology Director",
    organization: "Global Supply Chain Partners",
    expertise: ["Supply Chain Visibility", "Asset Tracking", "RFID"],
    location: "Barcelona, Spain",
    linkedin: "https://www.linkedin.com",
    email: "maria.gonzalez@example.com",
  },
  {
    name: "David Chen",
    title: "Manufacturing Systems Architect",
    organization: "Smart Factory Solutions",
    expertise: ["Industry 4.0", "Digital Manufacturing", "UWB Tracking"],
    location: "Shanghai, China",
    linkedin: "https://www.linkedin.com",
    email: "david.chen@example.com",
  },
  {
    name: "Anna Kowalski",
    title: "Healthcare RTLS Consultant",
    organization: "Medical Technology Advisors",
    expertise: ["Healthcare Workflows", "Staff Tracking", "Patient Safety"],
    location: "Warsaw, Poland",
    linkedin: "https://www.linkedin.com",
    email: "anna.kowalski@example.com",
  },
  {
    name: "John Smith",
    title: "Warehouse Technology Lead",
    organization: "Logistics Optimization Group",
    expertise: ["Warehouse Management", "Inventory Tracking", "Process Automation"],
    location: "Toronto, Canada",
    linkedin: "https://www.linkedin.com",
    email: "john.smith@example.com",
  },
  {
    name: "Fatima Al-Farsi",
    title: "Smart City RTLS Specialist",
    organization: "Urban Innovation Partners",
    expertise: ["Smart Cities", "Public Space Analytics", "Multi-technology RTLS"],
    location: "Dubai, UAE",
    linkedin: "https://www.linkedin.com",
    email: "fatima.alfarsi@example.com",
  },
  {
    name: "Hiroshi Tanaka",
    title: "Industrial IoT Architect",
    organization: "Manufacturing Technology Institute",
    expertise: ["Industrial IoT", "Process Optimization", "RTLS Standards"],
    location: "Tokyo, Japan",
    linkedin: "https://www.linkedin.com",
    email: "hiroshi.tanaka@example.com",
  },
  {
    name: "Elena Petrova",
    title: "Retail Analytics Lead",
    organization: "Consumer Insights Group",
    expertise: ["Retail Analytics", "Customer Journey Mapping", "BLE Beacons"],
    location: "Moscow, Russia",
    linkedin: "https://www.linkedin.com",
    email: "elena.petrova@example.com",
  },
  {
    name: "Carlos Mendoza",
    title: "Sports Venue Technology Director",
    organization: "Stadium Innovation Labs",
    expertise: ["Sports Analytics", "Fan Experience", "UWB Tracking"],
    location: "Madrid, Spain",
    linkedin: "https://www.linkedin.com",
    email: "carlos.mendoza@example.com",
  },
  {
    name: "Priya Sharma",
    title: "Healthcare IoT Consultant",
    organization: "Medical Systems Innovations",
    expertise: ["Healthcare IoT", "Patient Tracking", "RTLS Implementation"],
    location: "Mumbai, India",
    linkedin: "https://www.linkedin.com",
    email: "priya.sharma@example.com",
  },
  {
    name: "Lars Nielsen",
    title: "Logistics Technology Specialist",
    organization: "Supply Chain Innovations",
    expertise: ["Supply Chain Visibility", "Asset Tracking", "RTLS ROI"],
    location: "Copenhagen, Denmark",
    linkedin: "https://www.linkedin.com",
    email: "lars.nielsen@example.com",
  },
  {
    name: "Aisha Johnson",
    title: "Manufacturing RTLS Lead",
    organization: "Industrial Efficiency Partners",
    expertise: ["Manufacturing Workflows", "Tool Tracking", "UWB Systems"],
    location: "Chicago, USA",
    linkedin: "https://www.linkedin.com",
    email: "aisha.johnson@example.com",
  },
  {
    name: "Marco Rossi",
    title: "Retail Technology Innovator",
    organization: "Retail Experience Group",
    expertise: ["Retail Analytics", "Customer Tracking", "RTLS Integration"],
    location: "Milan, Italy",
    linkedin: "https://www.linkedin.com",
    email: "marco.rossi@example.com",
  },
  {
    name: "Leila Ahmadi",
    title: "Healthcare Systems Engineer",
    organization: "Patient Care Technologies",
    expertise: ["Hospital Workflows", "Asset Management", "Staff Safety"],
    location: "Sydney, Australia",
    linkedin: "https://www.linkedin.com",
    email: "leila.ahmadi@example.com",
  },
  {
    name: "Robert Kim",
    title: "Warehouse Automation Specialist",
    organization: "Logistics Technology Group",
    expertise: ["Warehouse Automation", "Inventory Tracking", "RTLS Implementation"],
    location: "Seoul, South Korea",
    linkedin: "https://www.linkedin.com",
    email: "robert.kim@example.com",
  },
  {
    name: "Sophie Dupont",
    title: "Smart Building Consultant",
    organization: "Workplace Innovation Partners",
    expertise: ["Workplace Analytics", "Occupancy Tracking", "IoT Integration"],
    location: "Paris, France",
    linkedin: "https://www.linkedin.com",
    email: "sophie.dupont@example.com",
  },
  {
    name: "Ahmed Hassan",
    title: "RTLS Implementation Lead",
    organization: "Location Intelligence Group",
    expertise: ["System Integration", "Multi-technology RTLS", "Project Management"],
    location: "Cairo, Egypt",
    linkedin: "https://www.linkedin.com",
    email: "ahmed.hassan@example.com",
  },
  {
    name: "Isabella Martinez",
    title: "Healthcare Technology Director",
    organization: "Medical Innovation Partners",
    expertise: ["Healthcare RTLS", "Patient Experience", "Workflow Optimization"],
    location: "Mexico City, Mexico",
    linkedin: "https://www.linkedin.com",
    email: "isabella.martinez@example.com",
  },
  {
    name: "Sven Eriksson",
    title: "Industrial IoT Specialist",
    organization: "Manufacturing Systems Group",
    expertise: ["Industrial IoT", "Asset Tracking", "Process Optimization"],
    location: "Gothenburg, Sweden",
    linkedin: "https://www.linkedin.com",
    email: "sven.eriksson@example.com",
  },
  {
    name: "Nadia Wong",
    title: "Retail RTLS Consultant",
    organization: "Customer Experience Technologies",
    expertise: ["Retail Analytics", "Customer Journey", "BLE Implementation"],
    location: "Hong Kong",
    linkedin: "https://www.linkedin.com",
    email: "nadia.wong@example.com",
  },
  {
    name: "Benjamin Cohen",
    title: "Smart City Technology Lead",
    organization: "Urban Innovation Lab",
    expertise: ["Smart Cities", "Public Space Analytics", "RTLS Standards"],
    location: "Tel Aviv, Israel",
    linkedin: "https://www.linkedin.com",
    email: "benjamin.cohen@example.com",
  },
  {
    name: "Gabriela Silva",
    title: "Logistics RTLS Specialist",
    organization: "Supply Chain Technology Partners",
    expertise: ["Supply Chain Visibility", "Yard Management", "RTLS ROI"],
    location: "São Paulo, Brazil",
    linkedin: "https://www.linkedin.com",
    email: "gabriela.silva@example.com",
  },
]

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Linkedin, Mail, ArrowRight } from "lucide-react"

const PractitionerCard = ({ practitioner }: { practitioner: any }) => {
  return (
    <Card className="w-full h-80 p-6 bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-black mb-2 text-balance">{practitioner.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{practitioner.title}</p>
        <div className="flex items-center text-gray-600 mb-4">
          <Building2 className="w-4 h-4 mr-1" />
          <span className="text-sm">{practitioner.organization}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{practitioner.location}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 mb-2">Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {practitioner.expertise.slice(0, 3).map((skill: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-800 border-blue-200 text-xs px-2 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <a href={practitioner.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn
          </Button>
        </a>
        <a href={`mailto:${practitioner.email}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </a>
      </div>
    </Card>
  )
}

const VendorCard = ({ vendor }: { vendor: any }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative w-full h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Card className="w-full h-full p-6 bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-black mb-2 text-balance">{vendor.name}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{vendor.location}</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Primary RTLS Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {vendor.specialties.slice(0, 4).map((tech: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 border-blue-200 text-xs px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {vendor.specialties.length > 4 && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-gray-200 text-xs px-2 py-1">
                      +{vendor.specialties.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">Hover to see more details</p>
            </div>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full p-6 bg-gray-50 border-2 border-blue-400 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-black mb-3">{vendor.name}</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Core Services:</p>
                  <p className="text-xs text-gray-600 line-clamp-3">{vendor.coreServices}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Key Industries:</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{vendor.keyIndustries}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Unique Selling Point:</p>
                  <p className="text-xs text-gray-600 line-clamp-4">{vendor.uniqueSellingPoint}</p>
                </div>
              </div>
            </div>

            <div className="mt-4"></div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function EcosystemClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedTechnology, setSelectedTechnology] = useState("all")
  const [activeTab, setActiveTab] = useState("vendors")

  // Get unique regions and technologies for filters
  const regions = [...new Set(vendors.map((v) => v.region))]
  const technologies = [...new Set(vendors.flatMap((v) => v.specialties))]

  // Filter vendors based on search and filters
  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "all" || vendor.region === selectedRegion

    const matchesTechnology =
      selectedTechnology === "all" || vendor.specialties.some((tech: string) => tech === selectedTechnology)

    return matchesSearch && matchesRegion && matchesTechnology
  })

  const filteredPractitioners = practitioners.filter((practitioner) => {
    const matchesSearch =
      practitioner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practitioner.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practitioner.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practitioner.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practitioner.expertise.some((skill: string) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RTLS Directory
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 text-balance">
              Find the <strong>INNOVATORS</strong> shaping the future of real-time location technology from SLAM, UWB
              and BLE to WiFi and RFID.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transform transition-all hover:scale-105"
            >
              Contact us to get your company listed <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("vendors")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "vendors" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📋 Vendors
            </button>
            <button
              onClick={() => setActiveTab("practitioners")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "practitioners" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              👤 Practitioners
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search {activeTab === "vendors" ? "Vendors" : "Practitioners"}
              </label>
              <Input
                placeholder={`Search by name, location, ${activeTab === "vendors" ? "or services" : "or expertise"}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border-gray-300"
              />
            </div>

            {activeTab === "vendors" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="bg-white border-gray-300">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
                  <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
                    <SelectTrigger className="bg-white border-gray-300">
                      <SelectValue placeholder="Select technology" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Technologies</SelectItem>
                      {technologies.map((tech) => (
                        <SelectItem key={tech} value={tech}>
                          {tech}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {activeTab === "vendors" ? filteredVendors.length : filteredPractitioners.length} of{" "}
            {activeTab === "vendors" ? vendors.length : practitioners.length} {activeTab}
          </p>
        </div>

        {activeTab === "vendors" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVendors.map((vendor, index) => (
              <VendorCard key={index} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPractitioners.map((practitioner, index) => (
              <PractitionerCard key={index} practitioner={practitioner} />
            ))}
          </div>
        )}

        {((activeTab === "vendors" && filteredVendors.length === 0) ||
          (activeTab === "practitioners" && filteredPractitioners.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No {activeTab} found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

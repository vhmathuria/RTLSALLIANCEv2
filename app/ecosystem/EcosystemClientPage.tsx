"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, User, MapPin, Briefcase, Search, X, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// List of RTLS vendors (expanded with additional technology categories)
const vendors = [
  {
    name: "Ubisense",
    description: "Enterprise-grade UWB RTLS solutions for manufacturing and industrial environments",
    website: "https://ubisense.com",
    location: "Cambridge, UK",
    region: "Europe",
    specialties: ["UWB", "Industrial", "Manufacturing"],
    industries: ["Manufacturing", "Automotive", "Aerospace"],
  },
  {
    name: "Zebra Technologies",
    description: "Comprehensive RTLS solutions using various technologies for enterprise visibility",
    website: "https://www.zebra.com",
    location: "Lincolnshire, IL, USA",
    region: "North America",
    specialties: ["BLE", "RFID", "Healthcare", "Retail"],
    industries: ["Healthcare", "Retail", "Manufacturing", "Logistics"],
  },
  {
    name: "Quuppa",
    description: "High-accuracy Bluetooth location tracking platform for multiple industries",
    website: "https://quuppa.com",
    location: "Espoo, Finland",
    region: "Europe",
    specialties: ["Bluetooth", "Sports", "Healthcare"],
    industries: ["Healthcare", "Sports", "Manufacturing", "Logistics"],
  },
  {
    name: "Inpixon",
    description: "Indoor intelligence solutions with RTLS capabilities for smart buildings",
    website: "https://inpixon.com",
    location: "Palo Alto, CA, USA",
    region: "North America",
    specialties: ["WiFi", "BLE", "Smart Buildings"],
    industries: ["Corporate", "Retail", "Government", "Healthcare"],
  },
  {
    name: "CenTrak",
    description: "Healthcare-focused RTLS solutions for patient flow and asset management",
    website: "https://centrak.com",
    location: "Newtown, PA, USA",
    region: "North America",
    specialties: ["Healthcare", "Asset Tracking", "Patient Flow"],
    industries: ["Healthcare"],
  },
  {
    name: "Pozyx",
    description: "Scalable UWB positioning solutions for industrial environments",
    website: "https://pozyx.io",
    location: "Ghent, Belgium",
    region: "Europe",
    specialties: ["UWB", "Industrial", "Warehousing"],
    industries: ["Manufacturing", "Warehousing", "Logistics"],
  },
  {
    name: "Aruba Networks",
    description: "WiFi-based RTLS solutions integrated with enterprise networking",
    website: "https://www.arubanetworks.com",
    location: "Santa Clara, CA, USA",
    region: "North America",
    specialties: ["WiFi", "Enterprise", "Networking"],
    industries: ["Corporate", "Education", "Healthcare", "Retail"],
  },
  {
    name: "Cisco Meraki",
    description: "Cloud-managed RTLS solutions integrated with enterprise WiFi",
    website: "https://meraki.cisco.com",
    location: "San Francisco, CA, USA",
    region: "North America",
    specialties: ["WiFi", "Cloud", "Enterprise"],
    industries: ["Corporate", "Education", "Retail", "Healthcare"],
  },
  {
    name: "Kontakt.io",
    description: "BLE and IoT solutions for smart buildings and asset tracking",
    website: "https://kontakt.io",
    location: "New York, NY, USA",
    region: "North America",
    specialties: ["BLE", "IoT", "Smart Buildings"],
    industries: ["Corporate", "Healthcare", "Retail", "Hospitality"],
  },
  {
    name: "Estimote",
    description: "Developer-friendly BLE beacons and solutions for proximity and location",
    website: "https://estimote.com",
    location: "Kraków, Poland",
    region: "Europe",
    specialties: ["BLE", "Proximity", "Retail"],
    industries: ["Retail", "Corporate", "Events"],
  },
  {
    name: "Litum",
    description: "UWB, BLE, and RFID solutions for industrial safety and efficiency",
    website: "https://litum.com",
    location: "Izmir, Turkey",
    region: "Europe",
    specialties: ["UWB", "Safety", "Industrial"],
    industries: ["Manufacturing", "Construction", "Mining"],
  },
  {
    name: "Redpoint Positioning",
    description: "UWB RTLS solutions for industrial environments and safety applications",
    website: "https://redpointpositioning.com",
    location: "Boston, MA, USA",
    region: "North America",
    specialties: ["UWB", "Industrial", "Safety"],
    industries: ["Manufacturing", "Construction", "Warehousing"],
  },
  {
    name: "Siemens Enlighted",
    description: "IoT platform with RTLS capabilities for smart buildings",
    website: "https://enlightedinc.com",
    location: "Sunnyvale, CA, USA",
    region: "North America",
    specialties: ["IoT", "Smart Buildings", "Energy"],
    industries: ["Corporate", "Healthcare", "Education"],
  },
  {
    name: "AiRISTA",
    description: "RTLS solutions using WiFi, BLE, and RFID for healthcare and enterprise",
    website: "https://airistaflow.com",
    location: "Sparks, MD, USA",
    region: "North America",
    specialties: ["WiFi", "Healthcare", "Manufacturing"],
    industries: ["Healthcare", "Manufacturing", "Corporate"],
  },
  {
    name: "Sonitor",
    description: "Ultrasound-based precision RTLS for healthcare environments",
    website: "https://sonitor.com",
    location: "Oslo, Norway",
    region: "Europe",
    specialties: ["Ultrasound", "Healthcare", "Patient Flow"],
    industries: ["Healthcare"],
  },
  {
    name: "Infsoft",
    description: "Indoor positioning and tracking solutions for various industries",
    website: "https://www.infsoft.com",
    location: "Großmehring, Germany",
    region: "Europe",
    specialties: ["BLE", "WiFi", "Indoor Navigation"],
    industries: ["Corporate", "Retail", "Healthcare", "Logistics"],
  },
  {
    name: "Abeeway (Actility)",
    description: "LoRaWAN-based tracking solutions for outdoor and indoor asset tracking",
    website: "https://www.abeeway.com",
    location: "Labège, France",
    region: "Europe",
    specialties: ["LoRaWAN", "IoT", "Asset Tracking"],
    industries: ["Logistics", "Smart Cities", "Industrial"],
  },
  {
    name: "Mojix",
    description: "RFID and IoT platform for retail and supply chain visibility",
    website: "https://mojix.com",
    location: "Los Angeles, CA, USA",
    region: "North America",
    specialties: ["RFID", "Retail", "Supply Chain"],
    industries: ["Retail", "Logistics", "Manufacturing"],
  },
  {
    name: "Impinj",
    description: "RAIN RFID solutions for inventory management and asset tracking",
    website: "https://www.impinj.com",
    location: "Seattle, WA, USA",
    region: "North America",
    specialties: ["RFID", "Retail", "Healthcare"],
    industries: ["Retail", "Healthcare", "Logistics", "Manufacturing"],
  },
  {
    name: "Identec Solutions",
    description: "Active RFID and GPS solutions for industrial environments",
    website: "https://www.identecsolutions.com",
    location: "Lustenau, Austria",
    region: "Europe",
    specialties: ["RFID", "Industrial", "Oil & Gas"],
    industries: ["Oil & Gas", "Maritime", "Mining", "Automotive"],
  },
  {
    name: "Locatify",
    description: "Indoor positioning solutions for museums and cultural sites",
    website: "https://locatify.com",
    location: "Hafnarfjörður, Iceland",
    region: "Europe",
    specialties: ["BLE", "Tourism", "Cultural Heritage"],
    industries: ["Tourism", "Education", "Events"],
  },
  {
    name: "Favendo",
    description: "BLE-based indoor navigation and tracking solutions",
    website: "https://www.favendo.com",
    location: "Bamberg, Germany",
    region: "Europe",
    specialties: ["BLE", "Indoor Navigation", "Retail"],
    industries: ["Retail", "Healthcare", "Transportation"],
  },
  {
    name: "Proximi.io",
    description: "Multi-technology indoor positioning platform for developers",
    website: "https://proximi.io",
    location: "Helsinki, Finland",
    region: "Europe",
    specialties: ["Multi-technology", "Developer Platform", "Indoor Navigation"],
    industries: ["Retail", "Corporate", "Transportation"],
  },
  {
    name: "Navigine",
    description: "Indoor positioning and navigation solutions for various industries",
    website: "https://navigine.com",
    location: "Moscow, Russia",
    region: "Europe",
    specialties: ["Indoor Navigation", "Analytics", "Retail"],
    industries: ["Retail", "Transportation", "Logistics"],
  },
  {
    name: "Wipelot",
    description: "RTLS solutions for industrial safety and efficiency",
    website: "https://www.wipelot.com",
    location: "Istanbul, Turkey",
    region: "Europe",
    specialties: ["UWB", "Industrial Safety", "Manufacturing"],
    industries: ["Manufacturing", "Mining", "Construction"],
  },
  {
    name: "Eliko",
    description: "UWB positioning technology for industrial applications",
    website: "https://www.eliko.ee",
    location: "Tallinn, Estonia",
    region: "Europe",
    specialties: ["UWB", "Industrial", "Robotics"],
    industries: ["Manufacturing", "Robotics", "Automation"],
  },
  {
    name: "Kinexon",
    description: "Ultra-precise RTLS for sports analytics and industrial applications",
    website: "https://kinexon.com",
    location: "Munich, Germany",
    region: "Europe",
    specialties: ["UWB", "Sports Analytics", "Industry 4.0"],
    industries: ["Sports", "Manufacturing", "Logistics"],
  },
  {
    name: "Apptricity",
    description: "IoT and RFID solutions for supply chain and asset management",
    website: "https://www.apptricity.com",
    location: "Dallas, TX, USA",
    region: "North America",
    specialties: ["RFID", "Supply Chain", "Asset Management"],
    industries: ["Logistics", "Government", "Healthcare"],
  },
  {
    name: "Tagstone",
    description: "RFID and BLE solutions for healthcare and industrial applications",
    website: "https://www.tagstone.com",
    location: "Singapore",
    region: "Asia",
    specialties: ["RFID", "BLE", "Healthcare"],
    industries: ["Healthcare", "Manufacturing", "Logistics"],
  },
  {
    name: "Sensoro",
    description: "IoT and BLE solutions for smart cities and retail",
    website: "https://www.sensoro.com",
    location: "Beijing, China",
    region: "Asia",
    specialties: ["BLE", "Smart Cities", "Retail"],
    industries: ["Smart Cities", "Retail", "Environmental"],
  },
  {
    name: "Ciholas",
    description: "High-precision UWB positioning systems for industrial and commercial applications",
    website: "https://ciholas.com",
    location: "Newburgh, IN, USA",
    region: "North America",
    specialties: ["UWB", "Industrial", "Precision Tracking"],
    industries: ["Manufacturing", "Entertainment", "Research"],
  },
  {
    name: "Mist Systems (Juniper)",
    description: "AI-driven wireless networks with built-in location services",
    website: "https://www.mist.com",
    location: "Cupertino, CA, USA",
    region: "North America",
    specialties: ["WiFi", "BLE", "AI-driven Location"],
    industries: ["Corporate", "Retail", "Healthcare", "Education"],
  },
  {
    name: "Humatics",
    description: "Microlocation technology for industrial environments and transit systems",
    website: "https://humatics.com",
    location: "Waltham, MA, USA",
    region: "North America",
    specialties: ["UWB", "Industrial", "Transit"],
    industries: ["Transit", "Manufacturing", "Warehousing"],
  },
  {
    name: "Signify (Philips Lighting)",
    description: "Visible Light Communication (VLC) for indoor positioning",
    website: "https://www.signify.com",
    location: "Eindhoven, Netherlands",
    region: "Europe",
    specialties: ["VLC", "Retail", "Smart Buildings"],
    industries: ["Retail", "Corporate", "Hospitality"],
  },
  {
    name: "Leantegra",
    description: "BLE and UWB solutions for indoor positioning and analytics",
    website: "https://leantegra.com",
    location: "New York, NY, USA",
    region: "North America",
    specialties: ["BLE", "UWB", "Retail Analytics"],
    industries: ["Retail", "Corporate", "Warehousing"],
  },
  {
    name: "Accuware",
    description: "Indoor positioning solutions using WiFi, visual positioning, and sensors",
    website: "https://www.accuware.com",
    location: "Miami, FL, USA",
    region: "North America",
    specialties: ["WiFi", "Visual Positioning", "Indoor Navigation"],
    industries: ["Retail", "Corporate", "Warehousing"],
  },
  {
    name: "Indoo.rs",
    description: "Indoor positioning and navigation solutions for large venues",
    website: "https://indoo.rs",
    location: "Vienna, Austria",
    region: "Europe",
    specialties: ["BLE", "Indoor Navigation", "Airports"],
    industries: ["Transportation", "Retail", "Corporate"],
  },
  {
    name: "Oriient",
    description: "Magnetic positioning technology that works without hardware installation",
    website: "https://www.oriient.me",
    location: "Tel Aviv, Israel",
    region: "Middle East",
    specialties: ["Magnetic Positioning", "Retail", "No Hardware"],
    industries: ["Retail", "Shopping Centers", "Warehousing"],
  },
  {
    name: "Situm",
    description: "Indoor positioning platform for large buildings and campuses",
    website: "https://situm.com",
    location: "Santiago de Compostela, Spain",
    region: "Europe",
    specialties: ["Multi-technology", "Indoor Navigation", "Smart Buildings"],
    industries: ["Corporate", "Healthcare", "Retail", "Transportation"],
  },
  // Vision RTLS companies
  {
    name: "Slamcore",
    description: "Visual-inertial SLAM solutions for robots and autonomous systems",
    website: "https://www.slamcore.com",
    location: "London, UK",
    region: "Europe",
    specialties: ["Visual SLAM", "Robotics", "Spatial Intelligence"],
    industries: ["Robotics", "Automation", "Warehousing"],
  },
  {
    name: "Synaos",
    description: "AI-powered visual tracking for intralogistics and material flow",
    website: "https://www.synaos.com",
    location: "Hannover, Germany",
    region: "Europe",
    specialties: ["Computer Vision", "Intralogistics", "AI"],
    industries: ["Manufacturing", "Warehousing", "Logistics"],
  },
  {
    name: "Vimana",
    description: "Computer vision and AI for manufacturing visibility and analytics",
    website: "https://www.vimana.global",
    location: "Boston, MA, USA",
    region: "North America",
    specialties: ["Computer Vision", "Manufacturing", "Analytics"],
    industries: ["Manufacturing", "Aerospace", "Automotive"],
  },
  {
    name: "Zensors",
    description: "Computer vision platform for retail and facility management",
    website: "https://www.zensors.com",
    location: "Pittsburgh, PA, USA",
    region: "North America",
    specialties: ["Computer Vision", "Retail Analytics", "Occupancy"],
    industries: ["Retail", "Corporate", "Hospitality"],
  },
  {
    name: "Motional AI",
    description: "Visual positioning and tracking for retail and smart buildings",
    website: "https://www.motional.ai",
    location: "San Francisco, CA, USA",
    region: "North America",
    specialties: ["Computer Vision", "Retail", "People Counting"],
    industries: ["Retail", "Corporate", "Transportation"],
  },
  // LoRa solutions companies
  {
    name: "Semtech",
    description: "LoRa technology provider for long-range, low-power IoT applications",
    website: "https://www.semtech.com",
    location: "Camarillo, CA, USA",
    region: "North America",
    specialties: ["LoRa", "IoT", "Semiconductors"],
    industries: ["Smart Cities", "Agriculture", "Logistics", "Industrial"],
  },
  {
    name: "Kerlink",
    description: "LoRaWAN network infrastructure for IoT and asset tracking",
    website: "https://www.kerlink.com",
    location: "Thorigné-Fouillard, France",
    region: "Europe",
    specialties: ["LoRaWAN", "IoT", "Network Infrastructure"],
    industries: ["Smart Cities", "Agriculture", "Utilities", "Logistics"],
  },
  {
    name: "Senet",
    description: "LoRaWAN network provider for IoT applications including asset tracking",
    website: "https://www.senetco.com",
    location: "Portsmouth, NH, USA",
    region: "North America",
    specialties: ["LoRaWAN", "IoT", "Network Services"],
    industries: ["Smart Cities", "Utilities", "Agriculture", "Logistics"],
  },
  {
    name: "Comcast MachineQ",
    description: "Enterprise IoT network and platform based on LoRaWAN",
    website: "https://machineq.com",
    location: "Philadelphia, PA, USA",
    region: "North America",
    specialties: ["LoRaWAN", "Enterprise IoT", "Asset Tracking"],
    industries: ["Corporate", "Healthcare", "Education", "Utilities"],
  },
  {
    name: "Digital Matter",
    description: "GPS and LoRaWAN tracking devices for asset management",
    website: "https://www.digitalmatter.com",
    location: "Perth, Australia",
    region: "Oceania",
    specialties: ["LoRaWAN", "GPS", "Asset Tracking"],
    industries: ["Logistics", "Agriculture", "Construction", "Mining"],
  },
  // GNSS/RTK GPS companies
  {
    name: "Swift Navigation",
    description: "Precise positioning solutions using RTK and GNSS technology",
    website: "https://www.swiftnav.com",
    location: "San Francisco, CA, USA",
    region: "North America",
    specialties: ["RTK", "GNSS", "Precision Positioning"],
    industries: ["Autonomous Vehicles", "Agriculture", "Construction", "Surveying"],
  },
  {
    name: "Trimble",
    description: "Advanced positioning solutions for various industries",
    website: "https://www.trimble.com",
    location: "Sunnyvale, CA, USA",
    region: "North America",
    specialties: ["GNSS", "RTK", "Surveying"],
    industries: ["Construction", "Agriculture", "Transportation", "Geospatial"],
  },
  {
    name: "Hexagon",
    description: "Precision measurement and positioning technologies",
    website: "https://hexagon.com",
    location: "Stockholm, Sweden",
    region: "Europe",
    specialties: ["GNSS", "Positioning", "Industrial"],
    industries: ["Construction", "Manufacturing", "Mining", "Agriculture"],
  },
  {
    name: "u-blox",
    description: "Positioning and wireless communication technologies for IoT",
    website: "https://www.u-blox.com",
    location: "Thalwil, Switzerland",
    region: "Europe",
    specialties: ["GNSS", "Cellular", "Bluetooth"],
    industries: ["Automotive", "Industrial", "Consumer", "Healthcare"],
  },
  {
    name: "Septentrio",
    description: "High-precision GNSS receivers for professional applications",
    website: "https://www.septentrio.com",
    location: "Leuven, Belgium",
    region: "Europe",
    specialties: ["GNSS", "RTK", "Precision Positioning"],
    industries: ["Surveying", "Autonomous Vehicles", "Marine", "Agriculture"],
  },
  // LiDAR-based tracking companies
  {
    name: "Quanergy",
    description: "LiDAR sensors and smart sensing solutions for various applications",
    website: "https://quanergy.com",
    location: "Sunnyvale, CA, USA",
    region: "North America",
    specialties: ["LiDAR", "People Tracking", "Security"],
    industries: ["Smart Cities", "Security", "Industrial", "Transportation"],
  },
  {
    name: "Ouster",
    description: "High-resolution LiDAR sensors for mapping and object detection",
    website: "https://ouster.com",
    location: "San Francisco, CA, USA",
    region: "North America",
    specialties: ["LiDAR", "Mapping", "Robotics"],
    industries: ["Robotics", "Automotive", "Smart Cities", "Industrial"],
  },
  {
    name: "Cepton",
    description: "LiDAR solutions for smart spaces and people tracking",
    website: "https://www.cepton.com",
    location: "San Jose, CA, USA",
    region: "North America",
    specialties: ["LiDAR", "Smart Spaces", "People Counting"],
    industries: ["Smart Cities", "Retail", "Security", "Automotive"],
  },
  {
    name: "Seoul Robotics",
    description: "3D perception software for LiDAR-based tracking and analytics",
    website: "https://www.seoulrobotics.org",
    location: "Seoul, South Korea",
    region: "Asia",
    specialties: ["LiDAR", "3D Perception", "Traffic Monitoring"],
    industries: ["Smart Cities", "Automotive", "Security", "Retail"],
  },
  {
    name: "Blickfeld",
    description: "LiDAR technology for people counting and crowd analytics",
    website: "https://www.blickfeld.com",
    location: "Munich, Germany",
    region: "Europe",
    specialties: ["LiDAR", "People Counting", "Smart Cities"],
    industries: ["Smart Cities", "Retail", "Transportation", "Security"],
  },
  // Magnetic field mapping companies
  {
    name: "IndoorAtlas",
    description: "Geomagnetic indoor positioning platform for mobile applications",
    website: "https://www.indooratlas.com",
    location: "Helsinki, Finland",
    region: "Europe",
    specialties: ["Magnetic Positioning", "Indoor Navigation", "Mobile SDK"],
    industries: ["Retail", "Transportation", "Corporate", "Healthcare"],
  },
  {
    name: "GiPStech",
    description: "Geomagnetic indoor positioning technology for various applications",
    website: "https://www.gipstech.com",
    location: "Rende, Italy",
    region: "Europe",
    specialties: ["Magnetic Positioning", "Indoor Navigation", "Retail"],
    industries: ["Retail", "Transportation", "Corporate", "Events"],
  },
  {
    name: "Pole Star",
    description: "Indoor location services using multiple technologies including magnetic",
    website: "https://www.polestar.eu",
    location: "Toulouse, France",
    region: "Europe",
    specialties: ["Magnetic Positioning", "Indoor Navigation", "Airports"],
    industries: ["Transportation", "Retail", "Corporate", "Hospitality"],
  },
  // Ultrasound RTLS companies
  {
    name: "Stethoscope Health",
    description: "Ultrasound-based positioning for healthcare asset tracking",
    website: "https://www.stethoscopehealth.com",
    location: "Boston, MA, USA",
    region: "North America",
    specialties: ["Ultrasound", "Healthcare", "Asset Tracking"],
    industries: ["Healthcare"],
  },
  {
    name: "Intelligent InSites",
    description: "Healthcare operational intelligence platform with ultrasound RTLS",
    website: "https://www.intelligentinsites.com",
    location: "Fargo, ND, USA",
    region: "North America",
    specialties: ["Ultrasound", "Healthcare", "Operational Intelligence"],
    industries: ["Healthcare"],
  },
  {
    name: "PLUS Location Systems",
    description: "Ultrasound and RF hybrid positioning for precise indoor tracking",
    website: "https://pluslocation.com",
    location: "Huntsville, AL, USA",
    region: "North America",
    specialties: ["Ultrasound", "RF Hybrid", "Industrial"],
    industries: ["Manufacturing", "Healthcare", "Warehousing"],
  },
]

const newVendors = [
  {
    name: "Atlas RFID Store",
    description: "Comprehensive RFID solutions and hardware for asset tracking and inventory management",
    website: "https://atlasrfidstore.com",
    location: "Birmingham, AL, USA",
    region: "North America",
    specialties: ["RFID", "Asset Tracking", "Inventory Management"],
    industries: ["Retail", "Manufacturing", "Healthcare", "Logistics"],
  },
  {
    name: "GlobeRanger",
    description: "Enterprise RFID and sensor-based visibility solutions for supply chain optimization",
    website: "https://globeranger.com",
    location: "Richardson, TX, USA",
    region: "North America",
    specialties: ["RFID", "Supply Chain", "Enterprise"],
    industries: ["Manufacturing", "Logistics", "Retail", "Healthcare"],
  },
  {
    name: "Intelligent Locations",
    description: "Advanced location intelligence solutions for industrial and commercial applications",
    website: "https://intelligentlocations.com",
    location: "Austin, TX, USA",
    region: "North America",
    specialties: ["Location Intelligence", "Industrial", "Analytics"],
    industries: ["Manufacturing", "Warehousing", "Corporate", "Logistics"],
  },
  {
    name: "Samsara",
    description: "Connected operations platform with fleet tracking and asset monitoring capabilities",
    website: "https://samsara.com",
    location: "San Francisco, CA, USA",
    region: "North America",
    specialties: ["Fleet Tracking", "Asset Monitoring", "IoT"],
    industries: ["Transportation", "Logistics", "Construction", "Manufacturing"],
  },
  {
    name: "TraceSafe",
    description: "Wearable safety and location tracking solutions for workplace safety",
    website: "https://tracesafe.io",
    location: "Vancouver, BC, Canada",
    region: "North America",
    specialties: ["Wearable Safety", "Contact Tracing", "BLE"],
    industries: ["Healthcare", "Manufacturing", "Corporate", "Events"],
  },
  {
    name: "ZeroKey",
    description: "Secure location-based access control and tracking solutions",
    website: "https://zerokey.com",
    location: "Boston, MA, USA",
    region: "North America",
    specialties: ["Access Control", "Security", "Location-based"],
    industries: ["Corporate", "Healthcare", "Education", "Government"],
  },
  {
    name: "Cognosos",
    description: "AI-powered location intelligence and spatial analytics platform",
    website: "https://cognosos.com",
    location: "Toronto, ON, Canada",
    region: "North America",
    specialties: ["AI", "Spatial Analytics", "Location Intelligence"],
    industries: ["Retail", "Corporate", "Smart Cities", "Healthcare"],
  },
  {
    name: "Everguard",
    description: "Industrial safety and location tracking solutions for hazardous environments",
    website: "https://everguard.ai",
    location: "Calgary, AB, Canada",
    region: "North America",
    specialties: ["Industrial Safety", "Hazardous Environments", "UWB"],
    industries: ["Oil & Gas", "Mining", "Construction", "Manufacturing"],
  },
  {
    name: "Mysphera",
    description: "Healthcare-focused RTLS solutions for asset and patient tracking",
    website: "https://mysphera.com",
    location: "Valencia, Spain",
    region: "Europe",
    specialties: ["Healthcare", "Asset Tracking", "Patient Flow"],
    industries: ["Healthcare"],
  },
  {
    name: "Ubudu",
    description: "Proximity marketing and indoor location solutions using BLE technology",
    website: "https://ubudu.com",
    location: "Paris, France",
    region: "Europe",
    specialties: ["BLE", "Proximity Marketing", "Indoor Location"],
    industries: ["Retail", "Hospitality", "Events", "Transportation"],
  },
  {
    name: "Metratec",
    description: "RFID and UHF solutions for industrial automation and tracking",
    website: "https://metratec.com",
    location: "Magdeburg, Germany",
    region: "Europe",
    specialties: ["RFID", "UHF", "Industrial Automation"],
    industries: ["Manufacturing", "Logistics", "Automotive", "Aerospace"],
  },
  {
    name: "Kathrein",
    description: "RFID antenna and reader solutions for industrial applications",
    website: "https://kathrein-rfid.com",
    location: "Rosenheim, Germany",
    region: "Europe",
    specialties: ["RFID", "Antennas", "Industrial"],
    industries: ["Manufacturing", "Logistics", "Retail", "Transportation"],
  },
  {
    name: "Zigpos",
    description: "Indoor positioning and navigation solutions for large venues",
    website: "https://zigpos.com",
    location: "Barcelona, Spain",
    region: "Europe",
    specialties: ["Indoor Navigation", "Large Venues", "WiFi"],
    industries: ["Transportation", "Retail", "Corporate", "Events"],
  },
  {
    name: "RFID Discovery",
    description: "RFID consulting and implementation services for various industries",
    website: "https://rfiddiscovery.com",
    location: "London, UK",
    region: "Europe",
    specialties: ["RFID", "Consulting", "Implementation"],
    industries: ["Retail", "Healthcare", "Manufacturing", "Logistics"],
  },
  {
    name: "Telematics",
    description: "Fleet management and vehicle tracking solutions",
    website: "https://telematics.com",
    location: "Munich, Germany",
    region: "Europe",
    specialties: ["Fleet Management", "Vehicle Tracking", "GPS"],
    industries: ["Transportation", "Logistics", "Construction", "Government"],
  },
  {
    name: "Iiwari",
    description: "IoT and location tracking solutions for smart building applications",
    website: "https://iiwari.com",
    location: "Helsinki, Finland",
    region: "Europe",
    specialties: ["IoT", "Smart Buildings", "Location Tracking"],
    industries: ["Corporate", "Healthcare", "Education", "Hospitality"],
  },
  {
    name: "Pointr",
    description: "Indoor location platform for navigation and analytics",
    website: "https://pointr.tech",
    location: "London, UK",
    region: "Europe",
    specialties: ["Indoor Navigation", "Analytics", "Platform"],
    industries: ["Retail", "Transportation", "Corporate", "Healthcare"],
  },
  {
    name: "Xtag Medical",
    description: "Medical device tracking and management solutions for healthcare",
    website: "https://xtagmedical.com",
    location: "Dublin, Ireland",
    region: "Europe",
    specialties: ["Medical Devices", "Healthcare", "Asset Tracking"],
    industries: ["Healthcare"],
  },
  {
    name: "WiTTRA Networks AB",
    description: "Wireless mesh networking solutions for industrial IoT and tracking",
    website: "https://wittra.se",
    location: "Stockholm, Sweden",
    region: "Europe",
    specialties: ["Wireless Mesh", "Industrial IoT", "Tracking"],
    industries: ["Manufacturing", "Mining", "Oil & Gas", "Utilities"],
  },
  {
    name: "Wheere",
    description: "Indoor positioning and wayfinding solutions for complex buildings",
    website: "https://wheere.com",
    location: "Milan, Italy",
    region: "Europe",
    specialties: ["Indoor Positioning", "Wayfinding", "Complex Buildings"],
    industries: ["Healthcare", "Corporate", "Transportation", "Education"],
  },
  {
    name: "Outsight",
    description: "3D LiDAR perception software for people and object tracking",
    website: "https://outsight.ai",
    location: "Paris, France",
    region: "Europe",
    specialties: ["LiDAR", "3D Perception", "Object Tracking"],
    industries: ["Smart Cities", "Retail", "Transportation", "Security"],
  },
  {
    name: "Thinkin",
    description: "AI-powered location analytics and optimization solutions",
    website: "https://thinkin.io",
    location: "Berlin, Germany",
    region: "Europe",
    specialties: ["AI", "Location Analytics", "Optimization"],
    industries: ["Retail", "Corporate", "Manufacturing", "Logistics"],
  },
  {
    name: "Intranav",
    description: "Indoor navigation and positioning solutions for mobile applications",
    website: "https://intranav.com",
    location: "Vienna, Austria",
    region: "Europe",
    specialties: ["Indoor Navigation", "Mobile Apps", "Positioning"],
    industries: ["Retail", "Transportation", "Corporate", "Healthcare"],
  },
  {
    name: "Minew",
    description: "BLE beacon and IoT hardware solutions for location tracking",
    website: "https://minew.com",
    location: "Shenzhen, China",
    region: "Asia",
    specialties: ["BLE", "IoT Hardware", "Beacons"],
    industries: ["Retail", "Healthcare", "Manufacturing", "Logistics"],
  },
  {
    name: "Tatwah Technology Co. Ltd.",
    description: "RFID and IoT solutions for industrial automation and tracking",
    website: "https://tatwah.com",
    location: "Taipei, Taiwan",
    region: "Asia",
    specialties: ["RFID", "IoT", "Industrial Automation"],
    industries: ["Manufacturing", "Logistics", "Healthcare", "Retail"],
  },
  {
    name: "Sensolus",
    description: "LoRaWAN-based asset tracking solutions for industrial applications",
    website: "https://sensolus.com",
    location: "Antwerp, Belgium",
    region: "Europe",
    specialties: ["LoRaWAN", "Asset Tracking", "Industrial"],
    industries: ["Construction", "Logistics", "Manufacturing", "Agriculture"],
  },
  {
    name: "BlueUp",
    description: "BLE beacon solutions for proximity marketing and indoor positioning",
    website: "https://blueup.eu",
    location: "Padova, Italy",
    region: "Europe",
    specialties: ["BLE", "Proximity Marketing", "Indoor Positioning"],
    industries: ["Retail", "Tourism", "Events", "Transportation"],
  },
  {
    name: "PDi Digital",
    description: "Digital transformation solutions with location intelligence capabilities",
    website: "https://pdidigital.com",
    location: "London, UK",
    region: "Europe",
    specialties: ["Digital Transformation", "Location Intelligence", "Analytics"],
    industries: ["Corporate", "Retail", "Manufacturing", "Healthcare"],
  },
  {
    name: "Ela Innovation",
    description: "BLE and IoT solutions for asset tracking and monitoring",
    website: "https://elainnovation.com",
    location: "Montpellier, France",
    region: "Europe",
    specialties: ["BLE", "IoT", "Asset Tracking"],
    industries: ["Healthcare", "Manufacturing", "Logistics", "Agriculture"],
  },
  {
    name: "QLog",
    description: "Supply chain visibility and tracking solutions",
    website: "https://qlog.com",
    location: "Singapore",
    region: "Asia",
    specialties: ["Supply Chain", "Visibility", "Tracking"],
    industries: ["Logistics", "Manufacturing", "Retail", "Pharmaceuticals"],
  },
  {
    name: "Omni-ID",
    description: "Rugged RFID tags and solutions for harsh industrial environments",
    website: "https://omni-id.com",
    location: "Rochester, NY, USA",
    region: "North America",
    specialties: ["RFID", "Rugged Tags", "Industrial"],
    industries: ["Oil & Gas", "Aerospace", "Automotive", "Manufacturing"],
  },
  {
    name: "Sentrics",
    description: "IoT and sensor solutions for asset monitoring and tracking",
    website: "https://sentrics.io",
    location: "Amsterdam, Netherlands",
    region: "Europe",
    specialties: ["IoT", "Sensors", "Asset Monitoring"],
    industries: ["Manufacturing", "Healthcare", "Logistics", "Smart Cities"],
  },
  {
    name: "System Loco",
    description: "Location-based services and indoor positioning solutions",
    website: "https://systemloco.com",
    location: "Madrid, Spain",
    region: "Europe",
    specialties: ["Location Services", "Indoor Positioning", "Navigation"],
    industries: ["Transportation", "Retail", "Corporate", "Healthcare"],
  },
  {
    name: "Sentrax",
    description: "RFID and tracking solutions for inventory and asset management",
    website: "https://sentrax.com",
    location: "Toronto, ON, Canada",
    region: "North America",
    specialties: ["RFID", "Inventory Management", "Asset Tracking"],
    industries: ["Retail", "Healthcare", "Manufacturing", "Logistics"],
  },
  {
    name: "Notinote",
    description: "Smart notification and location tracking solutions",
    website: "https://notinote.com",
    location: "Seoul, South Korea",
    region: "Asia",
    specialties: ["Smart Notifications", "Location Tracking", "Mobile"],
    industries: ["Corporate", "Healthcare", "Education", "Hospitality"],
  },
  {
    name: "ITL Group",
    description: "Technology solutions including RFID and location tracking systems",
    website: "https://itlgroup.com",
    location: "Mumbai, India",
    region: "Asia",
    specialties: ["RFID", "Location Tracking", "Technology Solutions"],
    industries: ["Manufacturing", "Retail", "Healthcare", "Government"],
  },
  {
    name: "Globos",
    description: "Global positioning and tracking solutions for various industries",
    website: "https://globos.com",
    location: "São Paulo, Brazil",
    region: "South America",
    specialties: ["GPS", "Tracking", "Fleet Management"],
    industries: ["Transportation", "Logistics", "Construction", "Agriculture"],
  },
  {
    name: "InVirtus",
    description: "Virtual and augmented reality solutions with location tracking",
    website: "https://invirtus.com",
    location: "Barcelona, Spain",
    region: "Europe",
    specialties: ["VR/AR", "Location Tracking", "Immersive Tech"],
    industries: ["Entertainment", "Education", "Healthcare", "Training"],
  },
  {
    name: "Peak Technologies",
    description: "Barcode, RFID, and mobile computing solutions for data capture",
    website: "https://peaktech.com",
    location: "Columbia, MD, USA",
    region: "North America",
    specialties: ["RFID", "Barcode", "Data Capture"],
    industries: ["Manufacturing", "Healthcare", "Retail", "Logistics"],
  },
  {
    name: "Telebeacon Solutions Pvt. Ltd.",
    description: "BLE beacon and proximity solutions for location-based services",
    website: "https://telebeacon.com",
    location: "Bangalore, India",
    region: "Asia",
    specialties: ["BLE", "Proximity", "Location Services"],
    industries: ["Retail", "Healthcare", "Corporate", "Transportation"],
  },
  {
    name: "Hornbird Technology",
    description: "IoT and wireless communication solutions for tracking applications",
    website: "https://hornbird.com",
    location: "Shenzhen, China",
    region: "Asia",
    specialties: ["IoT", "Wireless", "Tracking"],
    industries: ["Manufacturing", "Logistics", "Smart Cities", "Agriculture"],
  },
  {
    name: "EPM",
    description: "Enterprise performance management with location intelligence",
    website: "https://epm.com",
    location: "Chicago, IL, USA",
    region: "North America",
    specialties: ["Performance Management", "Location Intelligence", "Analytics"],
    industries: ["Corporate", "Manufacturing", "Healthcare", "Retail"],
  },
  {
    name: "SADELABS",
    description: "Laboratory and research solutions with asset tracking capabilities",
    website: "https://sadelabs.com",
    location: "Boston, MA, USA",
    region: "North America",
    specialties: ["Laboratory", "Research", "Asset Tracking"],
    industries: ["Healthcare", "Research", "Pharmaceuticals", "Education"],
  },
  {
    name: "AetherIOT",
    description: "Industrial IoT solutions with location tracking and monitoring",
    website: "https://aetheriot.com",
    location: "Austin, TX, USA",
    region: "North America",
    specialties: ["Industrial IoT", "Location Tracking", "Monitoring"],
    industries: ["Manufacturing", "Oil & Gas", "Utilities", "Mining"],
  },
  {
    name: "IntraPosition",
    description: "Indoor positioning solutions for enterprise and industrial applications",
    website: "https://intraposition.com",
    location: "Stockholm, Sweden",
    region: "Europe",
    specialties: ["Indoor Positioning", "Enterprise", "Industrial"],
    industries: ["Manufacturing", "Warehousing", "Corporate", "Healthcare"],
  },
  {
    name: "Rakon",
    description: "Frequency control and timing solutions for location systems",
    website: "https://rakon.com",
    location: "Auckland, New Zealand",
    region: "Oceania",
    specialties: ["Frequency Control", "Timing", "Location Systems"],
    industries: ["Telecommunications", "Aerospace", "Defense", "Industrial"],
  },
  {
    name: "Lansitec",
    description: "LoRaWAN and IoT tracking solutions for asset management",
    website: "https://lansitec.com",
    location: "Shenzhen, China",
    region: "Asia",
    specialties: ["LoRaWAN", "IoT", "Asset Management"],
    industries: ["Logistics", "Agriculture", "Smart Cities", "Industrial"],
  },
  {
    name: "RT Smart Data",
    description: "Real-time data analytics and location intelligence solutions",
    website: "https://rtsmartdata.com",
    location: "Tel Aviv, Israel",
    region: "Middle East",
    specialties: ["Real-time Analytics", "Location Intelligence", "Data"],
    industries: ["Retail", "Corporate", "Smart Cities", "Transportation"],
  },
  {
    name: "TTI Inc. The IP&E Specialist",
    description: "Interconnect, passive, and electromechanical components for tracking systems",
    website: "https://tti.com",
    location: "Fort Worth, TX, USA",
    region: "North America",
    specialties: ["Components", "Interconnect", "Electronics"],
    industries: ["Electronics", "Automotive", "Industrial", "Telecommunications"],
  },
  {
    name: "Omnilink",
    description: "Connected solutions and tracking systems for various applications",
    website: "https://omnilink.com",
    location: "Toronto, ON, Canada",
    region: "North America",
    specialties: ["Connected Solutions", "Tracking", "IoT"],
    industries: ["Transportation", "Logistics", "Healthcare", "Government"],
  },
  {
    name: "Synapses BlueGPS",
    description: "Indoor positioning and navigation solutions using Bluetooth technology",
    website: "https://synapsesworld.com",
    location: "Rome, Italy",
    region: "Europe",
    specialties: ["Bluetooth", "Indoor Navigation", "GPS"],
    industries: ["Healthcare", "Corporate", "Transportation", "Retail"],
  },
  {
    name: "Wizzilab",
    description: "Ultra-low power wireless solutions for IoT and tracking applications",
    website: "https://wizzilab.com",
    location: "Grenoble, France",
    region: "Europe",
    specialties: ["Ultra-low Power", "Wireless", "IoT"],
    industries: ["Industrial", "Smart Cities", "Healthcare", "Agriculture"],
  },
  {
    name: "Inviso",
    description: "Visual analytics and location intelligence platform",
    website: "https://inviso.com",
    location: "Copenhagen, Denmark",
    region: "Europe",
    specialties: ["Visual Analytics", "Location Intelligence", "Platform"],
    industries: ["Retail", "Corporate", "Transportation", "Smart Cities"],
  },
]

const allVendors = [...vendors, ...newVendors]

// Sort all vendors alphabetically by name
const sortedVendors = [...allVendors].sort((a, b) => a.name.localeCompare(b.name))

// List of RTLS practitioners (fictional)
const practitioners = [
  {
    name: "Dr. Sarah Johnson",
    title: "RTLS Implementation Specialist",
    organization: "Global Healthcare Solutions",
    expertise: ["Healthcare RTLS", "Patient Flow Optimization", "Asset Management"],
    location: "Boston, MA, USA",
  },
  {
    name: "Michael Chen",
    title: "Manufacturing RTLS Architect",
    organization: "Industrial Automation Partners",
    expertise: ["UWB Systems", "Production Tracking", "Digital Twin Integration"],
    location: "Detroit, MI, USA",
  },
  {
    name: "Sophia Rodriguez",
    title: "Retail RTLS Consultant",
    organization: "Smart Retail Advisors",
    expertise: ["Customer Analytics", "Inventory Tracking", "BLE Implementation"],
    location: "New York, NY, USA",
  },
  {
    name: "James Wilson",
    title: "Warehouse RTLS Engineer",
    organization: "Logistics Optimization Group",
    expertise: ["Warehouse Management", "AGV Navigation", "RFID Systems"],
    location: "Atlanta, GA, USA",
  },
  {
    name: "Emma Thompson",
    title: "Healthcare RTLS Project Manager",
    organization: "Medical Technology Solutions",
    expertise: ["Hospital Deployments", "Staff Workflow", "Equipment Tracking"],
    location: "Chicago, IL, USA",
  },
  {
    name: "David Kim",
    title: "RTLS Systems Architect",
    organization: "Enterprise Location Intelligence",
    expertise: ["Multi-technology Integration", "Enterprise Deployments", "Location Analytics"],
    location: "San Francisco, CA, USA",
  },
  {
    name: "Olivia Martinez",
    title: "RTLS Data Scientist",
    organization: "Location Analytics Partners",
    expertise: ["Spatial Data Analysis", "Predictive Modeling", "Process Optimization"],
    location: "Austin, TX, USA",
  },
  {
    name: "Robert Johnson",
    title: "Industrial RTLS Specialist",
    organization: "Factory Automation Consultants",
    expertise: ["Manufacturing Workflows", "Tool Tracking", "Safety Applications"],
    location: "Pittsburgh, PA, USA",
  },
  {
    name: "Jennifer Lee",
    title: "Healthcare RTLS Consultant",
    organization: "Patient Flow Solutions",
    expertise: ["Emergency Department Optimization", "Asset Utilization", "Staff Efficiency"],
    location: "Seattle, WA, USA",
  },
  {
    name: "Thomas Schmidt",
    title: "RTLS Integration Architect",
    organization: "Enterprise Systems Group",
    expertise: ["ERP Integration", "API Development", "System Architecture"],
    location: "Munich, Germany",
  },
  {
    name: "Maria Garcia",
    title: "Retail RTLS Specialist",
    organization: "Customer Experience Innovations",
    expertise: ["Customer Journey Mapping", "Store Analytics", "Proximity Marketing"],
    location: "Barcelona, Spain",
  },
  {
    name: "John Anderson",
    title: "RTLS Project Manager",
    organization: "Location Technology Partners",
    expertise: ["Implementation Strategy", "Change Management", "ROI Analysis"],
    location: "Toronto, Canada",
  },
  {
    name: "Aisha Patel",
    title: "Healthcare RTLS Analyst",
    organization: "Clinical Workflow Solutions",
    expertise: ["Process Improvement", "Patient Experience", "Staff Utilization"],
    location: "London, UK",
  },
  {
    name: "Carlos Mendez",
    title: "Logistics RTLS Engineer",
    organization: "Supply Chain Optimization Group",
    expertise: ["Warehouse Management", "Yard Management", "Fleet Tracking"],
    location: "Mexico City, Mexico",
  },
  {
    name: "Natalie Wong",
    title: "RTLS Implementation Specialist",
    organization: "Enterprise Location Services",
    expertise: ["System Deployment", "User Training", "Performance Optimization"],
    location: "Singapore",
  },
  {
    name: "Alexander Petrov",
    title: "Manufacturing RTLS Consultant",
    organization: "Industry 4.0 Solutions",
    expertise: ["Production Tracking", "Quality Control", "Digital Manufacturing"],
    location: "Berlin, Germany",
  },
  {
    name: "Fatima Al-Farsi",
    title: "RTLS Solutions Architect",
    organization: "Smart Building Technologies",
    expertise: ["Building Management", "Occupancy Analytics", "Energy Optimization"],
    location: "Dubai, UAE",
  },
  {
    name: "Ryan O'Connor",
    title: "RTLS Network Engineer",
    organization: "Wireless Infrastructure Group",
    expertise: ["WiFi Design", "BLE Infrastructure", "Network Optimization"],
    location: "Dublin, Ireland",
  },
  {
    name: "Yuki Tanaka",
    title: "RTLS Application Developer",
    organization: "Location Intelligence Software",
    expertise: ["Mobile Applications", "Dashboard Development", "User Experience"],
    location: "Tokyo, Japan",
  },
  {
    name: "Pierre Dubois",
    title: "RTLS Integration Specialist",
    organization: "Enterprise Systems Consultancy",
    expertise: ["System Integration", "Data Migration", "API Development"],
    location: "Paris, France",
  },
  {
    name: "Liam Wilson",
    title: "RTLS Project Engineer",
    organization: "Industrial Automation Solutions",
    expertise: ["Factory Automation", "Process Optimization", "Safety Systems"],
    location: "Melbourne, Australia",
  },
  {
    name: "Elena Popova",
    title: "Healthcare RTLS Consultant",
    organization: "Medical Process Improvement",
    expertise: ["Patient Flow", "Asset Management", "Staff Efficiency"],
    location: "Moscow, Russia",
  },
  {
    name: "Ahmed Hassan",
    title: "RTLS Systems Analyst",
    organization: "Enterprise Location Intelligence",
    expertise: ["Data Analysis", "Process Improvement", "ROI Calculation"],
    location: "Cairo, Egypt",
  },
  {
    name: "Isabella Romano",
    title: "Retail RTLS Strategist",
    organization: "Customer Experience Design",
    expertise: ["Shopper Journey", "Store Layout Optimization", "Engagement Analytics"],
    location: "Milan, Italy",
  },
  {
    name: "Daniel Kim",
    title: "RTLS Solution Architect",
    organization: "Enterprise Mobility Group",
    expertise: ["System Design", "Technology Selection", "Implementation Planning"],
    location: "Seoul, South Korea",
  },
  {
    name: "Sophia Chen",
    title: "RTLS Data Analyst",
    organization: "Location Intelligence Partners",
    expertise: ["Spatial Analytics", "Predictive Modeling", "Visualization"],
    location: "Taipei, Taiwan",
  },
  {
    name: "Marco Silva",
    title: "Logistics RTLS Consultant",
    organization: "Supply Chain Optimization",
    expertise: ["Warehouse Management", "Inventory Tracking", "Process Improvement"],
    location: "São Paulo, Brazil",
  },
  {
    name: "Priya Sharma",
    title: "RTLS Implementation Manager",
    organization: "Enterprise Technology Solutions",
    expertise: ["Project Management", "Change Management", "User Adoption"],
    location: "Mumbai, India",
  },
  {
    name: "Lars Johansson",
    title: "Manufacturing RTLS Specialist",
    organization: "Industrial Digitalization Group",
    expertise: ["Production Tracking", "Tool Management", "Process Optimization"],
    location: "Stockholm, Sweden",
  },
  {
    name: "Zoe Williams",
    title: "RTLS UX Designer",
    organization: "Location Software Solutions",
    expertise: ["User Interface Design", "Dashboard Development", "User Experience"],
    location: "Cape Town, South Africa",
  },
]

// Sort vendors alphabetically by name
// const sortedVendors = [...vendors].sort((a, b) => a.name.localeCompare(b.name)) // This line is replaced by the combined and sorted list above

// Sort practitioners alphabetically by name
const sortedPractitioners = [...practitioners].sort((a, b) => a.name.localeCompare(b.name))

// Extract unique values for filters
const getUniqueValues = (array, key) => {
  if (key === "specialties" || key === "industries") {
    const allValues = array.flatMap((item) => item[key] || [])
    return [...new Set(allValues)].filter(Boolean).sort() // Added filter(Boolean) to remove potential empty strings
  }
  return [...new Set(array.map((item) => item[key]))].filter(Boolean).sort() // Added filter(Boolean) to remove potential empty strings
}

// Get only technology values from specialties
const getTechnologyValues = (vendors) => {
  // Define core RTLS technologies
  const coreTechnologies = [
    "UWB",
    "BLE",
    "RFID",
    "WiFi",
    "Bluetooth",
    "LoRa",
    "LoRaWAN",
    "GNSS",
    "RTK",
    "GPS",
    "LiDAR",
    "Ultrasound",
    "Visual SLAM",
    "Computer Vision",
    "Magnetic Positioning",
    "VLC",
  ]

  // Get all specialties
  const allSpecialties = vendors.flatMap((vendor) => vendor.specialties || [])

  // Filter to only include core technologies
  const technologies = allSpecialties.filter((specialty) =>
    coreTechnologies.some((tech) => specialty.toLowerCase().includes(tech.toLowerCase())),
  )

  // Return unique values
  return [...new Set(technologies)].sort()
}

export default function EcosystemClientPage() {
  const [activeTab, setActiveTab] = useState("vendors")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTechnology, setSelectedTechnology] = useState("All Technologies")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [filteredVendors, setFilteredVendors] = useState(sortedVendors)
  const [filteredPractitioners, setFilteredPractitioners] = useState(sortedPractitioners)

  // Get unique values for filters
  const technologies = getTechnologyValues(allVendors)
  const regions = getUniqueValues(allVendors, "region")
  const industries = getUniqueValues(allVendors, "industries")

  // Filter vendors when search or filters change
  useEffect(() => {
    let result = [...sortedVendors]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(query) ||
          vendor.description.toLowerCase().includes(query) ||
          vendor.location.toLowerCase().includes(query) ||
          (vendor.specialties && vendor.specialties.some((specialty) => specialty.toLowerCase().includes(query))),
      )
    }

    // Filter by technology
    if (selectedTechnology !== "All Technologies") {
      result = result.filter((vendor) =>
        vendor.specialties.some((specialty) => specialty.toLowerCase() === selectedTechnology.toLowerCase()),
      )
    }

    // Filter by region
    if (selectedRegion !== "All Regions") {
      result = result.filter((vendor) => vendor.region === selectedRegion)
    }

    // Filter by industry
    if (selectedIndustry !== "All Industries") {
      result = result.filter(
        (vendor) =>
          vendor.industries &&
          vendor.industries.some((industry) => industry.toLowerCase() === selectedIndustry.toLowerCase()),
      )
    }

    setFilteredVendors(result)
  }, [searchQuery, selectedTechnology, selectedRegion, selectedIndustry])

  // Filter practitioners when search changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredPractitioners(sortedPractitioners)
      return
    }

    const query = searchQuery.toLowerCase()
    const result = sortedPractitioners.filter(
      (practitioner) =>
        practitioner.name.toLowerCase().includes(query) ||
        practitioner.title.toLowerCase().includes(query) ||
        practitioner.organization.toLowerCase().includes(query) ||
        practitioner.location.toLowerCase().includes(query) ||
        (practitioner.expertise && practitioner.expertise.some((skill) => skill.toLowerCase().includes(query))),
    )

    setFilteredPractitioners(result)
  }, [searchQuery])

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedTechnology("All Technologies")
    setSelectedRegion("All Regions")
    setSelectedIndustry("All Industries")
  }

  return (
    <main className="bg-white pb-16">
      <section className="py-16 text-center bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RTLS Directory
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-700 leading-relaxed text-2xl">
               Find the INNOVATORS shaping the future of real-time location technology from SLAM, UWB and BLE to WiFi and RFID.
            </p>
          </div>

          

          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 mx-auto transform transition-all hover:scale-105">
              Contact us to get your company listed <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* More prominent tabs */}
          <Tabs defaultValue="vendors" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-blue-100 p-1 rounded-lg">
                <TabsTrigger
                  value="vendors"
                  className="flex items-center gap-2 px-6 py-3 text-base font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <Building2 className="h-5 w-5" />
                  Vendors
                </TabsTrigger>
                <TabsTrigger
                  value="practitioners"
                  className="flex items-center gap-2 px-6 py-3 text-base font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <User className="h-5 w-5" />
                  Practitioners
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search directory..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={resetFilters}>
                  <X size={18} />
                  Reset Filters
                </Button>
              </div>

              {activeTab === "vendors" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Technology Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technology</label>
                    <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
                      <SelectTrigger className="border-blue-300 focus:ring-blue-500">
                        <SelectValue placeholder="All Technologies" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Technologies">All Technologies</SelectItem>
                        {technologies.map((tech) => (
                          <SelectItem key={tech} value={tech}>
                            {tech}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Region Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger className="border-blue-300 focus:ring-blue-500">
                        <SelectValue placeholder="All Regions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Regions">All Regions</SelectItem>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Industry Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                      <SelectTrigger className="border-blue-300 focus:ring-blue-500">
                        <SelectValue placeholder="All Industries" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Industries">All Industries</SelectItem>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Filter Results Summary */}
              {activeTab === "vendors" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedTechnology !== "All Technologies" && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      Technology: {selectedTechnology}
                      <X
                        size={14}
                        className="cursor-pointer"
                        onClick={() => setSelectedTechnology("All Technologies")}
                      />
                    </Badge>
                  )}
                  {selectedRegion !== "All Regions" && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      Region: {selectedRegion}
                      <X size={14} className="cursor-pointer" onClick={() => setSelectedRegion("All Regions")} />
                    </Badge>
                  )}
                  {selectedIndustry !== "All Industries" && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      Industry: {selectedIndustry}
                      <X size={14} className="cursor-pointer" onClick={() => setSelectedIndustry("All Industries")} />
                    </Badge>
                  )}
                  {(selectedTechnology !== "All Technologies" ||
                    selectedRegion !== "All Regions" ||
                    selectedIndustry !== "All Industries") && (
                    <span className="text-sm text-gray-500">
                      Showing {filteredVendors.length} of {sortedVendors.length} vendors
                    </span>
                  )}
                </div>
              )}
            </div>

            <TabsContent value="vendors">
              {filteredVendors.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700">No vendors found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                  <Button onClick={resetFilters} className="mt-4">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVendors.map((vendor, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                      <p className="text-gray-700 mb-4">{vendor.description}</p>

                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{vendor.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {vendor.specialties &&
                          vendor.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="practitioners">
              {filteredPractitioners.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700">No practitioners found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search</p>
                  <Button onClick={() => setSearchQuery("")} className="mt-4">
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPractitioners.map((practitioner, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{practitioner.name}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{practitioner.title}</span>
                      </div>

                      <p className="text-gray-700 mb-2">{practitioner.organization}</p>

                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{practitioner.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {practitioner.expertise &&
                          practitioner.expertise.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Showcase Your RTLS Solutions</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Are you an RTLS provider or specialist but don't see your company listed in the public directory above?
            Contact us to get listed for free and connect with potential clients looking for your solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 font-semibold text-lg px-6 py-2">
                Contact Us
              </Button>
            </Link>
            <Link href="/membership">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-6 py-2">
                Join The Alliance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            This directory is provided as a resource for the RTLS community. Listing in this directory does not imply
            endorsement by the RTLS Alliance.
          </p>
        </div>
      </section>
    </main>
  )
}

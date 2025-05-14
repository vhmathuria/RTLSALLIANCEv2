import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, User, Globe, MapPin, Briefcase } from "lucide-react"

export const metadata = {
  title: "Ecosystem - RTLS Alliance",
  description: "Explore the RTLS Alliance ecosystem of vendors, practitioners, and partners.",
}

// List of RTLS vendors (excluding SEWIO and HID)
const vendors = [
  {
    name: "Ubisense",
    description: "Enterprise-grade UWB RTLS solutions for manufacturing and industrial environments",
    website: "https://ubisense.com",
    location: "Cambridge, UK",
    specialties: ["UWB", "Industrial", "Manufacturing"],
  },
  {
    name: "Zebra Technologies",
    description: "Comprehensive RTLS solutions using various technologies for enterprise visibility",
    website: "https://www.zebra.com",
    location: "Lincolnshire, IL, USA",
    specialties: ["BLE", "RFID", "Healthcare", "Retail"],
  },
  {
    name: "Quuppa",
    description: "High-accuracy Bluetooth location tracking platform for multiple industries",
    website: "https://quuppa.com",
    location: "Espoo, Finland",
    specialties: ["Bluetooth", "Sports", "Healthcare"],
  },
  {
    name: "Inpixon",
    description: "Indoor intelligence solutions with RTLS capabilities for smart buildings",
    website: "https://inpixon.com",
    location: "Palo Alto, CA, USA",
    specialties: ["WiFi", "BLE", "Smart Buildings"],
  },
  {
    name: "CenTrak",
    description: "Healthcare-focused RTLS solutions for patient flow and asset management",
    website: "https://centrak.com",
    location: "Newtown, PA, USA",
    specialties: ["Healthcare", "Asset Tracking", "Patient Flow"],
  },
  {
    name: "Pozyx",
    description: "Scalable UWB positioning solutions for industrial environments",
    website: "https://pozyx.io",
    location: "Ghent, Belgium",
    specialties: ["UWB", "Industrial", "Warehousing"],
  },
  {
    name: "Aruba Networks",
    description: "WiFi-based RTLS solutions integrated with enterprise networking",
    website: "https://www.arubanetworks.com",
    location: "Santa Clara, CA, USA",
    specialties: ["WiFi", "Enterprise", "Networking"],
  },
  {
    name: "Cisco Meraki",
    description: "Cloud-managed RTLS solutions integrated with enterprise WiFi",
    website: "https://meraki.cisco.com",
    location: "San Francisco, CA, USA",
    specialties: ["WiFi", "Cloud", "Enterprise"],
  },
  {
    name: "Kontakt.io",
    description: "BLE and IoT solutions for smart buildings and asset tracking",
    website: "https://kontakt.io",
    location: "New York, NY, USA",
    specialties: ["BLE", "IoT", "Smart Buildings"],
  },
  {
    name: "Estimote",
    description: "Developer-friendly BLE beacons and solutions for proximity and location",
    website: "https://estimote.com",
    location: "Kraków, Poland",
    specialties: ["BLE", "Proximity", "Retail"],
  },
  {
    name: "Litum",
    description: "UWB, BLE, and RFID solutions for industrial safety and efficiency",
    website: "https://litum.com",
    location: "Izmir, Turkey",
    specialties: ["UWB", "Safety", "Industrial"],
  },
  {
    name: "Redpoint Positioning",
    description: "UWB RTLS solutions for industrial environments and safety applications",
    website: "https://redpointpositioning.com",
    location: "Boston, MA, USA",
    specialties: ["UWB", "Industrial", "Safety"],
  },
  {
    name: "Siemens Enlighted",
    description: "IoT platform with RTLS capabilities for smart buildings",
    website: "https://enlightedinc.com",
    location: "Sunnyvale, CA, USA",
    specialties: ["IoT", "Smart Buildings", "Energy"],
  },
  {
    name: "AiRISTA",
    description: "RTLS solutions using WiFi, BLE, and RFID for healthcare and enterprise",
    website: "https://airistaflow.com",
    location: "Sparks, MD, USA",
    specialties: ["WiFi", "Healthcare", "Manufacturing"],
  },
  {
    name: "Sonitor",
    description: "Ultrasound-based precision RTLS for healthcare environments",
    website: "https://sonitor.com",
    location: "Oslo, Norway",
    specialties: ["Ultrasound", "Healthcare", "Patient Flow"],
  },
]

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

export default function EcosystemPage() {
  return (
    <main className="bg-white pb-16">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">RTLS Alliance Ecosystem</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect with leading vendors, practitioners, and partners in the RTLS community
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="vendors" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="vendors" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Vendors
                </TabsTrigger>
                <TabsTrigger value="practitioners" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Practitioners
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="vendors">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map((vendor, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                    <p className="text-gray-700 mb-4">{vendor.description}</p>

                    <div className="flex items-center text-gray-600 mb-2">
                      <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a
                        href={vendor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {vendor.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{vendor.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {vendor.specialties.map((specialty, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practitioners">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practitioners.map((practitioner, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
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
                      {practitioner.expertise.map((skill, i) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the RTLS Alliance Ecosystem</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become a member to get listed in our directory and connect with the RTLS community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">Join as a Member</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

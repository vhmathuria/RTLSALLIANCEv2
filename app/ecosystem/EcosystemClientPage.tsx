"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Linkedin, Mail, ArrowRight } from "lucide-react"
import { createBrowserClient } from "@supabase/ssr"

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

const VendorCardFlip = ({ vendor }: { vendor: any }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const technologies = vendor.rtls_technologies?.split(", ").filter(Boolean) || []
  const industries = vendor.industry_verticals?.split(", ").filter(Boolean) || []

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
              <h3 className="text-xl font-bold text-black mb-2 text-balance">{vendor.vendor_name}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{vendor.headquarters_location}</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Primary RTLS Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 4).map((tech: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 border-blue-200 text-xs px-2 py-1"
                    >
                      {tech.trim()}
                    </Badge>
                  ))}
                  {technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-gray-200 text-xs px-2 py-1">
                      +{technologies.length - 4} more
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
              <h3 className="text-lg font-bold text-black mb-3">{vendor.vendor_name}</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Core Services:</p>
                  <p className="text-xs text-gray-600 line-clamp-3">{vendor.core_services}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Key Industries:</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{vendor.industry_verticals}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Unique Selling Point:</p>
                  <p className="text-xs text-gray-600 line-clamp-4">{vendor.unique_selling_propositions}</p>
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
  const [vendors, setVendors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        )

        const { data, error } = await supabase
          .from("vendors")
          .select("*")
          .eq("is_active", true)
          .order("sort_order", { ascending: true })

        if (error) {
          console.error("Error fetching vendors:", error)
        } else {
          setVendors(data || [])
        }
      } catch (error) {
        console.error("Error fetching vendors:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchVendors()
  }, [])

  const regions = [
    ...new Set(
      vendors
        .map((v) => {
          // Extract region from headquarters_location
          if (v.headquarters_location?.includes("USA")) return "North America"
          if (v.headquarters_location?.includes("Canada")) return "North America"
          if (
            v.headquarters_location?.includes("UK") ||
            v.headquarters_location?.includes("Germany") ||
            v.headquarters_location?.includes("France") ||
            v.headquarters_location?.includes("Italy") ||
            v.headquarters_location?.includes("Spain") ||
            v.headquarters_location?.includes("Netherlands") ||
            v.headquarters_location?.includes("Sweden") ||
            v.headquarters_location?.includes("Finland") ||
            v.headquarters_location?.includes("Norway") ||
            v.headquarters_location?.includes("Denmark") ||
            v.headquarters_location?.includes("Belgium") ||
            v.headquarters_location?.includes("Switzerland") ||
            v.headquarters_location?.includes("Austria") ||
            v.headquarters_location?.includes("Poland") ||
            v.headquarters_location?.includes("Turkey") ||
            v.headquarters_location?.includes("Lithuania") ||
            v.headquarters_location?.includes("Estonia")
          )
            return "Europe"
          if (
            v.headquarters_location?.includes("China") ||
            v.headquarters_location?.includes("Japan") ||
            v.headquarters_location?.includes("Singapore") ||
            v.headquarters_location?.includes("Hong Kong") ||
            v.headquarters_location?.includes("India") ||
            v.headquarters_location?.includes("South Korea")
          )
            return "Asia"
          if (v.headquarters_location?.includes("Australia") || v.headquarters_location?.includes("New Zealand"))
            return "Oceania"
          if (v.headquarters_location?.includes("Brazil") || v.headquarters_location?.includes("Mexico"))
            return "South America"
          if (
            v.headquarters_location?.includes("UAE") ||
            v.headquarters_location?.includes("Israel") ||
            v.headquarters_location?.includes("Egypt")
          )
            return "Middle East"
          return "Other"
        })
        .filter(Boolean),
    ),
  ]

  const technologies = [
    ...new Set(
      vendors.flatMap(
        (v) =>
          v.rtls_technologies
            ?.split(", ")
            .map((tech: string) => tech.trim())
            .filter(Boolean) || [],
      ),
    ),
  ]

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.vendor_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.core_services?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.headquarters_location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.industry_verticals?.toLowerCase().includes(searchTerm.toLowerCase())

    // Extract region from headquarters_location for filtering
    let vendorRegion = "Other"
    if (vendor.headquarters_location?.includes("USA") || vendor.headquarters_location?.includes("Canada")) {
      vendorRegion = "North America"
    } else if (
      vendor.headquarters_location?.includes("UK") ||
      vendor.headquarters_location?.includes("Germany") ||
      vendor.headquarters_location?.includes("France") ||
      vendor.headquarters_location?.includes("Italy") ||
      vendor.headquarters_location?.includes("Spain") ||
      vendor.headquarters_location?.includes("Netherlands") ||
      vendor.headquarters_location?.includes("Sweden") ||
      vendor.headquarters_location?.includes("Finland") ||
      vendor.headquarters_location?.includes("Norway") ||
      vendor.headquarters_location?.includes("Denmark") ||
      vendor.headquarters_location?.includes("Belgium") ||
      vendor.headquarters_location?.includes("Switzerland") ||
      vendor.headquarters_location?.includes("Austria") ||
      vendor.headquarters_location?.includes("Poland") ||
      vendor.headquarters_location?.includes("Turkey") ||
      vendor.headquarters_location?.includes("Lithuania") ||
      vendor.headquarters_location?.includes("Estonia")
    ) {
      vendorRegion = "Europe"
    } else if (
      vendor.headquarters_location?.includes("China") ||
      vendor.headquarters_location?.includes("Japan") ||
      vendor.headquarters_location?.includes("Singapore") ||
      vendor.headquarters_location?.includes("Hong Kong") ||
      vendor.headquarters_location?.includes("India") ||
      vendor.headquarters_location?.includes("South Korea")
    ) {
      vendorRegion = "Asia"
    } else if (
      vendor.headquarters_location?.includes("Australia") ||
      vendor.headquarters_location?.includes("New Zealand")
    ) {
      vendorRegion = "Oceania"
    } else if (vendor.headquarters_location?.includes("Brazil") || vendor.headquarters_location?.includes("Mexico")) {
      vendorRegion = "South America"
    } else if (
      vendor.headquarters_location?.includes("UAE") ||
      vendor.headquarters_location?.includes("Israel") ||
      vendor.headquarters_location?.includes("Egypt")
    ) {
      vendorRegion = "Middle East"
    }

    const matchesRegion = selectedRegion === "all" || vendorRegion === selectedRegion

    const vendorTechnologies = vendor.rtls_technologies?.split(", ").map((tech: string) => tech.trim()) || []
    const matchesTechnology = selectedTechnology === "all" || vendorTechnologies.includes(selectedTechnology)

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading RTLS Directory...</p>
        </div>
      </div>
    )
  }

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
            {filteredVendors.map((vendor) => (
              <VendorCardFlip key={vendor.id} vendor={vendor} />
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

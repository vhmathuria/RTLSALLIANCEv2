import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

// Enable daily revalidation (86400 seconds = 24 hours)
export const revalidate = 86400

export const metadata = {
  title: "Directory - RTLS Alliance",
  description: "Connect with RTLS vendors and practitioners in our comprehensive directory.",
}

// List of RTLS vendors (excluding SEWIO and HID)
const vendors = [
  {
    name: "Pozyx",
    logo: "/placeholder.svg?key=8q80v",
    description: "Ultra-wideband (UWB) real-time location system for precise indoor positioning",
    specialties: ["UWB", "Asset Tracking", "Manufacturing"],
    location: "Ghent, Belgium",
    website: "https://www.pozyx.io",
  },
  {
    name: "Red Lore",
    logo: "/placeholder.svg?key=91ny3",
    description: "IoT solutions for industrial environments with real-time location tracking",
    specialties: ["Industrial IoT", "Bluetooth", "Manufacturing"],
    location: "Boston, USA",
    website: "https://www.redlore.com",
  },
  {
    name: "RedPoint",
    logo: "/placeholder.svg?key=fw2je",
    description: "UWB positioning solutions for industrial applications",
    specialties: ["UWB", "Industrial", "Safety"],
    location: "Boston, USA",
    website: "https://www.redpointpositioning.com",
  },
  {
    name: "GEMBA",
    logo: "/placeholder.svg?key=tg890",
    description: "VR training and digital twin solutions with location tracking",
    specialties: ["VR", "Digital Twin", "Training"],
    location: "London, UK",
    website: "https://www.gemba.com",
  },
  {
    name: "Twiserion",
    logo: "/placeholder.svg?key=eqz1e",
    description: "IoT and RTLS solutions for smart buildings and industrial environments",
    specialties: ["IoT", "Smart Buildings", "BLE"],
    location: "Munich, Germany",
    website: "https://www.twiserion.com",
  },
  {
    name: "Sensolus",
    logo: "/sensolus-logo.png",
    description: "Supply chain visibility through IoT tracking solutions",
    specialties: ["Supply Chain", "Logistics", "IoT"],
    location: "Ghent, Belgium",
    website: "https://www.sensolus.com",
  },
  {
    name: "Airista",
    logo: "/placeholder.svg?height=60&width=120",
    description: "RTLS solutions for healthcare, manufacturing, and logistics",
    specialties: ["Healthcare", "Wi-Fi", "RFID"],
    location: "Sparks, USA",
    website: "https://www.airista.com",
  },
  {
    name: "CEIT",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Research and development in RTLS and industrial automation",
    specialties: ["R&D", "Industrial", "Automation"],
    location: "San Sebastian, Spain",
    website: "https://www.ceit.es",
  },
  {
    name: "CyberNX",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Cybersecurity and IoT solutions with location tracking capabilities",
    specialties: ["Cybersecurity", "IoT", "Enterprise"],
    location: "Bangalore, India",
    website: "https://www.cybernx.com",
  },
  {
    name: "Quuppa",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Bluetooth Low Energy (BLE) real-time locating system",
    specialties: ["BLE", "Sports", "Retail"],
    location: "Espoo, Finland",
    website: "https://www.quuppa.com",
  },
  {
    name: "Litum",
    logo: "/placeholder.svg?height=60&width=120",
    description: "IoT-enabled RTLS solutions for workforce safety and asset tracking",
    specialties: ["Safety", "Construction", "UWB"],
    location: "Izmir, Turkey",
    website: "https://www.litum.com",
  },
  {
    name: "FleetIQ360",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Fleet management and asset tracking solutions",
    specialties: ["Fleet Management", "GPS", "Logistics"],
    location: "Toronto, Canada",
    website: "https://www.fleetiq360.com",
  },
]

// List of RTLS practitioners (fictional)
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

export default function DirectoryPage() {
  return (
    <main className="bg-white pb-16">
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">RTLS Alliance Directory</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connect with leading RTLS vendors and practitioners in our comprehensive directory
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="vendors" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="practitioners">Practitioners</TabsTrigger>
            </TabsList>

            <TabsContent value="vendors" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map((vendor) => (
                  <Card key={vendor.name} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="h-16 flex items-center mb-4">
                        <Image
                          src={vendor.logo || "/placeholder.svg"}
                          alt={vendor.name}
                          width={120}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <CardTitle>{vendor.name}</CardTitle>
                      <CardDescription>{vendor.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-start mb-4">
                        <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{vendor.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {vendor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practitioners" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practitioners.map((practitioner) => (
                  <Card key={practitioner.name} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <CardTitle>{practitioner.name}</CardTitle>
                      <CardDescription className="flex flex-col gap-1">
                        <span>{practitioner.title}</span>
                        <span className="flex items-center">
                          <Building2 className="h-4 w-4 text-gray-500 mr-1" />
                          {practitioner.organization}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-start mb-4">
                        <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{practitioner.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {practitioner.expertise.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <a href={practitioner.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                      <a href={`mailto:${practitioner.email}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

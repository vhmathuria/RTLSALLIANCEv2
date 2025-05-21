"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Lightbulb,
  ChevronRight,
  Building2,
  Hospital,
  ShoppingBag,
  Factory,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { articles } from "@/lib/article-data"

export default function InfraredTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeTab, setActiveTab] = useState("healthcare")

  // Get general RTLS articles for related resources
  const relatedArticles = articles.slice(0, 3)

  return (
    <main className="bg-white pb-16">
      <div className="container mx-auto px-4 py-8">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to RTLS + Digital Twin
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center mb-4 md:mb-0">
            <Lightbulb className="h-10 w-10 text-blue-600 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Infrared Technology for RTLS
            </h1>
          </div>
          <div className="flex space-x-3">
            <Link href="/contact">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Request Demo
              </Button>
            </Link>
            <Link href="/ecosystem/directory">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Find Providers</Button>
            </Link>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview & Key Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <p>
                Infrared (IR) technology for Real-Time Location Systems (RTLS) utilizes invisible infrared light to
                determine the location of people and assets within indoor environments. Operating in the electromagnetic
                spectrum between visible light and radio waves (wavelengths from 780 nm to 1 mm), infrared systems
                provide reliable room-level or sub-room positioning with high accuracy in controlled environments.
              </p>
              <p>
                IR-based RTLS solutions are particularly valued for their precision in confined spaces, immunity to
                radio frequency interference, and inherent security due to the line-of-sight nature of infrared light.
                While not as widely deployed as RF-based technologies, infrared systems continue to serve important
                roles in healthcare, secure facilities, and other applications where reliable room-level presence
                detection is critical.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-700">Wavelength</p>
                  <p>Near-infrared (780 nm - 3 μm)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Range</p>
                  <p>3-10 meters</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Positioning Accuracy</p>
                  <p>Room-level or sub-room (0.3-3 meters)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Line of Sight</p>
                  <p>Required</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Power Consumption</p>
                  <p>Low to moderate</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Data Rate</p>
                  <p>9.6 kbps to 4 Mbps</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Security</p>
                  <p>Inherently secure (room containment)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Interference Sources</p>
                  <p>Direct sunlight, incandescent lighting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">How Infrared Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <p>
                Infrared RTLS systems use various methods to determine the location of tags or badges within a facility.
                These approaches differ in their implementation, accuracy, and infrastructure requirements.
              </p>
              <p>The most common infrared positioning methods include:</p>
              <ul>
                <li>
                  <strong>Active IR Beaconing:</strong> Battery-powered IR tags emit unique identification signals that
                  are detected by fixed IR receivers.
                </li>
                <li>
                  <strong>Passive IR Detection:</strong> Fixed IR transmitters broadcast location codes that are
                  received by wearable badges.
                </li>
                <li>
                  <strong>IR Triangulation:</strong> Multiple IR receivers detect signals from a tag and measure signal
                  characteristics to determine position.
                </li>
                <li>
                  <strong>Hybrid IR/RF Systems:</strong> Combines infrared for precise room-level location with RF
                  technologies for broader coverage.
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Infrared RTLS Architecture</h3>
              <p className="mb-4">A typical infrared-based RTLS system consists of the following components:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>IR Tags/Badges:</strong> Wearable devices carried by personnel or attached to assets.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>IR Receivers/Sensors:</strong> Fixed devices installed in ceilings or walls that detect IR
                    signals from tags.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>IR Transmitters/Beacons:</strong> In passive systems, these fixed devices emit
                    location-specific IR codes.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Room Controllers:</strong> Intermediate devices that aggregate data from multiple IR
                    sensors.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Network Infrastructure:</strong> Wired or wireless connectivity linking the IR sensors to
                    the central server.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Location Engine:</strong> Software that processes IR detection events to determine tag
                    locations.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Management Platform:</strong> User interface and business logic layer for visualization and
                    reporting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advantages & Limitations Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Advantages</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Definitive Room-Level Accuracy:</strong> IR signals do not pass through walls, providing
                    unambiguous room-level location.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Immunity to RF Interference:</strong> Not affected by radio frequency interference or
                    electromagnetic noise.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Enhanced Privacy and Security:</strong> Containment within physical spaces provides natural
                    security boundaries.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>No Radio Frequency Regulatory Issues:</strong> IR systems are not subject to RF licensing or
                    regulatory constraints.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Reliable in RF-Dense Environments:</strong> Performs well in environments with high RF noise
                    or restrictions.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Simple Deployment Logic:</strong> Room-based architecture aligns well with how buildings are
                    organized.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compatible with Sensitive Equipment:</strong> Safe to use around medical devices and in
                    areas where RF emissions are restricted.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Limitations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Line of Sight Requirement:</strong> IR signals are blocked by obstacles, requiring clear
                    line of sight between tags and sensors.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Limited Range:</strong> Effective range typically limited to 3-10 meters, requiring more
                    sensors for complete coverage.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Susceptibility to Optical Interference:</strong> Performance can be degraded by direct
                    sunlight and certain types of artificial lighting.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Infrastructure Density:</strong> Requires installation of IR sensors in every room or zone,
                    potentially increasing deployment costs.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Limited Outdoor Applicability:</strong> Generally not suitable for outdoor use due to
                    sunlight interference and range limitations.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Positioning Granularity:</strong> Most implementations provide room-level rather than
                    precise coordinate-based positioning.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Badge Orientation Sensitivity:</strong> Some systems require the IR emitter/receiver to be
                    properly oriented for reliable detection.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Industry Applications</h2>
          <Tabs defaultValue="healthcare" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="healthcare" className="flex items-center gap-2">
                <Hospital className="h-4 w-4" />
                <span className="hidden md:inline">Healthcare</span>
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="flex items-center gap-2">
                <Factory className="h-4 w-4" />
                <span className="hidden md:inline">Manufacturing</span>
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden md:inline">Retail</span>
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="hidden md:inline">Logistics</span>
              </TabsTrigger>
              <TabsTrigger value="corporate" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden md:inline">Corporate</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="healthcare" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Healthcare Applications</h3>
                  <p className="mb-4">
                    Infrared RTLS technology is widely used in healthcare settings where definitive room-level tracking
                    is critical for patient care, staff efficiency, and asset management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Staff Tracking:</strong> Monitor caregiver presence in patient rooms for workflow
                        analysis and contact tracing.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Patient Monitoring:</strong> Track patient location and movement within healthcare
                        facilities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Hand Hygiene Compliance:</strong> Automatically monitor and improve hand hygiene
                        practices.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Equipment Tracking:</strong> Locate critical medical equipment quickly when needed.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Infection Control:</strong> Support contact tracing and exposure management during
                        outbreaks.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Users className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Improved Patient Care</span>
                        <p className="text-sm text-gray-600">
                          Reduced response times and increased direct patient care time.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Users className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Enhanced Infection Control</span>
                        <p className="text-sm text-gray-600">Automated contact tracing and exposure management.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Users className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Workflow Optimization</span>
                        <p className="text-sm text-gray-600">Data-driven insights for process improvement.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Users className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">RF-Safe Environment</span>
                        <p className="text-sm text-gray-600">Safe to use around sensitive medical equipment.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Manufacturing Applications</h3>
                  <p className="mb-4">
                    In manufacturing environments, infrared RTLS provides reliable room-level tracking in areas with
                    high RF interference or where RF emissions must be limited.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Tool Tracking:</strong> Monitor the location of specialized tools and equipment.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Personnel Safety:</strong> Ensure workers are not in restricted or dangerous areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Clean Room Monitoring:</strong> Track personnel and equipment in sensitive manufacturing
                        areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Work Cell Optimization:</strong> Analyze time spent in different production areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Quality Control:</strong> Ensure proper process sequence by confirming presence in
                        specific areas.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Factory className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">RF-Interference Immunity</span>
                        <p className="text-sm text-gray-600">
                          Reliable operation in environments with high electromagnetic noise.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Factory className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Process Compliance</span>
                        <p className="text-sm text-gray-600">Verification that workers follow required procedures.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Factory className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Safety Enhancement</span>
                        <p className="text-sm text-gray-600">Improved emergency response and evacuation management.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Factory className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Workflow Analysis</span>
                        <p className="text-sm text-gray-600">Data-driven insights for process optimization.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retail" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Retail Applications</h3>
                  <p className="mb-4">
                    In retail environments, infrared RTLS can provide zone-based tracking for customer service,
                    security, and operations management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Staff Allocation:</strong> Track associate presence in different departments.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Customer Service:</strong> Alert staff when customers enter specific areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>High-Value Item Security:</strong> Monitor access to areas with expensive merchandise.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Fitting Room Management:</strong> Track occupancy and service times.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Store Layout Analysis:</strong> Understand staff movement patterns for optimization.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <ShoppingBag className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Improved Customer Service</span>
                        <p className="text-sm text-gray-600">
                          Faster response times to customer needs in specific areas.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <ShoppingBag className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Enhanced Security</span>
                        <p className="text-sm text-gray-600">Better protection for high-value merchandise areas.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <ShoppingBag className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Staff Optimization</span>
                        <p className="text-sm text-gray-600">
                          Data-driven staffing based on department coverage needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <ShoppingBag className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Operational Insights</span>
                        <p className="text-sm text-gray-600">Analytics on staff movement and time allocation.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="logistics" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logistics Applications</h3>
                  <p className="mb-4">
                    In logistics and warehousing, infrared RTLS can provide zone-based tracking in specific areas where
                    RF coverage is problematic.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Loading Dock Management:</strong> Track personnel presence in specific loading areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Secure Area Access:</strong> Monitor access to high-value storage zones.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Cold Storage Monitoring:</strong> Track time spent in refrigerated or freezer areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Hazardous Material Zones:</strong> Ensure proper protocols in dangerous goods areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Quality Control Areas:</strong> Verify presence during inspection processes.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Truck className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Safety Compliance</span>
                        <p className="text-sm text-gray-600">Verification of proper protocols in hazardous areas.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Truck className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Security Enhancement</span>
                        <p className="text-sm text-gray-600">Controlled access to high-value inventory areas.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Truck className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Labor Management</span>
                        <p className="text-sm text-gray-600">Insights into time spent in different warehouse zones.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Truck className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Process Verification</span>
                        <p className="text-sm text-gray-600">
                          Confirmation that required steps are performed in designated areas.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Corporate Applications</h3>
                  <p className="mb-4">
                    In corporate environments, infrared RTLS provides privacy-friendly tracking for security, space
                    utilization, and emergency management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Secure Facility Access:</strong> Monitor personnel movement in classified or restricted
                        areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Meeting Room Utilization:</strong> Track actual usage of conference spaces.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Emergency Mustering:</strong> Account for personnel during evacuations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Visitor Management:</strong> Ensure guests remain in authorized areas.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Space Utilization:</strong> Analyze workplace usage patterns for optimization.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Building2 className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Enhanced Security</span>
                        <p className="text-sm text-gray-600">Definitive verification of presence in secure areas.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Building2 className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Privacy Protection</span>
                        <p className="text-sm text-gray-600">Room-level tracking without precise positioning.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Building2 className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Emergency Response</span>
                        <p className="text-sm text-gray-600">Improved evacuation and mustering capabilities.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Building2 className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <span className="font-medium">Space Optimization</span>
                        <p className="text-sm text-gray-600">Data-driven workplace design based on actual usage.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Mini Case Studies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hospital Staff Tracking</h3>
              <p className="mb-4">
                A 350-bed hospital implemented an IR-based RTLS to track staff presence in patient rooms, automate
                contact tracing, and analyze workflow patterns. The system used ceiling-mounted IR receivers in all
                patient rooms and key work areas, with staff wearing dual-technology IR/RF badges.
              </p>
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Increased direct patient care time by 21% through workflow optimization</li>
                <li>Reduced response time to patient calls by 37%</li>
                <li>Automated 100% of contact tracing during infectious disease outbreaks</li>
                <li>Improved hand hygiene compliance by 40% through automated monitoring</li>
                <li>ROI achieved in 14 months through efficiency gains and reduced infections</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Secure Research Facility</h3>
              <p className="mb-4">
                A government research laboratory deployed an IR-based personnel tracking system to enhance security,
                ensure compliance with access protocols, and improve emergency response capabilities. The system covered
                200+ rooms across multiple security zones.
              </p>
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>100% accurate verification of personnel presence in classified areas</li>
                <li>Reduced security incidents by 65% through real-time monitoring and alerts</li>
                <li>Improved emergency evacuation time by 40% with real-time personnel accounting</li>
                <li>Enhanced compliance with government security regulations</li>
                <li>Seamless integration with existing access control and security systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Considerations Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Implementation Considerations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Planning and Design</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Sensor Placement</span>
                    <p className="text-sm text-gray-600">
                      Careful placement of IR sensors is critical for reliable coverage. Consider room geometry, ceiling
                      height, potential obstructions, and typical movement patterns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Environmental Assessment</span>
                    <p className="text-sm text-gray-600">
                      Evaluate potential sources of IR interference, including direct sunlight through windows, certain
                      types of lighting fixtures, and heat sources.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Badge/Tag Design</span>
                    <p className="text-sm text-gray-600">
                      Consider how tags will be worn or attached to ensure reliable IR transmission/reception. Badge
                      design should encourage proper wearing practices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Hybrid Technology Approach</span>
                    <p className="text-sm text-gray-600">
                      Determine whether IR alone meets all requirements or if a hybrid approach combining IR with RF
                      technologies would be beneficial.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Power and Connectivity</span>
                    <p className="text-sm text-gray-600">
                      Plan for power and network connectivity to IR sensors and room controllers. Options include
                      Power-over-Ethernet (PoE), local power supplies, or battery operation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Badge Battery Management</span>
                    <p className="text-sm text-gray-600">
                      Develop a strategy for monitoring and replacing batteries in active IR tags. Consider battery life
                      expectations and replacement procedures.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">System Integration</span>
                    <p className="text-sm text-gray-600">
                      Plan how the IR RTLS will integrate with other systems such as access control, nurse call, or
                      building management systems.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-1 mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-purple-700" />
                  </div>
                  <div>
                    <span className="font-medium">Privacy and Compliance</span>
                    <p className="text-sm text-gray-600">
                      Address privacy concerns and regulatory requirements, particularly for personnel tracking
                      applications. Develop clear policies on data collection and usage.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Comparison Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b text-left">Feature</th>
                  <th className="py-3 px-4 border-b text-left">Infrared</th>
                  <th className="py-3 px-4 border-b text-left">BLE</th>
                  <th className="py-3 px-4 border-b text-left">Wi-Fi</th>
                  <th className="py-3 px-4 border-b text-left">UWB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Range</td>
                  <td className="py-3 px-4 border-b">3-10 m</td>
                  <td className="py-3 px-4 border-b">10-100 m</td>
                  <td className="py-3 px-4 border-b">30-100 m</td>
                  <td className="py-3 px-4 border-b">10-50 m</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Positioning Approach</td>
                  <td className="py-3 px-4 border-b">Room-level/zone-based</td>
                  <td className="py-3 px-4 border-b">Coordinate-based</td>
                  <td className="py-3 px-4 border-b">Coordinate-based</td>
                  <td className="py-3 px-4 border-b">Precise coordinate-based</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Accuracy</td>
                  <td className="py-3 px-4 border-b">Room-level (definitive)</td>
                  <td className="py-3 px-4 border-b">1-3 m</td>
                  <td className="py-3 px-4 border-b">3-15 m</td>
                  <td className="py-3 px-4 border-b">10-30 cm</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Line of Sight Required</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">No</td>
                  <td className="py-3 px-4 border-b">No</td>
                  <td className="py-3 px-4 border-b">Partial</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Wall Penetration</td>
                  <td className="py-3 px-4 border-b">None</td>
                  <td className="py-3 px-4 border-b">Moderate</td>
                  <td className="py-3 px-4 border-b">Good</td>
                  <td className="py-3 px-4 border-b">Limited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Infrastructure Density</td>
                  <td className="py-3 px-4 border-b">High (every room)</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                  <td className="py-3 px-4 border-b">Low to Medium</td>
                  <td className="py-3 px-4 border-b">Medium to High</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">RF Interference</td>
                  <td className="py-3 px-4 border-b">Immune</td>
                  <td className="py-3 px-4 border-b">Susceptible</td>
                  <td className="py-3 px-4 border-b">Susceptible</td>
                  <td className="py-3 px-4 border-b">Resistant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Future Trends Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Future Trends</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Miniaturization</h3>
              <p>
                Smaller, more energy-efficient IR components enabling less obtrusive tags and sensors with longer
                battery life.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Advanced Optics</h3>
              <p>Improved IR lenses and detectors expanding coverage areas and reducing infrastructure requirements.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Multi-Technology Integration</h3>
              <p>
                Tighter integration of IR with RF, ultrasound, and other technologies for comprehensive positioning
                solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Enhanced Analytics</h3>
              <p>
                Advanced software using IR location data to derive deeper insights into workflow, space utilization, and
                behavior patterns.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">IoT Convergence</h3>
              <p>Integration with broader Internet of Things ecosystems for more comprehensive facility management.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Embedded IR Capabilities</h3>
              <p>
                IR sensors built into lighting fixtures, ceiling tiles, and other building elements for less intrusive
                deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link href={`/resources/${article.slug}`} key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 h-full hover:shadow-md hover:border-blue-300">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-blue-600 text-sm flex items-center mt-4">
                      Read article
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Ready to implement Infrared technology in your RTLS solution?</h2>
            <p className="mb-4">
              The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
              infrared-based location systems for definitive room-level tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
              </Link>
              <Link href="/ecosystem/directory">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Find Infrared RTLS Providers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

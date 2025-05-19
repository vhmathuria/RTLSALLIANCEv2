"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight, Bell, Zap, Workflow, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RulesEngineModuleClientPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Rules Engine Module</h1>
          <p className="text-lg text-gray-700 mb-6">
            Transform location data into automated actions with a powerful business rules engine that enables real-time
            decision making and workflow automation.
          </p>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <p>
                The Rules Engine Module provides a flexible framework for defining, managing, and executing business
                rules based on real-time location data. This powerful tool enables organizations to automate responses
                to location-based events, enforce compliance policies, and streamline operational workflows without
                requiring custom programming.
              </p>
              <div className="relative h-64 w-full rounded-lg overflow-hidden my-6">
                <Image
                  src="/images/rtls-architecture.png"
                  alt="RTLS Rules Engine architecture showing event processing and workflow automation"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                With an intuitive rule builder interface, both technical and non-technical users can create
                sophisticated business logic that transforms passive location tracking into proactive operational
                intelligence, driving efficiency and compliance across the organization.
              </p>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Workflow className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Visual Rule Builder</h3>
                        <p className="text-sm text-gray-600">
                          Drag-and-drop interface for creating complex business rules without coding
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Bell className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Multi-channel Alerts</h3>
                        <p className="text-sm text-gray-600">
                          Configurable notifications via email, SMS, push notifications, and more
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Zap className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Real-time Processing</h3>
                        <p className="text-sm text-gray-600">
                          Immediate evaluation and action on location events as they occur
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Code className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">API Integration</h3>
                        <p className="text-sm text-gray-600">
                          Trigger external systems and services based on location events
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Operational Automation:</strong> Reduce manual intervention by automating responses to
                    location-based events and conditions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Enhanced Safety:</strong> Immediately alert personnel to safety violations or hazardous
                    conditions based on location data.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Compliance Enforcement:</strong> Automatically document and enforce regulatory compliance
                    requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Process Optimization:</strong> Identify bottlenecks and trigger corrective actions based on
                    real-time movement patterns.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Business Agility:</strong> Quickly adapt to changing operational requirements by modifying
                    rules without programming.
                  </span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Manufacturing</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated WIP tracking and production alerts</li>
                    <li>• Equipment maintenance scheduling based on usage</li>
                    <li>• Safety zone enforcement and violation alerts</li>
                    <li>• Quality control process automation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Healthcare</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Patient flow optimization and bottleneck alerts</li>
                    <li>• Equipment sanitization compliance tracking</li>
                    <li>• Staff allocation based on patient location</li>
                    <li>• Automated infection control protocols</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Logistics</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Automated dock scheduling and alerts</li>
                    <li>• Cold chain compliance monitoring</li>
                    <li>• Cross-docking optimization</li>
                    <li>• Inventory movement validation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Retail</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Customer engagement based on location</li>
                    <li>• Inventory replenishment automation</li>
                    <li>• Staff allocation based on customer density</li>
                    <li>• Loss prevention alerts and responses</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-sm text-gray-600 mb-4">
                See how the Rules Engine Module can automate your operations and enhance decision-making with location
                intelligence.
              </p>
              <Link href="/contact">
                <Button className="w-full">Schedule Demo</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Business Rules for RTLS Implementation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Workflow Automation Best Practices</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Case Study: Healthcare Compliance</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Explore Other Modules</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/rtls-digital-twin/modules/fleet-manager"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Fleet Manager Module</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/modules/dashboard-reports"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Dashboard & Reports Module</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

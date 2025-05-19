"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart2, PieChart, LineChart, TableIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardReportsModuleClientPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Dashboard & Reports Module</h1>
          <p className="text-lg text-gray-700 mb-6">
            Transform raw location data into actionable business intelligence with comprehensive visualization tools and
            automated reporting capabilities.
          </p>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <p>
                The Dashboard & Reports Module provides a comprehensive suite of visualization and analytics tools that
                transform complex location data into clear, actionable insights. This module enables organizations to
                monitor real-time operations, analyze historical trends, and generate automated reports to optimize
                decision-making processes.
              </p>
              <div className="relative h-64 w-full rounded-lg overflow-hidden my-6">
                <Image
                  src="/images/rtls-monitoring.png"
                  alt="RTLS Dashboard showing real-time location analytics with multiple visualization types"
                  fill
                  className="object-cover"
                />
              </div>
              <p>
                With customizable dashboards, stakeholders across the organization can access the specific metrics and
                KPIs relevant to their roles, ensuring that location intelligence is effectively distributed to drive
                operational improvements.
              </p>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <BarChart2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Real-time Dashboards</h3>
                        <p className="text-sm text-gray-600">
                          Live visualization of asset locations, movements, and status updates
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <LineChart className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Historical Analysis</h3>
                        <p className="text-sm text-gray-600">
                          Trend analysis and pattern recognition from historical location data
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <TableIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Automated Reports</h3>
                        <p className="text-sm text-gray-600">
                          Scheduled generation and distribution of customized reports
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <PieChart className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">KPI Monitoring</h3>
                        <p className="text-sm text-gray-600">
                          Track key performance indicators related to asset utilization and efficiency
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
                    <strong>Enhanced Decision Making:</strong> Visualize complex location data in intuitive formats that
                    support faster, more informed decisions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Operational Transparency:</strong> Provide stakeholders with clear visibility into asset
                    locations, movements, and utilization patterns.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Continuous Improvement:</strong> Identify inefficiencies and optimization opportunities
                    through historical trend analysis.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Regulatory Compliance:</strong> Generate automated reports for compliance documentation and
                    audit requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cross-functional Alignment:</strong> Share relevant metrics across departments to align
                    operations with strategic objectives.
                  </span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Integration Capabilities</h2>
            <p className="mb-4">
              The Dashboard & Reports Module seamlessly integrates with other RTLS Alliance modules and third-party
              business intelligence tools to provide a comprehensive analytics ecosystem:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Direct data flow from Fleet Manager for asset utilization analytics</li>
              <li>Rules Engine integration for automated alert visualization</li>
              <li>Export capabilities to Power BI, Tableau, and other BI platforms</li>
              <li>API access for custom application development</li>
              <li>Integration with ERP and MES systems for contextual business data</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-sm text-gray-600 mb-4">
                See how the Dashboard & Reports Module can transform your location data into actionable business
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
                    <span>Data Visualization Best Practices Guide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>KPI Development for RTLS Implementation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Case Study: Manufacturing Analytics</span>
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
                    href="/rtls-digital-twin/modules/rules-engine"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Rules Engine Module</span>
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

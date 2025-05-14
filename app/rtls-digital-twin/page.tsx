import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Bluetooth,
  Wifi,
  Camera,
  Thermometer,
  BrainCircuit,
  LayoutGrid,
  PlaySquare,
  Gauge,
  Truck,
  BarChart3,
  Boxes,
  Factory,
  Hospital,
  ShoppingBag,
} from "lucide-react"

export const metadata = {
  title: "RTLS + Digital Twin Integration",
  description:
    "Discover how real-time location systems power next-generation digital twin platforms for enhanced visibility and control",
}

export default function RTLSDigitalTwinPage() {
  return (
    <main className="bg-gray-50 pb-16">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            RTLS + Digital Twin Integration
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover how real-time location systems power next-generation digital twin platforms for enhanced visibility
            and control
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">RTLS Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/rtls-digital-twin/technologies/ble"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Bluetooth className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">BLE</h3>
              </div>
              <p className="text-gray-700">Cost-effective proximity & presence detection</p>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/uwb"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L20 18H4L12 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-lg font-bold">UWB</h3>
              </div>
              <p className="text-gray-700">High-precision real-time positioning</p>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/wifi"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Wifi className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Wi-Fi</h3>
              </div>
              <p className="text-gray-700">Infrastructure-based tracking solution</p>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/vision"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Vision</h3>
              </div>
              <p className="text-gray-700">Camera-based object recognition & tracking</p>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/infrared"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Thermometer className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Infrared</h3>
              </div>
              <p className="text-gray-700">Room-level presence detection</p>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/ai-integration"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <BrainCircuit className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">AI Integration</h3>
              </div>
              <p className="text-gray-700">Advanced pattern recognition & prediction</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Digital Twin Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/rtls-digital-twin/features/production-planning"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <LayoutGrid className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Production Planning</h3>
              </div>
              <p className="text-gray-700">Optimize schedules with real-time location data</p>
            </Link>

            <Link
              href="/rtls-digital-twin/features/process-control"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <PlaySquare className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Process Control</h3>
              </div>
              <p className="text-gray-700">Monitor and control production in real-time</p>
            </Link>

            <Link
              href="/rtls-digital-twin/features/rules-engine"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Gauge className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Rules Engine</h3>
              </div>
              <p className="text-gray-700">Automate decisions based on location events</p>
            </Link>

            <Link
              href="/rtls-digital-twin/features/dashboarding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Dashboarding</h3>
              </div>
              <p className="text-gray-700">Visualize KPIs on real-time floor plans</p>
            </Link>

            <Link
              href="/rtls-digital-twin/features/fleet-management"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Fleet Management</h3>
              </div>
              <p className="text-gray-700">Monitor forklift, AGV, and asset fleets</p>
            </Link>

            <Link
              href="/rtls-digital-twin/features/simulation"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Boxes className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Simulation</h3>
              </div>
              <p className="text-gray-700">Run what-if scenarios with real parameters</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Applications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center h-auto hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Factory className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-4">Manufacturing</h3>
              <ul className="text-left text-gray-700 space-y-2 list-disc pl-5">
                <li>Work-in-progress tracking across production lines</li>
                <li>Tool and equipment utilization monitoring</li>
                <li>Material flow optimization and bottleneck detection</li>
                <li>Quality control process integration</li>
                <li>Worker safety and ergonomics monitoring</li>
                <li>Automated inventory management</li>
                <li>Production line balancing</li>
                <li>Maintenance scheduling optimization</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center h-auto hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Hospital className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-4">Healthcare</h3>
              <ul className="text-left text-gray-700 space-y-2 list-disc pl-5">
                <li>Patient flow optimization and wait time reduction</li>
                <li>Medical equipment tracking and utilization analysis</li>
                <li>Staff workflow efficiency improvement</li>
                <li>Infection control and contact tracing</li>
                <li>Medication and supply chain management</li>
                <li>Emergency response coordination</li>
                <li>Operating room turnover optimization</li>
                <li>Patient and staff safety monitoring</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center h-auto hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-4">Logistics</h3>
              <ul className="text-left text-gray-700 space-y-2 list-disc pl-5">
                <li>Warehouse space utilization optimization</li>
                <li>Picking route optimization and dynamic routing</li>
                <li>Cross-docking efficiency improvement</li>
                <li>Yard management and dock scheduling</li>
                <li>Cold chain monitoring and compliance</li>
                <li>Inventory accuracy and cycle counting</li>
                <li>Labor productivity analysis</li>
                <li>Autonomous vehicle navigation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center h-auto hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <ShoppingBag className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-4">Retail</h3>
              <ul className="text-left text-gray-700 space-y-2 list-disc pl-5">
                <li>Customer journey mapping and heat mapping</li>
                <li>Shelf inventory monitoring and planogram compliance</li>
                <li>Staff allocation based on customer density</li>
                <li>Queue management and checkout optimization</li>
                <li>Loss prevention and security enhancement</li>
                <li>Personalized customer engagement</li>
                <li>Store layout optimization</li>
                <li>Omnichannel fulfillment efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl mx-4 my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Connect with certified vendors and implementation partners</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">Contact an Expert</Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                View Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

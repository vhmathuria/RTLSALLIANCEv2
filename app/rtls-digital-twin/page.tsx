import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Bluetooth,
  Wifi,
  Radio,
  Camera,
  Satellite,
  Compass,
  Layers,
  LayoutGrid,
  PlaySquare,
  Gauge,
  BarChart3,
  Truck,
  Boxes,
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

      {/* Radio Frequency Based RTLS */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Radio Frequency Based RTLS</h2>
          <p className="text-gray-600 mb-6">
            Wireless technologies that use radio signals for positioning and tracking
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/rtls-digital-twin/technologies/ble"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Bluetooth className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Bluetooth Low Energy (BLE)</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/uwb"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Radio className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Ultra-Wideband (UWB)</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/wifi"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Wifi className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Wi-Fi</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/lora"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Radio className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">LoRa</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/nfc"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Radio className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">NFC</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Based RTLS */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Vision Based RTLS</h2>
          <p className="text-gray-600 mb-6">
            Optical and imaging technologies for precise object tracking and identification
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/rtls-digital-twin/technologies/infrared"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Camera className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Infrared</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/lidar"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Camera className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">LiDAR</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/ai-cameras"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Camera className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">AI + Cameras</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Satellite Based RTLS */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Satellite Based RTLS</h2>
          <p className="text-gray-600 mb-6">Global positioning technologies for outdoor and wide-area tracking</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/rtls-digital-twin/technologies/gnss"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Satellite className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">GNSS (GPS, GLONASS, Galileo, BeiDou)</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/rtk-gps"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Satellite className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">RTK-GPS / DGPS</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Magnetic and Acoustic RTLS */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Magnetic and Acoustic RTLS</h2>
          <p className="text-gray-600 mb-6">
            Alternative positioning technologies using magnetic fields and sound waves
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/rtls-digital-twin/technologies/magnetic-field"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Compass className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Magnetic Field Mapping</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/ultrasound"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Radio className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Ultrasound</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hybrid & Sensor Fusion RTLS */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Hybrid & Sensor Fusion RTLS</h2>
          <p className="text-gray-600 mb-6">Combined technologies for enhanced accuracy and reliability</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/rtls-digital-twin/technologies/sensor-fusion"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Layers className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Sensor Fusion</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/slam"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Layers className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">SLAM</h3>
              </div>
            </Link>

            <Link
              href="/rtls-digital-twin/technologies/dead-reckoning"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center">
                <Layers className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Dead Reckoning + RTLS Anchors</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Twin Modules */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Digital Twin Modules</h2>
          <p className="text-gray-600 mb-6">
            Software components that transform location data into actionable intelligence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/rtls-digital-twin/modules/production-planning"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <LayoutGrid className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Production Planning</h3>
              </div>
              <p className="text-gray-700">
                Optimize production schedules and resource allocation with real-time location data.
              </p>
            </Link>

            <Link
              href="/rtls-digital-twin/modules/process-control"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <PlaySquare className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Process Control</h3>
              </div>
              <p className="text-gray-700">
                Monitor and control manufacturing processes with location-aware automation.
              </p>
            </Link>

            <Link
              href="/rtls-digital-twin/modules/rules-engine"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Gauge className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Rules Engine</h3>
              </div>
              <p className="text-gray-700">Create and manage location-based business rules and automated workflows.</p>
            </Link>

            <Link
              href="/rtls-digital-twin/modules/dashboard-reports"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Dashboard & Reports</h3>
              </div>
              <p className="text-gray-700">
                Visualize location data and generate insights with customizable analytics tools.
              </p>
            </Link>

            <Link
              href="/rtls-digital-twin/modules/fleet-manager"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Fleet Manager</h3>
              </div>
              <p className="text-gray-700">Track and manage vehicles, equipment, and mobile assets in real-time.</p>
            </Link>

            <Link
              href="/rtls-digital-twin/modules/simulation-modeling"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Boxes className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold">Simulation & Modeling</h3>
              </div>
              <p className="text-gray-700">
                Test scenarios and predict outcomes with advanced simulation capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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

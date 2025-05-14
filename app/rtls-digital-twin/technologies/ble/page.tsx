import Link from "next/link"
import { Bluetooth, ArrowLeft } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "BLE Technology - RTLS Alliance",
  description: "Comprehensive guide to Bluetooth Low Energy (BLE) technology for real-time location systems",
}

export default function BLETechnologyPage() {
  return (
    <main className="bg-white pb-16">
      <div className="container mx-auto px-4 py-12">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to RTLS + Digital Twin
        </Link>

        <div className="flex items-center mb-8">
          <Bluetooth className="h-10 w-10 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bluetooth Low Energy (BLE)
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Bluetooth Low Energy (BLE) is a wireless personal area network technology designed for novel applications in
            the healthcare, fitness, security, and home entertainment industries. Compared to Classic Bluetooth, BLE is
            intended to provide considerably reduced power consumption and cost while maintaining a similar
            communication range.
          </p>

          <div className="my-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
            <ul className="space-y-2">
              <li>
                <strong>Range:</strong> 10-100 meters (depending on environment and power settings)
              </li>
              <li>
                <strong>Frequency:</strong> 2.4 GHz ISM band
              </li>
              <li>
                <strong>Data Rate:</strong> 1 Mbps (theoretical)
              </li>
              <li>
                <strong>Power Consumption:</strong> Very low (months to years on a coin cell battery)
              </li>
              <li>
                <strong>Latency:</strong> 3-6 ms
              </li>
              <li>
                <strong>Topology:</strong> Star, mesh (with Bluetooth 5)
              </li>
            </ul>
          </div>

          <h2>How BLE Works for RTLS</h2>
          <p>BLE-based RTLS typically uses one of several positioning methods:</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">RSSI-based Positioning</h3>
              <p>
                Received Signal Strength Indicator (RSSI) measures the power present in a received radio signal. The
                distance between a transmitter and receiver can be estimated based on the signal strength.
              </p>
              <div className="mt-4">
                <Image
                  src="/images/rssi-signal-strength-diagram.png"
                  alt="RSSI-based positioning diagram"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Fingerprinting</h3>
              <p>
                Radio fingerprinting creates a map of signal strengths at various points in a space. A device's location
                is determined by matching its observed signal pattern to this map.
              </p>
              <div className="mt-4">
                <Image
                  src="/images/fingerprinting-heatmap.png"
                  alt="Fingerprinting heatmap"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <h2>Advantages of BLE for RTLS</h2>
          <ul>
            <li>Low power consumption enables long battery life for tags and beacons</li>
            <li>Widespread adoption in consumer devices (smartphones, tablets)</li>
            <li>Lower cost compared to other RTLS technologies</li>
            <li>Easy deployment with minimal infrastructure</li>
            <li>Bluetooth 5.1 introduced direction finding capabilities</li>
            <li>Bluetooth mesh networking enables scalable deployments</li>
          </ul>

          <h2>Limitations</h2>
          <ul>
            <li>Lower accuracy compared to UWB or some camera-based systems</li>
            <li>Susceptible to interference from other 2.4 GHz devices</li>
            <li>Signal can be affected by physical obstacles and environmental factors</li>
            <li>Limited data throughput compared to Wi-Fi</li>
          </ul>

          <h2>Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Asset Tracking</h3>
              <p>Track valuable equipment in hospitals, warehouses, and manufacturing facilities</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Indoor Navigation</h3>
              <p>Guide visitors through large facilities like malls, airports, and museums</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Proximity Marketing</h3>
              <p>Deliver location-based notifications and offers to customers</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Personnel Safety</h3>
              <p>Monitor worker locations in hazardous environments</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Patient Monitoring</h3>
              <p>Track patient movement and provide care based on location</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Inventory Management</h3>
              <p>Automate inventory counts and locate specific items</p>
            </div>
          </div>

          <h2>Implementation Considerations</h2>
          <p>When implementing a BLE-based RTLS solution, consider the following factors:</p>
          <ul>
            <li>
              <strong>Beacon Density:</strong> The number and placement of beacons affects accuracy and coverage
            </li>
            <li>
              <strong>Environmental Factors:</strong> Physical obstacles, interference sources, and building materials
            </li>
            <li>
              <strong>Power Management:</strong> Battery replacement strategy for beacons and tags
            </li>
            <li>
              <strong>Security:</strong> Encryption and authentication to prevent unauthorized access
            </li>
            <li>
              <strong>Integration:</strong> APIs and middleware for connecting with other systems
            </li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl my-8">
            <h2 className="mb-4">Ready to implement BLE technology in your RTLS solution?</h2>
            <p className="mb-4">
              The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
              BLE-based location systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/ecosystem/directory"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-2 rounded-lg transition-all duration-200"
              >
                Find BLE Providers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

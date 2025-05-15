"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Wifi,
  Building,
  Ruler,
  Compass,
  Zap,
  Clock,
  CheckCircle,
  Radio,
  Layers,
  Camera,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WiFiTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white pb-16">
      <div className="container mx-auto px-4 py-12">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to RTLS + Digital Twin
        </Link>

        <div className="flex items-center mb-8">
          <Wifi className="h-10 w-10 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Wi-Fi Technology for RTLS
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
              Wi-Fi-based Real-Time Location Systems (RTLS) leverage existing wireless network infrastructure to track
              and locate assets, people, and equipment within facilities. This technology utilizes the IEEE 802.11
              standards (commonly known as Wi-Fi) to provide positioning capabilities without requiring specialized
              hardware beyond standard Wi-Fi access points and client devices.
            </p>

            <p>
              Wi-Fi RTLS offers a cost-effective approach to indoor positioning by utilizing infrastructure that is
              already present in most commercial and industrial environments. While not as precise as technologies like
              UWB, Wi-Fi positioning provides sufficient accuracy for many applications while minimizing additional
              hardware investments.
            </p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Frequency Bands:</strong> 2.4 GHz and 5 GHz (6 GHz with Wi-Fi 6E)
                </li>
                <li>
                  <strong>Standards:</strong> IEEE 802.11a/b/g/n/ac/ax (Wi-Fi 4/5/6/6E)
                </li>
                <li>
                  <strong>Positioning Accuracy:</strong> 3-15 meters (typical), 1-3 meters (with advanced techniques)
                </li>
                <li>
                  <strong>Range:</strong> 30-100 meters (indoor)
                </li>
                <li>
                  <strong>Data Rate:</strong> 11 Mbps to 9.6 Gbps (depending on standard)
                </li>
                <li>
                  <strong>Power Consumption:</strong> Moderate to high (compared to BLE)
                </li>
                <li>
                  <strong>Update Rate:</strong> 1-5 Hz (typical)
                </li>
                <li>
                  <strong>Infrastructure Reuse:</strong> High (leverages existing Wi-Fi networks)
                </li>
              </ul>
            </div>

            <h2>How Wi-Fi Works for RTLS</h2>
            <p>
              Wi-Fi-based positioning systems use several methods to determine the location of devices within a wireless
              network coverage area. These methods vary in complexity, accuracy, and infrastructure requirements.
            </p>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Wi-Fi Positioning Methods</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">RSSI Trilateration</h4>
                  <p>
                    Uses the Received Signal Strength Indicator (RSSI) from multiple access points to estimate distance
                    based on signal attenuation. By measuring signal strength from at least three access points, the
                    system can determine position through trilateration. This is the most common method but is
                    susceptible to environmental factors affecting signal propagation.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Fingerprinting</h4>
                  <p>
                    Creates a radio map of signal strengths at various points in a space during a calibration phase. A
                    device's location is determined by matching its observed signal pattern to this map. This method can
                    achieve higher accuracy than simple RSSI-based positioning but requires initial and ongoing
                    calibration.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Time of Flight (ToF)</h4>
                  <p>
                    Measures the time it takes for a signal to travel between devices. Wi-Fi Round-Trip Time (RTT),
                    based on the IEEE 802.11mc protocol (Wi-Fi Fine Timing Measurement), enables more precise distance
                    measurements. This approach can achieve 1-2 meter accuracy but requires compatible hardware on both
                    ends.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Angle of Arrival (AoA)</h4>
                  <p>
                    Uses antenna arrays in access points to determine the direction from which a signal arrives. By
                    measuring the phase differences between signals received at different antennas, the system can
                    calculate the angle of the incoming signal. This method requires specialized access points with
                    multiple antennas but can improve accuracy significantly.
                  </p>
                </div>
              </div>
            </div>

            <h2>Wi-Fi RTLS Architecture</h2>
            <p>A typical Wi-Fi-based RTLS system consists of the following components:</p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">System Components</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Wi-Fi Access Points:</strong> Standard or specialized wireless access points distributed
                  throughout the coverage area. These serve as reference points for positioning calculations. For
                  optimal performance, access points should be strategically placed to provide good coverage and
                  geometric diversity.
                </li>
                <li>
                  <strong>Wi-Fi Tags/Clients:</strong> Devices that need to be tracked, either purpose-built Wi-Fi tags
                  (for assets) or standard Wi-Fi-enabled devices like smartphones, tablets, or laptops (for people).
                  These devices communicate with access points, enabling their position to be determined.
                </li>
                <li>
                  <strong>Location Engine:</strong> Software that processes signal measurements to calculate positions.
                  It applies algorithms for trilateration, fingerprinting, or other positioning methods, often
                  incorporating filtering techniques to improve accuracy and stability.
                </li>
                <li>
                  <strong>Network Infrastructure:</strong> The underlying network components that connect access points
                  to the location engine and management platform. This includes switches, routers, and network
                  management systems that handle the data flow and ensure reliable communication.
                </li>
                <li>
                  <strong>Management Platform:</strong> The user interface and business logic layer that transforms
                  location data into actionable information. It typically includes maps, dashboards, alerts, and
                  integration capabilities with other business systems like ERP, CMMS, or security platforms.
                </li>
                <li>
                  <strong>APIs and Integration Tools:</strong> Interfaces that allow the RTLS data to be used by other
                  systems and applications. These enable the development of custom solutions and the integration of
                  location data into existing workflows.
                </li>
              </ul>
            </div>

            <h2>Wi-Fi Standards for Positioning</h2>
            <p>Several Wi-Fi standards and protocols have enhanced positioning capabilities:</p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b text-left">Standard/Protocol</th>
                    <th className="py-3 px-4 border-b text-left">Key Features for Positioning</th>
                    <th className="py-3 px-4 border-b text-left">Accuracy</th>
                    <th className="py-3 px-4 border-b text-left">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">IEEE 802.11mc (FTM/RTT)</td>
                    <td className="py-3 px-4 border-b">Fine Timing Measurement for precise distance calculation</td>
                    <td className="py-3 px-4 border-b">1-2 meters</td>
                    <td className="py-3 px-4 border-b">Compatible APs and client devices</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">IEEE 802.11az (Next Generation Positioning)</td>
                    <td className="py-3 px-4 border-b">Enhanced ranging, multi-AP coordination</td>
                    <td className="py-3 px-4 border-b">Sub-meter potential</td>
                    <td className="py-3 px-4 border-b">Wi-Fi 6/6E compatible hardware</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Wi-Fi 6 (802.11ax)</td>
                    <td className="py-3 px-4 border-b">OFDMA, higher bandwidth, better multipath handling</td>
                    <td className="py-3 px-4 border-b">2-5 meters</td>
                    <td className="py-3 px-4 border-b">Wi-Fi 6 infrastructure</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Wi-Fi Location (WFA certification)</td>
                    <td className="py-3 px-4 border-b">Standardized approach to Wi-Fi positioning</td>
                    <td className="py-3 px-4 border-b">3-5 meters</td>
                    <td className="py-3 px-4 border-b">Certified devices and infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Advantages of Wi-Fi for RTLS</h2>
            <ul>
              <li>
                <strong>Infrastructure Reuse:</strong> Leverages existing Wi-Fi networks, reducing deployment costs and
                complexity compared to dedicated RTLS technologies
              </li>
              <li>
                <strong>Ubiquitous Compatibility:</strong> Works with standard Wi-Fi-enabled devices like smartphones,
                tablets, and laptops without requiring specialized hardware for user tracking
              </li>
              <li>
                <strong>Coverage Area:</strong> Typically provides good coverage throughout facilities where Wi-Fi is
                already deployed for data communications
              </li>
              <li>
                <strong>Data Integration:</strong> Combines location tracking with data connectivity in a single system,
                enabling richer applications and use cases
              </li>
              <li>
                <strong>Scalability:</strong> Can scale from small deployments to campus-wide implementations using
                standard network expansion techniques
              </li>
              <li>
                <strong>Mature Ecosystem:</strong> Benefits from the extensive Wi-Fi ecosystem with numerous vendors,
                products, and integration options
              </li>
              <li>
                <strong>Continuous Improvement:</strong> Ongoing standards development and hardware advancements
                consistently improve positioning capabilities
              </li>
            </ul>

            <h2>Limitations</h2>
            <ul>
              <li>
                <strong>Moderate Accuracy:</strong> Less precise than UWB or other specialized positioning technologies,
                typically 3-15 meters depending on the environment and methods used
              </li>
              <li>
                <strong>Environmental Sensitivity:</strong> Performance affected by physical obstacles, multipath
                propagation, and interference from other devices operating in the same frequency bands
              </li>
              <li>
                <strong>Power Consumption:</strong> Higher power requirements than technologies like BLE, limiting
                battery life for mobile tags and tracked devices
              </li>
              <li>
                <strong>Update Rate:</strong> Typically lower position update frequency compared to specialized RTLS
                technologies, which may be insufficient for tracking fast-moving objects
              </li>
              <li>
                <strong>Calibration Requirements:</strong> Fingerprinting methods require initial and periodic
                recalibration to maintain accuracy, especially in changing environments
              </li>
              <li>
                <strong>Network Load:</strong> Location tracking can add significant traffic to the Wi-Fi network,
                potentially affecting performance for other applications
              </li>
              <li>
                <strong>Security Considerations:</strong> Location tracking raises privacy concerns, especially when
                tracking personal devices, requiring careful implementation of security and privacy controls
              </li>
            </ul>

            <h2>Common Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Visitor Analytics</h3>
                <p>Track visitor flow and dwell times in retail, hospitality, and public venues</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Asset Tracking</h3>
                <p>Monitor the location of valuable equipment in hospitals, offices, and warehouses</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Wayfinding</h3>
                <p>Provide navigation assistance in large facilities like airports, malls, and campuses</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Space Utilization</h3>
                <p>Analyze occupancy patterns and optimize space usage in commercial buildings</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Staff Management</h3>
                <p>Improve staff allocation and response times in healthcare and hospitality</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Security & Safety</h3>
                <p>Enhance emergency response and evacuation procedures in public buildings</p>
              </div>
            </div>

            <h2>Implementation Considerations</h2>
            <p>When implementing a Wi-Fi-based RTLS solution, consider the following factors:</p>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Planning and Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Access Point Placement</h4>
                  <p>
                    The number and positioning of access points significantly affects positioning accuracy. For optimal
                    results, APs should be placed with location tracking in mind, not just for coverage. This often
                    means more APs than would be required for data connectivity alone, placed at different heights and
                    with good geometric distribution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environmental Assessment</h4>
                  <p>
                    Building materials, layout, and dynamic elements (like movable partitions or inventory) can all
                    affect signal propagation. Conduct site surveys to identify potential issues and adjust AP placement
                    accordingly. Consider seasonal changes that might affect performance, such as humidity variations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Network Capacity</h4>
                  <p>
                    Ensure the network has sufficient capacity to handle both location tracking and regular data
                    traffic. This includes bandwidth, processing power, and management capabilities. Consider dedicated
                    APs or VLANs for location services in high-demand environments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tag Selection</h4>
                  <p>
                    For asset tracking, select appropriate Wi-Fi tags based on size, battery life, update rate, and
                    additional sensor requirements. For personnel tracking, determine whether to use personal devices
                    (BYOD) or dedicated badges, considering privacy implications and user acceptance.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Technical Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Positioning Method</h4>
                  <p>
                    Select appropriate positioning methods based on accuracy requirements and available infrastructure.
                    Consider hybrid approaches that combine multiple methods for improved performance. For example,
                    fingerprinting can be combined with trilateration to achieve better results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Calibration Strategy</h4>
                  <p>
                    Develop a plan for initial calibration and ongoing maintenance, especially for fingerprinting-based
                    systems. Automated or semi-automated calibration tools can reduce the effort required. Consider how
                    environmental changes will be detected and addressed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Processing</h4>
                  <p>
                    Determine where and how location data will be processed. Options include cloud-based, on-premises,
                    or hybrid approaches. Consider latency requirements, privacy concerns, and integration needs when
                    making this decision.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Privacy and Security</h4>
                  <p>
                    Implement appropriate privacy controls, especially when tracking people. This includes data
                    anonymization, consent mechanisms, and clear policies. Ensure that location data is securely
                    transmitted and stored, with access controls and audit trails.
                  </p>
                </div>
              </div>
            </div>

            <h2>Wi-Fi vs. Other RTLS Technologies</h2>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b text-left">Feature</th>
                    <th className="py-3 px-4 border-b text-left">Wi-Fi</th>
                    <th className="py-3 px-4 border-b text-left">BLE</th>
                    <th className="py-3 px-4 border-b text-left">UWB</th>
                    <th className="py-3 px-4 border-b text-left">RFID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Accuracy</td>
                    <td className="py-3 px-4 border-b">3-15 m (1-3 m with RTT)</td>
                    <td className="py-3 px-4 border-b">1-3 m (RSSI), &lt;1 m (AoA)</td>
                    <td className="py-3 px-4 border-b">10-30 cm</td>
                    <td className="py-3 px-4 border-b">Proximity to reader</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Range</td>
                    <td className="py-3 px-4 border-b">30-100 m</td>
                    <td className="py-3 px-4 border-b">10-100 m</td>
                    <td className="py-3 px-4 border-b">10-50 m</td>
                    <td className="py-3 px-4 border-b">Passive: &lt;1 m, Active: up to 100 m</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Infrastructure Reuse</td>
                    <td className="py-3 px-4 border-b">High</td>
                    <td className="py-3 px-4 border-b">Low to Medium</td>
                    <td className="py-3 px-4 border-b">Low</td>
                    <td className="py-3 px-4 border-b">Low</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Battery Life (Tags)</td>
                    <td className="py-3 px-4 border-b">3 months - 1 year</td>
                    <td className="py-3 px-4 border-b">1-5 years</td>
                    <td className="py-3 px-4 border-b">6 months - 3 years</td>
                    <td className="py-3 px-4 border-b">Passive: N/A, Active: 3-5 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Cost per Tag</td>
                    <td className="py-3 px-4 border-b">$15-50</td>
                    <td className="py-3 px-4 border-b">$5-30</td>
                    <td className="py-3 px-4 border-b">$25-100</td>
                    <td className="py-3 px-4 border-b">Passive: $0.10-1, Active: $10-50</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Data Capabilities</td>
                    <td className="py-3 px-4 border-b">High</td>
                    <td className="py-3 px-4 border-b">Low to Medium</td>
                    <td className="py-3 px-4 border-b">Medium</td>
                    <td className="py-3 px-4 border-b">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Healthcare Facility</h3>
                <p className="mb-4">
                  A 350-bed hospital implemented Wi-Fi RTLS to track medical equipment, improve staff workflow, and
                  enhance patient experience. The system leveraged their existing Wi-Fi infrastructure with minimal
                  additional hardware.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Reduced time spent searching for equipment by 65%</li>
                  <li>Improved equipment utilization rates by 22%</li>
                  <li>Decreased rental costs for specialized equipment by 40%</li>
                  <li>Enhanced staff workflow efficiency, saving an estimated 45 minutes per nurse per shift</li>
                  <li>ROI achieved in 11 months</li>
                </ul>
                <Link href="/resources/healthcare-wifi-rtls-case-study" className="text-blue-600 hover:underline">
                  Read full case study →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Corporate Campus</h3>
                <p className="mb-4">
                  A technology company with a 12-building campus deployed Wi-Fi positioning to optimize space
                  utilization, improve employee experience, and enhance security. The system integrated with their
                  mobile app to provide wayfinding and location-based services.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Identified 30% underutilized space, leading to consolidation and cost savings</li>
                  <li>Reduced time to find meeting rooms and colleagues by 70%</li>
                  <li>Improved emergency response with real-time occupancy information</li>
                  <li>Enhanced security with location-based access control</li>
                  <li>Increased mobile app engagement by 250%</li>
                </ul>
                <Link href="/resources/corporate-campus-wifi-rtls-case-study" className="text-blue-600 hover:underline">
                  Read full case study →
                </Link>
              </div>
            </div>

            <h2>Future Trends</h2>
            <p>The Wi-Fi RTLS market continues to evolve with several emerging trends:</p>
            <ul>
              <li>
                <strong>Wi-Fi 6/6E/7 Adoption:</strong> Next-generation Wi-Fi standards offering improved positioning
                capabilities through higher bandwidth, better multipath handling, and new features
              </li>
              <li>
                <strong>Enhanced RTT Implementation:</strong> Wider adoption of 802.11mc/az standards for more precise
                distance measurements, approaching UWB-level accuracy
              </li>
              <li>
                <strong>AI and Machine Learning:</strong> Advanced algorithms improving positioning accuracy by learning
                from historical data and adapting to environmental changes
              </li>
              <li>
                <strong>Sensor Fusion:</strong> Integration with other positioning technologies and sensors (IMU, BLE,
                UWB) for enhanced accuracy and reliability
              </li>
              <li>
                <strong>Edge Computing:</strong> Moving location processing to the network edge for reduced latency and
                improved privacy
              </li>
              <li>
                <strong>Location Intelligence:</strong> Advanced analytics turning location data into actionable
                business intelligence through pattern recognition and predictive modeling
              </li>
              <li>
                <strong>Privacy-Preserving Techniques:</strong> New approaches to location tracking that maintain
                utility while enhancing privacy protection
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl my-8">
              <h2 className="mb-4">Ready to implement Wi-Fi technology in your RTLS solution?</h2>
              <p className="mb-4">
                The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
                Wi-Fi-based location systems that leverage your existing infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
                <Link href="/ecosystem/directory">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Find Wi-Fi RTLS Providers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6 sticky top-6">
              <h3 className="text-lg font-bold mb-4">Wi-Fi Technology Overview</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Infrastructure</h4>
                    <p className="text-sm text-gray-600">Access points (existing network)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Accuracy Range</h4>
                    <p className="text-sm text-gray-600">3-15 meters typical</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Environment</h4>
                    <p className="text-sm text-gray-600">Indoor commercial, office, campus</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Power Requirements</h4>
                    <p className="text-sm text-gray-600">Medium to high (active devices)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Setup Time</h4>
                    <p className="text-sm text-gray-600">Low (if using existing infrastructure)</p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold mb-3">Ideal Applications</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Room-level asset tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">People counting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Visitor analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Campus navigation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">Low-cost deployments</span>
                </li>
              </ul>

              <Link href="/contact">
                <Button className="w-full">Contact RTLS Expert</Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Related Technologies</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/ble"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Radio className="h-4 w-4 mr-2" />
                    <span>Bluetooth Low Energy (BLE)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/uwb"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Radio className="h-4 w-4 mr-2" />
                    <span>Ultra-Wideband (UWB)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/sensor-fusion"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Layers className="h-4 w-4 mr-2" />
                    <span>Sensor Fusion</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/lora"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Radio className="h-4 w-4 mr-2" />
                    <span>LoRa</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/infrared"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    <span>Infrared</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/resources/wifi-rtls-implementation-guide"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Wi-Fi RTLS Implementation Guide</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/access-point-optimization"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Access Point Optimization</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/wifi-vs-ble-comparison"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Wi-Fi vs BLE Comparison</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/wifi-rtls-case-studies"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <span>Wi-Fi RTLS Case Studies</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

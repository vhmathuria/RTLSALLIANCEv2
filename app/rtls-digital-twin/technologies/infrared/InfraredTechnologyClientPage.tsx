"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InfraredTechnologyClientPage() {
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
          <Lightbulb className="h-10 w-10 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Infrared Technology for RTLS
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Infrared (IR) technology for Real-Time Location Systems (RTLS) utilizes invisible infrared light to
            determine the location of people and assets within indoor environments. Operating in the electromagnetic
            spectrum between visible light and radio waves (wavelengths from 780 nm to 1 mm), infrared systems provide
            reliable room-level or sub-room positioning with high accuracy in controlled environments.
          </p>

          <p>
            IR-based RTLS solutions are particularly valued for their precision in confined spaces, immunity to radio
            frequency interference, and inherent security due to the line-of-sight nature of infrared light. While not
            as widely deployed as RF-based technologies, infrared systems continue to serve important roles in
            healthcare, secure facilities, and other applications where reliable room-level presence detection is
            critical.
          </p>

          <div className="my-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
            <ul className="space-y-2">
              <li>
                <strong>Wavelength:</strong> Near-infrared (780 nm - 3 μm) typically used for RTLS applications
              </li>
              <li>
                <strong>Range:</strong> 3-10 meters (typical effective range)
              </li>
              <li>
                <strong>Positioning Accuracy:</strong> Room-level or sub-room (0.3-3 meters)
              </li>
              <li>
                <strong>Line of Sight:</strong> Required (cannot penetrate walls or solid objects)
              </li>
              <li>
                <strong>Interference Sources:</strong> Direct sunlight, incandescent lighting, heat sources
              </li>
              <li>
                <strong>Power Consumption:</strong> Low to moderate (depends on implementation)
              </li>
              <li>
                <strong>Data Rate:</strong> 9.6 kbps to 4 Mbps (depending on modulation technique)
              </li>
              <li>
                <strong>Security:</strong> Inherently secure due to containment within rooms
              </li>
            </ul>
          </div>

          <h2>How Infrared Works for RTLS</h2>
          <p>
            Infrared RTLS systems use various methods to determine the location of tags or badges within a facility.
            These approaches differ in their implementation, accuracy, and infrastructure requirements.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Infrared Positioning Methods</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Active IR Beaconing</h4>
                <p>
                  In this approach, battery-powered IR tags or badges worn by personnel or attached to assets emit
                  unique infrared identification signals. Fixed IR receivers installed in rooms or areas detect these
                  signals and report the presence of specific tags to a central system. This method provides reliable
                  room-level accuracy and is commonly used in healthcare settings.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Passive IR Detection</h4>
                <p>
                  Fixed IR transmitters broadcast location codes within defined areas. Wearable badges or tags receive
                  these signals and report their location via a secondary communication channel (typically RF). This
                  approach reduces power consumption in the wearable device and can provide longer battery life.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">IR Triangulation</h4>
                <p>
                  Multiple IR receivers detect signals from a tag and measure signal characteristics to determine
                  position more precisely than simple presence detection. This method can achieve sub-meter accuracy in
                  well-designed environments but requires more infrastructure and careful calibration.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Hybrid IR/RF Systems</h4>
                <p>
                  Combines infrared for precise room-level location with RF technologies (like Wi-Fi or BLE) for areas
                  where IR coverage is impractical. This approach leverages the strengths of both technologies: IR for
                  definitive room-level positioning and RF for broader coverage and communication.
                </p>
              </div>
            </div>
          </div>

          <h2>Infrared RTLS Architecture</h2>
          <p>A typical infrared-based RTLS system consists of the following components:</p>

          <div className="my-8 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">System Components</h3>
            <ul className="space-y-4">
              <li>
                <strong>IR Tags/Badges:</strong> Wearable devices carried by personnel or attached to assets. These
                contain IR emitters (in active systems) or receivers (in passive systems), along with a unique
                identifier and potentially additional sensors. Many implementations include a secondary RF communication
                channel for data transmission beyond the IR range.
              </li>
              <li>
                <strong>IR Receivers/Sensors:</strong> Fixed devices installed in ceilings or walls that detect IR
                signals from tags. These are typically placed in each room or zone where tracking is required, with
                coverage patterns designed to ensure reliable detection throughout the space.
              </li>
              <li>
                <strong>IR Transmitters/Beacons:</strong> In passive systems, these fixed devices emit location-specific
                IR codes that are detected by tags. They are strategically placed to define specific zones or rooms
                within a facility.
              </li>
              <li>
                <strong>Room Controllers/Collectors:</strong> Intermediate devices that aggregate data from multiple IR
                sensors in a room or zone and communicate with the central system. These often provide power and network
                connectivity to the IR sensors.
              </li>
              <li>
                <strong>Network Infrastructure:</strong> Wired or wireless connectivity that links the IR sensors and
                room controllers to the central server. This typically uses standard networking technologies like
                Ethernet, Wi-Fi, or proprietary protocols.
              </li>
              <li>
                <strong>Location Engine:</strong> Software that processes IR detection events to determine and track the
                location of tags. In simple systems, this may just record room-level presence; in more advanced systems,
                it may calculate more precise positions within rooms.
              </li>
              <li>
                <strong>Management Platform:</strong> The user interface and business logic layer that turns location
                data into actionable information. This includes visualization, reporting, alerting, and integration with
                other business systems.
              </li>
            </ul>
          </div>

          <h2>Advantages of Infrared for RTLS</h2>
          <ul>
            <li>
              <strong>Definitive Room-Level Accuracy:</strong> IR signals do not pass through walls, providing
              unambiguous room-level location that is difficult to achieve with RF technologies
            </li>
            <li>
              <strong>Immunity to RF Interference:</strong> Not affected by radio frequency interference or
              electromagnetic noise that can disrupt RF-based systems
            </li>
            <li>
              <strong>Enhanced Privacy and Security:</strong> Containment within physical spaces provides natural
              security boundaries and reduces the risk of unauthorized tracking
            </li>
            <li>
              <strong>No Radio Frequency Regulatory Issues:</strong> IR systems do not use radio spectrum and are not
              subject to RF licensing or regulatory constraints
            </li>
            <li>
              <strong>Reliable in RF-Dense Environments:</strong> Performs well in environments with high RF noise or
              restrictions, such as certain healthcare or industrial settings
            </li>
            <li>
              <strong>Simple Deployment Logic:</strong> Room-based architecture aligns well with how buildings are
              organized, simplifying system design and implementation
            </li>
            <li>
              <strong>Low Risk of Cross-Talk:</strong> Less susceptible to interference from adjacent systems compared
              to RF technologies
            </li>
            <li>
              <strong>Compatible with Sensitive Equipment:</strong> Safe to use around medical devices and in areas
              where RF emissions are restricted
            </li>
          </ul>

          <h2>Limitations</h2>
          <ul>
            <li>
              <strong>Line of Sight Requirement:</strong> IR signals are blocked by obstacles, requiring clear line of
              sight between tags and sensors
            </li>
            <li>
              <strong>Limited Range:</strong> Effective range typically limited to 3-10 meters, requiring more sensors
              for complete coverage
            </li>
            <li>
              <strong>Susceptibility to Optical Interference:</strong> Performance can be degraded by direct sunlight,
              certain types of artificial lighting, and other IR sources
            </li>
            <li>
              <strong>Infrastructure Density:</strong> Requires installation of IR sensors in every room or zone,
              potentially increasing deployment costs
            </li>
            <li>
              <strong>Limited Outdoor Applicability:</strong> Generally not suitable for outdoor use due to sunlight
              interference and range limitations
            </li>
            <li>
              <strong>Positioning Granularity:</strong> Most implementations provide room-level rather than precise
              coordinate-based positioning
            </li>
            <li>
              <strong>Badge Orientation Sensitivity:</strong> Some systems require the IR emitter/receiver to be
              properly oriented for reliable detection
            </li>
          </ul>

          <h2>Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Healthcare Staff Tracking</h3>
              <p>Monitor caregiver presence in patient rooms for workflow analysis and contact tracing</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Patient Monitoring</h3>
              <p>Track patient location and movement within healthcare facilities</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Secure Facilities</h3>
              <p>Monitor personnel movement in classified areas or high-security environments</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Mustering and Emergency Management</h3>
              <p>Account for personnel during evacuations or emergency situations</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Time and Attendance</h3>
              <p>Automate presence recording for staff in specific work areas</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Workflow Optimization</h3>
              <p>Analyze room utilization and staff movement patterns to improve efficiency</p>
            </div>
          </div>

          <h2>Implementation Considerations</h2>
          <p>When implementing an infrared-based RTLS solution, consider the following factors:</p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Planning and Design</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Sensor Placement</h4>
                <p>
                  Careful placement of IR sensors is critical for reliable coverage. Consider room geometry, ceiling
                  height, potential obstructions, and typical movement patterns. In larger rooms, multiple sensors may
                  be required to ensure complete coverage.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Environmental Assessment</h4>
                <p>
                  Evaluate potential sources of IR interference, including direct sunlight through windows, certain
                  types of lighting fixtures, and heat sources. Window treatments, sensor positioning, or additional
                  sensors may be needed to mitigate these issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Badge/Tag Design</h4>
                <p>
                  Consider how tags will be worn or attached to ensure reliable IR transmission/reception. For personnel
                  tracking, badge design should encourage proper wearing practices (e.g., visible on the outside of
                  clothing, correct orientation).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hybrid Technology Approach</h4>
                <p>
                  Determine whether IR alone meets all requirements or if a hybrid approach combining IR with RF
                  technologies would be beneficial. Hybrid systems can provide both definitive room-level positioning
                  and broader coverage or more precise coordinate-based positioning where needed.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Technical Considerations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Power and Connectivity</h4>
                <p>
                  Plan for power and network connectivity to IR sensors and room controllers. Options include
                  Power-over-Ethernet (PoE), local power supplies, or battery operation for sensors. Consider backup
                  power requirements for critical applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Badge Battery Management</h4>
                <p>
                  Develop a strategy for monitoring and replacing batteries in active IR tags. Consider battery life
                  expectations, replacement procedures, and potential for rechargeable solutions in high-usage
                  environments.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">System Integration</h4>
                <p>
                  Plan how the IR RTLS will integrate with other systems such as access control, nurse call, electronic
                  health records, or building management systems. Define data exchange formats, integration points, and
                  communication protocols.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Privacy and Compliance</h4>
                <p>
                  Address privacy concerns and regulatory requirements, particularly for personnel tracking
                  applications. Develop clear policies on data collection, storage, usage, and retention. Ensure
                  compliance with relevant regulations such as GDPR or HIPAA where applicable.
                </p>
              </div>
            </div>
          </div>

          <h2>Infrared vs. Other RTLS Technologies</h2>
          <div className="overflow-x-auto my-8">
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

          <h2>Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
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
              <Link href="/resources/hospital-ir-rtls-case-study" className="text-blue-600 hover:underline">
                Read full case study →
              </Link>
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
              <Link href="/resources/secure-facility-ir-rtls-case-study" className="text-blue-600 hover:underline">
                Read full case study →
              </Link>
            </div>
          </div>

          <h2>Future Trends</h2>
          <p>The infrared RTLS market continues to evolve with several emerging trends:</p>
          <ul>
            <li>
              <strong>Miniaturization:</strong> Smaller, more energy-efficient IR components enabling less obtrusive
              tags and sensors
            </li>
            <li>
              <strong>Advanced Optics:</strong> Improved IR lenses and detectors expanding coverage areas and reducing
              infrastructure requirements
            </li>
            <li>
              <strong>Multi-Technology Integration:</strong> Tighter integration of IR with RF, ultrasound, and other
              technologies for comprehensive positioning solutions
            </li>
            <li>
              <strong>Enhanced Analytics:</strong> Advanced software using IR location data to derive deeper insights
              into workflow, space utilization, and behavior patterns
            </li>
            <li>
              <strong>IoT Convergence:</strong> Integration with broader Internet of Things ecosystems for more
              comprehensive facility management
            </li>
            <li>
              <strong>Improved Power Management:</strong> Extended battery life through more efficient IR components and
              intelligent power management
            </li>
            <li>
              <strong>Embedded IR Capabilities:</strong> IR sensors built into lighting fixtures, ceiling tiles, and
              other building elements for less intrusive deployment
            </li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl my-8">
            <h2 className="mb-4">Ready to implement Infrared technology in your RTLS solution?</h2>
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
        </div>
      </div>
    </main>
  )
}

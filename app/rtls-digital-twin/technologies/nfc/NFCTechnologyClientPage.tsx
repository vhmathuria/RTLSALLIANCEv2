"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Nfc, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NFCTechnologyClientPage() {
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
          <Nfc className="h-10 w-10 text-green-600 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Near Field Communication (NFC)
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Near Field Communication (NFC) is a short-range wireless connectivity technology that enables simple and
            secure communication between electronic devices. Operating at 13.56 MHz and transferring data at up to 424
            Kbps, NFC provides a low-speed connection with simple setup that can be used to bootstrap more capable
            wireless connections.
          </p>

          <p>
            Unlike other wireless technologies used in RTLS, NFC is designed for extremely close-range interactions,
            typically requiring devices to be within 4 centimeters (1.6 inches) of each other. This proximity
            requirement makes NFC inherently secure and ideal for applications where deliberate interaction is desired,
            such as access control, contactless payments, and identity verification.
          </p>

          <div className="my-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
            <ul className="space-y-2">
              <li>
                <strong>Range:</strong> 0-4 centimeters (0-1.6 inches)
              </li>
              <li>
                <strong>Frequency:</strong> 13.56 MHz (HF band)
              </li>
              <li>
                <strong>Data Rate:</strong> 106, 212, or 424 Kbps
              </li>
              <li>
                <strong>Power Consumption:</strong> Very low to none (passive tags)
              </li>
              <li>
                <strong>Latency:</strong> &lt;0.1 second
              </li>
              <li>
                <strong>Positioning Accuracy:</strong> Proximity-based (presence detection)
              </li>
              <li>
                <strong>Security:</strong> Inherently secure due to short range, with additional encryption options
              </li>
              <li>
                <strong>Standards:</strong> ISO/IEC 14443, ISO/IEC 15693, ISO/IEC 18092
              </li>
            </ul>
          </div>

          <h2>How NFC Works</h2>
          <p>
            NFC technology is based on inductive coupling, where loosely coupled inductive circuits share power and data
            over a short distance. NFC operates in three distinct modes:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Reader/Writer Mode</h3>
              <p>
                An active NFC device reads or writes data to a passive NFC tag. This is commonly used in inventory
                tracking, product information, and smart posters.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Peer-to-Peer Mode</h3>
              <p>
                Two active NFC devices exchange data. This mode enables device pairing, contact sharing, and small file
                transfers between smartphones or other NFC-enabled devices.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Card Emulation Mode</h3>
              <p>
                An NFC device acts as a contactless smart card. This enables mobile payments, transit ticketing, and
                access control applications without requiring a physical card.
              </p>
            </div>
          </div>

          <h2>NFC Tag Types</h2>
          <p>The NFC Forum has defined four types of tags that all NFC-enabled devices must support:</p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b text-left">Tag Type</th>
                  <th className="py-3 px-4 border-b text-left">Memory</th>
                  <th className="py-3 px-4 border-b text-left">Speed</th>
                  <th className="py-3 px-4 border-b text-left">Features</th>
                  <th className="py-3 px-4 border-b text-left">Common Uses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Type 1</td>
                  <td className="py-3 px-4 border-b">96 bytes - 2 KB</td>
                  <td className="py-3 px-4 border-b">106 Kbps</td>
                  <td className="py-3 px-4 border-b">Simple, low-cost, read/write capable</td>
                  <td className="py-3 px-4 border-b">Basic applications, smart posters</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Type 2</td>
                  <td className="py-3 px-4 border-b">48 bytes - 2 KB</td>
                  <td className="py-3 px-4 border-b">106 Kbps</td>
                  <td className="py-3 px-4 border-b">Anti-collision support</td>
                  <td className="py-3 px-4 border-b">Business cards, URL storage</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Type 3</td>
                  <td className="py-3 px-4 border-b">Up to 1 MB</td>
                  <td className="py-3 px-4 border-b">212 Kbps</td>
                  <td className="py-3 px-4 border-b">Higher capacity, pre-configured</td>
                  <td className="py-3 px-4 border-b">Complex applications, access control</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Type 4</td>
                  <td className="py-3 px-4 border-b">Up to 32 KB</td>
                  <td className="py-3 px-4 border-b">424 Kbps</td>
                  <td className="py-3 px-4 border-b">High speed, flexible command set</td>
                  <td className="py-3 px-4 border-b">Transit passes, payment cards</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Type 5 (ISO 15693)</td>
                  <td className="py-3 px-4 border-b">Up to 32 KB</td>
                  <td className="py-3 px-4 border-b">26.48 Kbps</td>
                  <td className="py-3 px-4 border-b">Extended range (up to 20cm)</td>
                  <td className="py-3 px-4 border-b">Inventory management, logistics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>NFC in RTLS Applications</h2>
          <p>
            While NFC is not typically used for continuous real-time tracking due to its limited range, it plays
            important complementary roles in RTLS ecosystems:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Checkpoint Tracking</h3>
              <p>
                NFC readers placed at strategic locations can register when an NFC-tagged asset or person passes by,
                creating a trail of timestamped checkpoints. This is useful for workflow monitoring, process
                verification, and custody tracking.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hybrid RTLS Systems</h3>
              <p>
                NFC can be combined with longer-range technologies like BLE or UWB to create comprehensive tracking
                solutions. For example, an asset might be tracked broadly via BLE throughout a facility, but precise
                handling events are recorded via NFC interactions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Authentication & Access Control</h3>
              <p>
                NFC provides secure identification for personnel accessing restricted areas or equipment. This can be
                integrated with RTLS systems to correlate access events with location data, enhancing security and
                compliance monitoring.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Configuration & Maintenance</h3>
              <p>
                Technicians can use NFC to interact with RTLS infrastructure components for setup, diagnostics, and
                maintenance. This simplifies field operations and reduces the need for specialized equipment.
              </p>
            </div>
          </div>

          <h2>Advantages of NFC</h2>
          <ul>
            <li>Extremely low power consumption; passive tags require no battery</li>
            <li>Inherently secure due to very short operating range</li>
            <li>Simple and intuitive user interaction (tap to engage)</li>
            <li>No pairing required, instant connection</li>
            <li>Widespread adoption in smartphones and payment systems</li>
            <li>Tags are inexpensive (as low as $0.10 each in volume)</li>
            <li>Mature standards and broad industry support</li>
            <li>Can work in challenging RF environments where other technologies struggle</li>
          </ul>

          <h2>Limitations</h2>
          <ul>
            <li>Extremely limited range (typically &lt;4cm)</li>
            <li>Not suitable for continuous real-time tracking</li>
            <li>Requires deliberate action to engage (not passive monitoring)</li>
            <li>Limited data transfer rate compared to other wireless technologies</li>
            <li>Metal surfaces can interfere with operation</li>
            <li>Cannot track multiple items simultaneously with high reliability</li>
          </ul>

          <h2>Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Access Control</h3>
              <p>Secure entry to buildings, rooms, and equipment</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Process Verification</h3>
              <p>Confirm completion of workflow steps in manufacturing</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Asset Authentication</h3>
              <p>Verify the authenticity of high-value items</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Maintenance Tracking</h3>
              <p>Record equipment service history and technician information</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Patient Identification</h3>
              <p>Verify patient identity before procedures or medication administration</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold">Supply Chain Checkpoints</h3>
              <p>Record custody transfers and handling events</p>
            </div>
          </div>

          <h2>Implementation Considerations</h2>
          <p>When implementing NFC as part of an RTLS solution, consider the following factors:</p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Planning and Design</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Reader Placement</h4>
                <p>
                  Position NFC readers at natural interaction points where users or assets will naturally pause.
                  Consider ergonomics and workflow to ensure convenient access.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tag Selection</h4>
                <p>
                  Choose appropriate tag types based on memory requirements, read/write needs, and environmental
                  conditions. Consider form factors that integrate well with the assets being tracked.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integration Strategy</h4>
                <p>
                  Determine how NFC data will integrate with other RTLS components and enterprise systems. Plan for
                  real-time data processing and event correlation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security Requirements</h4>
                <p>
                  Implement appropriate security measures based on the sensitivity of the application. Consider
                  encryption, authentication, and secure key management for critical applications.
                </p>
              </div>
            </div>
          </div>

          <h2>NFC vs. Other RTLS Technologies</h2>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b text-left">Feature</th>
                  <th className="py-3 px-4 border-b text-left">NFC</th>
                  <th className="py-3 px-4 border-b text-left">RFID (HF/UHF)</th>
                  <th className="py-3 px-4 border-b text-left">BLE</th>
                  <th className="py-3 px-4 border-b text-left">UWB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Range</td>
                  <td className="py-3 px-4 border-b">0-4cm</td>
                  <td className="py-3 px-4 border-b">
                    HF: 10cm-1m
                    <br />
                    UHF: 1-12m
                  </td>
                  <td className="py-3 px-4 border-b">10-100m</td>
                  <td className="py-3 px-4 border-b">10-50m</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Positioning Precision</td>
                  <td className="py-3 px-4 border-b">Proximity only</td>
                  <td className="py-3 px-4 border-b">Zone-based</td>
                  <td className="py-3 px-4 border-b">1-3m</td>
                  <td className="py-3 px-4 border-b">10-30cm</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Power Requirements</td>
                  <td className="py-3 px-4 border-b">None (passive)</td>
                  <td className="py-3 px-4 border-b">None (passive) to Low (active)</td>
                  <td className="py-3 px-4 border-b">Low</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Cost per Tag</td>
                  <td className="py-3 px-4 border-b">$0.10-1.00</td>
                  <td className="py-3 px-4 border-b">$0.15-25.00</td>
                  <td className="py-3 px-4 border-b">$5-30</td>
                  <td className="py-3 px-4 border-b">$25-100</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Data Capacity</td>
                  <td className="py-3 px-4 border-b">48B-32KB</td>
                  <td className="py-3 px-4 border-b">96B-8KB</td>
                  <td className="py-3 px-4 border-b">Unlimited (connected)</td>
                  <td className="py-3 px-4 border-b">Unlimited (connected)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">User Interaction</td>
                  <td className="py-3 px-4 border-b">Deliberate</td>
                  <td className="py-3 px-4 border-b">Passive</td>
                  <td className="py-3 px-4 border-b">Passive</td>
                  <td className="py-3 px-4 border-b">Passive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Healthcare Medication Administration</h3>
              <p className="mb-4">
                A 350-bed hospital implemented an NFC-based medication administration system integrated with their RTLS.
                Nurses use NFC to scan patient wristbands and medication packages, while BLE tracking monitors
                medication carts and equipment.
              </p>
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Reduced medication errors by 87%</li>
                <li>Improved documentation compliance to 99.8%</li>
                <li>Enhanced workflow efficiency by 23%</li>
                <li>Complete audit trail for regulatory compliance</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Manufacturing Process Verification</h3>
              <p className="mb-4">
                An automotive parts manufacturer deployed NFC checkpoints throughout their assembly process, integrated
                with a UWB RTLS system tracking parts and tools. Workers tap NFC readers to verify completion of
                critical steps.
              </p>
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Quality defects reduced by 64%</li>
                <li>Process compliance increased to 99.7%</li>
                <li>Training time for new employees reduced by 35%</li>
                <li>Complete digital thread for each manufactured component</li>
              </ul>
            </div>
          </div>

          <h2>Future Trends</h2>
          <p>The NFC ecosystem continues to evolve with several emerging trends relevant to RTLS applications:</p>
          <ul>
            <li>
              <strong>Enhanced Security:</strong> Advanced encryption and authentication protocols for high-security
              applications
            </li>
            <li>
              <strong>Sensor Integration:</strong> NFC tags with integrated sensors for temperature, moisture, and
              tamper detection
            </li>
            <li>
              <strong>Energy Harvesting:</strong> Tags that capture energy from the reader field to power additional
              functionality
            </li>
            <li>
              <strong>Miniaturization:</strong> Smaller form factors enabling integration into more types of assets
            </li>
            <li>
              <strong>Standardized APIs:</strong> Improved software interfaces for enterprise integration
            </li>
            <li>
              <strong>Biometric Combination:</strong> NFC combined with biometric verification for enhanced security
            </li>
          </ul>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl my-8">
            <h2 className="mb-4">Ready to implement NFC technology in your RTLS solution?</h2>
            <p className="mb-4">
              The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
              NFC-based identification and verification systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Contact Us</Button>
              </Link>
              <Link href="/ecosystem/directory">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Find NFC Providers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

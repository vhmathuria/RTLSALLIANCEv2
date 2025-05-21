"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getTechnologyRelatedArticles } from "@/lib/article-data"
import { FAQSection } from "@/components/ui/faq-section"
import { FAQSchema } from "@/components/seo/faq-schema"
import { technologyFAQs } from "@/lib/faq-data"

export default function NFCTechnologyClientPage() {
  // Get NFC-related articles for the related resources section
  const nfcRelatedArticles = getTechnologyRelatedArticles("nfc").slice(0, 5)

  // Get NFC FAQs
  const nfcFAQs = technologyFAQs.nfc || []

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Near Field Communication (NFC) Technology</h1>
          <p className="text-base text-muted-foreground">
            Near Field Communication (NFC) is a short-range wireless connectivity technology that enables simple and
            secure communication between electronic devices at extremely close range.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                NFC operates at 13.56 MHz and transfers data at up to 424 Kbps, providing a low-speed connection with
                simple setup. Unlike other wireless technologies used in RTLS, NFC is designed for extremely close-range
                interactions, typically requiring devices to be within 4 centimeters (1.6 inches) of each other.
              </p>
              <p>
                This proximity requirement makes NFC inherently secure and ideal for applications where deliberate
                interaction is desired, such as access control, contactless payments, and identity verification.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency:</span>
                  <span>13.56 MHz (HF band)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>0-4 centimeters (0-1.6 inches)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>106, 212, or 424 Kbps</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Typical Accuracy:</span>
                  <span>Proximity-based (presence detection)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Very low to none (passive tags)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Latency:</span>
                  <span>&lt;0.1 second</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How NFC Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How NFC Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Inductive Coupling</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  NFC technology is based on inductive coupling, where loosely coupled inductive circuits share power
                  and data over a short distance. When an NFC reader comes close to a passive NFC tag, it generates an
                  electromagnetic field that powers the tag and enables communication.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Operating Modes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  NFC operates in three distinct modes: Reader/Writer mode (an active device reads/writes to a passive
                  tag), Peer-to-Peer mode (two active devices exchange data), and Card Emulation mode (a device acts as
                  a contactless smart card for payments or access control).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages & Limitations - Now in separate boxes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Extremely low power consumption; passive tags require no battery</li>
                  <li>Inherently secure due to very short operating range</li>
                  <li>Simple and intuitive user interaction (tap to engage)</li>
                  <li>No pairing required, instant connection</li>
                  <li>Widespread adoption in smartphones and payment systems</li>
                  <li>Tags are inexpensive (as low as $0.10 each in volume)</li>
                  <li>Mature standards and broad industry support</li>
                  <li>Can work in challenging RF environments where other technologies struggle</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Extremely limited range (typically &lt;4cm)</li>
                  <li>Not suitable for continuous real-time tracking</li>
                  <li>Requires deliberate action to engage (not passive monitoring)</li>
                  <li>Limited data transfer rate compared to other wireless technologies</li>
                  <li>Metal surfaces can interfere with operation</li>
                  <li>Cannot track multiple items simultaneously with high reliability</li>
                  <li>Limited memory capacity in most tag types</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="commercial" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Commercial
              </TabsTrigger>
            </TabsList>
            <TabsContent value="healthcare" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Healthcare Applications</CardTitle>
                  <CardDescription>
                    NFC technology enables secure identification and verification in healthcare settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare environments, NFC tags are used for patient identification wristbands, medication
                    verification, and equipment authentication. This helps reduce medication errors and ensures proper
                    procedures are followed.
                  </p>
                  <p>
                    NFC is also used for staff access control to restricted areas and for secure access to electronic
                    medical records. The technology's inherent security makes it ideal for these sensitive applications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Patient identification wristbands</li>
                        <li>Medication verification</li>
                        <li>Equipment authentication</li>
                        <li>Staff access control</li>
                        <li>Medical record access</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced medication errors</li>
                        <li>Improved documentation compliance</li>
                        <li>Enhanced security for sensitive areas</li>
                        <li>Simplified authentication workflows</li>
                        <li>Complete audit trails for compliance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="retail" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Retail Applications</CardTitle>
                  <CardDescription>
                    NFC enables contactless payments and enhanced customer experiences in retail.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retailers use NFC for contactless payments, loyalty programs, and product authentication. Customers
                    can simply tap their smartphones or payment cards to complete transactions quickly and securely.
                  </p>
                  <p>
                    For inventory management, NFC tags help authenticate high-value merchandise and reduce counterfeit
                    products. Interactive marketing displays can use NFC to provide customers with detailed product
                    information and personalized offers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Contactless payments</li>
                        <li>Loyalty program integration</li>
                        <li>Product authentication</li>
                        <li>Smart shelves and displays</li>
                        <li>Interactive marketing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Faster checkout process</li>
                        <li>Enhanced customer engagement</li>
                        <li>Reduced counterfeit products</li>
                        <li>Improved inventory management</li>
                        <li>Personalized shopping experiences</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="manufacturing" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Manufacturing Applications</CardTitle>
                  <CardDescription>
                    NFC technology improves process verification and quality control in manufacturing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, NFC tags are used for process verification checkpoints, quality control
                    sign-offs, and equipment maintenance records. Workers can tap their badges or devices to confirm
                    completion of critical steps.
                  </p>
                  <p>
                    NFC is also used for tool authentication, ensuring that only proper equipment is used for specific
                    tasks. The technology integrates with manufacturing execution systems to provide complete digital
                    documentation of production processes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Process verification checkpoints</li>
                        <li>Quality control sign-offs</li>
                        <li>Equipment maintenance records</li>
                        <li>Tool authentication</li>
                        <li>Worker training verification</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved quality assurance</li>
                        <li>Enhanced process compliance</li>
                        <li>Better maintenance documentation</li>
                        <li>Reduced training time</li>
                        <li>Complete digital thread for components</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="logistics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Logistics Applications</CardTitle>
                  <CardDescription>
                    NFC improves supply chain verification and custody documentation in logistics.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics operations use NFC for supply chain checkpoints, custody transfers, and handling
                    verification. The technology provides secure documentation of critical handoffs and process steps
                    throughout the supply chain.
                  </p>
                  <p>
                    NFC tags can also be used for container sealing verification and delivery confirmation. The
                    simplicity of tapping to record transactions makes it easy to implement in field operations with
                    minimal training.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Supply chain checkpoints</li>
                        <li>Custody transfer documentation</li>
                        <li>Handling verification</li>
                        <li>Delivery confirmation</li>
                        <li>Container sealing verification</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enhanced chain of custody</li>
                        <li>Improved compliance documentation</li>
                        <li>Reduced paperwork</li>
                        <li>Better process visibility</li>
                        <li>Simplified verification procedures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="commercial" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Commercial Building Applications</CardTitle>
                  <CardDescription>
                    NFC enables secure access control and visitor management in buildings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement NFC for access control, visitor management, and equipment
                    authorization. Employees and authorized visitors can use NFC-enabled badges or smartphones to gain
                    access to appropriate areas.
                  </p>
                  <p>
                    NFC readers at entry points and throughout the facility provide secure, convenient authentication
                    for personnel and assets. The technology integrates with building management systems for
                    comprehensive security and operational control.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Access control systems</li>
                        <li>Visitor management</li>
                        <li>Meeting room booking</li>
                        <li>Equipment authorization</li>
                        <li>Time and attendance tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enhanced building security</li>
                        <li>Streamlined visitor processing</li>
                        <li>Improved space utilization</li>
                        <li>Better equipment control</li>
                        <li>Accurate attendance records</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Mini Case Studies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Healthcare Medication Administration</CardTitle>
                <CardDescription>Memorial Hospital</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A 350-bed hospital implemented an NFC-based medication administration system integrated with their
                  RTLS. Nurses use NFC to scan patient wristbands and medication packages, while BLE tracking monitors
                  medication carts and equipment.
                </p>
                <p>
                  The system reduced medication errors by 87% and improved documentation compliance to 99.8%. Staff
                  workflow efficiency increased by 23%, and the hospital now has a complete audit trail for regulatory
                  compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Manufacturing Process Verification</CardTitle>
                <CardDescription>Automotive Parts Manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An automotive parts manufacturer deployed NFC checkpoints throughout their assembly process,
                  integrated with a UWB RTLS system tracking parts and tools. Workers tap NFC readers to verify
                  completion of critical steps.
                </p>
                <p>
                  Quality defects were reduced by 64% and process compliance increased to 99.7%. Training time for new
                  employees was reduced by 35%, and the manufacturer now has a complete digital thread for each
                  manufactured component.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations - Now in separate boxes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Infrastructure Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>NFC tags for tracked assets or checkpoints</li>
                  <li>NFC readers at interaction points</li>
                  <li>Network infrastructure for reader connectivity</li>
                  <li>Server for data processing and storage</li>
                  <li>Software platform for transaction management</li>
                  <li>Integration middleware for existing systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Deployment Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Position readers at natural interaction points</li>
                  <li>Select appropriate tag types for specific use cases</li>
                  <li>Consider environmental factors affecting tag performance</li>
                  <li>Implement proper security measures for sensitive applications</li>
                  <li>Develop clear user instructions for tag interactions</li>
                  <li>Plan for integration with other RTLS components</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Limited range requiring deliberate user action</li>
                  <li>Metal surfaces interfering with tag performance</li>
                  <li>User training and compliance with tap procedures</li>
                  <li>Integration with continuous tracking systems</li>
                  <li>Managing large numbers of fixed reader installations</li>
                  <li>Ensuring consistent tag placement on assets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left font-semibold">Feature</th>
                  <th className="border px-4 py-2 text-left font-semibold">NFC</th>
                  <th className="border px-4 py-2 text-left font-semibold">RFID (HF/UHF)</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Range</td>
                  <td className="border px-4 py-2">0-4 cm</td>
                  <td className="border px-4 py-2">
                    HF: 10cm-1m
                    <br />
                    UHF: 1-12m
                  </td>
                  <td className="border px-4 py-2">10-30 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Positioning Precision</td>
                  <td className="border px-4 py-2">Proximity only</td>
                  <td className="border px-4 py-2">Zone-based</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Requirements</td>
                  <td className="border px-4 py-2">None (passive)</td>
                  <td className="border px-4 py-2">None to Low</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$0.10-1.00</td>
                  <td className="border px-4 py-2">$0.15-25.00</td>
                  <td className="border px-4 py-2">$5-30</td>
                  <td className="border px-4 py-2">$15-50</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Data Capacity</td>
                  <td className="border px-4 py-2">48B-32KB</td>
                  <td className="border px-4 py-2">96B-8KB</td>
                  <td className="border px-4 py-2">Unlimited (connected)</td>
                  <td className="border px-4 py-2">Unlimited (connected)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">User Interaction</td>
                  <td className="border px-4 py-2">Deliberate</td>
                  <td className="border px-4 py-2">Passive</td>
                  <td className="border px-4 py-2">Passive</td>
                  <td className="border px-4 py-2">Passive</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Smartphone Compatible</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <Link href="/rtls-digital-twin/technologies" className="text-primary hover:underline">
              View all RTLS technologies →
            </Link>
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Technological Advancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Enhanced Security:</span> Advanced encryption and authentication
                    protocols for high-security applications
                  </li>
                  <li>
                    <span className="font-medium">Sensor Integration:</span> NFC tags with integrated sensors for
                    temperature, moisture, and tamper detection
                  </li>
                  <li>
                    <span className="font-medium">Energy Harvesting:</span> Tags that capture energy from the reader
                    field to power additional functionality
                  </li>
                  <li>
                    <span className="font-medium">Miniaturization:</span> Smaller form factors enabling integration into
                    more types of assets
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Market Evolution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Hybrid Solutions:</span> Increasing integration of NFC with other
                    technologies like BLE and UWB for comprehensive tracking
                  </li>
                  <li>
                    <span className="font-medium">Standardized APIs:</span> Improved software interfaces for enterprise
                    integration and interoperability
                  </li>
                  <li>
                    <span className="font-medium">Biometric Combination:</span> NFC combined with biometric verification
                    for enhanced security in critical applications
                  </li>
                  <li>
                    <span className="font-medium">Extended Memory:</span> Higher capacity tags enabling more complex
                    applications and data storage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More - Updated with real resource links from article-data.ts and removed Card component */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About NFC Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {nfcRelatedArticles.length > 0 ? (
                  nfcRelatedArticles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/resources/${article.slug}`} className="text-primary hover:underline">
                        {article.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <>
                    <li>
                      <Link
                        href="/resources/rfid-vs-barcode-vs-ble-asset-tracking-comparison"
                        className="text-primary hover:underline"
                      >
                        RFID vs Barcode vs BLE: Asset Tracking Technology Comparison
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/uwb-ble-rfid-wifi-rtt-ultimate-rtls-showdown"
                        className="text-primary hover:underline"
                      >
                        UWB, BLE, RFID & WiFi RTT: Ultimate RTLS Technology Showdown
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/rtls-101-core-components-protocols-deployment-models"
                        className="text-primary hover:underline"
                      >
                        RTLS 101: Core Components, Protocols & Deployment Models
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if NFC is the right technology for your RTLS project?</p>
              <p className="mb-6">
                RTLS Alliance Practitioners can provide personalized guidance based on your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 mt-2"
              >
                Ask an Alliance Member
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {nfcFAQs.length > 0 && (
          <section className="mt-16 mb-12 bg-gray-50 rounded-lg p-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Frequently Asked Questions About NFC Technology
              </h2>
              <FAQSection faqs={nfcFAQs} sectionId="nfc-faqs" showTitle={false} />
            </div>
          </section>
        )}
      </article>

      {/* Add Schema for SEO */}
      <FAQSchema faqs={nfcFAQs} pageId="nfc-technology" />
    </div>
  )
}

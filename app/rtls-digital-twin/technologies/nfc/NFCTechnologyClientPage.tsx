"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Nfc, Building2, Hospital, ShoppingBag, Truck, Factory } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTechnologyRelatedArticles } from "@/lib/article-data"

export default function NFCTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get NFC-related articles from article-data.ts
  const nfcRelatedArticles = getTechnologyRelatedArticles("nfc")

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

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                Near Field Communication (NFC) is a short-range wireless connectivity technology that enables simple and
                secure communication between electronic devices. Operating at 13.56 MHz and transferring data at up to 424
                Kbps, NFC provides a low-speed connection with simple setup that can be used to bootstrap more capable
                wireless connections.
              </p>
              <p className="mb-4">
                Unlike other wireless technologies used in RTLS, NFC is designed for extremely close-range interactions,
                typically requiring devices to be within 4 centimeters (1.6 inches) of each other. This proximity
                requirement makes NFC inherently secure and ideal for applications where deliberate interaction is desired.
              </p>
              <div className="bg-green-50 p-6 rounded-xl shadow-sm mt-6">
                <h3 className="text-xl font-semibold mb-4">Key Specifications</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Range:</span>
                    <span>0-4 centimeters (0-1.6 inches)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Frequency:</span>
                    <span>13.56 MHz (HF band)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Data Rate:</span>
                    <span>106, 212, or 424 Kbps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Power:</span>
                    <span>Very low to none (passive tags)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Latency:</span>
                    <span>&lt;0.1 second</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Accuracy:</span>
                    <span>Proximity-based (presence detection)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Security:</span>
                    <span>Inherently secure due to short range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Standards:</span>
                    <span>ISO/IEC 14443, ISO/IEC 15693, ISO/IEC 18092</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/placeholder-1q2hn.png"
                  alt="NFC Technology Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How NFC Works</h2>
          <p className="mb-6">
            NFC technology is based on inductive coupling, where loosely coupled inductive circuits share power and data
            over a short distance. NFC operates in three distinct modes:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Reader/Writer Mode</h3>
              <p>
                An active NFC device reads or writes data to a passive NFC tag. This is commonly used in inventory
                tracking, product information, and smart posters. The reader provides the electromagnetic field that
                powers the passive tag.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Peer-to-Peer Mode</h3>
              <p>
                Two active NFC devices exchange data. This mode enables device pairing, contact sharing, and small file
                transfers between smartphones or other NFC-enabled devices. Both devices generate their own electromagnetic
                fields alternately.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Card Emulation Mode</h3>
              <p>
                An NFC device acts as a contactless smart card. This enables mobile payments, transit ticketing, and
                access control applications without requiring a physical card. The device mimics a passive tag when
                interacting with a reader.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">NFC Tag Types</h3>
            <p className="mb-4">The NFC Forum has defined four types of tags that all NFC-enabled devices must support:</p>
            <div className="overflow-x-auto">
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
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Advantages</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Extremely low power consumption; passive tags require no battery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Inherently secure due to very short operating range</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Simple and intuitive user interaction (tap to engage)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No pairing required, instant connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Widespread adoption in smartphones and payment systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Tags are inexpensive (as low as $0.10 each in volume)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mature standards and broad industry support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Can work in challenging RF environments where other technologies struggle</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Limitations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Extremely limited range (typically &lt;4cm)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Not suitable for continuous real-time tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Requires deliberate action to engage (not passive monitoring)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited data transfer rate compared to other wireless technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Metal surfaces can interfere with operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Cannot track multiple items simultaneously with high reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited memory capacity in most tag types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Requires specialized hardware for reading/writing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="healthcare">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto">
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
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
            <TabsContent value="healthcare" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Healthcare Applications</h3>
                  <p className="mb-4">
                    In healthcare settings, NFC provides secure identification and verification for critical processes.
                    It's used for patient identification, medication administration, and equipment authentication.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
            <TabsContent value="manufacturing" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Manufacturing Applications</h3>
                  <p className="mb-4">
                    Manufacturing facilities use NFC for process verification, quality control, and equipment maintenance.
                    The technology provides checkpoint tracking and authentication throughout production workflows.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
            <TabsContent value="retail" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Retail Applications</h3>
                  <p className="mb-4">
                    Retailers use NFC for contactless payments, loyalty programs, and product authentication.
                    The technology enhances customer engagement while providing valuable data on purchasing patterns.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
            <TabsContent value="logistics" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Logistics Applications</h3>
                  <p className="mb-4">
                    Logistics operations use NFC for supply chain checkpoints, custody transfers, and handling verification.
                    The technology provides secure documentation of critical handoffs and process steps.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
            <TabsContent value="commercial" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Commercial Building Applications</h3>
                  <p className="mb-4">
                    Commercial buildings use NFC for access control, visitor management, and equipment authorization.
                    The technology provides secure, convenient authentication for personnel and assets.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        \

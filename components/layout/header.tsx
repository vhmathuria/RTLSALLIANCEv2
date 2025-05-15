"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "RTLS + Digital Twin",
    href: "/rtls-digital-twin",
    dropdown: [
      { name: "BLE", href: "/rtls-digital-twin/technologies/ble" },
      { name: "UWB", href: "/rtls-digital-twin/technologies/uwb" },
      { name: "WiFi", href: "/rtls-digital-twin/technologies/wifi" },
      { name: "NFC", href: "/rtls-digital-twin/technologies/nfc" },
      { name: "LoRa", href: "/rtls-digital-twin/technologies/lora" },
      { name: "Infrared", href: "/rtls-digital-twin/technologies/infrared" },
      { name: "LiDAR", href: "/rtls-digital-twin/technologies/lidar" },
      { name: "AI Cameras", href: "/rtls-digital-twin/technologies/ai-cameras" },
      { name: "GNSS", href: "/rtls-digital-twin/technologies/gnss" },
      { name: "RTK GPS", href: "/rtls-digital-twin/technologies/rtk-gps" },
      { name: "Magnetic Field", href: "/rtls-digital-twin/technologies/magnetic-field" },
      { name: "Ultrasound", href: "/rtls-digital-twin/technologies/ultrasound" },
      { name: "Sensor Fusion", href: "/rtls-digital-twin/technologies/sensor-fusion" },
      { name: "SLAM", href: "/rtls-digital-twin/technologies/slam" },
      { name: "Dead Reckoning", href: "/rtls-digital-twin/technologies/dead-reckoning" },
    ],
  },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between py-3" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">RTLS Alliance</span>
            <Image
              src="/images/rtls-alliance-logo.png"
              alt="RTLS Alliance Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RTLS Alliance
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center text-sm font-medium leading-6 ${
                      isActive(item.href) ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  <Link href={item.href} className="w-full">
                    <DropdownMenuItem className="cursor-pointer">Overview</DropdownMenuItem>
                  </Link>
                  <div className="h-px bg-gray-200 my-1"></div>
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} className="w-full">
                      <DropdownMenuItem className="cursor-pointer">{subItem.name}</DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 ${
                  isActive(item.href) ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/join-alliance">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Join Alliance
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                  <span className="sr-only">RTLS Alliance</span>
                  <Image
                    src="/images/rtls-alliance-logo.png"
                    alt="RTLS Alliance Logo"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    RTLS Alliance
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="py-6 px-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <Link
                          href={item.href}
                          className={`block text-base font-medium leading-7 ${
                            isActive(item.href) ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name} - Overview
                        </Link>
                        <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm font-medium text-gray-700 hover:text-blue-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block text-base font-medium leading-7 ${
                          isActive(item.href) ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/join-alliance" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Join Alliance
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { createSupabaseClient } from "@/lib/supabase-auth"

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
  { name: "Certification", href: "/certification" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>(null)
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)

  useEffect(() => {
    async function loadUserProfile() {
      const supabase = createSupabaseClient()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        // Get user profile
        const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single()

        if (data) {
          setProfile(data)
        }
      }

      setLoading(false)
    }

    loadUserProfile()
  }, [])

  const handleSignOut = async () => {
    const supabase = createSupabaseClient()
    await supabase.auth.signOut()
    window.location.href = "/"
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  const toggleDropdown = (name: string) => {
    if (expandedDropdown === name) {
      setExpandedDropdown(null)
    } else {
      setExpandedDropdown(name)
    }
  }

  // Check if user has a public membership tier
  const hasPublicTier = profile?.membership_tier === "public"

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-3 sm:px-4 flex items-center justify-between py-3" aria-label="Global">
        <div className="flex xl:flex-1">
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

        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden xl:flex xl:gap-x-5">
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

        <div className="hidden xl:flex xl:flex-1 xl:justify-end xl:items-center">
          {!loading && user ? (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 max-w-[200px]">
                    <User className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{profile?.full_name || user.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Link href="/account">
                    <DropdownMenuItem>My Account</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {hasPublicTier && (
                <Link href="/membership/upgrade">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 whitespace-nowrap"
                  >
                    Upgrade
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/auth?tab=login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth?tab=signup">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Join Alliance
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full flex flex-col">
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
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Link
                              href={item.href}
                              className={`text-base font-medium leading-7 ${
                                isActive(item.href) ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
                              aria-expanded={expandedDropdown === item.name}
                            >
                              {expandedDropdown === item.name ? (
                                <ChevronDown className="h-5 w-5" />
                              ) : (
                                <ChevronRight className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          {expandedDropdown === item.name && (
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
                          )}
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
                </div>
                <div className="pt-6 border-t border-gray-200 mt-6">
                  {!loading && user ? (
                    <div className="space-y-2">
                      <Link
                        href="/account"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        My Account
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut()
                          setMobileMenuOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Sign Out
                      </button>
                      {hasPublicTier && (
                        <Link href="/membership/upgrade" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Upgrade Membership
                          </Button>
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link
                        href="/auth?tab=login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link href="/auth?tab=signup" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Join Alliance
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

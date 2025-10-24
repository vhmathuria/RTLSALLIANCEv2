import type React from "react"
import Link from "next/link"
import Image from "next/image"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "RTLS + Digital Twin", href: "/rtls-digital-twin" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Guides", href: "/resources?type=guide" },
    { name: "Case Studies", href: "/resources?type=case-study" },
    { name: "Technology Comparisons", href: "/resources?type=technology-comparison" },
    { name: "Member Insights", href: "/resources?type=member-insight" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/rtls-alliance/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/rtls-alliance-logo.png"
                alt="RTLS Alliance Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <h3 className="text-lg font-semibold text-gray-900">RTLS Alliance</h3>
            </div>
            <p className="text-gray-600 mb-4">
              A community of professionals and organizations dedicated to advancing real-time location systems
              technology and implementation.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-500 hover:text-blue-600">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Neue Schönhauserstr. 3-5</p>
              <p>10178 Berlin, Germany</p>
              <p className="mt-4">
                <strong>General Inquiries:</strong>
                <br />
                <a href="mailto:hello@rtlsalliance.org" className="hover:text-blue-600">
                  hello@rtlsalliance.org
                </a>
              </p>
              <p>
                <strong>Partnerships:</strong>
                <br />
                <a href="mailto:partners@rtlsalliance.org" className="hover:text-blue-600">
                  partners@rtlsalliance.org
                </a>
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href="tel:+4915205888777" className="hover:text-blue-600">
                  +49 156 79663671  
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RTLS Alliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"

interface ContentGateProps {
  requiredTier: "student" | "professional" | "corporate"
  userTier: string
}

export default function ContentGate({ requiredTier, userTier }: ContentGateProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Map tiers to human-readable names and descriptions
  const tierInfo = {
    student: {
      name: "Student Membership",
      price: "$100/year",
      description: "Access to educational resources and case studies for academic research.",
    },
    professional: {
      name: "Professional Membership",
      price: "$550/year",
      description: "Comprehensive access to professional resources, implementation guides, and industry insights.",
    },
    corporate: {
      name: "Corporate Membership",
      price: "$3,500/year",
      description:
        "Full access to all resources, including enterprise case studies, strategic analysis, and priority support.",
    },
  }

  const info = tierInfo[requiredTier as keyof typeof tierInfo]

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-100 p-3 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">This content requires {info.name}</h3>

        <p className="text-gray-600 mb-4">
          This resource is available exclusively to members with {info.name} or higher.
        </p>

        {isExpanded && (
          <div className="mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-1">{info.name}</h4>
              <p className="text-gray-600 mb-2">{info.price}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/membership"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Upgrade Membership
          </Link>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Bug } from "lucide-react"

export default function EnvironmentDebug() {
  const [isVisible, setIsVisible] = useState(false)
  const [envInfo, setEnvInfo] = useState<{
    hostname: string
    origin: string
    isPreviewDetected: boolean
    userAgent: string
  } | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname
      const isPreviewDetected =
        hostname.includes("vercel.app") &&
        !hostname.startsWith("www") &&
        (hostname.includes("-") || hostname.includes("git"))

      setEnvInfo({
        hostname,
        origin: window.location.origin,
        isPreviewDetected,
        userAgent: navigator.userAgent,
      })
    }
  }, [])

  if (!envInfo) return null

  return (
    <div className="mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center gap-1 text-xs"
      >
        <Bug className="h-3 w-3" />
        {isVisible ? "Hide" : "Show"} Environment Info
      </Button>

      {isVisible && (
        <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-md text-xs font-mono">
          <div className="flex items-start gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium">Environment Detection:</p>
              <p className="mt-1">
                Preview detected:{" "}
                <span className={envInfo.isPreviewDetected ? "text-red-500" : "text-green-500"}>
                  {envInfo.isPreviewDetected ? "YES" : "NO"}
                </span>
              </p>
            </div>
          </div>

          <div className="grid gap-1 mt-3">
            <p>Hostname: {envInfo.hostname}</p>
            <p>Origin: {envInfo.origin}</p>
            <p className="truncate">UA: {envInfo.userAgent.substring(0, 50)}...</p>
          </div>
        </div>
      )}
    </div>
  )
}

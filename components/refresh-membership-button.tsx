"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useState } from "react"
import { forceRefreshMembership } from "@/lib/membership-actions"
import { useRouter } from "next/navigation"

export function RefreshMembershipButton({ userId }: { userId: string }) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const router = useRouter()

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await forceRefreshMembership(userId)
      // Force a hard refresh of the page
      router.refresh()
    } catch (error) {
      console.error("Error refreshing membership:", error)
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleRefresh}
      disabled={isRefreshing}
      className="flex items-center gap-2"
    >
      <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
      {isRefreshing ? "Refreshing..." : "Refresh Membership Status"}
    </Button>
  )
}

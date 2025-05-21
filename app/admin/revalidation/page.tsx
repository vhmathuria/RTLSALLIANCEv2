import type { Metadata } from "next"
import RevalidationConsole from "./revalidation-console"

export const metadata: Metadata = {
  title: "Content Revalidation Console | RTLS Alliance",
  description: "Admin console for revalidating content on the RTLS Alliance website",
}

export default function RevalidationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Content Revalidation Console</h1>
      <p className="text-muted-foreground mb-8">
        Use this console to trigger immediate content updates without waiting for the daily revalidation cycle.
      </p>

      <RevalidationConsole />
    </div>
  )
}

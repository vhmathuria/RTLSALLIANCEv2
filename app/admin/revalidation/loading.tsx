import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Skeleton className="h-10 w-64 mb-6" />
      <Skeleton className="h-5 w-full max-w-2xl mb-8" />

      <div className="w-full max-w-2xl mx-auto">
        <Skeleton className="h-[400px] w-full rounded-md" />
      </div>
    </div>
  )
}

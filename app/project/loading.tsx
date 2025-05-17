import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-full mx-auto mb-2" />
        <Skeleton className="h-6 w-5/6 mx-auto mb-8" />

        <Skeleton className="h-10 w-40 mx-auto mb-16" />

        <Skeleton className="h-8 w-64 mx-auto mb-8" />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <Skeleton className="h-12 w-12 mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-12 w-12 mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-12 w-12 mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <Skeleton className="h-8 w-64 mx-auto mb-8" />

        <div className="space-y-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-6">
              <Skeleton className="h-14 w-14 rounded-full flex-shrink-0" />
              <div className="space-y-2 flex-grow">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>

        <Skeleton className="h-8 w-64 mx-auto mb-8" />
        <Skeleton className="h-96 w-full" />
      </div>
    </div>
  )
}

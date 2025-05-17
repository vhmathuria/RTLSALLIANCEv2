import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Skeleton className="h-16 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-2/4 mx-auto mb-2" />
        <Skeleton className="h-6 w-2/4 mx-auto mb-8" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>

      <div className="mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
              <Skeleton className="h-12 w-12 rounded-full mb-6" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-6" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-12" />
        <div className="grid md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
              <Skeleton className="h-8 w-8 mb-6" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-6" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"

interface DetailSectionProps {
  title: string
  content: string | any
  bulletPoints?: string[] | any[]
  image?:
    | {
        url: string
        caption: string
      }
    | string
    | null
}

export default function MemberInsightDetailSection({ title, content, bulletPoints, image }: DetailSectionProps) {
  // Process content to handle different data structures
  const processedContent =
    typeof content === "string"
      ? content
      : content?.text || content?.content || content?.description || JSON.stringify(content)

  // Process bulletPoints to handle different data structures
  const processedBulletPoints = Array.isArray(bulletPoints)
    ? bulletPoints.map((point) => {
        if (typeof point === "string") return point
        return point?.text || point?.content || point?.description || JSON.stringify(point)
      })
    : []

  // Process image to handle different data structures
  let imageUrl = ""
  let imageCaption = ""

  if (typeof image === "string") {
    imageUrl = image
    imageCaption = "Image"
  } else if (image && typeof image === "object") {
    imageUrl = image.url || ""
    imageCaption = image.caption || "Image"
  }

  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className={!imageUrl ? "md:col-span-2" : ""}>
          <p className="text-gray-700 mb-4">{processedContent}</p>

          {processedBulletPoints.length > 0 && (
            <ul className="space-y-2 list-disc pl-5">
              {processedBulletPoints.map((point, index) => (
                <li key={index} className="text-gray-700">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        {imageUrl && (
          <div>
            <div className="relative h-60 w-full rounded-lg overflow-hidden shadow-md">
              <Image src={imageUrl || "/placeholder.svg"} alt={imageCaption} fill className="object-cover" />
            </div>
            {imageCaption && <p className="text-sm text-gray-500 mt-2 text-center italic">{imageCaption}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

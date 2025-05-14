import Image from "next/image"
import { MessageSquare } from "lucide-react"

interface SuccessStoryTestimonialProps {
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

export default function SuccessStoryTestimonial({
  quote,
  author,
  position,
  company,
  image,
}: SuccessStoryTestimonialProps) {
  if (!quote || !author) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
        Client Testimonial
      </h2>

      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-1 shadow-lg">
        <div className="bg-white rounded-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {image && (
              <div className="md:w-1/4 flex-shrink-0">
                <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                  <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
                </div>
              </div>
            )}

            <div className={image ? "md:w-3/4" : "w-full"}>
              <svg className="h-10 w-10 text-green-600 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6">"{quote}"</blockquote>

              <div>
                <p className="font-semibold text-gray-900">{author}</p>
                <p className="text-gray-600">
                  {position}
                  {company && `, ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

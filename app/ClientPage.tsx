"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getArticlesByContentType } from "@/lib/supabase"
import type { Article } from "@/types/article"
import { formatDate, truncateText, parseJsonSafely } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Award, Headphones, LightbulbIcon, ChevronDown } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import { useEffect, useState } from "react"
import { createSupabaseClient } from "@/lib/supabase-auth"
import PageLayout from "@/components/layout/page-layout"
import { homepageFAQs, generalRTLSFAQs } from "@/lib/faq-data"

export default function ClientPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState<Article[]>([])
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [memberLogos, setMemberLogos] = useState([
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pozyx%20logo-qB3F5r1TslcVB9lUhr5BuuMf4jda01.png",
      alt: "Pozyx",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redlore%20logo-CwMI3br1cLi6D7fybCNGIIEhuZCSah.png",
      alt: "RedLore",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redpoint%20logo-zyQqrkkHZBiVQk7nglQ9tEBeXEB4ET.png",
      alt: "Redpoint",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airista%20logo-681dxKXWKOSX1HyzyXL3a8vONlkqes.png",
      alt: "AiRISTA",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twiserion%20logo-SBqzxo8oBb8IGUzGlpxYkWCR2UwCNS.png",
      alt: "Twiserion",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sensolus%20logo-9HYPSkSzMscZbz8cQNzguGrWsroLWW.png",
      alt: "Sensolus",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEIT%20logo-UsMuJpRXAfIWonLd34LKI6aFAel8hI.png",
      alt: "CEIT",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/litum%20logo-TCsv9ISwKTj1UnbCJqSwScWRoNqyJN.png",
      alt: "Litum",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleetIQ-535x1I9RHIlAZhJXT6FYzAMAxWzEcW.png",
      alt: "FleetIQ",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quuppa%20logo-carOZgTUMW1jvLj3ikTUiovXVguV1M.png",
      alt: "Quuppa",
    },
  ])

  useEffect(() => {
    async function loadUserAndArticles() {
      const supabase = createSupabaseClient()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      // Get articles
      try {
        const guideArticles = await getArticlesByContentType("Guide")
        const comparisonArticles = await getArticlesByContentType("Technology Comparison")
        const successStoryArticles = await getArticlesByContentType("Success Story")
        const memberInsightArticles = await getArticlesByContentType("Member Insight")

        // Combine all articles
        const allArticles = [...guideArticles, ...comparisonArticles, ...successStoryArticles, ...memberInsightArticles]
        setArticles(allArticles)

        // Get random featured articles
        setFeaturedArticles(getRandomArticles(allArticles, 3))
      } catch (error) {
        console.error("Error loading articles:", error)
      }

      setLoading(false)
    }

    loadUserAndArticles()
  }, [])

  // Function to randomly select articles
  const getRandomArticles = (articles: Article[], count: number) => {
    // Create a copy of the array to avoid modifying the original
    const shuffled = [...articles].sort(() => 0.5 - Math.random())
    // Get the first 'count' elements
    return shuffled.slice(0, count)
  }

  return (
    <PageLayout showBreadcrumbs={false}>
      <main>
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">
              The Global Hub for
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real-Time Location Systems
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Join the unstoppable rise of Indoor Location Intelligence across
              <br />
              Industry, Healthcare, and Consumer sectors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {!user && (
                <Link href="/join-alliance">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transform transition-all hover:scale-105"
                  >
                    Join the Alliance
                  </Button>
                </Link>
              )}
              <Link href="/rtls-digital-twin">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl transform transition-all hover:scale-105"
                >
                  Explore RTLS Technologies
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-w-3xl mx-auto">
              A global nonprofit community advancing the adoption of location intelligence
            </p>
          </div>
        </section>

        {/* What Can RTLS Do For You? Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Can RTLS Do For You?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <LightbulbIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">I Have a Project in Mind</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Enable your project to thrive in a neutral, trusted home, where we'll help you scale with unmatched
                  speed and ROI.
                </p>
                <Link href="/project" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 16L17 12L12 8M7 12H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">I Want to Explore Tech</h3>
                <p className="text-gray-700 mb-6 flex-grow">Discover RTLS & Digital Twin technologies</p>
                <Link href="/rtls-digital-twin" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 15C16 13.3431 14.2091 12 12 12C9.79086 12 8 13.3431 8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">I Want to Meet the Ecosystem</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Supercharge the future of RTLS. Shape the ecosystem, drive collaboration, and measure your
                  contributions.
                </p>
                <Link href="/ecosystem" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What The Alliance Does Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What The Alliance Does</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="text-blue-600 mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Knowledge Hub</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Access expert-driven articles, webinars, and toolkits across industries. Stay ahead of trends and
                  real-world best practices through our curated RTLS content library.
                </p>
                <Link href="/resources" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="text-blue-600 mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Directory</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Discover RTLS practitioners, consultants, academics, and vendor experts shaping real-time location
                  intelligence globally. Build partnerships and join cross-sector collaboration.
                </p>
                <Link href="/ecosystem" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="text-blue-600 mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Certification</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Be recognized as an RTLS professional. Gain access to credential programs designed to validate your
                  expertise in indoor location systems.
                </p>
                <Link href="/certification" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="text-blue-600 mb-6">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">RTLS Consulting</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Our vendor-neutral experts help de-risk RTLS deployments. Get strategic support across planning,
                  vendor selection, system design, and ROI modeling—all aligned to your environment.
                </p>
                <Link href="/project" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  $24B
                </h3>
                <p className="text-gray-700">Global RTLS Market by 2029</p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  24%
                </h3>
                <p className="text-gray-700">Industry CAGR</p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  $4.3B
                </h3>
                <p className="text-gray-700">Invested in RTLS startups since 2020</p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  137%
                </h3>
                <p className="text-gray-700">Increase in RTLS jobs since 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay updated with the latest articles, guides, and case studies from RTLS experts
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article: Article) => {
                const tags = parseJsonSafely<string[]>(article.tags, [])

                return (
                  <Link key={article.slug} href={`/resources/${article.slug}`} className="group">
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all transform hover:scale-105 h-full flex flex-col">
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.content_type && (
                            <Badge
                              className={`${
                                article.content_type === "Technology Comparison"
                                  ? "bg-purple-600 hover:bg-purple-700"
                                  : article.content_type === "Success Story"
                                    ? "bg-green-600 hover:bg-green-700"
                                    : article.content_type === "Member Insight"
                                      ? "bg-indigo-600 hover:bg-indigo-700"
                                      : "bg-blue-600 hover:bg-blue-700"
                              }`}
                            >
                              {article.content_type}
                            </Badge>
                          )}

                          {tags
                            .filter((tag) => tag !== "RTLS")
                            .slice(0, 2)
                            .map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 flex-1">{truncateText(article.meta_description, 120)}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                          <span>{article.author}</span>
                          <time dateTime={article.publish_date}>{formatDate(article.publish_date)}</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="text-center mt-10">
              <Link href="/resources">
                <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transform transition-all hover:scale-105">
                  View All Resources
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Member Logos Carousel - Moved to after Latest Insights */}
        {/*
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Members</h2>
    <LogoCarousel logos={memberLogos} />
  </div>
</section>
*/}

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated on RTLS Innovations</h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter for the latest industry insights, case studies, and technology updates.
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the RTLS Alliance?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Become a member today to access exclusive resources, connect with industry professionals, and stay ahead
              in the RTLS field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!user ? (
                <Link href="/join-alliance">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transform transition-all hover:scale-105"
                  >
                    Join Now
                  </Button>
                </Link>
              ) : null}
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl transform transition-all hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Consolidated FAQ Section - Now only appears after the CTA section */}
        <section className="py-16 bg-gray-50" id="faqs">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            {/* Alliance FAQs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">About RTLS Alliance</h3>
              <div className="max-w-3xl mx-auto space-y-4">
                {homepageFAQs.map((faq, index) => (
                  <FAQItem
                    key={`alliance-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                    sectionId="alliance-faqs"
                  />
                ))}
              </div>
            </div>

            {/* Technology FAQs */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">About RTLS Technology</h3>
              <div className="max-w-3xl mx-auto space-y-4">
                {generalRTLSFAQs.map((faq, index) => (
                  <FAQItem
                    key={`tech-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                    sectionId="rtls-tech-faqs"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

// Individual FAQ item component with accessibility features
function FAQItem({
  question,
  answer,
  index,
  sectionId,
}: {
  question: string
  answer: string
  index: number
  sectionId: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const itemId = `${sectionId}-question-${index}`
  const answerId = `${sectionId}-answer-${index}`

  return (
    <div className="bg-white rounded-lg shadow">
      <button
        id={itemId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex justify-between w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown
          className={`${isOpen ? "transform rotate-180" : ""} w-5 h-5 transition-transform duration-200`}
          aria-hidden="true"
        />
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={itemId}
        className={`px-6 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-4 pt-2" : "max-h-0"}`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  )
}

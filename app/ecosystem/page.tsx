import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Our growing ecosystem of partners.",
}

const EcosystemPage = () => {
  return (
    <div className="space-y-6">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold tracking-tight text-center">Ecosystem</h1>
        <p className="text-lg text-muted-foreground text-center">
          We are proud to partner with these leading companies.
        </p>
      </div>

      {/*
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
        Our Growing Ecosystem of Partners
      </h2>
      <LogoCarousel logos={ecosystemPartners} />
    </div>
    */}
    </div>
  )
}

export default EcosystemPage

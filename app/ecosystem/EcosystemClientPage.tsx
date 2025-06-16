import type React from "react"

const EcosystemClientPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Ecosystem Clients</h1>
      <p className="text-lg text-gray-700 text-center mb-12">Explore our ecosystem of clients and partners.</p>

      {/* 2. Comment out the <LogoCarousel logos={ecosystemPartners} /> component instance */}
      {/*
    <div className="mt-12 mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
        Our Growing Ecosystem
      </h2>
      <LogoCarousel logos={ecosystemPartners} />
    </div>
    */}

      {/* Add more content here as needed */}
    </div>
  )
}

export default EcosystemClientPage

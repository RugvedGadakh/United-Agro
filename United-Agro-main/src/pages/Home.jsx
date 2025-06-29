"use client"

import { Helmet } from "react-helmet-async"
import HeroSection from "../components/sections/HeroSection"
// import AboutSection from "../components/sections/AboutSection"
import FunFactsSection from "../components/sections/FunFactsSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import FeaturedProductsSection from "../components/sections/FeaturedProductsSection"
import GlobalPresenceSection from "../components/sections/GlobalPresenceSection"
import LeadSection from "../components/sections/LeadSection"
import BusinessStoriesSection from "../components/sections/BusinessStoriesSection"

import "./Home.css"

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FrozenDelights - Premium Frozen Corn & Vegetable Products",
    description: "Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients.",
    url: "https://frozendelights.com",
    mainEntity: {
      "@type": "Organization",
      name: "FrozenDelights",
      description: "Leading supplier of premium frozen corn and vegetable products",
    },
  }

  return (
    <>
      <Helmet>
        <title>FrozenDelights - Premium Frozen Corn & Vegetable Products | Farm Fresh Quality</title>
        <meta
          name="description"
          content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients. Wholesale and retail frozen food supplier with nationwide delivery."
        />
        <meta
          name="keywords"
          content="frozen corn, frozen vegetables, sweet corn, frozen food supplier, wholesale frozen vegetables, premium frozen products, farm fresh frozen corn"
        />
        <link rel="canonical" href="https://frozendelights.com" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="home-page">
        <HeroSection />
        {/* <AboutSection /> */}
        <FeaturesSection />
        <FeaturedProductsSection />
        <FunFactsSection />
        <GlobalPresenceSection />
        <BusinessStoriesSection/>
        <LeadSection />
      </div>
    </>
  )
}

export default Home

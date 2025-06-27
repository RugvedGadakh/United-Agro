"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Brochure from "./pages/Brochure"
import ChatbotComponent from "./components/ChatbotComponent"
import "./App.css"

function App() {
  const location = useLocation()

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="App">
      <Helmet>
        <title>UnitedAgro - Premium Frozen Corn & Vegetable Products | Farm Fresh Quality</title>
        <meta
          name="description"
          content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients. Wholesale and retail frozen food supplier with nationwide delivery."
        />
        <meta
          name="keywords"
          content="frozen corn, frozen vegetables, sweet corn, frozen food supplier, wholesale frozen vegetables, premium frozen products"
        />
        <meta name="author" content="UnitedAgro" />
        <meta property="og:title" content="UnitedAgro - Premium Frozen Corn & Vegetable Products" />
        <meta
          property="og:description"
          content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://UnitedAgro.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UnitedAgro - Premium Frozen Corn & Vegetable Products" />
        <meta
          name="twitter:description"
          content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients."
        />
        <link rel="canonical" href="https://UnitedAgro.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UnitedAgro",
            description: "Premium frozen corn and vegetable products supplier",
            url: "https://UnitedAgro.com",
            logo: "https://UnitedAgro.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
          </Routes>
        </AnimatePresence>
      </main>
      <ChatbotComponent />
      <Footer />
    </div>
  )
}

export default App

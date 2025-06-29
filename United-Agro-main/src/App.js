"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet-async"
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
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>FrozenDelights - Premium Frozen Corn & Vegetable Products | Farm Fresh Quality</title>
          <meta
            name="description"
            content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients. Wholesale and retail frozen food supplier with nationwide delivery."
          />
          <meta
            name="keywords"
            content="frozen corn, frozen vegetables, sweet corn, frozen food supplier, wholesale frozen vegetables, premium frozen products"
          />
          <meta name="author" content="FrozenDelights" />
          <meta property="og:title" content="FrozenDelights - Premium Frozen Corn & Vegetable Products" />
          <meta
            property="og:description"
            content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://frozendelights.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FrozenDelights - Premium Frozen Corn & Vegetable Products" />
          <meta
            name="twitter:description"
            content="Premium frozen corn and vegetable products. Farm-fresh quality, flash-frozen to preserve nutrients."
          />
          <link rel="canonical" href="https://frozendelights.com" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FrozenDelights",
              description: "Premium frozen corn and vegetable products supplier",
              url: "https://frozendelights.com",
              logo: "https://frozendelights.com/logo.png",
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
            <Routes>
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
    </Router>
  )
}

export default App

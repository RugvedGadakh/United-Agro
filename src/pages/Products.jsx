"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://agro-food-tech-be.onrender.com/api/products")
        if (!response.ok) throw new Error("Failed to fetch products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts =
    filter === "all" ? products : products.filter((product) => product.category === filter)

  const handleFilterChange = (category) => {
    setFilter(category)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-white py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg mt-4 font-medium max-w-xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our range of premium quality frozen food products
          </motion.p>
        </div>
      </section>

      {/* Product List */}
      <section className="bg-white py-24">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {["all", "vegetables", "fruits", "mixed"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm border-2 ${
                  filter === cat
                    ? "bg-gradient-to-r from-green-500 to-yellow-400 text-white border-green-500 shadow-md hover:from-yellow-400 hover:to-yellow-300"
                    : "bg-white text-gray-700 border-green-200 hover:border-green-500 hover:text-green-600 hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                {cat === "all" ? "All Products" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading ? (
            <div className="text-center bg-green-50 py-20 rounded-2xl mb-10">
              <div className="w-14 h-14 border-4 border-green-200 border-t-green-500 rounded-full mx-auto mb-6 animate-spin"></div>
              <p className="text-gray-600 text-lg font-medium">Loading products...</p>
            </div>
          ) : (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>

              {/* No Products */}
              {filteredProducts.length === 0 && (
                <div className="text-center bg-yellow-50 border border-yellow-200 py-20 rounded-2xl mt-10">
                  <p className="text-gray-600 text-lg font-semibold">No products found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products

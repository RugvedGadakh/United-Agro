"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Star, ArrowRight } from "lucide-react"
import ProductCard from "../ProductCard"

const FeaturedProductsSection = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://agro-food-tech-be.onrender.com/api/products")
        if (!res.ok) throw new Error("Failed to fetch products")
        const data = await res.json()
        const topThree = data.slice(0, 3)
        setFeaturedProducts(topThree)
      } catch (err) {
        console.error("Error fetching featured products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="bg-green-50 py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Premium Products
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover our most popular frozen corn and vegetable products, loved by customers nationwide
        </p>

        {loading ? (
          <p className="mt-12 text-gray-500">Loading...</p>
        ) : (
          <div className="grid gap-10 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300"
          >
            <Star size={20} />
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsSection

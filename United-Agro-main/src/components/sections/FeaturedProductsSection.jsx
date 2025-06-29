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

        // Take the first 3 products (or customize the logic as needed)
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
    <section className="section products-section">
      <div className="container">
        <h2 className="section-title">Featured Premium Products</h2>
        <p className="section-subtitle">
          Discover our most popular frozen corn and vegetable products, loved by customers nationwide
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="view-all-products">
          <Link to="/products" className="btn btn-large">
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

"use client"

import { Link } from "react-router-dom"
import { Star, ArrowRight } from "lucide-react"
import ProductCard from "../ProductCard"
import { featuredProducts } from "../../data/products"

const FeaturedProductsSection = () => {
  return (
    <section className="section products-section">
      <div className="container">
        <h2 className="section-title">Featured Premium Products</h2>
        <p className="section-subtitle">
          Discover our most popular frozen corn and vegetable products, loved by customers nationwide
        </p>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

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

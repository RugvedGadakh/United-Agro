"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"
import { allProducts } from "../data/products"
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProducts(allProducts)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredProducts = filter === "all" ? products : products.filter((product) => product.category === filter)

  const handleFilterChange = (category) => {
    setFilter(category)
  }

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our range of premium quality frozen food products
          </motion.p>
        </div>
      </section>

      <section className="section products-list-section">
        <div className="container">
          <div className="products-filter">
            <button className={filter === "all" ? "active" : ""} onClick={() => handleFilterChange("all")}>
              All Products
            </button>
            <button
              className={filter === "vegetables" ? "active" : ""}
              onClick={() => handleFilterChange("vegetables")}
            >
              Vegetables
            </button>
            <button className={filter === "fruits" ? "active" : ""} onClick={() => handleFilterChange("fruits")}>
              Fruits
            </button>
            <button className={filter === "mixed" ? "active" : ""} onClick={() => handleFilterChange("mixed")}>
              Mixed
            </button>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading products...</p>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="no-products">
                  <p>No products found in this category.</p>
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

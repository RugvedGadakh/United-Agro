"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://agro-food-tech-be.onrender.com/api/products")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
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

"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import "./ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://agro-food-tech-be.onrender.com/api/products/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch product")
        }
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="product-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="back-link">
          <Link to="/products">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        <div className="product-detail-content">
          <motion.div
            className="product-detail-image"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </motion.div>

          <motion.div
            className="product-detail-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="product-category">{product.category}</span>
            <h1>{product.name}</h1>

            <div className="product-highlights">
              {product.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <Check size={16} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="product-tabs">
              <div className="tabs-header">
                <button
                  className={activeTab === "description" ? "active" : ""}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={activeTab === "nutrition" ? "active" : ""}
                  onClick={() => setActiveTab("nutrition")}
                >
                  Nutrition Facts
                </button>
                <button
                  className={activeTab === "storage" ? "active" : ""}
                  onClick={() => setActiveTab("storage")}
                >
                  Storage & Usage
                </button>
              </div>

              <div className="tabs-content">
                {activeTab === "description" && (
                  <div className="tab-pane">
                    <p>{product.description}</p>
                  </div>
                )}

                {activeTab === "nutrition" && (
                  <div className="tab-pane">
                    <div className="nutrition-facts">
                      <h3>Nutrition Facts</h3>
                      <p className="serving">Serving Size: {product.nutrition.servingSize}</p>

                      <div className="nutrition-item">
                        <span>Calories</span>
                        <span>{product.nutrition.calories}</span>
                      </div>

                      <div className="nutrition-item">
                        <span>Total Fat</span>
                        <span>{product.nutrition.totalFat}</span>
                      </div>

                      <div className="nutrition-item">
                        <span>Sodium</span>
                        <span>{product.nutrition.sodium}</span>
                      </div>

                      <div className="nutrition-item">
                        <span>Total Carbohydrates</span>
                        <span>{product.nutrition.totalCarbs}</span>
                      </div>

                      <div className="nutrition-item">
                        <span>Protein</span>
                        <span>{product.nutrition.protein}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "storage" && (
                  <div className="tab-pane">
                    <h3>Storage Instructions</h3>
                    <p>{product.storage.instructions}</p>

                    <h3>Shelf Life</h3>
                    <p>{product.storage.shelfLife}</p>

                    <h3>Usage Tips</h3>
                    <ul>
                      {product.storage.usageTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="product-actions">
              <Link to="/contact" className="btn">
                Request Pricing
              </Link>
              <Link to="/brochure" className="btn btn-secondary">
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

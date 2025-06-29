"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <Link to={`/products/${product.id}`} className="btn">
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard

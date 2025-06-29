"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-3 group"
    >
      {/* Golden hover top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

      {/* Product image */}
      <div className="relative h-[260px] md:h-[220px] bg-gradient-to-br from-green-100 to-lime-100 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Product info */}
      <div className="p-7 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          {product.name}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          {product.shortDescription}
        </p>
        <Link
          to={`/products/${product._id}`}
          className="inline-block w-full text-center font-semibold bg-gradient-to-r from-green-500 to-lime-500 text-white py-3 md:py-3.5 text-base md:text-lg rounded-xl transition hover:brightness-105"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard

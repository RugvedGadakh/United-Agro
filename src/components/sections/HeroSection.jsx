"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Leaf } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dcxxiwmdo/video/upload/qnyojlmnfwtzhwdjq77v.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 text-center max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-5 text-white drop-shadow-lg"
        >
          Delivering Freshness, Preserving Quality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg leading-relaxed font-normal mb-10 text-gray-100 drop-shadow-md"
        >
          We are a leading Indian frozen food company, committed to bringing
          farm-fresh goodness to your plate — every time. From sourcing to
          processing to delivery, we ensure quality, hygiene, and taste at every step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/products"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-base font-medium transition-all duration-300"
          >
            <Leaf size={20} />
            Explore Products
          </Link>
          <Link
            to="/brochure"
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full text-base font-medium hover:bg-gray-200 transition-all duration-300"
          >
            <ArrowRight size={20} />
            Download Catalog
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

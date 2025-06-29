"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Leaf } from "lucide-react"
import "./sections.css"

const HeroSection = () => {
  return (
    <section className="hero-section-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-background-video"
      >
        <source src="videos/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay" />

      <div className="hero-content-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Delivering Freshness, Preserving Quality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are a leading Indian frozen food company, committed to bringing farm-fresh goodness to your plate — every time. From sourcing to processing to delivery, we ensure quality, hygiene, and taste at every step.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="/products" className="btn btn-large">
            <Leaf size={20} />
            Explore Products
          </Link>
          <Link to="/brochure" className="btn btn-secondary btn-large">
            <ArrowRight size={20} />
            Download Catalog
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

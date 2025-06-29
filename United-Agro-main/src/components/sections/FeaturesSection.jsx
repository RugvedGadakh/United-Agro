"use client"

import { motion } from "framer-motion"
import { Award, Clock, Shield, Truck } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: <Award size={36} />,
      title: "Farm-Fresh Quality",
      description:
        "Sourced directly from premium farms, our corn and vegetables are selected at peak ripeness for maximum sweetness and nutritional value.",
    },
    // {
    //   icon: <Clock size={36} />,
    //   title: "Flash Frozen Technology",
    //   description:
    //     "Advanced flash-freezing within hours of harvest locks in nutrients, natural sweetness, and vibrant colors for year-round freshness.",
    // },
    {
      icon: <Shield size={36} />,
      title: "Food Safety Excellence",
      description:
        "Rigorous quality control and food safety protocols ensure every product meets the highest industry standards for purity and safety.",
    },
    {
      icon: <Truck size={36} />,
      title: "Nationwide Distribution",
      description:
        "Reliable cold-chain delivery network ensures your products arrive in perfect condition, maintaining quality from our facility to your door.",
    },
  ]

  return (
    <section className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Our Premium Products?</h2>
        <p className="section-subtitle">
          We take pride in delivering the highest quality frozen corn and vegetable products, preserving nature's
          goodness from farm to your table.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

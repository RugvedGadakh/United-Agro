"use client"

import { motion } from "framer-motion"
import { Factory, Clock, Leaf, Award } from "lucide-react"

const FunFactsSection = () => {
  const funFacts = [
    { number: "50MT+", label: "Cold Storage Facilities", icon: <Factory size={32} /> },
    { number: "12hrs", label: "Farm to Freezer Time", icon: <Clock size={32} /> },
    { number: "2000+", label: "Partner Farms", icon: <Leaf size={32} /> },
    { number: "12+", label: "Years of Excellence", icon: <Award size={32} /> },
  ]

  return (
    <section className="section fun-facts-section">
      <div className="container">
        <h2 className="section-title">Impressive Numbers</h2>
        <p className="section-subtitle">Our commitment to excellence is reflected in these remarkable achievements</p>

        <div className="fun-facts-grid">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              className="fun-fact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="fun-fact-icon">{fact.icon}</div>
              <div className="fun-fact-number">{fact.number}</div>
              <div className="fun-fact-label">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunFactsSection

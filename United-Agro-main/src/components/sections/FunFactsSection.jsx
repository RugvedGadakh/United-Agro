"use client"

import { motion } from "framer-motion"
import { Factory, Clock, Leaf, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ value, duration = 1.5 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef()

  useEffect(() => {
    let start = 0
    let end = parseInt(value.replace(/\D/g, ""))
    if (isNaN(end)) return setDisplay(value)
    let startTime = null
    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setDisplay(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCount)
      } else {
        setDisplay(end)
      }
    }
    ref.current = requestAnimationFrame(animateCount)
    return () => cancelAnimationFrame(ref.current)
  }, [value, duration])

  // Add back any non-numeric suffix (like +, MT, hrs)
  const suffix = value.replace(/^[\d,]+/, "")
  return <span>{display.toLocaleString()}{suffix}</span>
}

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
              <div className="fun-fact-number">
                <AnimatedNumber value={fact.number} />
              </div>
              <div className="fun-fact-label">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunFactsSection

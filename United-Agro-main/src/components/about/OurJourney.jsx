"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Users, Award, Factory, Globe } from "lucide-react"
import "./about.css"

const OurJourney = () => {
  const [activeYear, setActiveYear] = useState(0)

  const milestones = [
    {
      year: "2013",
      title: "Humble Beginnings",
      description:
        "Foundation of United Agro as a trading company",
      icon: <MapPin size={24} />,
      image: "/placeholder.svg?height=300&width=400",
      details: "United Agro Frozen Food Products Pvt. Ltd. began its journey in 2013 as a food trading company. With a focus on sourcing and supplying high-quality frozen vegetables, our mission was simple yet powerful — to deliver consistent freshness and quality to Indian households and businesses.",
    },
    {
      year: "2013-2017",
      title: "Building Strong Foundations",
      description: "Establishing sourcing and distribution networks",
      icon: <Factory size={24} />,
      image: "/placeholder.svg?height=300&width=400",
      details: "During these formative years, we developed a robust supplier base and reliable distribution channels. By fostering trust with farmers and consistently meeting customer expectations, we built the foundation for a scalable and sustainable food business.",
    },

    {
      year: "2017",
      title: "A Transformational Milestone",
      description: "Launch of our manufacturing facility in Komathan",
      icon: <Award size={24} />,
      image: "/placeholder.svg?height=300&width=400",
      details: "2017 marked a turning point as we inaugurated our first state-of-the-art frozen food processing facility in Komathan, near Shirdi, Maharashtra. This transition from a trading company to a fully integrated food production unit gave us complete control over quality, hygiene, packaging, and logistics.",
    },
 
  ]

  return (
    <section className="journey-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Journey Through Time</h2>
          <p>Milestones that shaped our path to excellence</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-navigation">
            {milestones.map((milestone, index) => (
              <motion.button
                key={index}
                className={`timeline-nav-item ${activeYear === index ? "active" : ""}`}
                onClick={() => setActiveYear(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="nav-icon">{milestone.icon}</div>
                <div className="nav-year">{milestone.year}</div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="timeline-content"
            key={activeYear}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-image">
              <img src={milestones[activeYear].image || "/placeholder.svg"} alt={milestones[activeYear].title} />
            </div>
            <div className="timeline-details">
              <div className="timeline-year">{milestones[activeYear].year}</div>
              <h3>{milestones[activeYear].title}</h3>
              <p className="timeline-description">{milestones[activeYear].description}</p>
              <p className="timeline-details-text">{milestones[activeYear].details}</p>
            </div>
          </motion.div>

          <div className="timeline-line">
            <motion.div
              className="timeline-progress"
              initial={{ height: "0%" }}
              animate={{ height: `${((activeYear + 1) / milestones.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurJourney

"use client"

import { motion } from "framer-motion"
import { Eye, Target, Heart, Zap, Leaf, Users } from "lucide-react"

const VisionMission = () => {
  const values = [
    {
      icon: <Heart size={32} />,
      title: "Quality First",
      description: "Every product meets our rigorous standards for taste, nutrition, and safety.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainability",
      description: "Protecting our planet through responsible farming and eco-friendly practices.",
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description: "Continuously advancing our technology to deliver better products.",
    },
    {
      icon: <Users size={32} />,
      title: "Community",
      description: "Supporting local farmers and communities in everything we do.",
    },
  ]

  return (
    <section className="vision-mission-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Vision & Mission</h2>
          <p>Guiding principles that drive everything we do</p>
        </motion.div>

        <div className="vision-mission-wrapper">
          <motion.div
            className="vision-mission-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Our Vision</h3>
            <p>
              To be the world's most trusted provider of premium frozen foods, setting the standard for quality,
              sustainability, and innovation in the industry while nourishing families globally.
            </p>

            <h3>Our Mission</h3>
            <p>
              To deliver farm-fresh quality frozen foods through sustainable practices, cutting-edge technology, and
              unwavering commitment to excellence, while supporting farming communities and protecting our environment.
            </p>
          </motion.div>

          <motion.div
            className="vision-mission-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751118918/about_11zon_ivriwa.jpg" alt="Vision and Mission" />
          </motion.div>
        </div>
        <div>

        <motion.div
          className="values-section  pt-0 pb-0 rounded-md "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Our Core Values</h3>
          <div className="values-grid p-4 pt-0 pb-0">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

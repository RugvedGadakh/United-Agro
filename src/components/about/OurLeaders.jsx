"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Award } from "lucide-react"
import LazyImage from "../LazyImage"

const OurLeaders = () => {
  const leaders = [
    {
      name: "Maria Rodriguez",
      position: "Co-Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 20 years in agriculture, Maria leads our vision for sustainable farming and quality excellence.",
      achievements: ["Agricultural Innovation Award 2022", "Women in Business Leadership 2021"],
      linkedin: "#",
      email: "maria@UnitedAgro.com",
    },
    {
      name: "Carlos Rodriguez",
      position: "Co-Founder & CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Carlos brings cutting-edge technology to traditional farming, revolutionizing our preservation processes.",
      achievements: ["Technology Innovation Award 2023", "Sustainable Processing Excellence 2022"],
      linkedin: "#",
      email: "carlos@UnitedAgro.com",
    },
    {
      name: "Dr. Sarah Chen",
      position: "Head of Quality Assurance",
      image: "/placeholder.svg?height=300&width=300",
      bio: "PhD in Food Science, Sarah ensures every product meets our rigorous quality and safety standards.",
      achievements: ["Food Safety Excellence Award 2023", "Research Innovation Grant 2021"],
      linkedin: "#",
      email: "sarah@UnitedAgro.com",
    },
    {
      name: "Michael Thompson",
      position: "VP of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years optimizing supply chains and operations, ensuring efficient delivery of quality products.",
      achievements: ["Operations Excellence Award 2022", "Supply Chain Innovation 2021"],
      linkedin: "#",
      email: "michael@UnitedAgro.com",
    },
  ]

  return (
    <section className="leaders-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Meet Our Leadership Team</h2>
          <p>Visionary leaders driving innovation and excellence</p>
        </motion.div>

        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="leader-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="leader-image">
                <LazyImage src={leader.image || "/placeholder.svg"} alt={leader.name} />
                <div className="leader-overlay">
                  <div className="leader-social">
                    <a href={leader.linkedin} aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${leader.email}`} aria-label="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="leader-info">
                <h3>{leader.name}</h3>
                <p className="leader-position">{leader.position}</p>
                <p className="leader-bio">{leader.bio}</p>
                <div className="leader-achievements">
                  <h4>
                    <Award size={16} /> Recent Achievements
                  </h4>
                  <ul>
                    {leader.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurLeaders

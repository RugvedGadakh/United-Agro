"use client"

import { motion } from "framer-motion"
import { Award, Users, Leaf, Globe } from "lucide-react"
import "./About.css"
import OurJourney from "../components/about/OurJourney"
import VisionMission from "../components/about/VisionMisson"
import OurLeaders from "../components/about/OurLeaders"

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
  <div className="about-hero-overlay" />
  <div className="container">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      About UnitedAgro
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Your trusted partner in premium frozen food products since 2013
    </motion.p>
  </div>
</section>


      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                United Agro Frozen Food Products Pvt. Ltd. is one of the most trusted names in the Indian frozen food industry. Since our inception in 2013, we’ve been driven by a single purpose — to deliver high-quality, hygienically processed frozen food products that meet the evolving needs of consumers across India and around the globe.
              </p>
              <p>
                Our commitment to innovation, customer satisfaction, and sustainable practices has made us a preferred partner for retailers, distributors, and institutions alike.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751119066/about1_11zon_qyl6wk.jpg" alt="Our facility" />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <OurJourney/>
        
      </section>
      
      <section>
        {/* <AboutStory/> */}
        <VisionMission/>
      </section>
      <section>
        <OurLeaders/>
      </section>

      

      {/* <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. Every product undergoes rigorous testing to meet our high standards.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <Leaf size={32} />
              </div>
              <h3>Sustainability</h3>
              <p>We're committed to sustainable practices that protect our environment for future generations.</p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. We listen, adapt, and continuously improve.</p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <Globe size={32} />
              </div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and methods to deliver better products and services.</p>
            </motion.div>
          </div>
        </div>
      </section> */}
      
    </div>
  )
}

export default About

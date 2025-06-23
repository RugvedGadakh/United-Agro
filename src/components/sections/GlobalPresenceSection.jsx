"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Globe, MapPin, TrendingUp } from "lucide-react"
import {WorldMapDemo} from "../worldMapDemo"
const GlobalPresenceSection = () => {
  const globalPresence = [
    { region: "North America", countries: "USA, Canada, Mexico", stores: "2,500+" },
    { region: "Europe", countries: "UK, Germany, France", stores: "1,200+" },
    { region: "Asia Pacific", countries: "Japan, Australia, Singapore", stores: "800+" },
    { region: "South America", countries: "Brazil, Argentina, Chile", stores: "600+" },
  ]

  return (
    <section className="section global-presence-section">
      <div className="container">
        <h2 className="section-title">Global Reach, Local Quality</h2>
        <p className="section-subtitle">
          Serving premium frozen products to customers across four continents with the same commitment to quality
        </p>
        <div>
          <WorldMapDemo/>
        </div>

        {/* <div className="global-presence-grid">
          {globalPresence.map((region, index) => (
            <motion.div
              key={index}
              className="presence-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="presence-icon">
                <Globe size={32} />
              </div>
              <h3>{region.region}</h3>
              <p className="presence-countries">{region.countries}</p>
              <div className="presence-stats">
                <MapPin size={16} />
                <span>{region.stores} Retail Locations</span>
              </div>
            </motion.div>
          ))}
        </div> */}

        <div className="global-cta">
          <motion.div
            className="global-cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Ready to Expand Your Market?</h3>
            <p>Join our global network of partners and bring premium frozen products to your region.</p>
            <Link to="/contact" className="btn btn-secondary">
              <TrendingUp size={20} />
              Become a Partner
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresenceSection

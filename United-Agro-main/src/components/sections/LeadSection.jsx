"use client"

import { motion } from "framer-motion"
import LeadForm from "../LeadForm"

const LeadSection = () => {
  return (
    <section className="section lead-section">
      <div className="container">
        <div className="lead-content">
          <motion.div
            className="lead-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Partner With Us Today</h2>
            <p>
              Ready to bring premium frozen corn and vegetables to your customers? Get in touch with our team for
              wholesale pricing, custom packaging, and distribution partnerships.
            </p>
            <ul className="lead-benefits">
              <li>
                <span>✓</span> Competitive wholesale pricing
              </li>
              <li>
                <span>✓</span> Complete nutritional specifications
              </li>
              <li>
                <span>✓</span> Custom packaging solutions
              </li>
              <li>
                <span>✓</span> Flexible distribution partnerships
              </li>
              <li>
                <span>✓</span> Dedicated account management
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lead-form-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LeadSection

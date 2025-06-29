"use client"

import { motion } from "framer-motion"
import LeadForm from "../LeadForm"

const LeadSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Partner With Us Today</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ready to bring premium frozen corn and vegetables to your customers? Get in touch with our team for
              wholesale pricing, custom packaging, and distribution partnerships.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-primary-green font-bold text-xl mr-3">✓</span> Competitive wholesale pricing
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-primary-green font-bold text-xl mr-3">✓</span> Complete nutritional specifications
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-primary-green font-bold text-xl mr-3">✓</span> Custom packaging solutions
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-primary-green font-bold text-xl mr-3">✓</span> Flexible distribution partnerships
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-primary-green font-bold text-xl mr-3">✓</span> Dedicated account management
              </li>
            </ul>
          </motion.div>

          <motion.div
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

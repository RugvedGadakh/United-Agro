"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MapPin, TrendingUp } from "lucide-react"
import { WorldMapDemo } from "../worldMapDemo"

const GlobalPresenceSection = () => {


  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Global Reach, Local Quality
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Serving premium frozen products to customers across four continents with the same commitment to quality
        </p>

        <WorldMapDemo />

    

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 max-w-xl mx-auto text-center border border-yellow-300 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl px-8 py-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Expand Your Market?</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Join our global network of partners and bring premium frozen products to your region.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-600 rounded-full transition-all"
          >
            <TrendingUp size={20} />
            Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalPresenceSection

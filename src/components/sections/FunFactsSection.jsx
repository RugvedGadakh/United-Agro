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
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impressive Numbers</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our commitment to excellence is reflected in these remarkable achievements
        </p>

        <div className="grid gap-10 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white p-10 rounded-2xl text-center border border-green-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-200"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-lime-500 text-white shadow-md">
                {fact.icon}
              </div>

              {/* Number */}
              <div className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent font-roboto mb-3">
                {fact.number}
              </div>

              {/* Label */}
              <div className="text-[1.05rem] font-semibold text-gray-600">
                {fact.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunFactsSection

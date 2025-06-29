"use client"

import { motion } from "framer-motion"
import { Award, Shield, Truck } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: <Award size={36} />,
      title: "Farm-Fresh Quality",
      description:
        "Sourced directly from premium farms, our corn and vegetables are selected at peak ripeness for maximum sweetness and nutritional value.",
    },
    {
      icon: <Shield size={36} />,
      title: "Food Safety Excellence",
      description:
        "Rigorous quality control and food safety protocols ensure every product meets the highest industry standards for purity and safety.",
    },
    {
      icon: <Truck size={36} />,
      title: "Nationwide Distribution",
      description:
        "Reliable cold-chain delivery network ensures your products arrive in perfect condition, maintaining quality from our facility to your door.",
    },
  ]

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Our Premium Products?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We take pride in delivering the highest quality frozen corn and vegetable products, preserving nature's
          goodness from farm to your table.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white rounded-2xl p-8 text-center border-2 border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-lime-500 text-white shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-lime-400 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

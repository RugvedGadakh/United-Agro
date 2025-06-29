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
    <section className="relative py-20 bg-white">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_25%_75%,_theme(colors.green.100)_0%,_transparent_50%),radial-gradient(circle_at_75%_25%,_theme(colors.yellow.100)_0%,_transparent_50%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-gray-600">Guiding principles that drive everything we do</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-10 bg-green-600 text-white rounded-3xl p-10 mb-20 shadow-lg">
          <motion.div
            className="flex-1 min-w-[280px] text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-base leading-7 mb-6 text-shadow">To be the world's most trusted provider of premium frozen foods, setting the standard for quality, sustainability, and innovation in the industry while nourishing families globally.</p>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-base leading-7 text-shadow">To deliver farm-fresh quality frozen foods through sustainable practices, cutting-edge technology, and unwavering commitment to excellence, while supporting farming communities and protecting our environment.</p>
          </motion.div>

          <motion.div
            className="flex-1 min-w-[280px] text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751118918/about_11zon_ivriwa.jpg"
              alt="Vision and Mission"
              className="max-w-full h-auto rounded-xl shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          className="pt-0 pb-0 rounded-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 text-center transition duration-300 hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-lime-500 text-white shadow-md mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission;

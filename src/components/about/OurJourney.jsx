"use client"

import { motion } from "framer-motion"
import LazyImage from "../LazyImage"
import { useState } from "react"
import { MapPin, Factory, Award } from "lucide-react"

const OurJourney = () => {
  const [activeYear, setActiveYear] = useState(0)

  const milestones = [
    {
      year: "2013",
      title: "Humble Beginnings",
      description: "Foundation of United Agro as a trading company",
      icon: <MapPin size={24} />, 
      image: "/placeholder.svg?height=300&width=400",
      details:
        "United Agro Frozen Food Products Pvt. Ltd. began its journey in 2013 as a food trading company. With a focus on sourcing and supplying high-quality frozen vegetables, our mission was simple yet powerful — to deliver consistent freshness and quality to Indian households and businesses.",
    },
    {
      year: "2013-2017",
      title: "Building Strong Foundations",
      description: "Establishing sourcing and distribution networks",
      icon: <Factory size={24} />, 
      image: "/placeholder.svg?height=300&width=400",
      details:
        "During these formative years, we developed a robust supplier base and reliable distribution channels. By fostering trust with farmers and consistently meeting customer expectations, we built the foundation for a scalable and sustainable food business.",
    },
    {
      year: "2017",
      title: "A Transformational Milestone",
      description: "Launch of our manufacturing facility in Komathan",
      icon: <Award size={24} />, 
      image: "/placeholder.svg?height=300&width=400",
      details:
        "2017 marked a turning point as we inaugurated our first state-of-the-art frozen food processing facility in Komathan, near Shirdi, Maharashtra. This transition from a trading company to a fully integrated food production unit gave us complete control over quality, hygiene, packaging, and logistics.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">
            Our Journey Through Time
          </h2>
          <p className="text-gray-600">
            Milestones that shaped our path to excellence
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between overflow-x-auto gap-4 mb-12">
            {milestones.map((milestone, index) => (
              <motion.button
                key={index}
                className={`relative z-10 flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-md transition-all duration-300 shrink-0 text-center text-xs font-medium tracking-tight ${
                  activeYear === index
                    ? "bg-gradient-to-br from-green-500 to-lime-500 text-white border-green-600 scale-110 ring-4 ring-lime-200"
                    : "bg-white border-green-200 hover:scale-105 hover:shadow-lg"
                }`}
                onClick={() => setActiveYear(index)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-1">{milestone.icon}</div>
                <div>{milestone.year}</div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeYear}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 bg-green-50 p-8 rounded-2xl border-2 border-green-100"
          >
<<<<<<< HEAD
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src={milestones[activeYear].image || "/placeholder.svg"}
                alt={milestones[activeYear].title}
                className="w-full h-auto"
              />
=======
            <div className="timeline-image">
              <LazyImage src={milestones[activeYear].image || "/placeholder.svg"} alt={milestones[activeYear].title} />
>>>>>>> cf2da1ac9e9775d9006a7a102dd9b3f4ed110103
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent mb-4">
                {milestones[activeYear].year}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {milestones[activeYear].title}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-4">
                {milestones[activeYear].description}
              </p>
              <p className="text-gray-600 leading-7">
                {milestones[activeYear].details}
              </p>
            </div>
          </motion.div>

          <div className="absolute top-[30px] left-10 right-10 h-1 bg-green-200 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-lime-500 rounded"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeYear + 1) / milestones.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurJourney;

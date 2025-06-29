"use client"

import { motion } from "framer-motion"
import { Award, Users, Leaf, Globe } from "lucide-react"
import OurJourney from "../components/about/OurJourney"
import LazyImage from "../components/LazyImage"
import VisionMission from "../components/about/VisionMisson"
import OurLeaders from "../components/about/OurLeaders"

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat min-h-[45vh] flex flex-col justify-center items-center px-6 text-white text-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dcxxiwmdo/image/upload/v1750959150/AboutBg_hie7kd.jpg')" }}>
  <div className="absolute inset-0 bg-black/50 z-0" />
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-6xl font-bold text-white mb-4 [text-shadow:2px_2px_10px_rgba(0,0,0,0.6)]"
    >
      About UnitedAgro
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto [text-shadow:1px_1px_6px_rgba(0,0,0,0.5)]"
    >
      Your trusted partner in premium frozen food products since 2013
    </motion.p>
  </div>
</section>


      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-1 after:rounded after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-600">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 leading-7 text-base">
              United Agro Frozen Food Products Pvt. Ltd. is one of the most trusted names in the Indian frozen food industry. Since our inception in 2013, we’ve been driven by a single purpose — to deliver high-quality, hygienically processed frozen food products that meet the evolving needs of consumers across India and around the globe.
            </p>
            <p className="text-gray-600 leading-7 text-base">
              Our commitment to innovation, customer satisfaction, and sustainable practices has made us a preferred partner for retailers, distributors, and institutions alike.
            </p>
          </motion.div>

<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-lime-500" />
            <img
              src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751119066/about1_11zon_qyl6wk.jpg"
              alt="Our facility"
              className="w-full h-auto rounded-xl transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
=======
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LazyImage src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751119066/about1_11zon_qyl6wk.jpg" alt="Our facility" />
            </motion.div>
          </div>
>>>>>>> cf2da1ac9e9775d9006a7a102dd9b3f4ed110103
        </div>
      </section>

      {/* Components */}
      <section>
        <OurJourney />
      </section>

      <section>
        <VisionMission />
      </section>

      <section>
        <OurLeaders />
      </section>
    </div>
  )
}

export default About

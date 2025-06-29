"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Award } from "lucide-react"

const OurLeaders = () => {
  const leaders = [
    {
      name: "Maria Rodriguez",
      position: "Co-Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 20 years in agriculture, Maria leads our vision for sustainable farming and quality excellence.",
      achievements: ["Agricultural Innovation Award 2022", "Women in Business Leadership 2021"],
      linkedin: "#",
      email: "maria@UnitedAgro.com",
    },
    {
      name: "Carlos Rodriguez",
      position: "Co-Founder & CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Carlos brings cutting-edge technology to traditional farming, revolutionizing our preservation processes.",
      achievements: ["Technology Innovation Award 2023", "Sustainable Processing Excellence 2022"],
      linkedin: "#",
      email: "carlos@UnitedAgro.com",
    },
    {
      name: "Dr. Sarah Chen",
      position: "Head of Quality Assurance",
      image: "/placeholder.svg?height=300&width=300",
      bio: "PhD in Food Science, Sarah ensures every product meets our rigorous quality and safety standards.",
      achievements: ["Food Safety Excellence Award 2023", "Research Innovation Grant 2021"],
      linkedin: "#",
      email: "sarah@UnitedAgro.com",
    },
  ]

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-600">Visionary leaders driving innovation and excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-green-100 rounded-xl shadow-xl overflow-hidden hover:border-green-200 transition-all text-base"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                  <div className="flex gap-3">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-green-600 font-medium mb-2 text-base">{leader.position}</p>
                <p className="text-gray-700 mb-4 leading-relaxed text-base">{leader.bio}</p>
                <div>
                  <h4 className="flex items-center gap-2 text-gray-900 font-semibold mb-2 text-base">
                    <Award size={18} /> Recent Achievements
                  </h4>
                  <ul className="list-none space-y-1 text-sm text-gray-600 pl-4">
                    {leader.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 before:content-['🏆'] before:absolute before:left-0"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurLeaders

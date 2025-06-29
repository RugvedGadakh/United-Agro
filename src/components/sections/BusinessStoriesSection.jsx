"use client"

import { motion } from "framer-motion"
import { useState } from "react"
<<<<<<< HEAD
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react"
=======
import { Tag, Calendar, Clock, ArrowRight } from "lucide-react"
import LazyImage from "../LazyImage"
import "./sections.css"
>>>>>>> cf2da1ac9e9775d9006a7a102dd9b3f4ed110103

const BusinessStoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Stories" },
    { id: "innovation", name: "Innovation" },
    { id: "sustainability", name: "Sustainability" },
    { id: "community", name: "Community" },
    { id: "awards", name: "Awards" },
  ]

  const stories = [
    {
      id: 1,
      title: "Smarter. Faster. Fresher.",
      excerpt:
        "We use cutting-edge technologies like high-speed IQF systems, automated packing, and AI quality checks to deliver fresh, nutritious food — without preservatives. “Our 3-second freeze locks in nutrition and flavor.” — Mr. Santosh Thorat, Founder",
      category: "innovation",
      date: "2024-01-15",
      image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751022196/story1_btmhxc.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Growing with Purpose, Producing with Responsibility",
      excerpt:
        "We work with 2,000+ farmers who follow Good Agricultural Practices. Our cold chain and waste-reduction efforts help protect the planet while delivering safe, sustainable food.",
      category: "sustainability",
      date: "2024-01-10",
      image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1750959150/story2_g80nk7.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Recognized for Excellence.",
      excerpt: "From agribusiness leadership to cold chain innovation and community impact, our efforts have earned national recognition.",
      category: "awards",
      date: "2024-01-05",
      image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751022196/story3_ceaxng.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Stronger Together.",
      excerpt:
        "We empower rural farmers with training, fair pricing, and reliable income. By working closely with local communities, we grow together.",
      category: "community",
      date: "2023-12-20",
      image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1750959150/story4_gldjpk.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Cooling with a Conscience.",
      excerpt: "To reduce our carbon footprint, we’ve transitioned part of our cold storage facility to run on solar power. This shift not only cuts emissions but also promotes cleaner, more energy-efficient operations — making our frozen food truly future-ready.",
      category: "sustainability",
      date: "2023-12-15",
      image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751022348/story5_11zon_ycn6wy.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Packaging That Thinks Ahead.",
      excerpt:
        "We recently introduced moisture-resistant, recyclable packaging that keeps frozen products fresher for longer while reducing environmental impact. Designed with consumer convenience in mind, our new packs are easy to open, reseal, and store — all while being eco-friendly.",
      category: "innovation",
      date: "2023-12-10",
      image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1750959150/story6_ypc9za.jpg",
      featured: false,
    },
  ]

  const filteredStories =
    activeCategory === "all" ? stories : stories.filter((story) => story.category === activeCategory)
  const featuredStory = stories.find((story) => story.featured)
  const regularStories = filteredStories.filter((story) => !story.featured)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      innovation: "bg-blue-100 text-blue-800",
      sustainability: "bg-green-100 text-green-800",
      community: "bg-purple-100 text-purple-800",
      awards: "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Latest Stories & Updates</h2>
          <p className="text-gray-600 text-lg">Stay updated with our latest innovations, achievements, and community initiatives</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-semibold shadow-sm border-2 transition-all duration-300 text-sm ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-green-400 to-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-green-200 hover:border-green-500 hover:text-green-600"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-10">
          {featuredStory && activeCategory === "all" && (
            <motion.div
              className="grid lg:grid-cols-2 gap-10 bg-green-50 rounded-3xl shadow-xl border-2 border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={featuredStory.image || "/placeholder.svg"}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-5 left-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Featured
                </div>
=======
              <div className="story-image">
                <LazyImage src={featuredStory.image || "/placeholder.svg"} alt={featuredStory.title} />
                <div className="featured-badge">Featured</div>
>>>>>>> cf2da1ac9e9775d9006a7a102dd9b3f4ed110103
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(featuredStory.category)}`}>
                    <Tag size={14} />
                    {featuredStory.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={14} /> {formatDate(featuredStory.date)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-snug">{featuredStory.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{featuredStory.excerpt}</p>
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-green-200 transition-transform duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
<<<<<<< HEAD
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
=======
                <div className="story-image">
                  <LazyImage src={story.image || "/placeholder.svg"} alt={story.title} />
>>>>>>> cf2da1ac9e9775d9006a7a102dd9b3f4ed110103
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(story.category)}`}>
                      <Tag size={12} />
                      {story.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={12} /> {formatDate(story.date)}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 leading-snug">{story.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{story.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessStoriesSection;
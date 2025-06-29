"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Tag, Calendar, Clock, ArrowRight } from "lucide-react"
import LazyImage from "../LazyImage"
import "./sections.css"

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
        "We use cutting-edge technologies like high-speed IQF systems, automated packing, and AI quality checks to deliver fresh, nutritious food — without preservatives. \“Our 3-second freeze locks in nutrition and flavor.\” — Mr. Santosh Thorat, Founder",
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
    <section className="section business-stories-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Stories & Updates</h2>
          <p className="section-subtitle">
            Stay updated with our latest innovations, achievements, and community initiatives
          </p>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="stories-grid">
          {featuredStory && activeCategory === "all" && (
            <motion.div
              className="featured-story"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="story-image">
                <LazyImage src={featuredStory.image || "/placeholder.svg"} alt={featuredStory.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="story-content">
                <div className="story-meta">
                  <span className={`category-tag ${getCategoryColor(featuredStory.category)}`}>
                    <Tag size={14} />
                    {featuredStory.category}
                  </span>
                  <div className="story-date">
                    <Calendar size={14} />
                    {formatDate(featuredStory.date)}
                  </div>
                  <div className="read-time">
                    <Clock size={14} />
                    {featuredStory.readTime}
                  </div>
                </div>
                <h3>{featuredStory.title}</h3>
                <p>{featuredStory.excerpt}</p>
                {/* <button className="read-more-btn">
                  Read Full Story <ArrowRight size={16} />
                </button> */}
              </div>
            </motion.div>
          )}

          <div className="regular-stories">
            {regularStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="story-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="story-image">
                  <LazyImage src={story.image || "/placeholder.svg"} alt={story.title} />
                </div>
                <div className="story-content">
                  <div className="story-meta">
                    <span className={`category-tag ${getCategoryColor(story.category)}`}>
                      <Tag size={12} />
                      {story.category}
                    </span>
                    <div className="story-date">
                      <Calendar size={12} />
                      {formatDate(story.date)}
                    </div>
                  </div>
                  <h4>{story.title}</h4>
                  <p>{story.excerpt}</p>
                  <div className="story-footer">
                    {/* <span className="read-time">
                      <Clock size={12} />
                      {story.readTime}
                    </span> */}
                    {/* <button className="read-more-btn">
                      Read More <ArrowRight size={14} />
                    </button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessStoriesSection

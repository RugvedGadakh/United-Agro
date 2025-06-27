"use client"

import { motion } from "framer-motion"
import { Download, FileText, Eye } from "lucide-react"
import "./Brochure.css"

const Brochure = () => {
  const handleDownload = () => {
    // In a real application, this would trigger the actual download
    alert("Brochure download started! (This is a demo)")
  }

  const handlePreview = () => {
    // In a real application, this would open a preview modal or new tab
    alert("Opening brochure preview... (This is a demo)")
  }

  return (
    <div className="brochure-page">
      <section className="brochure-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Product Brochure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download our comprehensive product catalog with detailed information about all our frozen food products
          </motion.p>
        </div>
      </section>

      <section className="section brochure-content">
        <div className="container">
          <div className="brochure-grid">
            <motion.div
              className="brochure-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>What's Inside Our Brochure</h2>
              <div className="brochure-features">
                <div className="feature-item">
                  <span>✓</span>
                  <p>Complete product catalog with high-quality images</p>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <p>Detailed nutritional information for each product</p>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <p>Storage and preparation instructions</p>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <p>Wholesale pricing and bulk order information</p>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <p>Company certifications and quality standards</p>
                </div>
                <div className="feature-item">
                  <span>✓</span>
                  <p>Contact information for sales and support</p>
                </div>
              </div>

              <div className="brochure-stats">
                <div className="stat-item">
                  <h3>24 Pages</h3>
                  <p>Comprehensive catalog</p>
                </div>
                <div className="stat-item">
                  <h3>8 Products</h3>
                  <p>Detailed specifications</p>
                </div>
                <div className="stat-item">
                  <h3>PDF Format</h3>
                  <p>Easy to view and print</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="brochure-download"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="brochure-preview">
                <div className="brochure-cover">
                  <FileText size={80} />
                  <h3>UnitedAgro</h3>
                  <p>Product Catalog 2024</p>
                </div>
              </div>

              <div className="download-actions">
                <button className="btn download-btn" onClick={handleDownload}>
                  <Download size={20} />
                  Download Brochure
                </button>
                <button className="btn btn-secondary preview-btn" onClick={handlePreview}>
                  <Eye size={20} />
                  Preview Online
                </button>
              </div>

              <div className="download-info">
                <p>
                  <strong>File Size:</strong> 2.5 MB
                </p>
                <p>
                  <strong>Format:</strong> PDF
                </p>
                <p>
                  <strong>Last Updated:</strong> December 2024
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Brochure

"use client"

import { motion } from "framer-motion"
import { Download, FileText, Eye } from "lucide-react"

const Brochure = () => {
  const handleDownload = () => {
    alert("Brochure download started! (This is a demo)")
  }

  const handlePreview = () => {
    alert("Opening brochure preview... (This is a demo)")
  }

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-white py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Product Brochure
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg mt-4 font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download our comprehensive product catalog with detailed information about all our frozen food products
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 relative after:absolute after:w-16 after:h-1 after:bg-gradient-to-r after:from-green-400 after:to-yellow-400 after:-bottom-2 after:left-0">
                What's Inside Our Brochure
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  "Complete product catalog with high-quality images",
                  "Detailed nutritional information for each product",
                  "Storage and preparation instructions",
                  "Wholesale pricing and bulk order information",
                  "Company certifications and quality standards",
                  "Contact information for sales and support",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 border border-yellow-200 bg-yellow-50 rounded-lg hover:shadow-md hover:translate-x-1 transition"
                  >
                    <span className="w-6 h-6 text-green-600 font-bold flex items-center justify-center bg-white rounded-full shadow-sm">
                      ✓
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-6 bg-green-50 border border-green-100 p-6 rounded-xl">
                {[
                  { title: "24 Pages", subtitle: "Comprehensive catalog" },
                  { title: "8 Products", subtitle: "Detailed specifications" },
                  { title: "PDF Format", subtitle: "Easy to view and print" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center bg-white p-4 rounded-lg shadow-sm hover:-translate-y-1 transition"
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mt-1">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Download Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-72 h-96 bg-gradient-to-br from-green-500 to-yellow-400 text-white rounded-2xl flex flex-col items-center justify-center shadow-xl mb-10 relative overflow-hidden hover:scale-[1.02] transition-transform">
                <FileText size={64} className="mb-6 z-10" />
                <h3 className="text-2xl font-semibold z-10">UnitedAgro</h3>
                <p className="text-base opacity-90 z-10">Product Catalog 2024</p>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-xs mb-8">
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-500 to-yellow-400 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow"
                >
                  <Download size={20} />
                  Download Brochure
                </button>
                <button
                  onClick={handlePreview}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow"
                >
                  <Eye size={20} />
                  Preview Online
                </button>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center text-gray-600 text-sm w-full max-w-xs">
                <p className="mb-2">
                  <strong>File Size:</strong> 2.5 MB
                </p>
                <p className="mb-2">
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

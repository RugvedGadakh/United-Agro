"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    interest: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!formData.name || !formData.email || !formData.interest) {
      alert("Please fill out all required fields.")
      setLoading(false)
      return
    }

    const payload = {
      fullName: formData.name,
      emailAddress: formData.email,
      phoneNumber: formData.phone,
      companyName: formData.company,
      interestedIn: formData.interest,
      message: formData.message,
    }

    try {
      const response = await fetch("https://agro-food-tech-be.onrender.com/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("Failed to submit form")

      setSubmitted(true)
      setLoading(false)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          interest: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setLoading(false)
      alert("There was an error submitting the form. Please try again later.")
    }
  }

  return (
    <div className="relative mx-auto max-w-xl w-full bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-10">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-lime-400 rounded-t-md" />

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-gray-700 font-medium text-sm">Full Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-700 font-medium text-sm">Email Address*</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-gray-700 font-medium text-sm">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="mb-2 text-gray-700 font-medium text-sm">Company Name</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="interest" className="mb-2 text-gray-700 font-medium text-sm">Interested In*</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
            >
              <option value="">Select an option</option>
              <option value="WholeSale Purchase">Wholesale Purchase</option>
              <option value="Retail Information">Retail Information</option>
              <option value="Distribution Partnership">Distribution Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="mb-2 text-gray-700 font-medium text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold text-base rounded-xl flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : <>Submit <Send size={16} /></>}
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 px-4 text-green-600"
        >
          <CheckCircle size={60} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
          <p className="max-w-md mx-auto text-gray-700 text-lg leading-relaxed">
            Your information has been submitted successfully. Our team will contact you shortly.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default LeadForm

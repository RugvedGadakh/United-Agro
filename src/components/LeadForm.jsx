"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import "./LeadForm.css"

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

    // Basic validation
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

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitted(true)
      setLoading(false)

      // Reset form after 3 seconds
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
    <div className="lead-form-container">
      {!submitted ? (
        <motion.form
          className="lead-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>

          <div className="form-group">
            <label htmlFor="interest">Interested In*</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="WholeSale Purchase">Wholesale Purchase</option>
              <option value="Retail Information">Retail Information</option>
              <option value="Distribution Partnership">Distribution Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-submit" disabled={loading}>
            {loading ? (
              "Sending..."
            ) : (
              <>
                Submit <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="form-success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle size={60} />
          <h3>Thank You!</h3>
          <p>Your information has been submitted successfully. Our team will contact you shortly.</p>
        </motion.div>
      )}
    </div>
  )
}

export default LeadForm

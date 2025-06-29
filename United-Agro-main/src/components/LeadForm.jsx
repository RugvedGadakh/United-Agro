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

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setLoading(false)
      setSubmitted(true)

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
    }, 1500)
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
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="interest">Interested In*</label>
            <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option value="wholesale">Wholesale Purchase</option>
              <option value="retail">Retail Information</option>
              <option value="distribution">Distribution Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}></textarea>
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

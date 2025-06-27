"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import LeadForm from "../components/LeadForm"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in touch with our team for inquiries, orders, or partnership opportunities
          </motion.p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@UnitedAgro.com</p>
                    <p>sales@UnitedAgro.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Frozen Lane</p>
                    <p>Iceville, FL 12345</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

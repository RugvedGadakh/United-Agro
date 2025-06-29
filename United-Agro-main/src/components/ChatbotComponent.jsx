"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import "./ChatbotComponent.css"

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your FrozenDelights assistant. How can I help you today?", isBot: true },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === "") return

    // Add user message
    setMessages([...messages, { text: input, isBot: false }])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      let botResponse
      const userInput = input.toLowerCase()

      if (userInput.includes("product") || userInput.includes("frozen")) {
        botResponse =
          "We offer a variety of frozen food products including Sweet Corn, Mixed Vegetables, Peas, Berries, and more. Would you like specific information about any of these?"
      } else if (userInput.includes("price") || userInput.includes("cost")) {
        botResponse =
          "Our product prices vary based on quantity and packaging. Please contact our sales team for a detailed price list or visit our products page for more information."
      } else if (userInput.includes("delivery") || userInput.includes("shipping")) {
        botResponse =
          "We deliver across the country. Shipping costs depend on your location and order size. For bulk orders, we offer special shipping rates."
      } else if (userInput.includes("contact") || userInput.includes("talk")) {
        botResponse =
          "You can reach our customer service team at info@frozendelights.com or call us at +1 (555) 123-4567 during business hours."
      } else if (userInput.includes("brochure") || userInput.includes("catalog")) {
        botResponse =
          "You can download our product brochure from the Brochure page on our website. It contains detailed information about all our products."
      } else {
        botResponse = "Thank you for your message. How else can I assist you with our frozen food products?"
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      <motion.div className="chatbot-toggle" onClick={toggleChat} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <h3>FrozenDelights Support</h3>
              <span>We typically reply within minutes</span>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.isBot ? "bot" : "user"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text}
                </motion.div>
              ))}

              {isTyping && (
                <div className="message bot typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input" onSubmit={handleSubmit}>
              <input type="text" value={input} onChange={handleInputChange} placeholder="Type your message..." />
              <button type="submit">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotComponent

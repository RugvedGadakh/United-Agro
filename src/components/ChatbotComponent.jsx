"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your UnitedAgro assistant. How can I help you today?", isBot: true },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => setInput(e.target.value)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { text: input, isBot: false }])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      let botResponse
      const userInput = input.toLowerCase()

      if (userInput.includes("product") || userInput.includes("frozen")) {
        botResponse = "We offer a variety of frozen food products including Sweet Corn, Mixed Vegetables, Peas, Berries, and more."
      } else if (userInput.includes("price") || userInput.includes("cost")) {
        botResponse = "Our product prices vary based on quantity and packaging."
      } else if (userInput.includes("delivery") || userInput.includes("shipping")) {
        botResponse = "We deliver across the country. Shipping depends on your location."
      } else if (userInput.includes("contact") || userInput.includes("talk")) {
        botResponse = "Reach us at info@UnitedAgro.com or +1 (555) 123-4567."
      } else if (userInput.includes("brochure") || userInput.includes("catalog")) {
        botResponse = "Download our product brochure from the Brochure page."
      } else {
        botResponse = "Thank you for your message. How else can I assist you?"
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-lime-500 text-white flex items-center justify-center shadow-xl border-4 border-white z-[999] cursor-pointer"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-[110px] right-6 w-[380px] max-w-[90vw] h-[520px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-[998] border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-4 relative">
              <h3 className="text-lg font-semibold">UnitedAgro Support</h3>
              <span className="text-sm opacity-90">We typically reply within minutes</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-yellow-500" />
            </div>

            <div className="flex-1 px-6 py-5 overflow-y-auto flex flex-col gap-4 bg-gray-50 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-200">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`px-4 py-3 rounded-[18px] max-w-[85%] text-sm leading-relaxed shadow-sm ${
                    message.isBot
                      ? "bg-white text-gray-700 self-start border border-gray-200 rounded-bl-md"
                      : "bg-gradient-to-br from-green-500 to-lime-500 text-white self-end rounded-br-md"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center px-5 py-4 bg-white rounded-full border border-gray-200 shadow-sm w-fit">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:200ms]" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:400ms]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-3 border-t border-gray-200 px-4 py-4 bg-white">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-gradient-to-br from-green-500 to-lime-500 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition"
              >
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

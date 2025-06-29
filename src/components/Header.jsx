"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-gray-100 ${
        scrolled ? "bg-white py-4" : "bg-white/90 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl md:text-4xl bg-gradient-to-r from-green-600 to-lime-500 text-transparent bg-clip-text relative font-serif"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            UnitedAgro
          </motion.div>
          <span className="absolute -top-2 -right-6 text-xl md:text-2xl animate-pulse">🌽</span>
        </Link>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12 items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Products" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact" },
            { path: "/brochure", label: "Brochure" },
          ].map(({ path, label }) => {
            const isActive =
              path === "/" ? location.pathname === "/" : location.pathname.includes(path)
            return (
              <Link
                key={path}
                to={path}
                className={`relative text-base font-medium transition-all duration-300 ${
                  isActive ? "text-green-600" : "text-gray-700"
                } hover:text-green-600`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 top-[72px] w-full overflow-hidden bg-white transition-all duration-300 border-t border-gray-100 shadow-lg ${
            isOpen ? "h-[320px]" : "h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 px-4 py-6">
            {[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact" },
              { path: "/brochure", label: "Brochure" },
            ].map(({ path, label }) => {
              const isActive =
                path === "/" ? location.pathname === "/" : location.pathname.includes(path)
              return (
                <li key={path} className="w-full text-center">
                  <Link
                    to={path}
                    className={`block py-3 text-lg font-medium transition ${
                      isActive ? "text-green-600" : "text-gray-700"
                    } hover:text-green-600`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

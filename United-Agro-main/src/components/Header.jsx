"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            UnitedAgro
          </motion.div>
        </Link>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={location.pathname.includes("/products") ? "active" : ""}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/brochure" className={location.pathname === "/brochure" ? "active" : ""}>
                Brochure
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

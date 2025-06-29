import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>FrozenDelights</h3>
          <p>Premium quality frozen food products for your everyday needs. Taste the freshness, frozen in time.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/brochure">Brochure</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/products/1">Frozen Sweet Corn</Link>
            </li>
            <li>
              <Link to="/products/2">Frozen Mixed Vegetables</Link>
            </li>
            <li>
              <Link to="/products/3">Frozen Peas</Link>
            </li>
            <li>
              <Link to="/products/4">Frozen Berries</Link>
            </li>
            <li>
              <Link to="/products/5">Frozen Spinach</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>
              <Phone size={16} /> +1 (555) 123-4567
            </p>
            <p>
              <Mail size={16} /> info@frozendelights.com
            </p>
            <p>
              <MapPin size={16} /> 123 Frozen Lane, Iceville, FL 12345
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} United Agro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

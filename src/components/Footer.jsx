import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Brochure", path: "/brochure" },
  ]

  const productCategories = [
    { name: "Premium Sweet Corn", path: "/products/1" },
    { name: "Mixed Vegetables", path: "/products/2" },
    { name: "Organic Peas", path: "/products/3" },
    { name: "Frozen Berries", path: "/products/4" },
    { name: "Leafy Greens", path: "/products/5" },
  ]

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-container">
          {/* Company Info */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <h3>United Agro</h3>
              <div className="logo-tagline">Farm Fresh • Flash Frozen • Premium Quality</div>
            </div>
            <p className="company-description">
              Leading the frozen food industry with premium quality products since 2010. From farm to freezer, we
              preserve nature's goodness with cutting-edge technology and sustainable practices.
            </p>

            <div className="social-section">
              <h4>Follow Our Journey</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4>Our Products</h4>
            <ul className="footer-links">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <Link to={product.path}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <div>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  <a href="tel:+15551234568">+1 (555) 123-4568</a>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={16} />
                <div>
                  <a href="mailto:info@frozendelights.com">info@frozendelights.com</a>
                  <a href="mailto:sales@frozendelights.com">sales@frozendelights.com</a>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={16} />
                <div>
                  <span>123 Frozen Lane</span>
                  <span>Iceville, FL 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} UnitedAgro. All Rights Reserved.</p>
              {/* <div className="footer-bottom-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/cookies">Cookie Policy</Link>
                <Link to="/sitemap">Sitemap</Link>
              </div> */}
            </div>
            <div className="footer-bottom-right">
              <div className="sustainability-badge">
                <Leaf size={16} />
                <span>Committed to Sustainable Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from "lucide-react"

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.1)_0%,transparent_50%)]"></div>

      <div className="relative z-10 pt-16 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="max-w-md">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-2">United Agro</h3>
            <p className="text-yellow-400 font-medium text-base mb-6">Farm Fresh • Flash Frozen • Premium Quality</p>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Leading the frozen food industry with premium quality products since 2010. From farm to freezer, we
              preserve nature's goodness with cutting-edge technology and sustainable practices.
            </p>

            <div>
              <h4 className="text-yellow-400 font-semibold text-lg mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur hover:bg-gradient-to-r from-green-500 to-lime-500 hover:translate-y-[-4px] transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold text-lg mb-5 relative">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-base">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-yellow-400 transition-all relative pl-5 before:content-['→'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 hover:pl-6"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-yellow-400 font-semibold text-lg mb-5 relative">Our Products</h4>
            <ul className="space-y-3 text-gray-300 text-base">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.path}
                    className="hover:text-yellow-400 transition-all relative pl-5 before:content-['→'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 hover:pl-6"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-400 font-semibold text-lg mb-5 relative">Get in Touch</h4>
            <div className="flex flex-col gap-6 text-base text-gray-300">
              {/* Phone */}
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-green-400 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+15551234567" className="hover:text-green-400 transition">+1 (555) 123-4567</a>
                  <a href="tel:+15551234568" className="hover:text-green-400 transition">+1 (555) 123-4568</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-green-400 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@frozendelights.com" className="hover:text-green-400 transition">info@frozendelights.com</a>
                  <a href="mailto:sales@frozendelights.com" className="hover:text-green-400 transition">sales@frozendelights.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-green-400 mt-1" />
                <div className="flex flex-col gap-1">
                  <span>123 Frozen Lane</span>
                  <span>Iceville, FL 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 pb-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400 text-base gap-4 px-4 lg:px-0">
            <p>&copy; {currentYear} UnitedAgro. All Rights Reserved.</p>
            <div className="flex items-center gap-2 bg-green-100/10 border border-green-300/20 px-4 py-2 rounded-full text-green-300 text-sm font-medium">
              <Leaf size={16} />
              <span>Committed to Sustainable Practices</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

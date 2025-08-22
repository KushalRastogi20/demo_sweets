export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-red-800 text-2xl font-bold">🍯</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">त्रिवेदी Mishthan Bhandar</h3>
                <p className="text-yellow-200 text-sm">Nawabi Sweets</p>
              </div>
            </div>
            <p className="text-yellow-100 mb-6 leading-relaxed">
              Preserving the royal taste of Lucknow since 1892. Each sweet tells a story of our rich Nawabi heritage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-red-800 hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-red-800 hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-red-800 hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-red-800 hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Story', href: '#heritage' },
                { name: 'Sweet Collection', href: '#sweets' },
                { name: 'Special Offers', href: '#offers' },
                { name: 'Bulk Orders', href: '#bulk' },
                { name: 'Gift Boxes', href: '#gifts' },
                { name: 'Catering Services', href: '#catering' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-yellow-100 hover:text-yellow-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Visit Our Shop</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl mt-1">📍</span>
                <div>
                  <p className="text-yellow-100 font-medium">Main Store</p>
                  <p className="text-yellow-200 text-sm leading-relaxed">
                    123, Chowk Market,<br />
                    Old Lucknow, UP 226003<br />
                    Near Imambara
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl mt-1">📞</span>
                <div>
                  <p className="text-yellow-100 font-medium">Call Us</p>
                  <p className="text-yellow-200 text-sm">+91 95xxxxx101</p>
                  <p className="text-yellow-200 text-sm">+91 95xxxxx102</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl mt-1">⏰</span>
                <div>
                  <p className="text-yellow-100 font-medium">Shop Hours</p>
                  <p className="text-yellow-200 text-sm">Daily: 8:00 AM - 10:00 PM</p>
                  <p className="text-yellow-200 text-sm">Festivals: 7:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Special Offers */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Stay Updated</h4>
            <p className="text-yellow-100 mb-4 text-sm">
              Get notified about new sweets, special offers, and festival collections!
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-yellow-400/30 text-white placeholder-yellow-200 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-300"
              />
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-red-800 px-4 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300">
                Subscribe 📧
              </button>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-yellow-400/30">
              <p className="text-yellow-300 font-semibold text-sm mb-2">🎉 Festival Special</p>
              <p className="text-yellow-100 text-xs">
                20% off on Raksha Bandhan gift boxes. Use code: <span className="font-bold">RAKHI20</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-yellow-400/20"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-yellow-200 text-sm">
              © 2025 Nawabi Sweets. All rights reserved. | 
              <span className="text-yellow-300 font-semibold"> Established 1892</span>
            </p>
            <p className="text-yellow-300 text-xs mt-1">
              Made with ❤️ in लखनऊ (Lucknow)
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 text-xs text-yellow-200">
            <div className="flex items-center space-x-1">
              <span>🏆</span>
              <span>Award Winner</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>✅</span>
              <span>FSSAI Certified</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🚚</span>
              <span>Home Delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>💳</span>
              <span>All Payments</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6 text-xs text-yellow-200">
            <a href="#privacy" className="hover:text-yellow-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-yellow-300 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#refund" className="hover:text-yellow-300 transition-colors duration-300">
              Refund Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div> */}
    </footer>
  )
}

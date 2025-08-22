export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-orange-400 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-red-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-4 border-yellow-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-16 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block text-red-800">Royal Taste of</span>
                <span className="block text-orange-600 text-3xl sm:text-4xl lg:text-5xl">
                  लखनऊ की मिठास
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience the authentic flavors of <span className="font-semibold text-orange-700">Nawabi heritage</span> 
                with our traditional Lucknowi sweets, crafted with the same recipes since <span className="font-bold">1892</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-red-700 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-800 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Order Now 🛒
                </button>
                <button className="border-2 border-orange-600 text-orange-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                  Our Story 📖
                </button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="text-3xl font-bold text-red-700">130+</div>
                  <div className="text-sm text-gray-600">Years of Heritage</div>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Varieties</div>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <div className="text-3xl font-bold text-yellow-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="animate-float">
              <div className="relative bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                      🍯
                    </div>
                    <h3 className="font-semibold text-center text-gray-800">Doodh ki barfi</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                      🔴
                    </div>
                    <h3 className="font-semibold text-center text-gray-800">Gulab Jamun</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                      🟡
                    </div>
                    <h3 className="font-semibold text-center text-gray-800">Shahi Tukda</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                      🟢
                    </div>
                    <h3 className="font-semibold text-center text-gray-800">Kaju Katli</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

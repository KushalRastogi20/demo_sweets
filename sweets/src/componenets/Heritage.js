export default function Heritage() {
  return (
    <section id="heritage" className="py-20 bg-gradient-to-r from-red-900 to-orange-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-yellow-300">Nawabi</span> Heritage
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto animate-expand"></div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="bg-yellow-100 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center text-6xl animate-pulse">
                    🏛️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Est. 1892</h3>
                  <p className="text-gray-700">
                    Founded during the British era in the heart of old Lucknow, 
                    preserving authentic Nawabi recipes for five generations.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-yellow-400 text-3xl mr-3">👑</span>
                Royal Legacy
              </h3>
              <p className="text-lg text-yellow-100 leading-relaxed">
                Our recipes were once served in the royal kitchens of the Nawabs of Awadh. 
                Each sweet carries the essence of <em>tehzeeb</em> (etiquette) and <em>nafasat</em> (elegance) 
                that Lucknow is famous for.
              </p>
            </div>

            <div className="animate-fade-in-right" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-yellow-400 text-3xl mr-3">🎨</span>
                Artisanal Craftsmanship
              </h3>
              <p className="text-lg text-yellow-100 leading-relaxed">
                Every sweet is handcrafted using traditional techniques passed down through generations. 
                We use only the finest ingredients - pure ghee, fresh milk, saffron, and dry fruits.
              </p>
            </div>

            <div className="animate-fade-in-right" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-yellow-400 text-3xl mr-3">🌟</span>
                Modern Excellence
              </h3>
              <p className="text-lg text-yellow-100 leading-relaxed">
                While we preserve traditional methods, we've embraced modern hygiene standards 
                and packaging techniques to bring you the authentic taste with contemporary convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

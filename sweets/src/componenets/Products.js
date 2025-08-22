const products = [
  {
    name: "Doodh ki barfi",
    description: "Delicate layers of cream folded like paan, infused with saffron",
    price: "₹350/kg",
    specialty: "Our Signature",
    emoji: "🥛"
  },
  {
    name: "Shahi Tukda",
    description: "Royal bread pudding with rich rabri and dry fruits",
    price: "₹280/kg",
    specialty: "Nawabi Special",
    emoji: "👑"
  },
  {
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in aromatic sugar syrup",
    price: "₹320/kg",
    specialty: "Classic Favorite",
    emoji: "🔴"
  },
  {
    name: "Kaju Katli",
    description: "Diamond-cut cashew fudge with edible silver leaf",
    price: "₹800/kg",
    specialty: "Premium Choice",
    emoji: "💎"
  },
  {
    name: "Sheermal",
    description: "Traditional saffron-flavored sweet bread",
    price: "₹200/kg",
    specialty: "Heritage Recipe",
    emoji: "🍞"
  },
  {
    name: "Makhan Malai",
    description: "Creamy white dessert garnished with pistachios",
    price: "₹400/kg",
    specialty: "Seasonal Special",
    emoji: "☁️"
  }
]

export default function Products() {
  return (
    <section id="sweets" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our <span className="text-orange-600">Sweet</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each sweet tells a story of tradition, crafted with love and perfected over generations
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6 animate-expand"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </div>
                  <span className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.specialty}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Complete Menu 📋
          </button>
        </div>
      </div>
    </section>
  )
}

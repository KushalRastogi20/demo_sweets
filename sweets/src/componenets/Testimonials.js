"use client"
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "आपकी मलाई गिलोरी का स्वाद बचपन की यादें दिला देता है! Every bite takes me back to my grandmother's stories of old Lucknow. Simply divine!",
    avatar: "👩‍🦱",
    occasion: "Diwali Order"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Been ordering from Nawabi Sweets for 15 years! The quality has never compromised. Their Shahi Tukda is absolutely royal - just like the Nawabs used to have.",
    avatar: "👨‍💼",
    occasion: "Regular Customer"
  },
  {
    id: 3,
    name: "Fatima Khan",
    location: "Lucknow",
    rating: 5,
    text: "मेरी शादी में नवाबी मिठाई के डिब्बे सबसे ज्यादा पसंद आए! The presentation was royal and taste was heavenly. All guests were asking for the shop's address!",
    avatar: "👰‍♀️",
    occasion: "Wedding Order"
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    location: "Bangalore",
    rating: 5,
    text: "As a Lucknow native living in Bangalore, this shop keeps me connected to my roots. The authentic taste of their sweets is unmatched anywhere else in India!",
    avatar: "👨‍⚕️",
    occasion: "Bulk Order"
  },
  {
    id: 5,
    name: "Meera Agarwal",
    location: "Kolkata",
    rating: 5,
    text: "Ordered for my son's mundan ceremony. The Kaju Katli was so fresh and perfectly made. The silver vark was authentic too! Highly recommended for special occasions.",
    avatar: "👩‍👧‍👦",
    occasion: "Religious Ceremony"
  },
  {
    id: 6,
    name: "Mohammed Alam",
    location: "Hyderabad",
    rating: 5,
    text: "130+ years of tradition shows in every sweet! The packaging was excellent for long-distance delivery. My family in Hyderabad couldn't believe these came from Lucknow!",
    avatar: "🧔‍♂️",
    occasion: "Festival Gift"
  }
]

// Mobile Carousel Component
function MobileCarousel({ items, currentIndex, setCurrentIndex }) {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches.clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((currentIndex + 1) % items.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((currentIndex - 1 + items.length) % items.length)
    }
  }

  return (
    <div className="relative">
      <div 
        className="bg-white rounded-2xl shadow-xl p-6 mx-4 text-center transform transition-transform duration-300"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Avatar */}
        <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
          {items[currentIndex].avatar}
        </div>

        {/* Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(items[currentIndex].rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-sm text-gray-700 italic leading-relaxed mb-4 px-2">
          "{items[currentIndex].text}"
        </blockquote>

        {/* Customer Info */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            {items[currentIndex].name}
          </h4>
          <p className="text-gray-600 text-sm mb-1">📍 {items[currentIndex].location}</p>
          <p className="text-orange-600 font-semibold text-sm">🎉 {items[currentIndex].occasion}</p>
        </div>
      </div>

      {/* Navigation Buttons - Below the card */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}
          className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full text-sm hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-md"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        
        {/* Dots indicator */}
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 scale-125'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
          className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full text-sm hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-md"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      {/* Swipe indicator */}
      <p className="text-center text-gray-400 text-xs mt-2">← Swipe to navigate →</p>
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  if (isMobile) {
    return (
      <section id="testimonials" className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-8 px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our <span className="text-orange-600">Customers</span> Say
            </h2>
            <p className="text-gray-600">Over 130 years of sweet memories</p>
          </div>
          
          <MobileCarousel 
            items={testimonials} 
            currentIndex={currentIndex} 
            setCurrentIndex={setCurrentIndex} 
          />

          {/* Stats for mobile */}
          <div className="flex justify-center space-x-8 mt-8 px-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">10K+</div>
              <div className="text-xs text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 flex items-center justify-center">
                4.9 <span className="text-yellow-500 ml-1 text-lg">⭐</span>
              </div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">50+</div>
              <div className="text-xs text-gray-600">Cities</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop view with properly positioned buttons
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-4 border-orange-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-red-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-orange-600">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Over 130 years of sweet memories and satisfied customers across India
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
          
          {/* Stats */}
          <div className="flex justify-center space-x-12 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">10,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 flex items-center justify-center">
                4.9 <span className="text-yellow-500 ml-1">⭐</span>
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">50+</div>
              <div className="text-sm text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Content container with proper padding for buttons */}
          <div className="mx-12">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transition-all duration-500">
              <div className="text-center">
                {/* Customer Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  {testimonials[currentIndex].avatar}
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic relative max-w-4xl mx-auto">
                  <span className="text-6xl text-orange-200 absolute -top-4 -left-4">"</span>
                  {testimonials[currentIndex].text}
                  <span className="text-6xl text-orange-200 absolute -bottom-8 -right-4">"</span>
                </blockquote>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-2">📍 {testimonials[currentIndex].location}</p>
                  <p className="text-orange-600 font-semibold">🎉 {testimonials[currentIndex].occasion}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Outside content area */}
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 hover:scale-110 transition-all duration-300 shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full hover:from-red-700 hover:to-orange-700 hover:scale-110 transition-all duration-300 shadow-lg z-10"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Own Sweet Memory?</h3>
            <p className="text-xl mb-6 text-yellow-100">
              Join thousands of satisfied customers across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-red-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Order Your Favorites 🛒
              </button>
              <button className="border-2 border-yellow-400 text-yellow-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-red-800 transition-all duration-300">
                Share Your Review ✍️
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

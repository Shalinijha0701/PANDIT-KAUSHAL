import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh & Priya Sharma',
    service: 'Wedding Ceremony',
    rating: 5,
    text: 'Pandit Kaushal made our wedding ceremony absolutely divine. His knowledge of mantras and rituals is exceptional. The 3D animations on his website gave us confidence in his modern approach.',
    location: 'Delhi',
    date: 'November 2024',
    image: '👨‍👩‍👧‍👦'
  },
  {
    id: 2,
    name: 'Amit Gupta',
    service: 'Griha Pravesh',
    rating: 5,
    text: 'Excellent service for our house warming ceremony. Very punctual and performed all rituals with proper explanation. The online booking system made it so convenient.',
    location: 'Gurgaon',
    date: 'October 2024',
    image: '👨‍💼'
  },
  {
    id: 3,
    name: 'Sunita Devi',
    service: 'Satyanarayan Katha',
    rating: 5,
    text: 'Monthly puja service is amazing. Pandit ji comes on time every month and performs the katha beautifully. Very reasonable pricing and genuine person.',
    location: 'Noida',
    date: 'September 2024',
    image: '👩‍🦳'
  },
  {
    id: 4,
    name: 'Tech Solutions Pvt Ltd',
    service: 'Corporate Puja',
    rating: 5,
    text: 'Professional service for our office inauguration. Pandit Kaushal understood our corporate environment and conducted the ceremony perfectly. Highly recommended for businesses.',
    location: 'Cyber City',
    date: 'August 2024',
    image: '🏢'
  },
  {
    id: 5,
    name: 'Meera Joshi',
    service: 'Online Puja',
    rating: 5,
    text: 'During COVID, the online puja service was a blessing. Clear video quality and Pandit ji explained everything step by step. Felt like he was right there with us.',
    location: 'Mumbai',
    date: 'July 2024',
    image: '👩‍💻'
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-maroon mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of families across Delhi NCR
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden rounded-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white/90 backdrop-blur-md p-8 md:p-12 shadow-2xl border border-gold/20"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{testimonials[currentIndex].image}</div>
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <h4 className="text-xl font-semibold text-maroon mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary1 font-medium mb-1">
                    {testimonials[currentIndex].service}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary1 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary1 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary1 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary1 mb-2">500+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary1 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary1 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary1 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
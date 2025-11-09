import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Wedding Ceremonies',
    description: 'Complete Hindu wedding rituals with traditional mantras',
    icon: '💍',
    price: 'From ₹15,000',
    features: ['Vivah Sanskar', 'Saptapadi', 'Kanyadaan', 'Mangal Sutra'],
    duration: '4-6 hours',
    popular: true
  },
  {
    id: 2,
    title: 'Griha Pravesh',
    description: 'House warming ceremony for new homes',
    icon: '🏠',
    price: 'From ₹5,000',
    features: ['Vastu Shanti', 'Ganesh Puja', 'Kalash Sthapana', 'Havan'],
    duration: '2-3 hours',
    popular: false
  },
  {
    id: 3,
    title: 'Satyanarayan Katha',
    description: 'Monthly puja for prosperity and peace',
    icon: '📿',
    price: 'From ₹2,500',
    features: ['Katha Recitation', 'Prasad', 'Aarti', 'Blessing'],
    duration: '1.5-2 hours',
    popular: true
  },
  {
    id: 4,
    title: 'Festival Pujas',
    description: 'Special ceremonies for Hindu festivals',
    icon: '🪔',
    price: 'From ₹3,000',
    features: ['Lakshmi Puja', 'Ganesh Chaturthi', 'Navratri', 'Diwali'],
    duration: '2-4 hours',
    popular: false
  },
  {
    id: 5,
    title: 'Corporate Puja',
    description: 'Office inauguration and business blessings',
    icon: '🏢',
    price: 'From ₹8,000',
    features: ['Office Blessing', 'Ganesh Sthapana', 'Success Mantras', 'Team Blessing'],
    duration: '1-2 hours',
    popular: false
  },
  {
    id: 6,
    title: 'Online Puja',
    description: 'Virtual ceremonies via video call',
    icon: '💻',
    price: 'From ₹1,500',
    features: ['Live Streaming', 'Personal Mantras', 'Digital Prasad', 'Recording'],
    duration: '30-60 minutes',
    popular: true
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-maroon mb-4">
            Our Sacred Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional Hindu ceremonies performed with devotion and authenticity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary1 to-primary2 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-heading text-maroon mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <div className="text-2xl font-bold text-primary1 mb-2">{service.price}</div>
                <div className="text-sm text-gray-500">Duration: {service.duration}</div>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button 
                  className="flex-1 bg-gradient-to-r from-primary1 to-primary2 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const bookingSection = document.getElementById('booking')
                    bookingSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Book Now
                </motion.button>
                <motion.button 
                  className="px-4 py-2 border border-primary1 text-primary1 rounded-lg text-sm font-semibold hover:bg-primary1 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = `Hi, I'd like to know more about ${service.title} service. Can you provide more details?`
                    const whatsappUrl = `https://wa.me/919899381990?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Need a custom ceremony? We can help!</p>
          <motion.button 
            className="bg-gradient-to-r from-maroon to-primary1 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = "Hi, I need a custom puja ceremony. Can we discuss the requirements?"
              const whatsappUrl = `https://wa.me/919899381990?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            Request Custom Puja
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
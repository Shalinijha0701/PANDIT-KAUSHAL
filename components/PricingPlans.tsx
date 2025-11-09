import React, { useState } from 'react'
import { motion } from 'framer-motion'

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: 2500,
    duration: 'Per Ceremony',
    description: 'Perfect for simple pujas and monthly ceremonies',
    features: [
      'Basic puja materials included',
      'Traditional mantras and rituals',
      'Up to 1.5 hours ceremony',
      'WhatsApp support',
      'Basic blessing ceremony'
    ],
    popular: false,
    color: 'from-gray-400 to-gray-600'
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 8500,
    duration: 'Per Ceremony',
    description: 'Most popular choice for weddings and major events',
    features: [
      'Complete puja materials provided',
      'Detailed ritual explanations',
      'Up to 4 hours ceremony',
      'Photography coordination',
      'Personalized mantras',
      'Post-ceremony guidance',
      '24/7 WhatsApp support'
    ],
    popular: true,
    color: 'from-primary1 to-primary2'
  },
  {
    id: 'luxury',
    name: 'Luxury Package',
    price: 15000,
    duration: 'Per Ceremony',
    description: 'Complete premium experience with all amenities',
    features: [
      'Premium puja materials & decorations',
      'Multi-language ceremony options',
      'Full day availability (up to 8 hours)',
      'Professional photography included',
      'Live streaming setup',
      'Personalized ceremony planning',
      'Post-ceremony consultation',
      'Priority booking & support',
      'Digital ceremony recording'
    ],
    popular: false,
    color: 'from-gold to-yellow-600'
  }
]

const monthlyPlans = [
  {
    id: 'monthly-basic',
    name: 'Monthly Basic',
    price: 2000,
    duration: 'Per Month',
    description: 'Regular monthly puja service',
    features: [
      'One puja per month',
      'Satyanarayan Katha',
      'Basic materials included',
      'Fixed date scheduling'
    ],
    savings: '₹500 saved per month'
  },
  {
    id: 'monthly-premium',
    name: 'Monthly Premium',
    price: 5000,
    duration: 'Per Month',
    description: 'Enhanced monthly service with flexibility',
    features: [
      'Two pujas per month',
      'Choice of ceremony type',
      'Premium materials included',
      'Flexible scheduling',
      'Festival puja included'
    ],
    savings: '₹1,500 saved per month'
  }
]

export default function PricingPlans() {
  const [activeTab, setActiveTab] = useState<'single' | 'monthly'>('single')

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
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect package for your spiritual needs
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-white/80 backdrop-blur-md rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('single')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'single'
                  ? 'bg-primary1 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary1'
              }`}
            >
              Single Ceremony
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'monthly'
                  ? 'bg-primary1 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary1'
              }`}
            >
              Monthly Plans
            </button>
          </div>
        </motion.div>

        {activeTab === 'single' ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl border-2 ${
                  plan.popular ? 'border-primary1 scale-105' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary1 to-primary2 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading text-maroon mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary1">₹{plan.price.toLocaleString()}</span>
                    <span className="text-gray-500 ml-2">/ {plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-3 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const message = `Hi, I'm interested in the ${plan.name} (₹${plan.price}). Can we discuss the details?`
                    const whatsappUrl = `https://wa.me/919899381990?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  Choose {plan.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {monthlyPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading text-maroon mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary1">₹{plan.price.toLocaleString()}</span>
                    <span className="text-gray-500 ml-2">/ {plan.duration}</span>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">{plan.savings}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-3 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-primary1 to-primary2 hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const message = `Hi, I'm interested in the ${plan.name} (₹${plan.price}/month). Can we set up a monthly service?`
                    const whatsappUrl = `https://wa.me/919899381990?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  Start Monthly Service
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16 bg-white/60 backdrop-blur-md p-8 rounded-xl max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading text-maroon mb-4">Need Something Custom?</h3>
          <p className="text-gray-600 mb-6">
            Every ceremony is unique. We offer customized packages based on your specific requirements, 
            location, and duration. Contact us for a personalized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="bg-gradient-to-r from-maroon to-primary1 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const message = "Hi, I need a custom puja package. Can we discuss my requirements?"
                const whatsappUrl = `https://wa.me/919899381990?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              Get Custom Quote
            </motion.button>
            <motion.button 
              className="border-2 border-primary1 text-primary1 px-6 py-3 rounded-lg font-semibold hover:bg-primary1 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const bookingSection = document.getElementById('booking')
                bookingSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
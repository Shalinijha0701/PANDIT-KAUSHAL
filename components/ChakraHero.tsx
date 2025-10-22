import React from 'react'
import { motion, Variants, HTMLMotionProps, MotionProps } from 'framer-motion'
import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from 'react'

// Define types for our motion components
type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;
type MotionImageProps = MotionProps & ImgHTMLAttributes<HTMLImageElement>;
type MotionHeadingProps = MotionProps & HTMLAttributes<HTMLHeadingElement>;
type MotionParaProps = MotionProps & HTMLAttributes<HTMLParagraphElement>;

// Create typed motion components
const MotionDiv = motion.div as React.FC<MotionDivProps>;
const MotionImg = motion.img as React.FC<MotionImageProps>;
const MotionHeading = motion.h1 as React.FC<MotionHeadingProps>;
const MotionPara = motion.p as React.FC<MotionParaProps>;

const spokes = Array.from({ length: 24 }).map((_, i) => i);

interface Particle {
  icon: string;
  left: string;
  top: string;
  fill: string;
}

const particles: Particle[] = [
  { icon: 'M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z', left: '80%', top: '10%', fill: '#FF6B35' },
  { icon: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z', left: '15%', top: '70%', fill: '#F7931E' },
  { icon: 'M12 2L14 6.5L12 11L10 6.5L12 2Z', left: '75%', top: '85%', fill: '#D4AF37' }
];

const deityAnimation: Variants = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: [-10, 0, -10],
    opacity: 1,
    transition: {
      y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      opacity: { duration: 1.5, ease: 'easeOut' }
    }
  }
}

const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const particleVariants: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: [-20, 20],
    opacity: [0.2, 0.6, 0.2],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export default function ChakraHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="chakra-container">
        <div className="chakra-outer">
          <div className="chakra-inner" />

          <div className="chakra-main" aria-hidden>
            <div className="glow-layer-1" />
            <div className="glow-layer-2" />
            <div className="glow-layer-3" />

            {spokes.map((i) => (
              <span
                key={i}
                className="chakra-spoke"
                style={{ transform: `rotate(${15 * i}deg) translate(-50%, -50%)` }}
              />
            ))}

            <div className="chakra-center" />

            <MotionImg
              src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/edd6017f-b708-46a2-97ff-22965744932f.png"
              alt="Ganesha artwork"
              className="deity-ganesha"
              variants={deityAnimation}
              initial="initial"
              animate="animate"
            />

            <div className="chakra-secondary" style={{ left: '10%', top: '10%' }}>
              {/* Secondary chakra with counter-rotation */}
              <div className="glow-layer-1" style={{ opacity: 0.4 }} />
            </div>

            {/* Floating particles */}
            {particles.map((particle, index) => (
              <MotionDiv
                key={index}
                className="particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: 48,
                  height: 48
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: [-20, 20],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: index * 2,
                  ease: 'easeInOut'
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={particle.icon} fill={particle.fill} />
                </svg>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="glass-effect absolute left-6 bottom-6 p-6 rounded-lg max-w-xl">
        <MotionHeading
          className="text-4xl md:text-5xl font-heading bg-gradient-to-r from-[#800020] to-[#D4AF37] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Pandit Kaushal
        </MotionHeading>
        <MotionPara
          className="mt-2 text-lg md:text-xl text-[#333]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Premium priest booking with 3D deity animations
        </MotionPara>

        <div className="mt-6 flex flex-col space-y-3">
          <a
            href="https://wa.me/919899381990"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg text-[#25D366] hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>+91 9899381990</span>
          </a>

          <a
            href="mailto:Jhakaushal1979@gmail.com"
            className="flex items-center space-x-2 text-lg text-deep-saffron hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Jhakaushal1979@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}

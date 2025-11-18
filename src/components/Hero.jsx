import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_80%_0%,rgba(244,114,182,0.25),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(248,180,176,0.25),transparent)]"/>

      {/* 3D Scene (lightweight via Spline embed) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-90 pointer-events-none">
        <Spline scene="https://prod.spline.design/0V1aH6c7WbKkG6r8/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900"
          >
            Holistic Facial Therapy for Radiant, Calm Skin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            Personalized treatments blending lymphatic massage, sculpting techniques, and clean skincare to restore your glow from within.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#booking" className="px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Book a Session
            </a>
            <a href="#services" className="px-6 py-3 rounded-full bg-white/70 backdrop-blur border hover:bg-white">
              Explore Treatments
            </a>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-gray-600"
          >
            <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur border">Non-invasive</span>
            <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur border">Clean, vegan products</span>
            <span className="px-3 py-1 rounded-full bg-white/70 backdrop-blur border">By appointment only</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

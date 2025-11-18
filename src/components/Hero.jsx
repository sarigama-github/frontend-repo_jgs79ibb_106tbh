import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import React from 'react'

// Lazily load Spline only on capable devices and after mount
const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [show3D, setShow3D] = useState(false)

  const prefersReduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    setMounted(true)

    // Defer heavy 3D load to avoid first paint jank
    const t = setTimeout(() => {
      // Only enable on desktop-sized viewports and when user does not prefer reduced motion
      const isDesktop = window.matchMedia('(min-width: 768px)').matches
      setShow3D(isDesktop && !prefersReduceMotion)
    }, 800)

    return () => clearTimeout(t)
  }, [prefersReduceMotion])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_80%_0%,rgba(244,114,182,0.25),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(248,180,176,0.25),transparent)]"/>

      {/* 3D Scene (deferred + desktop only) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-90 pointer-events-none hidden md:block">
        {mounted && show3D ? (
          <React.Suspense fallback={<div className="w-full h-full"/>}>
            <LazySpline scene="https://prod.spline.design/0V1aH6c7WbKkG6r8/scene.splinecode" />
          </React.Suspense>
        ) : (
          // Lightweight placeholder to keep the visual balance while 3D loads or is disabled
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(254,205,211,0.35),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(191,219,254,0.35),transparent_35%)]"/>
        )}
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

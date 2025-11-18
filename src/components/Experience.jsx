import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="experience" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_10%,rgba(217,249,157,0.15),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y }} className="order-2 md:order-1">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white to-white/60 border shadow-lg overflow-hidden">
            <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(254,205,211,0.5),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(191,219,254,0.5),transparent_35%)]"/>
          </div>
        </motion.div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">A multi-sensory calm</h2>
          <p className="mt-4 text-gray-600">
            From the first inhale to the final strokes, every detail is crafted to ease your nervous system. Expect slow breathing, warm towels, and rhythms that lull the face into release.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Quiet, private studio</li>
            <li>• Music tuned for relaxation</li>
            <li>• Skin-first, product-second philosophy</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Sparkles, Droplets, Wind } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Glow Sculpt Facial',
    desc: 'Deep sculpting with buccal massage to lift, tone, and increase circulation.',
    highlight: 'Signature 75 min',
  },
  {
    icon: Droplets,
    title: 'Lymphatic Drainage',
    desc: 'A calming flow to reduce puffiness and support your skin’s natural detox.',
    highlight: 'Detox 45 min',
  },
  {
    icon: Wind,
    title: 'Soothing Cloud',
    desc: 'Ultra-gentle ritual for sensitive skin with cooling tools and barrier support.',
    highlight: 'Calm 60 min',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(253,164,175,0.15),transparent),radial-gradient(600px_300px_at_90%_20%,rgba(147,197,253,0.15),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Treatments</h2>
          <p className="mt-3 text-gray-600">Thoughtfully designed experiences to meet your skin where it is.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border bg-white/70 backdrop-blur p-6 overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-tr from-rose-200 via-pink-100 to-blue-100 blur-2xl opacity-60"/>
              <s.icon className="w-10 h-10 text-gray-700" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-700">
                <span className="px-3 py-1 rounded-full bg-white/80 border">{s.highlight}</span>
                <span className="px-3 py-1 rounded-full bg-white/80 border">Manual massage</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

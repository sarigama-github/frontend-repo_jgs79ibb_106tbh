import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('Glow Sculpt Facial')
  const [date, setDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_90%,rgba(147,197,253,0.2),transparent)]"/>
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Book your session</h2>
          <p className="mt-3 text-gray-600">Send a request — we’ll confirm availability by email.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="grid sm:grid-cols-2 gap-4 bg-white/70 backdrop-blur p-6 rounded-2xl border"
        >
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-2 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900/20"/>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} required className="mt-2 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900/20"/>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Treatment</label>
            <select value={service} onChange={(e)=>setService(e.target.value)} className="mt-2 w-full px-3 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/20">
              <option>Glow Sculpt Facial</option>
              <option>Lymphatic Drainage</option>
              <option>Soothing Cloud</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input value={date} type="date" onChange={(e)=>setDate(e.target.value)} className="mt-2 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900/20"/>
          </div>
          <div className="sm:col-span-2 mt-2">
            <button className="w-full px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">Request booking</button>
          </div>
          {submitted && (
            <div className="sm:col-span-2 text-center text-sm text-gray-700">
              Thank you, {name.split(' ')[0] || 'friend'} — your request has been received.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

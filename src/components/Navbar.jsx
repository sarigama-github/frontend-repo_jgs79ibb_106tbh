import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Treatments' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#booking', label: 'Book' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-300 via-pink-200 to-amber-200 shadow-inner"/>
          <span className="font-semibold tracking-tight text-gray-800">Lumière Facial Therapy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#booking" className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">Book now</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/60">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 bg-white/70 backdrop-blur-md border-t">
          <div className="flex flex-col gap-3 py-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-700 py-2">
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-full bg-gray-900 text-white text-center">Book now</a>
          </div>
        </div>
      )}
    </header>
  )
}

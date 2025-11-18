export default function Footer() {
  return (
    <footer className="relative py-12 border-t bg-white/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Lumière Facial Therapy. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900">Treatments</a>
          <a href="#booking" className="hover:text-gray-900">Book</a>
          <a href="#" className="hover:text-gray-900">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

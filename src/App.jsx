import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Experience from './components/Experience'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import GetInvolved from './components/GetInvolved'
import ForBusinesses from './components/ForBusinesses'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Impact />
        <GetInvolved />
        <ForBusinesses />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

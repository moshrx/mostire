import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import PrivacyPolicy from './components/PrivacyPolicy'
import Terms from './components/Terms'

// Lightweight hash routing: legal pages live at #/privacy and #/terms.
// Everything else (including #section anchors) shows the home page.
function useHashRoute() {
  const read = () => (typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') : '')
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onChange = () => setRoute(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

function App() {
  const route = useHashRoute()

  if (route === '/privacy') return <PrivacyPolicy />
  if (route === '/terms') return <Terms />

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Mos Tire Wholesale | Wholesale Tires in Charlottetown, PEI</title>
        <meta
          name="description"
          content="Mos Tire Wholesale is a direct tire importer in Charlottetown, PEI, serving all of Atlantic Canada. Wholesale prices on all-season, winter, performance & truck tires. Free local delivery on 4+ tires within 60km of Charlottetown. Call or text 902-992-2664."
        />
        <link rel="canonical" href="https://mostire.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mostire.ca/" />
        <meta property="og:title" content="Mos Tire Wholesale | Wholesale Tires in Charlottetown, PEI" />
        <meta property="og:description" content="Direct tire importer serving all of Atlantic Canada. Wholesale prices, free local delivery on 4+ tires within 60km of Charlottetown. Call or text 902-992-2664." />
        <meta property="og:image" content="https://mostire.ca/mostire-logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-page text-ink theme-fade overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Brands />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  )
}

export default App

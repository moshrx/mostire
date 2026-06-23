import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '/mostire-logo.jpeg'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'How to Order', href: '#how-to-order' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    // Wait for the mobile menu collapse animation to finish before scrolling,
    // otherwise the page height is still shrinking and the target lands wrong.
    const scrollToTarget = () => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    if (menuOpen) {
      setTimeout(scrollToTarget, 350)
    } else {
      scrollToTarget()
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-page/90 backdrop-blur-md shadow-[0_4px_24px_rgba(8,12,20,0.12)] border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — official Mos Tire Wholesale mark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3 group"
            aria-label="Mos Tire Wholesale, back to top"
          >
            <span className="block h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-line shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="Mos Tire Wholesale"
                className="h-full w-full object-cover"
                style={{ transform: 'scale(1.7) translateY(4%)', transformOrigin: 'center' }}
                width="56"
                height="56"
              />
            </span>
            <div className="leading-tight">
              <span
                className="block text-ink font-extrabold text-lg md:text-xl tracking-tight"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                Mos Tire
              </span>
              <span
                className="block text-[#e4322b] text-[10px] tracking-[0.18em] uppercase font-semibold"
              >
                Wholesale
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-ink-soft hover:text-ink text-[15px] font-medium transition-colors relative group/link"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e4322b] transition-all duration-300 group-hover/link:w-full" />
              </button>
            ))}
            <ThemeToggle />
            <a
              href="tel:9029922664"
              className="whitespace-nowrap bg-[#e4322b] hover:bg-[#ff5a4d] text-white rounded-md font-semibold text-sm px-5 py-2.5 transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4322b]"
              style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
            >
              902-992-2664
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex flex-col gap-1.5 p-2 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4322b]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-panel border-t border-line overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-ink-soft hover:text-[#e4322b] text-2xl font-bold transition-colors"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:9029922664"
                className="text-center bg-[#e4322b] text-white rounded-md font-semibold text-lg py-4 mt-2"
              >
                Call: 902-992-2664
              </a>
              <a
                href="https://wa.me/19029922664"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border-2 border-[#25D366] text-[#25D366] rounded-md font-semibold text-lg py-4"
              >
                WhatsApp Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

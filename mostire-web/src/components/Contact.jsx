import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const tireSizes = [
  'Not sure - help me find the right size',
  '155/80R13', '165/70R14', '175/65R14', '185/65R15', '195/65R15',
  '205/55R16', '215/60R16', '225/50R17', '225/45R17', '235/45R17',
  '245/40R18', '255/45R18', '235/55R18', '265/60R18', '275/55R19',
  '245/40R19', '255/35R19', '275/40R20', '265/50R20', 'Other size',
]

const tireTypes = ['All Season', 'Winter / Snow', 'Summer / Performance', 'All Terrain', 'Truck / SUV', 'Not Sure']

const contactMethods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    title: 'Call or Text',
    value: '902-992-2664',
    link: 'tel:9029922664',
    accent: '#e4322b',
    cta: 'Call Now',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.9 9.9 0 0 0 12.04 2Zm5.79 14.18c-.24.68-1.2 1.26-1.86 1.34-.5.08-1.14.11-1.84-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.98-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36h.56c.18.01.42-.07.66.5.25.6.84 2.07.91 2.22.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.15.46.12.63-.07.19-.21.73-.85.92-1.14.19-.29.39-.24.66-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.13.07.75-.18 1.43Z" />
      </svg>
    ),
    title: 'WhatsApp',
    value: 'Get a quote in minutes',
    link: 'https://wa.me/19029922664',
    accent: '#25D366',
    cta: 'WhatsApp',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Location',
    value: 'Charlottetown, PEI',
    link: null,
    accent: '#818cf8',
    cta: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: 'Business Hours',
    value: 'Open Every Day\n9am–9pm',
    link: null,
    accent: '#f59e0b',
    cta: null,
  },
]

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({
    name: '', phone: '', size: '', type: '', qty: '4', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const quoteMessage = () => (
    `Hi Mos Tire! I'd like a quote.\n\nName: ${form.name}\nPhone: ${form.phone}\nTire Size: ${form.size || 'Not sure'}\nType: ${form.type || 'Not sure'}\nQuantity: ${form.qty}\nMessage: ${form.message || 'None'}`
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(quoteMessage())
    window.open(`https://wa.me/19029922664?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-y bg-panel relative overflow-hidden">
      {/* Strong red top border so section reads clearly from testimonials */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e4322b]" />
      <div className="absolute top-[3px] left-0 right-0 h-16 bg-gradient-to-b from-[#e4322b]/10 to-transparent pointer-events-none" />

      <div className="container-x" ref={ref}>
        <div className="section-head text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-[#e4322b]" />
            <span className="text-[#e4322b] text-xs font-semibold tracking-[0.15em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-[#e4322b]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold text-ink mb-4"
            style={{ fontFamily: 'Sora, system-ui, sans-serif', fontSize: 'clamp(2.25rem, 7vw, 3.75rem)' }}
          >
            Get a <span className="text-[#e4322b]">Free Quote</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-soft text-sm sm:text-base max-w-md" style={{ marginInline: "auto" }}
          >
            Fill in your tire details and send it straight to our WhatsApp. We'll reply fast with the best price on PEI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-ink mb-5"
              style={{ fontFamily: 'Sora, system-ui, sans-serif' }}>
              Reach Us Directly
            </h3>

            {contactMethods.map((item) => (
              <div key={item.title}
                className="card-premium p-4 flex items-start gap-4 group hover:border-line transition-all">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-line text-white/80" style={{ color: item.accent }}>
                  {item.icon}
                </span>
                <div className="flex-1">
                  <p className="text-ink-mute text-xs uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-ink font-semibold text-sm whitespace-pre-line">{item.value}</p>
                  {item.link && item.cta && (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block mt-2 text-xs font-bold tracking-widest uppercase transition-colors"
                      style={{ color: item.accent, fontFamily: 'Sora, system-ui, sans-serif' }}
                    >
                      {item.cta} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="bg-panel border border-[#e4322b]/30 p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#e4322b]/30 bg-[#e4322b]/10 text-[#e4322b]">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-ink mb-3"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}>
                  Almost There!
                </h3>
                <p className="text-ink-soft mb-6 max-w-sm">
                  We opened WhatsApp with your quote details ready to go. Just tap <span className="text-ink font-semibold">Send</span> and we'll reply with your price, usually within the hour. Prefer to call? We're happy to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/19029922664?text=${encodeURIComponent(quoteMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-md font-semibold text-sm px-7 py-4 transition-all hover:bg-[#20bd5a]"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.9 9.9 0 0 0 12.04 2Zm5.79 14.18c-.24.68-1.2 1.26-1.86 1.34-.5.08-1.14.11-1.84-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.98-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36h.56c.18.01.42-.07.66.5.25.6.84 2.07.91 2.22.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.15.46.12.63-.07.19-.21.73-.85.92-1.14.19-.29.39-.24.66-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.13.07.75-.18 1.43Z" />
                    </svg>
                    Open WhatsApp again
                  </a>
                  <a
                    href="tel:9029922664"
                    className="inline-flex items-center justify-center bg-panel-2 text-ink rounded-md font-semibold text-sm px-7 py-4 border border-line transition-all hover:bg-panel-2"
                  >
                    Call 902-992-2664
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-ink-mute text-xs uppercase tracking-widest mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-panel-2 border border-line focus:border-[#e4322b] focus:ring-1 focus:ring-[#e4322b]/40 text-ink px-4 py-3.5 text-sm outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-ink-mute text-xs uppercase tracking-widest mb-2">Phone / Text *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-panel-2 border border-line focus:border-[#e4322b] focus:ring-1 focus:ring-[#e4322b]/40 text-ink px-4 py-3.5 text-sm outline-none transition-all"
                      placeholder="902-555-0100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-ink-mute text-xs uppercase tracking-widest mb-2">Tire Size</label>
                    <select
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      className="w-full bg-panel-2 border border-line focus:border-[#e4322b] focus:ring-1 focus:ring-[#e4322b]/40 text-ink px-4 py-3.5 text-sm outline-none transition-all"
                    >
                      <option value="">Select size...</option>
                      {tireSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-ink-mute text-xs uppercase tracking-widest mb-2">Tire Type</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-panel-2 border border-line focus:border-[#e4322b] focus:ring-1 focus:ring-[#e4322b]/40 text-ink px-4 py-3.5 text-sm outline-none transition-all"
                    >
                      <option value="">Select type...</option>
                      {tireTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-ink-mute text-xs uppercase tracking-widest mb-2">Quantity</label>
                  <div className="flex gap-2">
                    {['1', '2', '4', '8+'].map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, qty: q }))}
                        className={`flex-1 py-2.5 text-sm font-bold border transition-all ${
                          form.qty === q
                            ? 'border-[#e4322b] bg-[#e4322b]/10 text-[#e4322b]'
                            : 'border-line text-ink-soft hover:border-line hover:text-ink'
                        }`}
                        style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                        aria-pressed={form.qty === q}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-ink-mute text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-panel-2 border border-line focus:border-[#e4322b] focus:ring-1 focus:ring-[#e4322b]/40 text-ink px-4 py-3.5 text-sm outline-none transition-all resize-none"
                    placeholder="Any specific brand preferences, vehicle type, or questions..."
                  />
                </div>

                <div className="pt-5 border-t border-line space-y-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-md font-semibold text-base py-4 transition-all duration-200 hover:scale-[1.01]"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.9 9.9 0 0 0 12.04 2Zm5.79 14.18c-.24.68-1.2 1.26-1.86 1.34-.5.08-1.14.11-1.84-.11-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.83-4.21-4.98-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36h.56c.18.01.42-.07.66.5.25.6.84 2.07.91 2.22.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.15.46.12.63-.07.19-.21.73-.85.92-1.14.19-.29.39-.24.66-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.13.07.75-.18 1.43Z" />
                    </svg>
                    Send quote via WhatsApp
                  </button>
                  <a
                    href="tel:9029922664"
                    className="flex w-full items-center justify-center bg-panel-2 hover:bg-panel-2 text-ink rounded-md font-semibold text-sm py-3.5 transition-all border border-line hover:border-line"
                  >
                    Prefer to talk? Call 902-992-2664
                  </a>
                  <p className="text-center text-ink-mute text-xs">
                    Submitting opens WhatsApp with your details ready to send. No account? Just call or text us instead.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-y bg-panel relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container-x">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-[#e4322b]" />
                <span className="text-[#e4322b] text-xs font-semibold tracking-[0.15em] uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="font-black text-ink uppercase leading-none mb-6"
                style={{ fontFamily: 'Sora, system-ui, sans-serif', fontSize: 'clamp(2.25rem, 7vw, 3.75rem)' }}>
                PEI's Premier<br />
                Tire <span className="text-[#e4322b]">Wholesaler</span>
              </h2>

              <p className="text-[#aaa] leading-relaxed mb-4 text-sm sm:text-base">
                Mos Tire Wholesale was founded right here in Charlottetown with a simple mission: give Island drivers access to top-quality tires at prices that used to require a drive to the mainland, or knowing someone in the industry.
              </p>
              <p className="text-[#aaa] leading-relaxed mb-4 text-sm sm:text-base">
                As a direct importer, we cut out every middleman between the factory and your driveway. That means we stock a wide range of major tire brands, from premium performance lines to dependable everyday value, at wholesale prices that retail shops simply can't match.
              </p>
              <p className="text-[#aaa] leading-relaxed mb-8 text-sm sm:text-base">
                We know PEI roads. We know PEI winters. Whether you need summer performance tires or serious winter rubber for our tough Maritime winters, we've got you covered, fast.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { value: '500+', label: 'Tire Models In Stock' },
                  { value: '1000+', label: 'Happy Customers' },
                  { value: 'Same Day', label: 'Quotes Available' },
                  { value: 'PEI Based', label: 'Local Business' },
                ].map((s) => (
                  <div key={s.label} className="card-premium p-4">
                    <p className="text-2xl font-black text-[#e4322b] mb-1"
                      style={{ fontFamily: 'Sora, system-ui, sans-serif' }}>
                      {s.value}
                    </p>
                    <p className="text-xs text-ink-soft uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/mostire-logo.jpeg"
                  alt="Mos Tire Wholesale Logo"
                  className="w-16 h-16 object-cover rounded border border-line"
                />
                <div>
                  <p className="text-ink font-bold text-sm">Mos Tire Wholesale</p>
                  <p className="text-ink-soft text-xs">Charlottetown, Prince Edward Island</p>
                  <p className="text-ink-soft text-xs">902-992-2664</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Service area + Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="space-y-5"
          >
            {/* Service area highlight */}
            <div className="card-premium p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(212,80,60,0.10), transparent 60%)' }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#e4322b]/12 text-[#e4322b]">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-ink-mute text-xs uppercase tracking-widest mb-0.5">Service Area</p>
                    <p className="text-ink font-bold text-lg" style={{ fontFamily: 'Sora, system-ui, sans-serif' }}>
                      Selling across Atlantic Canada
                    </p>
                  </div>
                </div>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Based in Charlottetown, we supply tires to customers all across Atlantic Canada. Free local delivery on orders of 4 or more tires within 60km of Charlottetown; pickup or shipping arranged anywhere else.
                </p>
              </div>
            </div>

            {/* Contact info cards */}
            {[
              {
                icon: '📞',
                label: 'Phone / Text',
                value: '902-992-2664',
                link: 'tel:9029922664',
              },
              {
                icon: '💬',
                label: 'WhatsApp',
                value: 'Message us for fast quotes',
                link: 'https://wa.me/19029922664',
              },
              {
                icon: '🕐',
                label: 'Hours',
                value: 'Open Every Day · 9am–9pm',
              },
            ].map((item) => (
              <div key={item.label} className="card-premium p-4 flex items-center gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-ink-mute text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                  {item.link ? (
                    <a href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-ink font-semibold text-sm hover:text-[#e4322b] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-ink font-semibold text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

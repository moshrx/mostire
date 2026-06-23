import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Mike D.',
    location: 'Charlottetown, PEI',
    rating: 5,
    text: 'Got 4 winter tires delivered to my door the next day. Saved almost $200 compared to the big shops in town. Mos Tire is the real deal. I will never buy tires anywhere else.',
    tire: 'Winter tires',
    initials: 'MD',
    color: '#e4322b',
  },
  {
    id: 2,
    name: 'Sarah T.',
    location: 'Summerside, PEI',
    rating: 5,
    text: 'As a mom with two kids, I needed reliable all-season tires fast before the weather turned. Got a quote via WhatsApp in 10 minutes and had them delivered free the same week. Incredible service.',
    tire: 'All-season tires',
    initials: 'ST',
    color: '#2563eb',
  },
  {
    id: 3,
    name: 'James R.',
    location: 'Cornwall, PEI',
    rating: 5,
    text: 'I run a small landscaping company with 3 trucks. Mos Tire gave me a fleet discount and had all 12 tires sorted in 3 days. Pricing was unbeatable. These guys know their stuff.',
    tire: 'All-terrain truck tires',
    initials: 'JR',
    color: '#15803d',
  },
  {
    id: 4,
    name: 'Kevin L.',
    location: 'Stratford, PEI',
    rating: 5,
    text: 'I was skeptical buying wholesale but the quality is exactly the same. These are legit brand-name tires at prices I would expect to pay if I knew a guy. Well, now I know a guy.',
    tire: 'Performance tires',
    initials: 'KL',
    color: '#9333ea',
  },
  {
    id: 5,
    name: 'Linda M.',
    location: 'Montague, PEI',
    rating: 5,
    text: "Even from Montague, the delivery was fast and free on my 4 tires. The tires were wrapped perfectly, fresh stock. I appreciate that they actually care about the product they're selling.",
    tire: 'All-season tires',
    initials: 'LM',
    color: '#b45309',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-[#e4322b]' : 'text-white/10'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef()
  const inView = useInView(headerRef, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section className="section-y bg-page relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4322b]/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(230,48,34,0.03) 0%, transparent 60%)' }} />

      <div className="container-x">
        <div ref={headerRef} className="section-head text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-[#e4322b]" />
            <span className="text-[#e4322b] text-xs font-semibold tracking-[0.15em] uppercase">
              Reviews
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
            What <span className="text-[#e4322b]">Islanders</span> Say
          </motion.h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mb-10" style={{ marginInline: 'auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card-premium p-8 relative"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: testimonials[active].color }}
              />
              <div className="text-5xl text-[#e4322b]/20 font-black leading-none mb-4"
                style={{ fontFamily: 'Georgia, serif' }}>
                "
              </div>
              <p className="text-ink text-base sm:text-lg leading-relaxed mb-6 font-light">
                {testimonials[active].text}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-ink"
                    style={{ backgroundColor: testimonials[active].color, fontFamily: 'Sora, system-ui, sans-serif', fontSize: '1.1rem' }}
                  >
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="text-ink font-bold text-sm">{testimonials[active].name}</p>
                    <p className="text-ink-mute text-xs">{testimonials[active].location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={testimonials[active].rating} />
                  <p className="text-ink-mute text-xs mt-1 italic">{testimonials[active].tire}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                i === active
                  ? 'w-8 h-2 bg-[#e4322b]'
                  : 'w-2 h-2 rounded-full bg-ink-mute/40 hover:bg-ink-mute/70'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-5 gap-2 max-w-xl" style={{ marginInline: 'auto' }}>
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`p-3 border text-center transition-all duration-200 ${
                i === active ? 'border-[#e4322b]/50 bg-[#e4322b]/10' : 'border-line bg-panel hover:border-line'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-black text-ink text-xs mx-auto mb-1"
                style={{ backgroundColor: t.color, fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                {t.initials}
              </div>
              <p className="text-ink-soft text-[9px] truncate">{t.name.split(' ')[0]}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

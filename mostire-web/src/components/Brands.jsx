import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
  {
    title: 'Premium & Performance',
    desc: 'The top-tier names drivers trust, from leading global manufacturers to proven performance lines.',
    accent: '#e4322b',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 5l5.2 10.6L41 17.3l-8.5 8.3 2 11.7L24 31.8 13.5 37.3l2-11.7L7 17.3l11.8-1.7L24 5Z"
          stroke={c} strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Everyday Value',
    desc: 'Reliable, budget-friendly brands that get the job done without paying mainland retail prices.',
    accent: '#e4322b',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="18" stroke={c} strokeWidth="2.5" />
        <path d="M24 14v20M28.5 18.5c-1-1.6-2.7-2.5-4.5-2.5-2.8 0-5 1.8-5 4s2.2 4 5 4 5 1.8 5 4-2.2 4-5 4c-1.8 0-3.5-.9-4.5-2.5"
          stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Can't Find Your Size?",
    desc: "If it rolls on PEI roads, we can source it. Send us the size and we'll track down the right tire for you.",
    accent: '#e4322b',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="21" cy="21" r="13" stroke={c} strokeWidth="2.5" />
        <path d="M31 31l9 9" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const stats = [
  { value: '12+', label: 'Brands in stock' },
  { value: '500+', label: 'Tire models' },
  { value: 'All', label: 'Sizes & seasons' },
]

const tireTypes = [
  {
    title: 'All Season',
    desc: 'Versatile grip for PEI spring, summer & fall driving.',
    accent: '#e4322b',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="18" stroke={c} strokeWidth="2.5" />
        <circle cx="24" cy="24" r="8" stroke={c} strokeWidth="2.5" />
        <path d="M24 6v8M24 34v8M6 24h8M34 24h8" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Winter / Snow',
    desc: 'Severe-weather rated rubber built for Maritime winters.',
    accent: '#e4322b',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 6v36M9 15l30 18M39 15L9 33" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 6l-4 5M24 6l4 5M24 42l-4-5M24 42l4-5" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Performance',
    desc: 'High-speed handling & dry/wet grip for sport driving.',
    accent: '#e4322b',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M14 34L30 10M20 34l14-22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 38h28" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="33" cy="14" r="3" fill={c} />
      </svg>
    ),
  },
  {
    title: 'Truck / SUV',
    desc: 'Tough all-terrain & highway tires with long tread life.',
    accent: '#22c55e',
    icon: (c) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="6" y="16" width="24" height="14" rx="1.5" stroke={c} strokeWidth="2.5" />
        <path d="M30 20h6l4 6v4h-10V20Z" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="14" cy="34" r="4" stroke={c} strokeWidth="2.5" />
        <circle cx="33" cy="34" r="4" stroke={c} strokeWidth="2.5" />
      </svg>
    ),
  },
]

const steps = [
  {
    num: '01',
    title: 'Send Your Size',
    desc: 'Call, text, or WhatsApp us your tire size, or just snap a photo of your current tire sidewall.',
  },
  {
    num: '02',
    title: 'Get a Fast Quote',
    desc: 'We source it direct at wholesale and send you the best price on PEI, usually within the hour.',
  },
  {
    num: '03',
    title: 'Pickup or Delivery',
    desc: 'Pick up in Charlottetown, or get free delivery to your door on orders of 4 or more tires.',
  },
]

export default function Brands() {
  const headerRef = useRef()
  const inView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="brands"
      className="section-y bg-page relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4322b]/30 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(230,48,34,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-x">
        {/* Header */}
        <div ref={headerRef} className="section-head text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-[#e4322b]" />
            <span
              className="text-[#e4322b] text-xs font-semibold tracking-[0.15em] uppercase"
            >
              What We Carry
            </span>
            <div className="h-px w-12 bg-[#e4322b]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink mb-4"
            style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
          >
            Multiple <span className="text-[#e4322b]">Brands</span>, One Call
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-soft max-w-xl mx-auto text-sm sm:text-base"
            style={{ marginInline: 'auto' }}
          >
            We carry a wide range of tire brands, from premium performance lines to dependable everyday value. As a direct importer, we get you the right tire at a wholesale price, whatever you drive.
          </motion.p>
        </div>

        {/* What we carry — borderless open columns, no boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative pt-6"
            >
              {/* thin top rule that fills red on hover */}
              <span className="absolute top-0 left-0 h-px w-full bg-line" />
              <span className="absolute top-0 left-0 h-px w-10 bg-[#e4322b] transition-all duration-500 group-hover:w-full" />

              <span
                className="block text-xs font-semibold tracking-[0.25em] text-ink-mute mb-5"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                0{i + 1}
              </span>
              <div className="w-10 h-10 mb-4 text-[#e4322b]">{item.icon('currentColor')}</div>
              <h4
                className="text-ink font-bold text-xl mb-2"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                {item.title}
              </h4>
              <p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip — minimal, divider-separated, no box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16 grid grid-cols-3 border-y border-line divide-x divide-line"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-6 sm:py-8 text-center">
              <p
                className="text-4xl sm:text-5xl font-extrabold text-ink leading-none mb-2"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                {s.value}
              </p>
              <p className="text-ink-mute text-xs sm:text-sm uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Tire types we stock */}
        <div className="block-gap">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="subhead-gap text-2xl sm:text-3xl font-extrabold text-ink text-center"
            style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
          >
            Tires for <span className="text-[#e4322b]">Every Season</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto" style={{ marginInline: 'auto' }}>
            {tireTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-start gap-5 border-b border-line pb-8"
              >
                <span
                  className="shrink-0 text-3xl sm:text-4xl font-extrabold leading-none text-white/15 transition-colors duration-300 group-hover:text-[#e4322b]/70 tabular-nums"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                >
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="w-7 h-7 text-[#e4322b]">{type.icon('currentColor')}</span>
                    <h4
                      className="text-ink font-bold text-lg sm:text-xl"
                      style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                    >
                      {type.title}
                    </h4>
                  </div>
                  <p className="text-ink-soft text-sm leading-relaxed">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div id="how-to-order" className="block-gap scroll-mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="subhead-gap text-2xl sm:text-3xl font-extrabold text-ink text-center"
            style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
          >
            How It <span className="text-[#e4322b]">Works</span>
          </motion.h3>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* connecting rail (desktop) */}
            <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4 md:block">
                  {/* numbered node */}
                  <span
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-page text-xl font-extrabold text-ink md:mb-5"
                    style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                  >
                    {step.num}
                    <span className="absolute inset-0 rounded-full ring-1 ring-[#e4322b]/0 transition-all" />
                  </span>
                  <h4
                    className="text-ink font-bold text-lg sm:text-xl md:hidden"
                    style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                  >
                    {step.title}
                  </h4>
                </div>
                <h4
                  className="hidden md:block text-ink font-bold text-xl mb-2"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                >
                  {step.title}
                </h4>
                <p className="text-ink-soft text-sm leading-relaxed md:pr-6">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block-gap text-center"
          >
            <p className="text-ink-soft mb-5 text-sm sm:text-base">
              Know your tire size? Get a wholesale quote in minutes.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#e4322b] hover:bg-[#ff5a4d] text-white rounded-md font-semibold text-sm px-8 py-4 transition-all duration-200 hover:scale-105 glow-red"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                Get a Free Quote
              </button>
              <a
                href="https://wa.me/19029922664"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-md font-semibold text-sm px-8 py-4 transition-all duration-200"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

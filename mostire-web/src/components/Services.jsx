import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function IconTruck({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="4" y="20" width="36" height="22" rx="2" fill={color} opacity="0.9"/>
      <path d="M40 28h12l6 10v4H40V28Z" fill={color} opacity="0.75"/>
      <circle cx="14" cy="46" r="6" fill="#111" stroke={color} strokeWidth="2.5"/>
      <circle cx="14" cy="46" r="2.5" fill={color}/>
      <circle cx="50" cy="46" r="6" fill="#111" stroke={color} strokeWidth="2.5"/>
      <circle cx="50" cy="46" r="2.5" fill={color}/>
      <rect x="10" y="26" width="22" height="12" rx="1" fill="rgba(0,0,0,0.2)"/>
    </svg>
  )
}

function IconDollar({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <circle cx="32" cy="32" r="26" fill={color} opacity="0.15" stroke={color} strokeWidth="2"/>
      <circle cx="32" cy="32" r="20" fill={color} opacity="0.1"/>
      <text x="32" y="42" textAnchor="middle" fontSize="28" fontWeight="900"
        fontFamily="Sora, system-ui, sans-serif" fill={color}>$</text>
      <circle cx="32" cy="32" r="26" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
    </svg>
  )
}

function IconShield({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <path d="M32 6L8 16v18c0 13 12 22 24 24 12-2 24-11 24-24V16L32 6Z"
        fill={color} opacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M22 32l7 7 13-13" stroke={color} strokeWidth="3.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconClock({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <circle cx="32" cy="32" r="24" fill={color} opacity="0.12" stroke={color} strokeWidth="2"/>
      <line x1="32" y1="32" x2="32" y2="16" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="32" y1="32" x2="44" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="3" fill={color}/>
      {[0,90,180,270].map(a => {
        const rad = a * Math.PI / 180
        const x = 32 + Math.cos(rad) * 20
        const y = 32 + Math.sin(rad) * 20
        return <circle key={a} cx={x} cy={y} r="2" fill={color} opacity="0.5"/>
      })}
    </svg>
  )
}

const services = [
  {
    id: 1,
    Icon: IconDollar,
    title: 'Direct Importer',
    subtitle: 'Best Wholesale Prices',
    desc: 'We import directly, so no distributors and no markups. That savings goes straight to you. The lowest tire prices on PEI, guaranteed.',
    accent: '#f59e0b',
    stat: '30%',
    statLabel: 'Below Retail',
  },
  {
    id: 2,
    Icon: IconTruck,
    title: 'Free Delivery',
    subtitle: 'On 4+ Tires',
    desc: 'Order 4 or more tires and we deliver them to your door for free. Within 60km of Charlottetown, usually same or next business day.',
    accent: '#e4322b',
    stat: '60km',
    statLabel: 'Delivery Radius',
  },
  {
    id: 3,
    Icon: IconShield,
    title: 'Quality Guarantee',
    subtitle: 'Fresh Stock Only',
    desc: 'Every tire is inspected before it reaches you. No old inventory. No compromised rubber. Fresh stock with Good Quality.',
    accent: '#22c55e',
    stat: '100%',
    statLabel: 'Inspected',
  },
  {
    id: 4,
    Icon: IconClock,
    title: 'Fast Turnaround',
    subtitle: '7-Day Pickup / Delivery',
    desc: 'Need tires fast? Most orders are ready in 24–72 hours. Arrange pickup in Charlottetown, or schedule home delivery.',
    accent: '#818cf8',
    stat: '24hr',
    statLabel: 'Avg. Ready Time',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex items-stretch overflow-hidden rounded-xl border border-line bg-panel transition-colors duration-300 hover:border-line"
    >
      {/* left accent edge */}
      <span
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
        style={{ backgroundColor: service.accent }}
      />

      {/* Icon side */}
      <div className="flex w-24 sm:w-28 shrink-0 flex-col items-center justify-center gap-3 border-r border-line bg-panel-2 px-4 py-7">
        <div className="w-12 h-12">
          <service.Icon color={service.accent} />
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold leading-none"
          style={{ color: service.accent, fontFamily: 'Sora, system-ui, sans-serif' }}>
          {service.stat}
        </span>
        <span className="text-ink-mute text-[10px] uppercase tracking-widest text-center leading-tight">
          {service.statLabel}
        </span>
      </div>

      {/* Content side */}
      <div className="flex-1 min-w-0 px-5 sm:px-6 py-6">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-1"
          style={{ color: service.accent }}>
          {service.subtitle}
        </p>
        <h3 className="text-ink font-bold text-xl leading-tight mb-2"
          style={{ fontFamily: 'Sora, system-ui, sans-serif' }}>
          {service.title}
        </h3>
        <p className="text-ink-soft text-sm leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef()
  const inView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-y bg-page relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4322b]/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(230,48,34,0.04) 0%, transparent 60%)' }} />

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
              Why Choose Us
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
            The Mos Tire <span className="text-[#e4322b]">Advantage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-soft max-w-lg mx-auto text-sm sm:text-base"
          >
            We're not just a tire shop. We're PEI's only direct tire importer, and that changes everything.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="block-gap bg-panel border border-[#e4322b]/20 p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(230,48,34,0.06) 0%, transparent 70%)' }} />
          <h3 className="font-bold text-ink mb-2 relative z-10"
            style={{ fontFamily: 'Sora, system-ui, sans-serif', fontSize: 'clamp(1.75rem, 5vw, 2.25rem)' }}>
            Ready to Get the Best Price on PEI?
          </h3>
          <p className="text-ink-soft mb-6 relative z-10 text-sm sm:text-base">
            Call or text us with your tire size. We'll give you a quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 relative z-10">
            <a
              href="tel:9029922664"
              className="bg-[#e4322b] hover:bg-[#ff5a4d] text-white rounded-md font-semibold text-sm px-8 py-4 transition-all duration-200 hover:scale-105 glow-red"
              style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
            >
              Call: 902-992-2664
            </a>
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
    </section>
  )
}

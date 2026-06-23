import logo from '/mostire-logo.jpeg'

const footerLinks = {
  'Quick Links': [
    { label: 'What We Carry', href: '#brands' },
    { label: 'How to Order',  href: '#how-to-order' },
    { label: 'Services',      href: '#services' },
    { label: 'About Us',      href: '#about' },
    { label: 'Contact',       href: '#contact' },
  ],
  'Contact': [
    { label: '902-992-2664',          href: 'tel:9029922664' },
    { label: 'WhatsApp',              href: 'https://wa.me/19029922664' },
    { label: 'Charlottetown, PEI',    href: null },
    { label: 'Open Every Day 9am–9pm', href: null },
  ],
}

export default function Footer() {
  const handleNav = (e, href) => {
    if (!href || href.startsWith('http') || href.startsWith('tel:')) return
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-page border-t border-line">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
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
                <p
                  className="text-ink font-extrabold text-xl tracking-tight"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                >
                  Mos Tire
                </p>
                <p
                  className="text-[#e4322b] text-[10px] tracking-[0.18em] uppercase font-bold"
                >
                  Wholesale
                </p>
              </div>
            </div>

            <p className="text-ink-mute text-xs leading-relaxed mb-5">
              PEI's premier direct tire importer. Premium brands, wholesale prices, island-fast delivery from Charlottetown.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:9029922664"
                className="flex items-center gap-2 text-ink hover:text-[#e4322b] transition-colors text-sm font-semibold"
              >
                <span>📞</span> 902-992-2664
              </a>
              <a
                href="https://wa.me/19029922664"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-ink transition-colors text-sm font-semibold"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-ink font-black text-xs tracking-[0.18em] uppercase mb-5"
                style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={(e) => handleNav(e, link.href)}
                        className="text-ink-mute hover:text-[#e4322b] text-xs transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-ink-mute text-xs">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="border-t border-line">
        <div className="container-x py-5 flex flex-col gap-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-mute text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Mos Tire Wholesale. All rights reserved. Charlottetown, PEI, Canada.
            </p>
            <div className="flex items-center justify-center gap-5">
              <a href="#/privacy" className="text-ink-mute hover:text-ink text-xs transition-colors">
                Privacy Policy
              </a>
              <span className="text-ink-mute/40" aria-hidden="true">|</span>
              <a href="#/terms" className="text-ink-mute hover:text-ink text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <p className="text-ink-mute/80 text-xs text-center sm:text-left">
            Developed by{' '}
            <a
              href="https://peiwebstudio.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-soft hover:text-[#e4322b] transition-colors"
            >
              PEI Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

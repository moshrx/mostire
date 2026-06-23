import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * Shared layout for the Privacy Policy and Terms pages.
 * props:
 *   title       - page <h1> and document title
 *   updated     - "last updated" date string
 *   description - meta description
 *   children    - the legal content (sections)
 */
export default function LegalPage({ title, updated, description, children }) {
  // Always land at the top when a legal page opens.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goHome = (e) => {
    e.preventDefault()
    window.location.hash = ''
  }

  return (
    <div className="min-h-screen bg-page">
      <Helmet>
        <title>{title} | Mos Tire Wholesale</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mostire.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} | Mos Tire Wholesale`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://mostire.ca/mostire-logo.jpeg" />
      </Helmet>

      {/* Slim top bar */}
      <header className="border-b border-line bg-page/95 backdrop-blur-md sticky top-0 z-40">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#" onClick={goHome} className="flex items-center gap-2.5 group" aria-label="Mos Tire Wholesale, home">
            <span
              className="text-ink font-extrabold text-lg tracking-tight"
              style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
            >
              Mos Tire
            </span>
            <span className="text-[#e4322b] text-[10px] tracking-[0.18em] uppercase font-semibold">
              Wholesale
            </span>
          </a>
          <a
            href="#"
            onClick={goHome}
            className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink text-sm font-medium transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to site
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container-x" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[#e4322b] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Legal
          </p>
          <h1
            className="text-ink font-extrabold mb-3"
            style={{ fontFamily: 'Sora, system-ui, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {title}
          </h1>
          <p className="text-ink-mute text-sm mb-10">Last updated: {updated}</p>

          <div className="legal-content space-y-8">{children}</div>

          <div className="mt-12 border-t border-line pt-8">
            <a
              href="#"
              onClick={goHome}
              className="inline-flex items-center gap-2 rounded-md bg-[#e4322b] hover:bg-[#ff5a4d] text-white font-semibold text-sm px-6 py-3 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Mos Tire Wholesale
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

/** A titled section within a legal page. */
export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2
        className="text-ink font-bold text-xl sm:text-2xl mb-3"
        style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
      >
        {heading}
      </h2>
      <div className="space-y-3 text-ink-soft text-sm sm:text-[15px] leading-relaxed">
        {children}
      </div>
    </section>
  )
}

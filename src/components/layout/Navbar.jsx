import { useEffect, useState } from 'react'
import logoMark from '../../assets/brand/pauly-presley-mark.svg'

const navigation = [
  { label: 'Buy', href: '#property-search' },
  { label: 'Rent', href: '#property-search' },
  { label: 'Sell', href: '/sell/' },
  { label: 'Neighborhoods', href: '#neighborhoods' },
  { label: 'About', href: '/about.php' },
  { label: 'Contact', href: '/contact.php' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header id="top" className="relative z-50 shrink-0 bg-white">
      <nav
        aria-label="Primary navigation"
        className="site-nav mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a className="group flex shrink-0 items-center gap-3" href="/" aria-label="Pauly Presley Realty home">
          <img
            className="size-12 transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-[1.03]"
            src={logoMark}
            width="48"
            height="48"
            alt=""
          />
          <span className="leading-none">
            <strong className="block text-base font-extrabold tracking-[-0.025em] text-brand-ink sm:text-[18px]">
              Pauly Presley
            </strong>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.28em] text-brand-red uppercase">
              Austin Realty
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="group relative py-3 text-[13px] font-bold tracking-[0.02em] text-neutral-700 transition-colors hover:text-brand-red"
              href={item.href}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            className="rounded-full px-4 py-3 text-xs font-bold text-neutral-700 transition-colors hover:text-brand-red"
            href="/login.php"
          >
            Sign in
          </a>
          <a
            className="rounded-full bg-brand-red px-5 py-3 text-[11px] font-extrabold tracking-[0.04em] text-white uppercase shadow-[0_8px_22px_rgb(196_18_48_/_0.24)] transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="#property-search"
          >
            Search homes
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-neutral-200 text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red xl:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-t border-neutral-100 bg-white shadow-soft transition-all duration-300 xl:hidden ${
          menuOpen ? 'max-h-[560px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-1 px-5 py-5 sm:px-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="rounded-xl px-4 py-3.5 text-sm font-bold text-neutral-700 transition-colors hover:bg-red-50 hover:text-brand-red"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              className="rounded-xl border border-neutral-200 px-4 py-3.5 text-center text-[11px] font-extrabold tracking-[0.05em] text-brand-ink uppercase transition-colors hover:border-brand-red hover:text-brand-red"
              href="/login.php"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </a>
            <a
              className="rounded-xl bg-brand-red px-4 py-3.5 text-center text-[11px] font-extrabold tracking-[0.05em] text-white uppercase shadow-[0_8px_22px_rgb(196_18_48_/_0.2)] transition-colors hover:bg-brand-red-dark"
              href="#property-search"
              onClick={() => setMenuOpen(false)}
            >
              Search homes
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

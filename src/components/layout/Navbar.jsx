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

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/c/Paulypresley/featured', icon: 'youtube' },
  { label: 'X', href: 'https://x.com/paulypresley', icon: 'x' },
  { label: 'Facebook', href: 'https://www.facebook.com/PaulyPresleyRealty', icon: 'facebook' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@paulypresleyrealty', icon: 'tiktok' },
  { label: 'Instagram', href: 'https://www.instagram.com/paulypresleyrealty/', icon: 'instagram' },
]

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="none">
      <path d="M8.2 3.5 10 7.7 7.7 9.5a15.2 15.2 0 0 0 6.8 6.8l1.8-2.3 4.2 1.8v3a1.8 1.8 0 0 1-1.8 1.8A15.3 15.3 0 0 1 3.4 5.3a1.8 1.8 0 0 1 1.8-1.8h3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

function SocialIcon({ name }) {
  if (name === 'youtube') {
    return (
      <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12s0-3.25-.42-4.81a2.7 2.7 0 0 0-1.9-1.91C18 4.83 12 4.83 12 4.83s-6 0-7.68.45a2.7 2.7 0 0 0-1.9 1.91C2 8.75 2 12 2 12s0 3.25.42 4.81a2.7 2.7 0 0 0 1.9 1.91c1.68.45 7.68.45 7.68.45s6 0 7.68-.45a2.7 2.7 0 0 0 1.9-1.91C22 15.25 22 12 22 12Zm-12 3.1V8.9l5.2 3.1-5.2 3.1Z" />
      </svg>
    )
  }

  if (name === 'x') {
    return (
      <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 3H22l-6.77 7.74L23.2 21h-6.24l-4.89-6.39L6.48 21H3.36l7.26-8.3L2.98 3h6.4l4.42 5.84L18.9 3Zm-1.1 16.2h1.73L8.44 4.7H6.59L17.8 19.2Z" />
      </svg>
    )
  }

  if (name === 'facebook') {
    return (
      <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8.5V6.7c0-.78.52-.96.9-.96H17V2.15A28 28 0 0 0 13.94 2C10.9 2 8.82 3.85 8.82 7.25V8.5H6v4h2.82V22H14v-9.5h2.73l.43-4H14Z" />
      </svg>
    )
  }

  if (name === 'tiktok') {
    return (
      <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.6 2h3.1a5.3 5.3 0 0 0 4.2 4.2v3.1a8.2 8.2 0 0 1-4.2-1.2v7.4A6.5 6.5 0 1 1 12.1 9v3.2a3.3 3.3 0 1 0 2.5 3.2V2Z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  )
}

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
      <div className="border-b border-white/15 bg-[#C41230] text-white shadow-[0_1px_0_rgb(0_0_0_/_0.08)]">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-4 text-[10px] font-bold tracking-[0.03em] sm:gap-6 sm:text-[11px]">
            <a className="flex items-center gap-2 transition-colors hover:text-red-300" href="tel:+15125808284">
              <PhoneIcon />
              <span>512-580-8284</span>
            </a>
            <a className="hidden items-center gap-2 text-white/72 transition-colors hover:text-white sm:flex" href="mailto:info@paulypresley.com">
              <MailIcon />
              <span>info@paulypresley.com</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5" aria-label="Pauly Presley Realty social media">
            <span className="mr-2 hidden text-[9px] font-extrabold tracking-[0.16em] text-white/45 uppercase lg:inline">Follow us</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="grid size-6 place-items-center rounded-full text-white/70 transition-all hover:bg-white/10 hover:text-white"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav
        aria-label="Primary navigation"
        className="site-nav mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a className="group flex shrink-0 items-center gap-3" href="/" aria-label="Pauly Presley Realty home">
          <img
            className="size-16 drop-shadow-[0_5px_12px_rgb(196_18_48_/_0.18)] transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-[1.03]"
            src={logoMark}
            width="64"
            height="64"
            alt="Pauly Presley Realty"
          />
          <span className="hidden leading-none sm:block">
            <strong className="block text-[18px] font-extrabold tracking-[-0.025em] text-brand-ink">
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
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
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

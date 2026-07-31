import { useCallback, useEffect, useState } from 'react'
import heroHome from '../../assets/images/hero-austin-home.webp'
import heroInterior from '../../assets/images/hero-austin-interior.webp'
import heroSkyline from '../../assets/images/hero-austin-skyline.webp'

const slides = [
  {
    id: 'austin-home',
    image: heroHome,
    alt: 'Contemporary Austin home framed by mature oak trees at golden hour',
    eyebrow: 'Austin, Texas real estate',
    title: 'Find your place in Austin.',
    description:
      'Current listings, thoughtful guidance, and real neighborhood insight for a move that feels right from the start.',
  },
  {
    id: 'austin-living',
    image: heroInterior,
    alt: 'Bright Austin living room opening onto a leafy private courtyard',
    eyebrow: 'Live beautifully',
    title: 'A home that fits your life.',
    description:
      'Explore design-forward city homes and relaxed neighborhood retreats with an experienced local team beside you.',
  },
  {
    id: 'austin-neighborhoods',
    image: heroSkyline,
    alt: 'Austin neighborhoods and tree canopy with the downtown skyline at dusk',
    eyebrow: 'Local from skyline to side street',
    title: 'Know the city. Love the move.',
    description:
      'Discover the character, value, and opportunity behind Austin’s most sought-after neighborhoods.',
  },
]

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-4 ${direction === 'left' ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15.4 15.4 4.1 4.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="m7 9.5 5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const goToSlide = useCallback((index) => {
    setActiveSlide((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return undefined

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [paused])

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') goToSlide(activeSlide - 1)
    if (event.key === 'ArrowRight') goToSlide(activeSlide + 1)
  }

  const currentSlide = slides[activeSlide]

  return (
    <main className="h-[calc(100dvh-116px)] min-h-0">
      <section
        className="hero-shell relative isolate h-full min-h-0 overflow-hidden bg-neutral-900 text-white"
        aria-label="Featured Austin real estate"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
        }}
        onKeyDown={handleKeyDown}
      >
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <figure
              key={slide.id}
              className={`hero-slide absolute inset-0 m-0 ${index === activeSlide ? 'is-active' : ''}`}
              aria-hidden={index !== activeSlide}
            >
              <img
                className="size-full object-cover"
                src={slide.image}
                alt={index === activeSlide ? slide.alt : ''}
                width="1600"
                height="899"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </figure>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-5 py-7 sm:px-8 lg:px-12">
          <div key={currentSlide.id} className="hero-content w-full max-w-4xl text-center">
            <p className="mb-3 flex items-center justify-center gap-3 text-[10px] font-extrabold tracking-[0.24em] text-white/80 uppercase sm:text-[11px]">
              <span className="h-px w-8 bg-brand-red" />
              {currentSlide.eyebrow}
              <span className="h-px w-8 bg-brand-red" />
            </p>

            <h1 className="hero-title mx-auto max-w-4xl font-black leading-[0.98] tracking-[-0.05em] text-balance">
              {currentSlide.title}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              {currentSlide.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <a
                className="rounded-full bg-brand-red px-5 py-3 text-[10px] font-extrabold tracking-[0.06em] text-white uppercase shadow-[0_10px_25px_rgb(0_0_0_/_0.18)] transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark sm:text-[11px]"
                href="#property-search"
              >
                Explore homes
              </a>
              <a
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[10px] font-extrabold tracking-[0.06em] text-white uppercase backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-brand-ink sm:text-[11px]"
                href="/agents.php"
              >
                Meet our agents
              </a>
            </div>

            <form
              id="property-search"
              className="mx-auto mt-6 flex max-w-4xl flex-col items-stretch rounded-2xl bg-white p-2 text-brand-ink shadow-[0_18px_55px_rgb(0_0_0_/_0.24)] sm:flex-row sm:items-center sm:rounded-full"
              action="https://www.paulypresleyrealty.com/search.php"
              method="get"
              role="search"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="relative flex w-full shrink-0 items-center border-b border-neutral-200 px-3 sm:w-[285px] sm:border-r sm:border-b-0 sm:px-5">
                <span className="sr-only">Listing source</span>
                <select
                  className="w-full appearance-none border-0 bg-transparent py-3 pr-7 text-xs font-extrabold text-brand-ink outline-none sm:text-[13px]"
                  name="feed"
                  defaultValue="abor"
                  aria-label="Listing source"
                >
                  <option value="abor">Austin Board of Realtors</option>
                  <option value="sabor">San Antonio Board of Realtors</option>
                </select>
                <span className="pointer-events-none absolute right-3 text-neutral-500 sm:right-4">
                  <ChevronDownIcon />
                </span>
              </label>

              <label className="min-w-0 flex-1 px-3 text-left sm:px-5">
                <span className="sr-only">Neighborhood, city, or ZIP code</span>
                <input
                  className="w-full border-0 bg-transparent py-3 text-sm font-semibold text-brand-ink outline-none placeholder:text-neutral-400"
                  type="search"
                  name="location"
                  placeholder="Neighborhood, city, or ZIP"
                  aria-label="Neighborhood, city, or ZIP code"
                />
              </label>
              <button
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3.5 text-[10px] font-extrabold tracking-[0.05em] text-white uppercase transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark sm:rounded-full sm:px-6 sm:text-[11px]"
                type="submit"
              >
                <SearchIcon />
                Start search
              </button>
            </form>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-brand-ink"
                aria-label="Show previous slide"
                onClick={() => goToSlide(activeSlide - 1)}
              >
                <ArrowIcon direction="left" />
              </button>

              <div className="flex items-center gap-2" aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}>
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeSlide ? 'w-8 bg-brand-red' : 'w-4 bg-white/55 hover:bg-white'
                    }`}
                    aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                    aria-current={index === activeSlide ? 'true' : undefined}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="grid size-9 place-items-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-brand-ink"
                aria-label="Show next slide"
                onClick={() => goToSlide(activeSlide + 1)}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero

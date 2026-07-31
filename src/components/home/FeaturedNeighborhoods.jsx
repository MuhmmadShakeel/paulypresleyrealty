import { useMemo, useState } from 'react'
import centralAustin from '../../assets/images/central-austin-community.webp'
import downtownAustin from '../../assets/images/downtown-austin-condo.webp'
import eastAustin from '../../assets/images/east austin.webp'
import westAustin from '../../assets/images/west austin.webp'

const neighborhoods = [
  {
    name: 'West Austin',
    category: 'Established',
    image: westAustin,
    alt: 'Classic West Austin residence surrounded by mature trees',
    description:
      "One of Austin's most established areas, known for beautiful homes, respected schools, scenic streets, shopping, and outdoor escapes.",
    href: '/west-austin/',
  },
  {
    name: 'Central Austin',
    category: 'Connected',
    image: centralAustin,
    alt: 'Distinctive contemporary home in Central Austin',
    description:
      'Close to downtown and full of character, Central Austin combines walkable pockets, local favorites, and effortless city access.',
    href: '/central-austin/',
  },
  {
    name: 'East Austin',
    category: 'Creative',
    image: eastAustin,
    alt: 'Colorful modern residence in East Austin',
    description:
      'A creative, fast-growing part of the city shaped by local food, art, entertainment, modern homes, and deep neighborhood culture.',
    href: '/east-austin/',
  },
  {
    name: 'Downtown Austin',
    category: 'Urban',
    image: downtownAustin,
    alt: 'Modern loft-style condo in Downtown Austin',
    description:
      "Live near Austin's restaurants, employers, music, and nightlife with a polished urban lifestyle and the city at your doorstep.",
    href: '/downtown-austin/',
  },
]

const filters = ['All', 'Established', 'Connected', 'Creative', 'Urban']

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15.4 15.4 4.1 4.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function FeaturedNeighborhoods() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const visibleNeighborhoods = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return neighborhoods.filter((neighborhood) => {
      const matchesQuery =
        !normalizedQuery ||
        neighborhood.name.toLowerCase().includes(normalizedQuery) ||
        neighborhood.description.toLowerCase().includes(normalizedQuery)
      const matchesCategory = category === 'All' || neighborhood.category === category

      return matchesQuery && matchesCategory
    })
  }, [category, query])

  return (
    <section id="neighborhoods" className="bg-white px-5 pb-16 pt-9 sm:px-8 sm:pb-20 sm:pt-11 lg:px-12 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-brand-ink sm:text-4xl lg:text-[44px]">
            Featured Neighborhoods
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
            Find the Austin neighborhood that matches your pace, priorities, and sense of home.
          </p>
        </header>

        <div className="mt-7" data-aos="fade-up" data-aos-delay="80">
          <form
            className="mx-auto flex max-w-2xl items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_12px_38px_rgb(20_20_24_/_0.07)] sm:rounded-full"
            role="search"
            aria-label="Search featured neighborhoods"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="flex min-w-0 flex-1 items-center gap-3 px-3 sm:px-4">
              <SearchIcon />
              <span className="sr-only">Search neighborhoods</span>
              <input
                className="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm font-semibold text-brand-ink outline-none placeholder:text-neutral-400"
                type="search"
                value={query}
                placeholder="Search a neighborhood"
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <button
              className="rounded-xl bg-brand-red px-4 py-3 text-[10px] font-extrabold tracking-[0.05em] text-white uppercase transition-all duration-300 hover:bg-brand-red-dark sm:rounded-full sm:px-5 sm:text-[11px]"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="mt-4 flex flex-col items-center gap-2.5">
            <span className="text-[9px] font-extrabold tracking-[0.16em] text-neutral-400 uppercase">Filter by lifestyle</span>
            <div className="flex max-w-full flex-wrap justify-center gap-2" role="group" aria-label="Filter neighborhoods by lifestyle">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-[10px] font-extrabold tracking-[0.04em] transition-all duration-300 ${
                    category === filter
                      ? 'border-brand-red bg-brand-red text-white shadow-[0_7px_18px_rgb(196_18_48_/_0.2)]'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-red-200 hover:bg-red-50 hover:text-brand-red'
                  }`}
                  aria-pressed={category === filter}
                  onClick={() => setCategory(filter)}
                >
                  {filter === 'All' ? 'All neighborhoods' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {visibleNeighborhoods.length > 0 ? (
          <div className="mt-8 grid auto-rows-fr justify-items-center gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleNeighborhoods.map((neighborhood, index) => (
              <article
                key={neighborhood.name}
                className="neighborhood-card group flex h-[370px] w-full max-w-[300px] flex-col overflow-hidden rounded-[22px] border border-neutral-200 bg-white shadow-[0_10px_30px_rgb(20_20_24_/_0.07)]"
                data-aos="fade-up"
                data-aos-delay={100 + index * 160}
                data-aos-duration="700"
              >
                <a className="relative block h-40 shrink-0 overflow-hidden" href={neighborhood.href}>
                  <img
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    src={neighborhood.image}
                    alt={neighborhood.alt}
                    width="640"
                    height="420"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1.5 text-[9px] font-extrabold tracking-[0.12em] text-brand-red uppercase shadow-sm backdrop-blur-sm">
                    {neighborhood.category}
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-black tracking-[-0.035em] text-brand-ink">
                    {neighborhood.name}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-[13px] leading-5.5 text-neutral-500">{neighborhood.description}</p>
                  <a
                    className="neighborhood-card-action mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-[10px] font-extrabold tracking-[0.08em] text-white uppercase shadow-[0_8px_18px_rgb(196_18_48_/_0.16)] hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                    href={neighborhood.href}
                    aria-label={`Learn more about ${neighborhood.name}`}
                  >
                    Learn more
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-red-200 bg-red-50 px-6 py-12 text-center">
            <p className="text-sm font-bold text-brand-red">No neighborhoods match those filters.</p>
            <button
              className="mt-3 text-xs font-extrabold text-brand-ink underline decoration-red-300 underline-offset-4"
              type="button"
              onClick={() => {
                setQuery('')
                setCategory('All')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedNeighborhoods

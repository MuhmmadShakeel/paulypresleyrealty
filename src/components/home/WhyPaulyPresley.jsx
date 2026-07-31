function ClientsIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="23" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 25c.8-5 3.3-7.5 7.5-7.5s6.7 2.5 7.5 7.5M19 19c4.5-.8 7.2 1.2 8.2 5.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

function ExpertIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 32 32" fill="none">
      <path d="M7 14.5 16 7l9 7.5V26H7V14.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M12.5 26v-7h7v7M23.5 7.5l1.2 2.3 2.6.4-1.9 1.8.5 2.6-2.4-1.2-2.3 1.2.4-2.6-1.8-1.8 2.6-.4 1.1-2.3Z" fill="currentColor" />
    </svg>
  )
}

function ToolsIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20 7 7M11 14l2 2 4.5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M25 5v4M23 7h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

const differentiators = [
  {
    title: 'Focused on Buyers, Sellers & Tenants',
    Icon: ClientsIcon,
    description:
      "Austin's competitive market can make finding the right home feel difficult. We help buyers and tenants compare options based on their goals, while guiding sellers with clear, locally informed recommendations.",
    detail:
      'Whether renting an apartment, buying a home, or preparing to sell, clients receive purposeful guidance and focused negotiation at every step.',
  },
  {
    title: 'Offered by Expert Austin Realtors',
    Icon: ExpertIcon,
    description:
      'Our team combines Austin market knowledge, responsive communication, and connections across the city—including insight into select opportunities that may not yet appear on the MLS.',
    detail:
      'We focus negotiations on long-term value and provide a smoother, more informed experience throughout the transaction.',
  },
  {
    title: 'Paired With the Best Tools',
    Icon: ToolsIcon,
    description:
      'Outdated information wastes time. Our listing tools are refreshed daily so clients can search current homes and make decisions using timely, useful property information.',
    detail:
      'Focused search tools and local agent insight work together to keep each home search accurate, efficient, and easier to manage.',
  },
]

function CardNetwork() {
  return (
    <svg
      className="why-card-network"
      viewBox="0 0 320 210"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMax meet"
    >
      <g className="why-network-lines">
        <path d="M8 188 82 128l67 34 62-92 101 39" />
        <path d="m82 128 11-78 56 112 19-142" />
        <path d="m149 162 89 26 74-79" />
        <path d="m211 70 27 118" />
      </g>
      <g className="why-network-nodes">
        <circle cx="82" cy="128" r="4.5" />
        <circle cx="93" cy="50" r="3" />
        <circle cx="149" cy="162" r="5" />
        <circle cx="168" cy="20" r="3.5" />
        <circle cx="211" cy="70" r="4.5" />
        <circle cx="238" cy="188" r="3.5" />
        <circle cx="312" cy="109" r="4" />
      </g>
    </svg>
  )
}

function handleCardPointerMove(event) {
  if (event.pointerType === 'touch') return

  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const pointerX = (event.clientX - bounds.left) / bounds.width
  const pointerY = (event.clientY - bounds.top) / bounds.height

  card.style.setProperty('--rotate-x', `${(0.5 - pointerY) * 7}deg`)
  card.style.setProperty('--rotate-y', `${(pointerX - 0.5) * 7}deg`)
  card.style.setProperty('--network-x', `${(0.5 - pointerX) * 8}px`)
  card.style.setProperty('--network-y', `${(0.5 - pointerY) * 8}px`)
}

function resetCardPosition(event) {
  const card = event.currentTarget
  card.style.setProperty('--rotate-x', '0deg')
  card.style.setProperty('--rotate-y', '0deg')
  card.style.setProperty('--network-x', '0px')
  card.style.setProperty('--network-y', '0px')
}

function WhyPaulyPresley() {
  return (
    <section
      className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-24 lg:pt-14"
      aria-labelledby="why-pauly-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <header className="max-w-3xl" data-aos="fade-up">
          <p className="flex items-center gap-3 text-[10px] font-extrabold tracking-[0.22em] text-brand-red uppercase">
            <span className="h-px w-9 bg-brand-red" />
            What sets us apart
          </p>
          <h2 id="why-pauly-title" className="mt-3 text-3xl font-black tracking-[-0.045em] text-brand-ink sm:text-4xl lg:text-[44px]">
            Pauly Presley Realty is…
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
            Local representation built around the people, expertise, and tools that make an Austin real-estate move feel clear.
          </p>
        </header>

        <div className="why-card-grid mt-9 grid gap-6 md:grid-cols-3">
          {differentiators.map(({ title, Icon, description, detail }, index) => (
            <div
              key={title}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={100 + index * 150}
            >
              <article
                className="why-card relative h-full min-h-[390px] overflow-hidden rounded-[26px] border border-neutral-200/80 bg-white/95 p-6 outline-none sm:p-7 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4"
                tabIndex="0"
                onPointerMove={handleCardPointerMove}
                onPointerLeave={resetCardPosition}
                onBlur={resetCardPosition}
              >
                <CardNetwork />

                <div className="why-card-content relative z-10 flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <span className="why-card-icon grid size-14 place-items-center rounded-2xl bg-red-50 text-brand-red shadow-[0_10px_28px_rgb(196_18_48_/_0.12)]">
                      <Icon />
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black leading-6 tracking-[-0.035em] text-brand-red sm:text-[22px]">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {description}
                  </p>

                  <p className="mt-3 text-[13px] leading-5.5 text-neutral-500">
                    {detail}
                  </p>

                  <span className="mt-auto pt-5">
                    <span className="why-card-accent block h-0.5 w-12 rounded-full bg-brand-red" />
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPaulyPresley

import austinApartmentAerial from '../../assets/images/austinaptaerialview.webp'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="size-4 text-brand-red" viewBox="0 0 24 24" fill="none">
      <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

function AustinRealEstateExperts() {
  return (
    <section
      className="bg-white px-5 pb-16 pt-3 sm:px-8 sm:pb-20 sm:pt-4 lg:px-12 lg:pb-24 lg:pt-6"
      aria-labelledby="austin-experts-title"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-9 md:gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div data-aos="fade-up">
          <p className="flex items-center gap-3 text-[10px] font-extrabold tracking-[0.22em] text-brand-red uppercase">
            <span className="h-px w-9 bg-brand-red" />
            Austin expertise, personal guidance
          </p>

          <h2
            id="austin-experts-title"
            className="mt-4 max-w-2xl text-[2rem] font-black leading-[1.05] tracking-[-0.045em] text-brand-ink sm:text-4xl lg:text-[46px]"
          >
            Real Estate Agents That Get Austin Real Estate
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-6.5 text-neutral-600 sm:text-base sm:leading-7">
            Pauly Presley Realty supports buyers, sellers, renters, and tenants across Austin. We listen carefully to each
            client&apos;s goals and help reduce stress from the first search through closing.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6.5 text-neutral-600 sm:text-base sm:leading-7">
            Our team combines current tools, market insight, and practical guidance around contracts, zoning, property taxes,
            and Central Texas neighborhoods—so you can make informed decisions with confidence.
          </p>

          <div className="mt-6 grid max-w-xl gap-3 text-sm font-bold text-neutral-700 sm:grid-cols-3">
            {['Buyer strategy', 'Seller guidance', 'Rental support'].map((service) => (
              <div key={service} className="flex items-center gap-2">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white shadow-sm">
                  <CheckIcon />
                </span>
                {service}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3.5 text-[11px] font-extrabold tracking-[0.05em] text-white uppercase shadow-[0_9px_22px_rgb(196_18_48_/_0.2)] transition-colors duration-300 hover:bg-brand-red-dark sm:w-auto"
              href="https://www.paulypresleyrealty.com/austin-home-search.php"
            >
              Search Austin homes
              <ArrowIcon />
            </a>
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-[11px] font-extrabold tracking-[0.05em] text-brand-ink uppercase transition-colors duration-300 hover:border-brand-red hover:text-brand-red sm:w-auto"
              href="https://www.paulypresleyrealty.com/austin-apartment-finder.php"
            >
              Find an apartment
            </a>
            <a
              className="inline-flex w-full items-center justify-center rounded-full px-4 py-3.5 text-[11px] font-extrabold tracking-[0.05em] text-brand-red uppercase transition-colors duration-300 hover:text-brand-red-dark sm:w-auto"
              href="/agents.php"
            >
              Meet the team
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[590px] lg:mx-0" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute -bottom-3 -right-3 size-28 rounded-br-[32px] border-b-2 border-r-2 border-brand-red/50 sm:-bottom-4 sm:-right-4" />
          <div className="relative overflow-hidden rounded-[26px] bg-neutral-200 shadow-[0_24px_65px_rgb(20_20_24_/_0.16)]">
            <img
              className="aspect-[3/2] size-full object-cover"
              src={austinApartmentAerial}
              alt="Aerial view of an Austin apartment community with landscaped grounds"
              width="900"
              height="600"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/94 px-4 py-2 text-[9px] font-extrabold tracking-[0.14em] text-brand-ink uppercase shadow-sm backdrop-blur-sm">
              Austin &amp; Central Texas
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default AustinRealEstateExperts

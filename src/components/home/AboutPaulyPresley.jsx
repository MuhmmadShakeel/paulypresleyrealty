function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

const consumerResources = [
  {
    title: 'Consumer Protection Notice',
    description: 'Texas Real Estate Commission',
    href: 'https://www.paulypresleyrealty.com/uploads/shared/documents/CN_1-5_0.pdf',
  },
  {
    title: 'Information About Brokerage Services',
    description: 'Buyer and tenant disclosure',
    href: 'https://www.paulypresleyrealty.com/uploads/agent-1/Information_About_Brokerage_Services_Buyer_Tenant_1_26.pdf',
  },
]

function AboutPaulyPresley() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16" aria-labelledby="about-pauly-title">
      <div className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-10 -top-20 size-72 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute right-20 top-6 size-36 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-full border border-white/8" />
      <div className="pointer-events-none absolute -bottom-16 left-10 size-40 rounded-full border border-white/8" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div className="text-white" data-aos="fade-right">
            <p className="text-[10px] font-extrabold tracking-[0.22em] text-white/70 uppercase">Local since 2005</p>
            <h2 id="about-pauly-title" className="mt-2 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-[44px]">
              About Pauly Presley Realty
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6.5 text-white/82 sm:text-base sm:leading-7">
              Pauly Presley Realty entered the Austin market in 2005 as the city&apos;s real estate, employment, arts, and
              cultural landscape continued to grow. Since then, our team has brought relevant local experience to buyers,
              sellers, renters, and tenants across Austin and the surrounding areas.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6.5 text-white/82 sm:text-base sm:leading-7">
              Our experience includes residential and mixed-use projects, a wide range of transaction types, and connections
              with trusted local professionals who help make each move smoother. We provide responsible guidance from the
              first conversation through the moment a client secures their next Austin home.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-[11px] font-extrabold tracking-[0.05em] text-brand-red uppercase shadow-[0_10px_24px_rgb(72_5_20_/_0.2)] transition-colors duration-300 hover:bg-brand-cream"
                href="/agents.php"
              >
                Meet our team
                <ArrowIcon />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/45 px-5 py-3.5 text-[11px] font-extrabold tracking-[0.05em] text-white uppercase transition-colors duration-300 hover:border-white hover:bg-white hover:text-brand-red"
                href="/contact.php"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <aside aria-labelledby="consumer-resources-title">
            <p className="text-[9px] font-extrabold tracking-[0.18em] text-white/65 uppercase" data-aos="fade-left">
              Required disclosures
            </p>
            <h3
              id="consumer-resources-title"
              className="mt-2 text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl"
              data-aos="fade-left"
              data-aos-delay="40"
            >
              Consumer Resources
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-white/72" data-aos="fade-left" data-aos-delay="80">
              Review official Texas real-estate notices before beginning your transaction.
            </p>

            <ul className="mt-5 grid gap-3.5">
              {consumerResources.map((resource, index) => (
                <li key={resource.title} data-aos="fade-left" data-aos-delay={120 + index * 80}>
                  <a
                    className="group flex items-center gap-4 rounded-2xl border border-white/30 bg-white p-4 shadow-[0_12px_30px_rgb(72_5_20_/_0.16)] transition-transform duration-300 hover:translate-x-1 sm:p-5"
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-red text-[11px] font-black text-white shadow-[0_6px_14px_rgb(196_18_48_/_0.24)]">
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className="block text-sm font-extrabold leading-5 text-brand-ink transition-colors group-hover:text-brand-red">
                        {resource.title}
                      </strong>
                      <span className="mt-1 block text-[11px] font-semibold text-neutral-500">{resource.description}</span>
                    </span>
                    <span className="mt-1 text-brand-red">
                      <ArrowIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
export default AboutPaulyPresley

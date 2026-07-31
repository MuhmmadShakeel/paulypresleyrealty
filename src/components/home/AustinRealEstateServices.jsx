import agentConsultation from '../../assets/images/austin-real-estate-agent-consultation.webp'
import modernHomeInterior from '../../assets/images/austin-modern-home-interior.webp'
import eastAustinHomes from '../../assets/images/east-austin-colorful-homes-aerial.webp'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

const services = [
  {
    eyebrow: 'Search with confidence',
    title: 'Find the Perfect Home With Our Austin Property Search',
    image: modernHomeInterior,
    alt: 'Bright modern Austin home interior with an open living room and kitchen',
    width: 1000,
    height: 667,
    description:
      'Buying or renting in Austin can feel overwhelming. Our property-search tools help you explore current listings and narrow options by price, size, location, and the features that matter most.',
    detail:
      'Create focused searches, compare established neighborhoods and luxury homes, and save the properties you want to revisit.',
    cta: 'Search Austin homes',
    href: 'https://www.paulypresleyrealty.com/austin-home-search.php',
  },
  {
    eyebrow: 'Guidance that stays responsive',
    title: 'Get the Best Deal With Austin Real Estate Experts',
    image: agentConsultation,
    alt: 'Austin real estate professionals reviewing property information together',
    width: 1200,
    height: 800,
    description:
      'Responsive communication and local market knowledge are essential in a changing market. Our Austin Realtors keep clients informed and make complex transaction details easier to understand.',
    detail:
      'From zoning and property taxes to negotiation and closing requirements, the team provides clear guidance throughout the process.',
    cta: 'Meet our agents',
    href: '/agents.php',
  },
  {
    eyebrow: 'Insight for smarter decisions',
    title: 'Make the Most of Your Investment With Expert Insights',
    image: eastAustinHomes,
    alt: 'Aerial view of colorful homes and residential development in East Austin',
    width: 900,
    height: 600,
    description:
      'Sound real-estate decisions begin with useful information. Our resources cover Austin housing trends, neighborhood guidance, financing considerations, and opportunities for buyers.',
    detail:
      'Pair current market insight with experienced agent support to evaluate options, plan financing, and move forward with greater confidence.',
    cta: 'Explore market insights',
    href: 'https://www.paulypresleyrealty.com/blog/',
  },
]

function AustinRealEstateServices() {
  return (
    <section
      className="bg-white px-5 pb-14 pt-6 sm:px-8 sm:pb-18 sm:pt-8 lg:px-12 lg:pb-20 lg:pt-10"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <header className="max-w-3xl" data-aos="fade-up">
          <p className="flex items-center gap-3 text-[10px] font-extrabold tracking-[0.22em] text-brand-red uppercase">
            <span className="h-px w-9 bg-brand-red" />
            Search, guidance, and insight
          </p>
          <h2 id="services-title" className="mt-3 text-3xl font-black tracking-[-0.045em] text-brand-ink sm:text-4xl lg:text-[44px]">
            Support for Every Austin Real Estate Goal
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
            Practical tools and local expertise for finding a home, navigating a transaction, and making informed property decisions.
          </p>
        </header>

        <div className="mt-9 grid gap-12 sm:mt-11 sm:gap-16">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid items-stretch gap-6 md:grid-cols-[minmax(0,0.95fr)_1px_minmax(0,1.05fr)] md:gap-0"
            >
              <div
                className={`overflow-hidden rounded-[24px] bg-neutral-100 shadow-[0_18px_48px_rgb(20_20_24_/_0.12)] ${
                  index === 1 ? 'md:col-start-3 md:row-start-1' : 'md:col-start-1 md:row-start-1'
                }`}
                data-aos={index === 1 ? 'fade-left' : 'fade-right'}
              >
                <img
                  className="aspect-[3/2] size-full object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
                  src={service.image}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}
                  loading="lazy"
                />
              </div>

              <div className="relative hidden h-full w-px bg-brand-red/25 md:col-start-2 md:row-start-1 md:block">
                <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 rounded-full bg-brand-red ring-4 ring-white" />
                <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-brand-red/45" />
              </div>

              <div
                className={`relative flex h-full flex-col justify-center border-t border-brand-red/20 pt-6 md:row-start-1 md:border-t-0 md:pt-0 ${
                  index === 1
                    ? 'md:col-start-1 md:pr-10 lg:pr-14'
                    : 'md:col-start-3 md:pl-10 lg:pl-14'
                }`}
                data-aos={index === 1 ? 'fade-right' : 'fade-left'}
                data-aos-delay={80 + index * 50}
              >
                <p className="text-[9px] font-extrabold tracking-[0.18em] text-brand-red uppercase">{service.eyebrow}</p>
                <h3 className="mt-3 max-w-xl text-2xl font-black leading-[1.08] tracking-[-0.04em] text-brand-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-6.5 text-neutral-600 sm:text-base sm:leading-7">{service.description}</p>
                <p className="mt-3 max-w-xl text-[13px] leading-5.5 text-neutral-500 sm:text-sm sm:leading-6">{service.detail}</p>
                <a
                  className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3.5 text-[11px] font-extrabold tracking-[0.05em] text-white uppercase shadow-[0_9px_22px_rgb(196_18_48_/_0.18)] transition-colors duration-300 hover:bg-brand-red-dark"
                  href={service.href}
                >
                  {service.cta}
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AustinRealEstateServices

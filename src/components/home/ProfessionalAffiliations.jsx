import associationLogos from '../../assets/images/austin-real-estate-industry-associations.webp'

const logoDescription =
  'Austin Board of Realtors, Texas Association of Realtors, U.S. Green Building Council, Austin Chamber, Realtor, and National Association of Realtors'

function ProfessionalAffiliations() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-12" aria-labelledby="affiliations-title">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-[9px] font-extrabold tracking-[0.2em] text-brand-red uppercase">Local connections. Industry perspective.</p>
          <h2 id="affiliations-title" className="mt-2 text-2xl font-black tracking-[-0.04em] text-brand-ink sm:text-3xl">
            Industry &amp; Community Connections
          </h2>
        </header>

        <div
          className="logo-marquee mt-7 overflow-hidden rounded-2xl border border-neutral-100 bg-white py-4"
          role="region"
          aria-label="Industry and community organization logos"
          tabIndex="0"
        >
          <div className="logo-marquee-track">
            <div className="logo-marquee-group">
              <img
                className="logo-marquee-image"
                src={associationLogos}
                alt={logoDescription}
                width="1364"
                height="132"
                loading="lazy"
              />
            </div>
            <div className="logo-marquee-group" aria-hidden="true">
              <img
                className="logo-marquee-image"
                src={associationLogos}
                alt=""
                width="1364"
                height="132"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalAffiliations

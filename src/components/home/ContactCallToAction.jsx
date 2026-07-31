import contactBackground from '../../assets/images/contact-cta.webp'

function ConversationIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.5 5.5h7a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-3.2L8 19v-3.5A4 4 0 0 1 4.5 11.5v-2a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function GuidanceIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12.5 12 5l8 7.5V20H4v-7.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5M8 10.5h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function MoveIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const contactCards = [
  {
    eyebrow: 'Start a conversation',
    title: 'Speak with an Austin realtor now!',
    description: 'Ready to work with the best real estate agents in Austin? Give us a call today!',
    Icon: ConversationIcon,
  },
  {
    eyebrow: 'Clear guidance at every step',
    title: 'From Your Search to Closing',
    description:
      'Our experienced agents guide you from search to closing, helping you find the right home, negotiate the best deal, and keep the transaction moving smoothly.',
    detail:
      'Whether finding a home for your family or preparing to sell, our knowledge and expertise support a successful real estate experience.',
    Icon: GuidanceIcon,
  },
  {
    eyebrow: 'Your next move starts here',
    title: 'Buy, Sell, or Rent in Austin',
    description:
      "If you're interested in buying, selling, or renting in Austin, call or use our website to get started with an agent.",
    detail: 'Contact us today to get started and experience the difference a Pauly Presley Realtor can make.',
    Icon: MoveIcon,
  },
]

function ContactCallToAction() {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-brand-ink px-5 py-12 sm:px-8 lg:px-12"
      aria-labelledby="contact-cta-title"
    >
      <img
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        src={contactBackground}
        width="1600"
        height="1065"
        alt=""
        loading="lazy"
      />
      <span className="absolute inset-0 -z-10 bg-neutral-950/55" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px]">
        <header className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="flex items-center justify-center gap-3 text-[10px] font-extrabold tracking-[0.22em] text-red-300 uppercase">
            <span className="h-px w-9 bg-red-300" />
            Personalized Austin real estate support
            <span className="h-px w-9 bg-red-300" />
          </p>
          <h2 id="contact-cta-title" className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
            Your Austin Move Starts Here
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/78 sm:text-base">
            Local knowledge, responsive communication, and experienced representation - focused on getting you where you want to go.
          </p>
        </header>

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
          {contactCards.map(({ eyebrow, title, description, detail, Icon }, index) => (
            <div
              key={title}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={120 + index * 190}
              data-aos-duration="750"
            >
              <article className="contact-cta-card group flex h-full min-h-[280px] flex-col rounded-[20px] border border-white/25 bg-white/6 p-6 backdrop-blur-[6px]">
                <span className="grid size-11 place-items-center rounded-xl border border-white/25 bg-white/10 text-red-200 transition-colors duration-300 group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-brand-red">
                  <Icon />
                </span>

                <p className="mt-5 text-[9px] font-extrabold tracking-[0.18em] text-red-300 uppercase transition-colors duration-300 group-hover:text-brand-red">{eyebrow}</p>
                <h3 className="mt-2.5 text-xl font-black leading-[1.12] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-brand-ink sm:text-[22px]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80 transition-colors duration-300 group-hover:text-neutral-600">{description}</p>
                {detail && <p className="mt-3 text-[13px] font-semibold leading-5.5 text-white/95 transition-colors duration-300 group-hover:text-neutral-700">{detail}</p>}
                <span className="mt-auto block h-0.5 w-10 rounded-full bg-red-300/75 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-red" aria-hidden="true" />
              </article>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center" data-aos="fade-up" data-aos-delay="700">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-[10px] font-extrabold tracking-[0.08em] text-white uppercase shadow-[0_12px_28px_rgb(0_0_0_/_0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/contact.php"
          >
            Contact our team
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactCallToAction

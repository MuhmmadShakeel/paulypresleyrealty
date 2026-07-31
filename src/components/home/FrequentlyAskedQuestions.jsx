import { useState } from 'react'

const faqs = [
  {
    question: 'Why should I work with a real estate agent in Austin?',
    answer:
      "A local Austin real estate agent can help you understand neighborhoods, pricing, market trends, property taxes, contract terms, and the buying or selling process. Because Austin's market varies by area, experienced guidance makes it easier to compare homes, negotiate effectively, and move forward with confidence.",
  },
  {
    question: "Is Austin a buyer's market right now?",
    answer:
      "As of July 2026, Austin has about 6.05 months of inventory, which generally indicates a buyer's market. With more available homes and less pressure than the market's peak years, buyers may have more room to compare options and negotiate.",
  },
  {
    question: 'What is the median home price in Austin?',
    answer:
      "Austin's median sold home price is $475,000 as of July 2026. Prices vary by neighborhood, property type, size, and condition, but this figure provides a general benchmark for buyers and sellers.",
  },
  {
    question: 'What Austin neighborhoods does Pauly Presley Realty serve?',
    answer:
      'Pauly Presley Realty helps buyers, sellers, renters, and tenants throughout Austin and Central Texas, including West Austin, Central Austin, East Austin, Downtown Austin, and surrounding communities.',
  },
  {
    question: 'Can a real estate agent help me rent an apartment in Austin?',
    answer:
      'Yes. Pauly Presley Realty works with tenants as well as buyers and sellers. An Austin real estate agent can help you compare apartments, suburban homes, and rentals near work, school, or entertainment.',
  },
  {
    question: 'Can Pauly Presley Realty help me sell my Austin home?',
    answer:
      'Yes. The team assists Austin homeowners with pricing, marketing, listing strategy, negotiations, and transaction guidance so they can understand current conditions and position their property for the right buyers.',
  },
  {
    question: 'What makes Pauly Presley Realty different?',
    answer:
      "Pauly Presley Realty has served Austin's real estate market since 2005, combining local knowledge, responsive service, daily-updated listing tools, and experience with buyers, sellers, tenants, and residential or mixed-use projects.",
  },
  {
    question: 'How can I start searching for homes in Austin?',
    answer:
      'Use Pauly Presley Realty’s property search tools to browse current listings, compare neighborhoods, filter by price and features, and save custom searches. An Austin Realtor can then help you tour homes, evaluate options, and move forward.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerId = `faq-answer-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <article className="border-b border-neutral-200">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="group flex w-full items-center justify-between gap-6 bg-transparent py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <span className="text-[15px] font-bold leading-5.5 tracking-[-0.015em] text-brand-ink transition-colors duration-300 group-hover:text-brand-red sm:text-base">
            {faq.question}
          </span>
          <span className={`faq-plus relative size-6 shrink-0 text-brand-red ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={answerId}
        className={`faq-answer grid ${isOpen ? 'is-open' : ''}`}
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl pb-5 pr-8 text-sm leading-6 text-neutral-600">{faq.answer}</p>
        </div>
      </div>
    </article>
  )
}

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null)
  const midpoint = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, midpoint), faqs.slice(midpoint)]

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12" aria-labelledby="faq-title">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-[10px] font-extrabold tracking-[0.22em] text-brand-red uppercase">Clear answers, confident decisions</p>
          <h2 id="faq-title" className="mt-3 text-3xl font-black tracking-[-0.045em] text-brand-ink sm:text-4xl lg:text-[44px]">
            Austin Real Estate FAQs
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
            Straightforward answers about working with an Austin real estate agent.
          </p>
        </header>

        <div className="mt-8 grid gap-x-16 lg:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} data-aos={columnIndex === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={120 + columnIndex * 120}>
              {column.map((faq, itemIndex) => {
                const index = columnIndex * midpoint + itemIndex

                return (
                  <FAQItem
                    key={faq.question}
                    faq={faq}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FrequentlyAskedQuestions

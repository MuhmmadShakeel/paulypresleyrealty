import logoMark from '../../assets/brand/pauly-presley-mark.svg'

const companyLinks = [
  { label: 'About Us', href: 'https://www.paulypresleyrealty.com/about-us.php' },
  { label: 'Our Agents', href: 'https://www.paulypresleyrealty.com/agents.php' },
  {
    label: 'Listings',
    href: 'https://www.paulypresleyrealty.com/idx/?feed=abor&usersearch=1&bounds%5Bne%5D%5Blat%5D=30.316215220174197&bounds%5Bne%5D%5Blng%5D=-97.61225483076167&bounds%5Bsw%5D%5Blat%5D=30.217176233892758&bounds%5Bsw%5D%5Blng%5D=-97.87386676923823',
  },
  { label: 'Contact Us', href: 'https://www.paulypresleyrealty.com/contact-us.php' },
]

const resourceLinks = [
  { label: 'Local Communities', href: 'https://www.paulypresleyrealty.com/communities.php' },
  { label: 'Real Estate Blog', href: 'https://www.paulypresleyrealty.com/blog/' },
  {
    label: 'Search Listings',
    href: 'https://www.paulypresleyrealty.com/idx/?feed=abor&usersearch=1&bounds%5Bne%5D%5Blat%5D=30.316215220174197&bounds%5Bne%5D%5Blng%5D=-97.60779163496089&bounds%5Bsw%5D%5Blat%5D=30.217176233892758&bounds%5Bsw%5D%5Blng%5D=-97.87832996503901',
  },
]

function FooterLink({ href, children }) {
  return (
    <a className="group inline-flex items-center gap-2 text-sm text-white/62 transition-colors duration-300 hover:text-white" href={href}>
      <span className="h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-3" aria-hidden="true" />
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-[#131316] text-white" aria-labelledby="footer-company-name">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-12">
          <div className="max-w-sm">
            <a className="inline-flex items-center gap-3" href="/" aria-label="Pauly Presley Realty home">
              <img className="size-13" src={logoMark} width="52" height="52" alt="" />
              <span>
                <strong id="footer-company-name" className="block text-xl font-black tracking-[-0.035em]">Pauly Presley Realty</strong>
                <span className="mt-1 block text-[9px] font-bold tracking-[0.22em] text-red-300 uppercase">Austin, Texas</span>
              </span>
            </a>

            <address className="mt-6 not-italic text-sm leading-6 text-white/62">
              <span className="block">2401 E. 6th St. #3033</span>
              <span className="block">Austin, TX, USA 78702</span>
            </address>

            <div className="mt-4 flex flex-col items-start gap-2">
              <a className="text-sm font-bold text-white transition-colors hover:text-red-300" href="tel:+15125808284">512-580-8284</a>
              <a className="text-sm text-white/68 transition-colors hover:text-white" href="mailto:info@paulypresley.com">info@paulypresley.com</a>
            </div>
          </div>

          <nav aria-label="Company links">
            <h2 className="text-[11px] font-extrabold tracking-[0.18em] text-white uppercase">Our Company</h2>
            <div className="mt-5 flex flex-col items-start gap-3.5">
              {companyLinks.map((link) => <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>)}
            </div>
          </nav>

          <nav aria-label="Property resources">
            <h2 className="text-[11px] font-extrabold tracking-[0.18em] text-white uppercase">Info &amp; Services</h2>
            <div className="mt-5 flex flex-col items-start gap-3.5">
              {resourceLinks.map((link) => <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>)}
            </div>
          </nav>

          <div>
            <h2 className="text-[11px] font-extrabold tracking-[0.18em] text-white uppercase">Areas We Serve</h2>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/62">
              Helping buyers, sellers, renters, and tenants across Austin and Central Texas.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] text-white/48" aria-label="Austin service areas">
              <li>West Austin</li>
              <li>Central Austin</li>
              <li>East Austin</li>
              <li>Downtown Austin</li>
            </ul>
          </div>
        </div>

        <details className="footer-disclosures border-b border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red">
            <span>
              <strong className="block text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">MLS, IDX &amp; Legal Disclosures</strong>
              <span className="mt-1 block text-[10px] text-white/38">Listings information updated July 31, 2026 at 6:00am CDT</span>
            </span>
            <span className="footer-legal-plus relative size-6 shrink-0 text-red-300" aria-hidden="true" />
          </summary>

          <div className="grid gap-6 pb-7 text-[11px] leading-5 text-white/46 md:grid-cols-2">
            <div className="space-y-3">
              <p>Listings courtesy of Unlock MLS as distributed by MLS GRID.</p>
              <p>Based on information submitted to the MLS GRID as of July 31, 2026 at 6:00am. All data is obtained from various sources and may not have been verified by broker or MLS GRID. Supplied Open House Information is subject to change without notice. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office or agent presenting the information.</p>
              <p>The information provided is for consumers&apos; personal, non-commercial use and may not be used for any purpose other than identifying prospective properties consumers may be interested in purchasing.</p>
            </div>

            <div className="space-y-3">
              <p>Based on information from the Austin Board of REALTORS® (alternatively, from ACTRIS) from July 31, 2026 at 6:00am CDT. Neither the Board nor ACTRIS guarantees or is responsible for its accuracy. The Austin Board of REALTORS®, ACTRIS, and their affiliates provide the MLS and all content therein “AS IS” without warranty, express or implied. Data maintained by the Board or ACTRIS may not reflect all real estate activity in the market.</p>
              <p>The Digital Millennium Copyright Act of 1998, 17 U.S.C. § 512, provides recourse for copyright owners who believe material appearing online infringes their rights. A good-faith notice requesting removal or blocked access must be sent in writing to Pauly Presley Realty at <a className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white" href="mailto:info@paulypresley.com">info@paulypresley.com</a>.</p>
              <p>All information provided is deemed reliable but is not guaranteed and should be independently verified.</p>
            </div>
          </div>
        </details>

        <div className="flex flex-col gap-4 pt-6 text-[11px] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 <a className="transition-colors hover:text-white" href="https://www.realestatewebmasters.com/">Real Estate Webmasters</a>. All Rights Reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal and attribution links">
            <a className="transition-colors hover:text-white" href="https://www.paulypresleyrealty.com/sitemap/">Sitemap</a>
            <a className="transition-colors hover:text-white" href="https://www.paulypresleyrealty.com/privacy-policy/">Privacy Policy</a>
            <a className="transition-colors hover:text-white" href="https://www.geekpoweredstudios.com/">Geek Powered Studios</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

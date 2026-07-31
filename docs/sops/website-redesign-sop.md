## Recommended redesign direction

The new website should not simply look different. It should be:

* Easier to scan
* More focused on property search and lead generation
* More trustworthy
* Better on mobile
* Faster
* More visually consistent
* Easier for the client to manage
* SEO-safe

The current homepage has useful content, neighborhood information, credentials and FAQs. Its main problem is that everything has almost equal visual importance. The result is a very long, text-heavy page with weak conversion hierarchy.

## 1. Current homepage audit

### Keep these strengths

* Recognizable red brand colour
* Austin-focused positioning
* Property-search functionality
* Featured-neighborhood content
* Agent credentials and associations
* Buyer, seller and investor services
* Local real-estate FAQs
* Contact CTA
* Existing SEO-oriented content

### Improve these weaknesses

* Hero message is generic and does not strongly introduce the agent.
* Navigation and important actions are visually small.
* Property search is not explained clearly.
* Neighborhood cards need consistent photography and information.
* Several sections contain long paragraphs that users will not read.
* Service information is repeated across multiple sections.
* CTA buttons are too small and inconsistent.
* There are no strong statistics, testimonials or recent-sale results.
* The FAQ is presented as a long text wall.
* The footer is crowded and difficult to scan.
* The page does not create a clear journey for buyers, sellers and investors.
* Mobile behaviour cannot be fully verified from this scaled screenshot and must be tested separately.

## 2. Required differences between the old and new website

| Current approach              | Improved approach                                              |
| ----------------------------- | -------------------------------------------------------------- |
| Generic hero heading          | Strong Austin-specific value proposition                       |
| Search bar without context    | Search tabs, filter chips and helpful prompts                  |
| Small navigation              | Clear sticky navigation with one primary CTA                   |
| Four basic neighborhood cards | Premium cards with price, property type and clear action       |
| Long agent introduction       | Short biography, professional image, credentials and results   |
| Text-heavy service sections   | Scannable service cards and visual process                     |
| Repeated alternating sections | Fewer, stronger content blocks                                 |
| No clear social proof         | Testimonials, sales results and verified statistics            |
| Long FAQ wall                 | Accessible accordion containing 6–8 primary questions          |
| Inconsistent CTAs             | One primary and one secondary CTA system                       |
| Dense footer                  | Structured footer with contact, service areas and legal links  |
| Mostly static presentation    | Useful search, map, consultation and saved-search interactions |
| Desktop-first appearance      | Mobile-first responsive structure                              |

## 3. Recommended new homepage structure

Use this exact order:

1. **Header**

   * Logo
   * Buy
   * Sell
   * Neighborhoods
   * About
   * Insights
   * Contact
   * Primary button: “Schedule a Consultation”

2. **Hero section**

   Suggested heading:

   > Find the Right Home—and the Right Strategy—in Austin

   Supporting statement:

   > Local market expertise for Austin buyers, sellers and investors.

   Include:

   * Buy / Sell / Address search tabs
   * Search input
   * “Explore Homes” button
   * “Get a Home Valuation” secondary action
   * Short trust statement
   * High-quality Austin property image or short optimized background video

3. **Trust strip**

   Include only verified information:

   * Years of experience
   * Transactions completed
   * Areas served
   * Association or brokerage credentials
   * Average review score, if verified

4. **Featured properties**

   Each listing card should show:

   * Property image
   * Price
   * Address
   * Beds, baths and area
   * Property status
   * “View Property” action

   Do not create fake listings for the production website. Demo data must be clearly identified as sample data.

5. **Buyer, seller and investor pathways**

   Three premium cards:

   * Buying in Austin
   * Selling Your Property
   * Investment and Off-Market Opportunities

6. **Featured neighborhoods**

   Each neighborhood card should include:

   * Consistent image ratio
   * Neighborhood name
   * Short positioning statement
   * Typical property style
   * Verified market information, where available
   * “Explore Neighborhood” action

7. **Meet Pauly Presley**

   Use:

   * Professional portrait
   * Short biography
   * Austin experience
   * Verified credentials
   * Clear differentiator
   * Consultation CTA

   Move the detailed biography to the About page.

8. **Why clients work with Pauly**

   Replace long paragraphs with four concise benefits:

   * Local market knowledge
   * Buyer and seller representation
   * Investment-property experience
   * Responsive, data-informed guidance

9. **Client journey**

   Show a simple three- or four-step process:

   * Initial consultation
   * Property or market strategy
   * Search, preparation or negotiation
   * Closing and continued support

10. **Testimonials and results**

Use only client-approved testimonials. Add:

* Client name or initials
* Buyer/seller category
* Neighborhood
* Short result
* Review source, if applicable

11. **Austin market insights**

Show three latest articles:

* Market report
* Neighborhood guide
* Buyer or seller advice

12. **Conversion banner**

Use one strong message:

> Ready to Make Your Next Austin Real Estate Move?

Buttons:

* Schedule a Consultation
* Search Austin Homes

13. **FAQ accordion**

Keep approximately 6–8 important questions on the homepage. Move the complete FAQ collection to a dedicated page.

14. **Professional footer**

Include:

* Contact information
* Brokerage information
* Service areas
* Quick links
* Social links
* Privacy policy
* Terms
* Accessibility statement
* Required brokerage, MLS/IDX and legal notices after client review

## 4. Design-system SOP

Create the design system before building sections.

### Colour system

Recommended direction:

* Deep charcoal or navy: trust and premium sections
* Warm off-white: primary background
* Existing red: important actions only
* Soft beige or light grey: secondary sections
* Muted grey: supporting text
* White: cards and clean content areas

Do not use red for every heading, icon and button. Red will lose importance if it is everywhere.

### Typography

Recommended combination:

* Headings: DM Serif Display or a similar premium serif
* Body and interface: Inter, Manrope or Plus Jakarta Sans

Rules:

* One H1 per page
* Clearly defined H2 and H3 hierarchy
* Body text around 16–18px
* Comfortable line height
* Text blocks limited to a readable width
* Avoid all-capital paragraphs
* Avoid very thin font weights over images

### Spacing

Use a consistent spacing scale:

```text
4, 8, 12, 16, 24, 32, 48, 64, 96
```

Do not manually give every section a different margin.

### Component rules

Create reusable components for:

* Header
* Search bar
* Buttons
* Property cards
* Neighborhood cards
* Service cards
* Testimonial cards
* Statistic cards
* Article cards
* FAQ accordion
* Contact form
* Footer

Every button, card and heading should come from the same component system.

## 5. Content SOP

For each section, follow this formula:

> Problem → Value → Evidence → Action

Example:

* Problem: Selling a home without clear pricing information is difficult.
* Value: Pauly provides Austin-specific pricing and preparation guidance.
* Evidence: Verified experience, market data or client result.
* Action: Request a home valuation.

Content rules:

* Keep paragraphs under three or four lines.
* Use descriptive headings instead of generic headings.
* Write one primary message per section.
* Do not repeat the same biography across multiple sections.
* Do not invent statistics, awards, reviews or sales results.
* Preserve important SEO content, but move detailed information to relevant pages.
* Get client approval before changing regulated, brokerage or legal wording.

## 6. Advanced functionality SOP

Only implement features supported by real data or an approved integration.

Recommended features:

* Address and property autocomplete
* Buy/sell search tabs
* Filter chips
* Neighborhood filtering
* Interactive map
* Saved properties
* Saved searches
* Consultation booking
* Home-valuation form
* Property inquiry form
* CRM lead routing
* Email notifications
* CMS-managed neighborhoods and articles
* Analytics events for searches, forms and CTA clicks

Do not present a static button as functional. If MLS/IDX, CRM, valuation or booking integration is not available, label it as a prototype dependency.

## 7. Responsive-design SOP

Design mobile first because Google primarily uses the mobile version of content for indexing. [Google Mobile-First Indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)

Test these widths:

* 360px
* 390px
* 430px
* 768px
* 1024px
* 1280px
* 1440px

Mobile rules:

* Convert navigation to a clean menu.
* Keep one visible CTA.
* Stack search controls vertically.
* Avoid overlaying large paragraphs on images.
* Use horizontal property-card scrolling only when accessible.
* Keep buttons easy to tap.
* Ensure forms do not create horizontal scrolling.
* Keep the same meaningful content on desktop and mobile.

## 8. Accessibility SOP

Target WCAG 2.2 AA. WCAG evaluates accessibility through perceivable, operable, understandable and robust content. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Check:

* Keyboard navigation
* Visible focus indicators
* Proper heading order
* Form labels
* Useful validation messages
* Image alternative text
* Colour contrast
* Accessible FAQ accordion
* Reduced-motion support
* Screen-reader-friendly navigation
* No information communicated through colour alone
* Descriptive link text
* Accessible modal and mobile menu behaviour

## 9. Performance SOP

Use these Core Web Vitals targets at the 75th percentile:

* LCP: 2.5 seconds or less
* INP: 200 milliseconds or less
* CLS: 0.1 or less

These are the current “good” thresholds defined by the Chrome/Web Vitals guidance. [Web Vitals](https://web.dev/articles/vitals)

Implementation requirements:

* Use WebP or AVIF images.
* Define image width and height.
* Preload only the important hero asset.
* Lazy-load below-the-fold images.
* Avoid autoplay background video on mobile.
* Minimize third-party scripts.
* Use optimized local or properly loaded fonts.
* Avoid layout-changing animations.
* Split non-critical JavaScript.
* Test using Lighthouse and browser performance tools.

## 10. SEO SOP

* Preserve important existing URLs.
* Create page-specific titles and descriptions.
* Use only one clear H1.
* Add internal links between listings, neighborhoods and articles.
* Generate canonical URLs.
* Create `sitemap.xml`.
* Configure `robots.txt`.
* Add Organization or LocalBusiness structured data only where accurate.
* Add breadcrumb structured data on internal pages.
* Validate markup using Google’s Rich Results Test.
* Do not add unsupported ratings or review markup.

Google recommends structured data that accurately represents visible page content. [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

## 11. QA SOP

Before showing the client, perform these checks.

### Visual QA

* Compare each viewport with the approved design.
* Check spacing consistency.
* Check image cropping.
* Check heading hierarchy.
* Check card heights.
* Check button alignment.
* Check dark overlays and text readability.

### Functional QA

* Every navigation link works.
* Property search returns the expected state.
* Filters can be cleared.
* Forms validate correctly.
* Successful submissions show confirmation.
* Errors do not remove entered information.
* Phone, email and map links work.
* Accordions work with mouse and keyboard.
* Mobile menu opens, closes and traps focus correctly.

### Content QA

* No placeholder text
* No fake testimonials
* No unsupported statistics
* Correct phone number and email
* Correct brokerage information
* Correct neighborhood names
* No outdated property information
* No spelling or capitalization inconsistency

### Technical QA

* No browser-console errors
* No broken image requests
* No missing metadata
* No horizontal scrolling
* No duplicate IDs
* No exposed API keys
* Proper form-spam protection
* Analytics events tested
* Lighthouse and accessibility tests completed

## 12. Client approval SOP

Do not immediately complete the entire site.

Follow this approval sequence:

1. Present homepage wireframe.
2. Confirm page structure and conversion goal.
3. Present desktop visual design.
4. Confirm colours, typography and images.
5. Present mobile design.
6. Build the approved homepage.
7. Present interactive preview.
8. Confirm functionality and integrations.
9. Receive the agreed advance.
10. Complete remaining pages.
11. Run final QA.
12. Obtain written approval before launch.

## Definition of done

The redesign should not be considered complete until:

* The primary user can search or contact the agent immediately.
* Buyers, sellers and investors have separate journeys.
* Mobile and desktop experiences are complete.
* All content is approved and evidence-based.
* Accessibility and performance targets are tested.
* Search, forms and CTAs work properly.
* The old URLs and SEO value are protected.
* The client has approved design, content and functionality in writing.

The best visual direction for this project is a **premium editorial real-estate experience**: generous spacing, strong Austin photography, elegant typography, controlled use of red, clear property-search tools and visible agent credibility. Avoid excessive gradients, glass effects, animated text and decorative motion—they can make the redesign look trendy but reduce trust and usability.

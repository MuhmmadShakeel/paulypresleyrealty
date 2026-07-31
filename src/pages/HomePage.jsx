import AboutPaulyPresley from '../components/home/AboutPaulyPresley.jsx'
import AustinRealEstateExperts from '../components/home/AustinRealEstateExperts.jsx'
import AustinRealEstateServices from '../components/home/AustinRealEstateServices.jsx'
import ContactCallToAction from '../components/home/ContactCallToAction.jsx'
import FeaturedNeighborhoods from '../components/home/FeaturedNeighborhoods.jsx'
import FrequentlyAskedQuestions from '../components/home/FrequentlyAskedQuestions.jsx'
import Hero from '../components/home/Hero.jsx'
import ProfessionalAffiliations from '../components/home/ProfessionalAffiliations.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import WhyPaulyPresley from '../components/home/WhyPaulyPresley.jsx'

function HomePage() {
  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <FeaturedNeighborhoods />
      <AustinRealEstateExperts />
      <AboutPaulyPresley />
      <ProfessionalAffiliations />
      <WhyPaulyPresley />
      <AustinRealEstateServices />
      <ContactCallToAction />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  )
}
export default HomePage

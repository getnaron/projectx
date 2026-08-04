import { Suspense, lazy, createContext, useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'))
const Templates = lazy(() => import('./pages/Templates'))
const TemplateCategory = lazy(() => import('./pages/TemplateCategory'))
const Services = lazy(() => import('./pages/Services'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const OurWork = lazy(() => import('./pages/OurWork'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Lazy-loaded template previews
const LuxuryHotel = lazy(() => import('./templates/hotels/luxury'))
const MinimalHotel = lazy(() => import('./templates/hotels/minimal'))
const BeachResort = lazy(() => import('./templates/hotels/beach-resort'))
const BusinessHotel = lazy(() => import('./templates/hotels/business'))
const MountainResort = lazy(() => import('./templates/hotels/mountain-resort'))
const ModernCafe = lazy(() => import('./templates/restaurants/modern-cafe'))
const FineDining = lazy(() => import('./templates/restaurants/fine-dining'))
const FastFood = lazy(() => import('./templates/restaurants/fast-food'))
const CoffeeShop = lazy(() => import('./templates/restaurants/coffee-shop'))
const WeddingHall = lazy(() => import('./templates/auditoriums/wedding-hall'))
const ConventionCenter = lazy(() => import('./templates/auditoriums/convention-center'))
const PartyHall = lazy(() => import('./templates/auditoriums/party-hall'))
const FashionShop = lazy(() => import('./templates/shops/fashion'))
const ElectronicsStore = lazy(() => import('./templates/shops/electronics'))
const DentalClinic = lazy(() => import('./templates/clinics/dental'))
const WellnessClinic = lazy(() => import('./templates/clinics/wellness'))
const PowerGym = lazy(() => import('./templates/gyms/power'))
const YogaStudio = lazy(() => import('./templates/gyms/yoga'))
const LuxurySalon = lazy(() => import('./templates/salons/luxury'))
const BarberShop = lazy(() => import('./templates/salons/barber'))
const PhotographyPortfolio = lazy(() => import('./templates/photographers/portfolio'))
const WeddingPhotography = lazy(() => import('./templates/photographers/wedding'))
const PersonalPortfolio = lazy(() => import('./templates/personal/developer'))
const DesignerPortfolio = lazy(() => import('./templates/personal/designer'))
const EventManagement = lazy(() => import('./templates/events/corporate'))
const WeddingEvents = lazy(() => import('./templates/events/wedding'))
const OnlineAcademy = lazy(() => import('./templates/education/academy'))
const TutoringCenter = lazy(() => import('./templates/education/tutoring'))
const LuxuryRealEstate = lazy(() => import('./templates/real-estate/luxury'))
const PropertyAgency = lazy(() => import('./templates/real-estate/agency'))

// ============================================================
// Theme Context
// ============================================================
interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

// ============================================================
// App Component
// ============================================================
export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('pixelnest-theme')
    // Default is always dark; only switch to light if user explicitly chose light
    return saved === 'light' ? false : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('pixelnest-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main site routes with layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/:category" element={<TemplateCategory />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Template preview routes (standalone, no main layout) */}
          <Route path="/templates/hotels/luxury" element={<LuxuryHotel />} />
          <Route path="/templates/hotels/minimal" element={<MinimalHotel />} />
          <Route path="/templates/hotels/beach-resort" element={<BeachResort />} />
          <Route path="/templates/hotels/business" element={<BusinessHotel />} />
          <Route path="/templates/hotels/mountain-resort" element={<MountainResort />} />
          <Route path="/templates/restaurants/modern-cafe" element={<ModernCafe />} />
          <Route path="/templates/restaurants/fine-dining" element={<FineDining />} />
          <Route path="/templates/restaurants/fast-food" element={<FastFood />} />
          <Route path="/templates/restaurants/coffee-shop" element={<CoffeeShop />} />
          <Route path="/templates/auditoriums/wedding-hall" element={<WeddingHall />} />
          <Route path="/templates/auditoriums/convention-center" element={<ConventionCenter />} />
          <Route path="/templates/auditoriums/party-hall" element={<PartyHall />} />
          <Route path="/templates/shops/fashion" element={<FashionShop />} />
          <Route path="/templates/shops/electronics" element={<ElectronicsStore />} />
          <Route path="/templates/clinics/dental" element={<DentalClinic />} />
          <Route path="/templates/clinics/wellness" element={<WellnessClinic />} />
          <Route path="/templates/gyms/power" element={<PowerGym />} />
          <Route path="/templates/gyms/yoga" element={<YogaStudio />} />
          <Route path="/templates/salons/luxury" element={<LuxurySalon />} />
          <Route path="/templates/salons/barber" element={<BarberShop />} />
          <Route path="/templates/photographers/portfolio" element={<PhotographyPortfolio />} />
          <Route path="/templates/photographers/wedding" element={<WeddingPhotography />} />
          <Route path="/templates/personal/developer" element={<PersonalPortfolio />} />
          <Route path="/templates/personal/designer" element={<DesignerPortfolio />} />
          <Route path="/templates/events/corporate" element={<EventManagement />} />
          <Route path="/templates/events/wedding" element={<WeddingEvents />} />
          <Route path="/templates/education/academy" element={<OnlineAcademy />} />
          <Route path="/templates/education/tutoring" element={<TutoringCenter />} />
          <Route path="/templates/real-estate/luxury" element={<LuxuryRealEstate />} />
          <Route path="/templates/real-estate/agency" element={<PropertyAgency />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeContext.Provider>
  )
}

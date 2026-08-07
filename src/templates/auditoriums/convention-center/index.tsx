import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Calendar, Users, Star, 
  ChevronDown, CheckCircle2, Wifi, Car, Coffee, 
  Mic, Camera, Wind, Zap, Palette, ArrowRight, Menu, X 
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// --- DUMMY DATA ---

const VENUES = [
  {
    id: 'grand-banquet',
    name: 'The Grand Banquet',
    capacity: '2,000 Guests',
    size: '15,000 sq ft',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    description: 'Our most luxurious hall, perfect for massive weddings, international conferences, and gala dinners. Features crystal chandeliers and custom lighting.',
    features: ['High-ceiling architecture', 'Acoustic treatment', 'VIP Green Rooms', 'Private Entrance']
  },
  {
    id: 'corporate-hall',
    name: 'Executive Conference Hall',
    capacity: '500 Guests',
    size: '5,000 sq ft',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    description: 'Designed specifically for corporate seminars, product launches, and general assemblies. Equipped with a massive 4K LED wall.',
    features: ['4K LED Display Wall', 'Tiered seating option', 'Translation booths', 'Live-streaming ready']
  },
  {
    id: 'outdoor-plaza',
    name: 'The Royal Plaza (Outdoor)',
    capacity: '1,500 Guests',
    size: '12,000 sq ft',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200',
    description: 'A stunning manicured lawn under the stars. Ideal for evening receptions, outdoor exhibitions, and cultural festivals.',
    features: ['Manicured landscaping', 'Weather-proof tenting options', 'Outdoor stage setup', 'Food truck access']
  }
]

const AMENITIES = [
  { icon: <Car />, title: 'Valet Parking', desc: 'Secure parking for 1000+ vehicles.' },
  { icon: <Wind />, title: 'Central AC', desc: 'Climate-controlled environments.' },
  { icon: <Coffee />, title: '5-Star Catering', desc: 'In-house culinary experts.' },
  { icon: <Mic />, title: 'Pro Stage Setup', desc: 'Advanced lighting & sound.' },
  { icon: <Wifi />, title: 'Gigabit WiFi', desc: 'High-speed internet throughout.' },
  { icon: <Zap />, title: '100% Power Backup', desc: 'Uninterrupted power supply.' },
  { icon: <Users />, title: 'VIP Rooms', desc: 'Luxury suites for guests/hosts.' },
  { icon: <Palette />, title: 'Custom Decor', desc: 'In-house decoration team.' },
]

const PACKAGES = [
  {
    name: 'Corporate Essential',
    price: '₹2,50,000',
    duration: 'Per Day',
    features: ['Executive Conference Hall', 'Basic AV Setup', 'Standard Catering (up to 200 pax)', 'Valet Parking', 'Dedicated Event Manager'],
    popular: false
  },
  {
    name: 'The Grand Wedding',
    price: '₹8,50,000',
    duration: 'Per Day',
    features: ['The Grand Banquet Hall', 'Premium Stage & Floral Decor', 'Luxury Catering (up to 800 pax)', '2 VIP Suites', 'Full Lighting & AV Setup'],
    popular: true
  },
  {
    name: 'Exhibition Master',
    price: '₹5,00,000',
    duration: 'Per Day',
    features: ['The Royal Plaza (Outdoor)', 'Custom Stall Setup (up to 50)', 'Basic PA System', 'High-speed WiFi', 'Security & Traffic Control'],
    popular: false
  }
]

const GALLERY = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', // Wedding
  'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800', // Conference
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', // Party
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', // Exterior
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800', // Interiors
  'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800', // Dining
]

const FAQS = [
  { q: 'How far in advance should we book?', a: 'We recommend booking at least 6 months in advance for weddings and large corporate events to ensure your preferred dates are available.' },
  { q: 'Do you provide in-house catering?', a: 'Yes, we have a team of executive chefs who can prepare a wide variety of cuisines, from local delicacies to international fare.' },
  { q: 'Is outside decoration allowed?', a: 'We have a panel of premium decorators, but we do allow outside decorators subject to approval and an external vendor fee.' },
  { q: 'What is the cancellation policy?', a: 'Cancellations made 90 days prior receive a 50% refund of the deposit. Cancellations within 30 days are non-refundable.' }
]

// --- MOTION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function ConventionCenterTemplate() {
  const [scrolled, setScrolled] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Theme styling (Gold, Charcoal, White, Beige)
  const theme = {
    primary: '#d4af37', // Gold
    secondary: '#1a1a1a', // Charcoal
    light: '#f9f9f6', // Off-white/Beige
    white: '#ffffff',
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', color: theme.secondary, background: theme.light, overflowX: 'hidden' }}>
      <PreviewBackBar templateName="Convention Center" category="Auditoriums" categoryRoute="/templates/auditoriums" />
      
      {/* --- STICKY NAV --- */}
      <nav style={{
        position: 'fixed', top: 44, left: 0, right: 0, zIndex: 100,
        padding: '0.75rem 1.25rem',
        background: scrolled || mobileMenuOpen ? 'rgba(26, 26, 26, 0.96)' : 'rgba(26, 26, 26, 0.6)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.3s ease',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ color: theme.white, fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 22, height: 22, background: theme.primary, borderRadius: 4 }} />
          GRAND HORIZON
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: '1.75rem', alignItems: 'center' }}>
          {['Venues', 'Amenities', 'Pricing', 'Gallery', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ color: theme.white, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}>
              {link}
            </a>
          ))}
          <a href="#contact" style={{ background: theme.primary, color: theme.white, padding: '0.5rem 1.15rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu" style={{ background: 'none', border: 'none', color: theme.white, cursor: 'pointer', padding: '0.25rem' }}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                position: 'absolute', top: '100%', left: 0, right: 0,
                background: 'rgba(26, 26, 26, 0.98)', borderBottom: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)', padding: '1rem 1.25rem',
                display: 'flex', flexDirection: 'column', gap: '0.85rem'
              }}
            >
              {['Venues', 'Amenities', 'Pricing', 'Gallery', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} style={{ color: theme.white, textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                  {link}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ background: theme.primary, color: theme.white, padding: '0.6rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center', marginTop: '0.25rem' }}>
                Book Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section style={{
        height: '100vh',
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '5rem'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.8) 100%), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000') center/cover no-repeat`,
          zIndex: 0
        }} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', zIndex: 1, maxWidth: 900, padding: '0 2rem' }}
        >
          <h4 style={{ color: theme.primary, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>
            The Epitome of Luxury & Scale
          </h4>
          <h1 style={{ color: theme.white, fontSize: 'clamp(2.25rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Where Grand Visions <br/> <span style={{ color: theme.primary }}>Come to Life.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            India's most prestigious convention centre. 50,000 sq ft of ultra-luxury event space for weddings, exhibitions, and corporate galas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#contact" style={{ background: theme.primary, color: theme.white, padding: '1rem 2.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Schedule a Visit <ArrowRight size={18} />
            </a>
            <a href="#venues" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: theme.white, border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
              Explore Venues
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT --- */}
      <section style={{ padding: '8rem 2rem', background: theme.white }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}
            style={{ flex: 1 }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              A Masterpiece of Modern Architecture.
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8, marginBottom: '2rem' }}>
              Built to host the world's most spectacular events, Grand Horizon Convention Centre combines breathtaking aesthetics with state-of-the-art technology. From our towering 40-foot ceilings to our acoustic-treated walls, every inch is engineered for perfection.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: theme.primary, marginBottom: '0.25rem' }}>50k+</div>
                <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sq Ft Space</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: theme.primary, marginBottom: '0.25rem' }}>5,000</div>
                <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Max Capacity</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            style={{ flex: 1, position: 'relative' }}
          >
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" alt="Interior" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: theme.secondary, color: theme.white, padding: '2rem', borderRadius: '4px', maxWidth: 250 }}>
              <Star color={theme.primary} size={32} style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Award Winning</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>Voted 'Best Luxury Venue 2023' by EventAsia.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VENUES --- */}
      <section id="venues" style={{ padding: '8rem 2rem', background: theme.light }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Our Venues</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>Spaces designed to scale perfectly with your vision.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {VENUES.map((venue, i) => (
              <motion.div key={venue.id} variants={fadeInUp} style={{ display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', gap: '4rem', alignItems: 'center', background: theme.white, padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <div style={{ flex: 1.2, height: 400, overflow: 'hidden', borderRadius: '8px' }}>
                  <img src={venue.image} alt={venue.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>{venue.name}</h3>
                  <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>{venue.description}</p>
                  
                  <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #eee' }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Capacity</div>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{venue.capacity}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Area</div>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{venue.size}</div>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {venue.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                        <CheckCircle2 size={16} color={theme.primary} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- AMENITIES --- */}
      <section id="amenities" style={{ padding: '8rem 2rem', background: theme.secondary, color: theme.white }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>World-Class Amenities</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>Everything you need for a flawless event execution.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {AMENITIES.map(item => (
              <motion.div key={item.title} variants={fadeInUp} style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(212, 175, 55, 0.1)', color: theme.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CALENDAR UI (FRONTEND ONLY) --- */}
      <section style={{ padding: '6rem 2rem', background: theme.white }}>
        <div style={{ maxWidth: 800, margin: '0 auto', background: theme.light, padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Check Availability</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Select your preferred date</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>October 2026</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ width: 32, height: 32, border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer' }}>&lt;</button>
                <button style={{ width: 32, height: 32, border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer' }}>&gt;</button>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center', marginBottom: '1rem' }}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <div key={d} style={{ fontWeight: 600, color: '#999', fontSize: '0.85rem' }}>{d}</div>
            ))}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
            {Array.from({length: 31}).map((_, i) => {
              // Mock logic for booked vs available
              const isBooked = [3, 4, 5, 12, 18, 19, 25, 26].includes(i + 1)
              const isSelected = i + 1 === 15
              
              let bg = '#fff', border = '1px solid #eee', color = theme.secondary
              if (isBooked) { bg = '#f9f9f9'; color = '#ccc'; border = '1px solid #f0f0f0' }
              if (isSelected) { bg = theme.primary; color = '#fff'; border = `1px solid ${theme.primary}` }

              return (
                <div key={i} style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, border: border, borderRadius: '4px', fontWeight: 600, color: color, cursor: isBooked ? 'not-allowed' : 'pointer', fontSize: '0.9rem' }}>
                  {i + 1}
                </div>
              )
            })}
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 500, color: '#666' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff', border: '1px solid #ddd' }} /> Available</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f9f9f9', border: '1px solid #eee' }} /> Booked</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', background: theme.primary }} /> Selected</div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" style={{ padding: '8rem 2rem', background: theme.light }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Transparent Pricing</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>Choose a package that fits the scale of your event.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{
                  background: pkg.popular ? theme.secondary : theme.white,
                  color: pkg.popular ? theme.white : theme.secondary,
                  padding: '3rem 2rem',
                  borderRadius: '16px',
                  boxShadow: pkg.popular ? '0 20px 40px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.03)',
                  border: pkg.popular ? 'none' : '1px solid #eee',
                  position: 'relative',
                  transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                  zIndex: pkg.popular ? 2 : 1
                }}
              >
                {pkg.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: theme.primary, color: theme.white, padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Most Popular</div>}
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>{pkg.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{pkg.price}</span>
                  <span style={{ color: pkg.popular ? 'rgba(255,255,255,0.6)' : '#999', fontWeight: 500 }}>/{pkg.duration}</span>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {pkg.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color={theme.primary} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ opacity: pkg.popular ? 0.9 : 0.8 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <button style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: 'none', background: pkg.popular ? theme.primary : '#f0f0f0', color: pkg.popular ? theme.white : theme.secondary, fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
                  Enquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" style={{ padding: '8rem 2rem', background: theme.white }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Gallery</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: 600, margin: '0 auto' }}>A glimpse into the spectacular events hosted at Grand Horizon.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {GALLERY.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ height: 300, overflow: 'hidden', borderRadius: '8px' }}
              >
                <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section style={{ padding: '8rem 2rem', background: theme.light }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: theme.white, borderRadius: '8px', border: '1px solid #eee', overflow: 'hidden' }}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem', color: theme.secondary, textAlign: 'left' }}
                >
                  {faq.q}
                  <ChevronDown size={20} style={{ transform: activeFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                      <p style={{ padding: '0 1.5rem 1.5rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <section id="contact" style={{ background: theme.secondary, color: theme.white }}>
        <div style={{ padding: '8rem 2rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: '4rem' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Let's Talk Events.</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', lineHeight: 1.6 }}>Ready to host your dream event? Our dedicated planning team is ready to assist you.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin color={theme.primary} /></div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Location</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>123 Horizon Blvd, Metro City, IN 500001</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone color={theme.primary} /></div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Phone</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>+91 98765 43210</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail color={theme.primary} /></div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Email</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>events@grandhorizon.in</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Send an Enquiry</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="First Name" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#fff', outline: 'none' }} />
                  <input type="text" placeholder="Last Name" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#fff', outline: 'none' }} />
                </div>
                <input type="email" placeholder="Email Address" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#fff', outline: 'none' }} />
                <select style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#fff', outline: 'none', appearance: 'none' }}>
                  <option value="" disabled selected>Select Event Type</option>
                  <option value="wedding">Wedding / Reception</option>
                  <option value="corporate">Corporate Conference</option>
                  <option value="exhibition">Exhibition / Trade Show</option>
                  <option value="other">Other Event</option>
                </select>
                <textarea placeholder="Tell us about your event..." rows={4} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#fff', outline: 'none', resize: 'none' }} />
                <button type="button" style={{ background: theme.primary, color: theme.white, padding: '1rem', borderRadius: '4px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Grand Horizon Convention Centre. Built by RivixoTech.
        </div>
      </section>
      
    </div>
  )
}

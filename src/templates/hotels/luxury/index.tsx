import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MapPin, Phone, Mail, Wifi, Car, Utensils, Dumbbell, ArrowRight, ChevronDown, Check, Menu, X } from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Luxury Hotel Template — Preview Page
// This is a self-contained showcase landing page.
// Team: customize the colors/content to create variations.
// ============================================================

const NAV_ITEMS = ['Rooms', 'Dining', 'Amenities', 'Gallery', 'Contact']

const ROOMS = [
  { name: 'Deluxe Room', price: '₹8,500', description: 'Spacious 35sqm room with city views and a king-size bed.', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' },
  { name: 'Premier Suite', price: '₹14,000', description: 'Our signature suite with a private balcony and butler service.', gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 100%)' },
  { name: 'Royal Penthouse', price: '₹28,000', description: 'The pinnacle of luxury with panoramic skyline views and a private pool.', gradient: 'linear-gradient(135deg, #4a2040 0%, #0f0f1a 100%)' },
]

const AMENITIES = [
  { icon: <Wifi size={20} />, name: 'High-Speed Wi-Fi' },
  { icon: <Car size={20} />, name: 'Valet Parking' },
  { icon: <Utensils size={20} />, name: 'Fine Dining' },
  { icon: <Dumbbell size={20} />, name: 'Fitness Center' },
]

const TESTIMONIALS = [
  { name: 'Ananya S.', role: 'Business Traveler', rating: 5, text: 'Absolutely flawless experience. The service was impeccable and the room was breathtaking.' },
  { name: 'Rohan M.', role: 'Honeymooner', rating: 5, text: 'We chose the Royal Penthouse for our honeymoon. Best decision of our lives. Pure perfection.' },
  { name: 'Meera K.', role: 'Corporate Guest', rating: 5, text: 'The meeting facilities and the rooms are world-class. My team was thoroughly impressed.' },
]

export default function LuxuryHotelTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ background: '#0a0a12', color: '#f0ead6', fontFamily: 'Georgia, serif', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Preview back bar */}
      <PreviewBackBar
        templateName="Luxury Hotel"
        category="Hotels"
        categoryRoute="/templates/hotels"
      />

      {/* ====================================================
          NAVIGATION
      ==================================================== */}
      <nav
        style={{
          position: 'fixed',
          top: 44,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(10, 10, 18, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a84c' }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f0ead6' }}>
            Grand Imperial
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
          {NAV_ITEMS.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ color: 'rgba(240, 234, 214, 0.7)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.08em', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240, 234, 214, 0.7)' }}
            >
              {item}
            </a>
          ))}
          <a href="#contact"
            style={{
              padding: '0.45rem 1.25rem',
              border: '1px solid #c9a84c',
              color: '#c9a84c',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: 4,
            }}
          >
            Book Suite
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu" style={{ background: 'none', border: 'none', color: '#c9a84c', cursor: 'pointer', padding: '0.25rem' }}>
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
                background: '#0a0a12', borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)', padding: '1rem 1.25rem',
                display: 'flex', flexDirection: 'column', gap: '0.85rem'
              }}
            >
              {NAV_ITEMS.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} style={{ color: '#f0ead6', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.08em' }}>
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ border: '1px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', padding: '0.5rem', textAlign: 'center', borderRadius: 4, fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                Book Suite
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      {/* ====================================================
          HERO
      ==================================================== */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #0a0a12 0%, #0f0f1e 100%)',
        }}
      >
        {/* Decorative gold lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', padding: '2rem', maxWidth: 800, position: 'relative', zIndex: 1, paddingTop: '8rem' }}
        >
          <p style={{ color: '#c9a84c', letterSpacing: '0.3em', fontSize: '0.8125rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            ✦ Bangalore's Most Prestigious Address ✦
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '1.5rem', color: '#f0ead6' }}>
            Where Luxury<br />
            <em style={{ color: '#c9a84c' }}>Meets Perfection</em>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(240,234,214,0.65)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
            Experience a world of unparalleled elegance, impeccable service, and breathtaking views at the Grand Imperial Hotel.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#rooms"
              style={{
                padding: '1rem 2.5rem',
                background: '#c9a84c',
                color: '#0a0a12',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: 4,
                transition: 'all 0.2s',
              }}
            >
              Explore Rooms
            </a>
            <a href="#contact"
              style={{
                padding: '1rem 2.5rem',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#f0ead6',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: 4,
                transition: 'all 0.2s',
              }}
            >
              Book a Stay
            </a>
          </div>
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[{ v: '58', l: 'Luxury Suites' }, { v: '4', l: 'Fine Dining Restaurants' }, { v: '24/7', l: 'Concierge Service' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '-0.02em' }}>{s.v}</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(240,234,214,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: 'rgba(201,168,76,0.5)' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ====================================================
          GALLERY PLACEHOLDER
      ==================================================== */}
      <section style={{ padding: '5rem 2.5rem', background: '#0f0f1e' }}>
        <p style={{ textAlign: 'center', color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Property</p>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 400, color: '#f0ead6', marginBottom: '2.5rem' }}>A Glimpse of Grandeur</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', maxWidth: 1200, margin: '0 auto' }}>
          {[
            'linear-gradient(135deg, #1a1a35 0%, #2d1b4e 100%)',
            'linear-gradient(135deg, #0f1923 0%, #1a2a3a 100%)',
            'linear-gradient(135deg, #2d1b20 0%, #1a0f0f 100%)',
            'linear-gradient(135deg, #1b2d1b 0%, #0f1a0f 100%)',
          ].map((bg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                height: i === 0 ? 300 : 200,
                borderRadius: 8,
                background: bg,
                border: '1px solid rgba(201,168,76,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(201,168,76,0.3)',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
              }}
            >
              [ Gallery Image {i + 1} ]
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================
          ROOMS
      ==================================================== */}
      <section id="rooms" style={{ padding: '5rem 2.5rem', background: '#0a0a12' }}>
        <p style={{ textAlign: 'center', color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Accommodations</p>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 400, color: '#f0ead6', marginBottom: '3rem' }}>Our Rooms & Suites</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                borderRadius: 8,
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
                background: room.gradient,
              }}
            >
              <div style={{ height: 180, background: room.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(201,168,76,0.3)', fontSize: '0.8125rem' }}>
                [ Room Image ]
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: 500, fontSize: '1.125rem', color: '#f0ead6' }}>{room.name}</h3>
                  <span style={{ color: '#c9a84c', fontWeight: 700, fontSize: '1rem' }}>{room.price}<span style={{ fontSize: '0.7rem', opacity: 0.6 }}>/night</span></span>
                </div>
                <p style={{ color: 'rgba(240,234,214,0.6)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{room.description}</p>
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#c9a84c', textDecoration: 'none', fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Book Now <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================
          AMENITIES
      ==================================================== */}
      <section id="amenities" style={{ padding: '5rem 2.5rem', background: '#0f0f1e' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>World-Class Facilities</p>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 400, color: '#f0ead6', marginBottom: '3rem' }}>Hotel Amenities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
            {AMENITIES.map(a => (
              <div key={a.name}
                style={{
                  padding: '1.5rem',
                  borderRadius: 8,
                  border: '1px solid rgba(201,168,76,0.15)',
                  textAlign: 'center',
                  background: 'rgba(201,168,76,0.03)',
                }}
              >
                <div style={{ color: '#c9a84c', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{a.icon}</div>
                <p style={{ color: '#f0ead6', fontSize: '0.9rem', fontWeight: 500 }}>{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          TESTIMONIALS
      ==================================================== */}
      <section style={{ padding: '5rem 2.5rem', background: '#0a0a12' }}>
        <p style={{ textAlign: 'center', color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Guest Experiences</p>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 400, color: '#f0ead6', marginBottom: '3rem' }}>What Our Guests Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '1.75rem', borderRadius: 8, border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.03)' }}
            >
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill="#c9a84c" color="#c9a84c" />)}
              </div>
              <p style={{ color: 'rgba(240,234,214,0.75)', fontSize: '0.9375rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.25rem' }}>"{t.text}"</p>
              <div>
                <p style={{ fontWeight: 600, color: '#f0ead6', fontSize: '0.9rem' }}>{t.name}</p>
                <p style={{ color: '#c9a84c', fontSize: '0.8rem' }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================
          CONTACT
      ==================================================== */}
      <section id="contact" style={{ padding: '5rem 2.5rem', background: '#0f0f1e' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Reserve Your Stay</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#f0ead6', marginBottom: '1rem' }}>Make a Reservation</h2>
          <p style={{ color: 'rgba(240,234,214,0.6)', lineHeight: 1.7, marginBottom: '3rem' }}>
            Contact our concierge team for personalized booking assistance and special arrangements.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: 400, margin: '0 auto 2rem' }}>
            {[
              { icon: <Phone size={16} />, text: '+91 80 4567 8900' },
              { icon: <Mail size={16} />, text: 'reservations@grandimperial.in' },
              { icon: <MapPin size={16} />, text: 'MG Road, Bangalore 560001' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', color: 'rgba(240,234,214,0.65)', fontSize: '0.9rem' }}>
                <span style={{ color: '#c9a84c' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          <a href="tel:+918045678900"
            style={{
              display: 'inline-block',
              padding: '1rem 3rem',
              background: '#c9a84c',
              color: '#0a0a12',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: 4,
              transition: 'all 0.2s',
            }}
          >
            Call to Book
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 2.5rem', borderTop: '1px solid rgba(201,168,76,0.1)', textAlign: 'center' }}>
        <p style={{ color: 'rgba(240,234,214,0.3)', fontSize: '0.8125rem' }}>
          © {new Date().getFullYear()} Grand Imperial Hotel. All rights reserved.
          <span style={{ margin: '0 0.5rem', opacity: 0.3 }}>·</span>
          <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.8rem' }}>Template by RivixoTech</span>
        </p>
      </footer>
    </div>
  )
}

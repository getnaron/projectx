import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Camera,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  X,
  Menu,
  Star,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Award,
  Sliders,
  Feather
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Data & Types
// ============================================================

interface GalleryItem {
  id: string
  title: string
  category: 'portraits' | 'editorial' | 'weddings' | 'architecture'
  categoryLabel: string
  image: string
  client: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Vogue Autumn Cover Shoot',
    category: 'editorial',
    categoryLabel: 'Editorial',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
    client: 'Vogue Magazine'
  },
  {
    id: 'g2',
    title: 'Urban Architecture & Shadows',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000',
    client: 'Design Quarterly'
  },
  {
    id: 'g3',
    title: 'Royal Udaipur Palace Wedding',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    client: 'Destination Couple'
  },
  {
    id: 'g4',
    title: 'Golden Hour Monochromes',
    category: 'portraits',
    categoryLabel: 'Portraits',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000',
    client: 'Model Portfolio'
  },
  {
    id: 'g5',
    title: 'High-Fashion Noir Collection',
    category: 'editorial',
    categoryLabel: 'Editorial',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000',
    client: 'Elle Magazine'
  },
  {
    id: 'g6',
    title: 'Minimalist Studio Expressions',
    category: 'portraits',
    categoryLabel: 'Portraits',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000',
    client: 'Personal Exhibition'
  },
  {
    id: 'g7',
    title: 'Sunset Ceremony at Beach Resort',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
    client: 'Private Couple'
  },
  {
    id: 'g8',
    title: 'Modern Geometric Facades',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    client: 'ArchDaily Journal'
  }
]

const PRICING_PACKAGES = [
  {
    id: 'portrait',
    name: 'Portrait & Personal Branding',
    price: '₹25,000',
    subtitle: 'Ideal for executives, creators, and model portfolios.',
    features: [
      '2-hour studio or outdoor session',
      '25 high-resolution retouched images',
      'Full commercial & print rights',
      'Private online proofing gallery',
      'Styling & moodboard consultation',
      '7-day delivery turnaround'
    ],
    popular: false
  },
  {
    id: 'editorial',
    name: 'Editorial & Commercial Campaign',
    price: '₹75,000',
    subtitle: 'High-end imagery for fashion labels, lookbooks & ad campaigns.',
    features: [
      'Full-day (8 hours) shoot session',
      'Senior lighting technician on set',
      '60 master retouched campaign shots',
      'RAW captures & custom color grading',
      'Full commercial licensing rights',
      'Art direction & set styling',
      'Tethered live display monitoring'
    ],
    popular: true
  },
  {
    id: 'wedding',
    name: 'Luxury Destination Wedding',
    price: '₹2,50,000',
    subtitle: 'Cinematic documentary coverage for multi-day grand weddings.',
    features: [
      'Coverage for 2 full days (Multi-event)',
      'Lead photographer + 2 senior cinematographers',
      '4K 60fps Drone aerial photography',
      '500+ master edited high-res photos',
      'Handcrafted Italian leather photo album',
      'Sunset couple pre-wedding session',
      'Same-day preview highlights deck'
    ],
    popular: false
  }
]

const GEAR_LIST = [
  { category: 'Camera Bodies', item: 'Leica SL2 & Sony A1 (Dual Full Frame Systems)' },
  { category: 'Lenses', item: 'Sony GM 24-70mm f/2.8, 85mm f/1.4, 35mm f/1.4 Prime' },
  { category: 'Lighting', item: 'Profoto B10X Plus Strobes & Octabox Softboxes' },
  { category: 'Drone System', item: 'DJI Mavic 3 Pro Cine (4K ProRes Certified)' },
  { category: 'Color Post-Production', item: 'Eizo ColorEdge Calibrated Monitors & Custom LUTs' }
]

const TESTIMONIALS = [
  {
    quote: 'Alex transformed our brand aesthetic completely. The editorial shots for our autumn campaign were featured on the cover of Harper’s Bazaar.',
    name: 'Meera Kapoor',
    role: 'Creative Director, Noir Fashion House',
    rating: 5
  },
  {
    quote: 'He captured our Udaipur wedding so gracefully without forcing staged poses. Every picture feels like a still from a romantic movie.',
    name: 'Vikram & Ananya',
    role: 'Destination Wedding Couple',
    rating: 5
  },
  {
    quote: 'Working with Alex is an absolute breeze. Fast turnaround, incredible lighting mastery, and an innate eye for architectural symmetry.',
    name: 'Rohan Deshmukh',
    role: 'Principal Architect, Studio Form',
    rating: 5
  }
]

const BLOG_POSTS = [
  {
    id: 'b1',
    title: 'Mastering Natural Light in Dramatic Portraiture',
    date: 'August 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=600',
    snippet: 'How to use window reflections and directional shadows to create evocative portraits without heavy studio flashes.'
  },
  {
    id: 'b2',
    title: 'Behind the Scenes: Shooting a 3-Day Rajasthan Wedding',
    date: 'July 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600',
    snippet: 'Managing multi-camera backups, low-light night ceremonies, and high-energy crowd moments under intense timelines.'
  },
  {
    id: 'b3',
    title: 'My Organic Color Grading Workflow in Capture One',
    date: 'June 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
    snippet: 'Step-by-step breakdown of how I achieve timeless skin tones and deep filmic blacks without artificial filters.'
  }
]

// ============================================================
// Main Template Component
// ============================================================
export default function DeveloperPortfolioTemplate() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter)

  return (
    <div style={{ background: '#07070a', color: '#f8fafc', fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", minHeight: '100vh' }}>
      {/* Sticky Header Preview Bar */}
      <PreviewBackBar templateName="Photographer Portfolio" category="Personal Portfolio" categoryRoute="/templates/personal" />

      {/* STICKY NAVIGATION */}
      <header
        style={{
          position: 'fixed',
          top: 44,
          left: 0,
          right: 0,
          zIndex: 900,
          background: 'rgba(7, 7, 10, 0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.75rem 1.25rem'
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', color: '#ffffff' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #e2e8f0 0%, #64748b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Camera size={16} color="#07070a" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              ALEX <span style={{ color: '#38bdf8', fontWeight: 600 }}>VERMA</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '1.5rem' }}>
            {['Gallery', 'About', 'Services', 'Gear', 'Journal', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#38bdf8'}
                onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setBookingModalOpen(true)}
              style={{
                background: '#ffffff',
                color: '#07070a',
                border: 'none',
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <Calendar size={14} /> Book Session
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.25rem' }}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 84,
              left: 0,
              right: 0,
              zIndex: 899,
              background: '#0f172a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {['Gallery', 'About', 'Services', 'Gear', 'Journal', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#f1f5f9', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          overflow: 'hidden'
        }}
      >
        {/* Hero Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000"
            alt="Photographer Camera Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #07070a 85%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #07070a 100%)' }} />
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 820 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '1.5rem' }}>
              <Sparkles size={14} color="#38bdf8" /> Open for International & Commercial Assignments
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#ffffff', marginBottom: '1.5rem' }}>
              Capturing Stories <br />
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Beyond Words.
              </span>
            </h1>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#94a3b8', marginBottom: '2.5rem', maxWidth: 640 }}>
              Independent fashion, portrait, and commercial photographer based in Mumbai. Specializing in high-contrast editorial storytelling and timeless wedding documentary photography.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#gallery"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                  color: '#ffffff',
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.4)'
                }}
              >
                Explore Works <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats Ticker */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem', marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>12+</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>450+</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>20+</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>International Awards</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>100%</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / ARTIST PROFILE */}
      <section id="about" style={{ padding: '6rem 2rem', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Artist Photo */}
          <div>
            <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
                alt="Alex Verma Photographer Profile"
                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '1.5rem', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>Alex Verma</div>
                <div style={{ fontSize: '0.85rem', color: '#38bdf8' }}>Commercial & Editorial Photographer</div>
              </div>
            </div>
          </div>

          {/* Artist Story */}
          <div>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              The Artist & Philosophy
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Crafting Timeless Visual Memories Through Masterful Light.
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I started my creative journey documenting street culture across South Asia before transitioning into high-fashion editorial and destination wedding photography. Over the past decade, my work has been featured in premier publications including Vogue, Harper's Bazaar, and Architectural Digest.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              My philosophy is simple: create images that evoke a visceral emotional response rather than just static portraits. I blend cinematic lighting with candid documentary timing to deliver timeless visual legacies for my clients.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#38bdf8" /> Full Commercial Rights
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#38bdf8" /> Custom Calibrated Color Grading
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#38bdf8" /> Certified Drone Pilot
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#38bdf8" /> Worldwide Travel Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / WORKS GALLERY */}
      <section id="gallery" style={{ padding: '6rem 2rem', background: '#07070a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Selected Works
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Curated Photography Gallery
              </h2>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.375rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { id: 'all', label: 'All Works' },
                { id: 'portraits', label: 'Portraits' },
                { id: 'editorial', label: 'Editorial' },
                { id: 'weddings', label: 'Weddings' },
                { id: 'architecture', label: 'Architecture' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    background: activeFilter === tab.id ? '#38bdf8' : 'transparent',
                    color: activeFilter === tab.id ? '#07070a' : '#94a3b8',
                    border: 'none',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Display */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filteredGallery.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#1e293b',
                  height: 380
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.08)'
                  const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLDivElement
                  if (overlay) overlay.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                  const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLDivElement
                  if (overlay) overlay.style.opacity = '0'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />

                {/* Hover Overlay */}
                <div
                  className="card-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.75rem'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.375rem' }}>
                    {item.categoryLabel} • {item.client}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#f8fafc', fontSize: '0.8125rem', fontWeight: 600 }}>
                    <Maximize2 size={14} /> View Fullscreen Lightbox
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section id="services" style={{ padding: '6rem 2rem', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 4rem' }}>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              Investment Options
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Packages & Rates
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Transparent pricing packages crafted for portraits, commercial lookbooks, and multi-day destination weddings.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {PRICING_PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                style={{
                  background: pkg.popular ? 'linear-gradient(180deg, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)' : 'rgba(255, 255, 255, 0.03)',
                  border: pkg.popular ? '2px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#38bdf8', color: '#07070a', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {pkg.name}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem', minHeight: 40 }}>
                  {pkg.subtitle}
                </p>

                <div style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
                  {pkg.price} <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>/ project</span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem', marginBottom: '2rem', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    What's Included:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: 2 }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setBookingModalOpen(true)}
                  style={{
                    width: '100%',
                    background: pkg.popular ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)',
                    color: pkg.popular ? '#07070a' : '#ffffff',
                    border: 'none',
                    padding: '0.875rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Inquire Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEAR & TESTIMONIALS */}
      <section id="gear" style={{ padding: '6rem 2rem', background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Professional Setup
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Camera Gear & Tech
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We shoot exclusively on dual-slot full-frame camera systems with real-time backup redundancy to guarantee your memories are always secure.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {GEAR_LIST.map((g, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{g.category}</div>
                    <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem', marginTop: '0.25rem' }}>{g.item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Client Reviews
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '2rem' }}>
                Trusted by Editors & Couples
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} style={{ borderBottom: idx !== TESTIMONIALS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingBottom: idx !== TESTIMONIALS.length - 1 ? '1.5rem' : 0 }}>
                    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.75rem' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                      ))}
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1rem' }}>
                      "{t.quote}"
                    </p>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL / BLOG */}
      <section id="journal" style={{ padding: '6rem 2rem', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              Behind the Lens
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Photography Journal & Articles
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {BLOG_POSTS.map(post => (
              <div
                key={post.id}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {post.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING */}
      <section id="contact" style={{ padding: '6rem 2rem', background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          <div>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              Get In Touch
            </div>
            <h2 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Book Your Shoot
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Have an upcoming fashion campaign, wedding event, or portrait session in mind? Reach out today.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Email Us</div>
                  <div style={{ fontWeight: 600 }}>alex@alexvermaphotography.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Phone / WhatsApp</div>
                  <div style={{ fontWeight: 600 }}>+91 98765 43210</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Studio Address</div>
                  <div style={{ fontWeight: 600 }}>Bandra West, Mumbai, Maharashtra 400050</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Priyanka Sharma"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.875rem 1rem', borderRadius: '0.75rem', color: '#ffffff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>Email Address</label>
                <input
                  type="email"
                  placeholder="priyanka@example.com"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.875rem 1rem', borderRadius: '0.75rem', color: '#ffffff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>Shoot Category</label>
                <select
                  defaultValue="portrait"
                  style={{ width: '100%', background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.875rem 1rem', borderRadius: '0.75rem', color: '#ffffff', outline: 'none' }}
                >
                  <option value="portrait">Portrait & Personal Branding</option>
                  <option value="editorial">Editorial & Commercial Campaign</option>
                  <option value="wedding">Luxury Destination Wedding</option>
                  <option value="architecture">Architecture & Interior Photography</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>Project Details & Target Dates</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your shoot location, vision, dates, and requirements..."
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.875rem 1rem', borderRadius: '0.75rem', color: '#ffffff', outline: 'none', resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}
              >
                Send Inquiry Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} Alex Verma Photography. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Instagram</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Behance</a>
          </div>
        </div>
      </footer>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0,0,0,0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={24} />
            </button>

            <div onClick={e => e.stopPropagation()} style={{ maxWidth: 1000, width: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '0.75rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}
              />
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700 }}>{selectedImage.title}</h3>
                <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>{selectedImage.categoryLabel} • {selectedImage.client}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {bookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBookingModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '1.5rem', padding: '2.5rem', maxWidth: 500, width: '100%', position: 'relative' }}
            >
              <button
                onClick={() => setBookingModalOpen(false)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={22} />
              </button>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                Reserve a Shoot Session
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Select your preferred shoot type and we'll confirm availability within 24 hours.
              </p>

              <form onSubmit={e => { e.preventDefault(); setBookingModalOpen(false); alert('Booking request submitted!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <input type="email" placeholder="Email Address" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <input type="tel" placeholder="Phone / WhatsApp Number" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <input type="date" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <button type="submit" style={{ background: '#38bdf8', color: '#07070a', border: 'none', padding: '0.875rem', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem' }}>
                  Confirm Booking Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

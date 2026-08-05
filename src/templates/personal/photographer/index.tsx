import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Camera,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  X,
  Menu,
  Star,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ArrowUpRight,
  Sliders,
  Maximize2
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
  aspectRatio?: 'tall' | 'wide' | 'square'
  client?: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Vogue Autumn Cover Shoot',
    category: 'editorial',
    categoryLabel: 'Editorial',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'tall',
    client: 'Vogue India'
  },
  {
    id: 'g2',
    title: 'Urban Architecture & Shadows',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'wide',
    client: 'Design Quarterly'
  },
  {
    id: 'g3',
    title: 'Siddharth & Ananya Wedding',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'square',
    client: 'Private Couple'
  },
  {
    id: 'g4',
    title: 'Golden Hour Portraiture',
    category: 'portraits',
    categoryLabel: 'Portraits',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'tall',
    client: 'Model Portfolio'
  },
  {
    id: 'g5',
    title: 'High-Fashion Noir Collection',
    category: 'editorial',
    categoryLabel: 'Editorial',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'wide',
    client: 'Elle Magazine'
  },
  {
    id: 'g6',
    title: 'Minimalist Studio Expressions',
    category: 'portraits',
    categoryLabel: 'Portraits',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'square',
    client: 'Personal Project'
  },
  {
    id: 'g7',
    title: 'Udaipur Palace Destination Wedding',
    category: 'weddings',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'wide',
    client: 'Royal Weddings'
  },
  {
    id: 'g8',
    title: 'Brutalist Concrete Forms',
    category: 'architecture',
    categoryLabel: 'Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    aspectRatio: 'tall',
    client: 'ArchDaily'
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
      'Styling consultation included',
      '7-day turnaround delivery'
    ],
    popular: false
  },
  {
    id: 'editorial',
    name: 'Editorial & Commercial Shoot',
    price: '₹75,000',
    subtitle: 'High-end imagery for fashion labels, lookbooks & campaigns.',
    features: [
      'Full-day (8 hours) shoot session',
      'Professional lighting technician included',
      '60 retouched campaign shots',
      'Raw capture & color grading',
      'Full licensing rights for print/digital',
      'Art direction & moodboard design',
      'Dedicated digital tech on set'
    ],
    popular: true
  },
  {
    id: 'wedding',
    name: 'Luxury Destination Wedding',
    price: '₹2,50,000',
    subtitle: 'Cinematic documentary coverage for multi-day weddings.',
    features: [
      'Coverage for 2 full days',
      'Lead photographer + 2 senior associates',
      'Drone aerial photography included',
      '500+ master retouched photos',
      'Custom handcrafted Italian leather album',
      'Pre-wedding sunset session included',
      'Same-day preview highlights reel'
    ],
    popular: false
  }
]

const GEAR_LIST = [
  { category: 'Camera Bodies', item: 'Leica SL2 & Sony A1 (Dual Full Frame Systems)' },
  { category: 'Lenses', item: 'Sony GM 24-70mm f/2.8, 85mm f/1.4, 35mm f/1.4 Prime' },
  { category: 'Lighting', item: 'Profoto B10X Plus Strobes & Softboxes' },
  { category: 'Drone', item: 'DJI Mavic 3 Pro Cine (4K ProRes Drone)' },
  { category: 'Editing', item: 'Custom Color Profiles & Eizo ColorEdge Calibrated Monitors' }
]

const TESTIMONIALS = [
  {
    quote: 'Alex transformed our brand aesthetic completely. The editorial shots for our autumn campaign were featured on the cover of Harper’s Bazaar.',
    name: 'Meera Kapoor',
    role: 'Creative Director, Noir Label',
    rating: 5
  },
  {
    quote: 'He captured our Udaipur wedding so gracefully without forcing staged poses. Every picture feels like a still from a romantic movie.',
    name: 'Vikram & Roshni',
    role: 'Destination Wedding Clients',
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
    date: 'August 2, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=600',
    snippet: 'How to use window reflections and directional shadows to create evocative portraits without studio flashes.'
  },
  {
    id: 'b2',
    title: 'Behind the Scenes: shooting a 3-Day Wedding in Rajasthan',
    date: 'July 18, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600',
    snippet: 'Managing multi-cam backups, low-light night ceremonies, and high-energy crowd moments under pressure.'
  },
  {
    id: 'b3',
    title: 'My Color Grading Workflow in Lightroom & Capture One',
    date: 'June 25, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
    snippet: 'Step-by-step breakdown of how I create timeless, organic skin tones and deep filmic blacks.'
  }
]

// ============================================================
// Main Component
// ============================================================
export default function PhotographerPortfolio() {
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
    <div style={{ background: '#0a0a0f', color: '#f8fafc', fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", minHeight: '100vh' }}>
      {/* Sticky Header Preview Bar */}
      <PreviewBackBar templateName="Photographer Portfolio" category="Personal Portfolio" categoryRoute="/templates/personal" />

      {/* Navigation Header */}
      <header
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 900,
          background: scrolled ? 'rgba(10, 10, 15, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          padding: '1.1rem 2rem'
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', color: '#ffffff' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #e2e8f0 0%, #64748b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Camera size={18} color="#0a0a0f" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
              ALEX <span style={{ color: '#94a3b8', fontWeight: 400 }}>VERMA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
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
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setBookingModalOpen(true)}
              style={{
                background: '#ffffff',
                color: '#0a0a0f',
                border: 'none',
                padding: '0.625rem 1.25rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <Calendar size={14} /> Book Session
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.25rem' }}
              className="show-mobile-only"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 95,
              left: 0,
              right: 0,
              zIndex: 899,
              background: '#0f172a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
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
        {/* Background Image with Dark Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000"
            alt="Photographer Camera Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #0a0a0f 85%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #0a0a0f 100%)' }} />
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 800 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '1.5rem' }}>
              <Sparkles size={14} color="#38bdf8" /> Available for Worldwide Assignments
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#ffffff', marginBottom: '1.5rem' }}>
              Capturing Stories <br />
              <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>10+</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>350+</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Projects Shot</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>15+</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>International Awards</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>100%</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / ARTIST PROFILE */}
      <section id="about" style={{ padding: '6rem 2rem', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Artist Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
              <img
                src="https://images.unsplash.com/photo-1554046920-90dc2d3d0087?auto=format&fit=crop&q=80&w=800"
                alt="Alex Verma Photographer Profile"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(20%)' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>Alex Verma</div>
                <div style={{ fontSize: '0.85rem', color: '#38bdf8' }}>Founder & Lead Photographer</div>
              </div>
            </div>
          </div>

          {/* Artist Bio Text */}
          <div>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              The Mind Behind the Lens
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Believer in Raw Emotion & Subtle Shadows.
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I started my career documenting street culture across South Asia before transitioning into high-fashion editorial and destination wedding photography. Over the past decade, my work has been featured in premier publications including Vogue, Harper's Bazaar, and Architectural Digest.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              My philosophy is simple: create images that evoke a visceral visceral reaction rather than just static portraits. I blend cinematic lighting with candid documentary timing to deliver timeless visual legacies for my clients.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#38bdf8" /> Full Commercial Rights
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle2 size={18} color="#38bdf8" /> Calibrated Color Grading
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
      <section id="gallery" style={{ padding: '6rem 2rem', background: '#0a0a0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Curated Portfolio
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Selected Photography Works
              </h2>
            </div>

            {/* Filter Tabs */}
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
                    color: activeFilter === tab.id ? '#0a0a0f' : '#94a3b8',
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

          {/* Masonry / Grid Display */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
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
                    <Maximize2 size={14} /> Click to View Fullscreen
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & INVESTMENT / PRICING */}
      <section id="services" style={{ padding: '6rem 2rem', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 4rem' }}>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              Transparent Investment
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Packages & Pricing
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Tailored creative packages designed to deliver exceptional image quality with zero hidden costs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {PRICING_PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                style={{
                  background: pkg.popular ? 'linear-gradient(180deg, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%)' : 'rgba(255, 255, 255, 0.03)',
                  border: pkg.popular ? '2px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#38bdf8', color: '#0a0a0f', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                  {pkg.price} <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>/ shoot</span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem', marginBottom: '2rem', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    Package Includes:
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
                    color: pkg.popular ? '#0a0a0f' : '#ffffff',
                    border: 'none',
                    padding: '0.875rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEAR & EQUIPMENT */}
      <section id="gear" style={{ padding: '6rem 2rem', background: '#0a0a0f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Professional Grade Kit
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Gear & Technology
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We shoot exclusively on industry-leading cinema and mirrorless full-frame camera systems with dual-card redundancy for total peace of mind.
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

            {/* Testimonials Column */}
            <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Client Praise
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '2rem' }}>
                Trusted by Brands & Couples
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} style={{ borderBottom: idx !== TESTIMONIALS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingBottom: idx !== TESTIMONIALS.length - 1 ? '1.5rem' : 0 }}>
                    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.75rem' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                      ))}
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, italic: 'italic', marginBottom: '1rem' }}>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Behind the Lens
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Journal & Articles
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {BLOG_POSTS.map(post => (
              <div
                key={post.id}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'transform 0.3s ease'
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
      <section id="contact" style={{ padding: '6rem 2rem', background: '#0a0a0f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          <div>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              Let's Collaborate
            </div>
            <h2 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Book Your Session
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Have a campaign, destination wedding, or editorial concept in mind? Fill out the form or reach out directly.
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
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Direct Line / WhatsApp</div>
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
                  placeholder="e.g. Priyanaka Sharma"
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
      <footer style={{ background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} Alex Verma Photography. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Instagram</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>500px</a>
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

              <form onSubmit={e => { e.preventDefault(); setBookingModalOpen(false); alert('Booking request sent successfully!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <input type="email" placeholder="Email Address" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <input type="tel" placeholder="Phone / WhatsApp Number" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <input type="date" required style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ffffff', outline: 'none' }} />
                <button type="submit" style={{ background: '#38bdf8', color: '#0a0a0f', border: 'none', padding: '0.875rem', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem' }}>
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

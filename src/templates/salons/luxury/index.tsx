import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Scissors,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  Star,
  CheckCircle2,
  Calendar,
  User,
  ShieldCheck,
  Award,
  HeartHandshake,
  X,
  ChevronRight,
  Menu,
  Camera,
  Share2,
  Video
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Decorative Gold Ornament Divider
// ============================================================
const GoldDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0.5rem 0' }}>
    <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
    <Sparkles size={16} color="#d4af37" style={{ opacity: 0.6 }} />
    <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
  </div>
)

// Inline keyframe style for shimmer animation
const shimmerKeyframes = `
@keyframes goldShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@media (min-width: 900px) {
  .desktop-nav { display: flex !important; }
  .mobile-hamburger { display: none !important; }
}
`

// ============================================================
// Data & Types
// ============================================================

interface ServiceItem {
  id: string
  category: 'hair' | 'beauty' | 'grooming'
  title: string
  description: string
  duration: string
  price: string
  image: string
}

const SERVICES: ServiceItem[] = [
  // Hair Services
  {
    id: 'h1',
    category: 'hair',
    title: 'Haircut & Styling',
    description: 'Precision haircut customized to your face shape, followed by blow-dry and professional styling.',
    duration: '45 mins',
    price: '₹300',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'h2',
    category: 'hair',
    title: 'Hair Wash & Conditioning',
    description: 'Deep cleansing hair wash with soothing scalp therapy massage and nourishing conditioner.',
    duration: '30 mins',
    price: '₹200',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'h3',
    category: 'hair',
    title: 'Hair Styling & Blow Dry',
    description: 'Event-ready hair setting, beach waves, or sleek straight finish using heat-protective gloss.',
    duration: '40 mins',
    price: '₹500',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'h4',
    category: 'hair',
    title: 'Hair Coloring (Global/Highlights)',
    description: 'Ammonia-free vibrant hair coloring, root touch-up, balayage, or ombre with intense shine treatment.',
    duration: '120 mins',
    price: 'Starting ₹1,500',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600'
  },

  // Beauty Services
  {
    id: 'b1',
    category: 'beauty',
    title: 'Radiance Gold Facial',
    description: 'Deep pore cleansing, herbal exfoliation, gold-infused serum, and relaxing facial massage.',
    duration: '60 mins',
    price: '₹800',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    category: 'beauty',
    title: 'Herbal Skin Cleanup',
    description: 'Instant tan removal, blackhead extraction, soothing herbal mask, and skin hydration.',
    duration: '45 mins',
    price: '₹550',
    image: 'https://images.unsplash.com/photo-1512290900673-7002fa438548?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    category: 'beauty',
    title: 'Eyebrow & Face Threading',
    description: 'Gentle facial hair shaping and precise eyebrow arch definition by senior beauticians.',
    duration: '15 mins',
    price: '₹100',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b4',
    category: 'beauty',
    title: 'Full Body / Arm Waxing',
    description: 'Hygienic chocolate or Rica peel-off wax for silky smooth skin with minimal pain.',
    duration: '45 mins',
    price: 'Starting ₹400',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600'
  },

  // Grooming Services
  {
    id: 'g1',
    category: 'grooming',
    title: 'Beard Trim & Styling',
    description: 'Sharp razor edge lining, beard length trimming, and hot towel beard oil massage.',
    duration: '25 mins',
    price: '₹200',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g2',
    category: 'grooming',
    title: 'Royal Hot Towel Shave',
    description: 'Classic barber shave with rich lather, hot steam towel, and cooling balm finish.',
    duration: '30 mins',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g3',
    category: 'grooming',
    title: 'Nourishing Hair Spa',
    description: 'Intense keratin conditioning, deep scalp steam, and relaxing neck-and-shoulder stress relief.',
    duration: '60 mins',
    price: '₹1,200',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600'
  }
]

const PRICING_ITEMS = [
  { service: 'Haircut (Precision Cut & Style)', price: '₹300', tag: 'Popular' },
  { service: 'Haircut + Beard Trim Combo', price: '₹450', tag: 'Best Value' },
  { service: 'Radiance Facial Treatment', price: '₹800', tag: 'Glow Special' },
  { service: 'Nourishing Hair Spa Treatment', price: '₹1,200', tag: 'Deep Repair' },
  { service: 'Hair Coloring (Global / Balayage)', price: 'Starting ₹1,500', tag: 'Premium' },
]

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    title: 'Luxury Salon Studio',
    category: 'Ambience'
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200',
    title: 'Precision Styling & Cut',
    category: 'Haircut'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=1200',
    title: 'Vibrant Global Coloring',
    category: 'Hair Color'
  },
  {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200',
    title: 'Hydrating Facial Therapy',
    category: 'Beauty'
  },
  {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200',
    title: 'Sharp Beard Sculpting',
    category: 'Grooming'
  },
  {
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1200',
    title: 'Bridal Makeover Suite',
    category: 'Makeover'
  }
]

const REVIEWS = [
  {
    name: 'Ananya Sharma',
    role: 'Regular Client',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'The ambience at Aura is divine! I got the Hair Spa and Haircut done by Senior Stylist Rahul. Highly professional and spotless hygiene standards.'
  },
  {
    name: 'Rohan Verma',
    role: 'Corporate Executive',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Best haircut and beard shaping in town! The hot towel shave is pure bliss after a long week. Booking via WhatsApp was super easy.'
  },
  {
    name: 'Priya Mukherjee',
    role: 'Bridal Client',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Did my pre-bridal facial and hair coloring here. The gold glow facial gave me stunning results for my wedding events!'
  },
  {
    name: 'Vikramaditya Nair',
    role: 'Fitness Coach',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Exceptional service! Clean tools, friendly staff, and top-tier products like L’Oréal and Kérastase. 10/10 recommend.'
  }
]

export default function SalonTemplate() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'beauty' | 'grooming'>('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [bookingStatus, setBookingStatus] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircut & Styling (₹300)',
    date: '',
    time: '10:00 AM',
    notes: ''
  })

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory)

  const handleWhatsAppBooking = (customText?: string) => {
    const text = customText || "Hello, I'd like to book an appointment."
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello Aura Salon, I would like to book an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- Date: ${formData.date}\n- Preferred Time: ${formData.time}\n- Notes: ${formData.notes}`
    handleWhatsAppBooking(msg)
    setBookingStatus('Redirecting to WhatsApp to confirm your appointment...')
    setTimeout(() => setBookingStatus(null), 4000)
  }

  return (
    <div style={{ background: '#0a0a0c', color: '#f4f4f5', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', paddingTop: 42 }}>
      {/* Inject keyframe styles */}
      <style>{shimmerKeyframes}</style>
      
      {/* Top Template Preview Bar */}
      <PreviewBackBar
        templateName="Luxury Salon"
        category="Salons"
        categoryRoute="/templates/salons"
      />

      {/* ====================================================
          STICKY NAVIGATION BAR
      ==================================================== */}
      <header
        style={{
          position: 'fixed',
          top: 44,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(10, 10, 12, 0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.18)'
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>
              <Scissors size={22} color="#0a0a0c" />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.06em', color: '#ffffff', display: 'block', lineHeight: 1.1 }}>AURA</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', color: '#d4af37', textTransform: 'uppercase' }}>SALON & SPA</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {['About', 'Services', 'Pricing', 'Gallery', 'Reviews', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{ color: '#d4d4d8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4af37')}
                onMouseLeave={e => (e.currentTarget.style.color = '#d4d4d8')}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="tel:+919876543210"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1rem',
                borderRadius: 999,
                border: '1px solid rgba(212, 175, 55, 0.4)',
                background: 'rgba(212, 175, 55, 0.08)',
                color: '#f4e0a5',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.825rem'
              }}
            >
              <Phone size={14} />
              <span className="hide-mobile">Call Now</span>
            </a>

            <button
              onClick={() => handleWhatsAppBooking()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.2rem',
                borderRadius: 999,
                background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)',
                color: '#0a0a0c',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)'
              }}
            >
              <MessageCircle size={15} />
              Book Appointment
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.4rem', display: 'flex' }}
              className="mobile-hamburger"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#121216', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '1rem 1.5rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['About', 'Services', 'Pricing', 'Gallery', 'Reviews', 'Contact'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: '#e4e4e7', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* ====================================================
          1. HERO SECTION
      ==================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '7rem 1.5rem 8rem',
          background: 'linear-gradient(180deg, rgba(10, 10, 12, 0.4) 0%, rgba(10, 10, 12, 0.95) 100%), url(https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600) center/cover no-repeat',
          display: 'flex',
          alignItems: 'center',
          minHeight: '82vh'
        }}
      >
        {/* Gold Glow Ambient */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 680 }}
          >
            {/* Top Badge with shimmer */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: 999,
                background: 'linear-gradient(90deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.25) 50%, rgba(212,175,55,0.12) 100%)',
                backgroundSize: '200% 100%',
                animation: 'goldShimmer 3s ease-in-out infinite',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                color: '#f4e0a5',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={14} color="#d4af37" />
              Award-Winning Luxury Salon
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '1rem'
              }}
            >
              Look Your Best <br />
              <span style={{ background: 'linear-gradient(135deg, #fff 0%, #d4af37 60%, #aa7c11 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Every Day
              </span>
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: '1.15rem',
                color: '#a1a1aa',
                lineHeight: 1.65,
                marginBottom: '1rem',
                maxWidth: 560
              }}
            >
              Professional Hair, Beauty & Grooming Services.
            </p>
            <p
              style={{
                fontSize: '0.925rem',
                color: '#71717a',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                maxWidth: 520
              }}
            >
              Experience world-class haircuts, radiant facials, and bespoke grooming by certified master stylists — in a tranquil, ultra-hygienic sanctuary designed just for you.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => handleWhatsAppBooking("Hello, I'd like to book an appointment.")}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.9rem 2rem',
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)',
                  color: '#0a0a0c',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
                  transition: 'transform 0.2s'
                }}
              >
                <MessageCircle size={18} />
                Book Appointment
              </button>

              <a
                href="tel:+919876543210"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.9rem 2rem',
                  borderRadius: 12,
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Phone size={18} color="#d4af37" />
                Call Now
              </a>
            </div>

            {/* Quick Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
                gap: '1.25rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div>
                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#d4af37', margin: 0 }}>12+ Years</p>
                <p style={{ fontSize: '0.8rem', color: '#71717a', margin: '0.2rem 0 0' }}>Salon Excellence</p>
              </div>
              <div>
                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>15,000+</p>
                <p style={{ fontSize: '0.8rem', color: '#71717a', margin: '0.2rem 0 0' }}>Happy Clients</p>
              </div>
              <div>
                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#d4af37', margin: 0 }}>4.9 ★</p>
                <p style={{ fontSize: '0.8rem', color: '#71717a', margin: '0.2rem 0 0' }}>Google Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gold Ornamental Divider */}
      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}>
        <GoldDivider />
      </div>

      {/* ====================================================
          2. ABOUT US
      ==================================================== */}
      <section id="about" style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
                alt="Aura Salon Stylists"
                style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Floating Gold Card */}
            <div
              style={{
                position: 'absolute',
                bottom: -20,
                right: 0,
                background: '#18181b',
                border: '1px solid #d4af37',
                padding: '1rem 1.25rem',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              <Award size={32} color="#d4af37" />
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>100% Certified</p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#a1a1aa' }}>Master Stylists & Beauticians</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ABOUT AURA SALON
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, marginTop: '0.5rem', marginBottom: '1.25rem', color: '#ffffff' }}>
              Redefining Luxury & Personal Grooming
            </h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '2rem' }}>
              Welcome to <strong>Aura Salon & Spa</strong>, your premier destination for high-end hair design, radiant skin care, and refined grooming. We believe every individual deserves personalized care in a tranquil, ultra-hygienic sanctuary.
            </p>

            {/* Key Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <ShieldCheck size={22} color="#d4af37" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ margin: '0 0 0.2rem', color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Strict Hygiene</h4>
                  <p style={{ margin: 0, color: '#71717a', fontSize: '0.825rem' }}>Autoclave sterilized tools & single-use capes.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Sparkles size={22} color="#d4af37" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ margin: '0 0 0.2rem', color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Premium Products</h4>
                  <p style={{ margin: 0, color: '#71717a', fontSize: '0.825rem' }}>100% genuine L'Oréal, Dyson & Dermalogica.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <User size={22} color="#d4af37" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ margin: '0 0 0.2rem', color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Expert Stylists</h4>
                  <p style={{ margin: 0, color: '#71717a', fontSize: '0.825rem' }}>Trained by international hair & beauty artists.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <HeartHandshake size={22} color="#d4af37" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ margin: '0 0 0.2rem', color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Client Delight</h4>
                  <p style={{ margin: 0, color: '#71717a', fontSize: '0.825rem' }}>Bespoke consultation before every treatment.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Gold Ornamental Divider */}
      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}>
        <GoldDivider />
      </div>

      {/* ====================================================
          3. SERVICES
      ==================================================== */}
      <section id="services" style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TAILORED CARE
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff' }}>
              Our Signature Services
            </h2>
            <p style={{ color: '#a1a1aa', maxWidth: 540, margin: '0.5rem auto 0' }}>
              Choose from our curated collection of hair styling, facial therapies, and executive grooming treatments.
            </p>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Services' },
                { id: 'hair', label: 'Hair Services' },
                { id: 'beauty', label: 'Beauty Services' },
                { id: 'grooming', label: 'Grooming' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: 999,
                    border: '1px solid',
                    borderColor: activeCategory === tab.id ? '#d4af37' : 'rgba(255, 255, 255, 0.12)',
                    background: activeCategory === tab.id ? 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)' : '#18181b',
                    color: activeCategory === tab.id ? '#0a0a0c' : '#a1a1aa',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredServices.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -6 }}
                style={{
                  background: '#121216',
                  borderRadius: 20,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  />
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(10, 10, 12, 0.75)', backdropFilter: 'blur(8px)', color: '#d4af37', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700 }}>
                    {item.duration}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{item.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem', flex: 1 }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#d4af37' }}>{item.price}</span>
                    <button
                      onClick={() => handleWhatsAppBooking(`Hello, I'd like to book ${item.title} (${item.price}).`)}
                      style={{
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        color: '#f4e0a5',
                        padding: '0.45rem 1rem',
                        borderRadius: 10,
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                      }}
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ====================================================
          4. PRICING
      ==================================================== */}
      <section id="pricing" style={{ padding: '6rem 1.5rem', background: '#0e0e11', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TRANSPARENT RATES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff' }}>
              Menu & Pricing
            </h2>
            <p style={{ color: '#a1a1aa', maxWidth: 500, margin: '0.5rem auto 0' }}>
              No hidden costs. Premium salon treatments at honest prices.
            </p>
          </div>

          {/* Pricing Table Card */}
          <div
            style={{
              background: '#141418',
              borderRadius: 24,
              border: '1px solid rgba(212, 175, 55, 0.25)',
              padding: '2rem',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {PRICING_ITEMS.map((item, index) => (
                <div
                  key={item.service}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: index !== PRICING_ITEMS.length - 1 ? '1.25rem' : '0',
                    borderBottom: index !== PRICING_ITEMS.length - 1 ? '1px dashed rgba(255, 255, 255, 0.1)' : 'none',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#d4af37" />
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff', display: 'block' }}>{item.service}</span>
                      <span style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 600 }}>{item.tag}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>{item.price}</span>
                    <button
                      onClick={() => handleWhatsAppBooking(`Hello, I'd like to book ${item.service} at ${item.price}.`)}
                      style={{
                        background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)',
                        color: '#0a0a0c',
                        border: 'none',
                        padding: '0.45rem 0.9rem',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Gold Ornamental Divider */}
      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}>
        <GoldDivider />
      </div>

      {/* ====================================================
          5. GALLERY (WITH LIGHTBOX)
      ==================================================== */}
      <section id="gallery" style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              STYLING PORTFOLIO
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff' }}>
              Salon Gallery
            </h2>
            <p style={{ color: '#a1a1aa', maxWidth: 500, margin: '0.5rem auto 0' }}>
              Click any image to enlarge and preview our salon transformations.
            </p>
          </div>

          {/* Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(img.url)}
                style={{
                  height: 240,
                  borderRadius: 16,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.8) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1rem'
                  }}
                >
                  <span style={{ color: '#d4af37', fontSize: '0.75rem', fontWeight: 700 }}>{img.category}</span>
                  <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 800 }}>{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Lightbox Modal */}
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
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div style={{ position: 'relative', maxWidth: 900, width: '100%', textAlign: 'center' }}>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: -40,
                  right: 0,
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged salon view"
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 16, border: '1px solid #d4af37' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gold Ornamental Divider */}
      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}>
        <GoldDivider />
      </div>

      {/* ====================================================
          6. REVIEWS
      ==================================================== */}
      <section id="reviews" style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              CLIENT LOVE
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff' }}>
              What Our Clients Say
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                style={{
                  background: '#141418',
                  padding: '1.75rem',
                  borderRadius: 20,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop: '3px solid #d4af37',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                    ))}
                  </div>
                  <p style={{ color: '#d4d4d8', fontSize: '0.925rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{rev.comment}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <img src={rev.avatar} alt={rev.name} style={{ width: 44, height: 44, borderRadius: 999, objectFit: 'cover', border: '1px solid #d4af37' }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#ffffff', fontWeight: 700 }}>{rev.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#71717a' }}>{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Gold Ornamental Divider */}
      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}>
        <GoldDivider />
      </div>

      {/* ====================================================
          7. BUSINESS INFO & 8. GOOGLE MAPS
      ==================================================== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Info Side */}
          <div>
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              VISIT US
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', marginBottom: '2rem', color: '#ffffff' }}>
              Business Details & Hours
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: 12, border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <MapPin size={22} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Address</h4>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem' }}>102, MG Road, Indiranagar, Bengaluru, KA 560038</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: 12, border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <Phone size={22} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Phone Number</h4>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem' }}>+91 98765 43210 / +91 80 4123 7890</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: 12, border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <Mail size={22} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Email Address</h4>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem' }}>appointments@aurasalon.in</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: 12, border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <Clock size={22} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Opening Hours</h4>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem' }}>Monday – Sunday: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps View */}
          <div
            style={{
              height: 380,
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.5)'
            }}
          >
            <iframe
              title="Aura Salon Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9732731998595!2d77.6385568!3d12.9732152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a6eb268a73%3A0xe54b9f365313a078!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ====================================================
          9. CONTACT & BOOKING FORM
      ==================================================== */}
      <section id="contact" style={{ padding: '6rem 1.5rem', background: '#0e0e11', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              RESERVE YOUR SLOT
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff' }}>
              Book An Appointment
            </h2>
            <p style={{ color: '#a1a1aa', maxWidth: 460, margin: '0.5rem auto 0' }}>
              Fill out the details below to instantly send your booking request via WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            style={{
              background: '#141418',
              padding: '2.5rem',
              borderRadius: 24,
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.4rem' }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.4rem' }}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.4rem' }}>Select Service</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                >
                  <option value="Haircut & Styling (₹300)">Haircut & Styling (₹300)</option>
                  <option value="Haircut + Beard Combo (₹450)">Haircut + Beard Combo (₹450)</option>
                  <option value="Radiance Gold Facial (₹800)">Radiance Gold Facial (₹800)</option>
                  <option value="Nourishing Hair Spa (₹1,200)">Nourishing Hair Spa (₹1,200)</option>
                  <option value="Hair Coloring (Starting ₹1,500)">Hair Coloring (Starting ₹1,500)</option>
                  <option value="Full Body Waxing (Starting ₹400)">Full Body Waxing (Starting ₹400)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.4rem' }}>Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.4rem' }}>Special Request / Notes</label>
              <textarea
                rows={3}
                placeholder="Specify stylist preference or special requests..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none', resize: 'vertical' }}
              />
            </div>

            {bookingStatus && (
              <p style={{ color: '#22c55e', fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>{bookingStatus}</p>
            )}

            <button
              type="submit"
              style={{
                marginTop: '0.5rem',
                padding: '0.9rem',
                borderRadius: 12,
                background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)',
                color: '#0a0a0c',
                border: 'none',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
              }}
            >
              Confirm Appointment on WhatsApp
            </button>
          </form>

        </div>
      </section>

      {/* Gold Ornamental Divider above Footer */}
      <div style={{ background: '#070709', padding: '1.5rem 0' }}>
        <GoldDivider />
      </div>

      {/* ====================================================
          10. FOOTER
      ==================================================== */}
      <footer style={{ background: '#070709', borderTop: '1px solid rgba(212, 175, 55, 0.15)', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <Scissors size={24} color="#d4af37" />
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.05em' }}>AURA SALON</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Bengaluru's leading luxury hair, skin, and grooming lounge. Delivering perfection with every cut and glow.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              {['About', 'Services', 'Pricing', 'Gallery', 'Reviews', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#a1a1aa', textDecoration: 'none' }}>{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Working Hours</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.875rem', margin: '0 0 0.4rem' }}>Monday – Sunday:</p>
            <p style={{ color: '#d4af37', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>9:00 AM – 9:00 PM</p>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a href="#" style={{ padding: '0.6rem', background: '#18181b', borderRadius: 999, color: '#d4af37' }} aria-label="Instagram"><Camera size={18} /></a>
              <a href="#" style={{ padding: '0.6rem', background: '#18181b', borderRadius: 999, color: '#d4af37' }} aria-label="Facebook"><Share2 size={18} /></a>
              <a href="#" style={{ padding: '0.6rem', background: '#18181b', borderRadius: 999, color: '#d4af37' }} aria-label="YouTube"><Video size={18} /></a>
            </div>
          </div>

        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem', textAlign: 'center', color: '#71717a', fontSize: '0.825rem' }}>
          © 2026 Aura Salon & Spa. All rights reserved. Crafted for RivixoTech.
        </div>
      </footer>

      {/* ====================================================
          FLOATING WHATSAPP BUTTON (BOTTOM-RIGHT)
      ==================================================== */}
      <a
        href="https://wa.me/919876543210?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 999,
          width: 58,
          height: 58,
          borderRadius: 999,
          background: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={30} fill="#ffffff" color="#25D366" />
      </a>

    </div>
  )
}

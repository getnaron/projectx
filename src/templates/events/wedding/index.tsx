import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Phone, MessageCircle, Mail, MapPin, Clock, Star, X, Menu,
  ChevronRight, ChevronDown, Calendar, Users, Award, Heart, Camera,
  Video, Music, Car, Lightbulb, PartyPopper, Building2, Cake, GraduationCap,
  Utensils, Mic2, ArrowUp, Shield, Palette, DollarSign, Headphones,
  CheckCircle2, Gem, Crown, Play
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Gold Ornament Divider
// ============================================================
const GoldDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0.5rem 0' }}>
    <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
    <Sparkles size={16} color="#d4af37" style={{ opacity: 0.6 }} />
    <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
  </div>
)

// ============================================================
// Animated Counter Hook
// ============================================================
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}

// ============================================================
// Keyframe CSS
// ============================================================
const keyframeStyles = `
@keyframes goldShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
@media (min-width: 900px) {
  .re-desktop-nav { display: flex !important; }
  .re-mobile-hamburger { display: none !important; }
}
`

// ============================================================
// Data
// ============================================================

const SERVICES = [
  { icon: Heart, title: 'Wedding Planning', desc: 'Complete wedding planning from start to finish with dedicated coordinators.' },
  { icon: Gem, title: 'Engagement', desc: 'Memorable engagement ceremonies with stunning décor and entertainment.' },
  { icon: Cake, title: 'Birthday Parties', desc: 'Fun-filled birthday celebrations for kids and adults with themed setups.' },
  { icon: Building2, title: 'Corporate Events', desc: 'Professional corporate events, conferences, and seminars.' },
  { icon: PartyPopper, title: 'Product Launches', desc: 'Impactful product launch events that generate buzz and media coverage.' },
  { icon: MapPin, title: 'Destination Weddings', desc: 'Dream destination weddings at exotic locations across India and abroad.' },
  { icon: Camera, title: 'Photography', desc: 'Professional photography capturing every precious moment beautifully.' },
  { icon: Video, title: 'Videography', desc: 'Cinematic wedding films and event videos with drone coverage.' },
  { icon: Utensils, title: 'Catering', desc: 'Multi-cuisine catering with live counters and gourmet menus.' },
  { icon: Palette, title: 'Stage Decoration', desc: 'Stunning stage designs, mandap décor, and flower arrangements.' },
  { icon: Music, title: 'DJ & Entertainment', desc: 'Top DJs, live bands, dance troupes, and entertainment acts.' },
  { icon: Lightbulb, title: 'Sound & Lighting', desc: 'Professional sound systems, LED walls, and ambient lighting setups.' },
  { icon: Car, title: 'Luxury Car Rentals', desc: 'Premium wedding car rentals — Rolls Royce, Mercedes, vintage cars.' },
  { icon: Crown, title: 'Bride & Groom Entry', desc: 'Grand entry concepts with pyrotechnics, fog, and special effects.' },
]

const CATEGORIES = [
  { title: 'Luxury Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600' },
  { title: 'Corporate Conferences', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600' },
  { title: 'Birthday Celebrations', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600' },
  { title: 'College Events', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600' },
  { title: 'Destination Weddings', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600' },
  { title: 'Reception Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600' },
]

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1524824267900-2fa4dc3b3a24?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&q=80&w=800',
]

const PACKAGES = [
  {
    name: 'Silver',
    price: '₹2,50,000',
    icon: Shield,
    color: '#94a3b8',
    features: ['Venue Decoration', 'Photography (8 hrs)', 'Basic Catering (200 guests)', 'Sound System', 'DJ for 3 hrs', 'Event Coordinator'],
  },
  {
    name: 'Gold',
    price: '₹5,00,000',
    icon: Award,
    color: '#d4af37',
    popular: true,
    features: ['Premium Venue Decoration', 'Photography + Videography', 'Multi-cuisine Catering (500 guests)', 'LED Stage & Lighting', 'DJ + Live Band', 'Luxury Car', 'Dedicated Event Manager', 'Bride & Groom Entry'],
  },
  {
    name: 'Platinum',
    price: '₹10,00,000',
    icon: Crown,
    color: '#c084fc',
    features: ['Destination Wedding Planning', 'Full Photography + Drone + Cinematic Film', 'Gourmet Catering (1000+ guests)', 'Themed Stage Design', 'Celebrity DJ + Entertainment', 'Luxury Fleet', 'Complete Event Team', 'Grand Entry + Pyrotechnics', 'Post-event Album & Film'],
  },
]

const WHY_CHOOSE_US = [
  { icon: CheckCircle2, title: 'Professional Planning', desc: 'Expert coordinators handle every detail.' },
  { icon: Palette, title: 'Creative Decorations', desc: 'Stunning designs that leave guests in awe.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Luxury events without breaking the budget.' },
  { icon: Users, title: 'Experienced Team', desc: '25+ professionals with 10+ years experience.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We never miss a deadline — ever.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock assistance for every client.' },
  { icon: Gem, title: 'Customized Packages', desc: 'Tailored solutions for every budget and vision.' },
  { icon: Star, title: 'Premium Vendors', desc: 'Handpicked top-tier vendor network across India.' },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Consultation', desc: 'We understand your vision, preferences, and budget in a free consultation.' },
  { step: '02', title: 'Planning', desc: 'Our team creates a detailed event plan covering every element.' },
  { step: '03', title: 'Design', desc: 'We design stunning décor concepts, themes, and layouts for approval.' },
  { step: '04', title: 'Execution', desc: 'Our crew brings everything to life with precision and perfection.' },
  { step: '05', title: 'Celebration', desc: 'You enjoy your dream event while we handle every detail seamlessly.' },
]

const REVIEWS = [
  { name: 'Priya & Arjun Mehta', role: 'Wedding — Jaipur', rating: 5, text: 'Royal Events made our dream wedding come true! Every detail was perfect, from the stunning mandap to the grand entry. We can\'t thank them enough.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rajesh Kumar', role: 'Corporate Event — Mumbai', rating: 5, text: 'Our product launch was a massive success thanks to Royal Events. Professional team, stunning setup, and flawless execution. Highly recommended!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sneha Reddy', role: 'Birthday Party — Hyderabad', rating: 5, text: 'They planned the most magical birthday for my daughter. The theme decoration was jaw-dropping and the entertainment was top-notch!', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Vikram & Anita Singh', role: 'Destination Wedding — Goa', rating: 5, text: 'A destination wedding in Goa seemed impossible to plan, but Royal Events handled everything beautifully. Best decision we ever made!', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
]

const TEAM = [
  { name: 'Arjun Kapoor', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { name: 'Meera Sharma', role: 'Creative Director', image: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { name: 'Rohan Patel', role: 'Event Planner', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Ananya Iyer', role: 'Photography Head', image: 'https://randomuser.me/api/portraits/women/56.jpg' },
  { name: 'Karan Malhotra', role: 'Decoration Lead', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
]

const LATEST_EVENTS = [
  { title: 'Grand Royal Wedding — Udaipur Palace', date: 'July 2025', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600', desc: 'A breathtaking 3-day royal wedding celebration at the iconic City Palace with 800+ guests.' },
  { title: 'TechVision 2025 — Corporate Summit', date: 'June 2025', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600', desc: 'A tech industry summit with 1200+ attendees, keynote speakers, and exhibition halls.' },
  { title: 'Enchanted Garden Birthday — Mumbai', date: 'May 2025', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600', desc: 'A magical garden-themed birthday celebration with live entertainment and gourmet catering.' },
]

const FAQ_DATA = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 3–6 months in advance for weddings and 1–2 months for other events. However, we do accommodate last-minute requests based on availability.' },
  { q: 'Do you handle destination weddings?', a: 'Absolutely! We specialize in destination weddings across India (Goa, Rajasthan, Kerala, etc.) and internationally. Our team handles travel, accommodation, and all logistics.' },
  { q: 'Can I customize a package?', a: 'Yes! All our packages are fully customizable. We work with you to create a tailored plan that matches your vision and budget perfectly.' },
  { q: 'What is included in your photography service?', a: 'Our photography packages include pre-event shoots, candid photography, drone coverage, cinematic videography, same-day edits, and a premium photo album with digital delivery.' },
  { q: 'Do you provide catering services?', a: 'Yes, we partner with top catering companies offering multi-cuisine menus, live counters, dessert bars, and specialty dietary options for all event sizes.' },
  { q: 'Is there a minimum guest count?', a: 'No, we handle intimate gatherings of 50 guests to grand celebrations of 5000+. Every event gets the same premium attention and care.' },
]


// ============================================================
// MAIN COMPONENT
// ============================================================
export default function RoyalEventsTemplate() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: 'Wedding',
    eventDate: '', location: '', budget: '', guests: '', requirements: ''
  })

  // Stat counters
  const stat1 = useCounter(500)
  const stat2 = useCounter(10)
  const stat3 = useCounter(1000)
  const stat4 = useCounter(25)

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleWhatsApp = (msg?: string) => {
    const text = msg || "Hello, I'm interested in your event management services."
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `*New Event Inquiry — Royal Events*\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n🎉 Event: ${formData.eventType}\n📅 Date: ${formData.eventDate}\n📍 Location: ${formData.location}\n💰 Budget: ${formData.budget}\n👥 Guests: ${formData.guests}\n📝 Requirements: ${formData.requirements}`
    handleWhatsApp(msg)
  }

  // Shared styles
  const sectionHeadingStyle = { color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const }
  const h2Style = { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff' }
  const cardBg = '#141418'

  return (
    <div style={{ background: '#0a0a0c', color: '#f4f4f5', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', paddingTop: 42 }}>
      <style>{keyframeStyles}</style>

      {/* Preview Back Bar */}
      <PreviewBackBar templateName="Royal Events" category="Event Management" categoryRoute="/templates/events" />

      {/* ===== STICKY NAVIGATION ===== */}
      <header style={{ position: 'sticky', top: 42, zIndex: 100, background: 'rgba(10, 10, 12, 0.88)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212, 175, 55, 0.18)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>
              <Crown size={22} color="#0a0a0c" />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.06em', color: '#ffffff', display: 'block', lineHeight: 1.1 }}>ROYAL</span>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', color: '#d4af37', textTransform: 'uppercase' }}>EVENTS & CELEBRATIONS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="re-desktop-nav">
            {['About', 'Services', 'Portfolio', 'Packages', 'Team', 'Reviews', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#d4d4d8', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4af37')}
                onMouseLeave={e => (e.currentTarget.style.color = '#d4d4d8')}
              >{link}</a>
            ))}
          </nav>

          {/* Header CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="tel:+919876543210" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.9rem', borderRadius: 999, border: '1px solid rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.08)', color: '#f4e0a5', textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem' }}>
              <Phone size={14} />
            </a>
            <button onClick={() => handleWhatsApp()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.1rem', borderRadius: 999, background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)', color: '#0a0a0c', border: 'none', fontWeight: 700, fontSize: '0.825rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(212,175,55,0.25)' }}>
              <MessageCircle size={14} /> Get Quote
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem', display: 'flex' }} className="re-mobile-hamburger">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: '#121216', borderBottom: '1px solid rgba(212,175,55,0.2)', padding: '1rem 1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['About', 'Services', 'Portfolio', 'Packages', 'Team', 'Reviews', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: '#e4e4e7', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>{link}</a>
              ))}
            </div>
          </motion.div>
        )}
      </header>


      {/* ===== 1. HERO SECTION ===== */}
      <section style={{
        position: 'relative', padding: '7rem 1.5rem 8rem', minHeight: '90vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(10,10,12,0.3) 0%, rgba(10,10,12,0.92) 100%), url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600) center/cover no-repeat'
      }}>
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} style={{ maxWidth: 720 }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: 999,
              background: 'linear-gradient(90deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.25) 50%, rgba(212,175,55,0.12) 100%)',
              backgroundSize: '200% 100%', animation: 'goldShimmer 3s ease-in-out infinite',
              border: '1px solid rgba(212,175,55,0.35)', color: '#f4e0a5', fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem'
            }}>
              <Crown size={14} color="#d4af37" /> India's Premier Event Company
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', fontWeight: 900, lineHeight: 1.08, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Turning Your Dream{' '}
              <span style={{ background: 'linear-gradient(135deg, #fff 0%, #d4af37 60%, #aa7c11 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Events Into Reality
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: 580 }}>
              Creating Extraordinary Events, Lasting Memories.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#71717a', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: 540 }}>
              From intimate celebrations to grand destination weddings — Royal Events brings your vision to life with unmatched creativity, precision, and elegance.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <button onClick={() => handleWhatsApp("Hi, I'd like a free quote for my event.")} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: 12,
                background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)', color: '#0a0a0c', border: 'none',
                fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 8px 25px rgba(212,175,55,0.35)'
              }}>
                <Sparkles size={17} /> Get Free Quote
              </button>
              <button onClick={() => handleWhatsApp()} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: 12,
                background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.4)', color: '#4ade80',
                fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer'
              }}>
                <MessageCircle size={17} /> WhatsApp Us
              </button>
              <a href="tel:+919876543210" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: 12,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', backdropFilter: 'blur(10px)'
              }}>
                <Phone size={17} color="#d4af37" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#71717a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll Down</span>
          <div style={{ animation: 'scrollBounce 2s infinite' }}>
            <ChevronDown size={20} color="#d4af37" />
          </div>
        </div>
      </section>


      {/* ===== 2. STATISTICS ===== */}
      <section style={{ padding: '4rem 1.5rem', background: '#0e0e11', borderTop: '1px solid rgba(212,175,55,0.1)', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { ref: stat1.ref, count: stat1.count, suffix: '+', label: 'Events Completed', icon: PartyPopper },
            { ref: stat2.ref, count: stat2.count, suffix: '+', label: 'Years Experience', icon: Calendar },
            { ref: stat3.ref, count: stat3.count, suffix: '+', label: 'Happy Clients', icon: Heart },
            { ref: stat4.ref, count: stat4.count, suffix: '+', label: 'Team Members', icon: Users },
          ].map((s, i) => (
            <div key={i} ref={s.ref} style={{ padding: '2rem 1.5rem', background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: 20, backdropFilter: 'blur(8px)' }}>
              <s.icon size={28} color="#d4af37" style={{ marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '2.5rem', fontWeight: 900, color: '#d4af37', margin: 0 }}>{s.count}{s.suffix}</p>
              <p style={{ fontSize: '0.85rem', color: '#a1a1aa', margin: '0.3rem 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 3. ABOUT US ===== */}
      <section id="about" style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" alt="Royal Events Team" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} loading="lazy" />
            </div>
            <div style={{ position: 'absolute', bottom: -25, right: -15, background: '#18181b', border: '1px solid #d4af37', padding: '1rem 1.3rem', borderRadius: 16, display: 'flex', alignItems: 'center', gap: '0.85rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <Award size={32} color="#d4af37" />
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: '1rem', color: '#fff' }}>10+ Years</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#a1a1aa' }}>Of Event Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span style={sectionHeadingStyle}>ABOUT ROYAL EVENTS</span>
            <h2 style={{ ...h2Style, marginBottom: '1.25rem' }}>Crafting Unforgettable Experiences Since 2015</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
              <strong>Royal Events</strong> is a full-service event management company specializing in luxury weddings, corporate events, and grand celebrations. With a passionate team of 25+ professionals and a trusted vendor network across India, we transform your vision into extraordinary reality.
            </p>
            <p style={{ color: '#71717a', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '2rem' }}>
              Our commitment to creativity, flawless execution, and customer satisfaction has earned us the trust of over 1,000 happy clients and a 4.9★ Google rating.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { icon: Sparkles, title: 'Creative Vision', desc: 'Unique themes & stunning designs.' },
                { icon: Shield, title: 'Trusted Network', desc: 'Top-tier vendors across India.' },
                { icon: Users, title: 'Expert Team', desc: '25+ experienced professionals.' },
                { icon: Heart, title: 'Client First', desc: 'Your satisfaction is our priority.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <item.icon size={20} color="#d4af37" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ margin: '0 0 0.15rem', color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>{item.title}</h4>
                    <p style={{ margin: 0, color: '#71717a', fontSize: '0.8rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 4. SERVICES (14 cards) ===== */}
      <section id="services" style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>WHAT WE OFFER</span>
            <h2 style={h2Style}>Our Premium Services</h2>
            <p style={{ color: '#a1a1aa', maxWidth: 550, margin: '0.75rem auto 0' }}>Comprehensive event solutions — from concept to celebration.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {SERVICES.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{ background: cardBg, padding: '1.75rem', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(212,175,55,0.12)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <svc.icon size={22} color="#d4af37" />
                </div>
                <h3 style={{ margin: '0 0 0.4rem', color: '#fff', fontSize: '1rem', fontWeight: 700 }}>{svc.title}</h3>
                <p style={{ margin: 0, color: '#71717a', fontSize: '0.825rem', lineHeight: 1.5 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 5. FEATURED CATEGORIES ===== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>EVENT CATEGORIES</span>
            <h2 style={h2Style}>Events We Specialize In</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {CATEGORIES.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(212,175,55,0.2)' }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) img.style.transform = 'scale(1.08)' }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) img.style.transform = 'scale(1)' }}
              >
                <img src={cat.image} alt={cat.title} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                  <div>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.15rem', fontWeight: 800 }}>{cat.title}</h3>
                    <span style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                      View Details <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 6. PORTFOLIO GALLERY ===== */}
      <section id="portfolio" style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>OUR PORTFOLIO</span>
            <h2 style={h2Style}>Memorable Moments We've Created</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setSelectedImage(img)}
                style={{ borderRadius: 16, overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'; const im = e.currentTarget.querySelector('img') as HTMLImageElement; if (im) im.style.transform = 'scale(1.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; const im = e.currentTarget.querySelector('img') as HTMLImageElement; if (im) im.style.transform = 'scale(1)' }}
              >
                <img src={img} alt={`Event ${i + 1}`} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ position: 'relative', maxWidth: 900, width: '100%', textAlign: 'center' }}>
              <button onClick={() => setSelectedImage(null)} style={{ position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><X size={32} /></button>
              <img src={selectedImage} alt="Enlarged view" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 16, border: '1px solid #d4af37' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 7. FEATURED VIDEOS ===== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>VIDEO SHOWCASE</span>
            <h2 style={h2Style}>Watch Our Event Highlights</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Grand Royal Wedding Highlight', thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=700' },
              { title: 'Corporate Summit 2025 Recap', thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=700' },
              { title: 'Destination Wedding — Goa', thumb: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=700' },
            ].map((vid, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)', cursor: 'pointer' }}>
                <img src={vid.thumb} alt={vid.title} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(212,175,55,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(212,175,55,0.4)' }}>
                    <Play size={28} color="#0a0a0c" fill="#0a0a0c" />
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1.25rem', background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
                  <h4 style={{ margin: 0, color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>{vid.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 8. PACKAGES ===== */}
      <section id="packages" style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>PRICING PLANS</span>
            <h2 style={h2Style}>Choose Your Perfect Package</h2>
            <p style={{ color: '#a1a1aa', maxWidth: 500, margin: '0.75rem auto 0' }}>All packages are customizable. Contact us for a tailored quote.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            {PACKAGES.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: cardBg, borderRadius: 24, padding: '2.25rem', border: pkg.popular ? '2px solid #d4af37' : '1px solid rgba(255,255,255,0.08)',
                  position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: pkg.popular ? '0 0 40px rgba(212,175,55,0.15)' : 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 40px rgba(212,175,55,${pkg.popular ? '0.2' : '0.08'})` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = pkg.popular ? '0 0 40px rgba(212,175,55,0.15)' : 'none' }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: 16, right: -28, background: '#d4af37', color: '#0a0a0c', fontSize: '0.7rem', fontWeight: 800, padding: '0.25rem 2rem', transform: 'rotate(45deg)', letterSpacing: '0.05em' }}>
                    POPULAR
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(${pkg.color === '#d4af37' ? '212,175,55' : pkg.color === '#94a3b8' ? '148,163,184' : '192,132,252'},0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <pkg.icon size={22} color={pkg.color} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.15rem', fontWeight: 800 }}>{pkg.name} Package</h3>
                  </div>
                </div>
                <p style={{ fontSize: '2rem', fontWeight: 900, color: pkg.color, margin: '0.5rem 0 1.25rem' }}>{pkg.price}<span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#71717a' }}> onwards</span></p>
                <div style={{ flexGrow: 1 }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                      <CheckCircle2 size={16} color={pkg.color} />
                      <span style={{ color: '#d4d4d8', fontSize: '0.85rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => handleWhatsApp(`Hi, I'm interested in the ${pkg.name} Package (${pkg.price}).`)}
                  style={{
                    marginTop: '1.5rem', width: '100%', padding: '0.8rem', borderRadius: 12, border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                    background: pkg.popular ? 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)' : 'rgba(255,255,255,0.08)',
                    color: pkg.popular ? '#0a0a0c' : '#d4d4d8'
                  }}>
                  Get This Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 9. WHY CHOOSE US ===== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>WHY US</span>
            <h2 style={h2Style}>Why Choose Royal Events</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ background: cardBg, padding: '1.5rem', borderRadius: 18, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', transition: 'transform 0.3s, border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
              >
                <item.icon size={28} color="#d4af37" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ margin: '0 0 0.3rem', color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>{item.title}</h4>
                <p style={{ margin: 0, color: '#71717a', fontSize: '0.8rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 10. OUR PROCESS ===== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>HOW WE WORK</span>
            <h2 style={h2Style}>Our Event Planning Process</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', gap: '1.5rem', position: 'relative', paddingBottom: i < PROCESS_STEPS.length - 1 ? '2.5rem' : 0 }}>
                {/* Timeline line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div style={{ position: 'absolute', left: 22, top: 50, bottom: 0, width: 2, background: 'linear-gradient(180deg, #d4af37 0%, rgba(212,175,55,0.1) 100%)' }} />
                )}
                {/* Step number */}
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }}>
                  <span style={{ color: '#0a0a0c', fontWeight: 900, fontSize: '0.85rem' }}>{step.step}</span>
                </div>
                {/* Content */}
                <div style={{ background: cardBg, padding: '1.25rem 1.5rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', flexGrow: 1 }}>
                  <h4 style={{ margin: '0 0 0.3rem', color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>{step.title}</h4>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 11. TESTIMONIALS ===== */}
      <section id="reviews" style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>TESTIMONIALS</span>
            <h2 style={h2Style}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {REVIEWS.map((rev, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ background: cardBg, padding: '1.75rem', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', borderTop: '3px solid #d4af37', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(212,175,55,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  {Array.from({ length: rev.rating }).map((_, j) => <Star key={j} size={15} fill="#d4af37" color="#d4af37" />)}
                </div>
                <p style={{ color: '#d4d4d8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', fontStyle: 'italic' }}>"{rev.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={rev.avatar} alt={rev.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #d4af37' }} loading="lazy" />
                  <div>
                    <h4 style={{ margin: 0, color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>{rev.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#71717a' }}>{rev.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 12. TEAM ===== */}
      <section id="team" style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>OUR PEOPLE</span>
            <h2 style={h2Style}>Meet The Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '1.5rem' }}>
            {TEAM.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ textAlign: 'center', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: 120, height: 120, margin: '0 auto 1rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(212,175,55,0.4)', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <h4 style={{ margin: '0 0 0.2rem', color: '#fff', fontSize: '1rem', fontWeight: 700 }}>{member.name}</h4>
                <p style={{ margin: 0, color: '#d4af37', fontSize: '0.8rem', fontWeight: 600 }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 13. LATEST EVENTS ===== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>RECENT WORK</span>
            <h2 style={h2Style}>Latest Events We Delivered</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {LATEST_EVENTS.map((evt, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: cardBg, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s, border-color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
              >
                <img src={evt.image} alt={evt.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} loading="lazy" />
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ color: '#d4af37', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{evt.date}</span>
                  <h3 style={{ margin: '0.35rem 0 0.5rem', color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>{evt.title}</h3>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.85rem', lineHeight: 1.5 }}>{evt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0e0e11', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 14. FAQ ===== */}
      <section style={{ padding: '5rem 1.5rem 6rem', background: '#0e0e11' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>QUESTIONS</span>
            <h2 style={h2Style}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQ_DATA.map((faq, i) => (
              <div key={i} style={{ background: cardBg, borderRadius: 16, border: openFaq === i ? '1px solid rgba(212,175,55,0.3)' : '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', transition: 'border-color 0.3s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none', color: '#fff', fontSize: '0.95rem', fontWeight: 700, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <ChevronDown size={18} color="#d4af37" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', flexShrink: 0 }} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p style={{ padding: '0 1.5rem 1.25rem', margin: 0, color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div style={{ background: '#0a0a0c', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 15. CONTACT + MAPS & 16. INQUIRY FORM ===== */}
      <section id="contact" style={{ padding: '5rem 1.5rem 6rem', background: '#0a0a0c' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={sectionHeadingStyle}>GET IN TOUCH</span>
            <h2 style={h2Style}>Contact Us & Book Your Event</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
            {/* Contact Info + Map */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.5rem' }}>Business Details & Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {[
                  { icon: MapPin, title: 'Office Address', value: '502, Royal Tower, MG Road, Bengaluru, KA 560001' },
                  { icon: Phone, title: 'Phone', value: '+91 98765 43210 / +91 80 4567 8901' },
                  { icon: MessageCircle, title: 'WhatsApp', value: '+91 98765 43210' },
                  { icon: Mail, title: 'Email', value: 'hello@royalevents.in' },
                  { icon: Clock, title: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 8:00 PM' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ padding: '0.6rem', background: 'rgba(212,175,55,0.1)', borderRadius: 10, border: '1px solid rgba(212,175,55,0.25)' }}>
                      <item.icon size={18} color="#d4af37" />
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.15rem', color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>{item.title}</h4>
                      <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.85rem' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985593986041!2d77.6065!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzYnMjMuNCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="250" style={{ border: 0, display: 'block' }} loading="lazy" title="Royal Events Office Location"
                />
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.5rem' }}>Request a Free Quote</h3>
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    { label: 'Name *', key: 'name', type: 'text', placeholder: 'Your Full Name' },
                    { label: 'Phone *', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                    { label: 'Email', key: 'email', type: 'email', placeholder: 'you@email.com' },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>{f.label}</label>
                      <input type={f.type} required={f.label.includes('*')} placeholder={f.placeholder}
                        value={(formData as Record<string, string>)[f.key]}
                        onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '0.875rem' }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>Event Type *</label>
                    <select value={formData.eventType} onChange={e => setFormData({ ...formData, eventType: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '0.875rem' }}>
                      {['Wedding', 'Engagement', 'Birthday Party', 'Corporate Event', 'Product Launch', 'Destination Wedding', 'Reception', 'Other'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>Event Date</label>
                    <input type="date" value={formData.eventDate} onChange={e => setFormData({ ...formData, eventDate: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '0.875rem' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>Location</label>
                    <input type="text" placeholder="City, Venue" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '0.875rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>Approximate Budget</label>
                    <input type="text" placeholder="e.g. ₹5,00,000" value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '0.875rem' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>Number of Guests</label>
                  <input type="text" placeholder="e.g. 500" value={formData.guests} onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '0.875rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.35rem' }}>Special Requirements</label>
                  <textarea rows={3} placeholder="Any special requests or themes..." value={formData.requirements} onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: 10, background: '#1a1a20', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', resize: 'vertical', fontSize: '0.875rem' }} />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '0.85rem', borderRadius: 12, background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)',
                  color: '#0a0a0c', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 20px rgba(212,175,55,0.3)'
                }}>
                  Submit Inquiry via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <div style={{ background: '#070709', padding: '1.5rem 0' }}><GoldDivider /></div>


      {/* ===== 18. FOOTER ===== */}
      <footer style={{ background: '#070709', borderTop: '1px solid rgba(212,175,55,0.15)', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <Crown size={24} color="#d4af37" />
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.05em' }}>ROYAL EVENTS</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '0.875rem', lineHeight: 1.6 }}>Creating Extraordinary Events, Lasting Memories. India's premier event management company with 500+ events delivered.</p>
          </div>

          <div>
            <h4 style={{ color: '#d4af37', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Quick Links</h4>
            {['About', 'Services', 'Portfolio', 'Packages', 'Team', 'Reviews', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ display: 'block', color: '#a1a1aa', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                onMouseLeave={e => e.currentTarget.style.color = '#a1a1aa'}
              >{link}</a>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#d4af37', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</h4>
            {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Destination Weddings', 'Photography', 'Catering'].map(svc => (
              <p key={svc} style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '0.5rem', margin: '0 0 0.5rem' }}>{svc}</p>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#d4af37', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '0.5rem' }}>📞 +91 98765 43210</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '0.5rem' }}>📧 hello@royalevents.in</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '0.5rem' }}>📍 MG Road, Bengaluru</p>
            <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.75rem' }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#d4af37" color="#d4af37" />)}
              <span style={{ color: '#a1a1aa', fontSize: '0.8rem', marginLeft: '0.3rem' }}>4.9/5 Google</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#52525b', fontSize: '0.8rem', margin: 0 }}>
            © 2025 Royal Events. All rights reserved. | Designed by <span style={{ color: '#d4af37', fontWeight: 600 }}>PixelNest Studio</span>
          </p>
        </div>
      </footer>


      {/* ===== 17. FLOATING BUTTONS ===== */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Back to top */}
        {showBackToTop && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(20,20,24,0.9)', border: '1px solid rgba(212,175,55,0.3)', color: '#d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)' }}>
            <ArrowUp size={20} />
          </motion.button>
        )}
        {/* Call */}
        <a href="tel:+919876543210" style={{ width: 48, height: 48, borderRadius: '50%', background: '#1e40af', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(30,64,175,0.4)', textDecoration: 'none', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          <Phone size={22} />
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/919876543210?text=Hello%2C%20I%27m%20interested%20in%20your%20event%20management%20services." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          style={{ width: 58, height: 58, borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(37,211,102,0.45)', textDecoration: 'none', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          <MessageCircle size={30} fill="#fff" color="#25D366" />
        </a>
      </div>

    </div>
  )
}

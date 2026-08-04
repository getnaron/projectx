import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Calendar,
  Heart,
  Sun,
  Moon,
  ChevronDown,
  X,
  Star,
  Compass,
  Award,
  Feather,
  Wind,
  ShieldCheck,
  Check
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Data Constants
// ============================================================

const STATS = [
  { value: '12,500+', label: 'Yogis Guided', sub: 'Mindful Community' },
  { value: '18+', label: 'Certified Gurus', sub: 'RYT-500 Lineage Masters' },
  { value: '24', label: 'Daily Sessions', sub: 'Sunrise to Candlelight' },
  { value: '4.96★', label: 'Student Rating', sub: 'Verified Google Reviews' },
]

const PRACTICES = [
  {
    id: 'hatha',
    title: 'Traditional Hatha & Alignment',
    tagline: 'Foundational posture hold, breath control, & structural balance',
    description: 'Slow-paced, intentional practice focusing on posture alignment, isometric muscle hold, and deep breath extension. Ideal for building joint stability and mental presence.',
    level: 'All Levels (Beginner Friendly)',
    duration: '60 Mins',
    benefits: ['Posture Realignment', 'Spinal Decompression', 'Stress Hormone Reduction'],
    color: '#2d4a3e'
  },
  {
    id: 'vinyasa',
    title: 'Dynamic Vinyasa Flow',
    tagline: 'Synchronized movement with breath for strength & cardiovascular vitality',
    description: 'A fluid sequence linking breath with continuous movement. Builds internal heat, lean muscle endurance, and detoxification through rhythmic movement.',
    level: 'Intermediate - Advanced',
    duration: '75 Mins',
    benefits: ['Cardiovascular Health', 'Flexibility & Stamina', 'Lymphatic Drainage'],
    color: '#c27d66'
  },
  {
    id: 'ashtanga',
    title: 'Ashtanga Primary Series',
    tagline: 'Traditional Mysorean sequence of bandhas, drishti, & ujjayi breath',
    description: 'Dynamic, structured series of postures practiced in a specific order. Sharpens mental focus, builds profound physical strength, and purifies the nervous system.',
    level: 'Intermediate - Advanced',
    duration: '90 Mins',
    benefits: ['Deep Core Core Strength', 'Unshakeable Mental Focus', 'Internal Body Heat'],
    color: '#b06f7a'
  },
  {
    id: 'sound-healing',
    title: 'Pranayama & Tibetan Sound Bath',
    tagline: '432Hz Himalayan singing bowls, gong therapy, & deep restorative meditation',
    description: 'Immerse in pure sonic vibrations from hand-hammered Tibetan singing bowls while practicing ancient breathwork techniques to reset your parasympathetic system.',
    level: 'All Levels & Restorative',
    duration: '60 Mins',
    benefits: ['Deep REM Sleep Quality', 'Subconscious Stress Release', 'Emotional Harmony'],
    color: '#6b5b95'
  }
]

const CLASSES_TIMETABLE = [
  { day: 'Mon', time: '06:15 AM', name: 'Sunrise Hatha & Sun Salutations', guru: 'Guru Ananda', level: 'All Levels', category: 'Hatha', spots: 5 },
  { day: 'Mon', time: '07:30 AM', name: 'Pranayama & Kriya Detox', guru: 'Guru Ananda', level: 'All Levels', category: 'Pranayama', spots: 8 },
  { day: 'Mon', time: '05:30 PM', name: 'Vinyasa Power Flow', guru: 'Kavita Reddy', level: 'Intermediate', category: 'Vinyasa', spots: 3 },
  { day: 'Mon', time: '07:00 PM', name: 'Candlelight Sound Bowl Bath', guru: 'Kavita Reddy', level: 'All Levels', category: 'Sound Healing', spots: 2 },

  { day: 'Tue', time: '06:30 AM', name: 'Ashtanga Primary Series', guru: 'Dr. Sunita', level: 'Advanced', category: 'Ashtanga', spots: 4 },
  { day: 'Tue', time: '08:30 AM', name: 'Prenatal & Gentle Restorative', guru: 'Dr. Sunita', level: 'Beginner', category: 'Restorative', spots: 6 },
  { day: 'Tue', time: '06:00 PM', name: 'Hatha Posture Alignment', guru: 'Guru Ananda', level: 'All Levels', category: 'Hatha', spots: 7 },

  { day: 'Wed', time: '06:15 AM', name: 'Sunrise Vinyasa Flow', guru: 'Kavita Reddy', level: 'Intermediate', category: 'Vinyasa', spots: 4 },
  { day: 'Wed', time: '07:30 AM', name: 'Chakra Meditation & Breath', guru: 'Guru Ananda', level: 'All Levels', category: 'Pranayama', spots: 10 },
  { day: 'Wed', time: '06:30 PM', name: 'Tibetan Gong & Bowl Therapy', guru: 'Kavita Reddy', level: 'All Levels', category: 'Sound Healing', spots: 1 },

  { day: 'Thu', time: '06:30 AM', name: 'Hatha Core & Back Care', guru: 'Guru Ananda', level: 'All Levels', category: 'Hatha', spots: 6 },
  { day: 'Thu', time: '08:30 AM', name: 'Gentle Restorative Stretch', guru: 'Dr. Sunita', level: 'Beginner', category: 'Restorative', spots: 9 },
  { day: 'Thu', time: '06:00 PM', name: 'Ashtanga Led Class', guru: 'Dr. Sunita', level: 'Advanced', category: 'Ashtanga', spots: 3 },

  { day: 'Fri', time: '06:15 AM', name: 'Friday Flow & Gratitude', guru: 'Kavita Reddy', level: 'All Levels', category: 'Vinyasa', spots: 5 },
  { day: 'Fri', time: '07:00 PM', name: 'Full Moon Sound Healing', guru: 'Kavita Reddy & Team', level: 'All Levels', category: 'Sound Healing', spots: 2 },

  { day: 'Sat', time: '07:00 AM', name: 'Weekend 108 Sun Salutations', guru: 'All Masters', level: 'All Levels', category: 'Hatha', spots: 8 },
  { day: 'Sat', time: '09:00 AM', name: 'Pranayama Masterclass', guru: 'Guru Ananda', level: 'All Levels', category: 'Pranayama', spots: 4 },

  { day: 'Sun', time: '08:00 AM', name: 'Mindful Restorative & Herbal Tea', guru: 'Dr. Sunita', level: 'All Levels', category: 'Restorative', spots: 12 },
]

const TESTIMONIALS = [
  {
    name: 'Priyanka Sen',
    role: 'IT Architect, Malleshwaram',
    duration: 'Practicing 2 Years',
    quote: 'Prana Sanctuary is an oasis of tranquility amidst my chaotic tech job. The morning Pranayama sessions completely cured my anxiety and chronic insomnia.',
    stats: 'Zero Insomnia • 100% Calm'
  },
  {
    name: 'Ramesh Iyer',
    role: 'Retired Executive, Sadashivanagar',
    duration: 'Practicing 1 Year',
    quote: 'After my knee surgery, I thought I could never stretch again. Dr. Sunita guided me through gentle alignment postures. My mobility is better than 10 years ago!',
    stats: 'Recovered Knee Range'
  },
  {
    name: 'Divya Nair',
    role: 'Architect & Mother, Rajajinagar',
    duration: 'Practicing 8 Months',
    quote: 'The Friday Sound Bowl sessions are pure magic. You can feel the stress vibration leaving your mind. The bamboo studio ambiance is unparalleled in Bangalore.',
    stats: 'Deep Sleep & Peace'
  }
]

const GURUS = [
  {
    name: 'Guru Ananda Krishna',
    role: 'Master of Hatha & Himalayan Pranayama',
    lineage: '16+ Years Experience • Trained in Rishikesh & Mysuru',
    specialties: ['Kriya Pranayama', 'Hatha Alignment', 'Spinal Therapy'],
    gradient: 'linear-gradient(135deg, #1b382b 0%, #2d4a3e 100%)',
    avatar: 'AK'
  },
  {
    name: 'Dr. Sunita Deshmukh (PT)',
    role: 'Ashtanga Lead & Yoga Physiotherapist',
    credentials: 'BPT Physiotherapy | RYT-500 Certified Doctor',
    specialties: ['Ashtanga Primary', 'Joint Alignment', 'Prenatal Care'],
    gradient: 'linear-gradient(135deg, #4a2c26 0%, #c27d66 100%)',
    avatar: 'SD'
  },
  {
    name: 'Kavita Reddy',
    role: 'Vinyasa Flow Lead & Sound Healing Therapist',
    credentials: 'Certified Tibetan Sound Bowl Practitioner',
    specialties: ['Vinyasa Flow', 'Singing Bowls', 'Chakra Healing'],
    gradient: 'linear-gradient(135deg, #3c2a4d 0%, #6b5b95 100%)',
    avatar: 'KR'
  }
]

const MEMBERSHIPS = [
  {
    title: 'Seeker Pass (8 Classes)',
    price: '₹2,499',
    period: '/month',
    description: 'Ideal for those balancing busy schedules with twice-a-week practice.',
    features: [
      'Access to 8 Live In-Studio Classes per Month',
      'Mat Storage & Organic Mat Wash Included',
      'Free Herbal Infusion Tea at Lounge',
      'Access to Online Live Stream Library'
    ],
    popular: false,
    cta: 'Select Seeker Pass',
    color: '#94a3b8'
  },
  {
    title: 'Yogi Unlimited Pass',
    price: '₹4,200',
    period: '/month (Most Popular)',
    description: 'Unlimited access to all daily practices, sound baths, & workshops.',
    features: [
      'Unlimited Daily In-Studio Classes (Hatha, Vinyasa, Ashtanga)',
      '1 Complimentary Monthly Sound Bath Night Pass',
      'Complimentary Lululemon Eco-Mat Usage',
      '10% Discount on Rishikesh & Coorg Retreats',
      '1 Free Guest Mat Pass per month'
    ],
    popular: true,
    cta: 'Become Unlimited Yogi',
    color: '#2d4a3e'
  },
  {
    title: 'Annual Shanti Sanctuary',
    price: '₹3,400',
    period: '/month (Billed ₹40,800 annually)',
    description: 'Complete yearly commitment to physical, mental, & spiritual wellness.',
    features: [
      'Everything in Unlimited Pass',
      '2 Complimentary Private 1-on-1 Sessions with Guru Ananda',
      'Guaranteed Mat Reservation in Peak Sunrise Slots',
      'Complimentary Organic Cotton Practice Kimono',
      'Freeze Pass up to 60 Days per year'
    ],
    popular: false,
    cta: 'Join Shanti Annual',
    color: '#c27d66'
  }
]

const FAQS = [
  {
    q: 'Where is Prana Yoga Sanctuary located in Bangalore?',
    a: 'We are situated in Malleshwaram (8th Main Road, near Sankey Tank), Bengaluru. Our sanctuary features natural bamboo flooring, air-purified Himalayan salt walls, and a quiet garden tea lounge.'
  },
  {
    q: 'I am completely inflexible and a beginner. Can I join?',
    a: 'Absolutely! Yoga is not about flexibility; it is about self-awareness. Over 60% of our new practitioners start as complete beginners. Our Hatha and Restorative classes are designed for all body types.'
  },
  {
    q: 'Do I need to bring my own yoga mat?',
    a: 'We provide sanitized eco-friendly cork and rubber mats free of charge. Unlimited members also receive complimentary dedicated mat storage.'
  },
  {
    q: 'What is your trial class policy?',
    a: 'First-time visitors can book a complimentary Trial Mat Session to experience our instructors and serene atmosphere before enrolling.'
  }
]

// ============================================================
// Main Template Component
// ============================================================

export default function YogaStudioTemplate() {
  const [activePractice, setActivePractice] = useState('hatha')
  const [selectedDay, setSelectedDay] = useState('Mon')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Book Complimentary Trial Mat')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', practice: 'Hatha Alignment', slot: 'Sunrise (6:15 AM)' })

  // Interactive 1-Minute Box Breathing Widget State
  const [isBreathing, setIsBreathing] = useState(false)
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale')
  const [breathSeconds, setBreathSeconds] = useState(4)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathSeconds(prev => {
          if (prev > 1) return prev - 1
          // Switch phase
          setBreathPhase(current => {
            if (current === 'Inhale') return 'Hold'
            if (current === 'Hold') return 'Exhale'
            if (current === 'Exhale') return 'Rest'
            return 'Inhale'
          })
          return 4
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isBreathing])

  const handleOpenModal = (title = 'Book Complimentary Trial Mat') => {
    setModalTitle(title)
    setBookingSuccess(false)
    setIsModalOpen(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingSuccess(true)
  }

  const filteredClasses = CLASSES_TIMETABLE.filter(c => {
    const matchDay = c.day === selectedDay
    const matchCat = selectedCategory === 'All' || c.category === selectedCategory
    return matchDay && matchCat
  })

  return (
    <div style={{ background: '#faf7f2', color: '#2c3531', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Top Preview Navigation Bar */}
      <PreviewBackBar
        templateName="Yoga Studio"
        category="Gyms"
        categoryRoute="/templates/gyms"
      />

      {/* ====================================================
          STICKY MINDFUL NAVIGATION
      ==================================================== */}
      <header
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 90,
          background: 'rgba(250, 247, 242, 0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(45, 74, 62, 0.12)',
          padding: '0.85rem 2rem',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2d4a3e 0%, #1b382b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(45, 74, 62, 0.2)',
              }}
            >
              <Feather size={20} color="#faf7f2" />
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.01em', color: '#1b382b', fontFamily: 'Georgia, serif' }}>
                PRANA<span style={{ color: '#c27d66' }}>SANCTUARY</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.625rem', color: '#667065', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                YOGA & WELLNESS • MALLESHWARAM
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {[
              { label: 'Practices', href: '#practices' },
              { label: 'Breathing Tool', href: '#breathing' },
              { label: 'Schedule', href: '#schedule' },
              { label: 'Our Gurus', href: '#gurus' },
              { label: 'Memberships', href: '#pricing' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#4a554d',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#2d4a3e' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#4a554d' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleOpenModal('Book Complimentary Trial Mat')}
            style={{
              background: 'linear-gradient(135deg, #2d4a3e 0%, #1b382b 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.35rem',
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(45, 74, 62, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={15} color="#faf7f2" />
            BOOK TRIAL MAT
          </button>
        </div>
      </header>

      {/* ====================================================
          HERO SECTION
      ==================================================== */}
      <section
        id="hero"
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          position: 'relative',
          background: 'radial-gradient(circle at 50% 30%, rgba(194, 125, 102, 0.1) 0%, rgba(250, 247, 242, 1) 70%)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(45, 74, 62, 0.08)', border: '1px solid rgba(45, 74, 62, 0.2)', padding: '0.35rem 0.9rem', borderRadius: 20, marginBottom: '1.5rem' }}>
              <Sun size={15} color="#2d4a3e" />
              <span style={{ color: '#2d4a3e', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                TRADITIONAL YOGA & MINDFULNESS SANCTUARY
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontFamily: 'Georgia, serif', fontWeight: 500, lineHeight: 1.1, color: '#1b382b', marginBottom: '1.5rem' }}>
              Reconnect with Your <br />
              <em style={{ color: '#c27d66', fontStyle: 'italic' }}>Inner Calm & Vitality</em>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#556358', lineHeight: 1.8, maxWidth: 600, marginBottom: '2.5rem' }}>
              Step into Malleshwaram’s sun-drenched bamboo yoga sanctuary. Guided by certified RYT-500 gurus in traditional Hatha, Ashtanga, Pranayama breathwork, and Himalayan sound bowl healing.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                onClick={() => handleOpenModal('Book Complimentary Trial Mat')}
                style={{
                  background: 'linear-gradient(135deg, #2d4a3e 0%, #1b382b 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2.25rem',
                  borderRadius: 24,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(45, 74, 62, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                BOOK COMPLIMENTARY TRIAL MAT <Sparkles size={16} />
              </button>
              <a
                href="#schedule"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(45, 74, 62, 0.2)',
                  color: '#2d4a3e',
                  padding: '1rem 2rem',
                  borderRadius: 24,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Calendar size={18} color="#2d4a3e" /> EXPLORE TIMETABLE
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid rgba(45, 74, 62, 0.15)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                ))}
                <span style={{ fontWeight: 800, marginLeft: '0.4rem', color: '#1b382b' }}>4.96 / 5</span>
              </div>
              <span style={{ color: '#c5d1c8' }}>|</span>
              <span style={{ color: '#556358', fontSize: '0.875rem' }}>Rated #1 Yoga & Wellness Center in North Bangalore</span>
            </div>
          </motion.div>

          {/* Hero Card Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(45, 74, 62, 0.12)',
              borderRadius: 28,
              padding: '2.25rem',
              boxShadow: '0 20px 40px rgba(45, 74, 62, 0.08)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ background: '#2d4a3e', color: '#faf7f2', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                SUNRISE PRACTICE
              </span>
              <span style={{ color: '#c27d66', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Clock size={14} /> 06:15 AM Tomorrow
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginBottom: '0.5rem' }}>
              Sunrise Hatha & Sun Salutations
            </h3>
            <p style={{ color: '#667065', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Gentle joint warming, 12-step traditional AUM chanting, and postural spinal realignment with Guru Ananda Krishna.
            </p>

            <div style={{ background: '#faf7f2', padding: '1rem', borderRadius: 16, border: '1px solid rgba(45, 74, 62, 0.1)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#2d4a3e', fontWeight: 700 }}>
                <span>Ambience: Air-Purified Salt Room</span>
                <span style={{ color: '#c27d66' }}>5 Mats Remaining</span>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('Reserve Mat for Sunrise Hatha')}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #c27d66 0%, #a86550 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.85rem',
                borderRadius: 16,
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(194, 125, 102, 0.3)'
              }}
            >
              RESERVE YOUR MAT NOW
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div style={{ maxWidth: 1280, margin: '4rem auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {STATS.map(stat => (
            <div
              key={stat.label}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(45, 74, 62, 0.08)',
                padding: '1.5rem',
                borderRadius: 20,
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}
            >
              <p style={{ fontSize: '2.25rem', fontFamily: 'Georgia, serif', fontWeight: 700, color: '#2d4a3e', marginBottom: '0.2rem' }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1b382b' }}>{stat.label}</p>
              <p style={{ fontSize: '0.75rem', color: '#78877b', marginTop: '0.2rem' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          HOLISTIC YOGA PRACTICES
      ==================================================== */}
      <section id="practices" style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(45, 74, 62, 0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#c27d66', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              OUR HOLISTIC OFFERINGS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              TRADITIONAL PRACTICES & HEALING
            </h2>
            <p style={{ color: '#667065', maxWidth: 600, margin: '0.5rem auto 0' }}>
              Tailored for every stage of your spiritual and physical journey.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {PRACTICES.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                style={{
                  background: '#faf7f2',
                  border: `1px solid ${item.color}20`,
                  borderRadius: 24,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ background: `${item.color}15`, color: item.color, fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                    {item.duration} • {item.level}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginTop: '1rem', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#556358', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {item.description}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(45, 74, 62, 0.1)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2d4a3e', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Key Benefits:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {item.benefits.map(b => (
                        <span key={b} style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={14} color={item.color} /> {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Book ${item.title} Session`)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: `1px solid ${item.color}`,
                    color: item.color,
                    padding: '0.75rem',
                    borderRadius: 14,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  RESERVE PRACTICE MAT
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          INTERACTIVE 1-MINUTE BOX BREATHING TIMER WIDGET
      ==================================================== */}
      <section id="breathing" style={{ padding: '6rem 2rem', background: '#2d4a3e', color: '#faf7f2' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            MINDFUL MOMENT
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#faf7f2' }}>
            1-MINUTE GUIDED BOX BREATHING
          </h2>
          <p style={{ color: '#c5d1c8', maxWidth: 540, margin: '0.5rem auto 2.5rem' }}>
            Experience instant parasympathetic stress relief right now. Press start to follow the 4-second breath cycle.
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 32,
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {/* Animated Breath Ring */}
            <motion.div
              animate={{
                scale: isBreathing ? (breathPhase === 'Inhale' ? 1.3 : breathPhase === 'Exhale' ? 0.8 : 1.1) : 1,
              }}
              transition={{ duration: 3.8, ease: 'easeInOut' }}
              style={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(194,125,102,0.4) 0%, rgba(212,175,55,0.2) 100%)',
                border: '2px solid #d4af37',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(212,175,55,0.3)'
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#faf7f2', textTransform: 'uppercase' }}>
                {isBreathing ? breathPhase : 'READY'}
              </span>
              {isBreathing && (
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#d4af37' }}>{breathSeconds}s</span>
              )}
            </motion.div>

            <p style={{ fontSize: '0.9rem', color: '#c5d1c8' }}>
              {isBreathing ? 'Follow the circle: Inhale 4s • Hold 4s • Exhale 4s • Rest 4s' : 'Click below to begin your 1-minute calming exercise'}
            </p>

            <button
              onClick={() => {
                setIsBreathing(!isBreathing)
                setBreathSeconds(4)
                setBreathPhase('Inhale')
              }}
              style={{
                background: isBreathing ? '#c27d66' : '#d4af37',
                color: '#1b382b',
                border: 'none',
                padding: '0.85rem 2.25rem',
                borderRadius: 20,
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              {isBreathing ? 'PAUSE BREATHING' : 'START 1-MIN BOX BREATHING'}
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================
          LIVE INTERACTIVE CLASS TIMETABLE
      ==================================================== */}
      <section id="schedule" style={{ padding: '6rem 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#2d4a3e', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              DAILY PRACTICE SCHEDULE
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              LIVE STUDIO TIMETABLE
            </h2>
            <p style={{ color: '#667065' }}>
              Filter by day of week or practice style to reserve your mat space.
            </p>
          </div>

          {/* Day Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  background: selectedDay === day ? '#2d4a3e' : '#ffffff',
                  color: selectedDay === day ? '#ffffff' : '#556358',
                  border: '1px solid rgba(45, 74, 62, 0.15)',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 16,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Category Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {['All', 'Hatha', 'Vinyasa', 'Ashtanga', 'Pranayama', 'Sound Healing', 'Restorative'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'rgba(194, 125, 102, 0.15)' : 'transparent',
                  color: selectedCategory === cat ? '#c27d66' : '#667065',
                  border: `1px solid ${selectedCategory === cat ? '#c27d66' : 'rgba(45, 74, 62, 0.15)'}`,
                  padding: '0.4rem 1rem',
                  borderRadius: 20,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Classes Table */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {filteredClasses.length > 0 ? (
              filteredClasses.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(45, 74, 62, 0.1)',
                    borderRadius: 20,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#2d4a3e', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={15} /> {item.time}
                      </span>
                      <span style={{ background: '#faf7f2', color: '#c27d66', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 8 }}>
                        {item.level}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginBottom: '0.25rem' }}>
                      {item.name}
                    </h4>

                    <p style={{ fontSize: '0.85rem', color: '#667065', marginBottom: '0.5rem' }}>
                      Guided by <strong style={{ color: '#2d4a3e' }}>{item.guru}</strong>
                    </p>

                    <p style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>
                      {item.spots} Mat Spaces Available
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenModal(`Reserve Mat for ${item.name} (${item.day} ${item.time})`)}
                    style={{
                      background: 'rgba(45, 74, 62, 0.08)',
                      color: '#2d4a3e',
                      border: '1px solid rgba(45, 74, 62, 0.2)',
                      padding: '0.65rem',
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    RESERVE THIS MAT
                  </button>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#667065' }}>
                No sessions matching the selected filter. Try another day or practice style!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ====================================================
          LEAD GURUS & MASTERS
      ==================================================== */}
      <section id="gurus" style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(45, 74, 62, 0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#2d4a3e', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TRADITIONAL MASTERS & GURUS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              MEET OUR MINDFUL TEACHERS
            </h2>
            <p style={{ color: '#667065' }}>
              Authentic practitioners dedicated to guiding your physical alignment and inner peace.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {GURUS.map(guru => (
              <div
                key={guru.name}
                style={{
                  background: '#faf7f2',
                  border: '1px solid rgba(45, 74, 62, 0.1)',
                  borderRadius: 24,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: 180,
                    background: guru.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#faf7f2',
                    fontSize: '2.5rem',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 700
                  }}
                >
                  {guru.avatar}
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginBottom: '0.2rem' }}>{guru.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#c27d66', fontWeight: 700, marginBottom: '0.5rem' }}>{guru.role}</p>
                  <p style={{ fontSize: '0.75rem', color: '#667065', marginBottom: '1rem' }}>{guru.lineage || guru.credentials}</p>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {guru.specialties.map(spec => (
                      <span key={spec} style={{ background: '#ffffff', color: '#2d4a3e', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: 6, border: '1px solid rgba(45,74,62,0.1)' }}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenModal(`Book 1-on-1 Session with ${guru.name}`)}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid #2d4a3e',
                      color: '#2d4a3e',
                      padding: '0.65rem',
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    BOOK PRIVATE SESSION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          STUDENT TESTIMONIALS
      ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#c27d66', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TRANSFORMATIVE EXPERIENCES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              STUDENT REFLECTIONS
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(45, 74, 62, 0.1)',
                  borderRadius: 24,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} fill="#d4af37" color="#d4af37" />)}
                  </div>

                  <p style={{ color: '#4a554d', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(45, 74, 62, 0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: '#1b382b', fontSize: '0.95rem' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#667065' }}>{t.role}</span>
                  </div>
                  <span style={{ background: 'rgba(45, 74, 62, 0.08)', color: '#2d4a3e', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 8 }}>
                    {t.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          MEMBERSHIPS & PASS TIERS
      ==================================================== */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(45, 74, 62, 0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#2d4a3e', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              MINDFUL PASS TIERS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              MEMBERSHIP PLANS (INR ₹)
            </h2>
            <p style={{ color: '#667065' }}>
              Transparent pricing with complimentary mat storage and organic tea access.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {MEMBERSHIPS.map(plan => (
              <div
                key={plan.title}
                style={{
                  background: plan.popular ? 'radial-gradient(circle at 50% 0%, rgba(45,74,62,0.05) 0%, #ffffff 100%)' : '#faf7f2',
                  border: plan.popular ? '2px solid #2d4a3e' : '1px solid rgba(45, 74, 62, 0.12)',
                  borderRadius: 28,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 10px 30px rgba(45, 74, 62, 0.12)' : 'none'
                }}
              >
                {plan.popular && (
                  <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#2d4a3e', color: '#faf7f2', fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 1rem', borderRadius: 12 }}>
                    MOST POPULAR YOGI CHOICE
                  </span>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginBottom: '0.5rem' }}>{plan.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#667065', marginBottom: '1.5rem', minHeight: 40 }}>{plan.description}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '2.75rem', fontFamily: 'Georgia, serif', fontWeight: 700, color: '#1b382b' }}>{plan.price}</span>
                    <span style={{ color: '#667065', fontSize: '0.85rem' }}>{plan.period}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#4a554d', fontSize: '0.875rem' }}>
                        <CheckCircle2 size={18} color="#2d4a3e" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Enroll in ${plan.title} (${plan.price})`)}
                  style={{
                    width: '100%',
                    background: plan.popular ? 'linear-gradient(135deg, #2d4a3e 0%, #1b382b 100%)' : '#ffffff',
                    color: plan.popular ? '#ffffff' : '#2d4a3e',
                    border: plan.popular ? 'none' : '1px solid #2d4a3e',
                    padding: '1rem',
                    borderRadius: 16,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: plan.popular ? '0 4px 15px rgba(45, 74, 62, 0.3)' : 'none'
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          LOCATION & SANCTUARY CONTACT
      ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#2d4a3e', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              MALLESHWARAM SANCTUARY
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              VISIT OUR SANCTUARY
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="#2d4a3e" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1b382b' }}>Studio Address</h4>
                  <p style={{ color: '#556358', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Prana Yoga Sanctuary, 8th Main Road, Malleshwaram, Bengaluru, Karnataka 560003 (Near Sankey Tank & Margosa Road)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={22} color="#2d4a3e" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1b382b' }}>Practice Hours</h4>
                  <p style={{ color: '#556358', fontSize: '0.9rem' }}>Mon - Sun: 5:45 AM – 8:30 PM</p>
                  <p style={{ color: '#c27d66', fontSize: '0.8rem', fontWeight: 700, marginTop: '0.2rem' }}>*Silent Meditation & Herbal Tea Lounge open all day</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={22} color="#2d4a3e" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: '#1b382b' }}>Namaste Desk</h4>
                  <p style={{ color: '#556358', fontSize: '0.9rem' }}>+91 94480 88990 / +91 80 2345 6789</p>
                  <p style={{ color: '#556358', fontSize: '0.9rem' }}>namaste@pranasanctuary.in</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              height: 340,
              borderRadius: 24,
              background: '#ffffff',
              border: '1px solid rgba(45, 74, 62, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
            }}
          >
            <Feather size={48} color="#2d4a3e" />
            <p style={{ fontWeight: 800, fontSize: '1.25rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginTop: '1rem' }}>SANKEY TANK SANCTUARY</p>
            <p style={{ color: '#667065', fontSize: '0.875rem', marginTop: '0.4rem', maxWidth: 300 }}>
              Surrounded by lush green trees with air-purified Himalayan salt walls and bamboo floors.
            </p>
            <button
              onClick={() => handleOpenModal('Get Directions & Free Trial Mat')}
              style={{
                marginTop: '1.5rem',
                background: 'linear-gradient(135deg, #2d4a3e 0%, #1b382b 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: 16,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              GET MAP DIRECTIONS
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================
          FAQS & ACCORDION
      ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(45, 74, 62, 0.08)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#2d4a3e', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Georgia, serif', marginTop: '0.5rem', color: '#1b382b' }}>
              YOUR PRACTICE QUESTIONS
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#faf7f2',
                  border: '1px solid rgba(45, 74, 62, 0.1)',
                  borderRadius: 16,
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#1b382b',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    color="#2d4a3e"
                    style={{
                      transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s'
                    }}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: '#556358', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          FOOTER
      ==================================================== */}
      <footer style={{ background: '#1b382b', color: '#faf7f2', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#c27d66', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Feather size={16} color="#faf7f2" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#faf7f2', fontFamily: 'Georgia, serif' }}>
                PRANA<span style={{ color: '#c27d66' }}>SANCTUARY</span>
              </span>
            </div>
            <p style={{ color: '#a3b8aa', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 320 }}>
              Traditional Hatha, Ashtanga, Pranayama breathwork, and Tibetan Sound Bowl healing sanctuary in Malleshwaram, Bengaluru.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#faf7f2', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>NAVIGATION</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#a3b8aa' }}>
              <a href="#practices" style={{ color: 'inherit', textDecoration: 'none' }}>Yoga Practices</a>
              <a href="#breathing" style={{ color: 'inherit', textDecoration: 'none' }}>1-Min Box Breathing</a>
              <a href="#schedule" style={{ color: 'inherit', textDecoration: 'none' }}>Daily Schedule</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Mindful Memberships</a>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#faf7f2', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>LOCATIONS</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#a3b8aa' }}>
              <span>Malleshwaram (HQ)</span>
              <span>Indiranagar</span>
              <span>Sadashivanagar</span>
              <span>Rishikesh Retreat Center</span>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#faf7f2', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>PRACTICE HOURS</h5>
            <p style={{ fontSize: '0.85rem', color: '#a3b8aa' }}>Mon - Sun: 5:45 AM - 8:30 PM</p>
            <p style={{ fontSize: '0.75rem', color: '#c27d66', fontWeight: 700, marginTop: '0.5rem' }}>Silent Tea Lounge Open All Day</p>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', textAlign: 'center', color: '#788e7f', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Prana Sanctuary Yoga & Wellness Pvt. Ltd. All rights reserved. • Template Preview by PixelNest Studio
        </div>
      </footer>

      {/* ====================================================
          BOOKING & TRIAL MAT RESERVATION MODAL
      ==================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(27, 56, 43, 0.65)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#faf7f2',
                border: '1px solid rgba(45, 74, 62, 0.2)',
                borderRadius: 28,
                width: '100%',
                maxWidth: 480,
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', color: '#667065', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>

              {!bookingSuccess ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <Feather size={22} color="#2d4a3e" />
                    <span style={{ fontWeight: 800, color: '#2d4a3e', fontSize: '0.85rem', letterSpacing: '0.05em' }}>PRANA SANCTUARY RESERVATION</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginBottom: '1.5rem' }}>
                    {modalTitle}
                  </h3>

                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#2d4a3e', marginBottom: '0.3rem' }}>Your Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ananya Rao"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#ffffff',
                          border: '1px solid rgba(45, 74, 62, 0.2)',
                          borderRadius: 12,
                          padding: '0.75rem',
                          color: '#1b382b',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#2d4a3e', marginBottom: '0.3rem' }}>WhatsApp / Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#ffffff',
                          border: '1px solid rgba(45, 74, 62, 0.2)',
                          borderRadius: 12,
                          padding: '0.75rem',
                          color: '#1b382b',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#2d4a3e', marginBottom: '0.3rem' }}>Preferred Practice Style</label>
                      <select
                        value={formData.practice}
                        onChange={e => setFormData({ ...formData, practice: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#ffffff',
                          border: '1px solid rgba(45, 74, 62, 0.2)',
                          borderRadius: 12,
                          padding: '0.75rem',
                          color: '#1b382b',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Hatha Posture Alignment</option>
                        <option>Vinyasa Dynamic Flow</option>
                        <option>Pranayama & Tibetan Sound Bath</option>
                        <option>Ashtanga Primary Series</option>
                        <option>Prenatal Restorative</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#2d4a3e', marginBottom: '0.3rem' }}>Preferred Session Time</label>
                      <select
                        value={formData.slot}
                        onChange={e => setFormData({ ...formData, slot: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#ffffff',
                          border: '1px solid rgba(45, 74, 62, 0.2)',
                          borderRadius: 12,
                          padding: '0.75rem',
                          color: '#1b382b',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Sunrise (6:15 AM - 7:15 AM)</option>
                        <option>Morning (7:30 AM - 8:30 AM)</option>
                        <option>Evening (6:00 PM - 7:00 PM)</option>
                        <option>Candlelight (7:30 PM - 8:30 PM)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      style={{
                        marginTop: '0.5rem',
                        background: 'linear-gradient(135deg, #2d4a3e 0%, #1b382b 100%)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.9rem',
                        borderRadius: 16,
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(45, 74, 62, 0.3)'
                      }}
                    >
                      CONFIRM MAT RESERVATION
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(45, 74, 62, 0.1)', color: '#2d4a3e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', color: '#1b382b', marginBottom: '0.5rem' }}>MAT RESERVED!</h3>
                  <p style={{ color: '#556358', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Namaste <strong style={{ color: '#1b382b' }}>{formData.name}</strong>! Your mat space for <strong style={{ color: '#c27d66' }}>{modalTitle}</strong> has been reserved. Details sent to your WhatsApp ({formData.phone}).
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      background: '#2d4a3e',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: 16,
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    NAMASTE & CLOSE
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}


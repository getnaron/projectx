import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  UserCheck,
  ArrowRight,
  ChevronDown,
  X,
  Star,
  Trophy,
  Target,
  Sparkles,
  Search,
  BookMarked,
  BarChart2,
  ShieldCheck,
  Check
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Data Constants
// ============================================================

const STATS = [
  { value: '1,450+', label: 'JEE & NEET Qualifiers', sub: 'In 2025 Competitive Exams' },
  { value: 'AIR 4', label: 'Top All-India Rank', sub: 'In JEE Advanced 2025' },
  { value: '98.6%', label: 'Board Pass Rate', sub: 'CBSE & ICSE Class 10/12' },
  { value: '1:15', label: 'Faculty Ratio', sub: 'Personalized Doubt Support' },
]

const PROGRAMS = [
  {
    id: 'jee',
    title: '2-Year IIT-JEE Main & Advanced Integrated',
    target: 'Class 11th & 12th Students',
    badge: 'TOP SELECTION',
    duration: '2 Years (Classroom / Hybrid)',
    description: 'Kota-pedagogy curriculum covering Physics, Chemistry, & Mathematics. Includes 120+ All-India Test Series (AITS), Daily Practice Papers (DPPs), and 1-on-1 doubt counters.',
    qualifiers: '840+ Selections in 2025',
    accent: '#1e3a8a',
    features: ['120+ All-India Test Series (AITS)', 'Kota Pattern DPP Study Modules', 'Daily 2-Hour 1:1 Doubt Counters', 'Personalized Mentorship by IITians']
  },
  {
    id: 'neet',
    title: '2-Year NEET Medical Premier Batch',
    target: 'Class 11th & 12th Medical Aspirants',
    badge: 'MEDICAL SPECIAL',
    duration: '2 Years (Classroom / Hybrid)',
    description: 'NCERT deep-dive coaching for Biology (Botany & Zoology), Physics, & Organic Chemistry. Includes 15,000+ NCERT-focused MCQ drills and 3D anatomy visual labs.',
    qualifiers: '610+ Selections in AIIMS & Govt Medical',
    accent: '#10b981',
    features: ['100% NCERT Line-by-Line Coverage', '15,000+ Topicwise MCQ Question Bank', 'Weekly OMR Speed & Accuracy Tests', 'Guided by Senior MBBS Doctors']
  },
  {
    id: 'foundation',
    title: 'Class 8th - 10th Olympiad & Board Foundation',
    target: 'Class 8, 9 & 10 Students',
    badge: 'EARLY START',
    duration: '1 Year Program',
    description: 'Build unshakeable fundamentals in Mathematics & Science for NTSE, Olympiads (NSEJS/PRMO), and 95%+ Board exam performance.',
    qualifiers: '120+ NTSE & Olympiad Winners',
    accent: '#f59e0b',
    features: ['CBSE & ICSE Board Topper Preparation', 'NTSE & Math Olympiad Training', 'Interactive Science Lab Experiments', 'Mind-Mapping & Memory Techniques']
  },
  {
    id: 'dropper',
    title: '1-Year Dropper / Repeater Intensive Batch',
    target: 'Class 12th Passed (JEE / NEET Repeaters)',
    badge: 'RANK BOOSTER',
    duration: '1 Year Fast-Track',
    description: 'Rigorous 6-hour daily classroom coaching with speed-solving strategies, targeted error-analysis books, and weekly mock test rankings.',
    qualifiers: 'Avg +120 Marks Jump',
    accent: '#dc2626',
    features: ['Daily 6-Hour High-Intensity Coaching', 'Error-Analysis Diagnostic Reports', 'Speed-Solving Tricks & Shortcuts', 'Zero Distraction Supervised Study Hall']
  }
]

const RANKERS = [
  {
    name: 'Aditya Kulkarni',
    rank: 'AIR 4',
    exam: 'JEE Advanced 2025',
    score: '342 / 360 Marks',
    branch: 'Koramangala, Bengaluru',
    quote: 'Spark Academy’s Daily Practice Papers and weekly All-India rank tests gave me the exact confidence needed to score top 5 in JEE Advanced.',
    avatar: 'AK'
  },
  {
    name: 'Ananya Patel',
    rank: 'AIR 19',
    exam: 'NEET Medical 2025',
    score: '715 / 720 Marks',
    branch: 'Powai, Mumbai',
    quote: 'The NCERT line-by-line Biology drills and 1-on-1 doubt counters at Spark were the key reason I cleared AIIMS New Delhi.',
    avatar: 'AP'
  },
  {
    name: 'Rohan Sharma',
    rank: '99.4%',
    exam: 'CBSE 12th Board Topper',
    score: '497 / 500 Marks',
    branch: 'Kota Center',
    quote: 'I scored 100/100 in Physics and Mathematics thanks to the conceptual clarity provided by the faculty at Spark Academy.',
    avatar: 'RS'
  }
]

const FACULTY = [
  {
    name: 'Prof. H.C. Verma Lead (Retd.)',
    subject: 'Senior Physics Master',
    credentials: 'B.Tech IIT Kanpur • 20+ Yrs Exp in Kota',
    specialties: ['Mechanics & Electrodynamics', 'JEE Advanced Physics', 'Problem Solving'],
    avatar: 'HV',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 100%)'
  },
  {
    name: 'Dr. Meenakshi Sundaram',
    subject: 'Head of Organic & Inorganic Chemistry',
    credentials: 'Ph.D. Chemistry (IISc Bangalore) • Ex-Allen Kota',
    specialties: ['Reaction Mechanisms', 'NCERT Chemistry', 'NEET Drills'],
    avatar: 'MS',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)'
  },
  {
    name: 'Prof. R.K. Gupta',
    subject: 'Senior Mathematics Faculty',
    credentials: 'M.Tech IIT Delhi • 16+ Yrs Exp',
    specialties: ['Calculus & Coordinate Geometry', 'Speed Tricks', 'Olympiads'],
    avatar: 'RG',
    gradient: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)'
  }
]

const PRICING_SLABS = [
  {
    title: 'Class 8-10 Foundation',
    price: '₹35,000',
    period: '/year (Save via SPARK-SAT Test)',
    description: 'Comprehensive board & Olympiad prep for junior high students.',
    features: [
      'Complete Math & Science Syllabus Coverage',
      'CBSE / ICSE Board Specimen Test Papers',
      'Daily 1-Hour Doubt Desk Access',
      'Weekly Progress Report for Parents',
      'Free Spark Tablet Learning App Access'
    ],
    popular: false,
    cta: 'Apply for Foundation Batch',
    color: '#94a3b8'
  },
  {
    title: '2-Year JEE / NEET Integrated',
    price: '₹85,000',
    period: '/year (Most Popular)',
    description: 'Kota-standard classroom coaching with complete test series & study modules.',
    features: [
      'Full Classroom Coaching + Hybrid Live Backup',
      '120+ All-India Test Series (AITS) with All India Ranks',
      'Kota Printed Study Material Kit (18 Books)',
      'Unlimited 1:1 Doubt Counter Hours',
      'Dedicated Academic Counselor for Every Student',
      'Up to 100% Scholarship via Entrance Test'
    ],
    popular: true,
    cta: 'Register for SPARK-SAT Test',
    color: '#1e3a8a'
  },
  {
    title: '1-Year Dropper Intensive',
    price: '₹65,000',
    period: '/year (Fast-Track Target)',
    description: 'Focused 1-year repeater batch for maximum rank jump.',
    features: [
      'Daily 6-Hour Classroom Lectures & Problem Solving',
      'Error Diagnostic Analytics App',
      'Personalized Test Analysis with Head Faculty',
      'Supervised Silent Study Library Seat',
      'Hostel & Mess Assistance for Outstation Students'
    ],
    popular: false,
    cta: 'Join Dropper Batch',
    color: '#dc2626'
  }
]

const FAQS = [
  {
    q: 'What is the SPARK-SAT Scholarship Entrance Test?',
    a: 'SPARK-SAT is our nationwide talent assessment test for students entering Class 8th to 12th. Based on your test score, you can win up to a 100% fee waiver on tuition fees and guaranteed batch allocation.'
  },
  {
    q: 'Are outstation students provided hostel facilities?',
    a: 'Yes! We tie up with certified, secure hostels and PG facilities near our Koramangala (Bengaluru), Powai (Mumbai), and Kota centers with 24/7 security, Wi-Fi, and nutritious food.'
  },
  {
    q: 'What is the average batch size in classrooms?',
    a: 'We strictly maintain a 1:15 to 1:25 teacher-to-student ratio per batch to ensure every student receives personal attention and immediate doubt resolution.'
  },
  {
    q: 'Can parents monitor student test performance?',
    a: 'Yes, parents receive automated SMS reports and access to the Spark Parent Portal showing weekly test scores, All-India rank benchmarking, and attendance records.'
  }
]

// ============================================================
// Main Template Component
// ============================================================

export default function TutoringCenterTemplate() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Rank Estimator Tool State
  const [mockScore, setMockScore] = useState(180)
  const targetExam = 'JEE Main'
  const estimatedAir = Math.max(120, Math.round(150000 - (mockScore * 480))).toLocaleString('en-IN')

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Register for SPARK-SAT Scholarship Test')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', studentClass: 'Class 11th', targetExam: 'IIT-JEE Main & Advanced' })

  const handleOpenModal = (title = 'Register for SPARK-SAT Scholarship Test') => {
    setModalTitle(title)
    setBookingSuccess(false)
    setIsModalOpen(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingSuccess(true)
  }

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Top Preview Navigation Bar */}
      <PreviewBackBar
        templateName="Tutoring Center"
        category="Education"
        categoryRoute="/templates/education"
      />

      {/* ====================================================
          STICKY ACADEMIC NAVIGATION BAR
      ==================================================== */}
      <header
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 90,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(30, 58, 138, 0.12)',
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
                borderRadius: 10,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(30, 58, 138, 0.25)',
              }}
            >
              <Trophy size={20} color="#ffffff" />
            </div>
            <div>
              <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#1e3a8a' }}>
                SPARK<span style={{ color: '#f59e0b' }}>ACADEMY</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.625rem', color: '#64748b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                IIT-JEE • NEET • K-12 FOUNDATION
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {[
              { label: 'Programs', href: '#programs' },
              { label: 'Rank Estimator', href: '#estimator' },
              { label: 'Top Rankers', href: '#rankers' },
              { label: 'Star Faculty', href: '#faculty' },
              { label: 'Fee Structure', href: '#pricing' },
              { label: 'Branches', href: '#branches' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1e3a8a' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#475569' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleOpenModal('Register for SPARK-SAT Scholarship Test')}
            style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.35rem',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(30, 58, 138, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={15} color="#ffffff" />
            SCHOLARSHIP TEST
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
          background: 'radial-gradient(circle at 50% 20%, rgba(30, 58, 138, 0.08) 0%, rgba(248, 250, 252, 1) 70%)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30, 58, 138, 0.08)', border: '1px solid rgba(30, 58, 138, 0.2)', padding: '0.35rem 0.9rem', borderRadius: 20, marginBottom: '1.5rem' }}>
              <Trophy size={15} color="#1e3a8a" />
              <span style={{ color: '#1e3a8a', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                24 YEARS OF EXCELLENCE IN K-12, JEE & NEET
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.25rem)', fontWeight: 900, lineHeight: 1.08, color: '#0f172a', marginBottom: '1.5rem' }}>
              BUILD STRONG FOUNDATIONS. <br />
              CONQUER <span style={{ color: '#1e3a8a' }}>COMPETITIVE EXAMS</span>.
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7, maxWidth: 620, marginBottom: '2.5rem' }}>
              Kota-standard classroom coaching and personalized 1:1 tutoring in Bengaluru, Mumbai & Online. Over 1,450+ selections in JEE Advanced & NEET Medical 2025.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                onClick={() => handleOpenModal('Register for SPARK-SAT Scholarship Test')}
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2.25rem',
                  borderRadius: 10,
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(30, 58, 138, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                SPARK SCHOLARSHIP TEST (UP TO 100% OFF) <ArrowRight size={18} />
              </button>
              <a
                href="#programs"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(30, 58, 138, 0.2)',
                  color: '#1e3a8a',
                  padding: '1rem 2rem',
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <BookOpen size={18} color="#1e3a8a" /> VIEW BATCH TIMETABLE
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid rgba(30, 58, 138, 0.15)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span style={{ fontWeight: 800, marginLeft: '0.4rem', color: '#0f172a' }}>4.95 / 5</span>
              </div>
              <span style={{ color: '#cbd5e1' }}>|</span>
              <span style={{ color: '#475569', fontSize: '0.875rem' }}>Rated #1 JEE/NEET Institute in Karnataka & Maharashtra</span>
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(30, 58, 138, 0.15)',
              borderRadius: 24,
              padding: '2.25rem',
              boxShadow: '0 20px 40px rgba(30, 58, 138, 0.08)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ background: '#1e3a8a', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                HALL OF FAME 2025
              </span>
              <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Trophy size={14} /> AIR 4 IN INDIA
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
              Aditya Kulkarni • AIR 4
            </h3>
            <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              JEE Advanced 2025 Topper (342/360 Marks). Classroom student at Koramangala Bengaluru Center.
            </p>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 16, border: '1px solid rgba(30, 58, 138, 0.1)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#1e3a8a', fontWeight: 700 }}>
                <span>Physics: 118/120</span>
                <span>Math: 116/120</span>
                <span>Chem: 108/120</span>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('Book Demo Session with Aditya’s Faculty Team')}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.85rem',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              BOOK FREE DEMO WITH TOP FACULTY
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
                border: '1px solid rgba(30, 58, 138, 0.08)',
                padding: '1.5rem',
                borderRadius: 20,
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}
            >
              <p style={{ fontSize: '2.25rem', fontWeight: 900, color: '#1e3a8a', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>{stat.label}</p>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          COACHING PROGRAMS & BATCHES
      ==================================================== */}
      <section id="programs" style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(30, 58, 138, 0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#1e3a8a', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TARGETED CLASSROOM BATCHES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#0f172a', textTransform: 'uppercase' }}>
              OUR COACHING PROGRAMS
            </h2>
            <p style={{ color: '#64748b', maxWidth: 600, margin: '0.5rem auto 0' }}>
              Tailored for JEE, NEET, & K-12 Foundation with Kota pedagogy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {PROGRAMS.map(program => (
              <motion.div
                key={program.id}
                whileHover={{ y: -6 }}
                style={{
                  background: '#f8fafc',
                  border: `1px solid ${program.accent}30`,
                  borderRadius: 24,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ background: `${program.accent}15`, color: program.accent, fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                      {program.badge}
                    </span>
                    <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={14} /> {program.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.3rem' }}>
                    {program.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: program.accent, fontWeight: 700, marginBottom: '1rem' }}>
                    Target: {program.target}
                  </p>

                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {program.description}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(30, 58, 138, 0.1)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e3a8a', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Batch Highlights:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {program.features.map(f => (
                        <span key={f} style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={15} color={program.accent} /> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Apply for ${program.title}`)}
                  style={{
                    width: '100%',
                    background: program.accent,
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.85rem',
                    borderRadius: 12,
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  ENROLL IN THIS BATCH
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          INTERACTIVE AIR RANK ESTIMATOR
      ==================================================== */}
      <section id="estimator" style={{ padding: '6rem 2rem', background: '#1e3a8a', color: '#ffffff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              EXAM RANK PREDICTOR
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              INTERACTIVE AIR RANK ESTIMATOR
            </h2>
            <p style={{ color: '#cbd5e1' }}>
              Slide your expected mock test score to predict your projected All India Rank (AIR) in JEE Main.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 24,
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontWeight: 700, color: '#f8fafc' }}>Mock Test Score (out of 300)</label>
                  <span style={{ color: '#f59e0b', fontWeight: 900, fontSize: '1.2rem' }}>{mockScore} / 300 Marks</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="290"
                  value={mockScore}
                  onChange={e => setMockScore(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#f59e0b' }}
                />
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', fontWeight: 700 }}>PROJECTED PERCENTILE:</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>
                  {mockScore >= 250 ? '99.85+ Percentile (IIT Qualified)' : mockScore >= 180 ? '98.5+ Percentile (Top NIT Eligible)' : '94.0+ Percentile'}
                </p>
              </div>
            </div>

            <div
              style={{
                background: '#ffffff',
                color: '#0f172a',
                borderRadius: 20,
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
              }}
            >
              <p style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 800 }}>ESTIMATED ALL-INDIA RANK</p>
              <p style={{ fontSize: '3rem', fontWeight: 900, color: '#1e3a8a', margin: '0.2rem 0' }}>AIR {estimatedAir}</p>
              <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1.5rem' }}>Based on 2025 NTA exam normalization data</p>

              <button
                onClick={() => handleOpenModal(`Claim Rank Improvement Strategy for Mock Score ${mockScore}`)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: 10,
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                GET FREE RANK IMPROVEMENT STRATEGY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          STAR FACULTY MEMBERS
      ==================================================== */}
      <section id="faculty" style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(30, 58, 138, 0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#1e3a8a', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              EXPERT KOTA PEDAGOGY
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#0f172a', textTransform: 'uppercase' }}>
              OUR STAR FACULTY MEMBERS
            </h2>
            <p style={{ color: '#64748b' }}>
              IITians & Doctor PhDs with decades of experience producing All India Ranks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {FACULTY.map(f => (
              <div
                key={f.name}
                style={{
                  background: '#f8fafc',
                  border: '1px solid rgba(30, 58, 138, 0.1)',
                  borderRadius: 24,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: 160,
                    background: f.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '2.5rem',
                    fontWeight: 900
                  }}
                >
                  {f.avatar}
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.2rem' }}>{f.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#1e3a8a', fontWeight: 800, marginBottom: '0.3rem' }}>{f.subject}</p>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '1rem' }}>{f.credentials}</p>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {f.specialties.map(spec => (
                      <span key={spec} style={{ background: '#ffffff', color: '#1e3a8a', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: 6, border: '1px solid rgba(30,58,138,0.1)' }}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenModal(`Book Demo Class with ${f.name}`)}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid #1e3a8a',
                      color: '#1e3a8a',
                      padding: '0.65rem',
                      borderRadius: 10,
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    ATTEND LIVE DEMO CLASS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          COACHING FEES & SCHOLARSHIPS
      ==================================================== */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#f8fafc', borderTop: '1px solid rgba(30, 58, 138, 0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#1e3a8a', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TRANSPARENT FEE STRUCTURE
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#0f172a', textTransform: 'uppercase' }}>
              BATCH FEES & SCHOLARSHIPS (INR ₹)
            </h2>
            <p style={{ color: '#64748b' }}>
              Up to 100% tuition fee waiver available through the SPARK-SAT Entrance Test.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {PRICING_SLABS.map(plan => (
              <div
                key={plan.title}
                style={{
                  background: plan.popular ? '#ffffff' : '#ffffff',
                  border: plan.popular ? '2px solid #1e3a8a' : '1px solid rgba(30, 58, 138, 0.12)',
                  borderRadius: 24,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 10px 30px rgba(30, 58, 138, 0.12)' : 'none'
                }}
              >
                {plan.popular && (
                  <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#1e3a8a', color: '#ffffff', fontSize: '0.75rem', fontWeight: 900, padding: '0.3rem 1rem', borderRadius: 12 }}>
                    MOST POPULAR CLASSROOM BATCH
                  </span>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>{plan.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem', minHeight: 40 }}>{plan.description}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '2.75rem', fontWeight: 900, color: '#1e3a8a' }}>{plan.price}</span>
                    <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{plan.period}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#334155', fontSize: '0.875rem' }}>
                        <CheckCircle2 size={18} color="#1e3a8a" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Apply for ${plan.title} (${plan.price})`)}
                  style={{
                    width: '100%',
                    background: plan.popular ? 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)' : '#ffffff',
                    color: plan.popular ? '#ffffff' : '#1e3a8a',
                    border: plan.popular ? 'none' : '1px solid #1e3a8a',
                    padding: '1rem',
                    borderRadius: 12,
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
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
          FAQS & ACCORDION
      ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff', borderTop: '1px solid rgba(30, 58, 138, 0.08)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#1e3a8a', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginTop: '0.5rem', color: '#0f172a', textTransform: 'uppercase' }}>
              PARENT & STUDENT FAQS
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid rgba(30, 58, 138, 0.1)',
                  borderRadius: 14,
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
                    color: '#0f172a',
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
                    color="#1e3a8a"
                    style={{
                      transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s'
                    }}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
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
      <footer style={{ background: '#0f172a', color: '#ffffff', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trophy size={18} color="#ffffff" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#ffffff' }}>
                SPARK<span style={{ color: '#f59e0b' }}>ACADEMY</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 320 }}>
              Premier K-12, IIT-JEE Main & Advanced, & NEET Medical coaching institute with Kota pedagogy and 24 years of academic excellence.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>COURSES</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <a href="#programs" style={{ color: 'inherit', textDecoration: 'none' }}>IIT-JEE Main & Advanced</a>
              <a href="#programs" style={{ color: 'inherit', textDecoration: 'none' }}>NEET Medical Premier</a>
              <a href="#programs" style={{ color: 'inherit', textDecoration: 'none' }}>Class 8-10 Foundation</a>
              <a href="#programs" style={{ color: 'inherit', textDecoration: 'none' }}>1-Year Dropper Batch</a>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>CENTERS</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span>Koramangala, Bengaluru</span>
              <span>Powai, Mumbai</span>
              <span>Vigyan Nagar, Kota</span>
              <span>Online Live Hybrid</span>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>ADMISSIONS</h5>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>+91 98765 43210</p>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>admissions@sparkacademy.in</p>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Spark Educational Institutes Pvt. Ltd. All rights reserved. • Template Preview by RivixoTech
        </div>
      </footer>

      {/* ====================================================
          SCHOLARSHIP & DEMO CLASS MODAL
      ==================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(15, 23, 42, 0.8)',
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
                background: '#ffffff',
                border: '1px solid rgba(30, 58, 138, 0.2)',
                borderRadius: 24,
                width: '100%',
                maxWidth: 480,
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>

              {!bookingSuccess ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <Trophy size={22} color="#1e3a8a" />
                    <span style={{ fontWeight: 800, color: '#1e3a8a', fontSize: '0.85rem', letterSpacing: '0.05em' }}>SPARK ACADEMY REGISTRATION</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '1.5rem' }}>
                    {modalTitle}
                  </h3>

                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Student's Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Aditya Sharma"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#f8fafc',
                          border: '1px solid rgba(30, 58, 138, 0.2)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#0f172a',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Parent's WhatsApp / Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#f8fafc',
                          border: '1px solid rgba(30, 58, 138, 0.2)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#0f172a',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Current Academic Grade</label>
                      <select
                        value={formData.studentClass}
                        onChange={e => setFormData({ ...formData, studentClass: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#f8fafc',
                          border: '1px solid rgba(30, 58, 138, 0.2)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#0f172a',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Class 8th / 9th / 10th Foundation</option>
                        <option>Class 11th (Entering 11th)</option>
                        <option>Class 12th (Entering 12th)</option>
                        <option>12th Passed / Dropper</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>Target Competitive Exam</label>
                      <select
                        value={formData.targetExam}
                        onChange={e => setFormData({ ...formData, targetExam: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#f8fafc',
                          border: '1px solid rgba(30, 58, 138, 0.2)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#0f172a',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>IIT-JEE Main & Advanced</option>
                        <option>NEET Medical Entrance</option>
                        <option>Class 10th / 12th CBSE Board Topper</option>
                        <option>NTSE & Math Olympiad</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      style={{
                        marginTop: '0.5rem',
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.9rem',
                        borderRadius: 10,
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)'
                      }}
                    >
                      CONFIRM REGISTRATION & GET HALL TICKET
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>REGISTRATION SUCCESSFUL!</h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Dear <strong style={{ color: '#0f172a' }}>{formData.name}</strong>, your seat for <strong style={{ color: '#1e3a8a' }}>{modalTitle}</strong> is confirmed! Your admit card and test center details have been sent to WhatsApp ({formData.phone}).
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      background: '#1e3a8a',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: 8,
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    DONE & CLOSE
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


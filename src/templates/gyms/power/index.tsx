import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dumbbell,
  Zap,
  Flame,
  Trophy,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Calendar,
  UserCheck,
  ArrowRight,
  ChevronDown,
  X,
  Star,
  Activity,
  Award,
  ShieldCheck,
  Sparkles,
  Search
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Data Constants
// ============================================================

const STATS = [
  { value: '15,000+', label: 'Sq.Ft Facility', sub: 'Spacious Multi-Zone Arena' },
  { value: '4,800+', label: 'Active Members', sub: 'High-Energy Community' },
  { value: '35+', label: 'Master Trainers', sub: '100% Certified Coaches' },
  { value: '98.4%', label: 'Goal Hit Rate', sub: 'Verified Transformations' },
]

const ZONES = [
  {
    id: 'heavy-strength',
    title: 'Heavy Strength & Power Arena',
    tagline: 'Eleiko competition bars, Olympic platforms, & calibrated steel plates',
    description: 'Designed for serious powerlifters, bodybuilders, and strength athletes. Features 8 custom squat racks, deadlift platforms with rubber sound-dampening, and dumbbells up to 75 kg.',
    features: ['Eleiko & Rogue Rigs', '8 Dedicated Deadlift Platforms', 'Calibrated Competition Plates', 'Dumbbell Rack 2kg - 75kg'],
    accent: '#ef4444'
  },
  {
    id: 'turf-hiit',
    title: 'Functional Turf & HIIT Arena',
    tagline: '50-meter sprint turf track, sleds, battle ropes & plyo boxes',
    description: 'High-octane conditioning space engineered for athletic speed, agility, and cardiovascular endurance. Equipped with Concept2 rowers, SkiErgs, assault bikes, and heavy sleds.',
    features: ['50m Sprint & Prowler Turf', 'Concept2 Ergometers & Bikes', 'Sled Push & Tire Flip Area', 'TRX Suspension Station'],
    accent: '#f97316'
  },
  {
    id: 'boxing-ring',
    title: 'Knockout Boxing & Combat Zone',
    tagline: 'Full-size competition ring, heavy bags, & speed bags',
    description: 'Sharpen your strike technique, footwork, and core power. Lead by national-level boxing and MMA coaches with daily bag work and sparring sessions.',
    features: ['Regulation Boxing Ring', '12 Heavy Leather Punching Bags', 'Speed Bags & Double-End Bags', 'Sparring & Wrap Gear Provided'],
    accent: '#eab308'
  },
  {
    id: 'recovery-lounge',
    title: 'Cryo & Bio-Recovery Spa',
    tagline: 'Ice contrast baths, infrared dry sauna, & percussive massage lounge',
    description: 'Optimize post-workout recovery and muscle tissue repair with contrast cold plunge tubs, Finnish cedar sauna, and Hyperice percussive therapy.',
    features: ['4°C Cold Plunge Tubs', 'Infrared Cedar Dry Sauna', 'Hyperice Percussive Therapy', 'Sports Massage Therapists'],
    accent: '#06b6d4'
  }
]

const CLASSES_TIMETABLE = [
  { day: 'Mon', time: '06:00 AM', name: 'CrossFit Mayhem', trainer: 'Coach Vikram', intensity: 'Extreme', category: 'CrossFit', spots: 4 },
  { day: 'Mon', time: '07:30 AM', name: 'Iron HIIT Conditioning', trainer: 'Coach Priya', intensity: 'High', category: 'HIIT', spots: 6 },
  { day: 'Mon', time: '05:30 PM', name: 'Olympic Weightlifting 101', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spots: 3 },
  { day: 'Mon', time: '07:00 PM', name: 'Knockout Combat Boxing', trainer: 'Coach Rohan', intensity: 'Extreme', category: 'Boxing', spots: 2 },

  { day: 'Tue', time: '06:30 AM', name: 'Hypertrophy Upper Body', trainer: 'Coach Rohan', intensity: 'High', category: 'Strength', spots: 8 },
  { day: 'Tue', time: '08:00 AM', name: 'MetCon Fat Burn', trainer: 'Coach Priya', intensity: 'Extreme', category: 'HIIT', spots: 5 },
  { day: 'Tue', time: '06:00 PM', name: 'Mobility & Joint Prep', trainer: 'Coach Ananya', intensity: 'Moderate', category: 'Mobility', spots: 10 },
  { day: 'Tue', time: '07:30 PM', name: 'Powerlifting Squat Workshop', trainer: 'Coach Vikram', intensity: 'Extreme', category: 'Strength', spots: 2 },

  { day: 'Wed', time: '06:00 AM', name: 'CrossFit Mayhem', trainer: 'Coach Vikram', intensity: 'Extreme', category: 'CrossFit', spots: 3 },
  { day: 'Wed', time: '07:30 AM', name: 'Abdominal Core Shred', trainer: 'Coach Priya', intensity: 'High', category: 'HIIT', spots: 7 },
  { day: 'Wed', time: '05:30 PM', name: 'Heavy Deadlift Club', trainer: 'Coach Rohan', intensity: 'Extreme', category: 'Strength', spots: 1 },
  { day: 'Wed', time: '07:00 PM', name: 'Boxing Bag Conditioning', trainer: 'Coach Rohan', intensity: 'High', category: 'Boxing', spots: 4 },

  { day: 'Thu', time: '06:30 AM', name: 'Athletic Agility & Turf', trainer: 'Coach Priya', intensity: 'High', category: 'HIIT', spots: 6 },
  { day: 'Thu', time: '08:00 AM', name: 'Clean & Jerk Technique', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spots: 4 },
  { day: 'Thu', time: '06:00 PM', name: 'Tactical Boxing Sparring', trainer: 'Coach Rohan', intensity: 'Extreme', category: 'Boxing', spots: 3 },

  { day: 'Fri', time: '06:00 AM', name: 'Friday Shred MetCon', trainer: 'Coach Priya', intensity: 'Extreme', category: 'HIIT', spots: 5 },
  { day: 'Fri', time: '05:30 PM', name: 'Full Body Beast Mode', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spots: 2 },
  { day: 'Fri', time: '07:00 PM', name: 'Sound Recovery & Sauna', trainer: 'Coach Ananya', intensity: 'Low', category: 'Mobility', spots: 12 },

  { day: 'Sat', time: '07:00 AM', name: 'Weekend Warrior Challenge', trainer: 'Coach Vikram & Priya', intensity: 'Extreme', category: 'CrossFit', spots: 5 },
  { day: 'Sat', time: '09:00 AM', name: 'Boxing Masterclass', trainer: 'Coach Rohan', intensity: 'High', category: 'Boxing', spots: 8 },

  { day: 'Sun', time: '08:00 AM', name: 'Active Recovery & Foam Roll', trainer: 'Coach Ananya', intensity: 'Low', category: 'Mobility', spots: 15 },
]

const TRANSFORMATIONS = [
  {
    name: 'Arjun Mehta',
    age: 29,
    location: 'Indiranagar, Bangalore',
    achievement: '-19 kg Fat Loss & Deadlift 210 kg',
    duration: '5 Months',
    quote: 'IronForge changed my life. The trainers here don’t just watch—they correct every rep. The community energy during 6 AM CrossFit is unmatched!',
    stats: [
      { label: 'Weight', value: '94kg → 75kg' },
      { label: 'Body Fat', value: '28% → 13%' },
      { label: 'Bench Press', value: '60kg → 115kg' }
    ]
  },
  {
    name: 'Sneha Rao',
    age: 26,
    location: 'Koramangala, Bangalore',
    achievement: '+5 kg Lean Muscle & Posture Realign',
    duration: '4 Months',
    quote: 'I used to feel intimidated by gym weight rooms. Coach Priya guided me through barbell squatting safely. Now I lift heavier than most guys in my office!',
    stats: [
      { label: 'Squat', value: '20kg → 90kg' },
      { label: 'Body Fat', value: '24% → 18%' },
      { label: 'Stamina', value: '3x Increase' }
    ]
  },
  {
    name: 'Rajesh Kulkarni',
    age: 38,
    location: 'HSR Layout, Bangalore',
    achievement: 'Reversed Pre-Diabetes & +40% Energy',
    duration: '6 Months',
    quote: 'At 38, I had chronic back pain and high blood sugar. The functional turf workouts and personalized nutrition plan reversed my lab stats in 6 months.',
    stats: [
      { label: 'HbA1c', value: '6.8 → 5.3' },
      { label: 'Waist', value: '38" → 32"' },
      { label: 'Energy Level', value: 'Peak' }
    ]
  }
]

const TRAINERS = [
  {
    name: 'Vikram "Titan" Sharma',
    role: 'Head Strength & Weightlifting Coach',
    credentials: 'CSCS® Certified | Ex-National Weightlifting Medalist',
    experience: '12+ Years Experience',
    specialties: ['Olympic Lifts', 'Powerlifting', 'Hypertrophy'],
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #31103f 100%)',
    avatar: 'VS'
  },
  {
    name: 'Priya Nair',
    role: 'Head of Functional HIIT & Sports Nutrition',
    credentials: 'CrossFit L3 Trainer | ISSA Certified Nutritionist',
    experience: '8+ Years Experience',
    specialties: ['MetCon Fat Loss', 'Kettlebell Flow', 'Macros Coaching'],
    gradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)',
    avatar: 'PN'
  },
  {
    name: 'Rohan "Knockout" Kapoor',
    role: 'Combat Sports & Conditioning Lead',
    credentials: 'Pro Boxing Coach | Black Belt Kickboxing',
    experience: '10+ Years Experience',
    specialties: ['Pro Boxing', 'Footwork & Speed', 'Core Endurance'],
    gradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
    avatar: 'RK'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Mobility & Athletic Recovery Specialist',
    credentials: 'FRC® Mobility Specialist | Physiotherapy BPT',
    experience: '6+ Years Experience',
    specialties: ['Joint Prehab', 'Injury Rehab', 'Cryo Recovery'],
    gradient: 'linear-gradient(135deg, #172554 0%, #1e1b4b 100%)',
    avatar: 'AD'
  }
]

const MEMBERSHIPS = [
  {
    title: 'Starter Gym Pass',
    price: '₹2,999',
    period: '/month',
    description: 'Perfect for local fitness enthusiasts looking for top equipment access.',
    features: [
      'Full Gym Floor & Strength Zone Access',
      'Locker & Steam Room Included',
      'Free Fitness & Body Composition Scan',
      'Access 06:00 AM - 10:00 PM Daily',
    ],
    popular: false,
    cta: 'Select Starter Plan',
    color: '#94a3b8'
  },
  {
    title: '6-Month Pro Cult Tier',
    price: '₹2,199',
    period: '/month (Billed ₹13,194)',
    description: 'Our most popular membership for committed fitness transformations.',
    features: [
      '24/7 Unlimited Facility Access',
      'All Group HIIT, Boxing & CrossFit Classes',
      '2 Complimentary 1-on-1 PT Sessions',
      'Unlimited Cryo Cold Plunge & Sauna',
      'Customized Meal Plan & Monthly InBody® Scan',
      '1 Free Guest Pass per month'
    ],
    popular: true,
    cta: 'Claim Pro Membership',
    color: '#ef4444'
  },
  {
    title: 'Annual Titan All-Access',
    price: '₹1,599',
    period: '/month (Billed ₹19,188)',
    description: 'Maximum value tier with VIP perks and permanent trainer guidance.',
    features: [
      'Everything in Pro Tier',
      'Dedicated Personal Locker',
      'IronForge Official Merchandise Kit',
      'Bi-Weekly Nutritionist Check-in',
      'Freeze Membership up to 45 Days',
      'Priority Class Slot Reservation'
    ],
    popular: false,
    cta: 'Join Titan All-Access',
    color: '#eab308'
  }
]

const FAQS = [
  {
    q: 'Where is IronForge Cult Fitness located in Bangalore?',
    a: 'We are located at 100 Feet Road, Indiranagar, Bengaluru (near Toit & Metro Station). We span 15,000 sq.ft across 3 floors with dedicated underground parking.'
  },
  {
    q: 'Do you offer a free trial pass before joining?',
    a: 'Yes! We offer a 3-Day All-Access Pass for first-time visitors so you can test our equipment, group classes, and sauna before deciding.'
  },
  {
    q: 'Are personal trainers certified?',
    a: '100% of our coaches hold internationally recognized certifications (CSCS, CrossFit L2/L3, ISSA, ACE) and have background in professional athletic sports.'
  },
  {
    q: 'What are your operating hours?',
    a: 'Pro and Titan members have 24/7 keycard access. General gym hours with live floor trainers are 5:00 AM to 11:30 PM Monday through Saturday, and 6:00 AM to 9:00 PM on Sundays.'
  }
]

// ============================================================
// Main Template Component
// ============================================================

export default function PowerGymTemplate() {
  const [activeZone, setActiveZone] = useState('heavy-strength')
  const [selectedDay, setSelectedDay] = useState('Mon')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Booking Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Claim 3-Day Free VIP Pass')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', goal: 'Fat Loss & Muscle', slot: 'Morning (6 AM - 10 AM)' })

  // Interactive BMI Calculator state
  const [heightCm, setHeightCm] = useState(175)
  const [weightKg, setWeightKg] = useState(74)
  const bmi = (weightKg / ((heightCm / 100) * (heightCm / 100))).toFixed(1)

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: '#3b82f6', workout: 'Hypertrophy & High Calorie Mass Building' }
    if (val < 25) return { text: 'Optimal Fitness Weight', color: '#22c55e', workout: 'CrossFit MetCon & Heavy Strength Maintenance' }
    if (val < 30) return { text: 'Overweight Range', color: '#f97316', workout: 'High-Calorie HIIT Turf & Boxing Shred' }
    return { text: 'High Body Fat Index', color: '#ef4444', workout: 'Low-Impact Cardio Turf + Personalized PT Plan' }
  }
  const bmiInfo = getBmiCategory(parseFloat(bmi))

  const handleOpenModal = (title = 'Claim 3-Day Free VIP Pass') => {
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
    <div style={{ background: '#090a0f', color: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Top Preview Navigation Bar */}
      <PreviewBackBar
        templateName="Power Gym"
        category="Gyms"
        categoryRoute="/templates/gyms"
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
          zIndex: 90,
          background: 'rgba(9, 10, 15, 0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(239, 68, 68, 0.2)',
          padding: '0.75rem 1.25rem',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                flexShrink: 0
              }}
            >
              <Dumbbell size={20} color="#ffffff" />
            </div>
            <div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#ffffff', textTransform: 'uppercase' }}>
                IRONFORGE<span style={{ color: '#ef4444' }}>CULT</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.6rem', color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                INDIRANAGAR • BANGALORE
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex" style={{ gap: '1.5rem', alignItems: 'center' }}>
            {[
              { label: 'Zones', href: '#zones' },
              { label: 'Schedule', href: '#schedule' },
              { label: 'Calculator', href: '#calculator' },
              { label: 'Transformations', href: '#results' },
              { label: 'Coaches', href: '#coaches' },
              { label: 'Membership', href: '#pricing' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ef4444' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#cbd5e1' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleOpenModal('Claim 3-Day Free VIP Pass')}
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.55rem 1rem',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Zap size={14} fill="#ffffff" />
            FREE 3-DAY PASS
          </button>
        </div>
      </header>

      {/* ====================================================
          HERO SECTION
      ==================================================== */}
      <section
        id="hero"
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          position: 'relative',
          background: 'radial-gradient(circle at 50% 20%, rgba(239, 68, 68, 0.15) 0%, rgba(9, 10, 15, 1) 70%)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.35rem 0.9rem', borderRadius: 20, marginBottom: '1.5rem' }}>
              <Flame size={15} color="#ef4444" />
              <span style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                BANGALORE'S #1 HIGH-PERFORMANCE GYM
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              UNLEASH YOUR <span style={{ color: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)' }}>INNER TITAN</span>. <br />
              NO EXCUSES.
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: 620, marginBottom: '2.5rem' }}>
              Welcome to <strong style={{ color: '#f8fafc' }}>IronForge Cult Fitness</strong> in Indiranagar. 15,000 sq.ft equipped with Rogue & Eleiko Olympic rigs, functional turf tracks, combat boxing ring, and contrast cold plunges.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                onClick={() => handleOpenModal('Claim 3-Day Free VIP Pass')}
                style={{
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2.25rem',
                  borderRadius: 10,
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                CLAIM 3-DAY FREE PASS <ArrowRight size={18} />
              </button>
              <a
                href="#schedule"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
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
                <Calendar size={18} color="#ef4444" /> VIEW CLASS SCHEDULE
              </a>
            </div>

            {/* Rating Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={16} fill="#eab308" color="#eab308" />
                ))}
                <span style={{ fontWeight: 800, marginLeft: '0.4rem', color: '#ffffff' }}>4.9 / 5</span>
              </div>
              <span style={{ color: '#64748b' }}>|</span>
              <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>1,280+ Verified Google Reviews</span>
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 24,
              padding: '2.25rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, background: 'rgba(239, 68, 68, 0.2)', filter: 'blur(50px)', borderRadius: '50%' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ background: '#ef4444', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                LIVE GYM CAPACITY
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#22c55e', fontSize: '0.8rem', fontWeight: 700 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                Optimal Floor Load (42% Full)
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
              Today's Featured Session:
            </h3>

            <div style={{ background: 'rgba(9, 10, 15, 0.7)', borderRadius: 16, padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.85rem' }}>07:00 PM TONIGHT</span>
                <span style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: 4 }}>Only 2 Spots Left</span>
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>Knockout Combat Boxing & Core</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Coach Rohan Kapoor • Ring Zone 1</p>
            </div>

            <button
              onClick={() => handleOpenModal('Book Spot for Tonight’s Boxing Session')}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.85rem',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              RESERVE SPOT NOW
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div style={{ maxWidth: 1280, margin: '4rem auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {STATS.map(stat => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.5rem',
                borderRadius: 16,
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '2.25rem', fontWeight: 900, color: '#ef4444', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{stat.label}</p>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          ZONES & FACILITIES SHOWCASE
      ==================================================== */}
      <section id="zones" style={{ padding: '6rem 2rem', background: '#0c0e15', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              WORLD-CLASS INFRASTRUCTURE
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              4 DEDICATED TRAINING ZONES
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '0.5rem auto 0' }}>
              Engineered with zero compromises for strength athletes, runners, fighters, and recovery seekers.
            </p>
          </div>

          {/* Zone Selector Tabs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {ZONES.map(zone => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                style={{
                  background: activeZone === zone.id ? 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' : 'rgba(15, 23, 42, 0.8)',
                  color: activeZone === zone.id ? '#ffffff' : '#94a3b8',
                  border: activeZone === zone.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.85rem 1.5rem',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {zone.title}
              </button>
            ))}
          </div>

          {/* Active Zone Detail Card */}
          {(() => {
            const current = ZONES.find(z => z.id === activeZone) || ZONES[0]
            return (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(9, 10, 15, 0.95) 100%)',
                  border: `1px solid ${current.accent}40`,
                  borderRadius: 24,
                  padding: '2rem 1.25rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span style={{ color: current.accent, fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {current.tagline}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, color: '#ffffff', margin: '0.5rem 0 1rem' }}>
                    {current.title}
                  </h3>
                  <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    {current.description}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.875rem', marginBottom: '1.5rem' }}>
                    {current.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e2e8f0', fontSize: '0.875rem', fontWeight: 600 }}>
                        <CheckCircle2 size={16} color={current.accent} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleOpenModal(`Book Tour for ${current.title}`)}
                    style={{
                      background: current.accent,
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.85rem 1.75rem',
                      borderRadius: 10,
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    BOOK ZONE TOUR
                  </button>
                </div>

                <div
                  style={{
                    height: 320,
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${current.accent}20 0%, rgba(9, 10, 15, 0.9) 100%)`,
                    border: `1px dashed ${current.accent}60`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    textAlign: 'center',
                    padding: '2rem'
                  }}
                >
                  <Activity size={50} color={current.accent} />
                  <p style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>{current.title}</p>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: 280 }}>
                    100% Certified Olympic-grade equipment inspected daily for safety & biomechanics.
                  </p>
                </div>
              </motion.div>
            )
          })()}
        </div>
      </section>

      {/* ====================================================
          LIVE INTERACTIVE CLASS SCHEDULE
      ==================================================== */}
      <section id="schedule" style={{ padding: '6rem 2rem', background: '#090a0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              DAILY GROUP CLASSES & WORKSHOPS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              LIVE CULT TIMETABLE
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '0.5rem auto 0' }}>
              Filter by day or workout category to reserve your guaranteed slot.
            </p>
          </div>

          {/* Day Filters */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  background: selectedDay === day ? '#ef4444' : 'rgba(255,255,255,0.05)',
                  color: selectedDay === day ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {['All', 'Strength', 'HIIT', 'Boxing', 'CrossFit', 'Mobility'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'rgba(239, 68, 68, 0.2)' : 'transparent',
                  color: selectedCategory === cat ? '#ef4444' : '#64748b',
                  border: `1px solid ${selectedCategory === cat ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
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
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 16,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={15} /> {item.time}
                      </span>
                      <span style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 6 }}>
                        {item.category}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                      {item.name}
                    </h4>

                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                      Lead Trainer: <strong style={{ color: '#e2e8f0' }}>{item.trainer}</strong>
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: '#64748b' }}>
                      <span>Intensity: <strong style={{ color: '#ef4444' }}>{item.intensity}</strong></span>
                      <span>•</span>
                      <span style={{ color: '#22c55e' }}>{item.spots} Slots Open</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenModal(`Book Spot for ${item.name} (${item.day} ${item.time})`)}
                    style={{
                      background: 'rgba(239, 68, 68, 0.15)',
                      color: '#ef4444',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      padding: '0.65rem',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    BOOK THIS CLASS
                  </button>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                No classes matching the selected filter. Try another day or category!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ====================================================
          INTERACTIVE BMI & CALORIE CALCULATOR
      ==================================================== */}
      <section id="calculator" style={{ padding: '6rem 2rem', background: '#0c0e15', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              PERSONALIZED FITNESS MATRIX
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              LIVE BMI & REGIME CALCULATOR
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Adjust your parameters to get immediate insights into your ideal fitness target.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: 24,
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontWeight: 700, color: '#e2e8f0' }}>Height (cm)</label>
                  <span style={{ color: '#ef4444', fontWeight: 800 }}>{heightCm} cm</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="210"
                  value={heightCm}
                  onChange={e => setHeightCm(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ef4444' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontWeight: 700, color: '#e2e8f0' }}>Current Weight (kg)</label>
                  <span style={{ color: '#ef4444', fontWeight: 800 }}>{weightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={weightKg}
                  onChange={e => setWeightKg(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ef4444' }}
                />
              </div>
            </div>

            {/* Live Result Display */}
            <div
              style={{
                background: 'rgba(9, 10, 15, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 20,
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>YOUR COMPUTED BMI</p>
              <p style={{ fontSize: '3.5rem', fontWeight: 900, color: bmiInfo.color, margin: '0.2rem 0' }}>{bmi}</p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>{bmiInfo.text}</p>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left' }}>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>RECOMMENDED TRAINER REGIME:</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginTop: '0.25rem' }}>{bmiInfo.workout}</p>
              </div>

              <button
                onClick={() => handleOpenModal(`Consult Coach for BMI ${bmi} Plan`)}
                style={{
                  marginTop: '1.5rem',
                  width: '100%',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: 10,
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                GET CUSTOM DIET & PT WORKOUT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          REAL MEMBER TRANSFORMATIONS
      ==================================================== */}
      <section id="results" style={{ padding: '6rem 2rem', background: '#090a0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              VERIFIED SUCCESS STORIES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              REAL MEMBER TRANSFORMATIONS
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Consistent discipline combined with IronForge methodology yields extraordinary results.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {TRANSFORMATIONS.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 20,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{item.name}</h4>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.location} • Age {item.age}</span>
                    </div>
                    <span style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: 12 }}>
                      {item.duration}
                    </span>
                  </div>

                  <div style={{ background: 'rgba(9, 10, 15, 0.8)', padding: '1rem', borderRadius: 12, marginBottom: '1.25rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    <p style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.95rem' }}>{item.achievement}</p>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{item.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center' }}>
                  {item.stats.map(s => (
                    <div key={s.label}>
                      <p style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>{s.label}</p>
                      <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff' }}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          MASTER TRAINERS & COACHES
      ==================================================== */}
      <section id="coaches" style={{ padding: '6rem 2rem', background: '#0c0e15', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ELITE ATHLETIC COACHING
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              MEET THE MASTER TRAINERS
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Certified coaches dedicated to your form, safety, and peak performance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {TRAINERS.map(coach => (
              <div
                key={coach.name}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 20,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: 180,
                    background: coach.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    letterSpacing: '0.05em',
                    position: 'relative'
                  }}
                >
                  {coach.avatar}
                  <span style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.6)', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 700, color: '#ef4444' }}>
                    {coach.experience}
                  </span>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>{coach.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.5rem' }}>{coach.role}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1rem' }}>{coach.credentials}</p>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {coach.specialties.map(spec => (
                      <span key={spec} style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: 4 }}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenModal(`Book Personal Training with ${coach.name}`)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      color: '#ef4444',
                      padding: '0.65rem',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    BOOK 1-ON-1 PT SESSION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          MEMBERSHIP PLANS & PRICING
      ==================================================== */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#090a0f' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              TRANSPARENT VALUE PASSES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              MEMBERSHIP PLANS (INR ₹)
            </h2>
            <p style={{ color: '#94a3b8' }}>
              No hidden admission fees. Zero lock-in tricks. Cancel or pause anytime.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {MEMBERSHIPS.map(plan => (
              <div
                key={plan.title}
                style={{
                  background: plan.popular ? 'linear-gradient(145deg, rgba(30, 27, 75, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)' : 'rgba(15, 23, 42, 0.6)',
                  border: plan.popular ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 24,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 0 30px rgba(239, 68, 68, 0.3)' : 'none'
                }}
              >
                {plan.popular && (
                  <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#ef4444', color: '#ffffff', fontSize: '0.75rem', fontWeight: 900, padding: '0.3rem 1rem', borderRadius: 12, letterSpacing: '0.05em' }}>
                    MOST POPULAR CULT CHOICE
                  </span>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>{plan.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem', minHeight: 40 }}>{plan.description}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '2.75rem', fontWeight: 900, color: '#ffffff' }}>{plan.price}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{plan.period}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.875rem' }}>
                        <CheckCircle2 size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Join ${plan.title} (${plan.price})`)}
                  style={{
                    width: '100%',
                    background: plan.popular ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' : 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    padding: '1rem',
                    borderRadius: 12,
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: plan.popular ? '0 0 20px rgba(239, 68, 68, 0.4)' : 'none'
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
          LOCATION & HOURS
      ==================================================== */}
      <section style={{ padding: '5rem 2rem', background: '#0c0e15', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              VISIT OUR INDIRANAGAR ARENA
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              LOCATION & OPERATING HOURS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="#ef4444" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: '#ffffff' }}>Gym Address</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    IronForge Cult Fitness, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038 (Opposite Toit Brewpub)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={22} color="#ef4444" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: '#ffffff' }}>Working Hours</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Mon - Sat: 5:00 AM – 11:30 PM</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Sunday: 6:00 AM – 9:00 PM</p>
                  <p style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 700, marginTop: '0.2rem' }}>*Pro & Titan Members get 24/7 Keycard Access</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={22} color="#ef4444" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 800, color: '#ffffff' }}>Contact Desk</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>+91 98860 12345 / +91 80 4123 9900</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>train@ironforgecult.in</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              height: 340,
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.5) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem'
            }}
          >
            <MapPin size={48} color="#ef4444" />
            <p style={{ fontWeight: 800, fontSize: '1.25rem', color: '#ffffff', marginTop: '1rem' }}>INDIRANAGAR ARENA</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.4rem' }}>
              Valet Parking Available for Members • 2 Mins Walk from Indiranagar Metro Station
            </p>
            <button
              onClick={() => handleOpenModal('Get Directions & Free Day Pass')}
              style={{
                marginTop: '1.5rem',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: 10,
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              GET GOOGLE MAP DIRECTIONS
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================
          FAQS & ACCORDION
      ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: '#090a0f' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              GOT QUESTIONS?
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
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
                    color: '#ffffff',
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
                    color="#ef4444"
                    style={{
                      transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s'
                    }}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
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
      <footer style={{ background: '#06070a', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '3rem 1.25rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Dumbbell size={18} color="#ffffff" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
                IRONFORGE<span style={{ color: '#ef4444' }}>CULT</span>
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 320 }}>
              Bangalore's premium high-intensity fitness club. Olympic powerlifting, combat boxing ring, functional turf, and bio-recovery cold plunge.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>QUICK LINKS</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <a href="#zones" style={{ color: 'inherit', textDecoration: 'none' }}>Equipment & Zones</a>
              <a href="#schedule" style={{ color: 'inherit', textDecoration: 'none' }}>Live Timetable</a>
              <a href="#calculator" style={{ color: 'inherit', textDecoration: 'none' }}>BMI Calculator</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Membership Passes</a>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>ARENAS</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span>Indiranagar (HQ)</span>
              <span>Koramangala</span>
              <span>HSR Layout</span>
              <span>Whitefield</span>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>HOURS</h5>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Mon - Sat: 5:00 AM - 11:30 PM</p>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Sun: 6:00 AM - 9:00 PM</p>
            <p style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 700, marginTop: '0.5rem' }}>24/7 Keycard Access Available</p>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} IronForge Cult Fitness Pvt. Ltd. All rights reserved. • Template Preview by RivixoTech
        </div>
      </footer>

      {/* ====================================================
          BOOKING & TRIAL PASS MODAL
      ==================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(0, 0, 0, 0.85)',
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
                background: '#0f172a',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: 24,
                width: '100%',
                maxWidth: 480,
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)'
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>

              {!bookingSuccess ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <Dumbbell size={22} color="#ef4444" />
                    <span style={{ fontWeight: 800, color: '#ef4444', fontSize: '0.85rem', letterSpacing: '0.05em' }}>IRONFORGE CULT BOOKING</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '1.5rem' }}>
                    {modalTitle}
                  </h3>

                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Your Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090a0f',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>WhatsApp / Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090a0f',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Primary Fitness Goal</label>
                      <select
                        value={formData.goal}
                        onChange={e => setFormData({ ...formData, goal: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090a0f',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Fat Loss & Shred</option>
                        <option>Muscle Building & Strength</option>
                        <option>Boxing & Conditioning</option>
                        <option>Powerlifting PRs</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Preferred Workout Slot</label>
                      <select
                        value={formData.slot}
                        onChange={e => setFormData({ ...formData, slot: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090a0f',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Morning (6 AM - 10 AM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (5 PM - 9 PM)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      style={{
                        marginTop: '0.5rem',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.9rem',
                        borderRadius: 10,
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                      }}
                    >
                      CONFIRM PASS RESERVATION
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.5rem' }}>PASS CONFIRMED!</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Hey <strong style={{ color: '#ffffff' }}>{formData.name}</strong>, your pass for <strong style={{ color: '#ef4444' }}>{modalTitle}</strong> is active! Our lead coach will send your QR pass on WhatsApp ({formData.phone}).
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      background: '#ef4444',
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


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Code,
  Sparkles,
  Award,
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
  BookOpen,
  TrendingUp,
  Laptop,
  Briefcase,
  Layers,
  ShieldCheck,
  Search,
  Zap,
  Users
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

// ============================================================
// Data Constants
// ============================================================

const STATS = [
  { value: '15,400+', label: 'Alumni Placed', sub: 'In Top Global Tech Companies' },
  { value: '₹18.5 LPA', label: 'Average CTC Package', sub: 'Across All Bootcamps' },
  { value: '126%', label: 'Avg Salary Hike', sub: 'Post Program Completion' },
  { value: '450+', label: 'Hiring Partners', sub: 'Google, Amazon, Flipkart & More' },
]

const COURSES = [
  {
    id: 'fullstack',
    title: 'Full Stack MERN & Cloud Engineering',
    category: 'Full Stack',
    duration: '6 Months (Live Online)',
    badge: 'MOST POPULAR',
    tagline: 'Master React, Node.js, Next.js, Microservices, System Design & AWS Cloud',
    description: 'A comprehensive, project-based bootcamp engineered to turn beginners and junior devs into high-earning Full Stack Engineers. Includes 8 production-level capstone projects.',
    avgSalary: '₹14 - ₹28 LPA',
    nextBatch: 'Starts August 18th',
    accent: '#6366f1',
    curriculum: ['React 19 & Next.js App Router', 'Node.js & Distributed Microservices', 'PostgreSQL, Redis & MongoDB', 'AWS Deployment & Docker Containers']
  },
  {
    id: 'aiml',
    title: 'AI, LLMs & Machine Learning Lead',
    category: 'AI & ML',
    duration: '7 Months (Live Online)',
    badge: 'HIGH DEMAND',
    tagline: 'Generative AI, PyTorch, LangChain, RAG Systems, & Deep Neural Networks',
    description: 'Learn to build production-grade Generative AI agents, fine-tune open-source LLMs (Llama 3, Mistral), vector databases, and deploy AI pipelines on Kubernetes.',
    avgSalary: '₹22 - ₹42 LPA',
    nextBatch: 'Starts August 22nd',
    accent: '#8b5cf6',
    curriculum: ['Python for AI & PyTorch Math', 'Fine-Tuning LLMs & PEFT LoRA', 'LangChain, LlamaIndex & Vector DBs', 'RAG Architecture & MLOps Pipeline']
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Cloud Data Warehouse',
    category: 'Data',
    duration: '5 Months (Live Online)',
    badge: 'CAREER SWITCH',
    tagline: 'PySpark, Snowflake, BigQuery, Airflow pipelines, & Apache Kafka streaming',
    description: 'Master large-scale distributed data processing. Architect real-time ETL pipelines, data lakes, and data warehouses used by top tech companies.',
    avgSalary: '₹16 - ₹32 LPA',
    nextBatch: 'Starts August 25th',
    accent: '#06b6d4',
    curriculum: ['SQL Optimization & Data Modeling', 'Apache Spark & PySpark Streaming', 'Airflow Orchestration & Snowflake', 'Apache Kafka & Real-Time Analytics']
  },
  {
    id: 'product-mgmt',
    title: 'Tech Product Management & Growth',
    category: 'Product',
    duration: '4 Months (Live Online)',
    badge: 'NON-TECH TO TECH',
    tagline: 'Product Roadmap, User Metrics, PRDs, System Design for PMs & Agile Scrum',
    description: 'Designed for professionals wanting to transition into Product Manager roles. Learn directly from VPs of Product at Swiggy, Razorpay, and Zomato.',
    avgSalary: '₹18 - ₹35 LPA',
    nextBatch: 'Starts September 1st',
    accent: '#f59e0b',
    curriculum: ['PRDs & User Discovery Methods', 'Product Analytics (Mixpanel, Amplitude)', 'Tech Architecture for Product Managers', 'GTM Strategy & Growth Hacking']
  }
]

const MENTORS = [
  {
    name: 'Abhinav Sharma',
    role: 'Senior Principal Engineer',
    company: 'Ex-Google & Swiggy',
    experience: '14+ Years in Distributed Systems',
    specialties: ['System Design', 'Microservices', 'Scalability'],
    avatar: 'AS',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #31103f 100%)'
  },
  {
    name: 'Dr. Ritu Verma',
    role: 'Lead AI Scientist',
    company: 'Ex-Microsoft Research',
    experience: '10+ Years in GenAI & NLP',
    specialties: ['LLM Fine-tuning', 'PyTorch', 'RAG Systems'],
    avatar: 'RV',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)'
  },
  {
    name: 'Karthik Raja',
    role: 'Director of Engineering',
    company: 'Flipkart',
    experience: '12+ Years in Data Infrastructure',
    specialties: ['Apache Spark', 'Kafka', 'Big Data Engineering'],
    avatar: 'KR',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'VP of Product',
    company: 'Razorpay',
    experience: '9+ Years in FinTech Products',
    specialties: ['Product Strategy', 'Growth Hacking', 'User Metrics'],
    avatar: 'AD',
    gradient: 'linear-gradient(135deg, #172554 0%, #1e1b4b 100%)'
  }
]

const SUCCESS_STORIES = [
  {
    name: 'Siddharth Verma',
    previous: 'Service IT Company (₹4.2 LPA)',
    current: 'SDE-2 at Amazon (₹28.5 LPA)',
    hike: '578% Salary Hike',
    program: 'Full Stack MERN Bootcamp',
    quote: 'Before BrightPath, I was stuck in a legacy service firm doing manual testing. The System Design mock interviews and 1:1 mentor feedback changed my career trajectory completely.',
    avatar: 'SV'
  },
  {
    name: 'Meera Kulkarni',
    previous: 'Civil Engineering Graduate (Unemployed)',
    current: 'Full Stack Developer at Swiggy (₹17 LPA)',
    hike: 'Non-CS to Tech Tier 1',
    program: 'Full Stack & Cloud Bootcamp',
    quote: 'I had zero coding background. The step-by-step curriculum and dedicated TA support helped me build 4 production projects that impressed Swiggy interviewers.',
    avatar: 'MK'
  },
  {
    name: 'Rohan Mukherjee',
    previous: 'Junior Data Analyst (₹6.5 LPA)',
    current: 'Senior AI Engineer at Reliance Jio (₹32 LPA)',
    hike: '392% Salary Hike',
    program: 'AI, LLMs & Machine Learning Lead',
    quote: 'The Generative AI module on fine-tuning Llama 3 models and vector databases was ahead of any university syllabus. I got 3 job offers before finishing the course!',
    avatar: 'RM'
  }
]

const MASTERCLASSES = [
  {
    title: 'Build & Deploy a ChatGPT Clone in 2 Hours',
    speaker: 'Abhinav Sharma (Ex-Google)',
    date: 'Saturday, Aug 16 • 06:00 PM',
    attendees: '2,400+ Registered',
    category: 'AI & Full Stack',
    isFree: true
  },
  {
    title: 'System Design Masterclass: Handling 10M Concurrent Users',
    speaker: 'Karthik Raja (Flipkart)',
    date: 'Sunday, Aug 17 • 11:00 AM',
    attendees: '1,850+ Registered',
    category: 'System Architecture',
    isFree: true
  },
  {
    title: 'How to Crack Product Manager Interviews at FAANG',
    speaker: 'Ananya Deshmukh (Razorpay)',
    date: 'Wednesday, Aug 20 • 08:00 PM',
    attendees: '1,200+ Registered',
    category: 'Product Management',
    isFree: true
  }
]

const PRICING_PLANS = [
  {
    title: 'Monthly EMI Plan',
    price: '₹4,999',
    period: '/month (No-Cost EMI 12 Mos)',
    description: 'Flexible month-to-month payment option with zero interest fee.',
    features: [
      'Access to All Live Interactive Classes & Recordings',
      'Dedicated 1-on-1 Mentor Allocation',
      '15+ Resume & LinkedIn Review Cycles',
      'Unlimited Mock Interviews with FAANG Engineers',
      'Lifetime Access to Alum Network & Job Portal'
    ],
    popular: false,
    cta: 'Apply for No-Cost EMI',
    color: '#94a3b8'
  },
  {
    title: 'Upfront Full Access Pass',
    price: '₹49,999',
    period: 'One-time Payment (Save ₹15,000)',
    description: 'Our highest value tier with priority 1:1 mentor booking.',
    features: [
      'Everything in Monthly Plan',
      'Instant ₹15,000 Scholarship Discount',
      'Guaranteed 1:1 Weekly Mentorship Call',
      '100% Placement Protection & Refund Support',
      'Free Access to Advanced System Design Modules',
      'Direct HR Referral Access to Top 450+ Partners'
    ],
    popular: true,
    cta: 'Claim Upfront Scholarship Pass',
    color: '#8b5cf6'
  },
  {
    title: 'Pay-After-Placement (ISA)',
    price: '₹0 Upfront',
    period: 'Pay only after getting placed >₹6 LPA',
    description: 'Zero risk option for high-potential candidates after clearing assessment.',
    features: [
      '₹0 Tuition Fee until you land a job',
      'Pay 15% of monthly salary for 36 months',
      'Total fee capped at maximum threshold',
      'Dedicated Placement Account Manager',
      'Requires Clearing Screening Coding Test'
    ],
    popular: false,
    cta: 'Take ISA Screening Test',
    color: '#06b6d4'
  }
]

const FAQS = [
  {
    q: 'Are the classes live or pre-recorded?',
    a: 'All our core bootcamp classes are 100% LIVE interactive sessions held during evenings (8 PM - 10 PM) and weekends. Recorded high-definition backups are available on your student dashboard within 2 hours of every class.'
  },
  {
    q: 'What is the placement guarantee policy?',
    a: 'If you complete 85% of your assignments and pass mock interviews but do not get a job offer within 6 months of graduation, we refund 100% of your tuition fees under our Placement Protection Program.'
  },
  {
    q: 'Can non-computer science students or working pros switch to tech?',
    a: 'Yes! Over 40% of our successful graduates come from non-CS backgrounds (Civil, Mechanical, Commerce, QA Testing). We start from absolute fundamentals before advancing to enterprise production frameworks.'
  },
  {
    q: 'How does 1-on-1 mentorship work?',
    a: 'You are paired with a dedicated senior engineer from Google, Amazon, or Flipkart who conducts bi-weekly 1-on-1 calls to review your code, critique your projects, and conduct mock interviews.'
  }
]

// ============================================================
// Main Template Component
// ============================================================

export default function OnlineAcademyTemplate() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  // Salary Calculator State
  const [currentSalaryLpa, setCurrentSalaryLpa] = useState(5)
  const projectedSalaryLpa = (currentSalaryLpa * 2.3).toFixed(1)
  const monthlyEmi = (4999).toLocaleString('en-IN')

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Book Free 1-on-1 Career Counselling')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', background: 'Working Professional (Non-Tech)', targetCourse: 'Full Stack MERN' })

  const handleOpenModal = (title = 'Book Free 1-on-1 Career Counselling') => {
    setModalTitle(title)
    setBookingSuccess(false)
    setIsModalOpen(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingSuccess(true)
  }

  const filteredCourses = COURSES.filter(c => selectedCategory === 'All' || c.category === selectedCategory)

  return (
    <div style={{ background: '#090d16', color: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Top Preview Navigation Bar */}
      <PreviewBackBar
        templateName="Online Academy"
        category="Education"
        categoryRoute="/templates/education"
      />

      {/* ====================================================
          STICKY NAVIGATION BAR
      ==================================================== */}
      <header
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 90,
          background: 'rgba(9, 13, 22, 0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
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
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
              }}
            >
              <GraduationCap size={22} color="#ffffff" />
            </div>
            <div>
              <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
                BRIGHTPATH<span style={{ color: '#8b5cf6' }}>ACADEMY</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.65rem', color: '#94a3b8', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                LIVE TECH BOOTCAMPS • HYDERABAD & BENGALURU
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {[
              { label: 'Bootcamps', href: '#courses' },
              { label: 'Calculator', href: '#calculator' },
              { label: 'Success Stories', href: '#placements' },
              { label: 'Mentors', href: '#mentors' },
              { label: 'Masterclasses', href: '#masterclasses' },
              { label: 'Tuition & EMI', href: '#pricing' },
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
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#8b5cf6' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#cbd5e1' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => handleOpenModal('Book Free 1-on-1 Career Counselling')}
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.35rem',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={16} fill="#ffffff" />
            FREE CAREER CALL
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
          background: 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.18) 0%, rgba(9, 13, 22, 1) 70%)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)', padding: '0.35rem 0.9rem', borderRadius: 20, marginBottom: '1.5rem' }}>
              <Zap size={15} color="#8b5cf6" />
              <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                INDIA'S #1 CAREER TRANSFORMATION TECH ACADEMY
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              MASTER TECH SKILLS. <br />
              LAND YOUR <span style={{ color: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)' }}>DREAM FAANG ROLE</span>.
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: 620, marginBottom: '2.5rem' }}>
              Live interactive bootcamps in Full Stack Web Dev, AI/ML Engineering, & Data Science guided by senior principal engineers from Google, Amazon, & Microsoft. 94.8% Placement Guarantee.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                onClick={() => handleOpenModal('Book Free Demo Class')}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2.25rem',
                  borderRadius: 12,
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 0 25px rgba(139, 92, 246, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                BOOK FREE LIVE DEMO CLASS <ArrowRight size={18} />
              </button>
              <a
                href="#courses"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '1rem 2rem',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <BookOpen size={18} color="#a78bfa" /> EXPLORE CURRICULUM
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={16} fill="#eab308" color="#eab308" />
                ))}
                <span style={{ fontWeight: 800, marginLeft: '0.4rem', color: '#ffffff' }}>4.92 / 5</span>
              </div>
              <span style={{ color: '#64748b' }}>|</span>
              <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>15,400+ Graduated Alumni in Tier-1 Tech</span>
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: 24,
              padding: '2.25rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ background: '#8b5cf6', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                UPCOMING LIVE MASTERCLASS
              </span>
              <span style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                Free Admission
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
              Build & Deploy a ChatGPT Clone in 2 Hours
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Live code-along workshop with Abhinav Sharma (Ex-Google Principal Engineer). Learn OpenAI API integration, Next.js 19, & Vector DBs.
            </p>

            <div style={{ background: 'rgba(9, 13, 22, 0.8)', borderRadius: 16, padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#a78bfa', fontWeight: 800, fontSize: '0.85rem' }}>THIS SATURDAY • 06:00 PM IST</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>2,400+ Techies Already Registered</p>
                </div>
                <span style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 6 }}>
                  100% Free Pass
                </span>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('Register Free for ChatGPT Masterclass')}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.85rem',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              REGISTER FOR FREE MASTERCLASS
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
                borderRadius: 20,
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '2.25rem', fontWeight: 900, color: '#8b5cf6', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{stat.label}</p>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================
          INTERACTIVE BOOTCAMP CATALOG
      ==================================================== */}
      <section id="courses" style={{ padding: '6rem 2rem', background: '#0b101d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              INDUSTRY-ALIGNED CURRICULUM
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              EXPLORE OUR CAREER BOOTCAMPS
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: 600, margin: '0.5rem auto 0' }}>
              Designed by Senior Tech Architects to match real production environments.
            </p>
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {['All', 'Full Stack', 'AI & ML', 'Data', 'Product'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : 'rgba(255,255,255,0.05)',
                  color: selectedCategory === cat ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  padding: '0.65rem 1.4rem',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {cat === 'All' ? 'All Bootcamps' : cat}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredCourses.map(course => (
              <motion.div
                key={course.id}
                whileHover={{ y: -6 }}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: `1px solid ${course.accent}40`,
                  borderRadius: 24,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ background: `${course.accent}20`, color: course.accent, fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 12 }}>
                      {course.badge}
                    </span>
                    <span style={{ color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={14} /> {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#a78bfa', fontWeight: 700, marginBottom: '1rem' }}>
                    {course.tagline}
                  </p>

                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {course.description}
                  </p>

                  <div style={{ background: 'rgba(9, 13, 22, 0.8)', padding: '1rem', borderRadius: 12, marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                      <span style={{ color: '#64748b' }}>Target Salary CTC:</span>
                      <span style={{ color: '#22c55e', fontWeight: 800 }}>{course.avgSalary}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#64748b' }}>Next Cohort:</span>
                      <span style={{ color: '#ffffff', fontWeight: 700 }}>{course.nextBatch}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e2e8f0', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Core Modules Included:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {course.curriculum.map(c => (
                        <span key={c} style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={14} color={course.accent} /> {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Enroll in ${course.title}`)}
                  style={{
                    width: '100%',
                    background: course.accent,
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.85rem',
                    borderRadius: 12,
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  DOWNLOAD SYLLABUS & APPLY NOW
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          INTERACTIVE SALARY & EMI CALCULATOR
      ==================================================== */}
      <section id="calculator" style={{ padding: '6rem 2rem', background: '#090d16' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              CAREER ROI ESTIMATOR
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              SALARY HIKE & EMI CALCULATOR
            </h2>
            <p style={{ color: '#94a3b8' }}>
              See your projected post-bootcamp salary CTC and monthly no-cost EMI breakdown.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
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
                  <label style={{ fontWeight: 700, color: '#e2e8f0' }}>Your Current Salary (LPA)</label>
                  <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.1rem' }}>₹{currentSalaryLpa} LPA</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="20"
                  value={currentSalaryLpa}
                  onChange={e => setCurrentSalaryLpa(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#8b5cf6' }}
                />
              </div>

              <div style={{ background: 'rgba(9, 13, 22, 0.8)', padding: '1.25rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>AVERAGE ALUMNI SALARY INCREASE:</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22c55e', marginTop: '0.25rem' }}>+130% Average Hike Achieved</p>
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(9, 13, 22, 0.9) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                borderRadius: 20,
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.8rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PROJECTED TARGET SALARY</p>
              <p style={{ fontSize: '3rem', fontWeight: 900, color: '#22c55e', margin: '0.2rem 0' }}>₹{projectedSalaryLpa} LPA</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>Estimated based on 15,400+ placed students</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <p style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>NO-COST MONTHLY EMI STARTS AT:</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>₹{monthlyEmi} / mo</p>
              </div>

              <button
                onClick={() => handleOpenModal(`Claim Salary Roadmap for ₹${projectedSalaryLpa} LPA Target`)}
                style={{
                  marginTop: '1.5rem',
                  width: '100%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: 10,
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                GET PERSONALIZED SALARY ROADMAP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          STUDENT PLACEMENT SUCCESS STORIES
      ==================================================== */}
      <section id="placements" style={{ padding: '6rem 2rem', background: '#0b101d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              PROVEN CAREER TRANSFORMATION
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              ALUMNI PLACEMENT STORIES
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Real stories from students who multiplied their income with BrightPath.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {SUCCESS_STORIES.map((item, idx) => (
              <div
                key={idx}
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
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{item.name}</h4>
                    <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: 12 }}>
                      {item.hike}
                    </span>
                  </div>

                  <div style={{ background: 'rgba(9, 13, 22, 0.8)', padding: '1rem', borderRadius: 12, marginBottom: '1.25rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>From: <strong style={{ color: '#e2e8f0' }}>{item.previous}</strong></p>
                    <p style={{ fontSize: '0.9rem', color: '#22c55e', fontWeight: 800, marginTop: '0.2rem' }}>To: {item.current}</p>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{item.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#a78bfa', fontWeight: 700 }}>{item.program}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Verified Offer Letter</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SENIOR TECH MENTORS
      ==================================================== */}
      <section id="mentors" style={{ padding: '6rem 2rem', background: '#090d16' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              LEARN FROM FAANG ARCHITECTS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              OUR SENIOR MENTORS & INSTRUCTORS
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Active tech leads who build systems serving millions of daily users.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {MENTORS.map(m => (
              <div
                key={m.name}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 20,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: 160,
                    background: m.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '2.5rem',
                    fontWeight: 900
                  }}
                >
                  {m.avatar}
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>{m.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#a78bfa', fontWeight: 700, marginBottom: '0.3rem' }}>{m.role}</p>
                  <p style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 700, marginBottom: '0.8rem' }}>{m.company}</p>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {m.specialties.map(s => (
                      <span key={s} style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: 4 }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenModal(`Book 1-on-1 Mentorship Call with ${m.name}`)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1px solid rgba(139, 92, 246, 0.4)',
                      color: '#a78bfa',
                      padding: '0.65rem',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    BOOK 1-ON-1 MENTOR CALL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          TUITION & PAY-AFTER-PLACEMENT EMI PLANS
      ==================================================== */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#0b101d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ACCESSIBLE TECH EDUCATION
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '0.5rem', color: '#ffffff', textTransform: 'uppercase' }}>
              TUITION & EMI OPTIONS (INR ₹)
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Flexible options including zero-cost EMI and Pay-After-Placement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {PRICING_PLANS.map(plan => (
              <div
                key={plan.title}
                style={{
                  background: plan.popular ? 'linear-gradient(145deg, rgba(30, 27, 75, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)' : 'rgba(15, 23, 42, 0.6)',
                  border: plan.popular ? '2px solid #8b5cf6' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 24,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 0 30px rgba(139, 92, 246, 0.3)' : 'none'
                }}
              >
                {plan.popular && (
                  <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#8b5cf6', color: '#ffffff', fontSize: '0.75rem', fontWeight: 900, padding: '0.3rem 1rem', borderRadius: 12 }}>
                    MOST POPULAR CHOICE
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
                        <CheckCircle2 size={18} color="#8b5cf6" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(`Apply for ${plan.title} (${plan.price})`)}
                  style={{
                    width: '100%',
                    background: plan.popular ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.2)',
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
      <section style={{ padding: '6rem 2rem', background: '#090d16' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
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
                    color="#8b5cf6"
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
      <footer style={{ background: '#05070d', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={18} color="#ffffff" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#ffffff' }}>
                BRIGHTPATH<span style={{ color: '#8b5cf6' }}>ACADEMY</span>
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 320 }}>
              India's leading career transformation tech academy. Live bootcamps in Full Stack, AI/ML, and Data Science with 94.8% placement protection.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>BOOTCAMPS</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <a href="#courses" style={{ color: 'inherit', textDecoration: 'none' }}>Full Stack MERN</a>
              <a href="#courses" style={{ color: 'inherit', textDecoration: 'none' }}>AI & GenAI Lead</a>
              <a href="#courses" style={{ color: 'inherit', textDecoration: 'none' }}>Data Engineering</a>
              <a href="#courses" style={{ color: 'inherit', textDecoration: 'none' }}>Tech Product Mgmt</a>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>LOCATIONS</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span>HITECH City, Hyderabad</span>
              <span>Indiranagar, Bengaluru</span>
              <span>Powai, Mumbai</span>
              <span>Online Live Global</span>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 800, marginBottom: '1rem', fontSize: '0.9rem' }}>HELPLINE</h5>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>+91 98765 43210</p>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>admissions@brightpath.in</p>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} BrightPath Tech Academy Pvt. Ltd. All rights reserved. • Template Preview by PixelNest Studio
        </div>
      </footer>

      {/* ====================================================
          BOOKING & COUNSELLING MODAL
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
                border: '1px solid rgba(139, 92, 246, 0.4)',
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
                    <GraduationCap size={22} color="#8b5cf6" />
                    <span style={{ fontWeight: 800, color: '#8b5cf6', fontSize: '0.85rem', letterSpacing: '0.05em' }}>BRIGHTPATH ADMISSIONS</span>
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
                        placeholder="e.g. Siddharth Sharma"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090d16',
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
                          background: '#090d16',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Current Professional Background</label>
                      <select
                        value={formData.background}
                        onChange={e => setFormData({ ...formData, background: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090d16',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Working Professional (Non-Tech)</option>
                        <option>Software Developer / QA</option>
                        <option>College Student / Fresh Grad</option>
                        <option>Career Gap / Switcher</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.3rem' }}>Target Bootcamp</label>
                      <select
                        value={formData.targetCourse}
                        onChange={e => setFormData({ ...formData, targetCourse: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#090d16',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 8,
                          padding: '0.75rem',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option>Full Stack MERN & Cloud</option>
                        <option>AI, LLMs & Machine Learning</option>
                        <option>Data Engineering & Snowflake</option>
                        <option>Tech Product Management</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      style={{
                        marginTop: '0.5rem',
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.9rem',
                        borderRadius: 10,
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                      }}
                    >
                      CONFIRM CAREER COUNSELLING CALL
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.5rem' }}>COUNSELLING BOOKED!</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you <strong style={{ color: '#ffffff' }}>{formData.name}</strong>! Our Senior FAANG Career Counselor will contact you on WhatsApp ({formData.phone}) with your personalized curriculum roadmap.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      background: '#8b5cf6',
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


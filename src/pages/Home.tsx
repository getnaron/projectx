import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Zap, Palette, Clock, Shield, TrendingUp,
  Smartphone, Star, CheckCircle, ChevronRight, Globe,
  PhoneCall, PenTool, Code2, Rocket,
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FeatureCard from '@/components/FeatureCard'
import IndustryCard from '@/components/IndustryCard'
import TemplateCard from '@/components/TemplateCard'
import TestimonialCard, { type Testimonial } from '@/components/TestimonialCard'
import ClientWorkCard from '@/components/ClientWorkCard'
import CTA from '@/components/CTA'
import { industryCategories, getFeaturedTemplates } from '@/data/templates'
import { getFeaturedClientWorks } from '@/data/clientWorks'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/utils/motion'

// ============================================================
// Static Data
// ============================================================
const features = [
  {
    icon: <Palette size={22} />,
    title: 'Premium Design',
    description: 'Every template is crafted by professional designers using modern design principles and Apple-inspired aesthetics.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    image: '/features/premium-design.png',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Fully Responsive',
    description: 'Every pixel is pixel-perfect across all devices — desktop, tablet, and mobile with zero compromises.',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    image: '/features/responsive.png',
  },
  {
    icon: <Clock size={22} />,
    title: '7-Day Delivery',
    description: 'We deliver your complete, live website in just 7 days. Fast turnaround without compromising quality.',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    image: '/features/delivery.png',
  },
]

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Mehta',
    role: 'Owner',
    company: 'The Amber Kitchen',
    avatar: 'linear-gradient(135deg, #f093fb, #f5576c)',
    quote: 'PixelNest Studio transformed our online presence completely. We saw a 3x increase in online reservations within the first month of our new website going live. Absolutely stunning work!',
    rating: 5,
    industry: 'Restaurants',
  },
  {
    id: 't2',
    name: 'Rahul Sharma',
    role: 'General Manager',
    company: 'Grand Horizon Hotel',
    avatar: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    quote: 'The hotel website they built for us is simply breathtaking. Our direct bookings went up by 40% and we receive compliments on the website from guests every single day.',
    rating: 5,
    industry: 'Hotels',
  },
  {
    id: 't3',
    name: 'Sneha Kapoor',
    role: 'Founder',
    company: 'Luxe Hair Studio',
    avatar: 'linear-gradient(135deg, #fda085, #f6d365)',
    quote: 'I was skeptical about getting a website but PixelNest made the entire process seamless. The website looks better than our competitors who spent 10x more. Best investment ever!',
    rating: 5,
    industry: 'Salons',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a 30-minute call to understand your business, goals, and target audience. This shapes everything we build.',
    icon: <PhoneCall size={24} />,
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers create mockups based on your industry template and brand. You review and approve before we code anything.',
    icon: <PenTool size={24} />,
    gradient: 'linear-gradient(135deg, #3b82f6, #2dd4bf)',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your website with clean code, optimized assets, and thorough testing across all devices and browsers.',
    icon: <Code2 size={24} />,
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
  },
  {
    number: '04',
    title: 'Launch & Handover',
    description: 'We deploy your site, submit it to Google, and hand you everything — source files, hosting setup, and a tutorial video.',
    icon: <Rocket size={24} />,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
]

const stats = [
  { value: '7 Days', label: 'Avg. Delivery' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '7', label: 'Industries Served' },
]

const previewSites = [
  { gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', label: 'Hotel' },
  { gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', label: 'Tech' },
  { gradient: 'linear-gradient(135deg, #1a0533 0%, #4a1045 100%)', label: 'Salon' },
  { gradient: 'linear-gradient(135deg, #1c1c1c 0%, #434343 100%)', label: 'Gym' },
  { gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)', label: 'Events' },
  { gradient: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)', label: 'Clinic' },
  { gradient: 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)', label: 'Academy' },
  { gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', label: 'Venue' },
]

const whyUs = [
  { icon: <CheckCircle size={18} />, text: 'Industry-specific designs that convert' },
  { icon: <CheckCircle size={18} />, text: 'Dedicated project manager for every client' },
  { icon: <CheckCircle size={18} />, text: '30-day free support after launch' },
  { icon: <CheckCircle size={18} />, text: 'Full ownership of your website' },
  { icon: <CheckCircle size={18} />, text: 'Mobile-first development approach' },
]

// ============================================================
// Home Page
// ============================================================
export default function Home() {
  const featuredTemplates = getFeaturedTemplates().slice(0, 6)

  return (
    <div className="page-transition">
      {/* ======================================================
          HERO SECTION
      ====================================================== */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '6rem',
          paddingBottom: '4rem',
        }}
      >
        {/* Background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Dot grid */}
        <div
          className="hero-dot-grid"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            pointerEvents: 'none',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.5rem',
            }}
          >

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="heading-xl" style={{ maxWidth: 900, margin: 0 }}>
              Beautiful Websites That{' '}
              <span className="gradient-text">Grow Your Business</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: 'var(--color-text-secondary)',
                maxWidth: 540,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              PixelNest Studio creates stunning, conversion-optimized websites for gyms,
              salons, clinics, and 7 more industries — delivered in just 7 days.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeInUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}
            >
              <Link
                to="/contact"
                id="hero-cta-primary"
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/templates"
                id="hero-cta-secondary"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
              >
                <Globe size={16} />
                Browse Templates
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />)}
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', marginLeft: '0.25rem' }}>
                  4.9/5 rating
                </span>
              </div>
              <span style={{ width: 1, height: 14, background: 'var(--color-border)', display: 'block' }} />
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>No hidden fees</span>
              <span style={{ width: 1, height: 14, background: 'var(--color-border)', display: 'block' }} />
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>7-day delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          STATS SECTION
      ====================================================== */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {stats.map(stat => (
              <motion.div key={stat.value} variants={fadeInUp}>
                <p
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    marginBottom: '0.25rem',
                  }}
                  className="gradient-text"
                >
                  {stat.value}
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          FEATURES SECTION
      ====================================================== */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Why PixelNest"
            title="Everything You Need to"
            highlight="Succeed Online"
            subtitle="We don't just build websites. We build digital storefronts that attract, engage, and convert your ideal customers."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="grid-auto-fit"
          >
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                animationDelay={i * 0.08}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          INDUSTRIES WE SERVE
      ====================================================== */}
      <section className="section" style={{ background: 'var(--color-bg-dark-2)' }}>
        <div className="container">
          <SectionTitle
            badge="12 Industries"
            title="Templates For Every"
            highlight="Industry"
            subtitle="Explore our growing library of industry-specific templates, each designed with deep knowledge of what converts in that sector."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              paddingBottom: '1.5rem',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {industryCategories.map((category, i) => (
              <div key={category.id} style={{ scrollSnapAlign: 'start', width: '260px', minWidth: '260px', flex: '0 0 auto' }} className="hide-scrollbar">
                <IndustryCard
                  category={category}
                  animationDelay={i * 0.05}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="section" style={{ background: 'var(--color-bg-dark-2)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            >

              <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                We Obsess Over Your{' '}
                <span className="gradient-text">Business Results</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {whyUs.map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{ color: '#a5b4fc', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                  Learn Our Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              style={{ position: 'relative', height: '100%', minHeight: 400, borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.3)' }}
            >
              <img src="/sections/why-us.png" alt="Business Results Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          OUR PROCESS
      ====================================================== */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="How It Works"
            title="From Idea to Live"
            highlight="In 7 Days"
            subtitle="Our proven 4-step process takes you from idea to live website quickly, beautifully, and affordably."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', position: 'relative' }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                style={{
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.boxShadow = `0 12px 40px ${step.gradient.split(',')[1].trim()}20`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Huge background number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    fontSize: '6rem',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    opacity: 0.03,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </div>

                {/* Glowing Icon Box */}
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: '14px',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'white',
                    boxShadow: `0 8px 24px ${step.gradient.split(',')[1].trim()}40`,
                  }}
                >
                  {step.icon}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: step.gradient.split(',')[1].trim(), fontWeight: 800, fontSize: '0.9rem' }}>
                    STEP {step.number}
                  </span>
                </div>
                
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, flex: 1 }}>
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: step.gradient,
                    opacity: 0.8,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          OUR WORK
      ====================================================== */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Our Work"
            title="Real Websites We've"
            highlight="Built for Clients"
            subtitle="Every pixel crafted with purpose. Browse live websites we've delivered to real businesses — click any card to visit the live site."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {getFeaturedClientWorks().map((work, i) => (
              <ClientWorkCard key={work.id} work={work} animationDelay={i * 0.06} />
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            More client work available on request —{' '}
            <a
              href="/contact"
              style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}
            >
              get in touch
            </a>
            {' '}to see case studies relevant to your industry.
          </motion.p>
        </div>
      </section>


      {/* ======================================================
          CTA
      ====================================================== */}
      <CTA />
    </div>
  )
}

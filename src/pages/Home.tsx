import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Zap, Palette, Clock, Shield, TrendingUp,
  Smartphone, Star, CheckCircle, ChevronRight, Globe,
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FeatureCard from '@/components/FeatureCard'
import IndustryCard from '@/components/IndustryCard'
import TemplateCard from '@/components/TemplateCard'
import TestimonialCard, { type Testimonial } from '@/components/TestimonialCard'
import CTA from '@/components/CTA'
import { industryCategories, getFeaturedTemplates } from '@/data/templates'
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
  },
  {
    icon: <Zap size={22} />,
    title: 'Lightning Fast',
    description: 'Optimized for Core Web Vitals with 95+ PageSpeed scores right out of the box. No configuration needed.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Fully Responsive',
    description: 'Every pixel is pixel-perfect across all devices — desktop, tablet, and mobile with zero compromises.',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    icon: <Shield size={22} />,
    title: 'SEO Optimized',
    description: 'Built-in schema markup, semantic HTML, meta optimization, and site structure that search engines love.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
  },
  {
    icon: <Clock size={22} />,
    title: '7-Day Delivery',
    description: 'We deliver your complete, live website in just 7 days. Fast turnaround without compromising quality.',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Conversion Focused',
    description: 'Strategic CTAs, trust signals, and UX patterns that turn your website visitors into paying customers.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
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
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers create mockups based on your industry template and brand. You review and approve before we code anything.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your website with clean code, optimized assets, and thorough testing across all devices and browsers.',
  },
  {
    number: '04',
    title: 'Launch & Handover',
    description: 'We deploy your site, submit it to Google, and hand you everything — source files, hosting setup, and a tutorial video.',
  },
]

const stats = [
  { value: '500+', label: 'Websites Delivered' },
  { value: '12', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '7 Days', label: 'Average Delivery' },
]

const whyUs = [
  { icon: <CheckCircle size={18} />, text: 'Industry-specific designs that convert' },
  { icon: <CheckCircle size={18} />, text: 'Dedicated project manager for every client' },
  { icon: <CheckCircle size={18} />, text: '30-day free support after launch' },
  { icon: <CheckCircle size={18} />, text: 'Full ownership of your website' },
  { icon: <CheckCircle size={18} />, text: 'Google Search Console setup included' },
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

        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
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
              gap: '1.75rem',
            }}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="badge">
                <Sparkles size={12} />
                Websites for Small Businesses That Actually Convert
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="heading-xl" style={{ maxWidth: 860 }}>
              Beautiful Websites That{' '}
              <span className="gradient-text">Grow Your Business</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--color-text-secondary)',
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              PixelNest Studio creates stunning, conversion-optimized websites for hotels, 
              restaurants, gyms, salons, and 12 more industries — delivered in just 7 days.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeInUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
            >
              <Link
                to="/contact"
                id="hero-cta-primary"
                className="btn btn-primary"
                style={{ fontSize: '1.0625rem', padding: '1rem 2.25rem' }}
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/templates"
                id="hero-cta-secondary"
                className="btn btn-secondary"
                style={{ fontSize: '1.0625rem', padding: '1rem 2.25rem' }}
              >
                <Globe size={18} />
                Browse Templates
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginLeft: '0.25rem' }}>
                  4.9/5 from 200+ clients
                </span>
              </div>
              <div style={{ width: 1, height: 16, background: 'var(--color-border)' }} />
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                No hidden fees
              </span>
              <div style={{ width: 1, height: 16, background: 'var(--color-border)' }} />
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                7-day delivery
              </span>
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
            viewport={{ once: true, amount: 0.3 }}
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
            viewport={{ once: true, amount: 0.1 }}
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
            viewport={{ once: true, amount: 0.05 }}
            className="grid-auto-fit-sm"
          >
            {industryCategories.map((category, i) => (
              <IndustryCard
                key={category.id}
                category={category}
                animationDelay={i * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          FEATURED TEMPLATES
      ====================================================== */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Featured Templates"
            title="Hand-Picked for"
            highlight="Maximum Impact"
            subtitle="Our most popular templates — loved by business owners for their stunning designs and impressive conversion rates."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {featuredTemplates.map((template, i) => (
              <TemplateCard key={template.id} template={template} animationDelay={i * 0.08} />
            ))}
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/templates" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              View All Templates
              <ChevronRight size={18} />
            </Link>
          </div>
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
              viewport={{ once: true }}
            >
              <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Sparkles size={12} />
                Why PixelNest Studio
              </span>
              <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>
                We Obsess Over Your{' '}
                <span className="gradient-text">Business Results</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.0625rem' }}>
                We're not just web designers. We're growth partners for small businesses. Every design decision we make is backed by data and years of experience helping businesses like yours succeed online.
              </p>
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

            {/* Right — decorative card stack */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ position: 'relative', height: 400 }}
            >
              {/* Card 1 */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: 0,
                  height: 220,
                  borderRadius: '1.5rem',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 20px 60px rgba(99,102,241,0.4)',
                  transform: 'rotate(-3deg)',
                }}
              />
              {/* Card 2 */}
              <div
                style={{
                  position: 'absolute',
                  top: 40,
                  left: '5%',
                  right: '5%',
                  height: 220,
                  borderRadius: '1.5rem',
                  background: 'var(--color-bg-dark-3)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  transform: 'rotate(1deg)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.5rem',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ height: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 6, width: '70%' }} />
                <div style={{ height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '50%' }} />
                <div style={{ flex: 1, borderRadius: '0.75rem', background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.2))' }} />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 60,
                  right: '5%',
                  background: 'rgba(10,10,15,0.9)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(99,102,241,0.35)',
                  borderRadius: '1rem',
                  padding: '0.875rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUp size={16} color="white" />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: 'white' }}>+40% Bookings</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Grand Horizon Hotel</p>
                </div>
              </div>
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
            subtitle="Our proven 4-step process has helped 500+ small businesses get online quickly, beautifully, and affordably."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', position: 'relative' }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '1.75rem',
                  borderRadius: '1.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    marginBottom: '1rem',
                    opacity: 0.15,
                    lineHeight: 1,
                  }}
                  className="gradient-text"
                >
                  {step.number}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="section" style={{ background: 'var(--color-bg-dark-2)' }}>
        <div className="container">
          <SectionTitle
            badge="Client Love"
            title="Trusted by Small Businesses"
            highlight="Across India"
            subtitle="Don't take our word for it. Here's what our clients say about working with PixelNest Studio."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} animationDelay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}
      <CTA />
    </div>
  )
}

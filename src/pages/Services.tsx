import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Globe, Palette, Code2, Search, BarChart, Wrench,
  CheckCircle, ArrowRight, Zap, Clock, Shield, Star,
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FeatureCard from '@/components/FeatureCard'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import CTA from '@/components/CTA'
import SEO from '@/components/SEO'
import { staggerContainer, fadeInUp } from '@/utils/motion'
import { getBreadcrumbSchema } from '@/utils/schemaGenerator'

const services = [
  {
    icon: <Palette size={22} />,
    title: 'Custom Website Design',
    description: 'Bespoke designs crafted from scratch to reflect your brand\'s personality. Every element is intentionally placed to guide visitors toward conversion.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    image: '/features/premium-design.png',
    deliverables: ['Custom mockups & wireframes', 'Brand color palette integration', 'Typography system', 'Mobile-first responsive layouts'],
  },
  {
    icon: <Globe size={22} />,
    title: 'Template Customization',
    description: 'Love one of our templates? We take it and customize every detail to make it 100% yours — your colors, content, photos, and brand voice.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    image: '/features/responsive.png',
    deliverables: ['Full color scheme customization', 'Content population', 'Logo & brand integration', 'Domain & hosting setup'],
  },
  {
    icon: <Wrench size={22} />,
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our monthly maintenance plans. Updates, backups, security monitoring, and content changes included.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    image: '/features/delivery.png',
    deliverables: ['Monthly content updates', 'Plugin & software updates', 'Security monitoring', 'Daily automated backups'],
  },
]

const packages = [
  {
    name: 'Essential',
    services: ['Design', 'Development', 'SEO Basics', 'Mobile Responsive'],
    color: '#6366f1',
  },
  {
    name: 'Growth',
    services: ['Everything in Essential', 'Advanced SEO', 'Analytics Setup', '3-Month Support'],
    color: '#a855f7',
  },
  {
    name: 'Business',
    services: ['Everything in Growth', 'Speed Optimization', 'Monthly Maintenance', 'Priority Support'],
    color: '#ec4899',
  },
]

const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'How long does it take to build a website?',
    answer: 'For template-based projects, we deliver your complete website within 7 working days. For fully custom projects, timelines vary from 2-4 weeks depending on complexity. We\'ll give you a precise timeline after our discovery call.',
  },
  {
    id: 'f2',
    question: 'Do you offer revisions?',
    answer: 'Absolutely. Every package includes 2 rounds of design revisions before development begins, and 1 round of revisions after the website is built. Additional revision rounds can be added on request.',
  },
  {
    id: 'f3',
    question: 'Will I own the website after it\'s built?',
    answer: 'Yes, 100%. Once the project is complete and payment is received, you own the full source code, assets, and all website files. We\'ll also hand over everything you need to manage the site yourself.',
  },
  {
    id: 'f4',
    question: 'What if I need changes after the website is launched?',
    answer: 'All packages include 30 days of free post-launch support for minor fixes and tweaks. For ongoing changes and maintenance, we offer affordable monthly maintenance plans.',
  },
  {
    id: 'f5',
    question: 'Do you handle hosting and domain?',
    answer: 'We guide you through purchasing your own hosting and domain (so you maintain ownership), then we handle the full setup and deployment. We work with providers like Hostinger, SiteGround, and Vercel.',
  },
  {
    id: 'f6',
    question: 'Can you redesign my existing website?',
    answer: 'Yes! We love redesign projects. We start fresh with your existing content and brand, then build something modern, fast, and beautiful. Many clients see dramatic improvement in results after a redesign.',
  },
]

export default function Services() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ])

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      <SEO
        title="Website Development & Design Services | RivixoTech"
        description="Explore custom website development services by RivixoTech. SEO-optimized, Core Web Vitals ready websites for dental clinics, gyms, salons, restaurants, & small businesses."
        canonicalUrl="/services"
        schemas={[breadcrumbSchema]}
      />
      {/* Hero */}
      <section style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <SectionTitle
            badge="What We Offer"
            title="Services That Drive"
            highlight="Real Results"
            subtitle="We offer a complete suite of web services for small businesses — from design and development to SEO, maintenance, and beyond."
          />
        </div>
      </section>

      {/* Services grid */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                style={{
                  borderRadius: '1.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(99,102,241,0.35)'
                  el.style.boxShadow = '0 12px 40px rgba(99,102,241,0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Image Section */}
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-surface) 0%, transparent 100%)' }} />
                  
                  {/* Floating Icon Box */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '2rem',
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: service.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '1.5rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                    {service.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {service.deliverables.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <CheckCircle size={14} color="#a5b4fc" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--color-bg-dark-2)' }}>
        <div className="container">
          <SectionTitle
            badge="Our Workflow"
            title="A Smooth Process"
            highlight="From Start to Launch"
            subtitle="We've refined our workflow over hundreds of projects to be as smooth and transparent as possible."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Zap size={22} />, title: 'Quick Start', desc: 'Book a call and share your requirements. We start work within 24 hours of project approval.', gradient: 'linear-gradient(135deg, #6366f1, #a855f7)' },
              { icon: <Code2 size={22} />, title: 'Clean Code', desc: 'Built with best practices — semantic HTML, optimized assets, and maintainable code.', gradient: 'linear-gradient(135deg, #3b82f6, #2dd4bf)' },
              { icon: <Clock size={22} />, title: 'Fast Delivery', desc: 'We respect deadlines. Your website is live within the agreed timeline, every time.', gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)' },
              { icon: <Shield size={22} />, title: 'Post-Launch', desc: '30 days of free support to handle any issues and make tweaks after you go live.', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1 }}
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
                  el.style.boxShadow = `0 12px 40px ${step.gradient.split(',')[1].trim()}15`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Background Step Number Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '5px',
                    fontSize: '5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    opacity: 0.03,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  0{i + 1}
                </div>

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: '1.5rem',
                    boxShadow: `0 8px 24px ${step.gradient.split(',')[1].trim()}40`,
                  }}
                >
                  {step.icon}
                </div>
                
                <h4 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-text-primary)', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
                  {step.desc}
                </p>
                
                {/* Subtle top border for structure */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: step.gradient, opacity: 0.6 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Common Questions"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Everything you need to know about working with RivixoTech."
          />
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Get Started?"
        highlight="Let's Talk!"
        subtitle="Book a free 30-minute discovery call and we'll help you figure out exactly what your business needs."
        primaryCta="Book Free Call"
        secondaryCta="View Pricing"
        secondaryCtaLink="/pricing"
      />
    </div>
  )
}

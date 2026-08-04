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
import { staggerContainer, fadeInUp } from '@/utils/motion'

const services = [
  {
    icon: <Palette size={22} />,
    title: 'Custom Website Design',
    description: 'Bespoke designs crafted from scratch to reflect your brand\'s personality. Every element is intentionally placed to guide visitors toward conversion.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    deliverables: ['Custom mockups & wireframes', 'Brand color palette integration', 'Typography system', 'Mobile-first responsive layouts'],
  },
  {
    icon: <Globe size={22} />,
    title: 'Template Customization',
    description: 'Love one of our templates? We take it and customize every detail to make it 100% yours — your colors, content, photos, and brand voice.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    deliverables: ['Full color scheme customization', 'Content population', 'Logo & brand integration', 'Domain & hosting setup'],
  },
  {
    icon: <Search size={22} />,
    title: 'SEO Optimization',
    description: 'Every website we build is SEO-ready from day one. We handle technical SEO, meta tags, schema markup, and Google Search Console setup.',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    deliverables: ['Keyword research & mapping', 'On-page SEO setup', 'Schema markup implementation', 'Google Search Console & Analytics'],
  },
  {
    icon: <Wrench size={22} />,
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our monthly maintenance plans. Updates, backups, security monitoring, and content changes included.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    deliverables: ['Monthly content updates', 'Plugin & software updates', 'Security monitoring', 'Daily automated backups'],
  },
  {
    icon: <BarChart size={22} />,
    title: 'Analytics & Reporting',
    description: 'Understand how visitors use your website with monthly performance reports. Know what\'s working and where to improve.',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    deliverables: ['Google Analytics 4 setup', 'Monthly performance reports', 'Heatmap analysis', 'Conversion tracking'],
  },
  {
    icon: <Code2 size={22} />,
    title: 'Speed Optimization',
    description: 'We audit and optimize your website to achieve 90+ PageSpeed scores. Faster websites rank higher and convert more visitors.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    deliverables: ['Image optimization & compression', 'Core Web Vitals improvement', 'Caching & CDN setup', 'Code minification'],
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
  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
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
                whileHover={{ y: -4 }}
                style={{
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(99,102,241,0.35)'
                  el.style.boxShadow = '0 8px 32px rgba(99,102,241,0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: service.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: '1.25rem',
                  }}
                >
                  {service.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-text-primary)', marginBottom: '0.625rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.deliverables.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={13} color="#a5b4fc" />
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8375rem' }}>{item}</span>
                    </div>
                  ))}
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
              { icon: <Zap size={20} />, title: 'Quick Start', desc: 'Book a call and share your requirements. We start work within 24 hours of project approval.' },
              { icon: <Palette size={20} />, title: 'Design First', desc: 'You approve the visual design before we write a single line of code. No surprises.' },
              { icon: <Code2 size={20} />, title: 'Clean Code', desc: 'Built with best practices — semantic HTML, optimized assets, and maintainable code.' },
              { icon: <Clock size={20} />, title: 'Fast Delivery', desc: 'We respect deadlines. Your website is live within the agreed timeline, every time.' },
              { icon: <Shield size={20} />, title: 'Post-Launch', desc: '30 days of free support to handle any issues and make tweaks after you go live.' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--gradient-subtle)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a5b4fc',
                    margin: '0 auto 1rem',
                  }}
                >
                  {step.icon}
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
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
            subtitle="Everything you need to know about working with PixelNest Studio."
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

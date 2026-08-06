import { motion } from 'framer-motion'
import { Sparkles, Target, Heart, Rocket, Users, Globe, Award } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import CTA from '@/components/CTA'
import SEO from '@/components/SEO'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/utils/motion'
import { getOrganizationSchema, getBreadcrumbSchema } from '@/utils/schemaGenerator'

const values = [
  { icon: <Heart size={22} />, title: 'Small Business First', description: 'We started RivixoTech specifically to help small businesses compete. Every decision we make is with your success in mind.', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' },
  { icon: <Target size={22} />, title: 'Results Over Aesthetics', description: 'Beautiful websites that don\'t convert are just digital art. We design for results — more calls, bookings, and sales.', gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  { icon: <Globe size={22} />, title: 'Transparency Always', description: 'No jargon, no hidden fees, no bait-and-switch. What you see is what you get — we\'re refreshingly honest.', gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)' },
  { icon: <Rocket size={22} />, title: 'Speed Is a Feature', description: 'We move fast without cutting corners. 7-day delivery isn\'t a gimmick — it\'s a promise we stand behind on every project.', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
]

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ])

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      <SEO
        title="About RivixoTech — Top Website Development Company"
        description="Learn about RivixoTech (Rivixo), a top Website Development & Design Company based in Kerala & India. We craft high-speed, conversion-ready websites for small businesses."
        canonicalUrl="/about"
        schemas={[getOrganizationSchema(), breadcrumbSchema]}
      />
      {/* Hero */}
      <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 700 }}
          >

            <motion.h1 variants={fadeInUp} className="heading-xl" style={{ marginBottom: '1.5rem' }}>
              We Build Websites That{' '}
              <span className="gradient-text">Matter</span>
            </motion.h1>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              RivixoTech was born out of frustration. In 2020, our founder Arjun walked into dozens of local businesses and saw the same thing: incredible products and services, held back by outdated or non-existent websites.
            </motion.p>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              Large agencies were charging ₹1-2 lakhs for websites that took 3+ months. Freelancers were unreliable. We decided to build a better option — a studio that combines agency quality with startup speed and small-business pricing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlign: 'center' }}
          >
            {[
              { value: '7+', label: 'Industries Served' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '7 Days', label: 'Average Delivery' },
              { value: '0', label: 'Hidden Fees' },
            ].map(stat => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <p className="gradient-text" style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '0.25rem' }}>
                  {stat.value}
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Our Values"
            title="What We Believe"
            highlight="In"
            subtitle="These aren't just words on a wall. Our values shape every project, every client relationship, and every line of code we write."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="grid-auto-fit"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '1.75rem',
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
                <div style={{ width: 48, height: 48, borderRadius: 12, background: value.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.125rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <CTA
        title="Want to Work With"
        highlight="Our Team?"
        subtitle="Whether you're a local shop, a growing restaurant, or a boutique hotel — we'd love to help you build something amazing."
      />
    </div>
  )
}

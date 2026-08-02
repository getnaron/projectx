import { motion } from 'framer-motion'
import { Sparkles, Target, Heart, Rocket, Users, Globe, Award } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import CTA from '@/components/CTA'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/utils/motion'

const team = [
  {
    name: 'Arjun Nair',
    role: 'Founder & Creative Director',
    bio: '8 years of UI/UX experience across agencies in Mumbai and Singapore. Passionate about making beautiful design accessible to every small business.',
    avatar: 'linear-gradient(135deg, #6366f1, #a855f7)',
    initials: 'AN',
  },
  {
    name: 'Kavya Reddy',
    role: 'Lead Developer',
    bio: 'Full-stack developer with a talent for making websites blindingly fast. Obsessed with performance, accessibility, and clean code.',
    avatar: 'linear-gradient(135deg, #ec4899, #f97316)',
    initials: 'KR',
  },
  {
    name: 'Dhruv Patel',
    role: 'SEO & Growth Strategist',
    bio: 'Former digital marketing lead at a top-10 agency. Helps small businesses compete with national brands on Google.',
    avatar: 'linear-gradient(135deg, #22c55e, #0ea5e9)',
    initials: 'DP',
  },
]

const values = [
  { icon: <Heart size={22} />, title: 'Small Business First', description: 'We started PixelNest specifically to help small businesses compete. Every decision we make is with your success in mind.', gradient: 'linear-gradient(135deg, #ec4899, #be185d)' },
  { icon: <Target size={22} />, title: 'Results Over Aesthetics', description: 'Beautiful websites that don\'t convert are just digital art. We design for results — more calls, bookings, and sales.', gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  { icon: <Globe size={22} />, title: 'Transparency Always', description: 'No jargon, no hidden fees, no bait-and-switch. What you see is what you get — we\'re refreshingly honest.', gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)' },
  { icon: <Rocket size={22} />, title: 'Speed Is a Feature', description: 'We move fast without cutting corners. 7-day delivery isn\'t a gimmick — it\'s a promise we\'ve kept for 500+ clients.', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
]

const milestones = [
  { year: '2020', title: 'PixelNest Founded', description: 'Started with 3 team members and a simple mission: make great websites affordable for everyone.' },
  { year: '2021', title: 'First 100 Clients', description: 'Grew rapidly through word of mouth. Expanded to serve restaurants, hotels, and clinics.' },
  { year: '2022', title: 'Template Library Launched', description: 'Launched our signature template library — making premium design faster and more affordable.' },
  { year: '2023', title: '500+ Websites Delivered', description: 'Crossed the 500-project milestone across 12 industries. Expanded the team to 8 people.' },
  { year: '2024', title: 'Recognition & Awards', description: 'Featured in YourStory, nominated for "Best SMB Web Agency" by Digital India Forum.' },
]

export default function About() {
  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
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
            <motion.span variants={fadeInUp} className="badge" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
              <Sparkles size={12} />
              Our Story
            </motion.span>
            <motion.h1 variants={fadeInUp} className="heading-xl" style={{ marginBottom: '1.5rem' }}>
              We Build Websites That{' '}
              <span className="gradient-text">Matter</span>
            </motion.h1>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              PixelNest Studio was born out of frustration. In 2020, our founder Arjun walked into dozens of local businesses and saw the same thing: incredible products and services, held back by outdated or non-existent websites.
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
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlign: 'center' }}
          >
            {[
              { value: '500+', label: 'Websites Delivered' },
              { value: '12', label: 'Industries Served' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '3', label: 'Core Team Members' },
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
            viewport={{ once: true }}
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

      {/* Team */}
      <section className="section" style={{ background: 'var(--color-bg-dark-2)' }}>
        <div className="container">
          <SectionTitle
            badge="The Team"
            title="Meet the People Behind"
            highlight="PixelNest"
            subtitle="A small but mighty team of designers, developers, and strategists obsessed with helping small businesses win online."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: member.avatar,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#a5b4fc', fontWeight: 500 }}>{member.role}</p>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Story */}
      <section className="section">
        <div className="container">
          <SectionTitle
            badge="Our Journey"
            title="From Startup to"
            highlight="Industry Leaders"
            subtitle="A quick look at the milestones that shaped PixelNest Studio."
          />
          <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            {/* Timeline line */}
            <div
              style={{
                position: 'absolute',
                left: 20,
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.5), rgba(168,85,247,0.5), transparent)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ paddingLeft: '3rem', position: 'relative' }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 10,
                      top: 8,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'var(--gradient-primary)',
                      border: '3px solid var(--color-bg-dark)',
                      transform: 'translateX(-50%)',
                      zIndex: 1,
                    }}
                  />
                  <p className="gradient-text" style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>{m.year}</p>
                  <h4 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-text-primary)', marginBottom: '0.375rem' }}>{m.title}</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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

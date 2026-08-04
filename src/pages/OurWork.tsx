import { motion } from 'framer-motion'
import { Globe, ArrowUpRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ClientWorkCard from '@/components/ClientWorkCard'
import CTA from '@/components/CTA'
import { clientWorks } from '@/data/clientWorks'
import { staggerContainer } from '@/utils/motion'

export default function OurWork() {
  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      {/* ======================================================
          HEADER
      ====================================================== */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <SectionTitle
            title="Real Websites We've"
            highlight="Built for Clients"
          />

          {/* Client work grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {clientWorks.map((work, i) => (
              <ClientWorkCard key={work.id} work={work} animationDelay={i * 0.08} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          WANT YOUR SITE HERE?
      ====================================================== */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: '1.5rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              padding: '3rem 2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 400,
                height: 400,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <Globe
              size={40}
              style={{
                margin: '0 auto 1rem',
                color: 'var(--color-accent)',
                opacity: 0.8,
              }}
            />
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Want Your Website{' '}
              <span className="gradient-text">Featured Here?</span>
            </h2>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '1rem',
                maxWidth: 520,
                margin: '0 auto 1.75rem',
                lineHeight: 1.7,
              }}
            >
              We'd love to build your next website and showcase it alongside our growing portfolio. Get in touch to start your project today.
            </p>
            <a
              href="/contact"
              id="our-work-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.75rem',
                background: 'var(--gradient-primary)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9375rem',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.opacity = '0.9'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }}
            >
              Start Your Project
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Not Sure Where to Start?"
        highlight="Let's Talk."
        subtitle="Book a free 30-minute discovery call and we'll help you figure out exactly what your business needs."
        primaryCta="Book Free Call"
        secondaryCta="View Templates"
        secondaryCtaLink="/templates"
      />
    </div>
  )
}

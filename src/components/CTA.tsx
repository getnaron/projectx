import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/motion'

interface CTAProps {
  title?: string
  highlight?: string
  subtitle?: string
  primaryCta?: string
  primaryCtaLink?: string
  secondaryCta?: string
  secondaryCtaLink?: string
}

/**
 * CTA — Full-width gradient call-to-action banner.
 * Used at the bottom of most pages.
 */
export default function CTA({
  title = 'Ready to Build Your',
  highlight = 'Dream Website?',
  subtitle = 'Join small businesses that trust PixelNest Studio to create websites that actually convert visitors into customers.',
  primaryCta = 'Get Started Today',
  primaryCtaLink = '/contact',
  secondaryCta = 'Browse Templates',
  secondaryCtaLink = '/templates',
}: CTAProps) {
  return (
    <section
      style={{
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.08) 50%, rgba(236,72,153,0.08) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
        }}
      />

      {/* Orb decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <motion.div variants={fadeInUp}>
            <span className="badge">
              <Sparkles size={12} />
              Let's Build Together
            </span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="heading-lg" style={{ maxWidth: 640 }}>
            {title}{' '}
            <span className="gradient-text">{highlight}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.0625rem',
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
          >
            <Link to={primaryCtaLink} className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              {primaryCta}
              <ArrowRight size={18} />
            </Link>
            <Link to={secondaryCtaLink} className="btn btn-secondary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              {secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

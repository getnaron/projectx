import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  image?: string
  animationDelay?: number
}

/**
 * FeatureCard — Icon card for showcasing product features.
 */
export default function FeatureCard({
  icon,
  title,
  description,
  gradient = 'var(--gradient-primary)',
  image,
  animationDelay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: animationDelay }}
      whileHover={{ y: -4 }}
      style={{
        padding: '1.5rem',
        borderRadius: '1.25rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(99, 102, 241, 0.35)'
        el.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'none'
      }}
    >
      {image && (
        <div style={{ height: 180, borderRadius: '0.875rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      {/* Icon box */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '12px',
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.125rem',
          color: 'white',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontWeight: 700,
          fontSize: '1.0625rem',
          color: 'var(--color-text-primary)',
          marginBottom: '0.5rem',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {description}
      </p>
    </motion.div>
  )
}

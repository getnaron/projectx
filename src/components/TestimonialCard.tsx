import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string       // gradient string for avatar placeholder
  quote: string
  rating: number
  industry: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  animationDelay?: number
}

/**
 * TestimonialCard — Displays a client testimonial with star rating,
 * quote, avatar, and role info.
 */
export default function TestimonialCard({ testimonial, animationDelay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: animationDelay }}
      whileHover={{ y: -4 }}
      style={{
        padding: '1.75rem',
        borderRadius: '1.25rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.125rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(99, 102, 241, 0.3)'
        el.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Background quote icon */}
      <div
        style={{
          position: 'absolute',
          top: -10,
          right: -10,
          opacity: 0.05,
        }}
      >
        <Quote size={80} />
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
        {/* Avatar */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: testimonial.avatar,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '1rem',
          }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-primary)', marginBottom: '0.1rem' }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

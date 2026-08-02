import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/utils/motion'

export interface PricingPlan {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  ctaLink: string
  highlighted?: boolean
  badge?: string
}

interface PricingCardProps {
  plan: PricingPlan
  animationDelay?: number
}

/**
 * PricingCard — Displays a pricing plan with features list,
 * highlighted variant for the recommended plan.
 */
export default function PricingCard({ plan, animationDelay = 0 }: PricingCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: animationDelay }}
      whileHover={{ y: -4 }}
      style={{
        padding: '2rem',
        borderRadius: '1.5rem',
        background: plan.highlighted
          ? 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 100%)'
          : 'var(--color-surface)',
        border: plan.highlighted
          ? '1px solid rgba(99, 102, 241, 0.5)'
          : '1px solid var(--color-border)',
        boxShadow: plan.highlighted
          ? '0 0 0 1px rgba(99, 102, 241, 0.2), 0 12px 40px rgba(99, 102, 241, 0.12)'
          : 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'var(--gradient-primary)',
            color: 'white',
            borderRadius: '999px',
            padding: '0.2rem 0.7rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <Star size={11} fill="white" />
          {plan.badge}
        </div>
      )}

      {/* Background glow for highlighted */}
      {plan.highlighted && (
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Plan name */}
      <h3
        style={{
          fontWeight: 700,
          fontSize: '1.125rem',
          color: 'var(--color-text-primary)',
          marginBottom: '0.375rem',
        }}
      >
        {plan.name}
      </h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
        {plan.description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: '1.75rem' }}>
        <span
          style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: plan.highlighted ? '#a5b4fc' : 'var(--color-text-primary)',
          }}
        >
          {plan.price}
        </span>
        {plan.period && (
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginLeft: '0.25rem' }}>
            {plan.period}
          </span>
        )}
      </div>

      {/* Features list */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.625rem', flex: 1 }}>
        {plan.features.map(feature => (
          <li
            key={feature}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem' }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: plan.highlighted ? 'rgba(99,102,241,0.25)' : 'var(--color-surface)',
                border: `1px solid ${plan.highlighted ? 'rgba(99,102,241,0.4)' : 'var(--color-border)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '0.1rem',
              }}
            >
              <Check size={11} color={plan.highlighted ? '#a5b4fc' : 'var(--color-text-secondary)'} strokeWidth={2.5} />
            </span>
            <span style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link
        to={plan.ctaLink}
        id={`pricing-cta-${plan.id}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.875rem',
          borderRadius: '0.875rem',
          fontWeight: 600,
          fontSize: '0.9375rem',
          textDecoration: 'none',
          background: plan.highlighted ? 'var(--gradient-primary)' : 'var(--color-surface)',
          border: plan.highlighted ? 'none' : '1px solid var(--color-border)',
          color: plan.highlighted ? 'white' : 'var(--color-text-primary)',
          boxShadow: plan.highlighted ? '0 4px 16px rgba(99,102,241,0.35)' : 'none',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          if (!plan.highlighted) {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--gradient-primary)'
            el.style.color = 'white'
            el.style.border = 'none'
          }
        }}
        onMouseLeave={e => {
          if (!plan.highlighted) {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--color-surface)'
            el.style.color = 'var(--color-text-primary)'
            el.style.border = '1px solid var(--color-border)'
          }
        }}
      >
        {plan.cta}
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  )
}

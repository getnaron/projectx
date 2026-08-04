import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Calendar } from 'lucide-react'
import type { ClientWork } from '@/data/clientWorks'
import { fadeInUp } from '@/utils/motion'

interface ClientWorkCardProps {
  work: ClientWork
  animationDelay?: number
}

/**
 * ClientWorkCard — displays a real client website with a live link.
 * Data-driven from clientWorks.ts.
 */
export default function ClientWorkCard({ work, animationDelay = 0 }: ClientWorkCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: animationDelay }}
      whileHover={{ y: -8 }}
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = `${work.accentColor}66`
        el.style.boxShadow = `0 16px 48px ${work.accentColor}30`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      {/* Thumbnail — photo if available, else gradient */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        {work.image ? (
          <img
            src={work.image}
            alt={`${work.name} website screenshot`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: work.gradient }} />
        )}

        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${work.accentColor}, transparent)`,
          }}
        />

        {/* Industry badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            color: 'rgba(255,255,255,0.9)',
            borderRadius: '999px',
            padding: '0.2rem 0.6rem',
            fontSize: '0.725rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          {work.industry}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1.0625rem',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              {work.name}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                color: 'var(--color-text-muted)',
                fontSize: '0.75rem',
              }}
            >
              <Calendar size={12} />
              {work.year}
            </div>
          </div>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
              lineHeight: 1.65,
            }}
          >
            {work.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {work.tags.map(tag => (
            <span
              key={tag}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '999px',
                padding: '0.15rem 0.6rem',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit button */}
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          id={`visit-${work.id}`}
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.625rem',
            borderRadius: '0.75rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--gradient-primary)'
            el.style.border = '1px solid transparent'
            el.style.color = 'white'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--color-surface)'
            el.style.border = '1px solid var(--color-border)'
            el.style.color = 'var(--color-text-primary)'
          }}
        >
          <Globe size={15} />
          Visit Live Website
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  )
}

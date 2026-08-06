import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, Tag, ArrowUpRight } from 'lucide-react'
import type { Template } from '@/data/templates'
import { fadeInUp } from '@/utils/motion'

interface TemplateCardProps {
  template: Template
  animationDelay?: number
}

/**
 * TemplateCard — displays a template's image, title, description,
 * tags, and a Preview button. Data-driven from templates.ts.
 */
export default function TemplateCard({ template, animationDelay = 0 }: TemplateCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: animationDelay }}
      whileHover={{ y: -6 }}
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
        el.style.borderColor = 'rgba(99, 102, 241, 0.4)'
        el.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.15)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      {/* Template image / gradient preview */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: template.image,
            transition: 'transform 0.4s ease',
          }}
        />

        {/* Badge overlay */}
        {template.badge && (
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: 'var(--gradient-primary)',
              color: 'white',
              borderRadius: '999px',
              padding: '0.2rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            {template.badge}
          </div>
        )}

        {/* Accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${template.accentColor}, transparent)`,
          }}
        />

        {/* Category label */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            color: 'rgba(255,255,255,0.85)',
            borderRadius: '999px',
            padding: '0.2rem 0.6rem',
            fontSize: '0.725rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          {template.categoryLabel}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
        <div>
          <h3
            style={{
              fontWeight: 700,
              fontSize: '1.0625rem',
              color: 'var(--color-text-primary)',
              marginBottom: '0.375rem',
              letterSpacing: '-0.01em',
            }}
          >
            {template.title}
          </h3>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
              lineHeight: 1.65,
            }}
          >
            {template.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {template.tags.slice(0, 3).map(tag => (
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

        {/* Preview button */}
        <Link
          to={template.route}
          id={`preview-${template.id}`}
          aria-label={`Preview ${template.title} — ${template.categoryLabel} Website Template`}
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
          <Eye size={15} />
          Preview Template
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </motion.div>
  )
}

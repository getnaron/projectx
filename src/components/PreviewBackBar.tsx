import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles, ExternalLink } from 'lucide-react'

interface PreviewBackBarProps {
  templateName: string
  category: string
  categoryRoute: string
}

/**
 * PreviewBackBar — Sticky bar at the top of every template preview page.
 * Shows the RivixoTech brand, the template name, and a "Back" link.
 */
export default function PreviewBackBar({ templateName, category, categoryRoute }: PreviewBackBarProps) {
  return (
    <div className="preview-back-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo-dark.png" alt="RivixoTech Logo" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Separator */}
        <span style={{ opacity: 0.3 }}>/</span>

        {/* Category & Template name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem' }}>
          <Link to={categoryRoute} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{category}</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>{templateName}</span>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Preview Mode</span>
        <Link to={categoryRoute} style={{ color: '#a5b4fc', fontSize: '0.8375rem' }}>
          <ArrowLeft size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
          Back to {category}
        </Link>
        <Link
          to="/contact"
          style={{
            background: 'var(--gradient-primary)',
            color: 'white',
            textDecoration: 'none',
            padding: '0.375rem 0.875rem',
            borderRadius: '0.5rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          Get This Template
          <ExternalLink size={12} />
        </Link>
      </div>
    </div>
  )
}

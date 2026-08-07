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
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', overflow: 'hidden' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo-dark.png" alt="RivixoTech Logo" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Separator */}
        <span style={{ opacity: 0.3 }} className="hidden sm:inline">/</span>

        {/* Category & Template name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8125rem', minWidth: 0 }}>
          <Link to={categoryRoute} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', whiteSpace: 'nowrap' }} className="hidden sm:inline">
            {category}
          </Link>
          <span style={{ opacity: 0.4 }} className="hidden sm:inline">/</span>
          <span style={{ color: 'var(--color-text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }}>
            {templateName}
          </span>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <span style={{ fontSize: '0.75rem', opacity: 0.5 }} className="hidden md:inline">Preview Mode</span>
        <Link to={categoryRoute} style={{ color: '#a5b4fc', fontSize: '0.8125rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          <ArrowLeft size={14} style={{ marginRight: '0.25rem' }} />
          <span className="hidden sm:inline">Back to {category}</span>
          <span className="sm:hidden">Back</span>
        </Link>
        <Link
          to="/contact"
          style={{
            background: 'var(--gradient-primary)',
            color: 'white',
            textDecoration: 'none',
            padding: '0.35rem 0.65rem',
            borderRadius: '0.5rem',
            fontSize: '0.775rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            whiteSpace: 'nowrap',
          }}
        >
          <span>Get<span className="hidden sm:inline"> Template</span></span>
          <ExternalLink size={11} />
        </Link>
      </div>
    </div>
  )
}

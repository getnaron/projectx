import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Hotel, UtensilsCrossed, Building2, ShoppingBag, Stethoscope,
  Dumbbell, Scissors, Camera, User, CalendarDays, GraduationCap, Home,
  ArrowRight,
} from 'lucide-react'
import type { IndustryCategory } from '@/data/templates'
import { fadeInUp } from '@/utils/motion'

// Icon map for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Hotel,
  UtensilsCrossed,
  Building2,
  ShoppingBag,
  Stethoscope,
  Dumbbell,
  Scissors,
  Camera,
  User,
  CalendarDays,
  GraduationCap,
  Home,
}

interface IndustryCardProps {
  category: IndustryCategory
  animationDelay?: number
}

/**
 * IndustryCard — Displays an industry category with gradient icon,
 * title, description, template count, and a link to the category page.
 */
export default function IndustryCard({ category, animationDelay = 0 }: IndustryCardProps) {
  const IconComponent = iconMap[category.icon] ?? Hotel

  return (
    <motion.div variants={fadeInUp} transition={{ delay: animationDelay }} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link
        to={category.route}
        id={`industry-${category.id}`}
        style={{ textDecoration: 'none', display: 'block', flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <motion.div
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          style={{
            padding: '1.5rem',
            borderRadius: '1.25rem',
            backgroundImage: category.image 
              ? `linear-gradient(to bottom, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.95) 100%), url(${category.image})` 
              : 'var(--color-surface)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'rgba(99, 102, 241, 0.6)'
            el.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.2)'
            if (category.image) {
              el.style.backgroundImage = `linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.9) 100%), url(${category.image})`
            }
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'var(--color-border)'
            el.style.boxShadow = 'none'
            if (category.image) {
              el.style.backgroundImage = `linear-gradient(to bottom, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.95) 100%), url(${category.image})`
            }
          }}
        >
          {/* Gradient background glow */}
          <div
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: category.gradient,
              opacity: 0.08,
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '14px',
              background: category.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            <IconComponent size={22} strokeWidth={1.8} />
          </div>

          {/* Content */}
          <h3
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: category.image ? '#ffffff' : 'var(--color-text-primary)',
              marginBottom: '0.375rem',
              letterSpacing: '-0.01em',
            }}
          >
            {category.label}
          </h3>
          <p
            style={{
              color: category.image ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)',
              fontSize: '0.8375rem',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}
          >
            {category.description}
          </p>

          {/* Footer row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 'auto',
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                color: category.image ? 'rgba(255,255,255,0.6)' : 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              {category.count} templates
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#a5b4fc',
              }}
            >
              Explore <ArrowRight size={13} />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

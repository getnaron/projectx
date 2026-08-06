import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react'
import { useTheme } from '@/App'
import Logo from '@/components/ui/Logo'

// ============================================================
// Navigation links config
// ============================================================
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Templates', to: '/templates' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// ============================================================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Add blur/shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'var(--color-bg-dark)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 92,
          width: '100%',
          paddingLeft: '1.25rem',
          paddingRight: '1.75rem',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginLeft: '-0.25rem' }}
        >
          <Logo height={80} />
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '0.25rem' }}
        >
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            id="theme-toggle"
            aria-label="Toggle theme"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              transition: 'all 0.2s ease',
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* CTA button — desktop only */}
          <Link
            to="/contact"
            id="nav-get-started"
            className="hidden md:inline-flex btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', borderRadius: '0.625rem' }}
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
            }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu — compact floating dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '100%',
              right: '1rem',
              marginTop: '0.5rem',
              width: 220,
              background: 'var(--color-bg-dark-2)',
              border: '1px solid var(--color-border)',
              borderRadius: '1rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '0.5rem',
              zIndex: 999,
              transformOrigin: 'top right',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  style={{ display: 'block', padding: '0.5rem 0.75rem', borderRadius: '0.5rem' }}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <div style={{ height: 1, background: 'var(--color-border)', margin: '0.375rem 0.25rem' }} />

            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ display: 'block', textAlign: 'center', borderRadius: '0.625rem', padding: '0.6rem', fontSize: '0.875rem', margin: '0.25rem 0 0' }}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

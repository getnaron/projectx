import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Share2,
  Camera,
  Users,
  Code2,
  Heart,
} from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Process', to: '/about#process' },
    { label: 'Careers', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Website Design', to: '/services' },
    { label: 'Template Customization', to: '/services' },
    { label: 'SEO Optimization', to: '/services' },
    { label: 'Hosting & Maintenance', to: '/services' },
  ],
  Templates: [
    { label: 'Gyms & Fitness', to: '/templates/gyms' },
    { label: 'Salons & Beauty', to: '/templates/salons' },
    { label: 'Auditoriums', to: '/templates/auditoriums' },
    { label: 'Browse All Templates', to: '/templates' },
  ],
  Resources: [
    { label: 'Pricing', to: '/pricing' },
    { label: 'FAQ', to: '/pricing#faq' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
}

const socialLinks = [
  { icon: Share2, label: 'Twitter', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Users, label: 'LinkedIn', href: '#' },
  { icon: Code2, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg-dark-2)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '5rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        {/* Top section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.3 }}
            style={{ gridColumn: 'span 1' }}
          >
            <Link
              to="/"
              style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '1rem' }}
            >
              <Logo height={48} />
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We craft beautiful, high-converting websites for small businesses that deserve to shine online.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 0.2s, background 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([groupLabel, links], groupIdx) => (
            <motion.div
              key={groupLabel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.3, delay: groupIdx * 0.08 }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--color-text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                }}
              >
                {groupLabel}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={{
                        color: 'var(--color-text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-primary)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} RivixoTech. All rights reserved.
          </p>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            Made with <Heart size={14} style={{ color: '#ec4899' }} fill="#ec4899" /> for small businesses
          </p>
        </div>
      </div>
    </footer>
  )
}

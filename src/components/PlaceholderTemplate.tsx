import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

interface PlaceholderTemplateProps {
  // Meta
  templateName: string
  categoryLabel: string
  categoryRoute: string
  // Brand
  brandName: string
  tagline: string
  description: string
  // Design
  primaryColor: string
  secondaryColor: string
  heroGradient: string
  textColor?: string
  // Content
  services: { title: string; description: string }[]
  features: string[]
  contact: { phone: string; email: string; address: string }
  testimonialsLabel?: string
}

/**
 * PlaceholderTemplate — Generic template preview scaffold.
 * 
 * TEAM COLLABORATION:
 * Each developer should replace this with a fully custom template
 * for their assigned category. This scaffold ensures the page is
 * functional and browsable from day one.
 * 
 * Steps to build out a template:
 * 1. Copy this structure into the template's index.tsx
 * 2. Replace placeholder sections with custom design
 * 3. Add template-specific components to the template's components/ folder
 * 4. Keep PreviewBackBar at the top
 */
export default function PlaceholderTemplate({
  templateName,
  categoryLabel,
  categoryRoute,
  brandName,
  tagline,
  description,
  primaryColor,
  secondaryColor,
  heroGradient,
  textColor = '#fff',
  services,
  features,
  contact,
  testimonialsLabel = 'What Our Clients Say',
}: PlaceholderTemplateProps) {
  const testimonials = [
    { name: 'Priya M.', rating: 5, text: 'Absolutely outstanding service. Exceeded every expectation.' },
    { name: 'Rahul S.', rating: 5, text: 'Professional, friendly, and the results were incredible.' },
    { name: 'Anjali R.', rating: 5, text: 'Highly recommend! Will definitely return and bring friends.' },
  ]

  return (
    <div style={{ background: '#0d0d0d', color: '#f0f0f0', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      <PreviewBackBar templateName={templateName} category={categoryLabel} categoryRoute={categoryRoute} />

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 40, left: 0, right: 0, zIndex: 100,
        padding: '1rem 2rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(13,13,13,0.9)', backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${primaryColor}22`,
      }}>
        <span style={{ fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.02em', color: textColor }}>
          {brandName}
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Services', 'About', 'Gallery', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ color: 'rgba(240,240,240,0.6)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = primaryColor }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,240,240,0.6)' }}
            >
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" style={{
          padding: '0.5rem 1.25rem', background: primaryColor, color: '#fff',
          textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem',
          transition: 'opacity 0.2s',
        }}>
          Get In Touch
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: heroGradient, position: 'relative', overflow: 'hidden', paddingTop: '5rem',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', padding: '2rem', maxWidth: 760, position: 'relative', zIndex: 1 }}
        >
          <p style={{ color: primaryColor, letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 600 }}>
            {categoryLabel}
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            {tagline}
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 540, margin: '0 auto 2.5rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" style={{
              padding: '0.875rem 2.25rem', background: primaryColor, color: '#fff',
              textDecoration: 'none', borderRadius: 10, fontWeight: 700, fontSize: '0.9375rem',
              boxShadow: `0 4px 24px ${primaryColor}55`,
            }}>
              Our Services
            </a>
            <a href="#contact" style={{
              padding: '0.875rem 2.25rem', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', textDecoration: 'none', borderRadius: 10, fontSize: '0.9375rem', fontWeight: 500,
            }}>
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section style={{ padding: '4rem 2rem', background: '#111' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#fff' }}>Our Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.875rem', maxWidth: 1100, margin: '0 auto' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                height: i === 0 ? 260 : 180,
                borderRadius: 12,
                background: i % 2 === 0 ? heroGradient : `linear-gradient(135deg, #1a1a1a, #2a2a2a)`,
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
              }}
            >
              Gallery Image {i + 1}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '5rem 2rem', background: '#0d0d0d' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>What We Offer</h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '3rem' }}>Services tailored to your needs</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: 1100, margin: '0 auto' }}>
          {services.map((service, i) => (
            <motion.div key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                padding: '1.75rem', borderRadius: 16,
                background: '#1a1a1a', border: `1px solid ${primaryColor}22`,
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = primaryColor + '55' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = primaryColor + '22' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: primaryColor + '22', border: `1px solid ${primaryColor}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <CheckCircle size={20} color={primaryColor} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#fff', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.65 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '4rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '2rem' }}>Why Choose Us</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            {features.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <CheckCircle size={16} color={primaryColor} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '5rem 2rem', background: '#0d0d0d' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '3rem' }}>{testimonialsLabel}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: 1100, margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '1.5rem', borderRadius: 16,
                background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.875rem' }}>
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill={primaryColor} color={primaryColor} />)}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>"{t.text}"</p>
              <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.875rem' }}>{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '5rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Get In Touch</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>We're here to help. Reach out anytime.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: <Phone size={16} />, text: contact.phone },
              { icon: <Mail size={16} />, text: contact.email },
              { icon: <MapPin size={16} />, text: contact.address },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}>
                <span style={{ color: primaryColor }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} style={{
            display: 'inline-block', padding: '0.875rem 2.5rem',
            background: primaryColor, color: '#fff', textDecoration: 'none',
            borderRadius: 10, fontWeight: 700, fontSize: '0.9375rem',
            boxShadow: `0 4px 24px ${primaryColor}55`,
          }}>
            Call Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '1.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8125rem' }}>
          © {new Date().getFullYear()} {brandName}. All rights reserved.
          <span style={{ margin: '0 0.5rem', opacity: 0.3 }}>·</span>
          <span style={{ color: primaryColor, opacity: 0.6 }}>Template by PixelNest Studio</span>
        </p>
      </footer>
    </div>
  )
}

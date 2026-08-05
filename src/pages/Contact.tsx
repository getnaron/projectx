import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare, Camera, Share2, Users } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/ContactForm'
import { staggerContainer, fadeInUp } from '@/utils/motion'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email Us',
    value: 'hello@rivixotech.in',
    sub: 'We reply within 4 hours',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call Us',
    value: '+91 00000 00000',
    sub: 'Quick response on phone & WhatsApp',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
  },
]

export default function Contact() {
  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <SectionTitle
            badge="Get In Touch"
            title="Let's Start Your"
            highlight="Project Today"
            subtitle="Ready to transform your online presence? Fill out the form or reach out directly. We typically respond within 4 hours."
          />
        </div>
      </section>

      {/* Main content */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left — info cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <motion.h2 variants={fadeInUp} style={{ fontWeight: 700, fontSize: '1.375rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                Contact Information
              </motion.h2>

              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.125rem 1.25rem',
                    borderRadius: '1rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: info.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500, marginBottom: '0.2rem' }}>
                      {info.label}
                    </p>
                    <p style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '0.9375rem', marginBottom: '0.1rem' }}>
                      {info.value}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{info.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                variants={fadeInUp}
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                }}
              >
                <MessageSquare size={20} />
                Chat on WhatsApp
              </motion.a>

              {/* Social links */}
              <motion.div variants={fadeInUp} style={{ marginTop: '0.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>Follow us</p>
                <div style={{ display: 'flex', gap: '0.625rem' }}>
                  {[
                    { Icon: Camera, href: '#', label: 'Instagram' },
                    { Icon: Share2, href: '#', label: 'Twitter' },
                    { Icon: Users, href: '#', label: 'LinkedIn' },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

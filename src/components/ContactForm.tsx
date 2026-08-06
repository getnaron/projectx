import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Building } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

/**
 * ContactForm — Fully functional client-side contact form.
 * On submit, shows a success state (no backend required for demo).
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required'
    
    // Strict Email Validation
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Indian Phone Number Validation (Optional)
    if (form.phone.trim()) {
      const cleanPhone = form.phone.replace(/[\s-]/g, '')
      if (!/^(?:\+91)?[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number'
      }
    }

    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '5a818e04-ed48-43bd-baee-e7dda6d441fb'

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          company: form.company || 'Not provided',
          service: form.service || 'General Inquiry',
          message: form.message,
          subject: `New Contact Request from ${form.name} — RivixoTech`,
          from_name: 'RivixoTech Website',
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        console.warn('Web3Forms notice:', result.message)
        // Fallback: Open mailto link if Web3Forms key is placeholder
        const mailtoUrl = `mailto:rivixotech@gmail.com?subject=${encodeURIComponent(
          `New Contact Inquiry from ${form.name}`
        )}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nBusiness: ${form.company || 'N/A'}\nService: ${form.service || 'General Inquiry'}\n\nMessage:\n${form.message}`
        )}`
        window.location.href = mailtoUrl
        setSubmitted(true)
      }
    } catch (err) {
      console.error('Failed to send message via Web3Forms:', err)
      const mailtoUrl = `mailto:rivixotech@gmail.com?subject=${encodeURIComponent(
        `New Contact Inquiry from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nBusiness: ${form.company || 'N/A'}\nService: ${form.service || 'General Inquiry'}\n\nMessage:\n${form.message}`
      )}`
      window.location.href = mailtoUrl
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          padding: '3rem',
          borderRadius: '1.5rem',
          background: 'var(--color-surface)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CheckCircle size={32} color="#a5b4fc" />
        </div>
        <h3 style={{ fontWeight: 700, fontSize: '1.375rem', color: 'var(--color-text-primary)' }}>
          Message Sent!
        </h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', maxWidth: 360 }}>
          Thanks for reaching out, {form.name.split(' ')[0]}! We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' }) }}
          style={{
            marginTop: '0.5rem',
            padding: '0.625rem 1.5rem',
            borderRadius: '0.75rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.875rem',
          }}
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.875rem',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-primary)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--color-text-secondary)',
    marginBottom: '0.5rem',
  }

  const errorStyle: React.CSSProperties = {
    color: '#f87171',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      onSubmit={handleSubmit}
      style={{
        padding: '2rem',
        borderRadius: '1.5rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Name & Email row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            <User size={14} /> Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            style={{ ...inputStyle, borderColor: errors.name ? '#f87171' : 'var(--color-border)' }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
            onBlur={e => e.currentTarget.style.borderColor = errors.name ? '#f87171' : 'var(--color-border)'}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            <Mail size={14} /> Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : 'var(--color-border)' }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
            onBlur={e => e.currentTarget.style.borderColor = errors.email ? '#f87171' : 'var(--color-border)'}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>
      </div>

      {/* Phone & Company row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div>
          <label htmlFor="contact-phone" style={labelStyle}>
            <Phone size={14} /> Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210 (Optional)"
            style={{ ...inputStyle, borderColor: errors.phone ? '#f87171' : 'var(--color-border)' }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
            onBlur={e => e.currentTarget.style.borderColor = errors.phone ? '#f87171' : 'var(--color-border)'}
          />
          {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="contact-company" style={labelStyle}>
            <Building size={14} /> Business Name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Business Name"
            style={inputStyle}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
            onBlur={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
          />
        </div>
      </div>

      {/* Service select */}
      <div>
        <label htmlFor="contact-service" style={labelStyle}>
          Service Interested In
        </label>
        <select
          id="contact-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
        >
          <option value="">Select a service…</option>
          <option value="professional">Professional Website — ₹27,999</option>
          <option value="premium">Premium Website — ₹45,999</option>
          <option value="custom">Custom / Enterprise Project</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" style={labelStyle}>
          <MessageSquare size={14} /> Your Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business, what kind of website you need, any specific requirements…"
          rows={5}
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: 120,
            borderColor: errors.message ? '#f87171' : 'var(--color-border)',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
          onBlur={e => e.currentTarget.style.borderColor = errors.message ? '#f87171' : 'var(--color-border)'}
        />
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        id="contact-submit"
        disabled={loading}
        whileHover={loading ? {} : { scale: 1.02, y: -1 }}
        whileTap={loading ? {} : { scale: 0.98 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.875rem',
          borderRadius: '0.875rem',
          background: loading ? 'rgba(99,102,241,0.5)' : 'var(--gradient-primary)',
          border: 'none',
          color: 'white',
          fontWeight: 700,
          fontSize: '1rem',
          cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: loading ? 'none' : '0 4px 16px rgba(99,102,241,0.4)',
          transition: 'all 0.2s ease',
        }}
      >
        {loading ? (
          <>
            <div
              style={{
                width: 18,
                height: 18,
                border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: 'white',
                borderRadius: '50%',
                animation: 'spin 0.7s linear infinite',
              }}
            />
            Sending…
          </>
        ) : (
          <>
            <Send size={17} />
            Send Message
          </>
        )}
      </motion.button>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </motion.form>
  )
}

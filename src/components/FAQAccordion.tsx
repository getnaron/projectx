import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

/**
 * FAQAccordion — Animated accordion for FAQ sections.
 * Single open item at a time.
 */
export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {items.map(item => {
        const isOpen = openId === item.id

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              borderRadius: '1rem',
              border: isOpen ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid var(--color-border)',
              background: isOpen ? 'rgba(99, 102, 241, 0.06)' : 'var(--color-surface)',
              overflow: 'hidden',
              transition: 'border-color 0.3s ease, background 0.3s ease',
            }}
          >
            {/* Question */}
            <button
              id={`faq-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.125rem 1.375rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.5,
                }}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ flexShrink: 0, color: isOpen ? '#a5b4fc' : 'var(--color-text-muted)' }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      padding: '0 1.375rem 1.25rem',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

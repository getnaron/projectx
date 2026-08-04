import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import PricingCard, { type PricingPlan } from '@/components/PricingCard'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import CTA from '@/components/CTA'
import { staggerContainer } from '@/utils/motion'
import { Check, X } from 'lucide-react'

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹19,999',
    description: 'Perfect for local businesses taking their first step online.',
    features: [
      '5-page website',
      'Mobile responsive design',
      'Template-based design',
      'Contact form',
      'Basic SEO setup',
      'Google Analytics',
      '30-day support',
      'Free domain consultation',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹39,999',
    description: 'For growing businesses that need more features and visibility.',
    features: [
      '10-page website',
      'Custom design elements',
      'Advanced SEO optimization',
      'Blog/News section',
      'Google Business Profile setup',
      'Speed optimization',
      'WhatsApp integration',
      '3-month support',
      'Monthly performance report',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹74,999',
    description: 'For established businesses that want the best of everything.',
    features: [
      'Unlimited pages',
      'Fully custom design',
      'Advanced animations',
      'E-commerce ready',
      'CMS integration',
      'Full SEO package',
      'Social media integration',
      'Priority support',
      '6-month maintenance',
      'Quarterly strategy call',
    ],
    cta: 'Let\'s Talk',
    ctaLink: '/contact',
  },
]

// Feature comparison table data
const comparisonFeatures = [
  { name: 'Pages', starter: '5', professional: '10', premium: 'Unlimited' },
  { name: 'Custom Design', starter: false, professional: 'Partial', premium: true },
  { name: 'Mobile Responsive', starter: true, professional: true, premium: true },
  { name: 'SEO Optimization', starter: 'Basic', professional: 'Advanced', premium: 'Full Package' },
  { name: 'Blog/News Section', starter: false, professional: true, premium: true },
  { name: 'E-commerce Ready', starter: false, professional: false, premium: true },
  { name: 'CMS Integration', starter: false, professional: false, premium: true },
  { name: 'Speed Optimization', starter: false, professional: true, premium: true },
  { name: 'Post-Launch Support', starter: '30 days', professional: '3 months', premium: '6 months' },
  { name: 'Monthly Reports', starter: false, professional: true, premium: true },
]

const faqs: FAQItem[] = [
  {
    id: 'p1',
    question: 'Are these one-time payments or subscriptions?',
    answer: 'Our packages are one-time project fees. The only recurring costs would be if you opt into our monthly maintenance plans, or your hosting/domain renewal fees — which are paid directly to the hosting provider.',
  },
  {
    id: 'p2',
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely. You can start with the Starter plan and upgrade to Professional or Premium at any time. We\'ll apply a credit for your original payment toward the new plan.',
  },
  {
    id: 'p3',
    question: 'Do you offer EMI or installment options?',
    answer: 'Yes! For Professional and Premium projects, we accept 50% upfront and 50% on delivery. For larger custom projects, we can discuss a milestone-based payment schedule.',
  },
  {
    id: 'p4',
    question: 'What\'s not included in the package price?',
    answer: 'Domain name (₹800-1,500/year) and hosting (₹3,000-8,000/year) are paid separately and directly to the provider. Stock photos, custom illustrations, and copywriting are also additional if needed.',
  },
  {
    id: 'p5',
    question: 'Do you offer a refund if I\'m not happy?',
    answer: 'We work in stages with approval at each step, so you\'re never surprised. We offer a full refund if you cancel before design work begins. After design approval and development starts, we cannot offer refunds but will work tirelessly to make you happy.',
  },
]

function ComparisonCell({ value }: { value: string | boolean | undefined }) {
  if (value === true) return <Check size={18} color="#22c55e" strokeWidth={2.5} />
  if (value === false) return <X size={18} color="#64748b" strokeWidth={2.5} />
  return <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{value}</span>
}

export default function Pricing() {
  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <SectionTitle
            badge="Transparent Pricing"
            title="Simple, Honest"
            highlight="Pricing"
            subtitle="No hidden fees, no surprises. Choose the plan that fits your business and get started today."
          />
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              alignItems: 'start',
            }}
          >
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} animationDelay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section" style={{ background: 'var(--color-bg-dark-2)' }}>
        <div className="container">
          <SectionTitle
            badge="Compare Plans"
            title="Feature"
            highlight="Comparison"
            subtitle="See exactly what's included in each plan before you decide."
          />
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                background: 'var(--color-surface)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                fontSize: '0.9rem',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--color-bg-dark-3)' }}>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left', color: 'var(--color-text-secondary)', fontWeight: 600, borderBottom: '1px solid var(--color-border)' }}>
                    Feature
                  </th>
                  {plans.map(p => (
                    <th
                      key={p.id}
                      style={{
                        padding: '1rem 1.25rem',
                        textAlign: 'center',
                        color: p.highlighted ? '#a5b4fc' : 'var(--color-text-primary)',
                        fontWeight: 700,
                        borderBottom: '1px solid var(--color-border)',
                        minWidth: 120,
                      }}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={feature.name}
                    style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}
                  >
                    <td style={{ padding: '0.875rem 1.25rem', color: 'var(--color-text-secondary)', borderBottom: i < comparisonFeatures.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      {feature.name}
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem', textAlign: 'center', borderBottom: i < comparisonFeatures.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ComparisonCell value={feature.starter} />
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem', textAlign: 'center', background: 'rgba(99,102,241,0.04)', borderBottom: i < comparisonFeatures.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ComparisonCell value={feature.professional} />
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1.25rem', textAlign: 'center', borderBottom: i < comparisonFeatures.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ComparisonCell value={feature.premium} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <SectionTitle
            badge="Got Questions?"
            title="Pricing"
            highlight="FAQ"
            subtitle="Answers to the most common questions about our pricing."
          />
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTA
        title="Have a Question About"
        highlight="Pricing?"
        subtitle="Every business is unique. Let's chat and find the perfect solution for your budget and goals."
        primaryCta="Talk to Us"
        secondaryCta="View Services"
        secondaryCtaLink="/services"
      />
    </div>
  )
}

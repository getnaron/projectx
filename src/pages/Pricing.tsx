import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import PricingCard, { type PricingPlan } from '@/components/PricingCard'
import FAQAccordion, { type FAQItem } from '@/components/FAQAccordion'
import CTA from '@/components/CTA'
import SEO from '@/components/SEO'
import { staggerContainer } from '@/utils/motion'
import { Check, X } from 'lucide-react'
import { getBreadcrumbSchema, getFAQSchema } from '@/utils/schemaGenerator'

const plans: PricingPlan[] = [

  {
    id: 'professional',
    name: 'Professional',
    price: '₹27,999',
    description: 'For growing businesses that need more features and visibility.',
    features: [
      '5-page website',
      'Mobile responsive design',
      'Template-based design',
      'Contact form',
      'Google Analytics',
      'Speed optimization',
      'WhatsApp integration',
      '30-day support',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹45,999',
    description: 'For established businesses that want the best of everything.',
    features: [
      'Unlimited pages',
      'Fully custom design',
      'Advanced animations',
      'E-commerce ready',
      'CMS integration',
      'Social media integration',
      'Priority support',
      '6-month maintenance',
      'Quarterly strategy call',
    ],
    cta: 'Let\'s Talk',
    ctaLink: '/contact',
    highlighted: true,
    badge: 'Most Popular',
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
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' },
  ])
  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      <SEO
        title="Website Development Pricing & Packages | RivixoTech"
        description="Transparent website development packages starting at ₹27,999. Fast 7-day delivery, 100% source code ownership, SEO optimization, and zero hidden fees."
        canonicalUrl="/pricing"
        keywords="Website Development Pricing, Website Design Packages, Web Development Cost India, Custom Software Development Price, Static Website Package, Responsive Web Application Cost"
        schemas={[breadcrumbSchema, faqSchema]}
      />
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <SectionTitle
            as="h1"
            badge="Transparent Pricing"
            title="Simple, Honest Website Development"
            highlight="Pricing"
            subtitle="No hidden fees, no surprises. Choose the web development or design plan that fits your business goals."
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

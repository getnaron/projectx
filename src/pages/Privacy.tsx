import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import CTA from '@/components/CTA'
import SEO from '@/components/SEO'
import { ShieldCheck, Lock, Eye, FileText, Mail } from 'lucide-react'

export default function Privacy() {
  const lastUpdated = 'August 5, 2026'

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      <SEO
        title="Privacy Policy | RivixoTech"
        description="Privacy Policy for RivixoTech website development and design services."
        canonicalUrl="/privacy"
        robots="index, follow"
      />
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionTitle
            as="h1"
            badge="Legal & Compliance"
            title="Privacy"
            highlight="Policy"
            subtitle={`Last updated: ${lastUpdated}. At RivixoTech, we are committed to protecting your privacy and safeguarding your business data.`}
            align="left"
          />
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div
            style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '1.25rem',
              padding: '3rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              fontSize: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <ShieldCheck size={28} color="#38bdf8" />
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                  RivixoTech Privacy Commitment
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Transparent data handling practices for clients, visitors, and partners.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                1. Information We Collect
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We collect personal and business information when you interact with our website, request a consultation, or engage RivixoTech for web design and development services:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Identity & Contact Data:</strong> Your name, business name, email address, phone number, and physical billing address.</li>
                <li><strong>Project & Assets Data:</strong> Content, logos, brand guidelines, images, and text supplied to us for project execution.</li>
                <li><strong>Technical & Analytics Data:</strong> IP addresses, browser types, device specifications, and page navigation metrics collected automatically via cookies and privacy-preserving analytics.</li>
                <li><strong>Payment Information:</strong> Billing records and transaction confirmations (payment details are processed securely via PCI-DSS compliant third-party gateways; RivixoTech never stores full card credentials).</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                2. How We Use Your Information
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Your data is strictly utilized to deliver high-quality web design and digital services. Specifically, we use information for:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Designing, developing, hosting, and maintaining your custom websites.</li>
                <li>Communicating project updates, design revisions, invoices, and support tickets.</li>
                <li>Fulfilling legal obligations, issuing tax invoices, and preventing fraudulent activities.</li>
                <li>Improving our agency services, template functionality, and website user experience.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                3. Disclosure & Data Sharing
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                <strong>We never sell, rent, or trade your personal or business data to third-party marketers.</strong> We only share information with trusted third-party service providers essential for delivering your web services:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Infrastructure & Hosting Providers:</strong> Vercel, AWS, Cloudflare, or your designated domain/hosting provider.</li>
                <li><strong>Communication & CRM Tools:</strong> Secure email routing, WhatsApp API, and project management software used solely for client servicing.</li>
                <li><strong>Legal Compliance:</strong> When required by applicable law, court orders, or government regulations under Indian jurisdiction (Information Technology Act, 2000).</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                4. Data Security & Confidentiality
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We employ industry-standard administrative, physical, and technical safeguards (SSL/TLS encryption, restricted access controls, secure server protocols) to protect your assets against unauthorized access, loss, or alteration. All client credentials and project assets are kept strictly confidential.
              </p>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                5. Cookies & Tracking Technologies
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Our website uses minimal, necessary cookies to save your user preferences (such as light/dark mode theme selection) and analyze site performance. You may disable cookies in your browser settings, though certain interactive features may experience limited functionality.
              </p>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                6. Your Rights & Data Control
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                You have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your personal records (subject to statutory financial recordkeeping requirements).
              </p>
            </div>

            {/* Section 7 */}
            <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark-2)', borderRadius: '0.75rem', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} color="#38bdf8" /> Contact Privacy Officer
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                For any privacy concerns, data requests, or compliance inquiries, please email our team at <strong>privacy@rivixotech.in</strong> or contact us via our official support channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import CTA from '@/components/CTA'
import { FileText, ShieldAlert, CheckCircle2, Scale, AlertCircle } from 'lucide-react'

export default function Terms() {
  const lastUpdated = 'August 5, 2026'

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionTitle
            badge="Legal Agreement"
            title="Terms of"
            highlight="Service"
            subtitle={`Last updated: ${lastUpdated}. Please read these terms carefully before engaging PixelNest Studio for web design, development, or digital services.`}
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
              <Scale size={28} color="#38bdf8" />
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                  Master Client Services Agreement
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Governing all website design, custom software development, and digital solutions provided by PixelNest Studio.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                1. Acceptance of Terms & Scope of Services
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                By commissioning PixelNest Studio ("Agency", "we", "us") for website design, template customization, or development services, or by accessing our website, the client ("Client", "you") agrees to be bound by these Terms of Service.
              </p>
              <p>
                The scope of work for each project shall be defined in the project quotation, proposal, or selected pricing package (Professional or Premium). Any additional feature requests, scope changes, or out-of-scope revisions will be billed separately.
              </p>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                2. Intellectual Property Rights & Ownership
              </h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Client Materials:</strong> The Client retains full ownership of all copy, logos, graphics, and proprietary media supplied to the Agency for project integration.</li>
                <li><strong>Final Website Ownership:</strong> Upon full and final settlement of all project invoices, full ownership rights to the final compiled code, visual design, and website assets generated specifically for the Client shall transfer to the Client.</li>
                <li><strong>Agency Frameworks & Tools:</strong> PixelNest Studio retains ownership of pre-existing core boilerplate code, reusable component libraries, build scripts, and developer tools incorporated into the final build. The Client receives a perpetual, non-exclusive license to utilize these components within the project.</li>
                <li><strong>Portfolio Showcase:</strong> PixelNest Studio reserves the right to showcase completed client websites in our portfolio, case studies, and marketing materials unless a formal Non-Disclosure Agreement (NDA) is executed prior to project kickoff.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                3. Payment Terms, Revisions & Refund Policy
              </h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Payment Milestones:</strong> Standard payment structure requires a 50% upfront deposit prior to design initiation, and the remaining 50% balance upon final staging approval prior to domain deployment and codebase handover.</li>
                <li><strong>Revisions:</strong> Projects include up to 2 rounds of structured design revisions at the mockup stage. Revisions requested after final design sign-off or after code deployment will be charged at our standard hourly rate.</li>
                <li><strong>Refund Policy:</strong> A 100% refund of the deposit is available if cancellation is requested in writing before design work begins. Once design work has commenced or mockups are delivered, deposits become non-refundable to cover labor and resources expended.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                4. Client Obligations & Timelines
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Project delivery timelines (e.g. 7-day or 14-day launch guarantees) are contingent upon prompt client cooperation. The Client agrees to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Provide necessary text, high-resolution media, domain credentials, and branding assets within agreed timelines.</li>
                <li>Deliver consolidated, written feedback within 3 business days of receiving design previews.</li>
                <li>Ensure all client-provided content does not infringe upon third-party copyrights or trademarks.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                5. Third-Party Services, Hosting & Domain Disclaimer
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                PixelNest Studio is not responsible for outages, service interruptions, price changes, or data loss caused by third-party hosting providers (e.g. AWS, Vercel, Hostinger), domain registrars, payment gateways, or third-party APIs (e.g. Google Maps API, WhatsApp Business API). Clients are responsible for maintaining their own annual domain and hosting renewals directly with providers.
              </p>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                6. Limitation of Liability & Warranty Disclaimer
              </h3>
              <div style={{ padding: '1.25rem', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#f87171', margin: 0, fontWeight: 500 }}>
                  To the maximum extent permitted by law, PixelNest Studio shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, loss of business revenue, or data loss arising from website downtime, third-party cyber attacks, or client misuse of the site. Total liability under any circumstances shall not exceed the fees paid by the Client to the Agency for the specific project.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                7. Governing Law & Dispute Resolution
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
              </p>
            </div>

            {/* Contact Box */}
            <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark-2)', borderRadius: '0.75rem', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={18} color="#38bdf8" /> Inquiries Regarding Terms
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                If you have any questions or require custom NDA terms prior to initiating a project, please reach out to us at <strong>legal@pixelnest.studio</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}

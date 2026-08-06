import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import TemplateCard from '@/components/TemplateCard'
import SEO from '@/components/SEO'
import CTA from '@/components/CTA'
import { getTemplatesByCategory, getCategoryById } from '@/data/templates'
import { staggerContainer } from '@/utils/motion'
import { getBreadcrumbSchema, getTemplateProductSchema } from '@/utils/schemaGenerator'

/**
 * TemplateCategory — Dynamically renders all templates for a given category.
 * Route: /templates/:category
 */
export default function TemplateCategory() {
  const { category } = useParams<{ category: string }>()
  const categoryData = getCategoryById(category ?? '')
  const categoryTemplates = getTemplatesByCategory(category ?? '')

  if (!categoryData) {
    return (
      <div style={{ paddingTop: '8rem', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', fontWeight: 700 }}>Category not found</h2>
          <Link to="/templates" style={{ color: '#a5b4fc', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>
            ← Back to Templates
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Templates', url: '/templates' },
    { name: categoryData.label, url: `/templates/${categoryData.id}` },
  ])

  const productSchemas = categoryTemplates.map(t =>
    getTemplateProductSchema(t.title, t.description, categoryData.label, t.route)
  )

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      <SEO
        title={`${categoryData.label} Website Templates & Web Design | RivixoTech`}
        description={`Explore high-converting, responsive ${categoryData.label.toLowerCase()} website templates by RivixoTech. Delivered live in 7 days.`}
        canonicalUrl={`/templates/${categoryData.id}`}
        keywords={`${categoryData.label} Website Template, ${categoryData.label} Web Design, ${categoryData.label} Website Development`}
        schemas={[breadcrumbSchema, ...productSchemas]}
      />
      {/* Header */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            <Link to="/templates" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowLeft size={14} />
              Templates
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-text-secondary)' }}>{categoryData.label}</span>
          </div>

          <SectionTitle
            as="h1"
            badge={`${categoryTemplates.length} Templates`}
            title={`${categoryData.label}`}
            highlight="Websites"
            subtitle={categoryData.description}
            align="left"
          />

          {/* Template grid */}
          {categoryTemplates.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {categoryTemplates.map((template, i) => (
                <TemplateCard key={template.id} template={template} animationDelay={i * 0.08} />
              ))}
            </motion.div>
          ) : (
            <div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              <p>No templates available yet. Coming soon!</p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, LayoutGrid } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import TemplateCard from '@/components/TemplateCard'
import CTA from '@/components/CTA'
import SEO from '@/components/SEO'
import { templates, industryCategories } from '@/data/templates'
import { staggerContainer } from '@/utils/motion'
import { getBreadcrumbSchema } from '@/utils/schemaGenerator'

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Templates', url: '/templates' },
  ])

  // Filter templates
  const filteredTemplates = templates.filter(t => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory
    const q = searchQuery.toLowerCase()
    const matchesSearch = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.tags.some(tag => tag.toLowerCase().includes(q))
    return matchesCategory && matchesSearch
  })

  const allCategories = [
    { id: 'all', label: 'All Templates' },
    ...industryCategories.map(c => ({ id: c.id, label: c.label })),
  ]

  return (
    <div className="page-transition" style={{ paddingTop: '6rem' }}>
      <SEO
        title="Website Templates & Industry Designs | RivixoTech"
        description="Browse premium website templates for clinics, gyms, salons, hotels, auditoriums, and small businesses engineered by RivixoTech."
        canonicalUrl="/templates"
        schemas={[breadcrumbSchema]}
      />
      {/* Header */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <SectionTitle
            badge="Template Library"
            title="Browse All"
            highlight="Templates"
            subtitle={`${templates.length} stunning website templates across 7 industries. Click any template to see a full live preview.`}
          />

          {/* Search */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-text-muted)',
                  pointerEvents: 'none',
                }}
              />
              <input
                id="template-search"
                type="text"
                placeholder="Search templates…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  borderRadius: '0.875rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              />
            </div>
          </div>

          {/* Category tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {allCategories.map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-${cat.id}`}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'transparent' : 'var(--color-border)',
                  background: activeCategory === cat.id ? 'var(--gradient-primary)' : 'var(--color-surface)',
                  color: activeCategory === cat.id ? 'white' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Results count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <LayoutGrid size={16} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {/* Grid */}
          {filteredTemplates.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredTemplates.map((template, i) => (
                <TemplateCard key={template.id} template={template} animationDelay={i * 0.05} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '5rem 0',
                color: 'var(--color-text-muted)',
              }}
            >
              <Filter size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
              <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>No templates found</p>
              <p style={{ fontSize: '0.9rem' }}>Try adjusting your search or filter</p>
            </motion.div>
          )}
        </div>
      </section>

      <CTA
        title="Don't See What You Need?"
        highlight="Let's Build Custom."
        subtitle="Can't find the perfect template? We build fully custom websites tailored exactly to your brand and business needs."
        primaryCta="Request Custom Design"
        secondaryCta="View All Industries"
        secondaryCtaLink="/templates"
      />
    </div>
  )
}

import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function PhotographyPortfolioTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Photography Portfolio"
      categoryLabel="Photographers"
      categoryRoute="/templates/photographers"
      brandName="Lens & Light"
      tagline="Every Frame Tells a Story"
      description="Lens & Light is the portfolio of a seasoned visual storyteller with 12+ years of experience capturing authentic moments across portraiture, commercial photography, and street documentary work."
      primaryColor="#f0f0f0"
      secondaryColor="#555555"
      heroGradient="linear-gradient(135deg, #0f0f0f 0%, #2d2d2d 100%)"
      services={[
        { title: 'Portrait Photography', description: 'Emotive, beautifully lit portrait sessions for individuals, families, and professionals.' },
        { title: 'Commercial Shoots', description: 'High-impact commercial photography for brands, products, advertising, and editorial use.' },
        { title: 'Street Photography', description: 'Raw, candid street photography prints and projects documenting the beauty of everyday life.' },
        { title: 'Photo Editing', description: 'Professional photo retouching and editing services with a consistent, signature aesthetic.' },
      ]}
      features={['12+ years experience', '1000+ happy clients', 'RAW files included', 'Fast 7-day delivery']}
      contact={{ phone: '+91 98765 43210', email: 'hello@lensandlight.com', address: 'Mumbai, Maharashtra' }}
    />
  )
}

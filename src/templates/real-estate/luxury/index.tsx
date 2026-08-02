import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function LuxuryRealEstateTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Luxury Real Estate"
      categoryLabel="Real Estate"
      categoryRoute="/templates/real-estate"
      brandName="Prestige Properties"
      tagline="Find Your Exceptional Home"
      description="Prestige Properties is India's premier luxury real estate agency, curating an exclusive portfolio of villas, penthouses, and premium apartments. We connect discerning buyers with extraordinary properties."
      primaryColor="#2c3e50"
      secondaryColor="#c9d6ff"
      heroGradient="linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 100%)"
      textColor="#1a2535"
      services={[
        { title: 'Luxury Villas', description: 'Handpicked private villas with premium amenities, architecture, and landscaping.' },
        { title: 'Premium Apartments', description: 'High-rise and low-rise apartments in the most sought-after gated communities.' },
        { title: 'Penthouse Collections', description: 'Exclusive rooftop penthouses with panoramic views and signature interiors.' },
        { title: 'Commercial Properties', description: 'Premium office spaces, retail units, and mixed-use commercial developments.' },
      ]}
      features={[
        'Curated luxury listings',
        'Exclusive off-market properties',
        'End-to-end buying support',
        'Virtual property tours',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'luxury@prestigeproperties.in', address: 'Golf Course Road, Gurgaon' }}
    />
  )
}

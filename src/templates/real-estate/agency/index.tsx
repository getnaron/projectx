import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function PropertyAgencyTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Property Agency"
      categoryLabel="Real Estate"
      categoryRoute="/templates/real-estate"
      brandName="HomeFinder Agency"
      tagline="Your Key to the Right Home"
      description="HomeFinder Agency is a trusted real estate partner with 2000+ verified listings across residential, commercial, and rental properties. Our experienced agents guide you every step of the way."
      primaryColor="#27ae60"
      secondaryColor="#2d5016"
      heroGradient="linear-gradient(135deg, #1a1a2e 0%, #2d5016 100%)"
      services={[
        { title: 'Residential Listings', description: 'Verified apartments, villas, and independent houses for purchase across the city.' },
        { title: 'Commercial Properties', description: 'Office spaces, shops, warehouses, and showrooms for rent or sale.' },
        { title: 'Property Management', description: 'End-to-end rental management including tenant sourcing, rent collection, and maintenance.' },
        { title: 'Rental Assistance', description: 'Quick tenant matching and rental agreement support for hassle-free rentals.' },
      ]}
      features={[
        '2000+ active listings',
        'Verified properties only',
        'Free property valuation',
        'Expert negotiation',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'find@homefinder.in', address: 'Bandra Kurla Complex, Mumbai' }}
    />
  )
}

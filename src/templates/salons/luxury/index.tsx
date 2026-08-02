import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function LuxurySalonTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Luxury Salon"
      categoryLabel="Salons"
      categoryRoute="/templates/salons"
      brandName="Aura Beauty Lounge"
      tagline="Where Beauty Becomes Art"
      description="Aura Beauty Lounge is an award-winning luxury salon offering transformative hair, skin, and nail services using only the finest international products. Pamper yourself in our private, serene suites."
      primaryColor="#c0397b"
      secondaryColor="#4a1045"
      heroGradient="linear-gradient(135deg, #1a0533 0%, #4a1045 100%)"
      services={[
        { title: 'Hair Styling & Color', description: 'From precision cuts to balayage and global color — our stylists are artists at heart.' },
        { title: 'Luxury Facials', description: 'Bespoke facial treatments using La Mer, Environ, and ESPA for radiant, youthful skin.' },
        { title: 'Nail Art Studio', description: 'Creative nail art, gel manicures, pedicures, and nail extensions by specialists.' },
        { title: 'Bridal Packages', description: 'Comprehensive bridal makeover packages for your wedding day and pre-wedding shoots.' },
      ]}
      features={[
        'International brand products',
        'Award-winning stylists',
        'Private luxury suites',
        'Complimentary consultation',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'bookings@aurabeauty.in', address: 'Vittal Mallya Road, Bangalore' }}
    />
  )
}

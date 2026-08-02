import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function BarberShopTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Barber Shop"
      categoryLabel="Salons"
      categoryRoute="/templates/salons"
      brandName="The Sharp Edge"
      tagline="Crafted. Sharp. Confident."
      description="The Sharp Edge is a classic barbershop with a modern soul. Our skilled barbers deliver precision haircuts, hot towel shaves, and expert beard grooming in a relaxed, masculine environment."
      primaryColor="#3498db"
      secondaryColor="#2c3e50"
      heroGradient="linear-gradient(135deg, #2c3e50 0%, #3498db 100%)"
      services={[
        { title: 'Classic Haircut', description: 'Precision cuts tailored to your face shape, lifestyle, and personal style.' },
        { title: 'Hot Towel Shave', description: 'Traditional straight razor shave with hot towel prep for a flawless finish.' },
        { title: 'Beard Grooming', description: 'Beard shaping, trimming, and conditioning treatments for a distinguished look.' },
        { title: 'Color & Treatment', description: 'Hair color, grey coverage, and strengthening treatments for healthy, vibrant hair.' },
      ]}
      features={[
        'Walk-ins welcome',
        'Online booking',
        'Premium grooming products',
        'Relaxing atmosphere',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'cuts@thesharpedge.in', address: 'Sarjapur Road, Bangalore' }}
    />
  )
}

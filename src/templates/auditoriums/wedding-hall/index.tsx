import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function WeddingHallTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Wedding Hall"
      categoryLabel="Auditoriums"
      categoryRoute="/templates/auditoriums"
      brandName="Elysian Grand Hall"
      tagline="Your Perfect Day Begins Here"
      description="Elysian Grand Hall is a breathtaking venue that transforms your wedding vision into an unforgettable reality. With opulent décor, world-class catering, and a dedicated team of planners, every detail is handled with grace."
      primaryColor="#fda085"
      secondaryColor="#f6d365"
      heroGradient="linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
      textColor="#2d1515"
      services={[
        { title: 'Full Wedding Package', description: 'An all-inclusive wedding package covering décor, catering, entertainment, and coordination.' },
        { title: 'Reception Hall', description: 'A grand reception hall accommodating up to 500 guests with premium sound and lighting.' },
        { title: 'Outdoor Garden Ceremony', description: 'A lush, beautifully manicured garden for romantic outdoor ceremonies at sunrise or sunset.' },
        { title: 'Catering Coordination', description: 'In-house catering coordination with multi-cuisine menus tailored to your tastes and traditions.' },
      ]}
      features={['Capacity up to 500 guests', 'In-house catering team', 'Premium AV setup', 'Bridal suite included']}
      contact={{ phone: '+91 98765 43210', email: 'info@elysiangrandhall.com', address: 'Jaipur, Rajasthan' }}
      testimonialsLabel="Stories From Our Couples"
    />
  )
}

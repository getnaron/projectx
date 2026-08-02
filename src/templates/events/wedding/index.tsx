import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function WeddingPlannerTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Wedding Planner"
      categoryLabel="Event Management"
      categoryRoute="/templates/events"
      brandName="Bloom Weddings"
      tagline="Your Dream Wedding, Our Expertise"
      description="Bloom Weddings is a boutique wedding planning studio that has crafted over 150 extraordinary weddings across India and beyond. We handle every detail — from first concept to final farewell — so you can simply enjoy every moment."
      primaryColor="#ace0f9"
      secondaryColor="#fff1eb"
      heroGradient="linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)"
      textColor="#1a2d3a"
      services={[
        { title: 'Full Wedding Planning', description: 'A complete wedding planning service managing every vendor, timeline, and detail from start to finish.' },
        { title: 'Day-of Coordination', description: 'Expert day-of coordination to ensure your wedding day runs smoothly, on time, and stress-free.' },
        { title: 'Venue Selection', description: 'Personalised venue selection assistance across India, including palace hotels, beach resorts, and heritage sites.' },
        { title: 'Floral & Decor', description: 'Breathtaking floral installations and décor concepts that bring your wedding vision to life.' },
      ]}
      features={['150+ weddings planned', 'Pan-India destination weddings', 'Trusted vendor network', 'Stress-free planning']}
      contact={{ phone: '+91 98765 43210', email: 'hello@bloomweddings.com', address: 'Jaipur, Rajasthan' }}
      testimonialsLabel="Happy Couples"
    />
  )
}

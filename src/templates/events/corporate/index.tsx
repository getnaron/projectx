import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function CorporateEventsTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Corporate Events"
      categoryLabel="Event Management"
      categoryRoute="/templates/events"
      brandName="Pinnacle Events Co."
      tagline="Elevating Every Corporate Moment"
      description="Pinnacle Events Co. is India's trusted partner for high-impact corporate events. With 200+ events managed and a pan-India vendor network, we deliver seamless conferences, launches, and celebrations that elevate your brand."
      primaryColor="#4facfe"
      secondaryColor="#243b55"
      heroGradient="linear-gradient(135deg, #141e30 0%, #243b55 100%)"
      services={[
        { title: 'Corporate Conferences', description: 'Full-service conference management from venue selection and AV to speaker coordination and registration.' },
        { title: 'Team Outings', description: 'Fun and engaging team outing experiences designed to boost morale, bonding, and team spirit.' },
        { title: 'Product Launches', description: 'Impactful product launch events that generate buzz, media coverage, and lasting brand impressions.' },
        { title: 'Award Ceremonies', description: 'Prestigious award ceremony management with stunning décor, entertainment, and live production.' },
      ]}
      features={['200+ corporate events managed', 'Dedicated event manager', 'Vendor network across India', 'Virtual & hybrid options']}
      contact={{ phone: '+91 98765 43210', email: 'info@pinnacleeventco.com', address: 'New Delhi, Delhi' }}
    />
  )
}

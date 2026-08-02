import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function PartyHallTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Party Hall"
      categoryLabel="Auditoriums"
      categoryRoute="/templates/auditoriums"
      brandName="Fiesta Event Space"
      tagline="Every Celebration Deserves to Shine"
      description="Fiesta Event Space is the ultimate party destination with vibrant decor, world-class sound systems, and a team that turns every celebration into an unforgettable experience."
      primaryColor="#e74c3c"
      secondaryColor="#8e44ad"
      heroGradient="linear-gradient(135deg, #8e44ad 0%, #e74c3c 100%)"
      services={[
        { title: 'Birthday Parties', description: 'Themed birthday setups with DJ, lighting, and catering packages for all ages.' },
        { title: 'Corporate Events', description: 'Professional event setups for year-end parties, team celebrations, and launches.' },
        { title: 'DJ & Sound', description: 'In-house professional DJ with premium sound system and LED dance floor.' },
        { title: 'Full Decoration Package', description: 'Balloon decor, floral arrangements, themed installations, and photo booths.' },
      ]}
      features={[
        'LED dance floor',
        'Professional DJ booth',
        'Customizable decor',
        'Fully stocked bar',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'hello@fiestaevents.in', address: 'Indiranagar, Bangalore' }}
    />
  )
}

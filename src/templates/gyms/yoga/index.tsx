import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function YogaStudioTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Yoga Studio"
      categoryLabel="Gyms"
      categoryRoute="/templates/gyms"
      brandName="Lotus Flow Studio"
      tagline="Find Your Center"
      description="Lotus Flow Studio is a serene sanctuary for yoga and mindfulness. Our certified instructors guide you through transformative practices in a calm, supportive environment designed to restore balance to your life."
      primaryColor="#b06f7a"
      secondaryColor="#d4a5a5"
      heroGradient="linear-gradient(135deg, #f5e6ca 0%, #d4a5a5 100%)"
      textColor="#3d1a1a"
      services={[
        { title: 'Hatha Yoga', description: 'Traditional yoga classes focusing on alignment, breathing, and foundational postures.' },
        { title: 'Vinyasa Flow', description: 'Dynamic flow classes linking breath and movement for strength and flexibility.' },
        { title: 'Meditation Sessions', description: 'Guided meditation and breathwork sessions to calm the mind and reduce stress.' },
        { title: 'Prenatal Yoga', description: 'Safe, gentle yoga classes specially designed for expectant mothers at all stages.' },
      ]}
      features={[
        'Certified RYT-500 instructors',
        'Beginner-friendly classes',
        'Online & in-person options',
        'Monthly memberships',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'namaste@lotusflow.in', address: 'Malleshwaram, Bangalore' }}
    />
  )
}

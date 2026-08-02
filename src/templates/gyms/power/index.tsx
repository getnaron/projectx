import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function PowerGymTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Power Gym"
      categoryLabel="Gyms"
      categoryRoute="/templates/gyms"
      brandName="IronForge Gym"
      tagline="Build. Grind. Conquer."
      description="IronForge is a premium 10,000 sqft gym equipped with Olympic-grade equipment, certified personal trainers, and the most intense group fitness classes in the city. Your transformation starts here."
      primaryColor="#e74c3c"
      secondaryColor="#434343"
      heroGradient="linear-gradient(135deg, #1c1c1c 0%, #434343 100%)"
      services={[
        { title: 'Personal Training', description: 'One-on-one sessions with certified personal trainers to hit your goals faster.' },
        { title: 'Group Classes', description: 'HIIT, CrossFit, Zumba, and strength classes running 6am to 10pm daily.' },
        { title: 'Powerlifting Zone', description: 'Dedicated Olympic lifting area with competition-grade bars, plates, and platforms.' },
        { title: 'Nutrition Coaching', description: 'Sports nutrition guidance and customized meal plans for athletes and fitness enthusiasts.' },
      ]}
      features={[
        '10,000 sqft facility',
        'Olympic weightlifting platform',
        '50+ machines',
        '24/7 access for members',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'train@ironforgegym.in', address: 'JP Nagar, Bangalore' }}
    />
  )
}

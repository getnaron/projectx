import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function ModernCafeTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Modern Café"
      categoryLabel="Restaurants"
      categoryRoute="/templates/restaurants"
      brandName="Brew & Co."
      tagline="Your Daily Ritual, Elevated"
      description="Brew & Co. is more than a café — it's a lifestyle destination. From hand-crafted single-origin espresso to indulgent all-day breakfasts, every visit is a moment worth savouring."
      primaryColor="#c8a97e"
      secondaryColor="#6b4c30"
      heroGradient="linear-gradient(135deg, #6b4c30 0%, #c8a97e 100%)"
      services={[
        { title: 'Specialty Coffee', description: 'Expertly brewed single-origin coffees, from velvety flat whites to bold pour-overs.' },
        { title: 'All-day Breakfast', description: 'A hearty all-day breakfast menu featuring eggs your way, avocado toast, and fresh granola bowls.' },
        { title: 'Weekend Brunch', description: 'A special weekend brunch spread with cocktails, live music, and extended kitchen hours.' },
        { title: 'Catering', description: 'Professional catering for office meetings, private parties, and community events.' },
      ]}
      features={['Specialty single-origin coffee', 'Artisan pastries daily', 'Cozy work-friendly space', 'Outdoor seating']}
      contact={{ phone: '+91 98765 43210', email: 'info@brewandco.com', address: 'Pune, Maharashtra' }}
    />
  )
}

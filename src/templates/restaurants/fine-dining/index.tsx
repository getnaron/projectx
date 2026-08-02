import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function FineDiningTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Fine Dining"
      categoryLabel="Restaurants"
      categoryRoute="/templates/restaurants"
      brandName="Noir Restaurant"
      tagline="An Evening You Will Never Forget"
      description="Noir Restaurant is an intimate fine-dining destination where culinary artistry meets theatrical ambiance. Our Michelin-trained chefs craft seasonal tasting menus that push the boundaries of modern gastronomy."
      primaryColor="#d4af37"
      secondaryColor="#4a1628"
      heroGradient="linear-gradient(135deg, #1a0a00 0%, #4a1628 100%)"
      services={[
        { title: 'Prix Fixe Tasting Menu', description: 'A seven-course journey through seasonal ingredients, meticulously plated and artfully presented.' },
        { title: 'À La Carte', description: 'A curated à la carte menu for guests who prefer to craft their own culinary narrative.' },
        { title: 'Private Dining Room', description: 'An exclusive private dining room for intimate celebrations, proposals, and business dinners.' },
        { title: 'Wine Pairing', description: 'Expert sommelier-curated wine pairings from our cellar of over 400 international labels.' },
      ]}
      features={['Michelin-trained chefs', 'Curated wine cellar of 400+ labels', 'Private events up to 30 guests', 'Farm-to-table ingredients']}
      contact={{ phone: '+91 98765 43210', email: 'info@noirrestaurant.com', address: 'New Delhi, Delhi' }}
    />
  )
}

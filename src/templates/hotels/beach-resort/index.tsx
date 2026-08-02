import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function BeachResortTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Beach Resort"
      categoryLabel="Hotels"
      categoryRoute="/templates/hotels"
      brandName="Coral Cove Resort"
      tagline="Where Ocean Meets Luxury"
      description="Coral Cove Resort is a paradise nestled along a pristine coastline, offering an unmatched blend of tropical beauty and world-class luxury. Dive into crystal-clear waters and unwind in style."
      primaryColor="#0093E9"
      secondaryColor="#80D0C7"
      heroGradient="linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)"
      services={[
        { title: 'Beachfront Bungalows', description: 'Charming overwater and beachfront bungalows with direct access to soft white sand.' },
        { title: 'Water Sports', description: 'Thrilling water sports including jet skiing, parasailing, kayaking, and surfing.' },
        { title: 'Infinity Pool', description: 'A breathtaking infinity pool that seamlessly merges with the horizon of the ocean.' },
        { title: 'Sunset Dining', description: 'Romantic open-air dining experience with fresh seafood and stunning sunset views.' },
      ]}
      features={['Private beach access', 'Snorkeling & Scuba', 'Tropical cuisine', 'Live entertainment']}
      contact={{ phone: '+91 98765 43210', email: 'info@coralcoveresort.com', address: 'Goa, India' }}
    />
  )
}

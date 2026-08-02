import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function MinimalHotelTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Minimal Hotel"
      categoryLabel="Hotels"
      categoryRoute="/templates/hotels"
      brandName="The Haven Hotel"
      tagline="Simple. Refined. Perfect."
      description="The Haven Hotel offers a sanctuary of understated elegance in the heart of the city. Every detail is thoughtfully curated to provide a calm, clutter-free stay for the discerning traveller."
      primaryColor="#2d3436"
      secondaryColor="#636e72"
      heroGradient="linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"
      textColor="#2d3436"
      services={[
        { title: 'Standard Room', description: 'Comfortable and elegantly appointed rooms with all essential amenities for a restful stay.' },
        { title: 'Deluxe Room', description: 'Spacious deluxe rooms with premium furnishings and stunning city views.' },
        { title: 'Family Suite', description: 'Generously sized suites designed for families, with separate living areas and extra beds.' },
        { title: 'Penthouse', description: 'Our crown jewel — a full-floor penthouse with panoramic views and bespoke butler service.' },
      ]}
      features={['Clean minimalist design', 'Prime location', 'Free Wi-Fi', 'Business centre']}
      contact={{ phone: '+91 98765 43210', email: 'info@thehavenhotel.com', address: 'Mumbai, Maharashtra' }}
    />
  )
}

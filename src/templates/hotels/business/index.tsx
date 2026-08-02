import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function BusinessHotelTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Business Hotel"
      categoryLabel="Hotels"
      categoryRoute="/templates/hotels"
      brandName="Nexus Business Hotel"
      tagline="Your Command Center in the City"
      description="Nexus Business Hotel is engineered for the modern professional — combining seamless connectivity, state-of-the-art conference facilities, and premium comfort to ensure your work trip is your most productive yet."
      primaryColor="#4e4376"
      secondaryColor="#2b5876"
      heroGradient="linear-gradient(135deg, #2b5876 0%, #4e4376 100%)"
      services={[
        { title: 'Executive Rooms', description: 'Smartly designed executive rooms with a dedicated work desk, ergonomic chair, and high-speed internet.' },
        { title: 'Conference Halls', description: 'Fully equipped conference halls accommodating 10 to 500 delegates with full AV support.' },
        { title: 'Co-working Space', description: 'A vibrant co-working lounge available 24/7 for hotel guests with printing and scanning facilities.' },
        { title: 'Airport Transfer', description: 'Punctual, comfortable airport transfers available around the clock upon request.' },
      ]}
      features={['High-speed fiber Wi-Fi', 'State-of-art conference facilities', '24hr room service', 'Corporate rates']}
      contact={{ phone: '+91 98765 43210', email: 'info@nexusbusinesshotel.com', address: 'Bengaluru, Karnataka' }}
    />
  )
}

import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function MountainResortTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Mountain Resort"
      categoryLabel="Hotels"
      categoryRoute="/templates/hotels"
      brandName="Summit Retreat"
      tagline="Above the Clouds. Beyond Ordinary."
      description="Summit Retreat is a luxurious mountain escape offering breathtaking alpine vistas, cozy fireplace suites, and an array of outdoor adventures. Leave the noise of the world behind and reconnect with nature in true style."
      primaryColor="#4286f4"
      secondaryColor="#373b44"
      heroGradient="linear-gradient(135deg, #373b44 0%, #4286f4 100%)"
      services={[
        { title: 'Mountain Chalets', description: 'Rustic yet luxurious chalets with floor-to-ceiling windows framing awe-inspiring mountain panoramas.' },
        { title: 'Trekking Packages', description: 'Guided trekking expeditions for all levels, from gentle nature walks to challenging summit climbs.' },
        { title: 'Campfire Evenings', description: "Enchanting campfire evenings under the stars with storytelling, local music, and s'mores." },
        { title: 'Spa & Wellness', description: 'A serene mountain spa offering Himalayan stone therapies, hot spring baths, and yoga retreats.' },
      ]}
      features={['Breathtaking mountain views', 'Adventure activities', 'Organic farm-to-table dining', 'Fireplace suites']}
      contact={{ phone: '+91 98765 43210', email: 'info@summitretreat.com', address: 'Manali, Himachal Pradesh' }}
    />
  )
}

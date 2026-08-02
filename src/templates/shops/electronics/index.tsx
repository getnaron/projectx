import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function ElectronicsStoreTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Electronics Store"
      categoryLabel="Shops"
      categoryRoute="/templates/shops"
      brandName="TechVault"
      tagline="Tomorrow's Tech, Today"
      description="TechVault is your one-stop destination for the latest smartphones, laptops, smart home devices, and expert repair services. We stock only genuine products with full manufacturer warranty."
      primaryColor="#5f27cd"
      secondaryColor="#302b63"
      heroGradient="linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
      services={[
        { title: 'Smartphones', description: 'Latest models from Apple, Samsung, OnePlus, and more. Trade-in available.' },
        { title: 'Laptops & PCs', description: 'Gaming laptops, workstations, ultrabooks, and desktop builds for every need.' },
        { title: 'Smart Home Devices', description: 'Smart speakers, security cameras, automation hubs, and IoT devices.' },
        { title: 'Repair & Service', description: 'Certified repair center for screen replacements, battery service, and motherboard repairs.' },
      ]}
      features={[
        'Genuine products with warranty',
        'EMI options available',
        'Expert tech support',
        'Free delivery over ₹5000',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'support@techvault.in', address: 'Koramangala, Bangalore' }}
    />
  )
}

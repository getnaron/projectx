import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function FashionShopTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Fashion Boutique"
      categoryLabel="Shops"
      categoryRoute="/templates/shops"
      brandName="Velvet & Co."
      tagline="Wear Your Story"
      description="Velvet & Co. is a luxury boutique curating the finest in contemporary fashion. From designer labels to exclusive in-house collections, every piece is chosen with impeccable taste."
      primaryColor="#8ec5fc"
      secondaryColor="#e0c3fc"
      heroGradient="linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
      textColor="#1a1a2e"
      services={[
        { title: "Women's Collection", description: 'Curated seasonal collections from top designers and exclusive private labels.' },
        { title: "Men's Collection", description: 'Sophisticated menswear from tailored suits to smart casual everyday essentials.' },
        { title: 'Accessories', description: 'Handbags, jewellery, footwear, and scarves to complete every look.' },
        { title: 'Personal Styling', description: 'One-on-one styling sessions with our in-house fashion consultants.' },
      ]}
      features={[
        'Exclusive designer labels',
        'Personal styling consultations',
        'Easy returns',
        'Seasonal lookbooks',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'style@velvetandco.in', address: 'UB City Mall, Bangalore' }}
    />
  )
}

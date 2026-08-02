import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function CoffeeShopTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Coffee Shop"
      categoryLabel="Restaurants"
      categoryRoute="/templates/restaurants"
      brandName="Golden Bean"
      tagline="Warmth in Every Cup"
      description="Golden Bean is a neighbourhood coffee shop built on the love of exceptional coffee. We source our beans directly from small-batch farms and roast them in-house to bring out their truest, most vibrant flavours."
      primaryColor="#c4a35a"
      secondaryColor="#6f4e37"
      heroGradient="linear-gradient(135deg, #6f4e37 0%, #c4a35a 100%)"
      services={[
        { title: 'Espresso Bar', description: 'A full espresso bar with classic and modern preparations crafted by our expert baristas.' },
        { title: 'Cold Brew', description: 'Slow-steeped 24-hour cold brew in original, nitro, and flavoured variants.' },
        { title: 'Seasonal Specials', description: 'Limited-edition seasonal drinks crafted with the freshest ingredients and warming spices.' },
        { title: 'Coffee Subscriptions', description: 'Monthly coffee subscriptions delivering freshly roasted beans directly to your doorstep.' },
      ]}
      features={['Direct-trade beans', 'Expert baristas', 'Loyalty rewards program', 'Seasonal menu refreshes']}
      contact={{ phone: '+91 98765 43210', email: 'info@goldenbean.com', address: 'Bengaluru, Karnataka' }}
    />
  )
}

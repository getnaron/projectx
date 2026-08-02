import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function FastFoodTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Fast Food"
      categoryLabel="Restaurants"
      categoryRoute="/templates/restaurants"
      brandName="Burnout Burgers"
      tagline="Faster. Bigger. Better."
      description="Burnout Burgers serves up seriously stacked burgers made from fresh, never-frozen patties — all delivered to your table or door in record time. Bold flavours, no compromises."
      primaryColor="#f7971e"
      secondaryColor="#ffd200"
      heroGradient="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"
      textColor="#1a1a1a"
      services={[
        { title: 'Signature Burgers', description: 'Our iconic lineup of double-stacked signature burgers, each with a unique flavour identity.' },
        { title: 'Loaded Fries', description: 'Crispy golden fries loaded with toppings — cheese, jalapeños, pulled pork, and more.' },
        { title: 'Milkshakes', description: 'Thick, indulgent milkshakes in 8 classic and seasonal flavours, made fresh to order.' },
        { title: 'Combo Meals', description: 'Value-packed combo meals that pair your favourite burger with fries and a drink.' },
      ]}
      features={['Ready in under 5 minutes', 'Fresh never frozen patties', '12 signature sauces', 'Online ordering & delivery']}
      contact={{ phone: '+91 98765 43210', email: 'info@burnoutburgers.com', address: 'Chennai, Tamil Nadu' }}
    />
  )
}

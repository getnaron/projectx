import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function DesignerPortfolioTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Designer Portfolio"
      categoryLabel="Personal Portfolio"
      categoryRoute="/templates/personal"
      brandName="Meera Designs"
      tagline="Design That Speaks Before You Do"
      description="I'm Meera, a visual designer with 7 years of experience crafting identities, interfaces, and stories for international brands. My work sits at the intersection of strategy and aesthetics — purposeful and beautiful."
      primaryColor="#ff6b81"
      secondaryColor="#fad0c4"
      heroGradient="linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
      textColor="#2d1b1b"
      services={[
        { title: 'Brand Identity', description: 'Comprehensive brand identity design including logos, colour palettes, typography, and brand guidelines.' },
        { title: 'UI/UX Design', description: 'User-centred UI/UX design for web and mobile applications, from wireframes to high-fidelity prototypes.' },
        { title: 'Packaging Design', description: 'Eye-catching, shelf-ready packaging design that communicates your brand story at a glance.' },
        { title: 'Motion Graphics', description: 'Engaging motion graphics and animated brand assets for digital campaigns and social media.' },
      ]}
      features={['7 years of design experience', 'International brand clients', 'Adobe & Figma expert', '100% satisfaction rate']}
      contact={{ phone: '+91 98765 43210', email: 'hello@meeradesigns.com', address: 'Mumbai, Maharashtra' }}
    />
  )
}

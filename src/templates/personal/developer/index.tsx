import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function DeveloperPortfolioTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Developer Portfolio"
      categoryLabel="Personal Portfolio"
      categoryRoute="/templates/personal"
      brandName="Vikram.dev"
      tagline="Building Digital Experiences That Matter"
      description="I'm a full-stack developer with 5 years of professional experience shipping production-grade web applications. I specialize in React, Node.js, and cloud architecture — and I love solving hard problems with elegant solutions."
      primaryColor="#00d2ff"
      secondaryColor="#1a1a2e"
      heroGradient="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)"
      services={[
        { title: 'Full-stack Web Development', description: 'End-to-end web application development from database architecture to polished UI.' },
        { title: 'React & Node.js', description: 'Specialist in React ecosystems and Node.js backends, building scalable, maintainable code.' },
        { title: 'API Development', description: 'Designing and building robust RESTful and GraphQL APIs with comprehensive documentation.' },
        { title: 'Tech Consulting', description: 'Strategic tech consulting for startups and growing businesses making key architectural decisions.' },
      ]}
      features={['5 years of professional experience', '30+ shipped products', 'Open source contributor', 'Available for freelance']}
      contact={{ phone: '+91 98765 43210', email: 'hello@vikram.dev', address: 'Bengaluru, Karnataka' }}
    />
  )
}

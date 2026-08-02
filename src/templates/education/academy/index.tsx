import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function OnlineAcademyTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Online Academy"
      categoryLabel="Education"
      categoryRoute="/templates/education"
      brandName="BrightPath Academy"
      tagline="Learn Without Limits"
      description="BrightPath Academy is a premium online learning platform offering live classes, recorded courses, and 1:1 mentoring in technology, business, design, and creative arts. Join 10,000+ learners transforming their careers."
      primaryColor="#8E54E9"
      secondaryColor="#4776E6"
      heroGradient="linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)"
      services={[
        { title: 'Live Online Classes', description: 'Interactive live sessions with real-time Q&A, breakout rooms, and expert instructors.' },
        { title: 'Recorded Courses', description: 'Self-paced video courses with lifetime access, quizzes, and completion certificates.' },
        { title: '1:1 Mentoring', description: 'Personalized career mentoring sessions with industry professionals.' },
        { title: 'Certificate Programs', description: 'Industry-recognized 3 to 6-month intensive programs for career switchers.' },
      ]}
      features={[
        '50+ expert instructors',
        '10,000+ enrolled students',
        'Industry-recognized certificates',
        'Lifetime course access',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'learn@brightpath.in', address: 'Hyderabad, Telangana' }}
    />
  )
}

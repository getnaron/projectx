import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function TutoringCenterTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Tutoring Center"
      categoryLabel="Education"
      categoryRoute="/templates/education"
      brandName="Spark Tutors"
      tagline="Every Student Can Excel"
      description="Spark Tutors is a warm and results-driven tutoring center helping students from Grade 1 to College achieve their academic goals. Our experienced tutors use proven methods to build confidence and performance."
      primaryColor="#19547b"
      secondaryColor="#ffd89b"
      heroGradient="linear-gradient(135deg, #ffd89b 0%, #19547b 100%)"
      services={[
        { title: 'Math & Science', description: 'Expert tuition in Mathematics, Physics, Chemistry, and Biology for all levels.' },
        { title: 'English & Languages', description: 'English grammar, communication skills, literature, and foreign language classes.' },
        { title: 'Exam Preparation', description: 'Targeted preparation for CBSE, ICSE, State boards, and mid-term exams.' },
        { title: 'Competitive Exams', description: 'JEE, NEET, CET, and other competitive entrance exam coaching.' },
      ]}
      features={[
        'One-on-one & group sessions',
        'Experienced subject experts',
        'Flexible schedules',
        'Free trial class',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'learn@sparktutors.in', address: 'Andheri, Mumbai' }}
    />
  )
}

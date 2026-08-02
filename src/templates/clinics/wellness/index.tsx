import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function WellnessClinicTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Wellness Center"
      categoryLabel="Clinics"
      categoryRoute="/templates/clinics"
      brandName="Serenity Wellness"
      tagline="Heal. Restore. Thrive."
      description="Serenity Wellness takes a holistic approach to health, combining physiotherapy, nutrition, yoga therapy, and mental wellness programs to help you achieve lasting wellbeing."
      primaryColor="#27ae60"
      secondaryColor="#dcedc1"
      heroGradient="linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)"
      textColor="#145a32"
      services={[
        { title: 'Physiotherapy', description: 'Evidence-based rehabilitation for sports injuries, back pain, and post-surgical recovery.' },
        { title: 'Nutrition Counseling', description: 'Personalized diet plans and nutritional guidance from certified dietitians.' },
        { title: 'Yoga Therapy', description: 'Therapeutic yoga sessions tailored to specific health conditions and goals.' },
        { title: 'Mental Wellness', description: 'Counseling, mindfulness training, and stress management from experienced therapists.' },
      ]}
      features={[
        'Holistic approach to health',
        'Certified practitioners',
        'Personalized treatment plans',
        'Home visit available',
      ]}
      contact={{ phone: '+91 98765 43210', email: 'care@serenitywellness.in', address: 'HSR Layout, Bangalore' }}
    />
  )
}

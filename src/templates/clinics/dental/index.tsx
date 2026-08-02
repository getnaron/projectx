import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function DentalClinicTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Dental Clinic"
      categoryLabel="Clinics"
      categoryRoute="/templates/clinics"
      brandName="SmileCraft Dental"
      tagline="Your Perfect Smile Starts Here"
      description="SmileCraft Dental combines advanced dental technology with compassionate care to deliver painless, effective treatments. From routine cleanings to complex restorations, our specialist team handles it all."
      primaryColor="#00acc1"
      secondaryColor="#b2ebf2"
      heroGradient="linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)"
      textColor="#006064"
      services={[
        { title: 'General Dentistry', description: 'Routine checkups, cleanings, fillings, and preventive care for the whole family.' },
        { title: 'Orthodontics', description: 'Traditional braces and clear aligner therapy for children and adults.' },
        { title: 'Teeth Whitening', description: 'Professional in-chair whitening treatments for dramatically brighter smiles.' },
        { title: 'Dental Implants', description: 'Permanent, natural-looking implants to replace missing teeth with confidence.' },
      ]}
      features={[
        'Painless procedures',
        'Latest dental technology',
        'Experienced specialists',
        'Online appointment booking',
      ]}
      contact={{ phone: '+91 80 2345 6789', email: 'hello@smilecraft.in', address: 'Jayanagar, Bangalore' }}
      testimonialsLabel="Patient Reviews"
    />
  )
}

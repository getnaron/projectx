import PlaceholderTemplate from '@/components/PlaceholderTemplate'

export default function WeddingPhotographyTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Wedding Photography"
      categoryLabel="Photographers"
      categoryRoute="/templates/photographers"
      brandName="Forever Frames"
      tagline="Capturing Your Perfect Moments"
      description="Forever Frames specialises in documentary-style wedding photography that captures the genuine emotion, laughter, and love of your day. We tell your story beautifully, without ever asking you to pose."
      primaryColor="#fcb69f"
      secondaryColor="#ffecd2"
      heroGradient="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
      textColor="#3d2b1f"
      services={[
        { title: 'Full-day Wedding Coverage', description: 'Comprehensive full-day coverage from bridal preparations through to the last dance.' },
        { title: 'Pre-wedding Shoot', description: 'Relaxed and romantic pre-wedding shoots at a location meaningful to you as a couple.' },
        { title: 'Album Design', description: 'Heirloom-quality lay-flat album design with premium printing and personalised cover options.' },
        { title: 'Drone Photography', description: 'Stunning aerial drone photography to capture the grand scale and beauty of your venue and day.' },
      ]}
      features={['2 photographers on the day', '500+ edited photos delivered', 'Premium album printing', '30-day turnaround']}
      contact={{ phone: '+91 98765 43210', email: 'info@foreverframes.com', address: 'Delhi, India' }}
      testimonialsLabel="From Our Couples"
    />
  )
}

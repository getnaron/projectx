import PlaceholderTemplate from '@/components/PlaceholderTemplate'
export default function ConventionCenterTemplate() {
  return (
    <PlaceholderTemplate
      templateName="Convention Center"
      categoryLabel="Auditoriums"
      categoryRoute="/templates/auditoriums"
      brandName="Metro Convention Centre"
      tagline="Where Big Ideas Come Together"
      description="Metro Convention Centre is a world-class facility hosting conferences, trade shows, and large-scale corporate events. With state-of-the-art infrastructure and expert event coordinators, every event is executed flawlessly."
      primaryColor="#2a5298"
      secondaryColor="#1e3c72"
      heroGradient="linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
      services={[
        { title: 'Main Auditorium (2000 seats)', description: 'A fully equipped main hall with professional AV, tiered seating, and world-class acoustics.' },
        { title: 'Breakout Rooms', description: 'Modular meeting rooms that can accommodate groups from 10 to 200 attendees.' },
        { title: 'Exhibition Hall', description: 'Massive open floor space for trade shows, exhibitions, and product launches.' },
        { title: 'Virtual Event Setup', description: 'Hybrid event infrastructure with live streaming, virtual attendee management, and recording.' },
      ]}
      features={[
        'Fiber-optic internet throughout',
        'Professional AV & lighting',
        'Dedicated event coordinators',
        'Catering for 2000+',
      ]}
      contact={{ phone: '+91 80 5678 9000', email: 'events@metroconvention.in', address: 'ITPL Road, Whitefield, Bangalore' }}
    />
  )
}

/**
 * templates.ts — Central data file for all PixelNest Studio templates.
 * 
 * TEAM COLLABORATION GUIDE:
 * - Add new templates here by appending to the `templates` array
 * - Each developer owns specific categories (see category sections)
 * - Never modify another dev's template route files
 * - id must be unique and kebab-case
 * - route must match the route registered in App.tsx
 */

// ============================================================
// Types
// ============================================================
export interface Template {
  id: string
  title: string
  category: string           // e.g. "hotels", "restaurants"
  categoryLabel: string      // Display name, e.g. "Hotels"
  description: string
  image: string              // gradient CSS string or URL
  route: string              // e.g. "/templates/hotels/luxury"
  tags: string[]
  featured?: boolean
  accentColor: string        // CSS color for card accent
  badge?: string             // e.g. "New", "Popular"
}

export interface IndustryCategory {
  id: string
  label: string
  icon: string               // Lucide icon name
  description: string
  route: string              // links to /templates/:category
  gradient: string           // CSS gradient for card
  count: number              // number of templates
}

// ============================================================
// Industry Categories
// ============================================================
export const industryCategories: IndustryCategory[] = [
  {
    id: 'hotels',
    label: 'Hotels',
    icon: 'Hotel',
    description: 'Elegant websites for hotels, resorts, and luxury accommodations',
    route: '/templates/hotels',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    count: 5,
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    icon: 'UtensilsCrossed',
    description: 'Mouth-watering designs for cafes, restaurants, and food businesses',
    route: '/templates/restaurants',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    count: 4,
  },
  {
    id: 'auditoriums',
    label: 'Auditoriums',
    icon: 'Building2',
    description: 'Grand venues and event hall websites that impress at every booking',
    route: '/templates/auditoriums',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    count: 3,
  },
  {
    id: 'shops',
    label: 'Shops',
    icon: 'ShoppingBag',
    description: 'Beautiful storefronts for retail businesses and local shops',
    route: '/templates/shops',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    count: 2,
  },
  {
    id: 'clinics',
    label: 'Clinics',
    icon: 'Stethoscope',
    description: 'Professional and trustworthy websites for medical practices',
    route: '/templates/clinics',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    count: 2,
  },
  {
    id: 'gyms',
    label: 'Gyms',
    icon: 'Dumbbell',
    description: 'High-energy fitness center websites that motivate clients',
    route: '/templates/gyms',
    gradient: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)',
    count: 2,
  },
  {
    id: 'salons',
    label: 'Salons',
    icon: 'Scissors',
    description: 'Stylish and glamorous websites for hair and beauty salons',
    route: '/templates/salons',
    gradient: 'linear-gradient(135deg, #fda085 0%, #f6d365 100%)',
    count: 2,
  },
  {
    id: 'photographers',
    label: 'Photographers',
    icon: 'Camera',
    description: 'Portfolio-first websites that let stunning photography shine',
    route: '/templates/photographers',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    count: 2,
  },
  {
    id: 'personal',
    label: 'Personal Portfolio',
    icon: 'User',
    description: 'Clean, modern portfolios for creatives and professionals',
    route: '/templates/personal',
    gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    count: 2,
  },
  {
    id: 'events',
    label: 'Event Management',
    icon: 'CalendarDays',
    description: 'Dynamic event management and planning company websites',
    route: '/templates/events',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    count: 2,
  },
  {
    id: 'education',
    label: 'Education',
    icon: 'GraduationCap',
    description: 'Inspiring education and e-learning websites for institutions',
    route: '/templates/education',
    gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
    count: 2,
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    icon: 'Home',
    description: 'Sophisticated property listing websites for agencies and agents',
    route: '/templates/real-estate',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    count: 2,
  },
]

// ============================================================
// All Templates
// ============================================================
export const templates: Template[] = [
  // --- HOTELS ---
  {
    id: 'luxury-hotel',
    title: 'Luxury Hotel',
    category: 'hotels',
    categoryLabel: 'Hotels',
    description: 'A premium dark-themed hotel website with cinematic hero, room showcases, and elegant booking flow.',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    route: '/templates/hotels/luxury',
    tags: ['Luxury', 'Dark', 'Elegant', 'Premium'],
    featured: true,
    accentColor: '#c9a84c',
    badge: 'Popular',
  },
  {
    id: 'minimal-hotel',
    title: 'Minimal Hotel',
    category: 'hotels',
    categoryLabel: 'Hotels',
    description: 'Clean white-space design with bold typography for a modern boutique hotel experience.',
    image: 'linear-gradient(135deg, #f8f9fa 0%, #dee2e6 100%)',
    route: '/templates/hotels/minimal',
    tags: ['Minimal', 'Clean', 'Modern'],
    accentColor: '#2d3436',
  },
  {
    id: 'beach-resort',
    title: 'Beach Resort',
    category: 'hotels',
    categoryLabel: 'Hotels',
    description: 'Vibrant tropical vibes with ocean-inspired colors and immersive gallery sections.',
    image: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
    route: '/templates/hotels/beach-resort',
    tags: ['Tropical', 'Vibrant', 'Resort'],
    featured: true,
    accentColor: '#0093E9',
    badge: 'New',
  },
  {
    id: 'business-hotel',
    title: 'Business Hotel',
    category: 'hotels',
    categoryLabel: 'Hotels',
    description: 'Corporate-focused design with conference room highlights and professional amenities.',
    image: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
    route: '/templates/hotels/business',
    tags: ['Corporate', 'Professional', 'Business'],
    accentColor: '#4e4376',
  },
  {
    id: 'mountain-resort',
    title: 'Mountain Resort',
    category: 'hotels',
    categoryLabel: 'Hotels',
    description: 'Rugged natural aesthetic with earthy tones showcasing mountain adventures.',
    image: 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
    route: '/templates/hotels/mountain-resort',
    tags: ['Nature', 'Adventure', 'Resort'],
    accentColor: '#4286f4',
  },

  // --- RESTAURANTS ---
  {
    id: 'modern-cafe',
    title: 'Modern Café',
    category: 'restaurants',
    categoryLabel: 'Restaurants',
    description: 'A hip, minimal café website with a clean menu layout and Instagram-worthy aesthetic.',
    image: 'linear-gradient(135deg, #c8a97e 0%, #6b4c30 100%)',
    route: '/templates/restaurants/modern-cafe',
    tags: ['Café', 'Minimal', 'Trendy'],
    featured: true,
    accentColor: '#c8a97e',
    badge: 'Popular',
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    category: 'restaurants',
    categoryLabel: 'Restaurants',
    description: 'Dark, sophisticated template for upscale restaurants with reservation prominence.',
    image: 'linear-gradient(135deg, #1a0a00 0%, #4a1628 100%)',
    route: '/templates/restaurants/fine-dining',
    tags: ['Upscale', 'Dark', 'Elegant'],
    featured: true,
    accentColor: '#d4af37',
  },
  {
    id: 'fast-food',
    title: 'Fast Food',
    category: 'restaurants',
    categoryLabel: 'Restaurants',
    description: 'Bold, energetic design for fast food chains with online ordering integration.',
    image: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    route: '/templates/restaurants/fast-food',
    tags: ['Bold', 'Energetic', 'Modern'],
    accentColor: '#f7971e',
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop',
    category: 'restaurants',
    categoryLabel: 'Restaurants',
    description: 'Warm and cozy coffee shop design with loyalty program section and seasonal menus.',
    image: 'linear-gradient(135deg, #6f4e37 0%, #c4a35a 100%)',
    route: '/templates/restaurants/coffee-shop',
    tags: ['Cozy', 'Warm', 'Coffee'],
    accentColor: '#c4a35a',
  },

  // --- AUDITORIUMS ---
  {
    id: 'wedding-hall',
    title: 'Wedding Hall',
    category: 'auditoriums',
    categoryLabel: 'Auditoriums',
    description: 'Romantic and luxurious venue website perfect for weddings and grand celebrations.',
    image: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    route: '/templates/auditoriums/wedding-hall',
    tags: ['Romantic', 'Elegant', 'Luxury'],
    featured: true,
    accentColor: '#fda085',
  },
  {
    id: 'convention-center',
    title: 'Convention Center',
    category: 'auditoriums',
    categoryLabel: 'Auditoriums',
    description: 'Corporate and professional design for large conventions and business events.',
    image: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    route: '/templates/auditoriums/convention-center',
    tags: ['Corporate', 'Professional', 'Large-scale'],
    accentColor: '#2a5298',
  },
  {
    id: 'party-hall',
    title: 'Party Hall',
    category: 'auditoriums',
    categoryLabel: 'Auditoriums',
    description: 'Fun and vibrant event space website that excites visitors about upcoming events.',
    image: 'linear-gradient(135deg, #8e44ad 0%, #e74c3c 100%)',
    route: '/templates/auditoriums/party-hall',
    tags: ['Fun', 'Vibrant', 'Events'],
    accentColor: '#e74c3c',
  },

  // --- SHOPS ---
  {
    id: 'fashion-shop',
    title: 'Fashion Boutique',
    category: 'shops',
    categoryLabel: 'Shops',
    description: 'High-end fashion boutique showcase with editorial layout and lookbook sections.',
    image: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    route: '/templates/shops/fashion',
    tags: ['Fashion', 'Editorial', 'Luxury'],
    featured: true,
    accentColor: '#8ec5fc',
    badge: 'New',
  },
  {
    id: 'electronics-store',
    title: 'Electronics Store',
    category: 'shops',
    categoryLabel: 'Shops',
    description: 'Modern tech store with sleek dark theme showcasing products and categories.',
    image: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    route: '/templates/shops/electronics',
    tags: ['Tech', 'Modern', 'Dark'],
    accentColor: '#5f27cd',
  },

  // --- CLINICS ---
  {
    id: 'dental-clinic',
    title: 'Dental Clinic',
    category: 'clinics',
    categoryLabel: 'Clinics',
    description: 'Clean and professional dental clinic website with appointment booking emphasis.',
    image: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
    route: '/templates/clinics/dental',
    tags: ['Medical', 'Clean', 'Professional'],
    accentColor: '#00acc1',
  },
  {
    id: 'wellness-clinic',
    title: 'Wellness Center',
    category: 'clinics',
    categoryLabel: 'Clinics',
    description: 'Calming and holistic wellness center website with service and team showcase.',
    image: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)',
    route: '/templates/clinics/wellness',
    tags: ['Wellness', 'Calm', 'Holistic'],
    accentColor: '#27ae60',
  },

  // --- GYMS ---
  {
    id: 'power-gym',
    title: 'Power Gym',
    category: 'gyms',
    categoryLabel: 'Gyms',
    description: 'High-intensity gym website with bold typography, dark tones, and membership plans.',
    image: 'linear-gradient(135deg, #1c1c1c 0%, #434343 100%)',
    route: '/templates/gyms/power',
    tags: ['Bold', 'Dark', 'High-energy'],
    featured: true,
    accentColor: '#e74c3c',
    badge: 'Popular',
  },
  {
    id: 'yoga-studio',
    title: 'Yoga Studio',
    category: 'gyms',
    categoryLabel: 'Gyms',
    description: 'Serene and mindful yoga studio website with class schedules and instructor profiles.',
    image: 'linear-gradient(135deg, #f5e6ca 0%, #d4a5a5 100%)',
    route: '/templates/gyms/yoga',
    tags: ['Zen', 'Minimal', 'Wellness'],
    accentColor: '#b06f7a',
  },

  // --- SALONS ---
  {
    id: 'luxury-salon',
    title: 'Luxury Salon',
    category: 'salons',
    categoryLabel: 'Salons',
    description: 'Glamorous beauty salon website with service menus and before/after galleries.',
    image: 'linear-gradient(135deg, #1a0533 0%, #4a1045 100%)',
    route: '/templates/salons/luxury',
    tags: ['Glamorous', 'Luxury', 'Beauty'],
    accentColor: '#c0397b',
  },
  {
    id: 'barber-shop',
    title: 'Barber Shop',
    category: 'salons',
    categoryLabel: 'Salons',
    description: 'Classic yet modern barbershop website with booking, team, and price list sections.',
    image: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
    route: '/templates/salons/barber',
    tags: ['Classic', 'Modern', 'Men\'s'],
    accentColor: '#3498db',
  },

  // --- PHOTOGRAPHERS ---
  {
    id: 'photography-portfolio',
    title: 'Photography Portfolio',
    category: 'photographers',
    categoryLabel: 'Photographers',
    description: 'Stunning full-screen portfolio showcasing photography work with minimal UI.',
    image: 'linear-gradient(135deg, #0f0f0f 0%, #2d2d2d 100%)',
    route: '/templates/photographers/portfolio',
    tags: ['Portfolio', 'Dark', 'Minimal'],
    featured: true,
    accentColor: '#f0f0f0',
    badge: 'Popular',
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    category: 'photographers',
    categoryLabel: 'Photographers',
    description: 'Romantic wedding photography portfolio with timeline and couple gallery sections.',
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    route: '/templates/photographers/wedding',
    tags: ['Romantic', 'Wedding', 'Gallery'],
    accentColor: '#fcb69f',
  },

  // --- PERSONAL ---
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio',
    category: 'personal',
    categoryLabel: 'Personal Portfolio',
    description: 'Sleek developer portfolio with skills, projects, and terminal-inspired aesthetics.',
    image: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    route: '/templates/personal/developer',
    tags: ['Developer', 'Tech', 'Dark'],
    accentColor: '#00d2ff',
  },
  {
    id: 'designer-portfolio',
    title: 'Designer Portfolio',
    category: 'personal',
    categoryLabel: 'Personal Portfolio',
    description: 'Creative designer portfolio with colorful case studies and process showcases.',
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    route: '/templates/personal/designer',
    tags: ['Creative', 'Colorful', 'Portfolio'],
    accentColor: '#ff6b81',
  },

  // --- EVENTS ---
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    category: 'events',
    categoryLabel: 'Event Management',
    description: 'Professional corporate event management company website with portfolio and inquiry form.',
    image: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
    route: '/templates/events/corporate',
    tags: ['Corporate', 'Professional', 'Events'],
    accentColor: '#4facfe',
  },
  {
    id: 'wedding-events',
    title: 'Wedding Planner',
    category: 'events',
    categoryLabel: 'Event Management',
    description: 'Elegant wedding planning company website with packages and real wedding galleries.',
    image: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
    route: '/templates/events/wedding',
    tags: ['Wedding', 'Romantic', 'Planning'],
    featured: true,
    accentColor: '#ace0f9',
  },

  // --- EDUCATION ---
  {
    id: 'online-academy',
    title: 'Online Academy',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Modern e-learning platform website with course catalog and instructor profiles.',
    image: 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
    route: '/templates/education/academy',
    tags: ['E-learning', 'Modern', 'Digital'],
    accentColor: '#8E54E9',
  },
  {
    id: 'tutoring-center',
    title: 'Tutoring Center',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Friendly and approachable tutoring center website with subject and schedule listings.',
    image: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
    route: '/templates/education/tutoring',
    tags: ['Friendly', 'Education', 'Local'],
    accentColor: '#19547b',
  },

  // --- REAL ESTATE ---
  {
    id: 'luxury-real-estate',
    title: 'Luxury Real Estate',
    category: 'real-estate',
    categoryLabel: 'Real Estate',
    description: 'Premium real estate agency website with high-end property showcases and virtual tours.',
    image: 'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 100%)',
    route: '/templates/real-estate/luxury',
    tags: ['Luxury', 'Premium', 'Property'],
    featured: true,
    accentColor: '#2c3e50',
  },
  {
    id: 'property-agency',
    title: 'Property Agency',
    category: 'real-estate',
    categoryLabel: 'Real Estate',
    description: 'Clean, professional real estate agency site with search filters and listings grid.',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #2d5016 100%)',
    route: '/templates/real-estate/agency',
    tags: ['Agency', 'Professional', 'Listings'],
    accentColor: '#27ae60',
  },
]

// ============================================================
// Helper Functions
// ============================================================

/** Get all templates for a specific category */
export const getTemplatesByCategory = (category: string): Template[] =>
  templates.filter(t => t.category === category)

/** Get all featured templates */
export const getFeaturedTemplates = (): Template[] =>
  templates.filter(t => t.featured)

/** Get a single template by id */
export const getTemplateById = (id: string): Template | undefined =>
  templates.find(t => t.id === id)

/** Get a single template by route */
export const getTemplateByRoute = (route: string): Template | undefined =>
  templates.find(t => t.route === route)

/** Get the industry category by id */
export const getCategoryById = (id: string): IndustryCategory | undefined =>
  industryCategories.find(c => c.id === id)

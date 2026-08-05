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
  image?: string             // optional image path for card background
  count: number              // number of templates
}

// ============================================================
// Industry Categories
// ============================================================
export const industryCategories: IndustryCategory[] = [
  {
    id: 'auditoriums',
    label: 'Auditoriums',
    icon: 'Building2',
    description: 'Grand venues and event hall websites that impress at every booking',
    route: '/templates/auditoriums',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/categories/auditoriums.png',
    count: 1,
  },
  {
    id: 'clinics',
    label: 'Clinics',
    icon: 'Stethoscope',
    description: 'Professional and trustworthy websites for medical practices',
    route: '/templates/clinics',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    image: '/categories/clinics.png',
    count: 2,
  },
  {
    id: 'gyms',
    label: 'Gyms',
    icon: 'Dumbbell',
    description: 'High-energy fitness center websites that motivate clients',
    route: '/templates/gyms',
    gradient: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)',
    image: '/categories/gyms.png',
    count: 2,
  },
  {
    id: 'salons',
    label: 'Salons',
    icon: 'Scissors',
    description: 'Stylish and glamorous websites for hair and beauty salons',
    route: '/templates/salons',
    gradient: 'linear-gradient(135deg, #fda085 0%, #f6d365 100%)',
    image: '/categories/salons.png',
    count: 1,
  },
  {
    id: 'personal',
    label: 'Personal Portfolio',
    icon: 'User',
    description: 'Clean, modern portfolios for creatives and professionals',
    route: '/templates/personal',
    gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    image: '/categories/personal.png',
    count: 2,
  },
  {
    id: 'events',
    label: 'Event Management',
    icon: 'CalendarDays',
    description: 'Dynamic event management and planning company websites',
    route: '/templates/events',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    image: '/categories/events.png',
    count: 2,
  },
  {
    id: 'education',
    label: 'Education',
    icon: 'GraduationCap',
    description: 'Inspiring education and e-learning websites for institutions',
    route: '/templates/education',
    gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
    image: '/categories/education.png',
    count: 2,
  },
]

// ============================================================
// All Templates
// ============================================================
export const templates: Template[] = [
  // --- AUDITORIUMS ---
  {
    id: 'convention-center',
    title: 'Convention Center',
    category: 'auditoriums',
    categoryLabel: 'Auditoriums',
    description: 'Corporate and professional design for large conventions and business events.',
    image: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200) center/cover no-repeat',
    route: '/templates/auditoriums/convention-center',
    tags: ['Corporate', 'Professional', 'Large-scale'],
    accentColor: '#d4af37',
    featured: true,
  },

  // --- CLINICS ---
  {
    id: 'dental-clinic',
    title: 'Dental Works',
    category: 'clinics',
    categoryLabel: 'Clinics',
    description: 'Premium dental clinic website with hero photo, 9 services, doctor team, technology showcase, FAQ, blog, and appointment booking modal.',
    image: 'url(/templates/clinics/dental-hero.png) center/cover no-repeat',
    route: '/templates/clinics/dental',
    tags: ['Medical', 'Premium', 'Appointments'],
    accentColor: '#0F766E',
    featured: true,
  },

  // --- GYMS ---
  {
    id: 'power-gym',
    title: 'Power Gym',
    category: 'gyms',
    categoryLabel: 'Gyms',
    description: 'High-intensity gym website with bold typography, dark tones, and membership plans.',
    image: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200) center/cover no-repeat',
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
    image: 'url(https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1200) center/cover no-repeat',
    route: '/templates/gyms/yoga',
    tags: ['Zen', 'Minimal', 'Wellness'],
    accentColor: '#b06f7a',
  },

  // --- SALONS ---
  {
    id: 'salon',
    title: 'Salon',
    category: 'salons',
    categoryLabel: 'Salons',
    description: 'Luxury hair, beauty, and grooming salon website with service menus, pricing, gallery lightbox, and instant WhatsApp booking.',
    image: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800) center/cover no-repeat',
    route: '/templates/salons/luxury',
    tags: ['Luxury', 'Hair & Beauty', 'Grooming', 'Gold Theme'],
    accentColor: '#d4af37',
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

  // --- EVENTS ---

  {
    id: 'wedding-events',
    title: 'Royal Events',
    category: 'events',
    categoryLabel: 'Event Management',
    description: 'Premium luxury event management company website with portfolio, packages, inquiry form, and WhatsApp booking.',
    image: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800) center/cover no-repeat',
    route: '/templates/events/wedding',
    tags: ['Luxury', 'Events', 'Wedding', 'Gold Theme'],
    featured: true,
    accentColor: '#d4af37',
    badge: 'New',
  },

  // --- EDUCATION ---
  {
    id: 'online-academy',
    title: 'Online Academy',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Modern e-learning platform website with course catalog and instructor profiles.',
    image: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200) center/cover no-repeat',
    route: '/templates/education/academy',
    tags: ['E-learning', 'Modern', 'Digital'],
    accentColor: '#8E54E9',
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

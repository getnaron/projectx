/**
 * clientWorks.ts — Real client websites built by RivixoTech.
 *
 * HOW TO ADD A NEW CLIENT:
 * - Append a new object to the `clientWorks` array
 * - `id`          : unique kebab-case identifier
 * - `name`        : client's business name
 * - `url`         : live website URL (full https:// link)
 * - `industry`    : short industry label (e.g. "Technology", "Salon")
 * - `description` : 1–2 sentence summary of what we built
 * - `gradient`    : CSS gradient used as card thumbnail background
 * - `accentColor` : dominant brand color for accent bar
 * - `tags`        : array of 2–4 short descriptive tags
 * - `featured`    : set true to highlight on home page (keep ≤ 6)
 * - `year`        : year the project was completed
 */

export interface ClientWork {
  id: string
  name: string
  url: string
  industry: string
  description: string
  gradient: string
  accentColor: string
  tags: string[]
  featured?: boolean
  year: string
  image?: string   // optional real screenshot/photo for the card thumbnail
}

export const clientWorks: ClientWork[] = [
  {
    id: 'trevor-technologies',
    name: 'Trevor Technologies',
    url: 'https://trevortechnologies.com/',
    industry: 'Technology',
    description: 'A modern, professional website for a tech company — featuring sleek service pages, case studies, and a compelling brand identity that drives B2B leads.',
    gradient: 'linear-gradient(135deg, #002B57 0%, #0055A5 55%, #00B4D8 100%)',
    accentColor: '#00B4D8',
    image: '/clients/trevor-technologies.png',
    tags: ['Technology', 'B2B', 'Corporate'],
    featured: true,
    year: '2025',
  },
  {
    id: 'rocode-academy',
    name: 'Rocode Academy',
    url: 'https://rocode-zavi.onrender.com/',
    industry: 'Education',
    description: 'A sleek, interactive platform for Python, FastAPI, DBs, & GenAI mentorship by Adhwaith K — featuring track syllabi, live code previews, and direct demo booking.',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #4338CA 100%)',
    accentColor: '#6366F1',
    image: '/clients/rocode-academy.jpg',
    tags: ['Education', 'Mentorship', 'GenAI', 'Python'],
    featured: true,
    year: '2026',
  },
]

/** Return only featured client works */
export const getFeaturedClientWorks = (): ClientWork[] =>
  clientWorks.filter(w => w.featured)

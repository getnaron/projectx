/**
 * schemaGenerator.ts — Generates JSON-LD Structured Data objects for Google Search SEO.
 */

const SITE_URL = 'https://rivixotech.in'
const LOGO_URL = `${SITE_URL}/logo.png`

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'RivixoTech',
  alternateName: ['Rivixo', 'RivixoTech Web Studio', 'RivixoTech Kerala'],
  url: SITE_URL,
  logo: LOGO_URL,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'RivixoTech is a leading website design and development company in Kerala & India, crafting high-performance, conversion-optimized, fast websites for small businesses.',
  telephone: '+919000000000',
  email: 'hello@rivixotech.in',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9312,
    longitude: 76.2673,
  },
  sameAs: [
    'https://twitter.com/rivixotech',
    'https://www.linkedin.com/company/rivixotech',
    'https://www.instagram.com/rivixotech',
    'https://www.facebook.com/rivixotech',
  ],
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'AdministrativeArea', name: 'Kerala' },
    { '@type': 'City', name: 'Kochi' },
    { '@type': 'City', name: 'Trivandrum' },
    { '@type': 'City', name: 'Kozhikode' },
    { '@type': 'City', name: 'Thrissur' },
  ],
  knowsAbout: [
    'Website Development Company',
    'Website Design Company',
    'Web Development Kerala',
    'Website Development India',
    'Dental Clinic Website',
    'Gym Website',
    'Salon Website',
    'Restaurant Website',
    'Static Website Development',
    'Small Business Website Development',
  ],
})

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'RivixoTech',
  description: 'Website Development Company | Web Design Kerala & India',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/templates?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
})

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
  })),
})

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const getServiceSchema = (serviceName: string, description: string, serviceUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  url: serviceUrl.startsWith('http') ? serviceUrl : `${SITE_URL}${serviceUrl}`,
  provider: {
    '@type': 'Organization',
    name: 'RivixoTech',
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
})

export const getTemplateProductSchema = (name: string, description: string, category: string, route: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${name} — Website Template`,
  description: description,
  category: category,
  url: route.startsWith('http') ? route : `${SITE_URL}${route}`,
  brand: {
    '@type': 'Brand',
    name: 'RivixoTech',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '14999',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing`,
  },
})


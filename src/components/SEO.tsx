import { useEffect } from 'react'

export interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  keywords?: string
  robots?: string
  schemas?: object[]
}

const DEFAULT_TITLE = 'RivixoTech — Website Development Company | Web Design Kerala & India'
const DEFAULT_DESCRIPTION = 'RivixoTech (Rivixo) is a leading Website Development Company in Kerala & India. We craft SEO-optimized, high-converting websites for small businesses, clinics, gyms, salons, & restaurants.'
const DEFAULT_KEYWORDS = 'RivixoTech, Rivixo, Website Development Company, Website Design Company, Web Development Kerala, Website Development India, Dental Clinic Website, Gym Website, Salon Website, Restaurant Website, Static Website Development, Small Business Website Development'
const SITE_URL = 'https://rivixotech.in'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = DEFAULT_KEYWORDS,
  robots = 'index, follow',
  schemas = [],
}: SEOProps) {
  const fullCanonical = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${SITE_URL}${canonicalUrl}`
    : SITE_URL

  useEffect(() => {
    // Page Title
    document.title = title

    // Helper to update meta tag
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        if (selector.startsWith('meta[name=')) {
          const name = selector.replace("meta[name='", '').replace("']", '')
          element.setAttribute('name', name)
        } else if (selector.startsWith('meta[property=')) {
          const property = selector.replace("meta[property='", '').replace("']", '')
          element.setAttribute('property', property)
        }
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, value)
    }

    // Standard Meta
    setMetaTag("meta[name='description']", 'content', description)
    setMetaTag("meta[name='keywords']", 'content', keywords)
    setMetaTag("meta[name='robots']", 'content', robots)

    // Open Graph Meta
    setMetaTag("meta[property='og:title']", 'content', title)
    setMetaTag("meta[property='og:description']", 'content', description)
    setMetaTag("meta[property='og:url']", 'content', fullCanonical)
    setMetaTag("meta[property='og:image']", 'content', ogImage)
    setMetaTag("meta[property='og:type']", 'content', ogType)
    setMetaTag("meta[property='og:site_name']", 'content', 'RivixoTech')

    // Twitter Card Meta
    setMetaTag("meta[name='twitter:card']", 'content', twitterCard)
    setMetaTag("meta[name='twitter:title']", 'content', title)
    setMetaTag("meta[name='twitter:description']", 'content', description)
    setMetaTag("meta[name='twitter:image']", 'content', ogImage)

    // Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', fullCanonical)

    // Injection of JSON-LD Schemas
    const schemaScriptIds: string[] = []
    if (schemas && schemas.length > 0) {
      schemas.forEach((schemaObj, index) => {
        const scriptId = `jsonld-schema-${index}`
        schemaScriptIds.push(scriptId)
        let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null
        if (!scriptTag) {
          scriptTag = document.createElement('script')
          scriptTag.id = scriptId
          scriptTag.type = 'application/ld+json'
          document.head.appendChild(scriptTag)
        }
        scriptTag.text = JSON.stringify(schemaObj)
      })
    }

    // Cleanup dynamically injected schema scripts on unmount
    return () => {
      schemaScriptIds.forEach(id => {
        const script = document.getElementById(id)
        if (script) script.remove()
      })
    }
  }, [title, description, fullCanonical, ogImage, ogType, twitterCard, keywords, robots, schemas])

  return null
}

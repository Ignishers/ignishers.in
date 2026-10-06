import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://ignishers.in'
const IMAGE_URL = `${SITE_URL}/images/brand/logo-primary.png`

const setMeta = (selector, key, value, attribute) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

const setLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

const setStructuredData = (data) => {
  let element = document.head.querySelector('script[data-seo-schema]')
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.dataset.seoSchema = 'true'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ignishers',
  url: SITE_URL,
  logo: IMAGE_URL,
  sameAs: [
    'https://github.com/Ignishers',
    'https://www.linkedin.com/company/ignishers/',
    'https://www.instagram.com/ignishers/',
    'https://x.com/ignishers',
    'https://www.facebook.com/profile.php?id=61561587594525',
  ],
}

export default function Seo({
  title,
  description,
  type = 'website',
  image = IMAGE_URL,
  noindex = false,
  schema = organizationSchema,
}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const pageTitle = title || 'Ignishers — Build. Secure. Share.'
    const pageDescription = description || 'Ignishers is an open-source technology and cybersecurity community focused on building, securing, and sharing practical projects, knowledge, and tools.'
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`

    document.title = pageTitle
    setMeta('meta[name="description"]', 'description', pageDescription, 'name')
    setMeta('meta[name="robots"]', 'robots', noindex ? 'noindex, follow' : 'index, follow', 'name')
    setMeta('meta[property="og:type"]', 'og:type', type, 'property')
    setMeta('meta[property="og:title"]', 'og:title', pageTitle, 'property')
    setMeta('meta[property="og:description"]', 'og:description', pageDescription, 'property')
    setMeta('meta[property="og:url"]', 'og:url', canonical, 'property')
    setMeta('meta[property="og:image"]', 'og:image', image, 'property')
    setMeta('meta[property="og:site_name"]', 'og:site_name', 'Ignishers', 'property')
    setMeta('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image', 'name')
    setMeta('meta[name="twitter:title"]', 'twitter:title', pageTitle, 'name')
    setMeta('meta[name="twitter:description"]', 'twitter:description', pageDescription, 'name')
    setMeta('meta[name="twitter:image"]', 'twitter:image', image, 'name')
    setLink('canonical', canonical)
    setStructuredData(schema)
  }, [description, image, noindex, pathname, schema, title, type])

  return null
}

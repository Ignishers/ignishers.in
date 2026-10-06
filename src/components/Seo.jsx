import { useEffect } from 'react'
const set = (sel, key, val, kind) => {
  let el = document.head.querySelector(sel)
  if (!el) { el = document.createElement('meta'); el.setAttribute(kind, key); document.head.appendChild(el) }
  el.setAttribute('content', val)
}
export default function Seo({ title, description }) {
  useEffect(() => {
    const t = title ? `${title} — Ignishers` : 'Ignishers — Build. Secure. Share.'
    const d = description || 'Ignishers is an open-source technology and cybersecurity community.'
    document.title = t
    set('meta[name="description"]', 'description', d, 'name')
    set('meta[property="og:title"]', 'og:title', t, 'property')
    set('meta[property="og:description"]', 'og:description', d, 'property')
    set('meta[property="og:type"]', 'og:type', 'website', 'property')
    set('meta[property="og:image"]', 'og:image', 'https://ignishers.in/images/brand/logo-primary.png', 'property')
    set('meta[property="og:url"]', 'og:url', 'https://ignishers.in' + location.pathname, 'property')
  }, [title, description])
  return null
}

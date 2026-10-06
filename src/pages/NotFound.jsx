import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
export default function NotFound() {
  return (<div className="container page"><Seo title="Page not found — Ignishers" noindex /><div className="empty"><h1 className="h3">404: page not found</h1><p className="muted">The address may be mistyped, or the page has moved.</p><Link className="btn primary" to="/">Go home</Link></div></div>)
}

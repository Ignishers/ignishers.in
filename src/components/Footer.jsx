import { Link } from 'react-router-dom'
import { Ext, icons } from './Ext.jsx'
import { nav } from './Navbar.jsx'
import { socialLinks, GITHUB } from '../data/socialLinks.js'
export default function Footer() {
  return (<footer className="footer"><div className="container foot-grid">
    <div><img src="/images/brand/logo-white.png" alt="Ignishers" height="30" /><p className="muted" style={{ marginTop: 12 }}>Build. Secure. Share.</p></div>
    <nav aria-label="Footer"><h2 className="fh">Navigation</h2>{nav.map(([n, to]) => <Link key={to} to={to}>{n}</Link>)}</nav>
    <div><h2 className="fh">Social</h2>{socialLinks.map(s => { const I = icons[s.key]; return <Ext key={s.key} href={s.url}><I size={15} /> {s.name}</Ext> })}</div>
    <div><h2 className="fh">Resources</h2><Link to="/docs">Documentation</Link><Link to="/contribute">Contributing</Link><Link to="/docs">Security</Link><Ext href={GITHUB}>GitHub organization</Ext></div>
  </div><div className="container copy">© 2026 Ignishers</div></footer>)
}

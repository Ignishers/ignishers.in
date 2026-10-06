import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Github } from 'lucide-react'
import { Ext } from './Ext.jsx'
import { GITHUB } from '../data/socialLinks.js'
export const nav = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Contribute', '/contribute'], ['Community', '/community'], ['Docs', '/docs'], ['Blog', '/blog']]
export default function Navbar() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (<header className="nav"><div className="container nav-in">
    <Link to="/" className="brand" aria-label="Ignishers home">
      <img className="logo-full" src="/images/brand/logo-white.png" alt="Ignishers" height="30" />
      <img className="logo-sym" src="/images/brand/symbol.png" alt="Ignishers" height="30" />
    </Link>
    <nav aria-label="Main" className={'links' + (open ? ' open' : '')} id="menu">
      {nav.map(([n, to]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => 'link' + (isActive ? ' active' : '')}>{n}</NavLink>)}
      <Ext href={GITHUB} className="btn btn-sm mobile-only"><Github size={16} /> GitHub</Ext>
    </nav>
    <Ext href={GITHUB} className="btn btn-sm desk-only"><Github size={16} /> GitHub</Ext>
    <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>)
}

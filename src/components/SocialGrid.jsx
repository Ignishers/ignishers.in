import { Ext, icons } from './Ext.jsx'
import { socialLinks } from '../data/socialLinks.js'
export default function SocialGrid() {
  return <ul className="social">{socialLinks.map(s => { const I = icons[s.key]; return <li key={s.key}><Ext href={s.url} className="card pad social-a"><I size={22} /><span>{s.name}</span></Ext></li> })}</ul>
}

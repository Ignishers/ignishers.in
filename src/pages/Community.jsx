import Seo from '../components/Seo.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import SocialGrid from '../components/SocialGrid.jsx'
import { guidelines, areas } from '../data/content.js'
export default function Community() {
  return (<div className="container page"><Seo title="Community" description="Join the Ignishers community." />
    <SectionHeader as="h1" title="Join Ignishers" text="Follow our official channels, contribute to projects, and share what you learn." />
    <SocialGrid />
    <h2 className="h3" style={{ margin: '44px 0 16px' }}>Ways to participate</h2>
    <ul className="chips big">{areas.map(([t]) => <li key={t}>{t}</li>)}</ul>
    <h2 className="h3" style={{ margin: '44px 0 16px' }}>Community guidelines</h2>
    <div className="grid g3">{guidelines.map(([t, d]) => <div className="card pad" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>)}</div></div>)
}

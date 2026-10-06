import Seo from '../components/Seo.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { Ext } from '../components/Ext.jsx'
import { areas, workflow } from '../data/content.js'
import { GITHUB } from '../data/socialLinks.js'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../data/contact.js'
export default function Contribute() {
  return (<div className="container page"><Seo title="Contribute" description="How to contribute to Ignishers open-source projects." />
    <SectionHeader as="h1" title="How to contribute" text="Contributions are not limited to code. Pick the area that fits your skills, then follow the workflow below." />
    <p><Ext href={GITHUB} className="btn primary">Browse repositories on GitHub</Ext></p>
    <h2 className="h3" style={{ margin: '44px 0 16px' }}>Contribution areas</h2>
    <div className="grid g4">{areas.map(([t, d]) => <div className="card pad" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
    <h2 className="h3" style={{ margin: '44px 0 16px' }}>Contribution workflow</h2>
    <ol className="steps">{workflow.map(([t, d]) => <li key={t}><h3>{t}</h3><p className="muted">{d}</p></li>)}</ol>
    <section className="card pad" style={{ marginTop: 24 }}><h2 className="h3">Have a question?</h2><p className="muted">For contribution and collaboration enquiries, email <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.</p></section></div>)
}

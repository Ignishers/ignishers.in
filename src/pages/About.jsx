import Seo from '../components/Seo.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../data/contact.js'
const blocks = [
  ['Who we are', 'Ignishers is an open-source technology and cybersecurity community. We build software, study security, and share what we learn.'],
  ['What we believe', 'Technology becomes stronger when it is built openly, secured responsibly, and shared with others.'],
  ['What we build', 'Open-source software and developer tools, along with research and learning material. Our project directory lists what we have built, including archived work.'],
  ['Our vision', 'A community where people learn by building, and where security and knowledge are open to everyone.'],
]
const focus = ['Open-source software', 'Cybersecurity', 'Security research', 'Developer tools', 'Technical learning', 'Collaboration', 'Knowledge sharing']
export default function About() {
  return (<div className="container page"><Seo title="About Ignishers — Open Source & Cybersecurity Community" description="Learn about Ignishers, an open-source technology and cybersecurity community focused on building, security, and shared knowledge." />
    <SectionHeader as="h1" title="About Ignishers" text="Open-source technology, cybersecurity, research and learning." />
    <div className="grid g2">{blocks.map(([t, d]) => <section className="card pad" key={t}><h2 className="h3">{t}</h2><p className="muted">{d}</p></section>)}</div>
    <h2 className="h3" style={{ margin: '40px 0 14px' }}>Focus areas</h2>
    <ul className="chips big">{focus.map(f => <li key={f}>{f}</li>)}</ul>
    <section className="card pad" style={{ marginTop: 40 }}><h2 className="h3">Get in touch</h2><p className="muted">For general questions, partnerships, and community enquiries, contact Ignishers at <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.</p></section></div>)
}

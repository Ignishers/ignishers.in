import Seo from '../components/Seo.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { docs } from '../data/content.js'
export default function Docs() {
  return (<div className="container page"><Seo title="Docs" description="Ignishers documentation: getting started, projects and security." />
    <SectionHeader as="h1" title="Documentation" text="The documentation hub is being set up. Pages below are planned and will be published here." />
    <div className="docs"><nav aria-label="Docs sections" className="docs-nav">{docs.map(([s]) => <a key={s} href={`#${s.replace(/\s/g, '-')}`}>{s}</a>)}</nav>
      <div>{docs.map(([s, items]) => <section key={s} id={s.replace(/\s/g, '-')} style={{ marginBottom: 32 }}><h2 className="h3">{s}</h2>
        <div className="grid g2">{items.map(i => <div className="card pad row" key={i}><span>{i}</span><span className="badge">Planned</span></div>)}</div></section>)}</div></div></div>)
}

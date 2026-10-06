import { Link, useParams } from 'react-router-dom'
import { Github, ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { Ext } from '../components/Ext.jsx'
import { StatusBadge } from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
export default function ProjectDetails() {
  const p = projects.find(x => x.slug === useParams().slug)
  if (!p) return (<div className="container page"><Seo title="Project not found — Ignishers" noindex /><div className="empty"><h1 className="h3">Project not found</h1><p className="muted">No project exists at this address.</p><Link className="btn primary" to="/projects">Browse all projects</Link></div></div>)
  const archived = p.status === 'Archived'
  return (<div className="container page"><Seo title={`${p.name} — Ignishers`} description={p.description} />
    <Link to="/projects" className="textlink"><ArrowLeft size={16} /> All projects</Link>
    <div className="detail-head"><div><div className="row gap wrap"><h1>{p.name}</h1><StatusBadge status={p.status} /></div>
      <p className="lead">{p.description}</p><ul className="chips">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul>
      <p style={{ marginTop: 20 }}><Ext href={p.github} className="btn primary"><Github size={16} /> GitHub repository</Ext></p></div>
      <div className="pimg big"><img src={p.image} alt={`${p.name} project artwork`} /></div></div>
    {archived && <div className="notice" role="note"><strong>Archived.</strong> This project has been archived by Ignishers and is no longer under active development.</div>}
    <div className="grid g2"><section className="card pad"><h2 className="h3">Overview</h2><p className="muted">{p.description}</p></section>
      <section className="card pad"><h2 className="h3">Features</h2><ul className="list">{p.features.map(f => <li key={f}>{f}</li>)}</ul></section></div>
    <section className="card pad" style={{ marginTop: 20 }}><h2 className="h3">Contributing</h2>
      <p className="muted">{archived ? 'Because this project is archived, new feature work is not planned. You can still read the source, fork it for your own use, and learn from it.' : 'Contributions are welcome. Read the repository README before opening a pull request.'}</p></section>
  </div>)
}

import { useMemo, useState } from 'react'
import Seo from '../components/Seo.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
const uniq = (a) => [...new Set(a)].sort()
export default function Projects() {
  const [q, setQ] = useState(''), [cat, setCat] = useState(''), [tech, setTech] = useState(''), [st, setSt] = useState('')
  const list = useMemo(() => projects.filter(p =>
    (!cat || p.category === cat) && (!tech || p.technologies.includes(tech)) && (!st || p.status === st) &&
    (!q || (p.name + p.description + p.technologies.join(' ')).toLowerCase().includes(q.toLowerCase()))), [q, cat, tech, st])
  const Sel = ({ label, v, set, opts }) => <label className="field">{label}<select value={v} onChange={e => set(e.target.value)}><option value="">All</option>{opts.map(o => <option key={o}>{o}</option>)}</select></label>
  return (<div className="container page"><Seo title="Projects" description="Projects from the Ignishers open-source portfolio." />
    <SectionHeader as="h1" title="Projects" text="Software from the Ignishers portfolio." />
    <div className="filters">
      <label className="field grow">Search<input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search projects" /></label>
      <Sel label="Category" v={cat} set={setCat} opts={uniq(projects.map(p => p.category))} />
      <Sel label="Technology" v={tech} set={setTech} opts={uniq(projects.flatMap(p => p.technologies))} />
      <Sel label="Status" v={st} set={setSt} opts={uniq(projects.map(p => p.status))} />
    </div>
    <p className="muted small" role="status">{list.length} {list.length === 1 ? 'project' : 'projects'}</p>
    {list.length ? <div className="grid g2">{list.map(p => <ProjectCard key={p.slug} p={p} />)}</div>
      : <div className="empty"><h3>No projects match these filters.</h3><p className="muted">Clear the search or reset the filters.</p></div>}
  </div>)
}

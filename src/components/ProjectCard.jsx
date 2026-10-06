import { Link } from 'react-router-dom'
import { Github } from 'lucide-react'
import { Ext } from './Ext.jsx'
export const StatusBadge = ({ status }) => <span className={'badge ' + status.toLowerCase()}>{status}</span>
export default function ProjectCard({ p }) {
  return (<article className="card project">
    <div className="pimg"><img src={p.image} alt={`${p.name} project artwork`} loading="lazy" /></div>
    <div className="pbody">
      <div className="row"><h3>{p.name}</h3><StatusBadge status={p.status} /></div>
      <p className="muted">{p.description}</p>
      <ul className="chips" aria-label="Technologies">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul>
      <div className="row gap"><Link className="btn btn-sm primary" to={`/projects/${p.slug}`}>View project</Link>
        <Ext className="btn btn-sm" href={p.github}><Github size={15} /> GitHub</Ext></div>
    </div></article>)
}

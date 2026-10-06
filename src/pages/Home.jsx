import { Link } from 'react-router-dom'
import { Github } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { Ext } from '../components/Ext.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SocialGrid from '../components/SocialGrid.jsx'
import BlogCard from '../components/BlogCard.jsx'
import BlogEmpty from '../components/BlogEmpty.jsx'
import { projects } from '../data/projects.js'
import { posts } from '../data/blog.js'
import { focus, areas } from '../data/content.js'
import { GITHUB } from '../data/socialLinks.js'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../data/contact.js'
export default function Home() {
  return (<>
    <Seo />
    <section className="hero"><div className="hero-grid" aria-hidden="true" />
      <div className="container hero-in">
        <h1 className="hero-title"><span>Build.</span><span>Secure.</span><span>Share.</span></h1>
        <div className="hero-side">
          <p className="lead">Ignishers builds and shares open-source software, security knowledge, developer tools, research, and community-driven projects.</p>
          <div className="row gap wrap"><Link to="/projects" className="btn primary">Explore Projects</Link><Link to="/contribute" className="btn">Contribute</Link></div>
          <Ext href={GITHUB} className="textlink"><Github size={16} /> View on GitHub</Ext>
        </div>
      </div></section>
    <section className="section container">
      <SectionHeader title="Technology becomes stronger when it is built openly, secured responsibly, and shared with others." />
      <div className="grid g3">{focus.map(([t, d]) => <div className="card pad" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>)}</div>
    </section>
    <section className="section container"><SectionHeader title="From the project portfolio" />
      <div className="grid g1">{projects.map(p => <ProjectCard key={p.slug} p={p} />)}</div></section>
    <section className="section container"><div className="cta">
      <h2>Build something with us.</h2>
      <p className="lead">Contributions include {areas.map(a => a[0].toLowerCase()).slice(0, 7).join(', ')} and community participation.</p>
      <div className="row gap wrap"><Link to="/contribute" className="btn primary">Start Contributing</Link><a href={CONTACT_MAILTO} className="btn">Contact us at {CONTACT_EMAIL}</a></div></div></section>
    <section className="section container"><SectionHeader title="Community" text="Follow Ignishers and join the conversation on our official channels." /><SocialGrid /></section>
    <section className="section container"><SectionHeader title="Latest articles" />
      {posts.length ? <div className="grid g3">{posts.slice(0, 3).map(p => <BlogCard key={p.slug} post={p} />)}</div> : <BlogEmpty />}
      <p style={{ marginTop: 20 }}><Link to="/blog" className="btn">Explore Blog</Link></p></section>
  </>)
}

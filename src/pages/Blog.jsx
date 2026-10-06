import Seo from '../components/Seo.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import BlogCard from '../components/BlogCard.jsx'
import BlogEmpty from '../components/BlogEmpty.jsx'
import { posts } from '../data/blog.js'
export default function Blog() {
  return (<div className="container page"><Seo title="Blog" description="Articles from the Ignishers community." />
    <SectionHeader as="h1" title="Blog" text="Articles on software, security and learning." />
    {posts.length ? <div className="grid g3">{posts.map(p => <BlogCard key={p.slug} post={p} />)}</div> : <BlogEmpty />}</div>)
}

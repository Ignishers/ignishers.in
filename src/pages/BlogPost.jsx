import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { posts } from '../data/blog.js'
export default function BlogPost() {
  const post = posts.find(p => p.slug === useParams().slug)
  if (!post) return (<div className="container page"><Seo title="Article not found" /><div className="empty"><h1 className="h3">Article not found</h1><p className="muted">This article does not exist.</p><Link className="btn primary" to="/blog">Back to blog</Link></div></div>)
  return (<article className="container page narrow"><Seo title={post.title} description={post.excerpt} />
    <p className="muted small">{post.category} · {post.date} · {post.readTime}</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p className="muted">By {post.author}</p></article>)
}

import { Link } from 'react-router-dom'
export default function BlogCard({ post }) {
  return (<article className="card pad"><p className="muted small">{post.category} · {post.date} · {post.readTime}</p>
    <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="muted">{post.excerpt}</p><p className="small muted">{post.author}</p></article>)
}

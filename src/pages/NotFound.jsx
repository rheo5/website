import { useParams } from 'react-router-dom'
import posts from '../data/posts.jsx'

export default function NotFound() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <div className="prose">Post not found</div>

  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm">{post.date}</p>
      <div>{post.content}</div>
    </article>
  )
}

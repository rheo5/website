import { Link } from 'react-router-dom'
import posts from '../data/posts.jsx'

export default function Post(){
  return (
    <div className="max-w-2xl mx-auto px-12 py-4">
    <div className="w-full text-left flex flex-col gap-6">
      {/* posts */}
      {posts.map(p => (
        <article key={p.slug}>
          <h2 className="font-bold text-xl">
            <Link to={`/writing/${p.slug}`} className="underline">{p.title}</Link>
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">{p.date}</div>
          <div className="prose dark:prose-invert">{p.content}</div>
        </article>
      ))}
    </div>
  </div>
  )
}

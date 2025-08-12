import { Link } from 'react-router-dom'
import posts from '../data/posts.jsx'

export default function Writing(){
  return (
    <div className="max-w-2xl mx-auto px-12 py-4">
    <div className="w-full text-left flex flex-col gap-6">
      <h1 className="font-bold text-xl">writing (coming soon!)</h1>
      {/* <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link to={`/writing/${p.slug}`} className="underline">{p.title}</Link>
            <div className="text-sm text-gray-600 dark:text-gray-400">{p.date}</div>
          </li>
        ))}
      </ul> */}
    </div>
  </div>
  )
}

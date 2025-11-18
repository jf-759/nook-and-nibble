import { Link } from 'react-router-dom'


function PostCard({ post }) {
return (
<Link to={`/posts/${post.id}`} className="block p-4 border rounded shadow">
<h2 className="text-xl font-semibold">{post.title}</h2>
<p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleString()}</p>
<p className="mt-2">Upvotes: {post.upvotes}</p>
</Link>
)
}
export default PostCard
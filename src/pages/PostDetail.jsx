import { useParams, useNavigate, Link } from 'react-router-dom'

function PostDetail({ posts, setPosts }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const post = posts.find(p => p.id === Number(id))

    if (!post) return <p>Post not found.</p>

    const handleUpvote = () => {
        const updated = posts.map(p => p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p)
        setPosts(updated)
    }

    const handleDelete = () => {
        const filtered = posts.filter(p => p.id !== post.id)
        setPosts(filtered)
        navigate('/')
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img src={post.image} className="w-full rounded mb-4" />
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p className="mb-4">{post.content}</p>

            <button onClick={handleUpvote} className="px-4 py-2 bg-green-400 rounded">Upvote ({post.upvotes})</button>

            <div className="mt-4">
                <Link to={`/posts/${post.id}/edit`} className="mr-4 text-blue-500">Edit</Link>
                <button onClick={handleDelete} className="text-red-500">Delete</button>
            </div>
        </div>
    )
}

export default PostDetail
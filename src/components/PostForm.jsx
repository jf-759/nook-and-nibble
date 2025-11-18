import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function PostForm({ posts, setPosts, existingPosts }) {
    const navigate = useNavigate()

    const [title, setTitle] = useState(existingPosts?.title || "")
    const [content, setContent] = useState(existingPosts?.content || "")
    const [image, setImage] = useState(existingPosts?.image || "")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (existingPosts) {
            const updated = posts.map(p => p.id === existingPosts.id ? { ...p, title, content, image } : p)
            setPosts(updated)
            navigate(`/posts/${existingPosts.id}`)
        } else {
            const newPosts = {
                id: Date.now(),
                title,
                content,
                image,
                created_at: new Date().toISOString(),
                upvotes: 0,
                comments: []
            }
            setPosts([...posts, newPosts])
            navigate('/')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-3xl mx-auto space-y-4">
            <input className="w-full p-2 border" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <textarea className="w-full p-2 border" placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
            <input className="w-full p-2 border" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
            <button className="px-4 py-2 bg-blue-400 text-white rounded" type="submit">Save</button>
        </form>
    )
}

export default PostForm
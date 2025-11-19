import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PostForm from "../components/PostForm"
import './EditPost.css'

function EditPost({ posts, setPosts }) { 
    const { id } = useParams()
    const navigate = useNavigate()
    const postToEdit = posts.find((p) => p.id === parseInt(id))

    const [post, setPost] = useState({ ... postToEdit })

    if (!postToEdit) return <p>Post not found.</p>

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedPosts = posts.map((p) => p.id === post.id ? post : p
    )
    setPosts(updatedPosts)
    navigate(`/posts/${post.id}`)
    }

    return (
        <div className="edit-post-page page-container">
            <h2>Edit Post</h2>
            <PostForm
                post={post}
                setPost={setPost}
                handleSubmit={handleSubmit}
                submitText="Save Changes"
            />
        </div>
    )
}

export default EditPost
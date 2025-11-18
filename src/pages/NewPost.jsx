import PostForm from '../components/PostForm'

function NewPost({ posts, setPosts }) {
    return <PostForm posts={posts} setPosts={setPosts} />
}

export default NewPost
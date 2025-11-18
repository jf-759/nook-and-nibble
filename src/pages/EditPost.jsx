import { useParams } from 'react-router-dom'
import PostForm from '../components/PostForm'


function EditPost({ posts, setPosts }) {
const { id } = useParams()
const post = posts.find(p => p.id === Number(id))


return <PostForm posts={posts} setPosts={setPosts} existingPost={post} />
}
export default EditPost
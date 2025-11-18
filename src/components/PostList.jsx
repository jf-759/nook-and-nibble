import PostCard from './PostCard'

function PostList({ posts }) {
    return (
        <div className="mt-6 space-y-4">
            {posts.map(p => <PostCard key={p.id} post={p} />)}
        </div>
    )
}

export default PostList
import PostCard from "./PostCard";
import './PostList.css'

function PostList({ posts }) {
  if (posts.length === 0) {
    return <p className="empty-message">No posts yet…</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

import { Link } from "react-router-dom";
import './PostCard.css'

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <div className="post-card-header">
        <h3 className="post-card-title">{post.title}</h3>
        <span className="post-card-upvotes">❤️ {post.upvotes}</span>
      </div>

      <p className="post-card-date">
        {new Date(post.created_at).toLocaleString()}
      </p>
    </Link>
  );
}

export default PostCard;

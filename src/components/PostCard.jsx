import { Link } from "react-router-dom";
import './PostCard.css';

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="post-card-image"
        />
      )}
      <div className="post-card-info">
        <h3>{post.title}</h3>
        <p>❤️ {post.upvotes}</p>
      </div>
    </Link>
  );
}

export default PostCard;

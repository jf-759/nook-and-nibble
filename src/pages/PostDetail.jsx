import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import './PostDetail.css';

function PostDetail({ posts, setPosts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState("");

  if (!post) return <p>Post not found.</p>;

  const handleUpvote = () => {
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p
    );
    setPosts(updatedPosts);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = { id: post.comments.length + 1, text: commentText };
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, comments: [...p.comments, newComment] } : p
    );
    setPosts(updatedPosts);
    setCommentText("");
  };

  const handleDelete = () => {
    const updatedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(updatedPosts);
    navigate("/");
  };

  return (
    <div className="post-detail page-container">
      <h2 className="post-detail-title">{post.title}</h2>
      
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className="post-detail-image"
        />
      )}

      {post.content && (
        <p className="post-detail-content">{post.content}</p>
      )}

      <div className="post-detail-footer">
        <button className="btn" onClick={handleUpvote}>
          ❤️ Upvote ({post.upvotes})
        </button>

        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Post
        </button>

        <button className="btn" onClick={() => navigate(`/edit/${post.id}`)}>
          Edit Post
        </button>
      </div>

      <div className="post-comments section">
        <h3>Comments</h3>
        <ul>
          {post.comments.map((c) => (
            <li key={c.id}>{c.text}</li>
          ))}
        </ul>

        <form onSubmit={handleComment} className="post-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>

      </div>
    </div>
  );
}

export default PostDetail;

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import './PostDetail.css'

function PostDetail({ posts, setPosts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState("");

  if (!post) return <p>Post not found.</p>;

  const handleUpvote = () => {
    const updated = posts.map((p) =>
      p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p
    );
    setPosts(updated);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commentText) return;
    const newComment = { id: post.comments.length + 1, text: commentText };
    const updated = posts.map((p) =>
      p.id === post.id ? { ...p, comments: [...p.comments, newComment] } : p
    );
    setPosts(updated);
    setCommentText("");
  };

  const handleDelete = () => {
    const updated = posts.filter((p) => p.id !== post.id);
    setPosts(updated);
    navigate("/");
  };

  return (
    <div className="post-detail page-container">
      <h2 className="post-detail-title">{post.title}</h2>
      {post.image && <img src={post.image} alt={post.title} style={{ maxWidth: "100%", borderRadius: "12px" }} />}
      <p className="post-detail-content">{post.content}</p>

      <div className="post-detail-footer">
        <button className="btn" onClick={handleUpvote}>❤️ Upvote ({post.upvotes})</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete Post</button>
        <button className="btn" onClick={() => navigate(`/posts/${post.id}/edit`)}>Edit Post</button>
      </div>

      <div className="post-comments section">
        <h3>Comments</h3>
        <ul>
          {post.comments.map((c) => <li key={c.id}>{c.text}</li>)}
        </ul>

        <form onSubmit={handleComment} className="post-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" className="btn">Add Comment</button>
        </form>
      </div>
    </div>
  );
}

export default PostDetail;

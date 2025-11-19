import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import './PostDetail.css';

function PostDetail({ posts, setPosts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState("");

  if (!post) return <p>Post not found.</p>;

  const handleUpvote = async () => {
    try {
      const { error } = await supabase
        .from("posts")
        .update({ upvotes: post.upvotes + 1 })
        .eq("id", post.id);

      if (error) throw error;

      const updatedPosts = posts.map((p) =>
        p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error upvoting:", error.message);
      alert("Failed to upvote. Please try again.");
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      const newComment = { id: post.comments.length + 1, text: commentText };
      const updatedComments = [...post.comments, newComment];

      const { error } = await supabase
        .from("posts")
        .update({ comments: updatedComments })
        .eq("id", post.id);

      if (error) throw error;

      const updatedPosts = posts.map((p) =>
        p.id === post.id ? { ...p, comments: updatedComments } : p
      );
      setPosts(updatedPosts);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error.message);
      alert("Failed to add comment. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", post.id);

      if (error) throw error;

      const updatedPosts = posts.filter((p) => p.id !== post.id);
      setPosts(updatedPosts);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error.message);
      alert("Failed to delete post. Please try again.");
    }
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
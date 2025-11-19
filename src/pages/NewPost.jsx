import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import PostForm from "../components/PostForm";
import './NewPost.css';

function NewPost({ posts, setPosts }) {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "", image: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            title: post.title,
            content: post.content,
            image: post.image,
            user_id: user.id,
            upvotes: 0,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) throw error;

      console.log("Post saved:", data);
      setPosts([data[0], ...posts]);
      navigate("/");
    } catch (error) {
      console.error("Error saving post:", error.message);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <PostForm
          post={post}
          setPost={setPost}
          handleSubmit={handleSubmit}
          submitText="Create Post"
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}

export default NewPost;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import "./NewPost.css";

function NewPost({ posts, setPosts }) {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: posts.length + 1,
      upvotes: 0,
      created_at: new Date().toISOString(),
      comments: [],
    };

    setPosts([newPost, ...posts]);
    navigate("/");
  };

  return (
    <div className="new-post-page">
      <div className="new-post-container">
        <h1>Create New Post</h1>

        <PostForm
          post={post}
          setPost={setPost}
          handleSubmit={handleSubmit}
          submitText="Create Post"
        />
      </div>
    </div>
  );
}

export default NewPost;

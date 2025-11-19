import './PostForm.css'

function PostForm({ post, setPost, handleSubmit, submitText }) {
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        required
      />

      <label>Content</label>
      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        rows={4}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={post.image}
        onChange={(e) => setPost({ ...post, image: e.target.value })}
      />

      <button type="submit" className="btn">{submitText}</button>
    </form>
  );
}

export default PostForm;

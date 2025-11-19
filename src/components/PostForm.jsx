import './PostForm.css'

function PostForm({ post, setPost, handleSubmit, submitText }) {
  return (
<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={post.title}
    onChange={(e) => setPost({ ...post, title: e.target.value })}
    placeholder="Title"
    required
  />

  <textarea
    value={post.content}
    onChange={(e) => setPost({ ...post, content: e.target.value })}
    placeholder="Content"
  />

  <input
    type="url"
    value={post.image}
    onChange={(e) => setPost({ ...post, image: e.target.value })}
    placeholder="Image URL (optional)"
  />

  <button type="submit">{submitText}</button>
</form>

  );
}

export default PostForm;

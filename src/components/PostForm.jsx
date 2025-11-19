import { useState } from "react";
import { supabase } from "../supabaseClient";

function PostForm({ post, setPost, handleSubmit, submitText, isSubmitting }) {
  const [preview, setPreview] = useState(post.image || "");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("post-images")
      .upload(fileName, file);

    if (uploadError) {
      console.error("Upload error:", uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("post-images")
      .getPublicUrl(fileName);

    const publicUrl = data.publicUrl;
    setPost({ ...post, image: publicUrl }); 
    setPreview(publicUrl);                    
    setUploading(false);
  };

  return (
    <form className="login-container post-form" onSubmit={handleSubmit}>
      <h1>{submitText}</h1>

      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        required
      />

      <textarea
        placeholder="Content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />

      <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading || isSubmitting} />

      {uploading && <p>Uploading image...</p>}

      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ maxWidth: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      )}

      <button type="submit" disabled={uploading || isSubmitting}>
        {uploading ? "Uploading..." : isSubmitting ? "Saving..." : submitText}
      </button>
    </form>
  );
}

export default PostForm;
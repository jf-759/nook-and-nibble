import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { supabase } from "./supabaseClient"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import NewPost from "./pages/NewPost"
import PostDetail from "./pages/PostDetail"
import EditPost from "./pages/EditPost"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

import { initialPosts } from "./data"

function App() {
  const [posts, setPosts] = useState(initialPosts)
  const [ setUser ] = useState(null);

  useEffect(() => {
  const fetchPosts = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        setPosts(initialPosts);
      } else {
        setPosts(data);
      }
    } else {
      setPosts(initialPosts);
    }
  };

  fetchPosts();
}, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
          <Route path="/new" element={<NewPost posts={posts} setPosts={setPosts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />

          <Route path="/edit/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage setUser={setUser} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
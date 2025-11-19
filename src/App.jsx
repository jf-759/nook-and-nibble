import { useState } from "react"
import { Routes, Route } from "react-router-dom"

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

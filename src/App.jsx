import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import PostDetail from './pages/PostDetail'
import EditPost from './pages/EditPost'
import Navbar from './components/Navbar'
import { samplePosts } from './data'

function App() {
  const [posts, setPosts] = useState(samplePosts)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route path="/new" element={<NewPost posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id/edit" element={<EditPost posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  )
}

export default App

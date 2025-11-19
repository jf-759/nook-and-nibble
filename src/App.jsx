import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { supabase } from "./supabaseClient"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import NewPost from "./pages/NewPost"
import PostDetail from "./pages/PostDetail"
import EditPost from "./pages/EditPost"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching posts:", error);
          setPosts([]);
        } else {
          setPosts(data);
        }
      } else {
        setPosts([]);
      }
    };

    fetchPosts();
  }, [user]);

  if (loading) return (
    <div className="app-container">
      <main className="page-container">
        <p>Loading...</p>
      </main>
    </div>
  );

  return (
    <div className="app-container">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {user ? (
            <>
              <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
              <Route path="/new" element={<NewPost posts={posts} setPosts={setPosts} />} />
              <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
              <Route path="/edit/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
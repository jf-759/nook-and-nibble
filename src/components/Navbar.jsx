import { Link, NavLink } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);    
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user: currentUser }, error } = await supabase.auth.getUser();

      if (error) {
        console.error(error);
        return;
      }

      setUser(currentUser);

      if (currentUser) {
        const { data, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", currentUser.id)
          .single();

        if (profileError) console.error(profileError);
        else setProfile(data);
      }
    }

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) setProfile(null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">N&N</Link>

      <div className="navbar-links">
        <NavLink
          to="/new"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          New Post
        </NavLink>

        {!user ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              Sign Up
            </NavLink>
          </>
        ) : (
          <div className="nav-profile">{profile?.username}</div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

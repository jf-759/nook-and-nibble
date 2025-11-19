import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        N&N
      </Link>

      <div className="navbar-links">
        <NavLink
          to="/new"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          New Post
        </NavLink>

        <div className="nav-profile">
          Profile
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

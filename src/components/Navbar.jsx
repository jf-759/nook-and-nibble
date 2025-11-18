import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="p-4 bg-pink-200 flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/new">New Post</Link>
        </nav>
    )
}

export default Navbar
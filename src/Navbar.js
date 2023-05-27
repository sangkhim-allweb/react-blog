import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" className={`${location.pathname == '/' ? 'menu-selected' : ''}`}>
                    Home
                </Link>
                <Link to="/create" className={`${location.pathname == '/create' ? 'menu-selected' : ''}`}>
                    New Blog
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
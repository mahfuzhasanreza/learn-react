import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;
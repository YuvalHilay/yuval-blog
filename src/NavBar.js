import {link} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Yuval Blog</h1>
            <div className="links">
                <Link to="/">home </Link>
                <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#210797',
          borderRadius: '8px' 
        }}>New Blog</Link>
            </div>
        </nav>
      );
}
 
export default NavBar;
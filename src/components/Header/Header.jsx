import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <Link to="/"><h3>Logo</h3></Link>
            <ul className="nav-links">
                <Link to="/gallery">
                    <li> Gallery</li>
                </Link>
                <Link to="/blog">
                    <li>Blog </li>
                </Link>
                <Link to="/">
                    <li>About</li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
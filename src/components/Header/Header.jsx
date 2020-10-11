import './Header.scss'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <ul className="nav-list-elements">
                <Link to="/" className="header-links">
                    <li>
                        <h1 className="header-logo">Sandring Creative Studio</h1>
                    </li>
                </Link>
            </ul>
            <ul className="nav-elements">
                <Link to="/gallery" className="header-links">
                    <li> Gallery</li>
                </Link>
                <Link to="/" className="header-links">
                    <li> Software</li>
                </Link>
                <Link to="/blog" className="header-links">
                    <li>Blog </li>
                </Link>
                <Link to="/" className="header-links">
                    <li>About</li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
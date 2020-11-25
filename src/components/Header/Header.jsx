import './Header.scss'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <header>
            <ul className="nav-list-elements">
                <Link to="/" className="header-links" data-test="header-link">
                    <li>
                        <h1 className="header-logo">Sandring Creative Studio</h1>
                    </li>
                </Link>
            </ul>
            <ul className="nav-elements">
                <Link to="/gallery" className="header-links" data-test="gallery-link">
                    <li> Gallery</li>
                </Link>
                <Link to="/" className="header-links" data-test="software-link">
                    <li> Software</li>
                </Link>
                <Link to="/blog" className="header-links" data-test="blog-link">
                    <li>Blog</li>
                </Link>
                <Link to="/" className="header-links" data-test="about-link">
                    <li>About</li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
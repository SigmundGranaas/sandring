import './Header.scss'
import React from 'react'

const Header = (props) => {
    return(
        <header data-test="header">
            {props.logo}
            {props.headerElements}
        </header>
    );
}
export default Header;


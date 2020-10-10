import React from 'react';
import './header.css';
import HeaderMenu from "../header-menu";

function Header(){
    return (
        <header className="header">
            <HeaderMenu/>
        </header>
    );
}

export default Header;
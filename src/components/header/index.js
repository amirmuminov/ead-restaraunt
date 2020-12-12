import React from 'react';
import './header.css';
import HeaderMenu from "../header-menu";
import Login from "../login";

function Header(){
    return (
        <header className="header">
            <Login/>
            <HeaderMenu/>
        </header>
    );
}

export default Header;
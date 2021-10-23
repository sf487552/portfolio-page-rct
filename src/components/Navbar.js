import React from 'react';

import SidebarToggle from '../components/SidebarToggle';
import './style.css';

const Navbar = props => {
    return (
    <header className="navbar">
        <nav className="nav_options">
            <div>
                <SidebarToggle/>
            </div>
            <div className="nav_logo"><a href="/">Logo</a></div>
            <div className="space"></div>
            <div className="nav_items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;
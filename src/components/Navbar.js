import React from 'react';

import SidebarToggle from '../components/SidebarToggle';
import './style.css';

function navbar(props) {
    return (
        <header className="navbar">
            <nav className="nav_options">
                <div className="nav_toggle-button">
                    <SidebarToggle click={props.sidebarClickHandler} />
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

export default navbar;
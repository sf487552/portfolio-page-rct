import React from 'react';
import SidebarToggle from '../navbar/SidebarToggle';
import '../style.css';
import '../navbar/navbar.css';
import {
    Link
  } from "react-router-dom";

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
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navbar;
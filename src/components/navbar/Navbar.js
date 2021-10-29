import React from 'react';
import SidebarToggle from '../navbar/SidebarToggle';
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
                <div className="nav_logo grow"><a href="/">Steve's Portfolio</a></div>
                <div className="space"></div>
                <div className="nav_items">
                    <ul>
                        <li className="grow"><Link to="/about">About</Link></li>
                        <li className="grow"><Link to="/contact">Contact</Link></li>
                        <li className="grow"><Link to="/projects">Projects</Link></li>
                        <li className="grow"><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navbar;
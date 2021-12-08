import React from 'react';
import SidebarToggle from '../navbar/SidebarToggle';
import '../navbar/navbar.css';
import logo1 from '../images/logo.png';
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
                <img alt="logo1" src={logo1} className="nav_logo grow text-shadow"></img>
                <div className="space"></div>
                <div className="nav_items">
                    <ul>
                        <li className="grow"><Link to="/">Home</Link></li>
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
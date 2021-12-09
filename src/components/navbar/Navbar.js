import React from 'react';
import SidebarToggle from '../navbar/SidebarToggle';
import '../navbar/navbar.css';
import logo1 from '../images/logo.png';
import {
    Link
  } from "react-router-dom";

const ANALYTICS_MAP = {
    "/": "HOME",
    "/about": "ABOUT",
    "/contact": "CONTACT",
    "/projects": "PROJECTS",
    "/resume": "RESUME"
}

const sendNavEvent = (event) => {
    const category = ANALYTICS_MAP[window.location.pathname]
    const action = event.type
    const label = `Nav > ${event.target.innerText} - ${action}`

    window._analytics?.trackEvent({ category, action, label })
    // window._analytics?.trackEvent({ category: window.location.pathname, action})
}

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
                        <li className="grow">
                            <Link to="/" onClick={sendNavEvent}>Home</Link>
                        </li>

                        <li className="grow">
                            <Link to="/about" onClick={sendNavEvent}>About</Link>
                        </li>
                        
                        <li className="grow">
                            <Link to="/contact" onClick={sendNavEvent}>Contact</Link>
                        </li>

                        <li className="grow">
                            <Link to="/projects" onClick={sendNavEvent}>Projects</Link>
                        </li>
                        
                        <li className="grow">
                            <Link to="/resume" onClick={sendNavEvent}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navbar;
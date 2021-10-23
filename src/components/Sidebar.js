import React from 'react';
import './style.css';

const sidebar = props => (
    <nav className="sidebar">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Projects</a>
            </li>
            <li>
                <a href="/">Resume</a>
            </li>
            <li>
                <a href="/">Contact</a>
            </li>
        </ul>
    </nav>
);

export default sidebar;
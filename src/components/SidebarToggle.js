import React from 'react';
import './style.css';

const sidebarToggle= props => (
    <button className="toggleBtn" onClick={props.click}>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
        <div className="toggle-btn-line"/>
    </button>
);

export default sidebarToggle;
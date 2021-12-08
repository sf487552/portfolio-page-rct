import React from 'react';


const sidebar = props => {
  let sidebarClasses = 'side-bar';
  if (props.show) {
    sidebarClasses = 'side-bar open';
  }
  return (
    <nav className={sidebarClasses}>
        <ul>
          <li>
                <a className="grow" href="/">Home</a>
            </li>
            <li>
                <a className="grow" href="/about">About</a>
            </li>
            <li>
                <a className="grow" href="/projects">Projects</a>
            </li>
            <li>
                <a className="grow" href="/resume">Resume</a>
            </li>
            <li>
                <a className="grow" href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
  );
};

export default sidebar;
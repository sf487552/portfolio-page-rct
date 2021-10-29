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
};

export default sidebar;
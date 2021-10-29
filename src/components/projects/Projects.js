import React from 'react';
import '../projects/projects.css';
import image1 from '../images/mysite1.jpg'
import image2 from '../images/website image.jpg'



function Projects() {
    return (
        <div className="container">
            <img className="grow" src={image1} alt="site1"></img>
            <img className="grow" src={image2} alt="site2"></img>
            <img className="grow" src={image1} alt="site3"></img>
            <img className="grow" src={image1} alt="site4"></img>
            <img className="grow" src={image1} alt="site5"></img>
        </div>
    );
}

export default Projects;
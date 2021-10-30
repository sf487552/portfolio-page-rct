import React from 'react';
import '../projects/projects.css';
import image1 from '../images/musicsite2.jpg';
import image2 from '../images/fitnessapp.jpg';
import image3 from '../images/cocktailquiz.jpg';
import image4 from '../images/weatherdash.jpg';
import image5 from '../images/notetaker.jpg';



function Projects() {
    return (
        <div className="container">
            <img className="grow" src={image1} alt="site1"></img>
            <img className="grow" src={image2} alt="site2"></img>
            <img className="grow" src={image3} alt="site3"></img>
            <img className="grow" src={image4} alt="site4"></img>
            <img className="grow" src={image5} alt="site5"></img>
        </div>
    );
}

export default Projects;
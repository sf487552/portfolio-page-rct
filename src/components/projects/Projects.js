import React from 'react';
import '../projects/projects.css';
import image1 from '../images/musicsite2.jpg';
import image2 from '../images/fitnessapp.jpg';
import image3 from '../images/cocktailquiz.jpg';
import image4 from '../images/weatherdash.jpg';
import image5 from '../images/notetaker.jpg';



function Projects() {
    return (
        <div>
            <header></header>
            <div className="container">

                <div className="grow project">
                    <img className="image" src={image1} alt="site1"></img>
                    <div className="overlay">
                        <h1 className="text"><a id="link" href="https://sf487552.github.io/Music-Site/#about">Music Artist Page</a></h1>
                        <p className="description">This project was made using raw HTML, CSS, Javascript, and JQuery. It's a clean, easy-to-use, mobile friendly artist fan page made by yours truly.</p>
                    </div>
                </div>

                <div className="project grow">
                    <img className="image" src={image2} alt="site2"></img>
                    <div className="overlay"></div>
                </div>

                <div className="project grow">
                    <img className="image" src={image3} alt="site3"></img>
                    <div className="overlay"></div>
                </div>

                <div className="project grow">
                    <img className="image" src={image4} alt="site4"></img>
                    <div className="overlay"></div>
                </div>

                <div className="project grow">
                    <img className="image" src={image5} alt="site5"></img>
                    <div className="overlay"></div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
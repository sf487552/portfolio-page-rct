import React from 'react';
import '../projects/projects.css';
import image1 from '../images/musicsite2.jpg';
import image2 from '../images/fitnessapp.jpg';
import image3 from '../images/cocktailquiz.jpg';
import image4 from '../images/weatherdash.jpg';
import image5 from '../images/notetaker.jpg';

function Projects() {
    return (
        <div className="projects">
            <div id="p1" className="wrapper">
                <img id="one" className="grow pic shadow" alt="Avatar1" src={image1}></img>
                <div id="two">
                    <h1><a id="link" href="https://sf487552.github.io/Music-Site/#about">Artist Fan Page</a></h1>
                    <h1><a id="link" href="https://github.com/sf487552/Music-Site">Github Repo</a></h1>
                    <p>This project was made using raw HTML, CSS, Javascript, and JQuery as well as Adobe Illustrator. It's a clean, easy-to-use, mobile friendly artist fan page made by yours truly. Google Tag Manager has also been added this page to track the user interactions in it.</p>
                </div>
            </div>
            <div id="p2" className="wrapper">
                <img id="one" className="grow pic shadow" alt="Avatar2" src={image2}></img>
                <div id="two">
                    <h1><a id="link" href="https://fast-anchorage-27962.herokuapp.com/?id=617d346ba14bb1001679385c">Fitness App</a></h1>
                    <h1><a id="link" href="https://github.com/sf487552/Workout-Tracker">Github Repo</a></h1>
                    <p>This project showcases my skills using MongoDB with a Mongoose Schema and Express Routes. The site has been deployed using Heroku and MongoDB Atlas. Google Tag Manager has also been added this page to track the user interactions in it.</p>
                </div>
            </div>
            <div id="p3" className="wrapper">
                <img id="one" className="grow pic shadow" alt="Avatar3" src={image3}></img>
                <div id="two">
                    <h1><a id="link" href="https://sf487552.github.io/Group-Project-1/">Trivia and Cocktails</a></h1>
                    <h1><a id="link" href="https://github.com/sf487552/Group-Project-1">Github Repo</a></h1>
                    <p>This was a group project which was worked on with 2 other people. It uses 2 different public APIs. One for quiz questions and another that generates random cocktails with receipes to go with them. This app was made using Javascript, JQuery, HTML, CSS, and it uses client-side storage to store persistent data. </p>
                </div>
            </div>
            <div id="p4" className="wrapper">
                <img id="one" className="grow pic shadow" alt="Avatar4" src={image4}></img>
                <div id="two">
                    <h1><a id="link" href="https://sf487552.github.io/Weather-Dashboard/">Weather Dash</a></h1>
                    <h1><a id="link" href="https://github.com/sf487552/Weather-Dashboard">Github Repo</a></h1>
                    <p>This project was made using Third Party APIs along with HTML, CSS, and Javascript while using localStorage to store persistant data. Google Tag Manager has also been added this page to track the user interactions in it.</p>
                </div>
            </div>
            <div id="p5" className="wrapper">
                <img id="one" className="grow pic shadow" alt="Avatar5" src={image5}></img>
                <div id="two">
                    <h1><a id="link" href="https://note-taker-sf.herokuapp.com/">Note Taker</a></h1>
                    <h1><a id="link" href="https://github.com/sf487552/note-taker-sf">Github Repo</a></h1>
                    <p>This project showcases more of my skills with Express JS on the Back End portion which saves and retrieves data from a Json file. I created the backnend and connected it to the front. Google Tag Manager has also been added this page to track the user interactions in it.</p>
                </div>
            </div>
        </div>

    );
}

export default Projects;





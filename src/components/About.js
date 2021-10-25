import React from 'react';
import './style.css';
import mainimg from '../components/images/website image.jpg';

function About() {
    return (
        <div id="about">
            <header>
                <img className="grow logo" alt="home button" src="images/Asset 5.png" />
            </header>
            <div className="homepage display"/>
                <div className="fade">
                    <div className="Containers">
                        <img id="mainimg" className="centered shadow" alt="me" src={mainimg} />
                    </div>
                </div>
                <p>"I am a Full Stack Web Developer who is focused on creating unique and intuitive experiences
                    for all types of users. I am currently earning my certification in full stack development at the University of Pennsylvania where I have cultivated my skills in Javascript, CSS, and HTML. Years of creative problem solving have helped me to develop a unique perspective which allows me to develop original, eye-catching and intuitively designed web tools that keeps users engaged. Creative design projects come naturally to me thanks to the skills I’ve developed as a successful artist, music producer, and sound engineer with a diverse portfolio of projects that have seen success across the globe in over 85 different countries. My communication skills have also blossomed over the years as I've created a body work that translates easily and can be enjoyed by a diverse audience from all walks of life. I look forward to using my unique skills to develop innovative web pages and platforms for my users!"
                </p>
        </div>
    );
}

export default About;
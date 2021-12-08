import React, { useEffect } from 'react';
// import mainimg from '../images/stevespic.jpg';
import '../about/about.css';
import { useLocation } from "react-router-dom";

function About() {
    const location = useLocation()
    useEffect(() => {
        window._analytics?.trackPageView(location.pathname);
    },[location])
    return (
        <div id="about" className="container">
            <h1 id="intro">Hi, I'm Steve.</h1>
                <p className="subtitle">
                    I'm a Full Stack Web Developer who is focused on creating unique and intuitive experiences for all types of users. I work primarily in HTML, CSS, and Javascript which I use alongside technologies such as Node JS, Express, server side and third party API's, mySQL, MongoDB, Mongoose, Apollo, React, Jquery, Bootstrap, Handlebars, and I'm constantly adding more to my toolbox every week.
                    Years of creative problem solving has given me a unique perspective of the world which allows me to develop original, eye-catching and intuitively designed web tools that keeps users engaged. I also have about a decade's worth of high level management experience as well as a proven record of creative work that has been enjoyed in over 90 different countries around the world. I'm a quick and intuitive learner who always finds creative and innovative ways to get the job done. I pride myself on always seeing things in a truly unique way and I love to innovate and experiment with new technologies and techniques.
                </p>
        </div>
    );
}

export default About;
import React from 'react';
import '../resume/resume.css';
import name from '../images/name.jpg';
import edu from '../images/edu.jpg';
import skillss from '../images/skillss.jpg';
import summary from '../images/summary.jpg';

function Resume() {
    return (
        <div className="myResume " id="resume">
            <h1 className="resumelink grow"><a id="link" href="https://drive.google.com/file/d/1wP0HTQ9Yubkj3x3Fgdc53hmEcj4o1ssz/view?usp=sharing">SEE FULL RESUME HERE</a></h1>
            <div id="p1" className="wrapper2">
                <img id="three" className="grow pic shadow" alt="Avatar1" src={name}></img>
                <img id="four"className="grow pic shadow" alt="Avatar1" src={edu}></img>
            </div>
            <div id="p1" className="wrapper">
                <img id="five" className="grow pic shadow" alt="Avatar1" src={summary}></img>
                <img id="six"className="grow shadow" alt="Avatar1" src={skillss}></img>
            </div>

        </div>
    );
}

export default Resume;
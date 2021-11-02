import React from 'react';
import '../resume/resume.css';

function Resume() {
	return (
        <div className="myResume " id="resume">
            <div class="topSection wrapper">
                <div id="myID">
                    <h1 className="name text-shadow">Steven Demosthenis Fokas</h1>
                    <h2>Email: steven.fokas89@gmail.com<br/>
                    Phone: 1(610)-653-0662</h2>
                    <h3>
                        1100 S Broad Street 516C
                        <br/>Philadelphia PA 19146
                    </h3>
                </div>
                <div id="edu">
                    <div className="school">
                        <h2 className="name text-shadow">University of Pennsylvania 2021</h2>
                        <p>Certification in Full Stack Web Development</p>
                            <br/>
                        <h2 className="name text-shadow">Saint Joseph's University 2012</h2>
                        <p>Bachelors in Marketing from the Haub School of Business</p>
                    </div>
                </div>
            </div>
            <div className="midSection wrapper">    
                <div className="skills">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="skills">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
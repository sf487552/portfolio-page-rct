import React from 'react';
import '../resume/resume.css';

function Resume() {
	return (
        <div className="card-column centered" id="resume">
            <figure className="card code-card">
                <h2 className="card-header">Resume</h2>
                <div className="card-body">
                    <i className="menu"></i>
                    <a className="view-resume"
                        href="https://docs.google.com/document/d/1gU-R_xrsGzjy3LKaFQup1oYX_ipGa3HljVCatWf2Bpc/edit?usp=sharing"
                        target="_blank" rel="noreferrer">Click To View
                    </a>
                </div>
            </figure>
        </div>
    );
}

export default Resume;
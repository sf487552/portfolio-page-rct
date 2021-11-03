import './home.css';
import React from 'react';
import mainimg from '../images/me.jpg';
import {
    Link
} from "react-router-dom";


function Home() {
    return (
        <div className="container">
            <div className="home">
                <img className="image grow shadow" src={mainimg} alt="mainImg"></img>
                <div className="overlay shadow">
                    <Link to="/about"><h1 className="text">Let me tell you a little bit about myself..</h1></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
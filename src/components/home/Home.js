import './home.css';
import React, { useEffect } from 'react';
import mainimg from '../images/me.jpg';
import {
    Link, useLocation
} from "react-router-dom";



function Home() {
    const location = useLocation()
    useEffect(() => {
        window._analytics?.trackPageView(location.pathname);
    },[location])
    return (
        <div className="container">
            <div className="home grow">
                <img className="image shadow" src={mainimg} alt="mainImg"></img>
                <div className="overlay shadow">
                    <Link to="/about"><h1 className="text">Let me tell you a little bit about myself..</h1></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
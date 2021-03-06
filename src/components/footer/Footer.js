import React from 'react';
import '../footer/footer.css'

function Footer() {
	return (
        <footer className="foot">
            <div id="social-icons" className="socialMain">
                <ul className="social">
                    <li><a id="social-icons shadow" className="slink" href="https://www.linkedin.com/in/steven-fokas-01933849/"><i className="grow fa fa-linkedin" aria-hidden="true"></i> </a></li>               
                    <li><a id="social-icons shadow" className="slink" href="https://github.com/sf487552"><i className="grow fa fa-github" aria-hidden="true"></i> </a></li>
                    <li><a id="social-icons shadow" className="slink" href="mailto:steven.fokas89@gmail.com"><i className="grow fa fa-envelope" aria-hidden="true"></i> </a></li>
                    <li><a id="social-icons shadow" className="slink" href="tel:610-653-0662"><i className="grow fa fa-phone" aria-hidden="true"></i> </a></li> 
                </ul>
                <script src="script.js"></script>
            </div>
        </footer>
    );
}

export default Footer;
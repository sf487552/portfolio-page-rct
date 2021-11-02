import React from 'react';
import '../footer/footer.css';
import '../contact/contact.css'

function Contact() {
    return (
        <div className="contactMe">
            <div id="social-icons" className="social">
                <h1 className="title">
                    Contact me here!
                </h1>
                <div className="contacts">
                    <a className="grow shadow social-icon" data-tooltip="steven.fokas89@gmail.com" href="mailto:steven.fokas89@gmail.com">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                
                    <a className="grow shadow social-icon" data-tooltip="GitHub" href="https://github.com/sf487552">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                
                    <a className="grow shadow social-icon" data-tooltip="LinkedIn" href="https://www.linkedin.com/in/steven-fokas-01933849/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>

                    <a className="grow shadow social-icon" data-tooltip="+1-610-653-0662" href="tel:610-653-0662">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                </div>
                <script src="script.js"></script>
            </div>
        </div>
    );
}

export default Contact;